import { useContext } from 'react'
import { PatientContext } from '../../contexts/PatientContext'
import { PaginationContainer } from './styles'

export function Pagination() {
  const { decreasePageCount, increasePageCount, currentPage, totalPagesCount } =
    useContext(PatientContext)

  function handleDecreaseCount() {
    decreasePageCount()
  }

  function handleIncreaseCount() {
    increasePageCount()
  }

  return (
    <PaginationContainer>
      <button onClick={handleDecreaseCount}>Anterior</button>
      <div>
        Página {totalPagesCount === 0 ? totalPagesCount : currentPage} de{' '}
        {totalPagesCount}
      </div>
      <button onClick={handleIncreaseCount}>Próximo</button>
    </PaginationContainer>
  )
}
