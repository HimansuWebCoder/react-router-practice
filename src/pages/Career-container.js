import { Outlet, Link } from "react-router-dom";

const CareerContainer = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/career">Career</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default CareerContainer;
