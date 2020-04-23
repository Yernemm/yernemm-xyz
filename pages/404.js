import Wrapper from '../components/page-wrapper'
import Link from 'next/link'
import Router from 'next/router';
function Error() {
    return (
        <Wrapper title='Error 404'>
           <div style={{textAlign:'center'}}>
      <p>
A 404 error has occurred on the server.
      </p>
        <h1>PAGE NOT FOUND</h1>
      <h3>
      <Link href='/'><a>Click here to return to the home page.</a></Link>
      </h3>
      </div>
      </Wrapper>
    )
  }
  
  
  export default Error