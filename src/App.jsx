import {Route, Routes} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import Enqueries from "./components/pages/Enqueries";
import Students from "./components/pages/Student";
import EnqueiriesLayout from "./components/layout/enqueiriesLayout";
import AddForm from "./components/pages/addEnqueries";
import {AddStudents} from "./components/pages/addStudents";
import {StudentsLayout} from "./components/layout/StudentsLayout";
import Active from "./components/pages/Active";
import {BatchesLayout} from "./components/layout/BatchesLayout";
import Batches from "./components/pages/batches/Batches";
import Transferbatch from "./components/pages/batches/TransBatch";
import Faculties from "./components/pages/Faculties";
import Courses from "./components/pages/Courses";
import Attendies from "./components/pages/Attendies";
import EventsLayout from "./components/layout/EventsLayout";
import EventBooking from "./components/pages/Events/EventBooking";
import Events from "./components/pages/Events/Events";
import MasterLayout from "./components/layout/MastersLayout";
import CourseCategory from "./components/pages/masters/CourseCategory";
import Department from "./components/pages/masters/Department";
import Designation from "./components/pages/masters/Designation";
import EnquiereStatus from "./components/pages/masters/EnquiereStatus";
import ExpenseCategory from "./components/pages/masters/ExpenseCategory";
import Guestst from "./components/pages/masters/Guestst";
import CollectFree from "./components/pages/CollectFee";
import Payroll from "./components/pages/Payroll";
import Expenses from "./components/pages/Expenses";
import Reportslayout from "./components/layout/ReportsLayout";
import {FeeReports} from "./components/pages/reports/FeeReports";
import {ExpensesReports} from "./components/pages/reports/ExpenseReports";
import SettingsLayout from "./components/layout/SettingsLayout";
import Currency from "./components/pages/settings/setting/Currency";
import {Users} from "./components/pages/settings/setting/Users";
import WebSettingsLayout from "./components/layout/WebSettingsLayout";
import Profile from "./components/pages/profile/Profile.jsx";

const App = () => {
	
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path="/" element={<Main/>}/>
					
					<Route
						path="/enquiries"
						element={<Enqueries/>}
					/>
					
					<Route
						path="/layout"
						element={<EnqueiriesLayout/>}
					>
						<Route path="/layout/addform" element={<AddForm/>}/>
					</Route>
					<Route
						path="/students/"
						element={<StudentsLayout/>}
					>
						<Route
							path="/students/students"
							element={<Students open={open}/>}
						/>
						<Route
							path="/students/addStudent"
							element={<AddStudents/>}
						/>
						<Route
							path="/students/active"
							element={<Active/>}
						/>
					</Route>
					<Route
						path="/batches/"
						element={<BatchesLayout/>}
					>
						<Route path="/batches/batch" element={<Batches/>}/>
						<Route path="/batches/transfer" element={<Transferbatch/>}/>
					</Route>
					<Route
						path="/faculties"
						element={<Faculties/>}
					/>
					<Route
						path="/Courses"
						element={<Courses/>}
					/>
					<Route
						path="/Attendance"
						element={<Attendies/>}
					/>
					<Route
						path="/event"
						element={<EventsLayout/>}
					>
						<Route path="/event/books" element={<EventBooking/>}/>
						<Route path="/event/events" element={<Events/>}/>
					</Route>
					<Route path="/master" element={<MasterLayout/>}>
						<Route
							path="/master/courses-category"
							element={<CourseCategory/>}
						/>
						<Route path="/master/department" element={<Department/>}/>
						<Route path="/master/designation" element={<Designation/>}/>
						<Route path="/master/enquierStatus" element={<EnquiereStatus/>}/>
						<Route
							path="/master/Expense-category"
							element={<ExpenseCategory/>}
						/>
						<Route path="/master/Guests" element={<Guestst/>}/>
					</Route>
					<Route path="/collect" element={<CollectFree open={open}/>}/>
					<Route path="/payroll" element={<Payroll open={open}/>}/>
					<Route path="/expenses" element={<Expenses open={open}/>}/>
					<Route path="/reports" element={<Reportslayout/>}>
						<Route path="/reports/fee-reports" element={<FeeReports/>}/>
						<Route
							path="/reports/experence-reports"
							element={<ExpensesReports/>}
						/>
					
					</Route>
					<Route
						path="/profile"
						element={<Profile open={open}/>}
					/>
					<Route path="/settings" element={<SettingsLayout/>}>
						<Route path="/settings/currency" element={<Currency/>}/>
						<Route path="/settings/users" element={<Users/>}/>
					</Route>
					<Route path="/websettings" element={<WebSettingsLayout/>}>
						<Route path="/websettings/currency" element={<Currency/>}/>
						<Route path="/websettings/users" element={<Users/>}/>
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
