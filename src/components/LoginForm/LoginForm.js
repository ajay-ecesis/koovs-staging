import React from "react"
import "./loginform.css"
const LoginForm = () => {


    return (
        <>
            <section className="login row">

                <div className="login-form col-xs-12 col-sm-12 col-md-9 col-lg-9">

                    <h6>Sign In</h6>

                    <div className="form">

                        <form className="pt-3 ">

                            <div class="form-group ">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                            </div>
                            <div class="form-group pt-3 ">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" />
                            </div>
                            <div className="forgot-password">
                                <span>Forgot your password.?</span>
                            </div>

                            <div className="submit-btn pt-5">
                                <button className="btn w-50 btn-dark rounded-0"> SIGN IN</button>
                            </div>
                        </form>
                        <div className="privacy-text pt-3">
                            <span>This site it protected by reCAPTCHA and Google Privacy Policy and Terms of Service apply. </span>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}
export default LoginForm;