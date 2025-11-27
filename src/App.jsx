import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import { useRoutes } from 'react-router-dom'
import Routes from './Routes.jsx'
function App() {
  const element= useRoutes(Routes);
  return element;
  }

  export default App