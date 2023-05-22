import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const FormData = require("form-data");
export default function Register() {
  const [customerCode, setCustomerCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [debitAccountNumber, setDebitAccountNumber] = useState("");
  const [productCode, setProductCode] = useState("");
  const [dealerCode, setDealerCode] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [creditAccountNumber, setCreditAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks1, setRemarks1] = useState("");
  const [docs, setDocs] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "customerCode":
        setCustomerCode(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "customerName":
        setCustomerName(e.target.value);
        break;
      case "debitAccountNumber":
        setDebitAccountNumber(e.target.value);
        break;
      case "productCode":
        setProductCode(e.target.value);
        break;
      case "dealerCode":
        setDealerCode(e.target.value);
        break;
      case "beneficiaryName":
        setBeneficiaryName(e.target.files[0]);
        break;
      case "creditAccountNumber":
        setCreditAccountNumber(e.target.files[0]);
        break;
      case "amount":
        setAmount(e.target.files[0]);
        break;
      case "remarks1":
        setRemarks1(e.target.files[0]);
        break;
      case "docs":
        setDocs(e.target.files[0]);
        break;

      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("customerCode", customerCode);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("customerName", customerName);
    formData.append("debitAccountNumber", debitAccountNumber);
    formData.append("productCode", productCode);
    formData.append("dealerCode", dealerCode);
    formData.append("beneficiaryName", beneficiaryName);
    formData.append("creditAccountNumber", creditAccountNumber);
    formData.append("amount", amount);
    formData.append("remarks1", remarks1);
    formData.append("docs", docs);

    console.log(formData);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://192.168.43.167:8080/Merchant/register",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("User Register Sucessfull");
      })
      .catch((error) => {
        console.log(error);
        alert("User Register Unsucessfull");
      });
  };
  return (
    <div>
      <div classname="wrapper">
        <div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
              <div className="col mx-auto">
                <div className="my-4 text-center">
                  <Link to="">
                    <img
                      src="assets/images/justapay.png"
                      className="logo-text"
                      alt="logo icon"
                    />
                  </Link>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center">
                        <h3 className>Sign Up</h3>
                        <p>
                          Already have an account?{" "}
                          <Link to="../Login">Sign in here</Link>
                        </p>
                      </div>

                      <div className="form-body">
                        <form
                          className="row g-3"
                          onSubmit={handleSubmit}
                          encType="multipart/form-data"
                        >
                          <div className="col-sm-6">
                            <label className="form-label">Customer Name</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="customername"
                              name="customerName"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label">Username</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="username"
                              name="username"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-sm-6">
                            <label className="form-label">Customer Code</label>
                            <input
                              type="email"
                              className="form-control"
                              // id="customercode"
                              name="customerCode"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Password</label>
                            <div
                              className="input-group"
                              id="show_hide_password"
                            >
                              <input
                                type="password"
                                className="form-control border-end-0"
                                // id="inputChoosePassword"
                                defaultValue={12345678}
                                placeholder="Enter Password"
                                name="password"
                                required
                                onChange={handleChange}
                              />{" "}
                              {/* <a
                                                                href="javascript:;"
                                                                className="input-group-text bg-transparent"
                                                            >
                                                                <i className="bx bx-hide" /> */}
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">
                              Debit Account Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              // id="DebitAccountNumber"
                              name="debitAccountNumber"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Product Code</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="productCode"
                              name="productCode"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Dealer Code</label>
                            <input
                              type="text"
                              className="form-control"
                              name="dealerCode"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">
                              Beneficiary Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="beneficiaryName"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">
                              Credit Account Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              // id="creditAccountNumber"
                              name="creditAccountNumber"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Amount</label>
                            <input
                              type="text"
                              className="form-control"
                              name="amount"
                              required
                              onChange={handleChange}
                            />
                          </div>

                          <div className="col-sm-12">
                            <label className="form-label">Remarks1</label>
                            <input
                              type="text"
                              className="form-control"
                              // id="remarks1"
                              name="remarks1"
                              required
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-sm-12">
                            <div class="input-group mb-3">
                              <input
                                type="file"
                                class="form-control"
                                name="docs"
                                onChange={handleChange}
                              />
                              <label class="input-group-text" for="docs">
                                Docs
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                              />
                              <label className="form-check-label">
                                I read and agree to Terms &amp; Conditions
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-grid">
                              <button type="submit" className="btn btn-light">
                                <i className="bx bx-user" />
                                Sign up
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Register
