import React from "react";
import "./registerform.css";
function RegisterForm() {
  return (
    <section className=" d-md-none d-lg-none section-register-form pt-5">
      <div className="col-sm-12 register-form">
        <h4>Create Account</h4>

        <form className="pt-3 ">
          <div class="form-group ">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group pt-3 ">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </div>
          <div class="form-group pt-3 ">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </div>
          <div class="form-group pt-3 ">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </div>
          <div class="form-group pt-3 ">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </div>

          <div className="info-text pt-3">
            <span>
              To personalize your account, please enter your date of birth and
              country of residence.{" "}
            </span>
          </div>

          <div className="row g-3">
            <div class="col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>2022</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>01</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>01</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="pt-2">
            <select class="form-select" aria-label="Default select example">
              <option selected>01</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="row g-3 pt-2">
            <div className="col-4">
              <select class="form-select" aria-label="Default select example">
                <option selected>+45</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-8">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div class="form-group form-check pt-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label
              class="form-check-label checkbox-confirm"
              for="exampleCheck1"
            >
              I wish to receive newsletter to receive info on new products,
              sales and events.{" "}
            </label>
          </div>
          <div class="form-group form-check pt-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label
              class="form-check-label checkbox-confirm"
              for="exampleCheck1"
            >
              I have read and understood the Terms and Conditions.{" "}
            </label>
          </div>
          <div className="submit-btn pt-2">
            <button className="btn btn-dark rounded-0 w-50"> Create</button>
          </div>
        </form>
        <div className="privacy-text pt-3">
          <span>
            This site it protected by reCAPTCHA and Google Privacy Policy and
            Terms of Service apply.{" "}
          </span>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
