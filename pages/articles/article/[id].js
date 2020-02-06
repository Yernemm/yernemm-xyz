import Wrapper from '../../../components/page-wrapper';
import Link from 'next/link';

let ArticleRedirect = props => ( 
    <Wrapper title="Page Moved">
    <h3>This page has been moved to</h3>
    <h2><Link href='/posts/[id]' as={`/posts/${props.id}`}><a>Here</a></Link></h2>
</Wrapper>
)

export default ArticleRedirect


ArticleRedirect.getInitialProps = async function(context) {
    const { id } = context.query;
    return {id};    
}
