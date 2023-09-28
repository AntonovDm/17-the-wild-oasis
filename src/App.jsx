import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

const StyledApp = styled.div`
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>The Wild Oasis</StyledApp>
    </>
  )
}

export default App
