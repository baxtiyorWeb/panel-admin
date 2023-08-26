import React from 'react'
import "./progress.css"
import { progress } from "../progress/data"
import { Link } from 'react-router-dom'

export const Progress = () => {
    return (
        <div className='chart-progress'>
            {
                progress.map((item, index) => {
                    return (
                        <div key={item.id}>

                            <div className='Batch_details' >
                                <span>{item.id}</span>
                                <Link>{item.link}</Link>
                                <span>{item.title}</span>
                                <span>{item.students_progress}</span>
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
                                <span>{item.start_Date}</span>
                                <span>{item.freeCollected}</span>
                                <span>{item.freeDue}</span>
                                <span>{<item.prints />}</span>
                            </div>

                        </div>

                    )
                })
            }

        </div>
    )
}
