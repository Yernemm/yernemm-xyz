<!DOCTYPE html>
<html lang="en">
    <head>
	        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/head.php') ?>
			<script type="text/javascript" src="/ckeditor/ckeditor.js"></script>
			<style>
			@media (min-width: 768px) { /*Should be 992px*/
  .container {
    width: 970px;
  }
}
@media (min-width: 992px) { /*Should be 1200px*/
  .container {
    width: 1170px;
  }
}
@media (min-width: 1600px) {
  .container {
    width: 1570px;
  }
}

.col-xs-1{
    background-color:#ccc;
}

			</style>
    </head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/defback.php') ?>
	
<?php include($_SERVER['DOCUMENT_ROOT'].'/templates/navh.php') ?>
	
        <div class="container">
            <div class="Home">
			<h1>CKEDITOR</h1>
<hr>

										<p>Not actually made by me but very useful for writing formatted text for HTML. It may take a few secodns to load.</p>
							<textarea name="editor" id="editor">
				
				</textarea>
							                <hr>
				</div>
				            <div class="col-sm-8 blog-main">
								<script type="text/javascript"> CKEDITOR.replace( 'editor' );</script>
			
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
        <script src="/bootstrap/js/ie10-viewport-bug-workaround.js"></script>
		        <?php include($_SERVER['DOCUMENT_ROOT'].'/templates/foot.php') ?>
    </body>
</html>
