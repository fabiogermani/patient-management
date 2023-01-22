import Image from 'next/image'
import { BottomList, Profile, SidebarContainer, TopList } from './styles'

import logoImg from '../../assets/logo.png'
import perfilImg from '../../assets/perfil.jpg'

import {
  House,
  SquaresFour,
  Stack,
  ListChecks,
  ChartPie,
  UserCircle,
  Bell,
  ChatsCircle,
  Faders,
} from 'phosphor-react'

export function Sidebar() {
  return (
    <SidebarContainer>
      <TopList>
        <Image src={logoImg} width="100" alt="" />
        <ul>
          <li>
            <House size={20} weight="bold" />
            Home
          </li>
          <li>
            <SquaresFour size={20} weight="bold" />
            Dashboard
          </li>
          <li>
            <Stack size={20} weight="bold" />
            Projetos
          </li>
          <li>
            <ListChecks size={20} weight="bold" />
            Tarefas
          </li>
          <li>
            <ChartPie size={20} weight="bold" />
            Relatórios
          </li>
          <li>
            <UserCircle size={20} weight="bold" />
            Usuários
          </li>
        </ul>
      </TopList>

      <BottomList>
        <ul>
          <li>
            <Bell size={20} weight="bold" />
            Notificações
          </li>
          <li>
            <ChatsCircle size={20} weight="bold" />
            Suporte
          </li>
          <li>
            <Faders size={20} weight="bold" />
            Configurações
          </li>
        </ul>
        <Profile>
          <Image src={perfilImg} width={35} height={35} alt="" />
          <div>
            <h3>Marcos Santos</h3>
            <span>Gerente Geral</span>
          </div>
        </Profile>
      </BottomList>
    </SidebarContainer>
  )
}
