import Wrapper from '../../../components/page-wrapper'
import { useRouter } from "next/router";
import Link from 'next/link';

export default props =>(<Wrapper title="Page Moved">
        <h3>This page has been moved to</h3>
        
    </Wrapper>)


//<h2><Link href='/posts/[id]' as={`/posts/${router.query.a}`}></Link></h2>