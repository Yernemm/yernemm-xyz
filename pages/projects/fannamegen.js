import Wrapper from '../../components/page-wrapper';
export default () => (
    <Wrapper title='Fantasy Name Generator'>
        <p>Press the button and a name will be randomly generated</p> 
			
			
            <button onClick={()=>nGen()}>Click To Generate Name</button>
    <p></p>
            <h2 id="nameGen"></h2>
            
            

    </Wrapper>
)

function nGen(){

    
    var n1 = ["Xa", "La", "Ande", "Romo", "Tru", "Bo", "He", "Jo", "Hog", "Tron", "Tho", "In", "Wen", "Wor", "War", "Ste", "Wei", "Ade", "So", "Me"];
    var n2 = ["", "ran", "null", "as", "wat", "man", "min", "grat", "pe", "mar", "i", "mb"];
    var n3 = ["", "ol", "ax", "song", "ones", "ek", "ar", "er", "r", "us", "ra"];
    
    var pos1 = Math.floor((Math.random() * n1.length) + 0);
    var pos2 = Math.floor((Math.random() * n2.length) + 0);
    var pos3 = Math.floor((Math.random() * n3.length) + 0);
    
    var name = n1[pos1] + n2[pos2] + n3[pos3]
                
    document.getElementById("nameGen").innerHTML = name;
  
}