import "../App.css";

import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Delete = () => {
	const [color, setColor] = useState("red");

	function colorize() {
		setColor("yellow");
	}

	return (
		<div id="delete-box">
			<h2> {color} Do you really want to delete this todo</h2>
			<button onClick={colorize}>Delete</button>
			<button>
				<Link className="link" to="/todos">
					Cancel
				</Link>
			</button>
			<Outlet />
		</div>
	);
};

export default Delete;
