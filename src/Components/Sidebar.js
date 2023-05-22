import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <div>
            <img
              src="assets/images/justapay.png"
              className="logo-text"
              alt="logo icon"
            />
            {/* <h4 className="logo-text">Dashtreme</h4> */}
          </div>
          <div className="toggle-icon ms-auto">
            <i className="bx bx-arrow-to-left" />
          </div>
        </div>
        {/*navigation*/}
        <ul className="metismenu" id="menu">
          <li>
            <Link to="/">
              <div className="parent-icon">
                <i className="bx bx-home-circle" />
              </div>
              <div className="menu-title">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="../Users">
              <div className="parent-icon">
                <i className="bx bx-category" />
              </div>
              <div className="menu-title">All User</div>
            </Link>
          </li>
          <li>
            <Link to="../Payoutdetails">
              <div className="parent-icon">
                <i className="bx bx-money" />
              </div>
              <div className="menu-title">Payout Details</div>
            </Link>
          </li>
          <li>
            <Link to="../Payoutdetails">
              <div className="parent-icon">
                <i className="bx bx-check" />
              </div>
              <div className="menu-title">Approve Request Users</div>
            </Link>
          </li>
          <li>
            <Link to="../Payoutdetails">
              <div className="parent-icon">
                <i className="bx bx-x " />
              </div>
              <div className="menu-title">Cancel Request Users</div>
            </Link>
          </li>

          <li>
            <Link to="../Payoutdetails">
              <div className="parent-icon">
                <i className="bx bx-time" />
              </div>
              <div className="menu-title"> Pendind Request Users</div>
            </Link>
          </li>
        </ul>
        {/*end navigation*/}
      </div>
    </div>
  );
};

export default Sidebar;
