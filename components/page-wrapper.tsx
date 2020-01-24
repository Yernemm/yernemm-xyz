import { NextPage } from 'next';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

let Wrapper : NextPage = props => (
    <div>
        <Sidebar>
        <Header />      
        {props.children}
        
        <Footer />
        </Sidebar>
    </div>
);

export default Wrapper;