import React, {Component} from 'react'
import {connect} from 'react-redux'
import './../../../sass/admin.scss'

class Index extends Component {
    render() {
        return <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
					<span className="sidebar-brand-text align-middle">
						AdminKit
					</span>
                    </a>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Pages
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#dashboards" data-bs-toggle="collapse"
                               className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="sliders"></i> <span
                                className="align-middle">Dashboards</span>
                            </a>
                            <ul id="dashboards" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="index.html">Analytics</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="dashboard-ecommerce.html">E-Commerce <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="dashboard-crypto.html">Crypto <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item active">
                            <a data-bs-target="#pages" data-bs-toggle="collapse" className="sidebar-link">
                                <i className="align-middle" data-feather="layout"></i> <span
                                className="align-middle">Pages</span>
                            </a>
                            <ul id="pages" className="sidebar-dropdown list-unstyled collapse show"
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="pages-settings.html">Settings</a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="pages-projects.html">Projects <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="pages-clients.html">Clients <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="pages-pricing.html">Pricing <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="pages-chat.html">Chat <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item active"><a className="sidebar-link" href="pages-blank.html">Blank
                                    Page</a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-profile.html">
                                <i className="align-middle" data-feather="user"></i> <span
                                className="align-middle">Profile</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-invoice.html">
                                <i className="align-middle" data-feather="credit-card"></i> <span
                                className="align-middle">Invoice</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="pages-tasks.html">
                                <i className="align-middle" data-feather="list"></i> <span
                                className="align-middle">Tasks</span>
                                <span className="sidebar-badge badge bg-primary">Pro</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link" href="calendar.html">
                                <i className="align-middle" data-feather="calendar"></i> <span
                                className="align-middle">Calendar</span>
                                <span className="sidebar-badge badge bg-primary">Pro</span>
                            </a>
                        </li>

                        <li className="sidebar-item">
                            <a href="#auth" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="users"/> <span
                                className="align-middle">Auth</span>
                            </a>
                            <ul id="auth" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign
                                    In</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Sign
                                    Up</a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="pages-reset-password.html">Reset Password <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-404.html">404
                                    Page <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="pages-500.html">500
                                    Page <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-header">
                            Components
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#ui" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="briefcase"/> <span
                                className="align-middle">UI Elements</span>
                            </a>
                            <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="ui-alerts.html">Alerts</a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="ui-buttons.html">Buttons</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-cards.html">Cards</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="ui-general.html">General</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-grid.html">Grid</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="ui-modals.html">Modals</a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="ui-offcanvas.html">Offcanvas <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="ui-placeholders.html">Placeholders <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="ui-tabs.html">Tabs <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="ui-typography.html">Typography</a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#icons" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="coffee"/> <span
                                className="align-middle">Icons</span>
                                <span className="sidebar-badge badge bg-light">1.500+</span>
                            </a>
                            <ul id="icons" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="icons-feather.html">Feather</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="icons-font-awesome.html">Font
                                    Awesome <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#forms" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="check-circle"/> <span
                                className="align-middle">Forms</span>
                            </a>
                            <ul id="forms" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic
                                    Inputs</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Form
                                    Layouts <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="forms-input-groups.html">Input
                                    Groups <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="tables-bootstrap.html">
                                <i className="align-middle" data-feather="list"/> <span
                                className="align-middle">Tables</span>
                            </a>
                        </li>

                        <li className="sidebar-header">
                            Plugins & Addons
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#form-plugins" data-bs-toggle="collapse"
                               className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="check-square"/> <span
                                className="align-middle">Form Plugins</span>
                            </a>
                            <ul id="form-plugins" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="forms-advanced-inputs.html">Advanced Inputs <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="forms-editors.html">Editors <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="forms-validation.html">Validation <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#datatables" data-bs-toggle="collapse"
                               className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="list"/> <span
                                className="align-middle">DataTables</span>
                            </a>
                            <ul id="datatables" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="tables-datatables-responsive.html">Responsive
                                    Table <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="tables-datatables-buttons.html">Table with
                                    Buttons <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="tables-datatables-column-search.html">Column
                                    Search <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="tables-datatables-fixed-header.html">Fixed
                                    Header <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="tables-datatables-multi.html">Multi
                                    Selection <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="tables-datatables-ajax.html">Ajax Sourced
                                    Data <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#charts" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="bar-chart-2"/> <span
                                className="align-middle">Charts</span>
                            </a>
                            <ul id="charts" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="charts-chartjs.html">Chart.js</a></li>
                                <li className="sidebar-item"><a className="sidebar-link"
                                                                href="charts-apexcharts.html">ApexCharts <span
                                    className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="notifications.html">
                                <i className="align-middle" data-feather="bell"/> <span
                                className="align-middle">Notifications</span>
                                <span className="sidebar-badge badge bg-primary">Pro</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a data-bs-target="#maps" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="map"/> <span
                                className="align-middle">Maps</span>
                            </a>
                            <ul id="maps" className="sidebar-dropdown list-unstyled collapse "
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link" href="maps-google.html">Google
                                    Maps</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="maps-vector.html">Vector
                                    Maps <span
                                        className="sidebar-badge badge bg-primary">Pro</span></a></li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a data-bs-target="#multi" data-bs-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="corner-right-down"/> <span
                                className="align-middle">Multi Level</span>
                            </a>
                            <ul id="multi" className="sidebar-dropdown list-unstyled collapse"
                                data-bs-parent="#sidebar">
                                <li className="sidebar-item">
                                    <a data-bs-target="#multi-2" data-bs-toggle="collapse"
                                       className="sidebar-link collapsed">Two Levels</a>
                                    <ul id="multi-2" className="sidebar-dropdown list-unstyled collapse">
                                        <li className="sidebar-item">
                                            <a className="sidebar-link" href="#">Item 1</a>
                                            <a className="sidebar-link" href="#">Item 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a data-bs-target="#multi-3" data-bs-toggle="collapse"
                                       className="sidebar-link collapsed">Three Levels</a>
                                    <ul id="multi-3" className="sidebar-dropdown list-unstyled collapse">
                                        <li className="sidebar-item">
                                            <a data-bs-target="#multi-3-1" data-bs-toggle="collapse"
                                               className="sidebar-link collapsed">Item 1</a>
                                            <ul id="multi-3-1" className="sidebar-dropdown list-unstyled collapse">
                                                <li className="sidebar-item">
                                                    <a className="sidebar-link" href="#">Item 1</a>
                                                    <a className="sidebar-link" href="#">Item 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sidebar-item">
                                            <a className="sidebar-link" href="#">Item 2</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="sidebar-cta">
                        <div className="sidebar-cta-content">
                            <strong className="d-inline-block mb-2">Weekly Sales Report</strong>
                            <div className="mb-3 text-sm">
                                Your weekly sales report is ready for download!
                            </div>

                            <div className="d-grid">
                                <a href="https://adminkit.io/" className="btn btn-outline-primary"
                                   target="_blank">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center"/>
                    </a>

                    <form className="d-none d-sm-inline-block">
                        <div className="input-group input-group-navbar">
                            <input type="text" className="form-control" placeholder="Search…" aria-label="Search"/>
                                <button className="btn" type="button">
                                    <i className="align-middle" data-feather="search"/>
                                </button>
                        </div>
                    </form>

                    <ul className="navbar-nav d-none d-lg-block">
                        <li className="nav-item px-2 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button"
                               data-bs-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false">
                                Mega Menu
                            </a>
                            <div className="dropdown-menu dropdown-menu-start dropdown-mega"
                                 aria-labelledby="servicesDropdown">
                                <div className="d-md-flex align-items-start justify-content-start">
                                    <div className="dropdown-mega-list">
                                        <div className="dropdown-header">UI Elements</div>
                                        <a className="dropdown-item" href="#">Alerts</a>
                                        <a className="dropdown-item" href="#">Buttons</a>
                                        <a className="dropdown-item" href="#">Cards</a>
                                        <a className="dropdown-item" href="#">Carousel</a>
                                        <a className="dropdown-item" href="#">General</a>
                                        <a className="dropdown-item" href="#">Grid</a>
                                        <a className="dropdown-item" href="#">Modals</a>
                                        <a className="dropdown-item" href="#">Tabs</a>
                                        <a className="dropdown-item" href="#">Typography</a>
                                    </div>
                                    <div className="dropdown-mega-list">
                                        <div className="dropdown-header">Forms</div>
                                        <a className="dropdown-item" href="#">Layouts</a>
                                        <a className="dropdown-item" href="#">Basic Inputs</a>
                                        <a className="dropdown-item" href="#">Input Groups</a>
                                        <a className="dropdown-item" href="#">Advanced Inputs</a>
                                        <a className="dropdown-item" href="#">Editors</a>
                                        <a className="dropdown-item" href="#">Validation</a>
                                        <a className="dropdown-item" href="#">Wizard</a>
                                    </div>
                                    <div className="dropdown-mega-list">
                                        <div className="dropdown-header">Tables</div>
                                        <a className="dropdown-item" href="#">Basic Tables</a>
                                        <a className="dropdown-item" href="#">Responsive Table</a>
                                        <a className="dropdown-item" href="#">Table with Buttons</a>
                                        <a className="dropdown-item" href="#">Column Search</a>
                                        <a className="dropdown-item" href="#">Muulti Selection</a>
                                        <a className="dropdown-item" href="#">Ajax Sourced Data</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav navbar-align">
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown"
                                   data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="bell"/>
                                        <span className="indicator">4</span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                                     aria-labelledby="alertsDropdown">
                                    <div className="dropdown-menu-header">
                                        4 New Notifications
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-danger" data-feather="alert-circle"/>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Update completed</div>
                                                    <div className="text-muted small mt-1">Restart server 12 to complete
                                                        the update.
                                                    </div>
                                                    <div className="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-warning" data-feather="bell"/>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Lorem ipsum</div>
                                                    <div className="text-muted small mt-1">Aliquam ex eros, imperdiet
                                                        vulputate hendrerit et.
                                                    </div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-primary" data-feather="home"/>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Login from 192.186.1.8</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-success" data-feather="user-plus"/>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">New connection</div>
                                                    <div className="text-muted small mt-1">Christina accepted your
                                                        request.
                                                    </div>
                                                    <div className="text-muted small mt-1">14h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown"
                                   data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="message-square"/>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                                     aria-labelledby="messagesDropdown">
                                    <div className="dropdown-menu-header">
                                        <div className="position-relative">
                                            4 New Messages
                                        </div>
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-5.jpg"
                                                         className="avatar img-fluid rounded-circle"
                                                         alt="Vanessa Tucker"/>
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Vanessa Tucker</div>
                                                    <div className="text-muted small mt-1">Nam pretium turpis et arcu.
                                                        Duis arcu tortor.
                                                    </div>
                                                    <div className="text-muted small mt-1">15m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-2.jpg"
                                                         className="avatar img-fluid rounded-circle"
                                                         alt="William Harris" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">William Harris</div>
                                                    <div className="text-muted small mt-1">Curabitur ligula sapien
                                                        euismod vitae.
                                                    </div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-4.jpg"
                                                         className="avatar img-fluid rounded-circle"
                                                         alt="Christina Mason" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Christina Mason</div>
                                                    <div className="text-muted small mt-1">Pellentesque auctor neque nec
                                                        urna.
                                                    </div>
                                                    <div className="text-muted small mt-1">4h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <img src="img/avatars/avatar-3.jpg"
                                                         className="avatar img-fluid rounded-circle"
                                                         alt="Sharon Lessman" />
                                                </div>
                                                <div className="col-10 ps-2">
                                                    <div className="text-dark">Sharon Lessman</div>
                                                    <div className="text-muted small mt-1">Aenean tellus metus, bibendum
                                                        sed, posuere ac, mattis non.
                                                    </div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all messages</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-flag dropdown-toggle" href="#" id="languageDropdown"
                                   data-bs-toggle="dropdown">
                                    <img src="img/flags/us.png" alt="English"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                                    <a className="dropdown-item" href="#">
                                        <img src="img/flags/us.png" alt="English" width="20"
                                             className="align-middle me-1"/>
                                        <span className="align-middle">English</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <img src="img/flags/es.png" alt="Spanish" width="20"
                                             className="align-middle me-1"/>
                                        <span className="align-middle">Spanish</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <img src="img/flags/ru.png" alt="Russian" width="20"
                                             className="align-middle me-1"/>
                                        <span className="align-middle">Russian</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <img src="img/flags/de.png" alt="German" width="20"
                                             className="align-middle me-1"/>
                                        <span className="align-middle">German</span>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-icon js-fullscreen d-none d-lg-block" href="#">
                                    <div className="position-relative">
                                        <i className="align-middle" data-feather="maximize"></i>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon pe-md-0 dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                    <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded"
                                         alt="Charles Hall"/>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="pages-profile.html"><i
                                        className="align-middle me-1" data-feather="user"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1"
                                                                             data-feather="pie-chart"></i> Analytics</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="pages-settings.html"><i
                                        className="align-middle me-1" data-feather="settings"></i> Settings &
                                        Privacy</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1"
                                                                             data-feather="help-circle"></i> Help Center</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="content">
                    <div className="container-fluid p-0">

                        <h1 className="h3 mb-3">Blank Page</h1>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Empty card</h5>
                                    </div>
                                    <div className="card-body">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row text-muted">
                            <div className="col-6 text-start">
                                <p className="mb-0">
                                    <a href="https://adminkit.io/" target="_blank"
                                       className="text-muted"><strong>AdminKit</strong></a> &copy;
                                </p>
                            </div>
                            <div className="col-6 text-end">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="#">Support</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="#">Help Center</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="#">Privacy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="text-muted" href="#">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        access_token: state.adminApp.access_token
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)
