import './App.css';
import { Col, Row } from "react-bootstrap";
import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
            <div>
              <Row>
                <Col>
                  <Link className="link1" to="/projects">Projects</Link>
                  <Link className="link2" to="/contact">Contact</Link>
                </Col>
              </Row>
            </div>
        </nav>
        <header className="App-header">
          <h1>
           Hello World
          </h1>
        </header>
        <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
