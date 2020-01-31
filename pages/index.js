import Wrapper from '../components/page-wrapper';
import fetch from 'isomorphic-unfetch';

const Home = (prop) => (
    <Wrapper title="Home">
        <div style={{textAlign: 'center'}}>
       <h1>Yernemm</h1>
       <h2>Creating web tools since 2016</h2>
       <h3>just for fun.</h3>
       </div>
       <br />
</Wrapper>
)

Home.getInitialProps = async function(){
    const res = await fetch('https://docs.google.com/document/d/e/2PACX-1vRF2ZkT94svdc3ya1UQOPQCkaXnAPflIhBvVnMoj-N-UY2TdBH-khGU3S5Ef8ycGnK6JAV8FMeY6Thb/pub?embedded=true');
    const data = await res.text();

    

    let out = {data: data, body: data.split("</head>")[1].split("</html>")[0].replace("<body", "<div").replace("</body", "</div") };
    
    console.log(out);
    
    
    return out;
    
  
}


export default Home;