import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/b.png';
import freshBurger from '../../assets/a (1).png';
import hipsster from '../../assets/c.png';
import fitLift from '../../assets/cd.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/VishnuVardhanKosuru/WhyDidBabaYagaTakeMyBrother"
          h3="Empathy Game"
          p="using Unity3D"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/VishnuVardhanKosuru/ASD_prediction_using_KNN"
          h3="ASD prediction"
          p="ML disorder prediction"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/VishnuVardhanKosuru/EDA_travel_analysis"
          h3="E.D.A."
          p="on Travel Dataset"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/VishnuVardhanKosuru/censusdutymanagementsystem"
          h3="Census Duty System"
          p="Using Java Swing & postgresSQL"
        />
      </div>
    </section>
  );
}

export default Projects;