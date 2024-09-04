import { Outlet, Link } from "react-router-dom";
const id = 4;

const AllTodos = () => {
	return (
		<>
			<h1>All todos</h1>
			<Link className="link" to="/">
				go to Layout
			</Link>
			<Link className="link" to={`/todos/${id}/delete`}>
				Delete
			</Link>
			<Outlet />
		</>
	);
};

export default AllTodos;
