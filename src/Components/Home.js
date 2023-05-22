import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
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


            {/*start page wrapper */}
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="card radius-10">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 row-group g-0">
                            <div className="col">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0">9526</h5>
                                        <div className="ms-auto">
                                            <i className="bx bx-cart fs-3 text-white" />
                                        </div>
                                    </div>
                                    <div className="progress my-3" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: '55%' }}
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center text-white">
                                        <p className="mb-0">Total Orders</p>
                                        <p className="mb-0 ms-auto">
                                            +4.2%
                                            <span>
                                                <i className="bx bx-up-arrow-alt" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0">$8323</h5>
                                        <div className="ms-auto">
                                            <i className="bx bx-dollar fs-3 text-white" />
                                        </div>
                                    </div>
                                    <div className="progress my-3" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: '55%' }}
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center text-white">
                                        <p className="mb-0">Total Revenue</p>
                                        <p className="mb-0 ms-auto">
                                            +1.2%
                                            <span>
                                                <i className="bx bx-up-arrow-alt" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0">6200</h5>
                                        <div className="ms-auto">
                                            <i className="bx bx-group fs-3 text-white" />
                                        </div>
                                    </div>
                                    <div className="progress my-3" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: '55%' }}
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center text-white">
                                        <p className="mb-0">Visitors</p>
                                        <p className="mb-0 ms-auto">
                                            +5.2%
                                            <span>
                                                <i className="bx bx-up-arrow-alt" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0">5630</h5>
                                        <div className="ms-auto">
                                            <i className="bx bx-envelope fs-3 text-white" />
                                        </div>
                                    </div>
                                    <div className="progress my-3" style={{ height: 4 }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: '55%' }}
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center text-white">
                                        <p className="mb-0">Messages</p>
                                        <p className="mb-0 ms-auto">
                                            +2.2%
                                            <span>
                                                <i className="bx bx-up-arrow-alt" />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-8 d-flex">
                            <div className="card radius-10 w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h5 className="mb-0">Site Traffic</h5>
                                        </div>
                                        <div className="dropdown options ms-auto">
                                            <div
                                                className="dropdown-toggle dropdown-toggle-nocaret"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="bx bx-dots-horizontal-rounded" />
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center ms-auto font-13 gap-2 my-3">
                                        <span className="border px-1 rounded cursor-pointer">
                                            <i className="bx bxs-circle me-1 text-white" />
                                            New Visitor
                                        </span>
                                        <span className="border px-1 rounded cursor-pointer">
                                            <i className="bx bxs-circle me-1 text-light-1" />
                                            Old Visitor
                                        </span>
                                    </div>
                                    <div className="chart-container-1">
                                        <canvas id="chart1" />
                                    </div>
                                </div>
                                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-3 g-0 row-group text-center border-top">
                                    <div className="col">
                                        <div className="p-3">
                                            <h5 className="mb-0">45.87M</h5>
                                            <small className="mb-0">
                                                Overall Visitor{' '}
                                                <span>
                                                    {' '}
                                                    <i className="bx bx-up-arrow-alt align-middle" /> 2.43%
                                                </span>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3">
                                            <h5 className="mb-0">15:48</h5>
                                            <small className="mb-0">
                                                Visitor Duration{' '}
                                                <span>
                                                    {' '}
                                                    <i className="bx bx-up-arrow-alt align-middle" /> 12.65%
                                                </span>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="p-3">
                                            <h5 className="mb-0">245.65</h5>
                                            <small className="mb-0">
                                                Pages/Visit{' '}
                                                <span>
                                                    {' '}
                                                    <i className="bx bx-up-arrow-alt align-middle" /> 5.62%
                                                </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-4 d-flex">
                            <div className="card radius-10 overflow-hidden w-100">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-2">
                                        <div>
                                            <h5 className="mb-0">Weekly sales</h5>
                                        </div>
                                        <div className="dropdown options ms-auto">
                                            <div
                                                className="dropdown-toggle dropdown-toggle-nocaret"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="bx bx-dots-horizontal-rounded" />
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="chart-js-container2">
                                        <div className="piechart-legend">
                                            <h3 className="mb-1">95K</h3>
                                            <h6 className="mb-0">Total sales</h6>
                                        </div>
                                        <canvas id="chart2" />
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center mb-0">
                                        <tbody>
                                            <tr className="border-top">
                                                <td>
                                                    <i className="bx bxs-circle text-white me-2" /> Direct
                                                </td>
                                                <td>$5856</td>
                                                <td>+55%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="bx bxs-circle text-light-2 me-2" />
                                                    Affiliate
                                                </td>
                                                <td>$2602</td>
                                                <td>+25%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="bx bxs-circle text-light-3 me-2" />
                                                    E-mail
                                                </td>
                                                <td>$1802</td>
                                                <td>+15%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Row*/}
                    <div className="row row-cols-1 row-cols-lg-3">
                        <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="w_chart easy-dash-chart1" data-percent={60}>
                                            <span className="w_percent" />
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="mb-0">Facebook Followers</h6>
                                            <small className="mb-0">
                                                22.14% <i className="bx bxs-up-arrow align-middle me-1" />
                                                Since Last Week
                                            </small>
                                        </div>
                                        <div className="ms-auto fs-1 text-white">
                                            <i className="bx bxl-facebook" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="w_chart easy-dash-chart2" data-percent={65}>
                                            <span className="w_percent" />
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="mb-0">Twitter Tweets</h6>
                                            <small className="mb-0">
                                                32.15% <i className="bx bxs-up-arrow align-middle me-1" />
                                                Since Last Week
                                            </small>
                                        </div>
                                        <div className="ms-auto fs-1 text-white">
                                            <i className="bx bxl-twitter" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="w_chart easy-dash-chart3" data-percent={75}>
                                            <span className="w_percent" />
                                        </div>
                                        <div className="ms-3">
                                            <h6 className="mb-0">Youtube Subscribers</h6>
                                            <small className="mb-0">
                                                58.24% <i className="bx bxs-up-arrow align-middle me-1" />
                                                Since Last Week
                                            </small>
                                        </div>
                                        <div className="ms-auto fs-1 text-white">
                                            <i className="bx bxl-youtube" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Row*/}
                    <div className="row">
                        <div className="col-12 col-lg-12 col-xl-6">
                            <div className="card radius-10">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div>
                                            <h5 className="mb-0">Selling Region</h5>
                                        </div>
                                        <div className="dropdown options ms-auto">
                                            <div
                                                className="dropdown-toggle dropdown-toggle-nocaret"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="bx bx-dots-horizontal-rounded" />
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="dashboard-map" style={{ height: 335 }} />
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover align-items-center mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Country</th>
                                                <th>Income</th>
                                                <th>Trend</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-ca me-2" /> USA
                                                </td>
                                                <td>$4,586</td>
                                                <td>
                                                    <span id="trendchart1" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-us me-2" />
                                                    Canada
                                                </td>
                                                <td>$2,089</td>
                                                <td>
                                                    <span id="trendchart2" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-in me-2" />
                                                    India
                                                </td>
                                                <td>$3,039</td>
                                                <td>
                                                    <span id="trendchart3" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-gb me-2" />
                                                    UK
                                                </td>
                                                <td>$2,309</td>
                                                <td>
                                                    <span id="trendchart4" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-de me-2" />
                                                    Germany
                                                </td>
                                                <td>$7,209</td>
                                                <td>
                                                    <span id="trendchart5" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-xl-6">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="card radius-10 overflow-hidden">
                                        <div className="card-body">
                                            <p className="mb-2">Page Views</p>
                                            <h4 className="mb-0">
                                                8,293{' '}
                                                <small className="font-13 text-white">
                                                    5.2% <i className="bx bx-up-arrow-alt" />
                                                </small>
                                            </h4>
                                        </div>
                                        <div className="chart-container-2">
                                            <canvas id="chart3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card radius-10 overflow-hidden">
                                        <div className="card-body">
                                            <p className="mb-2">Total Clicks</p>
                                            <h4 className="mb-0">
                                                7,493{' '}
                                                <small className="font-13 text-white">
                                                    1.4% <i className="bx bx-up-arrow-alt" />
                                                </small>
                                            </h4>
                                        </div>
                                        <div className="chart-container-2">
                                            <canvas id="chart4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card radius-10">
                                        <div className="card-body text-center">
                                            <p className="mb-4">Total Downloads</p>
                                            <input
                                                className="knob"
                                                data-width={190}
                                                data-height={190}
                                                data-readonly="true"
                                                data-thickness=".15"
                                                data-angleoffset={90}
                                                data-linecap="round"
                                                data-bgcolor="rgba(0, 0, 0, 0.08)"
                                                data-fgcolor="#fff"
                                                data-max={15000}
                                                defaultValue={8550}
                                            />
                                            <hr />
                                            <p className="mb-0 small-font text-center">
                                                3.4% <i className="zmdi zmdi-long-arrow-up" /> since
                                                yesterday
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="card radius-10">
                                        <div className="card-body">
                                            <p>Device Storage</p>
                                            <h4 className="mb-3">42620/50000</h4>
                                            <hr />
                                            <div className="progress-wrapper mb-4">
                                                <p>
                                                    Documents <span className="float-end">12GB</span>
                                                </p>
                                                <div className="progress" style={{ height: 5 }}>
                                                    <div
                                                        className="progress-bar bg-white"
                                                        style={{ width: '80%' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="progress-wrapper mb-4">
                                                <p>
                                                    Images <span className="float-end">10GB</span>
                                                </p>
                                                <div className="progress" style={{ height: 5 }}>
                                                    <div
                                                        className="progress-bar bg-white"
                                                        style={{ width: '60%' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="progress-wrapper mb-4">
                                                <p>
                                                    Mails <span className="float-end">5GB</span>
                                                </p>
                                                <div className="progress" style={{ height: 5 }}>
                                                    <div
                                                        className="progress-bar bg-white"
                                                        style={{ width: '40%' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Row*/}
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-4 d-flex">
                            <div className="card radius-10 overflow-hidden w-100">
                                <div className="card-body">
                                    <p>Total Earning</p>
                                    <h4 className="mb-0">$287,493</h4>
                                    <small>
                                        1.4% <i className="bx bx-up-arrow-alt" /> Since Last Month
                                    </small>
                                    <hr />
                                    <p>Total Sales</p>
                                    <h4 className="mb-0">$87,493</h4>
                                    <small>
                                        5.43% <i className="bx bx-up-arrow-alt" /> Since Last Month
                                    </small>
                                    <div className="mt-5">
                                        <div className="chart-container-4">
                                            <canvas id="chart5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-8 d-flex">
                            <div className="card radius-10 w-100">
                                <div className="card-header border-bottom bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h5 className="mb-0">Customer Review</h5>
                                        </div>
                                        <div className="dropdown options ms-auto">
                                            <div
                                                className="dropdown-toggle dropdown-toggle-nocaret"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="bx bx-dots-horizontal-rounded" />
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:;">
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush review-list">
                                    <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/avatars/avatar-1.png"
                                                alt="user avatar"
                                                className="rounded-circle"
                                                width={55}
                                                height={55}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">
                                                    iPhone X <small className="ms-4">08.34 AM</small>
                                                </h6>
                                                <p className="mb-0 small-font">
                                                    Sara Jhon : This is svery Nice phone in low budget.
                                                </p>
                                            </div>
                                            <div className="ms-auto star">
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/avatars/avatar-2.png"
                                                alt="user avatar"
                                                className="rounded-circle"
                                                width={55}
                                                height={55}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">
                                                    Air Pod <small className="ml-4">05.26 PM</small>
                                                </h6>
                                                <p className="mb-0 small-font">
                                                    Danish Josh : The brand apple is original !
                                                </p>
                                            </div>
                                            <div className="ms-auto star">
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/avatars/avatar-3.png"
                                                alt="user avatar"
                                                className="rounded-circle"
                                                width={55}
                                                height={55}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">
                                                    Mackbook Pro <small className="ml-4">06.45 AM</small>
                                                </h6>
                                                <p className="mb-0 small-font">
                                                    Jhon Doe : Excllent product and awsome quality
                                                </p>
                                            </div>
                                            <div className="ms-auto star">
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/avatars/avatar-4.png"
                                                alt="user avatar"
                                                className="rounded-circle"
                                                width={55}
                                                height={55}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">
                                                    Air Pod <small className="ml-4">08.34 AM</small>
                                                </h6>
                                                <p className="mb-0 small-font">
                                                    Christine : The brand apple is original !
                                                </p>
                                            </div>
                                            <div className="ms-auto star">
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/avatars/avatar-9.png"
                                                alt="user avatar"
                                                className="rounded-circle"
                                                width={55}
                                                height={55}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">
                                                    Air Pod <small className="ml-4">05.26 PM</small>
                                                </h6>
                                                <p className="mb-0 small-font">
                                                    Danish Josh : The brand apple is original !
                                                </p>
                                            </div>
                                            <div className="ms-auto star">
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/avatars/avatar-7.png"
                                                alt="user avatar"
                                                className="rounded-circle"
                                                width={55}
                                                height={55}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">
                                                    Mackbook <small className="ml-4">08.34 AM</small>
                                                </h6>
                                                <p className="mb-0 small-font">
                                                    Michle : The brand apple is original !
                                                </p>
                                            </div>
                                            <div className="ms-auto star">
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="assets/images/avatars/avatar-8.png"
                                                alt="user avatar"
                                                className="rounded-circle"
                                                width={55}
                                                height={55}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-0">
                                                    Air Pod <small className="ml-4">05.26 PM</small>
                                                </h6>
                                                <p className="mb-0 small-font">
                                                    Danish Josh : The brand apple is original !
                                                </p>
                                            </div>
                                            <div className="ms-auto star">
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                                <i className="bx bxs-star text-white" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*End Row*/}
                    
                </div>
            </div>
            {/*end page wrapper */}
            {/*start overlay*/}
            <div className="overlay toggle-icon" />
            {/*end overlay*/}
            {/*Start Back To Top Button*/}{' '}
            <a href="javaScript:;" className="back-to-top">
                <i className="bx bxs-up-arrow-alt" />
            </a>
            {/*End Back To Top Button*/}
            <footer className="page-footer">
                <p className="mb-0">Copyright © 2021. All right reserved.</p>
            </footer>



        </>
    )
}

export default Home