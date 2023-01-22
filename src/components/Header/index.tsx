import { Plus, CloudArrowUp } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { AddButton, ImportButton, List, TopContainer } from './styles'
import { AddOrEditPatientModal } from '../AddOrEditPatientModal'

export function Header() {
  return (
    <header>
      <TopContainer>
        <h1>Pacientes</h1>
        <div>
          <ImportButton>
            <CloudArrowUp size={20} weight="bold" />
            Importar
          </ImportButton>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <AddButton>
                <Plus size={20} weight="bold" />
                Add Paciente
              </AddButton>
            </Dialog.Trigger>
            <AddOrEditPatientModal type="add" />
          </Dialog.Root>
        </div>
      </TopContainer>
      <List>
        <li>Overview</li>
        <li>Equipe</li>
        <li>Cronograma</li>
        <li>Estatísticas</li>
        <li>Performance</li>
      </List>
    </header>
  )
}
