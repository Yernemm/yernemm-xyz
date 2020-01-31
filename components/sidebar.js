const wrapperStyle = {
    color: "#ccc",
    fontFamily: "'Raleway', sans-serif"
};

const sideBarStyle = {
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

const contentStyle = {
    marginLeft: '250px'
};

const Sidebar = props => (
    
    <div style={wrapperStyle}>
        <style jsx global>{`
          body {
            background-image: url("/static/media/image/back.jpg")
          }
            
        `}</style>
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