<html>
<head>
<?php include($_SERVER['DOCUMENT_ROOT'].'/ascension/template/head.php') ?>

<style>
body {background-color: #0a0711; color: #c8a3ff ;}
</style>
</head>
<body>

<?php include($_SERVER['DOCUMENT_ROOT'].'/ascension/template/top.php') ?>
<p style="text-align:center;"><a href="../ascension">Ascension Home</a></p>
<pre style="text-align:center;font-size:15px">
<strong>  ___   _____ _____  _____ _   _  _____ _____ _____ _   _ 
 / _ \ /  ___/  __ \|  ___| \ | |/  ___|_   _|  _  | \ | |
/ /_\ \\ `--.| /  \/| |__ |  \| |\ `--.  | | | | | |  \| |
|  _  | `--. \ |    |  __|| . ` | `--. \ | | | | | | . ` |
| | | |/\__/ / \__/\| |___| |\  |/\__/ /_| |_\ \_/ / |\  |
\_| |_/\____/ \____/\____/\_| \_/\____/ \___/ \___/\_| \_/
==========================================================
                                                          </strong>
                                                          </pre>
														 
<p style="text-align:center;"></p>

<?php
error_reporting(E_ALL ^ E_NOTICE); 
//$filename = basename($_SERVER['PHP_SELF'], '.php');

				include ($_SERVER['DOCUMENT_ROOT'].'/templates/sqlUserInfo.php');
			$table = "Ascension";
			$rows = "ID, Title, DateT, Body, Author";
			
			$article = $_GET["id"];
			include ($_SERVER['DOCUMENT_ROOT'].'/templates/sqlConnect.php');
			
//echo "Success: A proper connection to MySQL was made!" . PHP_EOL;
//echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;

$sql = "SELECT $rows FROM $table WHERE ID LIKE '$article'";
$result = $link->query($sql);

$filename = basename($_SERVER['PHP_SELF'], '.php');
		

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        //echo "<div> <h4>(" . $row["Date"]. "): " . $row["Title"]. "</h4><p> " . nl2br($row["Body"]). "<br><span style='font-size:70%;'>Tags: " . $row["Tags"]. "</span></p><hr></div>";
	     echo "
		 <script>
		 var head=`Title: ".$row["Title"]."\n".$row["Author"]."\nDate: ".$row["DateT"]."\n\n`;
		 var headform = `Title: ".$row["Title"]."<br>Author: ".$row["Author"]."<br>Date: ".$row["DateT"]."<br><br>`;
		 var body=`".$row["Body"]."`;
		 var bodyForm=`".nl2br($row["Body"])."`;
		 var speed = 5;
		 var hf = true;
		 var i = 0;
		 var j = 0;
		 document.addEventListener('DOMContentLoaded', function(event) { 
    typeWriter();
});
		 
		 function typeWriter() {
  if (i < head.length) {
    document.getElementById('head').innerHTML += head.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (j < body.length)
  {
	  if(hf)
	  {
		  document.getElementById('head').innerHTML = headform;
		  hf = false;
	  }
	  document.getElementById('body').innerHTML += body.charAt(j);
    j++;
	setTimeout(typeWriter, speed);
  } else {
	  document.getElementById('body').innerHTML = bodyForm;
  }
}
		 </script>
		 
		 <div style='margin: auto;max-width: 600px;'>
		 <b><p id='head'></p></b>
		 <p id='body'></p>
		 <p><a href='archive'>Back</a></p>
		 </div>
		 
		 
							
														
							
";
		
    }
} else {
	$rows2 = "ID, Title, DateT, Author";
	$sql2 = "SELECT $rows2 FROM $table ORDER BY ID DESC";
$result2 = $link->query($sql2);

$filename2 = basename($_SERVER['PHP_SELF'], '.php');


if ($result2->num_rows > 0) {
    // output data of each row
	echo "
	<p style='text-align:center;'>All archived system entries sorted with the newest entry at the top.<br>Archive recovery in progress, more entries will become available...</p>
	";
    while($row2 = $result2->fetch_assoc()) {
		echo "
		<p style='text-align:center;font-size:20px;'><a href='?id=".$row2["ID"]."'>".$row2["Title"]." - ".$row2["Author"]." - ".$row2["DateT"]."</a></p>
		";
	}
}
	
   
}

mysqli_close($link);
		

?>


<?php include($_SERVER['DOCUMENT_ROOT'].'/ascension/template/bottom.php') ?>
</body>
</html>