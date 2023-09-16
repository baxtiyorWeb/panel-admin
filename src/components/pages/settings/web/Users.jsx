import {useState} from "react";
import {Email_function} from "../../../progress/data";
import Select from "react-select";
import {Link} from "react-router-dom";

const options = [
	{value: "chocolate", label: "Chocolate"},
	{value: "strawberry", label: "Strawberry"},
	{value: "vanilla", label: "Vanilla"},
];
const ColorStyle = {
	control: (styles) => ({...styles, width: "482px", background: "transparent"}),
};
export const WebSettingsUsers = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [search, setSearch] = useState("");
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div className="div-block dark:bg-[#353C48] dark:border dark:border-[#3b4452]">
				<h2 className="title">Add Enquiry Status</h2>
				<div>
					<span>name</span>
					<input type="text" placeholder="name" className={'dark:bg-[#3B4452]'}/>
				</div>
				<div>
					<span>Last name</span>
					<input type="text" placeholder="last name" className={'dark:bg-[#3B4452]'}/>
				</div>
				<div
					style={{
						width: "90%",
						marginTop: "10px",
						marginBottom: "40px",
					}}
				>
					<Select
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={options}
						styles={ColorStyle}
					/>
				</div>
				<div>
					<span>Email</span>
					<input type="text" placeholder="email" className={'dark:bg-[#3B4452]'}/>
				</div>
				<div>
					<span>Password</span>
					<input type="text" placeholder="password" className={'dark:bg-[#3B4452]'}/>
				</div>
				
				<div></div>
				
				<div>
					<h3>Detail</h3>
				</div>
				<button>submit</button>
			</div>
			<div
				style={{
					width: "65%",
					boxShadow: " 0px 4px 8px 0px rgba(34, 60, 80, 0.2)",
				}}
			>
				<div
					className="around_one"
					style={{
						borderBottom: "1px solid #E1E1E1",
						paddingBottom: "23px",
					}}
				>
					<div className="around_user dark:text-[#96a2b4] text-[25px]">
						<h2>users list</h2>
					</div>
					<div className="around_of dark:bg-[#3B4452]">
						<Link to={'#'}>Dashboard</Link>/<Link to={'#'}>Course</Link>/<Link to={'#'}>Temp</Link>
					</div>
				</div>
				<div className="chart-progress dark:bg-[#353C48]">
					<div className="add-link">
						<h1>Enquiry Status List</h1>
						<Link to="/students/addStudent">add Course</Link>
					</div>
					<div className="user_blew">
						<div className="user_blow">
							<h4>Show</h4>
							<select name="name" id="select" className={'dark:bg-transparent'}>
								<option className="one_more" value="name">
									10
								</option>
							</select>
							<h4>entries</h4>
						</div>
						<div className="user_input">
							<h4>Search:</h4>
							<input type="text" className={'dark:bg-[#3B4452] border border-cyan-600'} onChange={(e) => setSearch(e.target.value)}/>
						</div>
					</div>
					<div id="demo">
						<div>
							<div className="table-responsive-vertical shadow-z-1">
								<table
									id="table"
									className="table table-hover table-mc-light-blue"
								>
									<thead>
									<tr>
										<th>#</th>
										<th> name</th>
										<th>Designation</th>
										<th>image</th>
										<th>Action</th>
									</tr>
									</thead>
									<tbody>
									{Email_function.filter((users) =>
										users.title.toLowerCase().includes(search)
									).map((item) => {
										return (
											<tr key={item.id} className={'even:dark:bg-[#313843]  even:hover:bg-[#E7E9EB] dark:bg-[#353C48] text-[#398dc9] dark:text-[#EEE8CC] font-normal'}>
												<td>{item.id}</td>
												<td>{item.title}</td>
												<td>{item.students}</td>
												<td
													style={{
														display: "flex",
													}}
												>
													<span className="icons">{<item.edit/>}</span>
													<span className="icons">{<item.delete/>}</span>
												</td>
											</tr>
										);
									})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
