import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectGrid } from "./ProjectGrid"; // <-- Import the new grid component
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const colorSharp2 = "https://placehold.co/1920x1080/000000/111111?text=.";

export const Projects = () => {

  // Data is now separated by category for easier management
  const webMobileProjects = [
    { title: "Aplikasi E-Commerce", description: "Web Development", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=E-Commerce" },
    { title: "Website Sekolah", description: "Web Development", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Web+Sekolah" },
    { title: "Aplikasi Resep Makanan", description: "Mobile Development", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=App+Resep" },
  ];

  const uiUxProjects = [
    { title: "Desain Aplikasi Mobile", description: "UI/UX Design", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Mobile+App" },
    { title: "Redesign Landing Page", description: "UI/UX Design", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Landing+Page" },
  ];
  
  const dataGameProjects = [
    { title: "Game Edukasi", description: "Game Development", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Game+Edukasi" },
    { title: "Analisis Data Penjualan", description: "Data Science", imgUrl: "https://placehold.co/600x400/fdb827/000000?text=Data+Science" },
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>A
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portofolio Proyek Siswa</h2>
                <p>Lihat apa yang telah dibangun oleh para siswa kami. Ini adalah bukti nyata dari kurikulum praktis yang kami terapkan.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web & Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data & Game</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* Use the ProjectGrid component here */}
                      <ProjectGrid projects={webMobileProjects} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ProjectGrid projects={uiUxProjects} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <ProjectGrid projects={dataGameProjects} />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"/>
    </section>
  )
}

export default Projects;
