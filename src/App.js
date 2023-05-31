import Navbar from "./component/pages/Navbar";
import "./component/scss/Main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import "./App.scss";
import Form1 from "./component/pages/Form1";
import Page404 from "./component/pages/Page404";
import SideNavbar from "./component/pages/SideNavbar";
import Dashboard from "./component/pages/Dashboard";

function App() {
  return (
    <div className="  ">
      <Router>
        <Navbar />
        {/* <SideNavbar /> */}
        <Routes>
      <Route path="/" element={<Dashboard />} />
          {/*  <Route path="/form" element={<Form1 />} />
          <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
