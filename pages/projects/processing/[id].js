import Wrapper from '../../../components/page-wrapper';
import Head from 'next/head';
import Link from 'next/link';
export default function Proj(props){ return<>
<Wrapper title={'Processing Experiments: "'+props.url.query.id+'"'}>
    {console.log(props)}

            <Link href='/projects/processing'><a>Click here to see all of the Processing experiments.</a></Link>
            <hr />
            <iframe frameBorder="0" style={{width:'100%', height:'1000px'}} src={`/projects/processing/${props.url.query.id}/index.html`}></iframe>

    </Wrapper></>
}
