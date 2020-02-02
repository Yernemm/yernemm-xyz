import Wrapper from '../../components/page-wrapper';
import Head from 'next/head';
export default props => (
    <Wrapper title="Overwatch Fake 4chan Leak Generator">
        <div dangerouslySetInnerHTML={{__html: htmlContent}} />
        <Head><link rel="stylesheet" type="text/css" href="/static/style/owleak.css" />
            <script type="text/javascript" src="/static/scripts/owFakeLeak2.js?version=2"></script></Head>
    </Wrapper>
)

const htmlContent = `<div class="w3-center">
<button class= "button-light"onclick=generateLeak()>Click Here To Generate Leak</button>
</div>
&nbsp;
<hr>
<div class="padding">
<div class="theleak">
<p class="theleak" id="leakhead">The generated leak will appear here.</p>
<div id="leak">

</div>

</div>

</div>


<script type="text/javascript" src="/static/scripts/owFakeLeak2.js?version=2"></script>
<hr>
<p>There were many Overwatch leaks around the internet. They "leaked" and teased a variety of new heroes, maps, events and other content. Most of them were fake, however. Inspired by the recent influx of these leaks, I created a simple automatic random fake leak generator.</p>

<hr>`