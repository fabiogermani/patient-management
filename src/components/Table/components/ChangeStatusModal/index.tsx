import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useContext } from 'react'
import { PatientContext } from '../../../../contexts/PatientContext'
import {
  ActiveButton,
  ButtonsContainer,
  CancelButton,
  Content,
  Description,
  InactiveButton,
  Overlay,
  Title,
} from './styles'

interface ChangeStatusModalProps {
  type: 'active' | 'inactive'
  patientId: string
}

export function ChangeStatusModal({ type, patientId }: ChangeStatusModalProps) {
  const { activePatient, inactivePatient } = useContext(PatientContext)

  function handleActivePatient(e: any) {
    activePatient(patientId)
  }

  function handleInactivePatient(e: any) {
    inactivePatient(patientId)
  }

  return (
    <AlertDialog.Portal>
      <Overlay />
      <Content>
        <Title>{type === 'active' ? 'Inativar' : 'Ativar'} Paciente</Title>
        <Description>
          Gostaria de {type === 'active' ? 'Inativar' : 'Ativar'} esse paciente?
        </Description>
        <ButtonsContainer>
          <CancelButton>Cancelar</CancelButton>
          {type === 'active' ? (
            <InactiveButton onClick={handleInactivePatient}>
              Inativar
            </InactiveButton>
          ) : (
            <ActiveButton onClick={handleActivePatient}>Ativar</ActiveButton>
          )}
        </ButtonsContainer>
      </Content>
    </AlertDialog.Portal>
  )
}
