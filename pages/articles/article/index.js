
import Wrapper from '../../../components/page-wrapper'
import { useRouter } from "next/router";
import Link from 'next/link';

export default props => {
    const router = useRouter();
    return (<Wrapper title="Page Moved">
        <h3>This page has been moved to</h3>
        <h2><Link href='/posts/[id]' as={`/posts/${router.query.a}`}>Here</Link></h2>
    </Wrapper>)
}