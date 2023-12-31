import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, Input } from 'antd';
import Logo from '../../Images/logo.png'
import BlankImage from '../../Images/blankimage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Outlet } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard'

const { Header, Content, Sider } = Layout;

function Home(props) {
    return (
        <div className="container-scroller">
            {/* partial:partials/_navbar.html */}
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" style={{ height: 0 }}>
                <div className="navbar-brand-wrapper d-flex justify-content-center">
                    <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                        <a className="navbar-brand brand-logo" href="index.html"><img src={Logo} alt="logo" /></a>
                        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg" alt="logo" /></a>
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="typcn typcn-th-menu" />
                        </button>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
                                <img src={BlankImage} alt="profile" />
                                <span className="nav-profile-name">Maulik Suhtar</span>
                            </a>
                        </li>

                    </ul>
                    <ul className="navbar-nav navbar-nav-right" style={{ float: 'left' }}>
                        <li className="nav-item dropdown">
                            <Input placeholder="Search" className="searchbar" />
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="typcn typcn-th-menu" />
                    </button>
                </div>
            </nav>
            <div className="container-fluid page-body-wrapper">
                {/* partial:partials/_settings-panel.html */}
                <div className="theme-setting-wrapper">
                    <div id="settings-trigger"><i className="typcn typcn-cog-outline" /></div>
                    <div id="theme-settings" className="settings-panel">
                        <i className="settings-close typcn typcn-times" />
                        <p className="settings-heading">SIDEBAR SKINS</p>
                        <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
                        <div className="sidebar-bg-options " id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
                        <p className="settings-heading mt-2">HEADER SKINS</p>
                        <div className="color-tiles mx-0 px-4">
                            <div className="tiles success" />
                            <div className="tiles warning" />
                            <div className="tiles danger" />
                            <div className="tiles info" />
                            <div className="tiles dark" />
                            <div className="tiles default" />
                        </div>
                    </div>
                </div>
                <div id="right-sidebar" className="settings-panel">
                    <i className="settings-close typcn typcn-times" />
                    <ul className="nav nav-tabs" id="setting-panel" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="setting-content">
                        <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                            <div className="add-items d-flex px-3 mb-0">
                                <form className="form w-100">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                                        <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                                    </div>
                                </form>
                            </div>
                            <div className="list-wrapper px-3">
                                <ul className="d-flex flex-column-reverse todo-list">
                                    <li>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" />
                                                Team review meeting at 3.00 PM
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline" />
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" />
                                                Prepare for presentation
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline" />
                                    </li>
                                    <li>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" />
                                                Resolve all the low priority tickets due today
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline" />
                                    </li>
                                    <li className="completed">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" defaultChecked />
                                                Schedule meeting for next week
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline" />
                                    </li>
                                    <li className="completed">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input className="checkbox" type="checkbox" defaultChecked />
                                                Project review
                                            </label>
                                        </div>
                                        <i className="remove typcn typcn-delete-outline" />
                                    </li>
                                </ul>
                            </div>
                            <div className="events py-4 border-bottom px-3">
                                <div className="wrapper d-flex mb-2">
                                    <i className="typcn typcn-media-record-outline text-primary mr-2" />
                                    <span>Feb 11 2018</span>
                                </div>
                                <p className="mb-0 font-weight-thin text-gray">Creating component page</p>
                                <p className="text-gray mb-0">build a js based app</p>
                            </div>
                            <div className="events pt-4 px-3">
                                <div className="wrapper d-flex mb-2">
                                    <i className="typcn typcn-media-record-outline text-primary mr-2" />
                                    <span>Feb 7 2018</span>
                                </div>
                                <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                                <p className="text-gray mb-0 ">Call Sarah Graves</p>
                            </div>
                        </div>
                        {/* To do section tab ends */}
                        <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                            <div className="d-flex align-items-center justify-content-between border-bottom">
                                <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                                <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                            </div>
                            <ul className="chat-list">
                                <li className="list active">
                                    <div className="profile"><img src="images/faces/face1.jpg" alt="image" /><span className="online" /></div>
                                    <div className="info">
                                        <p>Thomas Douglas</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">19 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile"><img src="images/faces/face2.jpg" alt="image" /><span className="offline" /></div>
                                    <div className="info">
                                        <div className="wrapper d-flex">
                                            <p>Catherine</p>
                                        </div>
                                        <p>Away</p>
                                    </div>
                                    <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                                    <small className="text-muted my-auto">23 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile"><img src="images/faces/face3.jpg" alt="image" /><span className="online" /></div>
                                    <div className="info">
                                        <p>Daniel Russell</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">14 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile"><img src="images/faces/face4.jpg" alt="image" /><span className="offline" /></div>
                                    <div className="info">
                                        <p>James Richardson</p>
                                        <p>Away</p>
                                    </div>
                                    <small className="text-muted my-auto">2 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile"><img src="images/faces/face5.jpg" alt="image" /><span className="online" /></div>
                                    <div className="info">
                                        <p>Madeline Kennedy</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">5 min</small>
                                </li>
                                <li className="list">
                                    <div className="profile"><img src="images/faces/face6.jpg" alt="image" /><span className="online" /></div>
                                    <div className="info">
                                        <p>Sarah Graves</p>
                                        <p>Available</p>
                                    </div>
                                    <small className="text-muted my-auto">47 min</small>
                                </li>
                            </ul>
                        </div>
                        {/* chat tab ends */}
                    </div>
                </div>
                {/* partial */}
                {/* partial:partials/_sidebar.html */}
                <nav className="sidebar sidebar-offcanvas" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item" style={{ marginTop: 75 }}>
                            <a className="nav-link" href="index.html">
                                <i className="typcn typcn-device-desktop menu-icon" />
                                <span className="menu-title">DASHBOARD</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* partial */}
                <div className="main-panel">
                    <div className="content-wrapper">

                        <div class="col-xl-12 grid-margin stretch-card flex-column">
                            {/* <h5 class="mb-2 text-titlecase mb-4">Registration</h5> */}
                            <div class="row h-100">
                                <div class="col-md-12 stretch-card" style={{ maxWidth: '102.2%' }}>
                                    <div class="card">
                                        <div class="card-body">
                                            {/* <div class="d-flex justify-content-between align-items-start flex-wrap site-layout-background" */}

                                            <Outlet

                                            ></Outlet>
                                            <div id="income-chart-legend" class="d-flex flex-wrap mt-1 mt-md-0"></div>

                                            <canvas id="income-chart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* content-wrapper ends */}
                    {/* partial:partials/_footer.html */}
                    <footer className="footer">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022 <a href="https://www.bootstrapdash.com/" className="text-muted" target="_blank">Info</a>. All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* partial */}
                </div>
                {/* main-panel ends */}
            </div>
            {/* page-body-wrapper ends */}
        </div>

    );
}

export default Home