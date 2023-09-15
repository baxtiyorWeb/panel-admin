import './block.css'
import Chart from "react-apexcharts";
import React from "react";

class Block extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
			series: [{
				name: "Students",
				data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 33, 43, 88]
			}],
			options: {
				chart: {
					height: 320,
					type: 'line',
					zoom: {
						enabled: false
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'straight'
				},
				title: {
					text: 'Product Trends by Month',
					align: 'right',
				},
				grid: {
					row: {
						colors: ['#f3f3f3', 'transparent '], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
				xaxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				}
			},
			
			
		};
	}
	
	
	render() {
		
		return (
			<div style={{display: 'flex', justifyContent: 'space-between dark:bg-[#353C48] '}}>
				<div className="Revenue_Chart h-[50vh] dark:bg-[#353C48] dark:text-[#637574] text-[#B6BDC2] font-normal">
					<h3>Revenue Chart of Month August</h3>
					
					<Chart options={this.state.options} series={this.state.series} type="line" height={350}/>
				</div>
			</div>
		
		)
			;
	}
}

export default Block