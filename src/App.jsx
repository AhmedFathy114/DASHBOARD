import { useRoutes } from 'react-router-dom'
import './App.css'
import { routes } from './Routes'
function App() {
    const elements = useRoutes(routes);
    return elements;
}

export default App
