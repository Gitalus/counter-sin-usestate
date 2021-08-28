//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter";

let intervalo = setInterval(counterIncrement, 1000);

let counter = 0;

const styleButtons = {
	background: "black",
	color: "white",
	fontSize: "30px",
	border: "none",
	borderRadius: "5px",
	margin: "10px",
	padding: "3px 30px"
};
const containerStyle = {
	display: "flex",
	justifyContent: "center"
};
function renderContent() {
	ReactDOM.render(
		<>
			<SecondsCounter counter={counter} />
			<div style={containerStyle}>
				<button onClick={restartInterval} style={styleButtons}>
					Resume Increment
				</button>
				<button onClick={stopInterval} style={styleButtons}>
					Stop
				</button>
				<form onSubmit={countDown}>
					<input
						type="number"
						placeholder="Enter a CountDown"
						name="inputCountdown"></input>
					<button type="submit" style={styleButtons}>
						Countdown
					</button>
				</form>
			</div>
		</>,
		document.querySelector("#app")
	);
}

function counterIncrement() {
	renderContent();
	counter++;
}

function counterDecrement() {
	counter--;
	renderContent();
}

function restartInterval() {
	clearInterval(intervalo);
	intervalo = setInterval(counterIncrement, 1000);
}

function stopInterval() {
	clearInterval(intervalo);
}

function countDown(event) {
	stopInterval();
	event.preventDefault();
	let inputValue = Number(event.target.inputCountdown.value);
	if (inputValue != false) {
		counter = Number(event.target.inputCountdown.value) + 1;
	}
	intervalo = setInterval(checkCounter, 1000);
}

function checkCounter() {
	if (counter > 0) {
		counterDecrement();
	} else {
		clearInterval(intervalo);
		alert("Time reached!");
		counter = 0;
	}
}
