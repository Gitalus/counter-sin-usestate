import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter({ counter }) {
	const myStyle = {
		background: "#111",
		color: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "200px",
		width: "100%",
		fontSize: "6rem",
		fontWeight: "bold",
		letterSpacing: "100px"
	};
	let counterString = String(counter);
	return (
		<>
			<div style={myStyle}>
				<i className="far fa-clock"></i>
				{counterString.padStart(6, "0")}
			</div>
		</>
	);
}

SecondsCounter.propTypes = {
	counter: PropTypes.number
};
