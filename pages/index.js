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
    padding: '0px',
    marginTop:'40px',

}

const linkBorderStyle = {
    width:'70px',
    height:'70px',
    margin:'5px',
    borderRadius:'5px',
    paddingTop:'10px'
}

const GeneralBtn = props => (
    <div style={{display: 'inline', float: 'left'}}>
    <div style={{...{backgroundColor: props.color}, ...linkBorderStyle}}>       
    <a href={props.url} style={linkStyle}>{props.children}</a>
        </div>    
    </div>
)

const LinkBtn = props => (
    <GeneralBtn color={props.color} url={props.url}>
        <FontAwesomeIcon icon={['fab',props.name]} height='50'/>
    </GeneralBtn>
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
       <p>
        <div>
            <div style={{margin:'auto', textAlign: 'center', height:'100px'}}>
                <LinkBtn url='https://twitter.com/Yernemm' color='#1ca0f1' name='twitter' />
                <LinkBtn url='https://www.youtube.com/channel/UCfOGXFJdLqnhfENzTCC9IjA/featured' color='red' name='youtube' />
                <LinkBtn url='https://www.reddit.com/user/yernemm' color='orangered' name='reddit' />
                <LinkBtn url='https://github.com/Yernemm/' color='black' name='github' />
                <LinkBtn url='https://discord.gg/uqhkBt8' color='purple' name='discord' />
                <GeneralBtn color='#d5855c' url='https://discord.gg/wFbJZqC'>
                <img style={{maxHeight: "50px", width: "auto"}} src="/static/media/icons/brigitte.png"/>
                </GeneralBtn>
                
              </div>
            </div>
            </p>
</Wrapper>
)

Home.getInitialProps = async function(){

    return {};
    
  
}


export default Home;