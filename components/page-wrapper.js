import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Head from 'next/head';
import Analytics from './analytics';
import AdSense from 'react-adsense';

const content = {
    margin: "auto",
    maxWidth: "1200px",
    padding: "30px",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "#2a2b30"
};

let Wrapper = props => (
    <Analytics>
        <Head>
        <link rel="stylesheet" type="text/css" href="/static/style/wrapper.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
        </Head>
        <Sidebar>

       
        <Header title={props.title}/>   

        <div style={{
                  textAlign:'center',
                  margin:'10px'
                  
              }}>
                 
                 <AdSense.Google
                    client='ca-pub-2219001427204097'
                    slot='8571236655'
                    style={{ display:'inline-block', width: 728, height: 90 }}
                    format=''
                />
      
        </div> 

        <div style={content}><div>
        {props.children}</div>
        </div>

              <div style={{textAlign:'center', margin:'10px' }}>
              <AdSense.Google
            client='ca-pub-2219001427204097'
            slot='9877467510'
            style={{ display: 'block', margin:'0 auto' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
         
        />
              </div>

        <Footer />
        </Sidebar>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Analytics>
);

export default Wrapper;