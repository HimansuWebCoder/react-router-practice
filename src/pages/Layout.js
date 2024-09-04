import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
	return (
		<>
			<nav>
				<ul className="link-container">
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="link" to="/blogs">
							Blogs
						</Link>
					</li>
					<li>
						<Link className="link" to="/contact">
							Contact
						</Link>
					</li>
					<li>
						<Link className="link" to="/todos">
							all todos
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
