import Link from 'next/link';

const wrapperStyle = {
    color: "#ccc",
    fontFamily: "'Raleway', sans-serif"
};

const sideBarStyle = {
    width: '240px',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: '0px',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '5px'
};

const contentStyle = {
    marginLeft: '250px'
};

const PageLink = props => (
<li><Link href={props.href}><a>{props.name}</a></Link>
<style jsx>{`
  /* unvisited link */
  a:link {
    color: #ccf;
  }
  
  /* visited link */
  a:visited {
    color: #ccf;
  }
  
  /* mouse over link */
  a:hover {
    color: #88f;
  }
  
  /* selected link */
  a:active {
    color: #88f;
  }
`}</style></li>
)

const Sidebar = props => (
    
    <div style={wrapperStyle}>
        <style jsx global>{`
          body {
            background-image: url("/static/media/image/back.jpg")
          }
            
        `}</style>
    <div style={sideBarStyle}>
        <h3>Pages</h3>
        
       <ul>
           <PageLink href='/' name='Home' />
           <PageLink href='/projects' name='Projects' />
       </ul>
         </div>
    <div style={contentStyle}>
        {props.children}
    </div>
    

    </div>
);

export default Sidebar;