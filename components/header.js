import Head from 'next/head';

const Header = props => (
    <div>
            <Head>
        <title>Yernemm{props.title ? " - " + props.title : ""}</title>
    </Head>
        <h1>Yernemm{props.title ? " - " + props.title : ""}</h1>
        <hr />
    </div>
)

export default Header;