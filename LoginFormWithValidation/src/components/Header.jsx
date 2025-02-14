import logo from "../assets/logo.svg"
import "../css/Header.css"

function Header() {
  return (
   <header className="login-header">
    <img src={logo} alt="logo" className="login-logo" />
   </header>
  )
}

export default Header