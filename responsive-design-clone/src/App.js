import {useState} from 'react'
import './App.css';

function App() {

const [isMenuOpen, setIsMenuOpen] = useState(false)

function toggleMenu() {
  setIsMenuOpen(!isMenuOpen)
}


  return (
    <div className="App">
      <header className="header">
        <h3 className='title'>Start Bootstrap</h3>
        <nav className='nav-bar'>
          <p className='nav-item'>SERVICES</p>
          <p className='nav-item'>PORTFOLIO</p>
          <p className='nav-item'>ABOUT</p>
          <p className='nav-item'>TEAM</p>
          <p className='nav-item'>CONTACT</p>
        </nav>
        <img className='hamburger' 
        onClick={toggleMenu}
        src='https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/119-512.png' />
        <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
          <p className='mobile-nav-item'>SERVICES</p>
          <p className='mobile-nav-item'>PORTFOLIO</p>
          <p className='mobile-nav-item'>ABOUT</p>
          <p className='mobile-nav-item'>TEAM</p>
          <p className='mobile-nav-item'>CONTACT</p>
          </nav>      
      </header>
      <body className='body'>
        <p className='welcome'>Welcome To Our Studio!</p>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button className='more'>TELL ME MORE</button>
      </body>
    </div>
  );
}

export default App;
