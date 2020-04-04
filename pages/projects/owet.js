import Wrapper from "../../components/page-wrapper";
import Link from "next/link";

export default () => (
    <Wrapper title="OverWatch Extract Toolkit 2">
        <h2>About:</h2>
        <p>The original OWET is discontinued. This page now describes OWET 2.</p>
        <p>This program provides a set of tools which can be used to extract files from Overwatch, including a GUI for DataTool. DataTool is a tool used to extract data from Overwatch (aka datamining). DataTool is a command prompt based tool so it can be difficult and time-consuming to use for people who are less experienced with command prompt. Because of this, the DataTool GUI in the OW Extract Toolkit provides a graphical user interface which allows you to use the main functionality of DataTool without typing in commands. It's as simple as clicking a button. I did not make DataTool itself, but I did create the GUI.</p>
        <p>OWET 2 is currently in early development and it may be missing some features.</p>
        <div style={{textAlign: "center"}}>
            <h3> <Link href="https://yernemm.xyz/posts/owet2guide">Guide</Link> </h3>
            <h3> <a href="https://github.com/Yernemm/OWET-2/releases">Download</a> </h3>

        </div> 
        <h2>Screnshots:</h2>
        <p><img src="https://i.imgur.com/LAE8QZb.png" /></p>
        <p><img src="https://i.imgur.com/WJIl6fK.png" /></p>
    </Wrapper>
)

// <div dangerouslySetInnerHTML={{__html: html}} />

const html = `
<div class="w3-center">
        <a class="w3-center button-light"  href="https://github.com/Yernemm/OWET/releases"><i class="fab fa-github"></i> Download</a>	
    </div>
        <p>This program provides a set of tools which can be used to extract files from Overwatch, including a GUI for DataTool. DataTool is a tool used to extract data from Overwatch (aka datamining). DataTool is a command prompt based tool so it can be difficult and time-consuming to use for people who are less experienced with command prompt. Because of this, the DataTool GUI in the OW Extract Toolkit provides a graphical user interface which allows you to use the main functionality of DataTool without typing in commands. It's as simple as clicking a button. I did not make DataTool itself, but I did create the GUI.</p>
        <p>Simple setup instructions:<p>
        <ol>
            <li>Click the "Download" button above to visit the GitHub releases page for OWET.</li>
<li>Click on "OWExtractToolkit.exe" or "OWET.zip" below the latest release to download the latest version.</li>
<li>Extract OWExtractToolkit.exe anywhere.</li>
<li>Open OWExtractToolkit.exe</li>
<li>Open the settings menu and make sure the Overwatch game path is correct</li>
<li>Press the &quot;Download Latest DataTool&quot; in the settings</li>
        <p><image src="https://i.imgur.com/flwuipT.png"></p>
        <p><image src="https://i.imgur.com/R6dcwdR.png"></p>
 `