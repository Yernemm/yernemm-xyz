import fetch from 'isomorphic-unfetch';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();
class GoogleDoc {

    constructor(url)
    {
        this.url = url;
    }

    async getData(){
        const res = await fetch(this.url);
        const data = await res.text();
        let csssplit1 = data.split('<style type="text/css">')[1];
        if(csssplit1)
            csssplit1 = csssplit1.split('</style>')[0]

        let body = data.split("</head>")[1].split("</html>")[0].replace("<body", "<div").replace("</body", "</div");
        let bodyCleanRegex = /(<style(.*?)<\/style>)|(<script(.*?)<\/script>)|(https:\/\/www.google.com\/url\?q\=)|(&amp;sa=D&amp;ust=[0-9]+)|( class="[a-z0-9 ]+")/gs
        
        body = body.replace(bodyCleanRegex, "");

        if(body.includes("{{")){
            let bodyArr = []
            let bodyt = body.split("{{");

            bodyArr.push(bodyt[0]);
            for(let i=1;i<bodyt.length;i++){
                let bodyin = bodyt[i].split("}}");
                bodyArr.push(entities.decode(bodyin[0]))
                bodyArr.push(bodyin[1])
            }

            body = bodyArr.join('');

        }
        
        body = body.replace(/{\\{/g, '{{')

        const out = {
            data: data, 
            body: body,
            style: csssplit1
        };
    
        return out;
    }

    async getBody(){
        // dangerouslySetInnerHTML={{__html: prop.body}}
        const data = await this.getData();
        return {__html: data.body};
    }

}

export default GoogleDoc;