import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Form,
  GenderContainer,
  GenderOption,
  InputContainer,
  Message,
  Overlay,
} from './styles'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext } from 'react'
import { Patient, PatientContext } from '../../contexts/PatientContext'

const AddOrEditPatientModalSchema = z.object({
  name: z
    .string()
    .min(8, { message: 'Mínimo de 8 caracteres.' })
    .max(50, { message: 'Máximo de 50 caracteres.' }),
  dateOfBirth: z
    .string()
    .regex(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/, {
      message: 'Utilize o formato DD/MM/AAAA',
    }),
  identity: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'Utilize o formato 000.000.000-00',
  }),
  address: z
    .string()
    .max(50, { message: 'Máximo de 50 caracteres.' })
    .optional(),
  gender: z.enum(['male', 'female']),
})

type AddOrEditPatientModalSchemaType = z.infer<
  typeof AddOrEditPatientModalSchema
>

interface AddOrEditPatientModalProps {
  type: 'add' | 'edit'
  patient?: Patient
}

export function AddOrEditPatientModal({
  type,
  patient,
}: AddOrEditPatientModalProps) {
  const { registerPatient, editPatient } = useContext(PatientContext)

  const {
    register,
    handleSubmit,
    control,
    reset,
    resetField,
    formState: { errors },
  } = useForm<AddOrEditPatientModalSchemaType>({
    resolver: zodResolver(AddOrEditPatientModalSchema),
    defaultValues: !patient
      ? {}
      : {
          name: patient.name,
          dateOfBirth: patient.dateOfBirth,
          identity: patient.identity,
          address: patient.address,
          gender: patient.gender,
        },
  })

  async function handleRegisterPatient(
    patient: AddOrEditPatientModalSchemaType,
    e: any,
  ) {
    e.preventDefault()

    const error = await registerPatient(patient)
    resetField('identity')
    if (!error) {
      reset()
    }
  }

  async function handleEditPatient(
    updatedPatient: AddOrEditPatientModalSchemaType,
    e: any,
  ) {
    const patientObj = {
      id: patient!.id,
      profileImage: {
        initials: patient!.profileImage.initials,
        color: patient!.profileImage.color as
          | '1'
          | '2'
          | '3'
          | '4'
          | '5'
          | '6'
          | '7'
          | '8'
          | '9',
      },
      name: updatedPatient.name,
      dateOfBirth: updatedPatient.dateOfBirth,
      identity: updatedPatient.identity,
      address: updatedPatient.address ? updatedPatient.address : '',
      gender: updatedPatient.gender as 'male' | 'female',
      status: patient!.status as 'active' | 'inactive',
      createdAt: patient!.createdAt,
    }

    const error = await editPatient(patientObj)
    if (error) {
      resetField('identity')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Dialog.Content>
        <Form
          onSubmit={
            type === 'add'
              ? handleSubmit(handleRegisterPatient)
              : handleSubmit(handleEditPatient)
          }
        >
          <CloseButton>
            <X size={24} weight="bold" />
          </CloseButton>
          <h2>{type === 'add' ? 'Cadastrar Paciente' : 'Editar Paciente'}</h2>

          <InputContainer>
            <Message disabled={errors.name ? 'false' : 'true'}>
              {(errors.name && errors.name.message) || '.'}
            </Message>

            <input {...register('name')} name="name" placeholder="Nome" />
          </InputContainer>

          <InputContainer>
            <Message disabled={errors.dateOfBirth ? 'false' : 'true'}>
              {(errors.dateOfBirth && errors.dateOfBirth.message) || '.'}
            </Message>

            <input
              {...register('dateOfBirth')}
              name="dateOfBirth"
              placeholder="Data de Nascimento"
            />
          </InputContainer>

          <InputContainer>
            <Message disabled={errors.identity ? 'false' : 'true'}>
              {(errors.identity && errors.identity.message) || '.'}
            </Message>
            <input
              {...register('identity')}
              name="identity"
              placeholder="CPF"
            />
          </InputContainer>

          <InputContainer>
            <Message disabled={errors.address ? 'false' : 'true'}>
              {(errors.address && errors.address.message) || '.'}
            </Message>
            <input
              {...register('address')}
              name="address"
              placeholder="Endereço (opcional)"
            />
          </InputContainer>

          <Controller
            name="gender"
            control={control}
            render={({ field }) => {
              return (
                <GenderContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <GenderOption value="male">Masculino</GenderOption>
                  <GenderOption value="female">Feminino</GenderOption>
                </GenderContainer>
              )
            }}
          />
          <Message disabled={errors.gender ? 'false' : 'true'}>
            Selecione o sexo
          </Message>

          <button className="submitButton">
            {type === 'add' ? 'Cadastrar' : 'Salvar'}
          </button>
        </Form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
