import { Button, Col, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

function MyFooter() {
  return (
    <>
      <footer className="d-flex justify-content-center text-secondary mb-2 mt-6">
        <div className="d-flex flex-column">
          <div>
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
          </div>
          <Row className=" gap-3 gap-sm-5 gap-nr-6">
            <Col>
              <Col>Audio and Subtitle</Col>
              <Col>Media Center</Col>
              <Col>Privacy</Col>
              <Col>Contact Us</Col>
            </Col>
            <Col>
              <Col>Audio Description</Col>
              <Col>Investory Relatio</Col>
              <Col>Legal Notices</Col>
            </Col>
            <Col>
              <Col>Help Center</Col>
              <Col>Jobs</Col>
              <Col>Cookie Peference</Col>
            </Col>
            <Col>
              <Col>Gift Cards</Col>
              <Col>Terms of Use</Col>
              <Col>Coporate Information</Col>
            </Col>
          </Row>
          <div>
            <Button variant="outline-secondary">Service Code</Button>
            <p>@ 1997-2019 Netflix Inc.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default MyFooter;
