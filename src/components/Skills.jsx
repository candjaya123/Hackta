import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Ganti dengan path gambar Anda atau gunakan placeholder
const meterImg = "https://placehold.co/150x150/fdb827/000000?text=95%25";
const colorSharp = "https://placehold.co/1920x1080/000000/111111?text=.";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Keahlian Unggulan</h2>
                        <p>Fokus kami pada teknologi yang paling dibutuhkan di industri saat ini, <br></br> memastikan siswa kami siap berkarir.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meterImg} alt="Skill Meter" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meterImg} alt="Skill Meter" />
                                <h5>Mobile Development</h5>
                            </div>
                            <div className="item">
                                <img src={meterImg} alt="Skill Meter" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={meterImg} alt="Skill Meter" />
                                <h5>Data Science</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}

export default Skills;
