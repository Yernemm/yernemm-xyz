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
        <script src="https://kit.fontawesome.com/586954516c.js" crossOrigin="anonymous"></script>
    
            <style jsx>
                {`
                img {
                    max-width: 100%;
                }
                `}
            </style>
            
            </Head>
            <span dangerouslySetInnerHTML={{__html: hiddenComment}} />
<h1><img src="/static/media/image/snowballAnim.gif" style={logoStyle} />Yernemm{props.title ? " - " + props.title : ""}</h1>
        <hr />

    </div>
)

const hiddenComment = `<!--




























Hi.















-->
`

export default Header;