import React from "react";
import ReactDOM from "react-dom";
// import BeautyRadio from "./../../lib/index";
import BeautyRadio from "react-beautiful-radio";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checked1 : true,
			checked2 : true
		};
	}

    handleChange1 = () => {
        this.setState({
			checked1: !this.state.checked1
        })
	}
	
	handleChange2 = () => {
        this.setState({
            checked2: !this.state.checked2
        })
    }

	render() {
	    const { checked1, checked2 } = this.state;
		return (
            <div>
				<div>
					<p>单选按钮</p>
					<BeautyRadio
						checked={checked1}
						value={''}
						onClick={this.handleChange1}
					/>
				</div>
				<div>
					<p>禁用单选按钮</p>
					<BeautyRadio
						disabled
						checked={true}
						value={''}
						onClick={this.handleChange1}
					/>
				</div>
				<div>
					<p>带label的单选按钮</p>
					<BeautyRadio
						checked={checked2}
						value={'apple'}
						onClick={this.handleChange2}
					/>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("example"));
