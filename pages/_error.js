import Wrapper from '../components/page-wrapper'
import Link from 'next/link'
import Router from 'next/router';
function Error({ statusCode }) {
    return (
        <Wrapper title={statusCode ? `Error ${statusCode}` : 'Error'}>
           <div style={{textAlign:'center'}}>
      <p>
        {statusCode
          ? `A ${statusCode} error has occurred on the server.`
          : 'An error has occurred on the client.'}
      </p>
        <h1>{statusCode == 404 ? 'PAGE NOT FOUND' : ''}</h1>
      <h3>
      <Link href='/'><a>Click here to return to the home page.</a></Link>
      </h3>
      </div>
      </Wrapper>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error