import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab, fas);
class Project {

    constructor(data){
        this.file= data.file
        this.name= data.name
        this.cat= data.cat
        this.type= data.type
        this.desc= data.desc
        this.img= data.img
    }

    getIcon(){
        let mapping = {      
            'Web Tools': 'globe',
            'Standalone': 'download',
            'External': 'external-link-alt'
        }

        return (<FontAwesomeIcon icon={mapping[this.type]} height='16'/>)
    }

    getSmall(){
        return (<div><Link href={'/projects/' + this.file}><a>
    {this.getIcon()} {this.name}
            </a></Link><style jsx>{`
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
`}</style></div>)
    }

    getBig(){
        return (
            <Link href={this.file}><a>
    <div className="w3-bar w3-border-top w3-border-bottom w3-border-blue">

        <div className={`proj-cat-${this.cat}`}>
            
       
        <img src={this.img} className="w3-bar-item w3-circle" style={{width:"35px", float:'left', borderRadius:'50%'}} />
        <div className="w3-bar-item">{this.getIcon()}
        <span className="w3-large" dangerouslySetInnerHTML={{__html: this.name}}>
              
              </span><br />
          <span>{this.desc}</span>
        </div>
    </div> <hr />
      </div>
      <style jsx>{`
  /* unvisited link */
  a:link {
    color: #ddf;
    text-decoration: none;
  }
  
  /* visited link */
  a:visited {
    color: #ddf;
  }
  
  /* mouse over link */
  a:hover {
    color: #88f;
  }
  
  /* selected link */
  a:active {
    color: #88f;
  }
`}</style>
    </a></Link>
        )
    }

}

var projsString = "";
let projects = [];
let allBig = [];
let allSmall = [];

const imgOverwatch = "/static/media/icons/ow.svg"
const imgOther = "/static/media/icons/hammer.png"
const imgOwmn = "/static/media/icons/owmn.svg"
const imgSnobot = "/static/media/icons/snobot.png"

function addProj(file, name, type, cat, desc, img, icon){
    let p = new Project({
        file: file,
        name: name,
        cat: cat,
        type: type,
        desc: desc,
        img: img,
        icon: icon
    })
    projects.push(p);
    allSmall.push(p.getSmall());
    allBig.push(p.getBig());
}

addProj(
    'https://snobot.xyz',
    'SnoBot',
    'External',
    'normal',
    'Discord Bot - Startpage - Ecosystem',
    imgSnobot
)

addProj(
    '/projects/overwatch',
    'Overwatch Hero Generator',
    'Web Tools',
    'ow',
    'This page will choose an Overwatch hero for you to play either randomly or based on chosen conditions.',
    imgOverwatch
)

addProj(
    '/projects/owleakgen',
    'Overwatch Fake 4chan Leak Generator',
    'Web Tools',
    'ow',
    'This page will generate a fake 4chan-style leak for Overwatch content.',
    imgOverwatch
)

addProj(
    '/projects/patpatpat',
    'Pat Pat Pat',
    'Web Tools',
    'ow',
    'Pat Pat Pat!',
    imgOverwatch
)

addProj(
    '/projects/wintermei',
    'Mei\'s Winter Experience',
    'Web Tools',
    'ow',
    "Experience an accurate recreation of Mei's Winter Wonderland.",
    imgOverwatch
)

addProj(
    '/projects/owHeroConcept',
    'Overwatch Random Hero Concept Creator',
    'Web Tools',
    'ow',
    "This page will randomly generate a concept Overwatch hero.",
    imgOverwatch
)

addProj(
    '/projects/owet',
    'OverWatch Extract Toolkit',
    'Standalone',
    'ow',
    'A set of tools for extracting files from Overwatch, including a DataTool GUI.',
    imgOverwatch
)



addProj(
    '/projects/owmn-icons/',
    'OWMN CSS Generator',
    'Web Tools',
    'ow',
    'Generate the CSS and spritesheet for OWMN subreddits.',
    imgOwmn
)

addProj(
    '/projects/memegen',
    'Meme Name Generator',
    'Web Tools',
    'normal',
    'This will generate a name based on memes.',
    imgOther
)

addProj(
    '/projects/fannamegen',
    'Fantasy Character Name Generator',
    'Web Tools',
    'normal',
    'This will generate a name with a fantasy style.',
    imgOther
)





export default {arr: projects, allSmall: allSmall, allBig: allBig};