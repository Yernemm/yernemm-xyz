import Wrapper from '../../components/page-wrapper';
import projects from '../../scripts/projectsData';


let Projects = props => (
    <Wrapper title='Projects'>
        {projects.allBig}
    </Wrapper>
)



export default Projects;