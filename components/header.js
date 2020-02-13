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

            <meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@yernemm" />
<meta name="twitter:title" content={'Yernemm' + (props.title ? " - " + props.title : "")} />
<meta name="twitter:description" content="Creating web tools since 2016 just for fun." />
<meta name="twitter:image" content="/static/media/image/snowballFull.png" />

<meta property="og:title" content={'Yernemm' + (props.title ? " - " + props.title : "")} />
<meta property="og:type" content="website" />
<meta property="og:image" content="/static/media/image/snowballFull.png" />
<meta property="og:description" content="Creating web tools since 2016 just for fun." />
            
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