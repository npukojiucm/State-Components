export default function ProjectList(props) {
    const projects = props.projects.map(project => {
        return <img src={project.img} alt={project.category} className="list-item"/>
    })

    return (
        <div className="project-list">
            {projects}
        </div>
    )
}
