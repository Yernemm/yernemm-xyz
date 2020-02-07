import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import Head from 'next/head';
import Analytics from './analytics';

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
        <div style={content}><div>
        {props.children}</div>
        </div>
        <Footer />
        </Sidebar>
    </Analytics>
);

export default Wrapper;