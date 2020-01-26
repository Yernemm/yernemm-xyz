import { NextPage } from "next";

const wrapperStyle : any = {

};

const sideBarStyle : any = {
    width: '250px',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    borderStyle: 'solid',
    borderWidth: '2px',
    overflowY: 'scroll',
    overflowX: 'hidden'
};

const contentStyle : any = {
    marginLeft: '250px'
};

const Sidebar : NextPage = props => (
    <div style={wrapperStyle}>
    <div style={sideBarStyle}>
        <p>ee</p>
        <p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p><p>aaaaaaaaooooeo</p>
    </div>
    <div style={contentStyle}>
        {props.children}
    </div>
    </div>
);

export default Sidebar;