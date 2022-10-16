import "./register.css"

function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo logoFont">M_i_x_U_p</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on <span className="logoFont">M_i_x_U_p</span>. . 
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" type='password' className="loginInput" />
                    <input placeholder="Confirm Password" type='password' className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log In to your existing account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register