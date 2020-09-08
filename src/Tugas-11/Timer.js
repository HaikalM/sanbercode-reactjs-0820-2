import React from 'react'

class Timer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			formatWaktu: "j:m:d",
			time: new Date(),
			count: 0,
			timeOutput: null,
			visibleComponent: true
		}
	}

	componentDidMount(){
		this.countID = setInterval(
			() => this.tick(),
			1000
		)
	}

	tick(){
		this.timeFormat()
		this.setState({
			count: this.state.count + 1,
			time: new Date(),
		})
	}

	timeFormat(){
		let jam = this.state.time.getHours()
		if(jam < 10) jam = '0' + jam;

		let menit = this.state.time.getMinutes()
		if(menit < 10) menit = '0' + menit;

		let detik = this.state.time.getSeconds()
		if(detik < 10) detik = '0' + detik;

		let formatWaktu = this.state.formatWaktu
			.replace('j', jam)
			.replace('m', menit)
			.replace('d', detik)

		this.setState({
			timeOutput: `${formatWaktu}`
		})
	}


	timerCountdown(){
		//var jam = Math.floor((this.state.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		//var menit = Math.floor((this.state.time % (1000 * 60 * 60)) / (1000 * 60));
		//var detik = Math.floor((this.state.time % (1000 * 60)) / 1000);
	}


	componentDidUpdate(){
		if(this.state.visibleComponent === true){
			if(this.state.count > 100){
				this.setState({
					visibleComponent: false
				})
				this.componentWillUnmount()
			}
		}
		//if(this.props.userID !== prevProps.userID){
			//this.fetchData(this.props.userID)
		//}
	}

	componentWillUnmount(){
		clearInterval(this.countID)
	}

	render(){
		const visible  = () => {
			return this.state.visibleComponent
		}

		return(
			<>
				{this.state.visibleComponent && (
					<>
						<h1 style={{textAlign: 'center'}}> {this.state.visibleComponent} Timer : {this.state.timeOutput} </h1>
						<h1 style={{textAlign: 'center'}}> Counter : {this.state.count} </h1>
					</>
				)}
			</>
		)
	}
}

export default Timer
