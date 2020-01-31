import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

const content = {
    margin: "auto",
    maxWidth: "860px",
    padding: "30px",
    color: "#ccc",
    boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "#2a2b30"
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