import { createRoot } from 'react-dom/client'
import { Change } from './components/Change.jsx'
import movies from './components/movies.jsx'
import './index.css'

console.log(movies);

createRoot(document.getElementById('root')).render(
  <Change />
)