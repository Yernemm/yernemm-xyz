import { NextPage } from "next";

const wrapperStyle : any = {

};

const sideBarStyle : any = {
    width: '240px',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: '0px',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '5px'
};

const contentStyle : any = {
    marginLeft: '250px'
};

const Sidebar : NextPage = props => (
    <div style={wrapperStyle}>
    <div style={sideBarStyle}>
        <h3>The Website</h3>
       <ul>
           <li>link</li>
           <li>link</li>
           <li>content</li>
       </ul>
         </div>
    <div style={contentStyle}>
        {props.children}
    </div>
    </div>
);

export default Sidebar;