	    var curPosY = 0;
		var a = document.querySelector('#car');
		var n;
		var interval;	
		var imgHeight = 100;	
		var stop = document.querySelector('#stopButton');
		var go = document.querySelector('#goButton');
		var height = document.documentElement.clientHeight;	
		var gr = document.querySelector('#goLight');
		var rd = document.querySelector('#stopLight');
		stop.onclick = illuminateRed;
    	go.onclick = illuminateGreen;
    	var svet = false;
    	    interval = setInterval(drive, 100);
   
    	function illuminateRed() {
    	  clearLights();
    	  rd.style.backgroundColor = "red";
    	  svet = false;
    	}

    	function illuminateGreen() {
    	  clearLights();
    	  gr.style.backgroundColor = "green";
    	  svet = true;
    	}

    	function clearLights() {
    	  document.querySelector('#stopLight').style.backgroundColor = "black";
    	  document.querySelector('#goLight').style.backgroundColor = "black";
    	}
    	function drive(){
    		if(svet){
    			n=5;
	    		a.style.top = (curPosY -= n) + "px";
	    		if (curPosY == (height - imgHeight))
	    				clearInterval(interval);
				
			}
			else if(rd.style.backgroundColor == 'red'){
				n=0;
				a.style.top = curPosY + "px";	
			}
  		}