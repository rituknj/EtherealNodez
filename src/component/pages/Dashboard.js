import React from "react";
import { Grid } from "@mui/material";
import SideNavbar from "./SideNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosAddCircle } from "react-icons/io";
import eyevector from "../Image/EyeVector.png";
import Chart from "./Chart";
import { GrAddCircle } from "react-icons/gr";
import Datetabs from "./Dashboardfiles/Datetabs";

export default function Dashboard() {
  return (
    <div className="">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3} m-q-b-d-n>
          <SideNavbar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <div className="row m-t-2">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="dashboard">
                <div className="dashboard__box pa-1">
                  <div className="d-f j-c-s-b">
                    <div className="font-f f-s-1_5">Available Balance</div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="toggle-buttons font-f"
                      >
                        USD
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">BUSD</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <h2 className="font-f f-w-600 m-t-0_5">$25,456.90</h2>
                  </div>
                  <div>
                    <span className="font-f f-s-1 f-w-600">0.699 2Real</span>
                    <span className="m-l-0_5 tab f-w-600">
                      <IoIosAddCircle className="icons-io m-r-0_3" />
                      67.08%
                    </span>
                    <span className="m-l-2">
                      <img src={eyevector} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="dashboard">
                <div className="dashboard__box pa-1">
                  <div className="d-f j-c-s-b">
                    <div className="font-f f-s-1_5">Total Earnings</div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="toggle-buttons font-f"
                      >
                        TOKEN
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">BUSD</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <h2 className="font-f f-w-600 m-t-0_5">2.599 2Real</h2>
                  </div>
                  <div>
                    <span className="font-f f-s-1 f-w-600">$55,689.04</span>
                    <span className="m-l-0_5 tab f-w-600">
                      <IoIosAddCircle className="icons-io m-r-0_3" />
                      67.08%
                    </span>
                    <span className="m-l-2">
                      <img src={eyevector} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="dashboard">
                <div className="dashboard__box pa-1">
                  <div className="d-f j-c-s-b">
                    <div className="font-f f-s-1_5">Mining Rate</div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="toggle-buttons font-f"
                      >
                        USD
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">BUSD</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <h2 className="font-f f-w-600 m-t-0_5">$170.22</h2>
                  </div>
                  <div>
                    <span className="font-f f-s-1 f-w-600">2.559 2Real</span>
                    <span className="m-l-0_5 tab f-w-600">
                      <IoIosAddCircle className="icons-io m-r-0_3" />
                      67.08%
                    </span>
                    <span className="m-l-2">
                      <img src={eyevector} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-t-2">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="dashboard__box-total pa-1">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <h4 className="font-f">Total Node</h4>
                    </div>
                    <div>
                      <h1 className="font-f f-s-4 m-t-0_5">15</h1>
                    </div>
                    <div className="d-f m-t-5">
                      <GrAddCircle className="gr-icon" />
                      <div className="m-l-0_5 font-f">Create New Node</div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="d-f j-c-s-b row m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-p"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Mini</span>{" "}
                      </div>
                      <div className="col-2">
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-s"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Standard</span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-h"></div>
                      </div>
                      <div className="col-8">
                        {" "}
                        <span className="font-f">Heavy</span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-m"></div>
                      </div>
                      <div className="col-8">
                        {" "}
                        <span className="font-f">Master</span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-ep"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Executive Project </span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-em"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Executive Master</span>{" "}
                      </div>{" "}
                      <div className="col-2">
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="dashboard__box-perfomance pa-1"><div className="font-f f-s-1_5">Performance</div>
              <div className="row">
              <div className="col-8"></div>
              <div className="col-4"><Datetabs/></div>
              </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
