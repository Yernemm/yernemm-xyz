import Head from 'next/head';

let logoStyle = {
    maxHeight:'40px',
    float:'right'
}

const Header = props => (
    <div>
            <Head>
        <title>Yernemm{props.title ? " - " + props.title : ""}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
    </Head>
        <h1><img src="/static/media/image/snowballAnim.gif" style={logoStyle} />Yernemm{props.title ? " - " + props.title : ""}</h1>
        <hr />
    </div>
)

export default Header;