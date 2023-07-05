import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ProtectedRoute from "./ProtectedRoute";
import MainPage from "./Screen/Home/MainPage";
import RegisterAll from "./Screen/Registration/RegisterAll";
import Login from "./Screen/Registration/Login";
import DoctorHome from "./Screen/Doctor/DoctorHome/DoctorHome";
import DoctorAppointments from "./Screen/Doctor/DoctorAppointments/DoctorAppointments";
import UpdateDoctorProfile from "./Screen/Doctor/DoctorProfile/UpdateDoctorProfile";
import SetDoctorSchedule from "./Screen/Doctor/DoctorSchedule/DoctorSchedule";
import DoctorReciept from "./Screen/Doctor/DoctorReciept/DoctorReciept";
import HospitalHome from "./Screen/Hospital/HospitalHome/HospitalHome";
import AddDoctor from "./Screen/Hospital/AddDoctor/AddDoctor";
import ViewAppointments from "./Screen/Hospital/ViewAppointments/ViewAppointments";
import ViewDoctors from "./Screen/Hospital/ViewDoctors/ViewDoctors";
import PatientAppointments from "./Screen/Patient/PatientAppointsments/PatientAppointments";
import PatientHome from "./Screen/Patient/PatientHome/PatientHome";
import TakeAppointments from "./Screen/Patient/TakeAppointments/TakeAppointments";
import EditHospitalDetails from "./Screen/Hospital/EditHospitalDetails/EditHospitalDetails";
import PatientProfile from "./Screen/Patient/PatientProfile/PaitentProfile";
import RegisterPatient from "./Screen/Registration/RegisterPatient";


function Launcher() {
    return (  
        <>
            <BrowserRouter>
                <Switch>

                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/Login" component={Login}></Route>
                    <ProtectedRoute exact path="/UserHome" component={MainPage}></ProtectedRoute>
                    <ProtectedRoute exact path="/DoctorHome" component={DoctorHome}></ProtectedRoute>
                    <ProtectedRoute exact path="/DoctorAppointments" component={DoctorAppointments}></ProtectedRoute>
                    <ProtectedRoute exact path="/UpdateDoctorProfile" component={UpdateDoctorProfile}></ProtectedRoute>
                    <ProtectedRoute exact path="/SetDoctorSchedule" component={SetDoctorSchedule}></ProtectedRoute>
                    <ProtectedRoute exact path="/GenerateDoctorReciept" component={DoctorReciept}></ProtectedRoute>

                    <ProtectedRoute exact path="/HospitalHome" component={HospitalHome}></ProtectedRoute>
                    <ProtectedRoute exact path="/AddDoctor" component={AddDoctor}></ProtectedRoute>
                    <ProtectedRoute exact path="/ViewAppointments" component={ViewAppointments}></ProtectedRoute>
                    <ProtectedRoute exact path="/ViewDoctors" component={ViewDoctors}></ProtectedRoute>
                    <ProtectedRoute exact path="/EditHospitalDetails" component={EditHospitalDetails}></ProtectedRoute>

                    <ProtectedRoute exact path="/PatientHome" component={PatientHome}></ProtectedRoute>
                    <ProtectedRoute exact path="/PatientAppointments" component={PatientAppointments}></ProtectedRoute>
                    <ProtectedRoute exact path="/TakeAppointments" component={TakeAppointments}></ProtectedRoute>
                    <ProtectedRoute exact path="/PatientProfile" component={PatientProfile}></ProtectedRoute>
                    

                    {/* <Route exat path="/" component={Register}></Route> */}
                <Route exact path="/register" component={RegisterAll}></Route>
                <Route exact path="/RegisterPatient" component={RegisterPatient}></Route>
                
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Launcher;