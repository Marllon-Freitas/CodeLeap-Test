import { BrowserRouter } from 'react-router-dom'
import Pages from './pages'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Pages />
    </BrowserRouter>
  )
}

export default App
