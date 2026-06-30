import { Link, NavLink } from "react-router-dom";
// Link / NavLink — chuyển trang không reload
// NavLink tự thêm class active khi đúng route 
// end ở Home — tránh / match mọi route

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/quizzes">Quiz</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;