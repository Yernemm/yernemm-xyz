import Wrapper from '../components/page-wrapper';
import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab, fas);

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    margin: 'auto',
    padding: '5px',
    borderRadius:'25px'

}

const linkBorderStyle = {
    width:'70px',
    height:'70px',
    margin:'5px',
    borderRadius:'5px'
}

const LinkBtn = props => (
    <div style={{display: 'inline', float: 'left'}}>
    <div style={{...{backgroundColor: props.color}, ...linkBorderStyle}}>
        
        <a href={props.url} style={linkStyle}><FontAwesomeIcon icon={['fab',props.name]} height='50'/></a>
        </div>    
    </div>
)


const Home = (prop) => (
    <Wrapper title="Home">
        <div style={{textAlign: 'center'}}>
       <h1>Yernemm</h1>
       <h2>Creating web tools since 2016</h2>
       <h3>just for fun.</h3>
      
       </div>
       <br/>
       
       <h1><b>Links</b></h1>  
        <div>
            <div style={{textAlign: 'center'}}>
                <LinkBtn url='https://twitter.com/Yernemm' color='#1ca0f1' name='twitter' />
                <LinkBtn url='https://www.youtube.com/channel/UCfOGXFJdLqnhfENzTCC9IjA/featured' color='red' name='youtube' />
                <a href="https://twitter.com/Yernemm"><FontAwesomeIcon icon={['fab','twitter']} height='50'/></a>
                <a href="https://www.youtube.com/channel/UCfOGXFJdLqnhfENzTCC9IjA/featured"><FontAwesomeIcon icon={['fab','youtube']} height='50'/></a>
                <a href="https://www.reddit.com/user/yernemm"><FontAwesomeIcon icon={['fab','reddit']} height='50'/></a>
                <a href="https://github.com/Yernemm/"><FontAwesomeIcon icon={['fab','github']} height='50'/></a>
                <a href="https://discord.gg/uqhkBt8"><FontAwesomeIcon icon={['fab','discord']} height='50'/></a>
                <a href="https://discord.gg/wFbJZqC" className="fab fab-btn w3-card-4" style={{backgroundColor: "#d5855c"}}><img style={{maxHeight: "50px", width: "auto"}} src="/static/media/icons/brigitte.png"/></a>
              
              </div>
            </div>
</Wrapper>
)

Home.getInitialProps = async function(){

    return {};
    
  
}


export default Home;