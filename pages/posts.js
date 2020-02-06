import Wrapper from '../components/page-wrapper';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
const u = require('../scripts/util.js');
const csvtojson = require("csvtojson");
let Posts = props => ( 
    <Wrapper title="Posts">
        <div>
        {props.postsData.map(data=>(<div className='hoverListItem' key={data.id}>
          <Link href="/posts/[id]" as={`/posts/${data.id}`}>
          <a>
            
            <span>  
            <a><p> {data.title}</p>
        <p style={{fontSize: '60%'}}>Created: {u.formatDate(u.getDateObj(data.created))}</p></a>
                    <hr />
                    </span>
               
            
            </a></Link> <style jsx>{`
  /* unvisited link */
  a {
    text-decoration: none;
  }

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
`}</style></div>
        ))}
        </div>

    </Wrapper>
)

export default Posts

Posts.getInitialProps = async function() {

    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSAf5a1pwIj-yjKPFhoyQdHTS3hHBNZVYXQRTCoAHXd6zYMy58iZr0IW054WglBJk9afknsTIeVS8eF/pub?output=csv');
    const csv = await res.text();
    let json = await csvtojson().fromString(csv).then(json => {
        return json;
    });

    for(let i=0; i<json.length; i++){
        let stamp = json[i].created;
        if(stamp * 1 == stamp)
        stamp = stamp * 1
        let d = new Date(stamp);
        json[i].createdStamp = + d;
    }

    json = json.sort(sortByDate);

    function sortByDate(a,b){
        if(a.createdStamp > b.createdStamp) return -1;
        if(a.createdStamp < b.createdStamp) return 1;
        return 0;
    }

    //const json = await csvtojson
    return {postsData: json}
}

async function convert(csv){
    
}