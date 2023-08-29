import "./progress.css"
import { progress } from "../progress/data"
import { Link } from 'react-router-dom'

export const Progress = () => {
    return (
<<<<<<< HEAD
        <div className="chart-progress">
            <div id="demo">
                <div>
=======
        <div className='chart-progress'>
            <div id="demo">
                <div >
>>>>>>> 6dec06f56f68c9ee9482f35394730f2a119d54f0
                    <div className="table-responsive-vertical shadow-z-1">
                        <table id="table" className="table table-hover table-mc-light-blue">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Batch</th>
                                    <th>Course</th>
                                    <th>Students</th>
                                    <th>Fee Progress</th>
                                    <th>Start Date</th>
                                    <th>Fee Collected</th>
                                    <th>Fee Due</th>
                                </tr>
                            </thead>
<<<<<<< HEAD
                            {progress.map((item) => {
                                return (
                                    <tbody key={item.id}>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>
                                                <Link>{item.link}</Link>
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.students}</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="min-progress">
                                                        <div className="progress_length">
                                                            {item.students_progress}
                                                        </div>
                                                        <div
                                                            className="progress-min-length-item"
                                                            style={{
                                                                width: ` ${item.students_progress}%`,
                                                                backgroundColor: item.bgColor,
                                                            }}
                                                        ></div>
                                                        <div className="min-progress-path"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.start_Date}</td>
                                            <td>{item.freeCollected}</td>
                                            <td>{item.freeDue}</td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
=======
                            {
                                progress.map((item) => {
                                    return (
                                        <tbody key={item.id}>
                                            <tr>
                                                <td >{item.id}</td>
                                                <td ><Link>{item.link}</Link></td>
                                                <td >
                                                    {item.title}
                                                </td>
                                                <td>{item.students}</td>
                                                <td>
                                                    <div className='progress'>
                                                        <div className='min-progress'>
                                                            <div className="progress_length">
                                                                {item.students_progress}
                                                            </div>
                                                            <div className="progress-min-length-item"
                                                                style={{
                                                                    width: `${item.students_progress}%`,
                                                                    backgroundColor: item.bgColor
                                                                }}>
                                                            </div>
                                                            <div className="min-progress-path">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{item.start_Date}</td>
                                                <td>{item.freeCollected}</td>
                                                <td>{item.freeDue}</td>
                                            </tr>

                                        </tbody >
                                    )
                                })
                            }
                        </table >
                    </div >


                </div>

            </div >

        </div >
>>>>>>> 6dec06f56f68c9ee9482f35394730f2a119d54f0
    )
}
{/* <div className='progress'>
                                        <div className='min-progress'>
                                            <div className="progress_length">
                                                {item.students_progress}
                                            </div>
                                            <div className="progress-min-length-item"
                                                style={{
                                                    width: `${item.students_progress}%`,
                                                    backgroundColor: item.bgColor
                                                }}>
                                            </div>
                                            <div className="min-progress-path">

                                            </div>
                                        </div>
                                    </div> */}
