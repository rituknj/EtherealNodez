import React, { useEffect, useState, useLayoutEffect } from "react";
import { MdDashboard, MdPendingActions } from "react-icons/md";
import { GiWallet, GiSpawnNode } from "react-icons/gi";
import { FaHistory, FaMoon, FaSun } from "react-icons/fa";
import { IoIosPodium } from "react-icons/io";
import moon from "../Svg/moon-svgrepo-com.svg";
import dashboard from "../Image/Dashboard.png";
import wallet from "../Image/Wallet.png";
import {TbBrandPrisma} from "react-icons/tb"
import pending from "../Image/PendingVector.png";
import history from "../Image/HistoryVector.png";
import top from "../Image/TopVector.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function SideNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // ---------dark---------mode----------------

  useLayoutEffect(() => {
    const data = window.localStorage.getItem("theme");
    if (data === "dark-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }, []);

  const [theme, setTheme] = useState("light-theme");
  const toggleThemelight = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("light-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "light-theme"
    );
    // window.location.reload();
  };
  const toggleThemedark = () => {
    theme === "dark-theme" ? setTheme("dark-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "dark-theme" : "dark-theme"
    );
    // window.location.reload();
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="">
        <div className="">
          <div className=" side-bg m-q-b-d-n">
            <div className="sidebar">
              <div className="sidebar__inner">
                <ul className="l-s-t-n t-d-n ">
                  <NavLink className="nav_link" to="/">
                    <li className="p-y-0_5 p-x-1_5 c-p m-t-1 sidebar__tabs ">
                    

                    <MdDashboard className="m-r-0_5 b-c-t" />
                      
                      <span className="font-f  f-w-600 p-t-0_5">
                        Dashboard
                      </span>
                    </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/wallet">
                    <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
                      <GiWallet className="m-r-0_5 b-c-t" /> 
                      
                      <span className="font-f  f-w-600 p-t-0_5">Wallet</span>
                    </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/node">
                    <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
                     <TbBrandPrisma className="m-r-0_5 b-c-t"/>
                      <span className="font-f  f-w-600 p-t-0_5">Node</span>
                    </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/pendingwithdrawal">
                    <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
                      <MdPendingActions className="m-r-0_5 b-c-t"/>
                      <span className="font-f  f-w-600 p-t-0_5">
                        Pending Withdrawal
                      </span>
                    </li>
                  </NavLink>
                  <NavLink >
                    <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
                      <FaHistory className="m-r-0_5 b-c-t"/>
                      <span className="font-f  f-w-600 p-t-0_5">
                        History
                      </span>
                    </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/topearner">
                    <li className="pa-0_5 c-p m-t-1 sidebar__tabs ">
                      <IoIosPodium className="m-r-0_5 b-c-t"/>
                      <span className="font-f  f-w-600 p-t-0_5">
                        Top Earners
                      </span>
                    </li>
                  </NavLink>
                </ul>
                <div className="sidebar__bottom m-l-0 ps-a b-o-1">
                  <ul className="l-s-t-n">
                    <li>
                      {theme != "dark-theme" ? (
                        <span onClick={() => toggleThemedark()} className="font-f c-p">
                         <FaMoon className="f-s-1 b-c-t"/> Light Theme
                         
                        </span>
                      ) : (
                          <span onClick={() => toggleThemelight()} className="font-f c-p">
                         <FaSun className="f-s-1 b-c-t"/>   Dark Theme
                         
                        </span>
                      )}
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
