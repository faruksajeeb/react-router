import ProjectComponentFour from "../components/project/ProjectComponentFour";
import ProjectComponentOne from "../components/project/ProjectComponentOne";
import ProjectComponentThree from "../components/project/ProjectComponentThree";
import ProjectComponentTwo from "../components/project/ProjectComponentTwo";

const Project = () => {
    return (
        <div>
            <h1>Project Page</h1>
            <ProjectComponentOne/>
            <ProjectComponentTwo/>
            <ProjectComponentThree/>
            <ProjectComponentFour/>
        </div>
    );
};

export default Project;