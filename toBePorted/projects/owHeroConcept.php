<!DOCTYPE html>
<html lang="en">
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
			
								<style>
						
						@font-face {
							font-family: bigNoodleTitling;
							src: url('/media/fonts/big_noodle_titling_oblique.ttf');
							
						}
						
						.font {
    font-family: bigNoodleTitling;
	font-size: 150%;
}
			.buttonOw {
display: inline-block;
  padding: 5px 10px;
  font-size: 25px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color:  #FF6600;
  border: none;
  border-radius: 2px;
  box-shadow: 0 9px #999;
  width:100%;
  font-family: bigNoodleTitling;

				
			}
			
			.buttonOw:hover {background-color:  #fe5320}

.buttonOw:active {
  background-color: #ee3300;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

			</style>
			
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>
	
        <div class="container">
            <div class="Home">
			<h1>Overwatch Random Hero Concept Creator</h1>
			                <hr>
				</div>
				            <div class="col-sm-8 blog-main">
			<p>This page will randomly generate a concept Overwatch hero.</p>
			<p><a class="buttonOw" onclick="generate()" >Generate Hero</a></p>
			<hr>
			<h4>Hero name:</h4>
			<h2 id="hname"></h2>
			
			<table>
			<tr>
			<td style="vertical-align: top;">
			
			<table>
			<tr>
			<td><h3>Bio:</h3></td>
			</tr>
			<tr>
			<td><p>Real Name: <span id="rname"></span></p></td>
			</tr>
			<tr>
			<td><p>Age: <span id="age"></span></p></td>
			</tr>
			<tr>
			<td><p>Occupation: <span id="job"></span></p></td>
			</tr>
			<tr>
			<td><p>Base of Operations: <span id="base"></span></p></td>
			</tr>
			<tr>
			<td><p>Affiliation: <span id="team"></span></p></td>
			</tr>
			</table>
			
			</td><td style="width:50px;"></td><td style="vertical-align: top;">
			
			<table>
						<tr>
			<td><h3>Gameplay:</h3></td>
			</tr>
			<tr>
			<td><p>Role: <span id="role"></span></p></td>
			</tr>

			<tr>
			<td><p>Main weapon: <span id="weapon"></span></p></td>
			</tr>
						<tr>
			<td><p>Ability 1: <span id="ab1"></span></p></td>
			</tr>
						<tr>
			<td><p>Ability 2: <span id="ab2"></span></p></td>
			</tr>
						<tr>
			<td><p>Ultimate: <span id="ult"></span></p></td>
			</tr>
			</table>
			
			
			</td>
			</tr>
			</table>
			
			<hr>
			
			<script type="text/javascript" src="/scripts/owHeroConcept.js?v=1"></script>
			
			
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
