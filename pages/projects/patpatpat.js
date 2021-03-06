import Wrapper from '../../components/page-wrapper';
import Head from 'next/head';
export default props => (
    <Wrapper title="Pat Pat Pat">
        <p>Refresh the page to stop the sounds.</p>
        <div className="w3-theme-d5" dangerouslySetInnerHTML={{__html: htmlContent}} />
        <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-light-blue.css"></link>
        <script type="text/javascript" src="/static/scripts/patpatpat-other.js" />  
        <script type="text/javascript" src="/static/scripts/patpatpat.js" />  
        </Head>
    </Wrapper>
)

const htmlContent = `<div class="w3-container">
<div class="w3-center">
</div>
</div>

<div class="w3-container w3-row w3-theme-d3 w3-center">
<div class="w3-col m4">
<div class="w3-row">
<div class="w3-col s4">
<a  href="/">
<img src="\\static\\media\\image\\snowballAnim.gif" style="max-width: 50px; height: auto;"></img>
</a>
</div>
<div class="w3-col s8">
<p>Made by Yernemm.</p>
</div>
</div>
</div>

<div class="w3-col m4"><p>
 <a href="/">Click here to go back to the main page.</a></p>
</div>


</div>

<div class="w3-container w3-row w3-theme-d4">
<!--<audio id="patsound" autoplay=true loop=true style="display:none;" src="https://yernemm.xyz/media/sound/MeiPatPatPat.mp3"></audio>-->
<div class="w3-display-container">
<div class="w3-center">
<audio id="player"></audio>
<button onclick=okOnClick() id="ok" class="w3-button w3-red w3-hover-deep-orange">Click here to start patting!</button>
<h1>You have been patting for...</h1>
<h2>
<span id="timer">0 Hours, 0 Minutes, 0 Seconds.</span>
</h2>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/pzWPAvF.png" class="w3-round"></img>
</div>
</div>
</div>

<div class="w3-container w3-row w3-theme-d5">
<div class="w3-col m1">
<p></p>
</div>
<div class="w3-col m10 w3-center w3-text-theme">
<p>This webpage will constantly loop Mei's "Pat Pat Pat" voice line from the Mei's Snowball Offensive brawl in the Winter Wonderland event for Overwatch. It even tells you the time you've spent patting! (Wow!) This idea is not originally mine. Someone else made a similar page around the time Winter Wonderland 2016 was released. However, I have since been unable to find that page so I decided to make my own version of it. Have fun patting! This page uses JavaScript and jQuery to make sounds work on mobile. The style uses W3.CSS.</p>
</div>
`