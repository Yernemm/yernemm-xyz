import Wrapper from '../../components/page-wrapper';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
let Proc = props => (<>
    <Wrapper title='Processing Experiments'>
 
        <p>Here are some projects I made when trying out Processing 
            using <a href="https://p5js.org/">p5.js</a>.
            <br />
            These may or may not be entirely functional.

            </p>


            <ul>
        {props.projData.paths.map(data=>(
        <li key={data}>
          <Link href="/projects/processing/[id]" as={`/projects/processing/${data}`}>
          <a>{data}
            </a></Link> </li>
        ))}
        </ul>

            
    </Wrapper></>
)

export default Proc

export async function getServerSideProps(context) {
    if (typeof window === 'undefined') {
    const { readdirSync } = require('fs');

    let paths =   readdirSync('public/projects/processing/', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);


    const projData = {paths:paths}
    return { props: {projData} }
    }
  }