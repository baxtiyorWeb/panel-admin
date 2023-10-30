import {useState} from "react";
import Container from "../shared/Container";
import {Link} from "react-router-dom";
import "./../progress/progress.css";

const Payroll = () => {
    const [Course, setCourse] = useState('')
    const [month, setMonth] = useState('')
    const [years, setYears] = useState('')
    return (<Container>
        <div className="chart-progress dark:bg-[#353C48]">
            <div className="around_one">
                <div className="around_user">
                    <h2 className="dark:text-[#96a2b4] text-[25px]">Pyroll</h2>
                </div>
                <div className="around_of dark:bg-[#3B4452]">
                    <Link>Dashboard</Link>/<Link>Transfer</Link>/<Link>Temp</Link>
                </div>
            </div>
            <br/>
            <br/>
            <h4 className="add-link">Search cretiera</h4>
            <div className={'input-box grid grid-cols-3'}>
                <div className="name">
                    <span>Course</span>
                    <select
                        name=""
                        id="selection"
                        className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
                        onChange={(e) => setCourse(e.target.value)}
                        value={Course}
                    >
                        <option>Select course</option>
                        <option>Modern Web App Development</option>
                        <option>Android Application Development</option>
                        <option>Advanced Graphics Designing</option>
                        <option>Microsoft Office Professional</option>
                        <option>Adobe Illustrator</option>
                        <option>Testing MT 2</option>
                        <option>Bootcamp</option>
                        <option>Android Test</option>
                        <option>digital marketing</option>
                        <option>Front end</option>
                        <option>Back end</option>
                    </select>
                </div>
                <div className="name">
                    <span>Course</span>
                    <select
                        name=""
                        id="selection"
                        className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
                        onChange={(e) => setMonth(e.target.value)}
                        value={month}
                    >
                        <option>Select Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>mart</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </div>
                <div className="name">
                    <span>Course</span>
                    <select
                        name=""
                        id="selection"
                        className="dark:bg-[#353C48] dark:border dark:border-[1px_solid_green]  dark:text-[#fff] text-[16px] p-3 "
                        onChange={(e) => setYears(e.target.value)}
                        value={years}
                    >
                        <option>Select Years</option>
                        <option>2022</option>
                        <option>2023</option>
                    </select>
                </div>
            </div>
            <button
                className={'w-[84px] h-[36px] p-3 bg-[#4F5ECE] font-[600] text-[#fff] px-[10px] rounded-sm m-[10px]  flex justify-center items-center'}>search
            </button>
        </div>
    </Container>);
};

export default Payroll;
