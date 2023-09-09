import {Container} from "postcss";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Event_book} from "../../progress/data";

const Events = () => {
	const [search, setSearch] = useState("");
	return (
		<>
			
			<div className="chart-progress dark:bg-[#353C48]">
				<div className="add-link">
					<h1>Course List</h1>
					<Link to="/students/addStudent">add Course</Link>
				</div>
				<div className="user_blew">
					<div className="user_blow">
						<h4>Show</h4>
						<select name="name" id="select" className={'dark:bg-[#353C48]'}>
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
									<th>Event</th>
									<th>Slots</th>
									<th>Name</th>
									<th>Fee</th>
									<th>Email</th>
									<th>Mobile</th>
									<th>CNIC</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
								</thead>
								<tbody>
								{Event_book.filter((users) =>
									users.link.toLowerCase().includes(search)
								).map((item) => {
									return (
										<tr key={item.id} className={'even:dark:bg-[#313843]'}>
											<td>{item.id}</td>
											<td>
												<Link>{item.link}</Link>
											</td>
											<td>{item.title}</td>
											<td>{item.students}</td>
											<td>{item.students_progress}</td>
											<td>{item.star}</td>
											<td>{item.freeCollected}</td>
											<td>{item.email_status}</td>
											<td className={'td_flex'}>
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

export default Events;
