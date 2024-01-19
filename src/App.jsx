import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Row>
        <BrowserRouter>
          <Col sm={2}>
            <MyNav />
          </Col>
          <Col sm={10}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Col>
        </BrowserRouter>
      </Row>
    </div>
  );
}

export default App;
