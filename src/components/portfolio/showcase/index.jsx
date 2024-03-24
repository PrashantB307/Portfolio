import React from "react";
import "./style.scss";
import Arrow from "../../shared/arrow";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase" >
            {data.map((project) => (
                <div
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                    key={project.id}
                >
                    
                    <a href={project.link} target="new">
                        <div className="meta-content">    
                            <h3>{project.name}</h3>
                            <link rel="stylesheet" href={project.link} />
                            <div className="go-to-cta"  >
                                <span className="text">See Project</span>
                                <Arrow />
                            </div>
                        </div>
                    </a>
                    <img src={project.media.thumbnail} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Showcase;