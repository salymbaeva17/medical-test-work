import React from 'react';
import "./style.css"

const ProjectCard = ({el}) => {
    return (
        <div className="col-3 mb-4">
            <div className="project-card">
                <img src={el.image} alt={el.title} />
                <div className="project-info">
                    <h3 className="project-title">{el.title}</h3>
                    <div className="project-date">
                        <i className='bx bx-calendar-alt'/><span>{el.startDate?.split("-").join(".")}</span> - <span>{el.finishDate?.split("-").join(".")}</span>гг.
                    </div>
                    <p className="project-author">
                        <i className='bx bxs-user'/>{el.author}
                    </p>
                    <p className="project-company">
                        <i className='bx bx-ruble'/>{el.company}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;