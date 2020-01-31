import fetch from 'isomorphic-unfetch';
class GoogleDoc {

    constructor(url)
    {
        this.url = url;
    }

    async getData(){
        const res = await fetch(this.url);
        const data = await res.text();
        const out = {data: data, body: data.split("</head>")[1].split("</html>")[0].replace("<body", "<div").replace("</body", "</div") };
    
        return out;
    }

    async getBody(){
        // dangerouslySetInnerHTML={{__html: prop.body}}
        const data = await this.getData();
        return {__html: data.body};
    }

}

export default GoogleDoc;