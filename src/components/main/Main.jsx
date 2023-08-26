import React from 'react'
import { Link } from "react-router-dom"
import { FaBookOpen } from "react-icons/fa"
import { AiOutlineArrowDown } from "react-icons/ai"
import { PiSuitcaseSimple } from "react-icons/pi"
import { AiOutlinePhone } from "react-icons/ai"
import { AiOutlineArrowUp } from "react-icons/ai"
import './main_1.css'
import Block from './Block'
import Chart from '../Chart/Chart'
import { Progress } from '../progress/Progress'
const Main = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="top_menu">
                    <div className="box">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="box_2">
                        <Link>Dashboard</Link>/<Link>Dashboard</Link>/<Link>Home</Link>
                    </div>
                </div>

                <div className="top_chart">
                    <div className="block">
                        <div className="dev">
                            <h4 className='title'>
                                Monthly Fee Collection
                                <br />
                                32,000 ₨
                            </h4>
                            <br />
                            <span className='word'><AiOutlineArrowDown className='arrow' /> <span className='dunn'>100%</span> Since last month</span>
                        </div>
                        <div className="dev_2">
                            <FaBookOpen className='icon_color' />
                        </div>
                    </div>

                    <div className="block">
                        <div className="dev">
                            <h4 className='title'>
                                Monthly Expenses
                                <br />
                                30,648 ₨
                            </h4>
                            <br />
                            <span className='word'><AiOutlineArrowUp className='arrow_color' /> <span className='dunn_rock'>100%</span>  Since last month</span>
                        </div>
                        <div className="dev_3">
                            <PiSuitcaseSimple className='icon_color2' />
                        </div>
                    </div>


                    <div className="block">
                        <div className="dev">
                            <h4 className='title'>
                                Total Students

                                <br />
                                213
                            </h4>
                            <br />
                            <span className='word'><AiOutlineArrowUp className='arrow_color' /> <span className='dunn_rock'>1</span>  Last month enrolled</span>
                        </div>
                        <div className="dev_4">
                            <AiOutlinePhone className='icon_color3' />
                        </div>
                    </div>
                </div>
                <Block />
                <Chart />
                <Progress />
            </div>
        </div>
    )
}

export default Main