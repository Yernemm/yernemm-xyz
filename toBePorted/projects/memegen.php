<!DOCTYPE html>
<html lang="en">
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navh.php') ?>
	
        <div class="container">
            <div class="Home">
			
			<h3>Meme Name Generator</h3>
			<hr>
				</div>
				            <div class="col-sm-8 blog-main">
			<p>Press the button and a name will be randomly generated</p> <!-- <<<<----- -->
			
			
			<button onclick=nGen()>Click To Generate Name</button>
<p></p>
			<h2 id="nameGen"></h2>
			
			
			<script>
			
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
			
			
			</script>
			
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
