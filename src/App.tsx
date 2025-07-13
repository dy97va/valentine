import './App.css'
import { ContentArea } from './components/content-area/ContentArea'
import  ContactInfo from './components/ContactInfo/ContactInfo'
import Profile from './components/profile/Profile'

function App() {

  return (
    <div className="app-container">
      <div className='badge'>
        <Profile/>
      </div>
      <div className='content-wrapper'>
        <div className='left-side-spacer'></div>
        <div className='left-side'>
          <ContactInfo/>
        </div>
        <div className='right-side'>
          <ContentArea/>
        </div>
      </div>
    </div>
  )
}

export default App