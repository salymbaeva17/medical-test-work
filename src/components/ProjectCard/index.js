import React from 'react';
import "./style.css"

const ProjectCard = ({el}) => {
    return (
        <div className="col-3">
            <div className="project-card">
                <img src={el.image} alt={el.title} />
                <div className="project-info">
                    <h3 className="project-title">{el.title}</h3>
                    <div className="project-date">
                        <span>{el.startDate}</span> - <span>{el.finishDate}</span>гг.
                    </div>
                    <span className="project-author">{el.author}</span>
                    <span className="project-company">{el.company}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;