import React from "react";
import "./myaccount.css";

const MyAccount = () => {
  return (
    <>
      <section className="myaccount row">
        <div className="myaccount-form col-xs-12 col-sm-12 col-md-9 col-lg-9 pt-4">
          <div className="form">
            <form className="pt-3 ">
              <div class="form-group ">
                <h6 className="pt-2">Email Address</h6>

                <input
                  type="email"
                  class="form-control"
                  required
                  placeholder="Email Address"
                />
              </div>
              <h6 className="pt-2">First Name</h6>
              <div class="form-group pt-3 ">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <h6 className="pt-2">Last Name</h6>
              <div class="form-group pt-3 ">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>

              <h6 className="pt-2">Phone Number</h6>
              <div className="d-flex  pt-3">
                <div class="form-group w-75">
                  <input
                    required
                    type="password"
                    class="form-control "
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark rounded-0 w-25 ph-remove-btn"
                >
                  {" "}
                  REMOVE
                </button>
              </div>

              <div className="submit-btn pt-5">
                <button
                  type="submit"
                  className="btn update-info btn-dark rounded-0"
                >
                  {" "}
                  UPDATE INFORMATION
                </button>
              </div>
            </form>
            <div className=" pt-3 col gx-5">
              <span className="pt-3">Shipping address</span>
              <br />
              <span className="pt-3">
                Sofie Lund Saltholmsvej 6, 5.
                <br />
              </span>
              <br />{" "}
              <span className="pt-3">
                DK-2300 København S DENMARK <br />
              </span>
              <br />{" "}
              <span className="pt-3">
                Remove <br />
              </span>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
