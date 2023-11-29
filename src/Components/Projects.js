import "./styles/Projects.css";
import p1 from "./images/projects/p1.png";
import p2 from "./images/projects/p2.jpg";
import p3 from "./images/projects/p3.png";
import p4 from "./images/projects/p4.png";
import git from "./images/contact/github.png";
import web from "./images/contact/web.png";

function Projects() {
    let projects = [
        {
            id: 1,
            img: p1,
            title: " Byte Blogs",
            tech: " React, Node, Express, MongoDB, Redux, JWT.",
            desc: " Developed a blogs post website using MERN stack  mainly focussing on CRUD operations and also implemented login authentication.",
            github: "https://github.com/avpavanreddy/byteblogs",
            web: "https://byteblogs.netlify.app/",
            deploy: true,
        },
        {
            id: 2,
            img: p2,
            title: " Stock Alerter",
            tech: " Reactjs, CSS, Bootstrap.",
            desc: " Stock Alerter is a web application that helps users set an alert for a user-defined price and the user will get an alert mail when the stock hits the user-defined price.",
            github: "https://github.com/avpavanreddy/stock-alerter",
            web: "https://stock-alert-services.netlify.app/",
            deploy: true,
        },

        {
            id: 3,
            img: p3,
            title: " Fitness Tracker",
            tech: " React Native, CSS, JS.",
            desc: "Developed a cross-platform fitness tracker mobile app using React Native.",
            github: "https://github.com/avpavanreddy/fitness-tracker",
            deploy: false,
        },
        {
            id: 4,
            img: p4,
            title: " Portfolio",
            tech: " Reactjs, CSS, Bootstrap.",
            desc: "Discover my portfolio website, a captivating showcase of my skills, projects, certifications, and personal details, elegantly designed to impress and engage visitors.",
            github: "https://github.com/avpavanreddy/portifolio",
            web: "https://avpavan.netlify.app/",
            deploy: true,
        }
    ];

    return (
        <div>
            <div className="ProjectsBackground">
                <div style={{ height: "10vh", backgroundColor: "transparent" }}></div>
                {projects.map((project) => {
                    if (1)
                        return (
                            <div
                                style={{ backgroundColor: "white", border: "1px solid" }}
                                className="row m-4"
                            >
                                <div className="row m-1">
                                    <div className="col-12 col-md-6 col-lg-5 col-xl-4 my-auto py-2">
                                        <img src={project.img} width="100%" />
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-7 col-xl-8 my-auto py-4 oddProjectDesc">
                                        <p>
                                            <b>Title :</b>
                                            {project.title}
                                        </p>
                                        <p>
                                            <b>Technologies :</b>
                                            {project.tech}
                                        </p>
                                        <p>
                                            <b>Description :</b>
                                            {project.desc}
                                        </p>
                                        <a href={project.github}>
                                            <img
                                                src={git}
                                                className="git"
                                                style={{ width: "40px" }}
                                            ></img>
                                        </a>
                                        {project.deploy && (
                                            <a href={project.web}>
                                                <img
                                                    className="web"
                                                    src={web}
                                                    style={{ width: "40px" }}
                                                ></img>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                })}
                <div style={{ height: "5vh", backgroundColor: "transparent" }}></div>
            </div>
        </div>
    );
}

export default Projects;
