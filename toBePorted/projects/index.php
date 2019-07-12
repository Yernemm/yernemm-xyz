<!DOCTYPE html>
<html lang="en">
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
			
			<style>
			
						.overwatch {
				background-color: rgba(255, 102, 0, 0.4);	
			}
			
			.normal {
				background-color: rgba(25, 255, 100, 0.4);
			}

			
			.games {
				background-color: rgba(255, 255, 55, 0.4);
			}
			
			
			</style>
			
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>
        <div class="container">
            <div class="Home">

			<h1>Projects and Tools</h1>
<hr>
				</div>
				            
<div class="col-sm-8 blog-main">


<!--



-->
			

			
			
			
			
			
			
			
			
			
			<?php
			
			//error_reporting(E_ALL);
			error_reporting(0);
		
				include ($_SERVER['DOCUMENT_ROOT'].'/templates/sqlUserInfo.php');
			$table = "tProjects";
			$rows = "id, title, decr, cat, type, link";
			
			include ($_SERVER['DOCUMENT_ROOT'].'/templates/sqlConnect.php');
			
			
			
		echo	"<p>In this page, you will find all of my web tools as well as any standolone downloadable tools.</p>";
		//tags
		
		echo "<p>Categories: <a class='btn btn-sm btn-primary' href='/projects'>all</a>";
		$butt = "nothing";
		
		$sql = "SELECT cat FROM $table ORDER BY cat ASC, id DESC";
		$result = $link->query($sql);
		
		if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) 	{
	
	
	if ($butt != $row["cat"]){
		echo " <a class='btn btn-sm btn-primary' href='?c=&quot;".$row["cat"]."&quot;'>".$row["cat"]."</a> ";
		$butt = $row["cat"];
	};
	
		
		}
}
echo "</p>";
		//----
		
		
		
		
		
		
		
		
			$ca = $_GET["c"];
			if ($ca){
				$sql = "SELECT $rows FROM $table WHERE cat LIKE $ca ORDER BY FIELD(type,'Standalone Tools','Web Tools','Games', 'Other', 'Outdated or Obsolete', 'Abandoned') ASC, title ASC, id DESC";
			} else {
				$sql = "SELECT $rows FROM $table ORDER BY FIELD(type,'Standalone Tools','Web Tools','Games', 'Other', 'Outdated or Obsolete', 'Abandoned') ASC, title ASC, id DESC";
				
			};
			


$result = $link->query($sql);


$head = "nothing";


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

	if ($head != $row["type"]){
		echo " <h3><u>".$row["type"].":</u></h3> ";
		$head = $row["type"];
	};
	
	
	     echo "
		 
<div class='".$row["cat"]."'>
						<a  href='".$row["link"]."'>
			<hr>
			<h3>".$row["title"]."</h3>
			<div style=' border:1px solid #cccccc'>
			<p>".$row["decr"]."</p>
			</div>
			
			<hr>
						</a>
			</div>
			
		 ";
		
    }
} else {
    echo "<h3>No Projects Found...</h3>";
}

mysqli_close($link);
		
		?>
			
		
      
      
			

						<div>

  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Automatic -->

<ins class="adsbygoogle"

     style="display:block"

     data-ad-client="ca-pub-2219001427204097"

     data-ad-slot="2452749368"

     data-ad-format="auto"></ins>

<script>

(adsbygoogle = window.adsbygoogle || []).push({});

</script>

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

        <script src="bootstrap/js/ie10-viewport-bug-workaround.js"></script>        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/foot.php') ?>

    </body>

</html>

