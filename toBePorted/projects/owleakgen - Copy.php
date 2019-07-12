<!DOCTYPE html>
<html lang="en">
    <head>
	<style>
			.theleak{
				 background-color: rgb(214, 218, 240);
				 color: black;
				 font-family: arial,helvetica,sans-serif;
font-size: 10pt;
			}]
			
			.anon{
				color: rgb(17, 119, 67);
			}
			
			.replies{
				color: rgb(84, 85, 122);
			}
			.repsmall{
				color: rgb(84, 85, 122);
				font-size: 8pt;
			}
			.padding{
				padding:10px 10px 10px 20px;
				background-color: rgb(214, 218, 240);
			}

			</style>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
			
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>
	
        <div class="container">
            <div class="Home">
			<h1>Overwatch Fake 4chan Leak Generator</h1>
			                <hr>
				</div>
				            <div class="col-sm-8 blog-main">
			
			<button onclick=generateLeak()>Click Here To Generate Leak</button>
			&nbsp;
			<hr>
			<div class="padding">
			<div class="theleak">
			<p class="theleak" id="leakhead">The generated leak will appear here.</p>
			<div id="leak">
			
			</div>
			
			</div>
			
			</div>
			
			
			<script type="text/javascript" src="/scripts/owFakeLeak.js?version=53"></script>
			<hr>
			<p>There were many Overwatch leaks around the internet. They "leaked" and teased a variety of new heroes, maps, events and other content. Most of them were fake, however. Inspired by the recent influx of these leaks, I created a simple automatic random fake leak generator.</p>
			
			<hr>
						<div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/ad.php') ?>
</div>
<hr>
<div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/disqus.php') ?>
</div>		
			</div>
					<!-- Sidebar Start-->
        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/sidebar.php') ?>
		</div>
		<!-- Sidebar End-->
        </div>
        <!-- /.container -->
        <!-- Bootstrap core JavaScript
    ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
        <script src="/bootstrap/js/bootstrap.min.js"></script>
        <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
        <script src="/bootstrap/js/ie10-viewport-bug-workaround.js"></script>
		        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/foot.php') ?>
    </body>
</html>
