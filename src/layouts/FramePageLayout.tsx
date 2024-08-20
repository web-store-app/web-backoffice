import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const FramePageLayout = () => {
  return (
    <div className="d-flex flex-column">
        <div style={{height: '4.5vh'}}>
            <NavBar />
        </div>
        <div style={{height: '0.5vh'}} className="bg-danger">
        </div>
        <div className="container-fluid" style={{height: '95vh'}}>
            <Row className="h-100">
                <Col md={1} className="p-0">
                    <Sidebar />
                </Col>
                <Col md={11} className=" p-4">
                    <Outlet />
                </Col>
            </Row>
        </div>
    </div>
  );
};

export default FramePageLayout;
