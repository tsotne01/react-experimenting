import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import LoginPageLayout from './layouts/LoginPageLayout'

function App() {

  return (
    <>
    <LoginPageLayout>
      <Header />
      <Main />
      <Footer/>
    </LoginPageLayout>
    </>
  )
}

export default App
