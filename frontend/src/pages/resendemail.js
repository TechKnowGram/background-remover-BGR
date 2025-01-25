import React from 'react'

function Resendemail() {
  return (
    <div>
      <div className="create-acount">
        <div className="container">
          <div className="account-form">
            <h1>Resend email confirmation?</h1>
            <h6 className="mb-4">Enter your email address and we'll resend the instructions.</h6>
            <form method="POST" acceptCharset="utf-8" name="login-registration-form" id="user_resend_mail_form" className="login-registration-form">
              <div className="form-group input-group">
                <input type="text" id="input_resend_email" placeholder="Email" />
                <span>Enter your registered email address</span>
              </div>
              <div className="form-group from-recaptcha">
                <div className="g-recaptcha" data-sitekey="6Ld4mcsUAAAAAGRVf7_Mix45AEx6nGGiH88zr4pH" />
              </div>
              <div className="form-group submit">
                <input type="button" defaultValue="Send" id="btn_resend_email" />
              </div>
            </form>
            <p className="text-center mt-4"><a href="login">Back to Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resendemail