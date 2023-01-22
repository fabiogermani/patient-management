import { useContext } from 'react'
import { PatientContext } from '../../contexts/PatientContext'
import { CountCard } from './components/CountCard'
import { CountSectionContainer } from './styles'

export function CountSection() {
  const { patients } = useContext(PatientContext)

  const totalPatients = String(patients.length)
  const activePatients = String(
    patients.filter((patient) => {
      return patient.status === 'active'
    }).length,
  )
  const inactivePatients = String(
    patients.filter((patient) => {
      return patient.status === 'inactive'
    }).length,
  )

  const activePatientsPercentage = String(
    Math.round((Number(activePatients) * 100) / Number(totalPatients)),
  )
  const inactivePatientsPercentage = String(
    100 - Number(activePatientsPercentage),
  )

  return (
    <CountSectionContainer>
      <CountCard
        title="Pacientes Totais"
        type="total"
        value={totalPatients}
        percentage="100"
      />
      <CountCard
        title="Pacientes Ativos"
        type="active"
        value={activePatients}
        percentage={activePatientsPercentage}
      />
      <CountCard
        title="Pacientes Inativos"
        type="inactive"
        value={inactivePatients}
        percentage={inactivePatientsPercentage}
      />
    </CountSectionContainer>
  )
}
