<!DOCTYPE html>
<html lang="en">
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>
	
        <div class="container">
            <div class="Home">

			<h1>Overwatch Playtime Counter</h1><hr>
			
			</div><div class="col-sm-8 blog-main">
			
			<p>I will add screenshots and some more info here later.</p>
			<p>It counts how long you have Overwatch open.</p>
			
			<p>The program allows you to enter your estimated playtime at the start, and then starts counting whenever "Overwatch.exe" is open, and stops when it's not open. This program was for personal benefit, which is why I allowed you to enter the estimated playtime at the start, so you don't have to start at 0 if you've already played Overwatch for a while. Here are some screenshots (the UI is quite basic for now, I will update it as time goes on):</p>
			<h2><u>Screenshots:</u></h2>
			<p><img src="/media/image/OwTC-Config.png" alt="Image of Configuration"></img></p>
						<p><img src="/media/image/OwTC-Prog.png?version=2" alt="Image of Program"></img></p>
			
			<p>Current version: 1.2.0</p>
						  <a type="button" class="btn btn-lg btn-info" href="/programs/OwCounter/OwTimerLatest.zip">CLICK TO DOWNLOAD</a>	
						  
						  <a type="button" class="btn btn-lg btn-info" href="/programs/OwCounter/archive/">Archive of all versions.</a>	
			
			<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/disqus.php') ?>
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
