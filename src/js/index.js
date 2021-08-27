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

function counterIncrement() {
	ReactDOM.render(
		<>
			<SecondsCounter counter={counter} />
			<button onClick={restartInterval}>Resume</button>
			<button onClick={stopInterval}>Stop</button>
			<form onSubmit={countDown}>
				<input
					type="number"
					placeholder="Enter a CountDown"
					name="inputCountdown"></input>
				<button type="submit">Countdown</button>
			</form>
		</>,
		document.querySelector("#app")
	);
	counter++;
}

function restartInterval() {
	intervalo = setInterval(counterIncrement, 1000);
}

function stopInterval() {
	clearInterval(intervalo);
}

function countDown(event) {
	event.preventDefault();
	counter = Number(event.target.inputCountdown.value);
}
