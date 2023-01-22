import * as Dialog from '@radix-ui/react-dialog'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { PencilLine } from 'phosphor-react'
import { AddOrEditPatientModal } from '../AddOrEditPatientModal'

import { Badge } from '../Badge'
import { ProfileImage } from '../ProfileImage'
import { Td } from './components/Td'
import { Th } from './components/Th'
import { Tr } from './components/Tr'
import { TableContainer, TableBox, Thead, Tbody, BadgeButton } from './styles'
import { ChangeStatusModal } from './components/ChangeStatusModal'
import { useContext, useEffect } from 'react'
import { PatientContext, patientsPerPage } from '../../contexts/PatientContext'

export function Table() {
  const { patients, getPatients, currentPage } = useContext(PatientContext)

  const limitedPatients = patients.slice(
    patientsPerPage * (currentPage - 1),
    patientsPerPage * currentPage,
  )

  useEffect(() => {
    getPatients('')
  }, [])

  return (
    <TableContainer>
      <TableBox>
        <Thead>
          <Tr type="head">
            <Th w="2">Nome</Th>
            <Th w="1">Nascimento</Th>
            <Th w="1">CPF</Th>
            <Th w="1">Sexo</Th>
            <Th w="2">Endereço</Th>
            <Th w="1">Status</Th>
            <Th w="1"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {limitedPatients.map((patient) => {
            return (
              <Tr key={patient.id}>
                <Td name="true" w="2">
                  <ProfileImage color={patient.profileImage.color}>
                    {patient.profileImage.initials}
                  </ProfileImage>
                  {patient.name}
                </Td>
                <Td>{patient.dateOfBirth}</Td>
                <Td>{patient.identity}</Td>
                <Td>{patient.gender === 'male' ? 'masculino' : 'Feminino'}</Td>
                <Td w="2" empty={!patient.address ? 'true' : 'false'}>
                  {!patient.address ? 'Não informado' : patient.address}
                </Td>
                <Td>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                      <BadgeButton>
                        <Badge
                          content={
                            patient.status === 'active' ? 'Ativo' : 'Inativo'
                          }
                          type={
                            patient.status === 'active' ? 'active' : 'inactive'
                          }
                        />
                      </BadgeButton>
                    </AlertDialog.Trigger>
                    <ChangeStatusModal
                      patientId={patient.id}
                      type={patient.status === 'active' ? 'active' : 'inactive'}
                    />
                  </AlertDialog.Root>
                </Td>
                <Td>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <PencilLine size={20} weight="bold" />
                    </Dialog.Trigger>
                    <AddOrEditPatientModal type="edit" patient={patient} />
                  </Dialog.Root>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </TableBox>
    </TableContainer>
  )
}
