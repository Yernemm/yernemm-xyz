import Wrapper from '../../components/page-wrapper';
import Head from 'next/head';
export default props => (
    <Wrapper title="Mei's Winter Experience">
        <p>Refresh the page to stop the sounds.</p>
        <div dangerouslySetInnerHTML={{__html: html}} />
        <Head>
        <script type="text/javascript" src="/static/scripts/wintermei.js" />  
        </Head>
    </Wrapper>
)

const html = `
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-red.css">
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
<!--<audio id="patsound" autoplay=true loop=true style="display:none;" src="/static/media/sound/MeiPatPatPat.mp3"></audio>-->
<div class="w3-display-container">
<div class="w3-center">
<audio id="player"></audio>
<audio id="player2"></audio>
<audio id="voiceplayer"></audio>
<audio id="voiceplayer2"></audio>
<audio id="voiceplayer3"></audio>
<audio id="voiceplayer4"></audio>
<button id="ok" onclick="okClicked()" class="w3-button w3-blue w3-hover-aqua">Click here to start the Winter Mei Experience!</button>
<h1><u>Mei's Winter Experience</u></h1>
<h1>You have been experiencing for...</h1>
<h2>
<span id="timer">0 Hours, 0 Minutes, 0 Seconds.</span>
</h2>
<img style="max-width: 100%; height: auto;" src="https://i.imgur.com/1bfvgnK.png" class="w3-round"></img>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/ad.php') ?>
</div>
</div>
</div>

<div class="w3-container w3-row w3-theme-d5">
<div class="w3-col m1">
<p></p>
</div>
<div class="w3-col m10 w3-center w3-text-theme">
<p>Using modern web browser (Chrome, Firefox) on desktop is recommended. This page might have issues on mobile and on web browsers which do not support JavaScript. This page uses JavaScript and jQuery to make sounds (hopefully) work on mobile. The style uses W3.CSS.</p>
</div>
`