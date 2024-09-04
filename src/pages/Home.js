// const Home = () => {
// 	return <h1>Home</h1>;
// };

// export default Home;

import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Home = () => {
	return (
		<>
			<h1>
				<Link className="link" to="/blogs">
					Blogs
				</Link>
			</h1>
			<Link className="link" to="/contact">
				Contact
			</Link>
			<Outlet />
		</>
	);
};

export default Home;
