import { useState } from "react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(["true"]);
  const [sidebarWidth, setSidebarWidth] = useState("280px");


  const openCloseSidebar = () =>{
    const newState = !sidebarOpen;
    setSidebarOpen(newState)
    if(newState){
        setSidebarWidth("280px");
    }else{
        setSidebarWidth("0px");

    }
  }

  return (
    <>
      <div
        className="p-3"
        style={{ position: "absolute", left: "0", top: "0", zIndex: '20' }}
        onClick={openCloseSidebar}
      >
        <a
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xaHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
      </div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: sidebarWidth, height: "100vh", overflow: "scroll" }}
      >
        <a
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xaHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a to="#" className="nav-a active" aria-current="page">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xaHref="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a to="#" className="nav-a text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xaHref="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a to="#" className="nav-a text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xaHref="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a to="#" className="nav-a text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xaHref="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a to="#" className="nav-a text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use xaHref="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
