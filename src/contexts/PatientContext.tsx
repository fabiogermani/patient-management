import { createContext, ReactNode, useState } from 'react'
import { api } from '../lib/axios'
import { v4 as uuidv4 } from 'uuid'
import { generateColor } from '../utils/colorGenerator'
import { getNameInitials } from '../utils/getNameInitials'
import { capitalize } from '../utils/capitalize'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export interface Patient {
  id: string
  profileImage: {
    initials: string
    color: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  }
  name: string
  dateOfBirth: string
  identity: string
  gender: 'male' | 'female'
  address: string
  status: 'active' | 'inactive'
  createdAt: string
}

interface RegisterPatientProps {
  name: string
  dateOfBirth: string
  identity: string
  gender: 'male' | 'female'
  address?: string
}

interface PatientContextType {
  patients: Patient[]
  decreasePageCount: () => void
  increasePageCount: () => void
  currentPage: number
  totalPagesCount: number
  getPatients: (query: string, order?: string) => void
  activePatient: (patientId: string) => void
  inactivePatient: (patientId: string) => void
  registerPatient: (
    patient: RegisterPatientProps,
  ) => Promise<void | { error: string }>
  editPatient: (patient: Patient) => Promise<void | { error: string }>
}

export const PatientContext = createContext({} as PatientContextType)

interface PatientContextProviderProps {
  children: ReactNode
}

export const patientsPerPage = 5

export function PatientContextProvider({
  children,
}: PatientContextProviderProps) {
  const [patients, setpatients] = useState<Patient[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPagesCount, setTotalPagesCount] = useState(1)

  function decreasePageCount() {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1)
    }
  }

  function increasePageCount() {
    if (currentPage !== totalPagesCount) {
      setCurrentPage((state) => state + 1)
    }
  }

  function getPatients(query: string, order = 'asc') {
    api
      .get('/patients', {
        params: {
          _sort: 'createdAt',
          _order: order,
          q: query,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setpatients(data)
        setTotalPagesCount(Math.ceil(data.length / patientsPerPage))
      })
  }

  function activePatient(patientId: string) {
    api
      .get(`/patients?id=${patientId}`)
      .then((response) => response.data[0])
      .then((patient) => {
        patient.status = 'active'

        api
          .put(`/patients/${patientId}`, {
            ...patient,
          })
          .then((response) => {
            getPatients('')
          })
      })
  }

  function inactivePatient(patientId: string) {
    api
      .get(`/patients?id=${patientId}`)
      .then((response) => response.data[0])
      .then((patient) => {
        patient.status = 'inactive'

        api
          .put(`/patients/${patientId}`, {
            ...patient,
          })
          .then((response) => {
            getPatients('')
          })
      })
  }

  async function checkIfIdentityAlreadyExists(identity: string) {
    const response = await api.get(`/patients?identity=${identity}`)
    const patient = response.data[0]
    if (patient) {
      return patient.identity
    }
    return false
  }

  async function registerPatient(patient: RegisterPatientProps) {
    const identityAlreadyExists = await checkIfIdentityAlreadyExists(
      patient.identity,
    )
    if (identityAlreadyExists) {
      toast.error('CPF já existe', {
        position: 'top-center',
        autoClose: 2000,
      })
      return { error: 'CPF já existe' }
    }

    const newPatientObj = {
      id: uuidv4(),
      profileImage: {
        initials: getNameInitials(patient.name),
        color: generateColor(),
      },
      name: capitalize(patient.name),
      dateOfBirth: patient.dateOfBirth,
      identity: patient.identity,
      gender: patient.gender,
      address: patient.address ? capitalize(patient.address) : '',
      status: 'active',
      createdAt: new Date().toISOString(),
    }

    await api.post('/patients', {
      ...newPatientObj,
    })

    toast.success('Paciente registrado!', {
      position: 'top-center',
      autoClose: 2000,
    })

    getPatients('')
  }

  async function editPatient(patient: Patient) {
    const response = await api.get(`/patients?id=${patient.id}`)
    const existingPatient = response.data[0]
    console.log(existingPatient)

    const identityAlreadyExists = await checkIfIdentityAlreadyExists(
      patient.identity,
    )
    if (
      identityAlreadyExists &&
      identityAlreadyExists !== existingPatient.identity
    ) {
      toast.error('CPF já existe', {
        position: 'top-center',
        autoClose: 2000,
      })
      return { error: 'CPF já existe' }
    }

    const updatedExistingPatient = {
      id: existingPatient.id,
      profileImage: {
        initials: getNameInitials(patient.name),
        color: existingPatient.profileImage.color,
      },
      name: capitalize(patient.name),
      dateOfBirth: patient.dateOfBirth,
      identity: patient.identity,
      gender: patient.gender,
      address: patient.address ? capitalize(patient.address) : '',
      status: existingPatient.status,
      createdAt: existingPatient.createdAt,
    }

    await api.put(`/patients/${existingPatient.id}`, {
      ...updatedExistingPatient,
    })

    toast.success('Paciente atualizado!', {
      position: 'top-center',
      autoClose: 2000,
    })

    getPatients('')
  }

  return (
    <PatientContext.Provider
      value={{
        patients,
        decreasePageCount,
        increasePageCount,
        currentPage,
        totalPagesCount,
        getPatients,
        activePatient,
        inactivePatient,
        registerPatient,
        editPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  )
}
