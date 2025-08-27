import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"; // <-- Import MailchimpForm
import { Linkedin, Github, Instagram } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Menggunakan MailchimpForm di sini */}
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h2 className="logo-text">Hackta</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="#"><Linkedin color="#fff" size={20}/></a>
                <a href="#"><Github color="#fff" size={20}/></a>
                <a href="#"><Instagram color="#fff" size={20}/></a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
