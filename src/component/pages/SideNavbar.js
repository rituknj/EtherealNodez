import React from "react";
import { MdDashboard, MdPendingActions } from "react-icons/md";
import { GiWallet, GiSpawnNode } from "react-icons/gi";
import { BiHistory } from "react-icons/bi";
import { FcPositiveDynamic } from "react-icons/fc";

export default function SideNavbar() {
  return (
    <>
    <div className="container">
    <div className="row">
    <div className="col-lg-3">
      <div className="sidebar">
        <div className="sidebar__inner">
          <ul className="l-s-t-n t-d-n ">
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs ">
              <MdDashboard className="m-r-0_5 " />
              <span>Dashboard</span>
            </li>
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
              <GiWallet className="m-r-0_5" />
              <span>Wallet</span>
            </li>
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
              <GiSpawnNode className="m-r-0_5" />
              <span>Node</span>
            </li>
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
              <MdPendingActions className="m-r-0_5" />
              <span>Pending Withdrawal</span>
            </li>
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
              <BiHistory className="m-r-0_5" />
              <span>History</span>
            </li>
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs ">
              <FcPositiveDynamic className="m-r-0_5" />
              <span>Top Earners</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
