import {Container} from "postcss";
import React, {useState} from "react";
import {Batches_study, studentss} from "../../progress/data";
import {Link} from "react-router-dom";

const Batches = () => {
	const [search, setSearch] = useState('')
	return (
		<>
		
			
			<div className="chart-progress dark:bg-[#353C48]">
				<div className="add-link">
					<h1>Batch List</h1>
					<Link to="/students/addStudent">add student</Link>
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
						<input type="text" className={'dark:bg-[#353C48]'} onChange={(e) => setSearch(e.target.value)}/>
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
									<th>Name</th>
									<th>Reg.No</th>
									<th>Batch Time</th>
									<th>Start Date</th>
									<th>End Date</th>
									<th>Faculty</th>
									<th>Faculty %</th>
									<th>Action</th>
								</tr>
								</thead>
								<tbody>
								{Batches_study
									.filter((users) => users.title.toLowerCase().includes(search))
									.map((item) => {
										return (
											<tr key={item.id} className={'even:dark:bg-[#313843]'}>
												<td>{item.id}</td>
												<td>
													<Link to={'#'}>{item.link}</Link>
												</td>
												<td>{item.title}</td>
												<td>{item.students}</td>
												<td>{item.students_progress}</td>
												<td>{item.start_Date}</td>
												<td>{item.freeCollected}</td>
												<td>{item.freeDue}</td>
												<td className={"td_flex"}>
													<span className="icons">{<item.edit/>}</span>
													<span className="icons">{<item.dislike/>}</span>
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
		</>
	);
};
export default Batches;
