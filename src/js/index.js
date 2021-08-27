//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter";

let counter = 0;

function counterIncrement() {
	ReactDOM.render(
		<SecondsCounter counter={counter} />,
		document.querySelector("#app")
	);
	counter++;
}

setInterval(counterIncrement, 1000);
