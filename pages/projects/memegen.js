import Wrapper from '../../components/page-wrapper';
export default () => (
    <Wrapper title='Meme Name Generator'>
        <p>Press the button and a name will be randomly generated</p>
			
			
            <button onClick={()=>nGen()}>Click To Generate Name</button>
           <p></p>
            <h2 id="nameGen"></h2>

    </Wrapper>
)

function nGen(){
    var n1 = ["The", "A", "Un", "In", "Rare", "Epic", "","xXx", "Robbie", "TRIGGERED", "Barry", "Dat", "Over", "Under", "Inside", "Lil'", "Big"];
    var n2 = ["Pepe", "Legend", "Harambe", "MemeQueen", "Kops", "Rotten", "Bee", "Boi", "Watch", "Tale", "Shrek", "Donkey", "Master"];
    var n3 = ["27", "23","xXx", "420", "2016", "2017", "Benson", "Waddup", "ing", "Baiter", "NumberOne", "'d"];
    
    var pos1 = Math.floor((Math.random() * n1.length) + 0);
    var pos2 = Math.floor((Math.random() * n2.length) + 0);
    var pos3 = Math.floor((Math.random() * n3.length) + 0);
    
    var name = n1[pos1] + n2[pos2] + n3[pos3]
                
    document.getElementById("nameGen").innerHTML = name;
}

 