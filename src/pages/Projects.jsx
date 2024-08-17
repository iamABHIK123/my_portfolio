import React from 'react';
import data from './localDB.json'; // Adjust the path as needed

const Projects = () => {
  const projects = data.projects; // Extract 'projects' data from JSON

  return (
    <div className="projects col-md-9 p-5 mt-4">
      <h1 className="text-white">{projects.title}</h1>
      <p className="mt-4" style={{ color: 'grey' }}>
        {projects.description}
      </p>
      <div>
        <input 
          type="text" 
          name="search" 
          id="search_bar" 
          placeholder={projects.searchPlaceholder} 
        />
      </div>
      <div className="row mt-4">
        {projects.projectsList.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="project-card p-3">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.link} className="btn btn-primary">View Project</a>
            </div>
          </div>
        ))}
      </div>
      <div className="dotted-line-container mt-5" style={{ width: '100%' }}>
        <div className="dotted-line" style={{ width: '100%' }}></div>
      </div>
      <div className="connect mt-4 mb-4">
        <div className="arrows">
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
        </div>
        <div>
          <p>Let's Connect!</p>
        </div>
      </div>
      <div className="copyright" style={{ color: 'gainsboro' }}>
        <p>{projects.footer}</p>
      </div>
    </div>
  );
}

export default Projects;
