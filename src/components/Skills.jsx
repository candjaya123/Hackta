import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const meterImg = "https://placehold.co/150x150/fdb827/1A1A1A?text=95%25";

export const Skills = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="py-20" id="skills">
        <div className="container mx-auto px-6">
            <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-[64px] text-center p-10 md:p-16 -mt-24 shadow-xl">
                <h2 className="text-4xl font-bold mb-4">Keahlian Unggulan</h2>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-lg mb-12">Fokus kami pada teknologi yang paling dibutuhkan di industri saat ini.</p>
                <Carousel responsive={responsive} infinite={true} className="w-full">
                    <div className="item p-4">
                        <img src={meterImg} alt="Skill Meter" className="w-1/2 mx-auto mb-4"/>
                        <h5 className="text-xl font-semibold">Web Development</h5>
                    </div>
                    <div className="item p-4">
                        <img src={meterImg} alt="Skill Meter" className="w-1/2 mx-auto mb-4"/>
                        <h5 className="text-xl font-semibold">Mobile Development</h5>
                    </div>
                    <div className="item p-4">
                        <img src={meterImg} alt="Skill Meter" className="w-1/2 mx-auto mb-4"/>
                        <h5 className="text-xl font-semibold">UI/UX Design</h5>
                    </div>
                    <div className="item p-4">
                        <img src={meterImg} alt="Skill Meter" className="w-1/2 mx-auto mb-4"/>
                        <h5 className="text-xl font-semibold">Data Science</h5>
                    </div>
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default Skills;