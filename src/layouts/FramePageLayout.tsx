import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const FramePageLayout = () => {
    return (
        <div className="d-flex flex-column">
            <div className="position-fixed w-100" style={{ height: '4.5vh', zIndex: 1000 }}>
                <NavBar />
                <div style={{ height: '0.5vh' }} className="bg-danger"></div>
            </div>
            <div className="container-fluid" style={{ paddingTop: '5vh' }}>
                <Row>
                    <Col md={1} className="p-0 position-fixed h-100" style={{ top: '5vh' }}>
                        <Sidebar />
                    </Col>
                    <Col md={{ span: 11, offset: 1 }} className="p-4" style={{ overflowY: 'auto', height: '95vh' }}>
                        <Outlet />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FramePageLayout;
