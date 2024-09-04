import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import AllTodos from "./pages/AllTodos";
import Delete from "./pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="todos" element={<AllTodos />} />
          <Route path={`/todos/:id/delete`} element={<Delete />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/todos" element={<Layout />}>
          <Route index element={<AllTodos />} />
          <Route path=":id/delete" element={<Delete />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
