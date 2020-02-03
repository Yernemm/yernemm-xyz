import Wrapper from '../../components/page-wrapper';
import Head from 'next/head';
export default () => (
    <Wrapper title="OWMN CSS Generator">
        <div>
            <div dangerouslySetInnerHTML={{__html: htmlc}} />
            <Head><script src="/static/scripts/owmn-css.js"></script>
            
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

</Head>
        </div>
    </Wrapper>
)

const htmlc = `

<h4 class="w3-text-theme w3-container">Generate the CSS and spritesheet for OWMN subreddits.</h4>
            
<div class="w3-container w3-card w3-theme-l1">
    <h3>Colours:</h3>
    <form class="w3-container">
        Main colour hex code:
        <br>
        <input class="w3-input" type="text" name="colourMain" id="colourMain" placeholder="#dddddd">
        <br> Hover colour hex code:
        <br>
        <input class="w3-input" type="text" name="colourHover" id="colourHover" placeholder="#444444">
        <br>

    </form>
    <button onClick="generate();" class="w3-input w3-text-theme">Generate</button>
    <br>

</div>
<br>
<div class="w3-container w3-card w3-theme-l1">
    <h2>1) Sidebar:</h2>
    <p>Copy and paste the text below into your sidebar.</p>
    <textarea id="textSidebar" style="resize: none; width: 100%; height:200px;">
    </textarea>
    <br>
    <br>
</div>
<br>
<div class="w3-container w3-card w3-theme-l1">
    <h2>2) CSS:</h2>
    <p>Copy and paste the CSS below into your stylesheet.</p>
    <textarea id="textCSS" style="resize: none; width: 100%; height:200px;">
    </textarea>
    <br>
    <br>
</div>
<br>

<div class="w3-container w3-card w3-theme-l1">
    <h2>3) Sprite Sheets:</h2>
    <p>Upload these images with the given name.</p>
    <p id="spriteProgress"></p>
    <p>"herosprites"</p>
    <img id="spriteMain">
    <p>"herospriteshover"</p>
    <img id="spriteHover">
    <br>
    <br>
</div>
<br>
<p class="w3-text-theme w3-container">This page has been tested and made for Google Chrome. If you are having problems, I would recommend switching to Chrome.</p>
<br>
</div>

                                      
<!--insert:contentAfter.html-->


`