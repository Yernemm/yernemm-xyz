import Wrapper from '../../components/page-wrapper';
import Head from 'next/head';
export default props => (
    <Wrapper title="Overwatch Hero Generator">
        <div dangerouslySetInnerHTML={{__html: htmlpage}}/>
        <Head><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/static/style/overwatch.css"></link>
        <script type="text/javascript" src="/static/scripts/owGeneratorTeam.js?version=29"></script>
        </Head>
        
    </Wrapper>
)


const htmlpage = `<div class="w3-container w3-content">
<div class="w3-panel w3-pale-red w3-border w3-display-container" style="max-width:fit-content">
       <h2>This project is outdated.</h2>
       <p>Currently, the web version of this project does not support all Overwatch heroes. No heroes after Moira have been added. This project will be remade in the future to use all heroes. If you want an up-to-date version now, you can download the Android app version of this project.</p>
     </div>
   </div>


                              <!--Content container-->
   
<div class="w3-container">
     <div style="color: white" class="w3-container w3-card-2 w3-padding-32 w3-round">
            <div class="">










&nbsp;
&nbsp;
<p id="helpText"></p>

<p class="w3-center"><a href='https://play.google.com/store/apps/details?id=xyz.yernemm.overwatchherogenerator.free&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style="width:200px" alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png'/></a></p>

<table style="font-size:300%;">
<tr>



<tr>
<th>Play: </th>
<th style="height:140px"><p   id="hero" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero2" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero3" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero4" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero5" align="middle"  class="hideAnim" style="position:relative;"></p></th>
<th style="height:140px"><p   id="hero6" align="middle"  class="hideAnim" style="position:relative;"></p></th>
</tr>
<tr>
<td></td>
<td height="300" width="400" align="middle" style="height:300px"><img id="heropic" class="hideAnim" style="position:relative;"></td>
<td height="300" width="400" align="middle" style="height:300px"><img id="heropic2" class="hideAnim" style="position:relative;"></td>
<td height="300" width="400" align="middle" style="height:300px"><img id="heropic3" class="hideAnim" style="position:relative;"></td>
<td height="300" width="400" align="middle" style="height:300px"><img id="heropic4" class="hideAnim" style="position:relative;"></td>
<td height="300" width="400" align="middle" style="height:300px"><img id="heropic5" class="hideAnim" style="position:relative;"></td>
<td height="300" width="400" align="middle" style="height:300px"><img id="heropic6" class="hideAnim" style="position:relative;"></td>
</tr>
</table>



&nbsp;


<table>
<tr>
<th><h2>SINGE PLAYER GENERATION</h2></th>
<th><h2>TEAM COMP GENERATION</h2></th>
</tr>
<tr>
<td>
<table>
<tr>
<td>
<th>Generate</th></td>
</tr>
<tr>
<th>Random: </th>
<td>
<a class="buttonOw" onclick="allRand()" >Random</a>
</td>
</tr>
<tr>
<th>By class: </th>
<td>
<a class="buttonOw" onclick="offenceRand()" >Offence</a>
</td>
<td>
<a class="buttonOw" onclick="defenceRand()" >Defence</a>
</td>
<td>
<a class="buttonOw" onclick="tankRand()" >Tank</a>
</td>
<td>
<a class="buttonOw" onclick="supportRand()" >Support</a>
</td>
</tr>
<tr>
<th>By role:</th>
<td>
<a class="buttonOw" onclick="heaRand()" >Healer</a>
</td>
<td>
<a class="buttonOw" onclick="sniRand()" >Sniper</a>
</td>
<td>
<a class="buttonOw" onclick="buiRand()" >Builder</a>
</td>
<td>
<a class="buttonOw" onclick="flaRand()" >Pick/Assassin Flanker</a>
</td>
<td>
<a class="buttonOw" onclick="harRand()" >Harasser Flanker</a>
</td>
</tr>
<tr>
<th>By strengths/abilities:</th>
<td>
<a class="buttonOw" onclick="survRand()" >High Survivability</a>
</td>
<td>
<a class="buttonOw" onclick="sheaRand()" >Self-Heal/Regen</a>
</td>
<td>
<a class="buttonOw" onclick="mobiRand()" >High Mobility</a>
</td>
<td>
<a class="buttonOw" onclick="speeRand()" >High speed</a>
</td>
<td>
<tr><th>-----------</th></tr>
<tr><th>By counter:</th></tr>
<tr><th>Counter Offence:</th>
<td>
<a class="buttonOw" onclick="inputHero = genjiCounter
Rand()" >Genji</a>
</td>
<td>
<a class="buttonOw" onclick="inputHero = mccreeCounter
Rand()" >McCree</a>
</td>
<td><a class="buttonOw" onclick="inputHero = pharahCounter
Rand()" >Pharah</a></td>
<td><a class="buttonOw" onclick="inputHero = reaperCounter
Rand()" >Reaper</a></td>
<td><a class="buttonOw" onclick="inputHero = soldierCounter
Rand()" >Soldier: 76</a></td>
<td><a class="buttonOw" onclick="inputHero = tracerCounter
Rand()" >Tracer</a></td>
<td><a class="buttonOw" onclick="inputHero = sombCounter
Rand()" >Sombra</a></td>
<td><a class="buttonOw" onclick="inputHero = doomCounter
Rand()" >Doomfist</a></td>
</tr>
<tr><th>Counter Defence:</th>
<td><a class="buttonOw" onclick="inputHero = bastionCounter
Rand()" >Bastion</a></td>
<td><a class="buttonOw" onclick="inputHero = hanzoCounter
Rand()" >Hanzo</a></td>
<td><a class="buttonOw" onclick="inputHero = junkratCounter
Rand()" >Junkrat</a></td>
<td><a class="buttonOw" onclick="inputHero = meiCounter
Rand()" >Mei</a></td>
<td><a class="buttonOw" onclick="inputHero = torbjornCounter
Rand()" >Torbjorn</a></td>
<td><a class="buttonOw" onclick="inputHero = widowmakerCounter
Rand()" >Widowmaker</a></td>
</tr>
<tr><th>Counter Tank:</th>
<td><a class="buttonOw" onclick="inputHero = winstonCounter
Rand()" >Winston</a></td>
<td><a class="buttonOw" onclick="inputHero = dvaCounter
Rand()" >D.Va</a></td>
<td><a class="buttonOw" onclick="inputHero = reinCounter
Rand()" >Reinhardt</a></td>
<td><a class="buttonOw" onclick="inputHero = zaryaCounter
Rand()" >Zarya</a></td>
<td><a class="buttonOw" onclick="inputHero = roadhogCounter
Rand()" >Roadhog</a></td>
<td><a class="buttonOw" onclick="inputHero = orisaCounter
Rand()" >Orisa</a></td>
</tr>
<tr><th>Counter Support:</th>
<td><a class="buttonOw" onclick="inputHero = anaCounter
Rand()" >Ana</a></td>
<td><a class="buttonOw" onclick="inputHero = brigitteCounter
Rand()" >Brigitte</a></td>
<td><a class="buttonOw" onclick="inputHero = lucioCounter
Rand()" >Lucio</a></td>
<td><a class="buttonOw" onclick="inputHero = mercyCounter
Rand()" >Mercy</a></td>
<td><a class="buttonOw" onclick="inputHero = moiraCounter
Rand()" >Moira</a></td>
<td><a class="buttonOw" onclick="inputHero = symmetraCounter
Rand()" >Symmetra</a></td>
<td><a class="buttonOw" onclick="inputHero = zenCounter
Rand()" >Zenyatta</a></td>


</tr>

</table>
</td>
<td>
<a class="buttonOw" onclick="twoComp()">Generate 2/2/2 team comp</a>
</td>
</table>

&nbsp;

&nbsp;

&nbsp;

<p>By Yernemm  -  <a href="https://www.reddit.com/user/Yernemm/">Reddit</a>  -  <a href="https://www.youtube.com/channel/UCfOGXFJdLqnhfENzTCC9IjA">YouTube</a></p>





                            <!------------------- SCRIPT HERE ---------------->









                           <!------------------------------------------------>



`