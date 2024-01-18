// Install necessary packages using:
// npm install react react-dom react-router-dom@next bootstrap

// App.js
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import NoteState from "./context/NoteState";
import Header from "./layout/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <NoteState>
      <div className="container">
        {" "}
        <Router>
          <Header />
          <Container style={{ marginTop: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Container>
        </Router>
      </div>
    </NoteState>
  );
}

export default App;
