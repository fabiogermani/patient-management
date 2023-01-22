import { CountSection } from '../components/CountSection'
import { Header } from '../components/Header'
import { Pagination } from '../components/Pagination'
import { SearchSection } from '../components/SearchSection'
import { Sidebar } from '../components/Sidebar'
import { Table } from '../components/Table'
import { Content, HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Sidebar />

      <Content>
        <Header />
        <CountSection />
        <SearchSection />
        <Table />
        <Pagination />
      </Content>
    </HomeContainer>
  )
}
