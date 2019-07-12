<!DOCTYPE html>
<html lang="en">
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>
	
        <div class="container">
            <div class="Home">
			<h1>Mee6 Leaderboards Data Scraper</h1>
			                <hr>
				</div>
				            <div class="col-sm-8 blog-main">
							<div style="margin: auto; display: block;">
							<a type="button" style="display: block;" class="btn btn-lg btn-success"  href="/programs/mee6Scraper/Mee6-DataScraper.zip" target="_blank">CLICK HERE TO DOWNLOAD</a>	
			</div>
			<p>How to use:<p>
			<p>Simply download the data scraper. Then downlaod the html file of the Mee6 Leaderboard web page. Unzip the executable and drag the leaderboard html file onto it to run the scraper.</p>
			<p>It will extract rank, username, total exp and level for each user listed in the leaderboard into a .csv file format.</p>
			<p><image src="https://i.imgur.com/GCgF8TD.png"></p>
			<p><image src="https://i.imgur.com/JiJ6Cmu.png"></p>
			
			
			
			
			
			
			
			
						<div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/ad.php') ?>
</div>
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
