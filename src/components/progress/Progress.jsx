import "./progress.css"
import { progress } from "../progress/data"
import { Link } from 'react-router-dom'

export const Progress = () => {
    return (
        <div className='chart-progress'>

            {
                progress.map((item) => {
                    return (
                        <>
                            
                            <table key={item.id}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td><Link>{item.link}</Link></td>
                                    <td>{item.title}</td>
                                    <td>{item.students}</td>
                                    <td>{item.students_progress}</td>
                                    <td>
                                        <div className="progress">
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
                                    <td>{<item.prints />}</td>
                                </tr>

                            </table>

                        </>

                    )
                })
            }

        </div>
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
