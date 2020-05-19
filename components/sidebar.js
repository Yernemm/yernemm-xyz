import Link from 'next/link';
import Head from 'next/head';


const PageLink = props => (<>
<Link href={props.href}><a>
<div className='sidebarLink'>🡪 {props.name}
</div>
</a></Link>
<style jsx>{`


.sidebarLink {
  background-color: rgba(50,50,150,0.2);
  margin: auto;
}

a {
  text-decoration: none;
  transition-duration: 0.2s;
}

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
  font-size: 120%;
}

/* selected link */
a:active {
  color: #88f;
}

`}</style>
</>)

const NormalLink = props => (
  <>
<a href={props.href}>
<div className='sidebarLink'>🡪 {props.name}
</div>
</a>
<style jsx>{`


.sidebarLink {
  background-color: rgba(50,50,150,0.2);
  margin: auto;
}

a {
  text-decoration: none;
  transition-duration: 0.2s;
}

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
  font-size: 120%;
}

/* selected link */
a:active {
  color: #88f;
}

`}</style>
</>
)


const Sidebar = props => (
    
    <div className='wrapperstyle'>

    <div className='sidebarstyle'>
        <h3>Pages</h3>
        
      
           <PageLink href='/' name='Home' />
           <PageLink href='/projects' name='Projects' />
           <PageLink href='/posts' name='Posts' />
           <NormalLink href='/blog/' name='Blog' /><br/>

           <a href="https://www.patreon.com/bePatron?u=12603883" ><img src='/static/patreon.png' style={{opacity: '0.8', borderRadius: '5px', maxHeight: '40px'}}></img></a>

           
           
      
         </div>
    <div className='contentstyle'>
        {props.children}
    </div>
    

    </div>
);

export default Sidebar;