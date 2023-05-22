import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
const Users = () => {
    return (
        <div>
            <Sidebar />

            <header>
                <div className="topbar d-flex align-items-center">
                    <nav className="navbar navbar-expand">
                        <div className="mobile-toggle-menu">
                            <i className="bx bx-menu" />
                        </div>
                        <div className="top-menu ms-auto">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item mobile-search-icon">
                                    <a className="nav-link" href="#">
                                        {' '}
                                        <i className="bx bx-search" />
                                    </a>
                                </li>
                                <li className="nav-item dropdown dropdown-large">


                                </li>
                                <li className="nav-item dropdown dropdown-large">
                                    <a
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {' '}
                                        <span className="alert-count">7</span>
                                        <i className="bx bx-bell" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:;">
                                            <div className="msg-header">
                                                <p className="msg-header-title">Notifications</p>
                                                <p className="msg-header-clear ms-auto">Marks all as read</p>
                                            </div>
                                        </a>
                                        <div className="header-notifications-list">
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-group" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Customers
                                                            <span className="msg-time float-end">14 Sec ago</span>
                                                        </h6>
                                                        <p className="msg-info">5 new user registered</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-cart-alt" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Orders{' '}
                                                            <span className="msg-time float-end">2 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">You have recived new orders</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-file" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            24 PDF File
                                                            <span className="msg-time float-end">19 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">The pdf files generated</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-send" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Time Response{' '}
                                                            <span className="msg-time float-end">28 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">5.1 min avarage time response</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-home-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Product Approved{' '}
                                                            <span className="msg-time float-end">2 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">Your new product has approved</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-message-detail" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Comments{' '}
                                                            <span className="msg-time float-end">4 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">New customer comments recived</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-check-square" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Your item is shipped{' '}
                                                            <span className="msg-time float-end">5 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">Successfully shipped your item</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-user-pin" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New 24 authors
                                                            <span className="msg-time float-end">1 day ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            24 new authors joined last week
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-door-open" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Defense Alerts{' '}
                                                            <span className="msg-time float-end">2 weeks ago</span>
                                                        </h6>
                                                        <p className="msg-info">45% less alerts last 4 weeks</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="javascript:;">
                                            <div className="text-center msg-footer">
                                                View All Notifications
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dropdown-large">
                                    <a
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {' '}
                                        <span className="alert-count">8</span>
                                        <i className="bx bx-comment" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:;">
                                            <div className="msg-header">
                                                <p className="msg-header-title">Messages</p>
                                                <p className="msg-header-clear ms-auto">Marks all as read</p>
                                            </div>
                                        </a>
                                        <div className="header-message-list">
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-1.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Daisy Anderson{' '}
                                                            <span className="msg-time float-end">5 sec ago</span>
                                                        </h6>
                                                        <p className="msg-info">The standard chunk of lorem</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-2.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Althea Cabardo{' '}
                                                            <span className="msg-time float-end">14 sec ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Many desktop publishing packages
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-3.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Oscar Garner{' '}
                                                            <span className="msg-time float-end">8 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Various versions have evolved over
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-4.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Katherine Pechon{' '}
                                                            <span className="msg-time float-end">15 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Making this the first true generator
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-5.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Amelia Doe{' '}
                                                            <span className="msg-time float-end">22 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Duis aute irure dolor in reprehenderit
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-6.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Cristina Jhons{' '}
                                                            <span className="msg-time float-end">2 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            The passage is attributed to an unknown
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-7.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            James Caviness{' '}
                                                            <span className="msg-time float-end">4 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">The point of using Lorem</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-8.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Peter Costanzo{' '}
                                                            <span className="msg-time float-end">6 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            It was popularised in the 1960s
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-9.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            David Buckley{' '}
                                                            <span className="msg-time float-end">2 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Various versions have evolved over
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-10.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Thomas Wheeler{' '}
                                                            <span className="msg-time float-end">2 days ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            If you are going to use a passage
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="javascript:;">
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-11.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Johnny Seitz{' '}
                                                            <span className="msg-time float-end">5 days ago</span>
                                                        </h6>
                                                        <p className="msg-info">All the Lorem Ipsum generators</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="javascript:;">
                                            <div className="text-center msg-footer">View All Messages</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="user-box dropdown">
                            <a
                                className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="assets/images/avatars/avatar-2.png"
                                    className="user-img"
                                    alt="user avatar"
                                />
                                <div className="user-info ps-3">
                                    <p className="user-name mb-0">Singhtek</p>
                                    <p className="designattion mb-0">Web Designer</p>
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <i className="bx bx-user" />
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <i className="bx bx-cog" />
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <i className="bx bx-home-circle" />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <i className="bx bx-dollar-circle" />
                                        <span>Earnings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:;">
                                        <i className="bx bx-download" />
                                        <span>Downloads</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider mb-0" />
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item" href="javascript:;">

                                        <i className="bx bx-log-out-circle" />
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>


            <div className="page-wrapper">
                <div className="page-content">
                    {/*breadcrumb*/}
                    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">

                        <div className="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item">
                                        <a href="javascript:;">
                                            <i className="bx bx-home-alt" />
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Users
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div>

                        </div>

                    </div>
                    {/*end breadcrumb*/}
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table
                                    id="example"
                                    className="table table-striped table-bordered"
                                    style={{ width: '100%' }}
                                >
                                    <thead>
                                        <tr>
                                            <th>User Id</th>
                                            <th>Marchant Id</th>
                                            <th>Sr Number</th>
                                            <th>Beneficiary Name</th>
                                            <th>Cradit Account No</th>
                                            <th>Beneficiary Branch Code</th>
                                            <th>Amount</th>
                                            <th>Remarks-1</th>
                                            <th>Create Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                     </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Users