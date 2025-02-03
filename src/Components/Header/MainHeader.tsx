import { Link } from "react-router-dom"
import Logo from "../Buttons/Logo"




const MainHeader = () => {
    return (
      <header className="App-header">
        <div style={{maxWidth:'10vw', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <p>Click me !</p>
          <Logo style={{
                marginTop: '-4vh',
                height: "80%",
                width: "80%", 
                }}/>
        </div>
      
          <div className="nav-container">
            <nav>
              <ul>
                <li>
                  <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                  <Link to="/displayUsers" style={{ color: 'white', textDecoration: 'none' }}>Display Users</Link>
                </li>
              </ul>
            </nav>
          </div>
      </header>
    )}


export default MainHeader