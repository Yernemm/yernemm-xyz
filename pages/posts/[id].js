import Wrapper from '../../components/page-wrapper';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import GoogleDoc from '../../scripts/GoogleDoc'
import Head from 'next/head'
const csvtojson = require("csvtojson");
let Posts = props => ( 
    <Wrapper title={"Post: " + props.postData.title} >

        
      <div dangerouslySetInnerHTML={props.body} className="belowdiv" />
      <Head><style jsx global>{`
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

  img {
      max-width: 100%;
  }
`}</style></Head>
      
      <hr />
        <div style={dateStyle}>{getDates(props.postData.created, props.postData.updated)}</div>
    </Wrapper>
)

export default Posts

const dateStyle = {
    color: '#999',
    fontSize: '80%'
}

function getDates(created, edited){
    let content = [];

   
        if(created * 1 == created)
        created = created * 1

        if(edited * 1 == edited)
        edited = edited * 1
    
    content.push(<span>Created: {formatDate(new Date(created))}<br /></span>);
    if(edited){
        content.push(<span>Last Updated: {formatDate(new Date(edited))}<br /></span>);
    }

    return (<p>{content}</p>)

}

function formatDate(date){
    return ""
    + date.getUTCFullYear() + '-'
    + pad((1 + date.getUTCMonth()),2) + '-'
    + pad(date.getUTCDate(),2) + " "
    + pad((date.getUTCHours() % 12), 2) + ":"
    + pad(date.getUTCMinutes(), 2) + ":"
    + pad(date.getUTCSeconds(), 2) + " "
    + (Math.floor(date.getUTCHours() / 12) == 0 ? "AM" : "PM")
    + " (UTC)"
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

Posts.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSAf5a1pwIj-yjKPFhoyQdHTS3hHBNZVYXQRTCoAHXd6zYMy58iZr0IW054WglBJk9afknsTIeVS8eF/pub?output=csv');
    const csv = await res.text();
    const json = await csvtojson().fromString(csv).then(json => {
        return json;
    });
    let found = false;
    //error post by default
    let url = "https://docs.google.com/document/d/e/2PACX-1vTW3K2TYFoET7IT5fi2wfPBmHv3KFjiKFp6FWsnL69vXckMN6PlwSLuDlO6gRl4_jAfNyZ_hQ9UoQqK/pub?embedded=true";
    let postData = {title: "Not found."}
    for(let i = 0; i < json.length && !found; i++){
        //console.log(json[i])
        if(json[i].id == id)
        {
            //console.log(i)
            found = true;
            url = json[i].doc;
            postData = json[i];
        }

    }
    let doc = new GoogleDoc(url);
    const docdata = await doc.getData();
    let body = docdata.body;
    if(body.includes('<h1>One account. All of Google.</h1><h2 class="hidden-small">Sign in to continue to Docs</h2>')){
        body = "<h1>Oops, post content not found...</h1><h2>Looks like this post is private or removed. Check back later!</h2><p>Error code: 1</p>"
    }
    if(body.includes('<div  class="main content clearfix">') && body.includes('One account. All of Google.') && body.includes(' Sign in to continue to Docs')){
        body = "<h1>Oops, post content not found...</h1><h2>Looks like this post is private or removed. Check back later!</h2><p>Error code: 2</p>"
    }
    const style = docdata.style;
    //console.log(body)
    //const json = await csvtojson
    return {postsData: json, id: id, body: {__html: body}, style: style, postData}
}
