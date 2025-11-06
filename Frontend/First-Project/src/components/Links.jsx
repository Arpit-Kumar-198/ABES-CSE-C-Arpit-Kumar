import { Link, Route, Routes } from 'react-router-dom';

export function Home() {
  return <h1>Home Page</h1>;
}

export function About() {
  return <h1>About Page</h1>;
}

export function Contact() {
  return <h1>Contact Page</h1>;
}

function Links() {
  return (
    <div>
      <nav>
        <Link to="/">HOME</Link> |{" "}
        <Link to="/About">ABOUT</Link> |{" "}
        <Link to="/Contact">CONTACT</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Links;
