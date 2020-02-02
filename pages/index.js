import Wrapper from '../components/page-wrapper';
import Tooltip from '../components/tooltip';
import fetch from 'isomorphic-unfetch';
import projects from '../scripts/projectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab, fas);

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    margin: 'auto',
    padding: '0px',
    marginTop:'25px',
}

const linkBorderStyle = {
    width:'70px',
    height:'60px',
    margin:'5px',
    borderRadius:'5px',
    paddingTop:'20px'
}

const linksWrapper = {
    margin:'auto', 
    textAlign: 'center', 
    height:'100px',
    display:'inline-block',
    left:'50px'
}

const GeneralBtn = props => (
    <Tooltip text={props.desc}>
    <a href={props.url} style={linkStyle} target="_blank">
    <div style={{display: 'inline', float: 'left'}}>
    <div style={{...{backgroundColor: props.color}, ...linkBorderStyle}}>       
    {props.children}
    


        </div>    
    </div>

    </a>
    </Tooltip>
)

const LinkBtn = props => (
    <GeneralBtn color={props.color} url={props.url} desc={props.desc}>
        <FontAwesomeIcon icon={['fab',props.name]} height='40'/>
    </GeneralBtn>
)


const Home = (prop) => (
    <Wrapper title="Home">
        <div style={{textAlign: 'center'}}>
            <img src='/static/media/image/snowballFull.png' height='250px' />
       <h1>Yernemm</h1>
       <h2>Creating web tools since 2016</h2>
       <h3>just for fun.</h3>
      
       </div>
       <br/>
       
       <h1><b>Profiles &amp; Socials</b></h1>  
       <p>
        <div style={{textAlign:'center'}}>
            <div style={linksWrapper}>
                <LinkBtn url='https://twitter.com/Yernemm' color='#1ca0f1' name='twitter' desc='My Twitter Page' />
                <LinkBtn url='https://www.youtube.com/channel/UCfOGXFJdLqnhfENzTCC9IjA/featured' color='red' name='youtube' desc='My YouTube Channel' />
                <LinkBtn url='https://www.reddit.com/user/yernemm' color='orangered' name='reddit' desc='My Reddit Account' />
                <LinkBtn url='https://github.com/Yernemm/' color='#04090e' name='github' desc='My Github Account' />
                <LinkBtn url='https://discord.gg/uqhkBt8' color='#7289da' name='discord' desc='My (old) Discord Server' />
                <GeneralBtn color='#d5855c' url='https://discord.gg/wFbJZqC' desc='Brigitte Mains Discord Server' >
                <img style={{maxHeight: "40px", width: "auto"}} src="/static/media/icons/brigitte.png"/>
                </GeneralBtn>
                
              </div>
            </div>
            </p>
            <h1><b>Projects</b></h1>
            <p>
                {projects.allSmall}
            </p>
</Wrapper>
)



export default Home;