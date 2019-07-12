<!DOCTYPE html>
<html lang="en">
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
			
			<style>
			.event{
				background-color: #e06ff7;
				color: #000000;
				
			}
			
			.hero{
				background-color: #ff6456;
				color: #000000;
				
			}
			
			.map{
				background-color: #a7efbc;
				color: #000000;
					
			}
			
			.blizz{
				background-color: #00B4FF;
				color: #000000;
					
			}
			
			.other{
				background-color: #e1e9ea;
				color: #000000;
					
			}
			</style>
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navp.php') ?>
	
        <div class="container">
            <div class="Home">
			<h1>Overwatch Content Calendar</h1>
			                <hr>
				</div>
				
				            <div class="col-sm-8 blog-main">
							<p>This calendar shows what Overwatch content was released and how it can be used to predict future releases.</p>
							<hr>
							<div style="font-size:130%;">
							<h3>Key:</h3>
							<p class="event">In-game event</p>
							<p class="hero">New hero</p>
							<p class="map">New map</p>
							<p class="blizz">Blizzard event</p>
							<p class="other">Other major content update</p>
							</div>
							
							<hr>
							
			<div style="font-size:120%;">
			<table border="1" cellpadding="1" cellspacing="1">
	<tbody>
		<tr>
			<td class="other"><strong>5/2016</strong><br />
			Game Launched</td>
		</tr>
		<tr>
			<td class="other"><strong>06/2016</strong><br />
			Competitive mode launched - Season 1</td>
		</tr>
		<tr>
			<td class="hero"><strong>07/2016</strong><br />
			Ana released</td>
		</tr>
		<tr>
			<td class="blizz"><strong>08/2016</strong><br />
			<span class="event">Summer Games event</span><br />
			GAMESCOM (Eichenwalde announced)</td>
		</tr>
		<tr>
			<td class="map"><strong>09/2016</strong><br />
			Eichenwalde released on live</td>
		</tr>
		<tr>
			<td class="event"><strong>10/2016</strong><br />
			Halloween Terror event</td>
		</tr>
		<tr>
			<td class="blizz"><strong>11/2016</strong><br />
			BLIZZCON<br />
			<span class="hero">Sombra released</span><br />
			<span class="other">Arcade released</span><br />
			<span class="map">Ecopoint: Antarctica released<br />
			(Oasis announced)</td></span>
		</tr>
		<tr>
			<td class="event"><strong>12/2016</strong><br />
			Winter Wonderland event</td>
		</tr>
		<tr>
			<td class="map"><strong>01/2017</strong><br />
			Oasis released</td>
		</tr>
		<tr>
			<td class="event"><strong>02/2017</strong><br />
			Year of the Rooster event</td>
		</tr>
		<tr>
			<td class="hero"><strong>03/2017</strong><br />
			Orisa released</td>
		</tr>
		<tr>
			<td class="event"><strong>04/2017</strong><br />
			Uprising event</td>
		</tr>
		<tr>
			
			<td class="event"><strong>05/2017</strong><br />
			Anniversary event<br />
			<span class="map">Castillo released<br />
			Necropolis released<br />
			Black Forest released</span><br />
			<span class="other">1v1 and 3v3 modes updated</span>
			</td>
		</tr>
		<tr class="map">
			
			<td class="map"><strong>06/2017</strong><br />
			Horizon Lunar Colony
			</td>
		</tr>

		<tr>
			<td class="hero"><strong>07/2017</strong><br />
			<strike>--exactly one year after Ana release - potential for new hero release (Hammond or other. Unlikely to be Doomfist. Doomfist is highly-anticipated, just like Sombra was at launch of Overwatch, so it's likely that they will save him for Blizzcon.)</strike> Doomfist released</td>
		</tr>
		<tr>
			<td class="blizz"><strong>08/2017</strong><br />
			<span class="event"><strike>--exactly one year after Summer Games - most likely month for </strike>Summer Games 2017</span><br />
			--Gamescom - potential for new map/hero announcement</td>
		</tr>
				<tr>
			<td>
			<p>------------</p>

			<p>Future predictions below</p>

			<p>------------</p>
			</td>
		</tr>
		<tr>
			<td class="map"><strong>09/2017</strong><br />
			--exactly one year after Eichenwalde - new map?</td>
		</tr>
		<tr>			
			<td class="event"><strong>10/2017</strong><br />
			--Halloween Terror 2017?
			</td>
		</tr>
		<tr>
			<td class="blizz"><strong>11/2017</strong><br />
			BLIZZCON<br />
			<span class="hero">Potential announcement of a highly-anticipated hero. <strike>(Doomfist?)</strike>(Doomfist released in July.)</span><br />
			<span class="map">Potential new map</span><br />
			<span class="other">Possible other content.</span></td>
		</tr>
				<tr>
			<td class="event"><strong>12/2017</strong><br />
			Winter Wonderland 2017 event?</td>
		</tr>
	</tbody>
</table>

	</div>		
			
			
			
			
			
			
			
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
