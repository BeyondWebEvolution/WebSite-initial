<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Chrome Flash Detection Test</title>
<link rel="stylesheet" href="flash_detection.css">
<style type="text/css">
a:link {
	color: #F00;
}
a:visited {
	color: #C30;
}
</style>
</head>

<body bgcolor="#CCCCCC">
	<p>
      <script type="application/javascript">
		var hasFlash = false;
		try {
		  var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
		  if (fo) {
			hasFlash = true;
		  }
		} catch (e) {
		  if (navigator.mimeTypes
				&& navigator.mimeTypes['application/x-shockwave-flash'] != undefined
				&& navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
			hasFlash = true;
		  }
		}	
		
		
		var isChromium = window.chrome,
			winNav = window.navigator,
			vendorName = winNav.vendor,
			isOpera = winNav.userAgent.indexOf("OPR") > -1,
			isIEedge = winNav.userAgent.indexOf("Edge") > -1,
			isIOSChrome = winNav.userAgent.match("CriOS");
		var isChrome = false;	
		
		if(isIOSChrome){
		   // is Google Chrome on IOS
		} else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
		   // is Google Chrome
		   isChrome = true;
		   if (hasFlash == false) {
			   
		   }
		   
		   
		} else { 
		   // not Google Chrome 
		}		
	
	  </script>
      
      <script type="application/javascript">
	  		
			function playAppLinkClicked()
			{
				console.log("playAppLinkClicked " + hasFlash);
				
				if ((hasFlash == false) && (isChrome == true)) 
				{
				
						var id = '#dialog';
							
						//Get the screen height and width
						var maskHeight = $(document).height();
						var maskWidth = $(window).width();
							
						//Set heigth and width to mask to fill up the whole screen
						$('#mask').css({'width':maskWidth,'height':maskHeight});
						
						//transition effect
						$('#mask').fadeIn(500);	
						$('#mask').fadeTo("slow",0.9);	
							
						//Get the window height and width
						var winH = $(window).height();
						var winW = $(window).width();
									  
						//Set the popup window to center
						$(id).css('top',  0);
						$(id).css('left', winW/2-$(id).width()/2);
							
						//transition effect
						$(id).fadeIn(2000); 	
							
						//if close button is clicked
						$('.window .close').click(function (e) {
						//Cancel the link behavior
						e.preventDefault();
						
						$('#mask').hide();
						$('.window').hide();
						});
						
						//if mask is clicked
						$('#mask').click(function () {
						$(this).hide();
						$('.window').hide();
						});	
							
				} else {
					window.location.replace("http://8s.com.php53-15.dfw1-1.websitetestlink.com/content/diagramming_appBETA/login.php");	
				}
			}
	  	
	  </script>
    
    </p>
	<p>&nbsp;</p>
	<table width="300" border="0" align="center" cellpadding="0">
	  <tr>
	    <th scope="col"><button onClick="playAppLinkClicked();">Play Grammar App</button></th>
      </tr>
	  <tr>
	    <th scope="row">&nbsp;</th>
      </tr>
</table>
        <p>&nbsp;</p>
        <div id="boxes">
      <div id="dialog" class="window">
        <img src="flash_enable_popup.png"  alt="Adobe Flash is required to run this app. Goto chrome://plugins in your browser to enable Flash." width="650" height="552" />
      </div>
      <div id="mask"></div>
    </div>
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.js"></script>

<map name="FlashDetectionMap">
  <area shape="rect" coords="37,52,502,172" href="chrome://plugins/" >
</map>     
    
</body>
</html>