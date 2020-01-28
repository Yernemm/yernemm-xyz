import { NextPage } from 'next';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

const content : any = {
    margin: "auto",
    maxWidth: "800px"
};

let Wrapper : NextPage = props => (
    <div>
        <Sidebar>
        <Header />      
        <div style={content}>
        {props.children}
        </div>
        <Footer />
        </Sidebar>
    </div>
);

export default Wrapper;