import './App.css'
import { ContentArea } from './components/content-area/ContentArea'
import Profile from './components/profile/Profile'

function App() {

  return (
    <div className="app-container">
      <div className='left-side'>
        <Profile/>
      </div>
      <div className='right-side'>
        <ContentArea/>
      </div>
    </div>
  )
}

export default App