// const Blogs = () => {
// 	return <h1>Blog Articles</h1>;
// };

// export default Blogs;

// const Home = () => {
// 	return <h1>Home</h1>;
// };

// export default Home;

import { Outlet, Link } from "react-router-dom";

const Blogs = () => {
	return (
		<>
			<Link className="link" to="/">
				go to Layout
			</Link>
			<Outlet />
		</>
	);
};

export default Blogs;
