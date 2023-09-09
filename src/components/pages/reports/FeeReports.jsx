import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Courses_time} from "../../progress/data";

export const FeeReports = () => {
	const [search, setSearch] = useState("");
	return (
		<>
			<div className="around_one">
				<div className="around_user">
					<h2>Fee reports</h2>
				</div>
				<div className="around_of">
					<Link>Dashboard</Link>/<Link>Course</Link>/<Link>Temp</Link>
				</div>
			</div>
			<div className="chart-progress">
				<div className="add-link">
					<h1>Fee reports List</h1>
					<Link to="/students/addStudent">add Expenses</Link>
				</div>
				<div className="user_blew">
					<div className="user_blow">
						<h4>Show</h4>
						<select name="name" id="select">
							<option className="one_more" value="name">
								10
							</option>
						</select>
						<h4>entries</h4>
					</div>
					<div className="user_input">
						<h4>Search:</h4>
						<input type="text" onChange={(e) => setSearch(e.target.value)}/>
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
									<th>Course Title</th>
									<th>Category</th>
									<th>Duration</th>
									<th>Fee</th>
									<th>Students</th>
									<th>Faculties</th>
									<th>Batches</th>
									<th>Email Status</th>
									<th>Action</th>
								</tr>
								</thead>
								<tbody>
								{Courses_time.filter((users) =>
									users.title.toLowerCase().includes(search)
								).map((item) => {
									return (
										<tr key={item.id}>
											<td>{item.id}</td>
											<td>
												<Link to={"#"}>{item.link}</Link>
											</td>
											<td>{item.title}</td>
											<td>{item.students}</td>
											<td>{item.students_progress}</td>
											<td>{item.star}</td>
											<td>{item.freeCollected}</td>
											<td>{item.number}</td>
											<td>{item.email_status}</td>
											<td className={'td_flex'}>
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
		</>
	);
};
