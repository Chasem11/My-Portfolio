import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Skills.css';
import colorSharp from "../assets/img/color-sharp.png"

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

  const skills = [
    { name: "JavaScript & TypeScript", proficiency: 100 },
    { name: "PHP & Laravel", proficiency: 100 },
    { name: "React.js & Vue.js", proficiency: 100 },
    { name: "Nest.js & Nest.js", proficiency: 100},
    { name: "Python", proficiency: 100 },
    { name: "SQL", proficiency: 90 },
    { name: "MongoDB", proficiency: 80 },
    { name: "Node.js", proficiency: 100 },
    { name: "C# & .NET", proficiency: 80 },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I’m skilled in full-stack development, working with technologies like Vue.js, React, Next.js, Nest.js, Django, and Laravel to create responsive front-end interfaces and back-end APIs.
                I also have experience in database management, version control with Git, and using AWS and Docker for efficient deployments.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <CircularProgressbar
                      value={skill.proficiency}
                      text={`${skill.proficiency}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#AA367C",
                        trailColor: "#ddd"
                      })}
                    />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};