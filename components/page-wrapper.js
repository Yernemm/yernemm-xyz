import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

const content = {
    margin: "auto",
    maxWidth: "800px"
};

let Wrapper = props => (
    <div>
        <Sidebar>
        <Header title={props.title}/>      
        <div style={content}>
        {props.children}
        </div>
        <Footer />
        </Sidebar>
    </div>
);

export default Wrapper;