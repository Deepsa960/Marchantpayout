import React from 'react'
import { Link } from 'react-router-dom'

const Forgetpassword = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="authentication-forgot d-flex align-items-center justify-content-center">
                    <div className="card forgot-box">
                        <div className="card-body">
                            <div className="p-4 rounded  border">
                                <div className="text-center">
                                    <Link to="/">
                                        <img
                                            src="assets/images/justapay.png"
                                            className="logo-text"
                                            alt="logo icon"
                                        />
                                    </Link>

                                </div>
                                <h4 className="mt-5 font-weight-bold">Forgot Password?</h4>
                                <p className>Enter your registered email ID to reset the password</p>
                                <div className="my-4">
                                    <label className="form-label">Email id</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="example@user.com"
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-light btn-lg">
                                        Send
                                    </button>{' '}
                                    <Link to="../Login"  className="btn btn-light btn-lg">
                                    <i className="bx bx-arrow-back me-1" />
                                        Back to Login
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Forgetpassword