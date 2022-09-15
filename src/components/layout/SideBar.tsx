import React from "react";
import {Link} from "react-router-dom";

const SideBar: React.FC<{}> = (props) => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/fees"}>
                            Fee
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/transaction"}>
                            Transaction
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/students"}>
                            Students
                        </Link>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Others</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/group"}>
                            Groups
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="src/components/dashboard/Dashboard#">
                            <span data-feather="file-text"></span>
                            Last quarter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="src/components/dashboard/Dashboard#">
                            <span data-feather="file-text"></span>
                            Social engagement
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="src/components/dashboard/Dashboard#">
                            <span data-feather="file-text"></span>
                            Year-end sale
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar;
