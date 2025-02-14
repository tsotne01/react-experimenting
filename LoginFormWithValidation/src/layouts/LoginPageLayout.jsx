import "../css/LoginPageLayout.css";

// eslint-disable-next-line react/prop-types
function LoginPageLayout({children}) {
  return (
   <div className="main__wrapper">
     {children}
   </div>
  )
}

export default LoginPageLayout