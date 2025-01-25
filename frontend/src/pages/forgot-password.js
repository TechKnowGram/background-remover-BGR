import React from 'react'

function Forgotpassword() {
  return (
    <div>
      <div className="create-acount">
        <div className="container">
          <div className="account-form">
            <h1>Forgot password?</h1>
            <h6 className="mb-4">Enter the email associated with your account and we'll send an email with instructions to
              reset your password.</h6>
            <form method="POST" acceptCharset="utf-8" name="login-registration-form" id="user_forgot_password_form" className="login-registration-form">
              <div className="form-group input-group">
                <label htmlFor="fp_email">Enter your registered email address</label>
                <input type="text" name="fp_email" id="fp_email" placeholder="Email" />
              </div>
              <div className="form-group from-recaptcha">
                <div className="g-recaptcha" data-sitekey="6Ld4mcsUAAAAAGRVf7_Mix45AEx6nGGiH88zr4pH" />
              </div>
              <div className="form-group submit">
                <input type="button" value="Submit" className="btn" id="btn_forgot_password" />
              </div>
            </form>
            <p className="text-center mt-4"><a href="login">Back to Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword;