import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//COMPONENTS
import Login from "./Page/Login/Login";
import ForgotPassword from "./Page/ForgotPassword/ForgotPassword";
//Ngo User
import ProgramList from "./RoleNgoUser/Programs/ProgramList/ProgramList";
import ProgramSingle from "./RoleNgoUser/Programs/ProgramSingle/ProgramSingle";
import ProgramUpdateSingle from "./RoleNgoUser/Programs/ProgramUpdateSingle/ProgramUpdateSingle";
import AddProgramUpdate from "./RoleNgoUser/Programs/AddProgramUpdate/AddProgramUpdate";
import ProgramUpdates from "./RoleNgoUser/Programs/ProgramUpdates/ProgramUpdates";
import BeneficiaryList from "./RoleNgoUser/Beneficiary/BeneficiaryList/BeneficiaryList";
import AddNewBeneficiary from "./RoleNgoUser/Beneficiary/AddNewBeneficiary/AddNewBeneficiary";
import BeneficiarySingle from "./RoleNgoUser/Beneficiary/BeneficiarySingle/BeneficiarySingle";
import ViewBeneficiaryReports from "./RoleNgoUser/Beneficiary/ViewBeneficiaryReports/ViewBeneficiaryReports";
import AddReport from "./RoleNgoUser/Beneficiary/AddReport/AddReport";
import ReportSingle from "./RoleNgoUser/Beneficiary/ReportSingle/ReportSingle";
import Notifications from "./RoleNgoUser/Notifications/Notifications/Notifications";

function App() {
  return (
    <div className="App">
      <Router>
        {/* PAGE */}
        <Route exact path="/" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        {/* NGO user */}
        <Route exact path="/dashboard" component={ProgramList} />
        <Route exact path="/program-single" component={ProgramSingle} />
        <Route
          exact
          path="/program/update-single"
          component={ProgramUpdateSingle}
        />
        <Route exact path="/program/add-update" component={AddProgramUpdate} />
        <Route
          exact
          path="/program/program-updates"
          component={ProgramUpdates}
        />

        <Route exact path="/notifications" component={Notifications} />

        <Route exact path="/beneficiary-list" component={BeneficiaryList} />
        <Route exact path="/add-beneficiary" component={AddNewBeneficiary} />
        <Route exact path="/single-beneficiary" component={BeneficiarySingle} />
        <Route exact path="/view-report" component={ViewBeneficiaryReports} />
        <Route exact path="/add-report" component={AddReport} />
        <Route exact path="/report-single" component={ReportSingle} />
      </Router>
    </div>
  );
}

export default App;
