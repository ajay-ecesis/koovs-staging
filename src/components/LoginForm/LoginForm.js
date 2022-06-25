import React, { useEffect, useRef, useState } from "react";
import "./loginform.css";
import { ReCaptcha, loadReCaptcha } from "react-recaptcha-v3";
import { userLoginAPI } from "../../api/auth";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [values, setValues] = useState("");
  const [token, setToken] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(false);
  const googleCaptcha = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    reloadRecaptcha();
  }, []);

  const reloadRecaptcha = () => {
    loadReCaptcha("6LdSHv0UAAAAACfq2Tk2XQrk1kek189iNpni7nCI"); //sitekey load recaptcha
  };

  function handleVerify(token) {
    setToken(token);
    console.log(token);
  }

  // For changing login values
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    setError(false);
  };

  const submitLogin = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    let userData = {
      email: values.email,
      password: values.password,
      reCaptcha: token,
    };

    let userLogin = await userLoginAPI(userData);
    if (!userLogin?.error) {
      dispatch({
        type: "USER_LOGIN",
        payload: userLogin,
      });
    } else {
      // reloads the recaptcha key with new one
      googleCaptcha.current.execute();

      setError(userLogin?.message);
    }

    setBtnLoading(false);
  };

  return (
    <>
      <ReCaptcha
        ref={googleCaptcha}
        sitekey="6LdSHv0UAAAAACfq2Tk2XQrk1kek189iNpni7nCI"
        action="login"
        verifyCallback={handleVerify}
      />
      <section className="login row">
        <div className="login-form col-xs-12 col-sm-12 col-md-9 col-lg-9 pt-4">
          <h6>Sign In</h6>

          <div className="form">
            <form className="pt-3 " onSubmit={submitLogin}>
              <div class="form-group ">
                <input
                  type="email"
                  class="form-control"
                  onChange={handleChange("email")}
                  required
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group pt-3 ">
                <input
                  required
                  type="password"
                  class="form-control"
                  onChange={handleChange("password")}
                  placeholder="Password"
                />
              </div>
              <div class="form-group pt-3 ">
                {error ? (
                  <>
                    <span className="error_message">*{error}</span>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="forgot-password">
                <span>Forgot your password.?</span>
              </div>

              <div className="submit-btn pt-5">
                {!btnLoading ? (
                  <button type="submit" className="btn w-50 btn-dark rounded-0">
                    {" "}
                    SIGN IN
                  </button>
                ) : (
                  <button type="button" className="btn w-50 btn-dark rounded-0">
                    {" "}
                    PLEASE WAIT...
                  </button>
                )}
              </div>
            </form>
            <div className="privacy-text pt-3">
              <span>
                This site it protected by reCAPTCHA and Google Privacy Policy
                and Terms of Service apply.{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginForm;
