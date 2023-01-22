import {
  SortButtonsContainer,
  SearchSectionContainer,
  SortButton,
} from './styles'

import { MagnifyingGlass } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { PatientContext } from '../../contexts/PatientContext'

export function SearchSection() {
  const { getPatients } = useContext(PatientContext)
  const [searchString, setSearchString] = useState('')
  const [mostRecentOn, setMostRecentOn] = useState(true)
  const [lastRecentOn, setLastRecentOn] = useState(false)

  useEffect(() => {
    getPatients(searchString)
  }, [searchString])

  function handleInputChange(e: any) {
    setSearchString(e.target.value)
  }

  function handleSortByMostRecent() {
    setMostRecentOn(true)
    setLastRecentOn(false)
    getPatients('', 'asc')
  }

  function handleSortByLastRecent() {
    setMostRecentOn(false)
    setLastRecentOn(true)
    getPatients('', 'desc')
  }

  return (
    <SearchSectionContainer>
      <SortButtonsContainer>
        <SortButton on={mostRecentOn} onClick={handleSortByMostRecent}>
          Mais Recente
        </SortButton>

        <SortButton on={lastRecentOn} onClick={handleSortByLastRecent}>
          Menos Recente
        </SortButton>
      </SortButtonsContainer>
      <div>
        <span>
          <MagnifyingGlass size={20} weight="bold" />
        </span>
        <input
          onChange={handleInputChange}
          type="search"
          placeholder="Pesquise por nome..."
        />
      </div>
    </SearchSectionContainer>
  )
}
