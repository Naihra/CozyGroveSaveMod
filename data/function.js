function save( JSON, checkSave )
{			
	if ( checkSave == false )
	{
		alert("No changes were made");
		return;
	}
	
	var jsonStr2  = JSON.stringify(json);	
	//Found a character that was making the encode fail
	jsonStr2 = jsonStr2.replace("—","-");	
	const outputStr = `${fileTkn[0]},${window.btoa(jsonStr2)}`;
		
	const element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputStr));
	element.setAttribute('download', "cg_save.sf");

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);		
}	
	
function loadSource()
{
	if (this.files.length == 0) return;

	var reader = new FileReader();
	var run = true;

	reader.onload = (e) => {
		const fileStr = e.target.result;
		fileTkn = fileStr.split(',');			
		try
		{
			const jsonStr = window.atob(fileTkn[1]);
			json = JSON.parse(jsonStr);		
			run = true;
			document.getElementById("uploadSourceFile").disabled = true;
		} catch(err)
		{				
			alert("File not supported");
			run = false;
		}
		start( run );
	};

	reader.readAsText(this.files[0]);
}	

function iniPaint()
{
	canvas   	  = document.getElementById("myCanvas");
	ctx      	  = canvas.getContext("2d");		
	ruta     	  = "./data/";
	rutaBase 	  = "./data/base/"
	rutaImp 	  = "./data/imp/"
	rutaAnimal 	  = "./data/animal/"
	rutaForage 	  = "./data/forage/"
	rutaRocks 	  = "./data/rock/"
	offset_x 	  = 125;
	offset_y 	  = 200;	
	canvas.height = 1100;
	canvas.width  = 1100;	
}

function clearCanvas()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function loadAndDraw(ruta, ext, name, pos_x, pos_y, size_x, size_y, color)
{
	color = ( color == '' || color == null ) ? "black" : color;
	
	const img_name = ruta.concat(name,".",ext);		
	
	var image = new Image();			
	image.onload = function()
	{
		ctx.drawImage(image, pos_x, pos_y, size_x, size_y);	
	}
	image.onerror = function()
	{
		circleAndWrite(name, pos_x, pos_y, color);
	}
	image.src = img_name;	
}

function circleAndWrite(texto, pos_x, pos_y, color, font)
{
	var baseFont = "12px Courier New";
	
	color = ( color == '' || color == null ) ? "black" : color;
	font  = ( font  == '' || font  == null ) ? baseFont : font.concat(" ", baseFont);
	
	ctx.beginPath();
	ctx.arc(pos_x, pos_y, 6, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
	
	ctx.font = font;
	ctx.fillText(texto, pos_x + 12, pos_y + 6); 		
}

function paintBase( fences )
{
	const size = 60;		
	
	// Flamey at fixed spot
	var pos_x = ( 4 * (19.091885 + offset_x) ) - (size / 2);
	var pos_y = ( 4 * (offset_y - 10.6083635) ) - (size / 2);
	
	loadAndDraw(rutaBase, "png", "flamey", pos_x, pos_y, size, size);
	
	// Mr Kit
	for ( var key in json.MerchantsByID )
	{
		pos_x = ( 4 * (json.MerchantsByID[key].spawnPosition[0] + offset_x) ) - (size * 2/3);
		pos_y = ( 4 * (offset_y - json.MerchantsByID[key].spawnPosition[1]) ) - (size * 1.2);
	}
	
	loadAndDraw(rutaBase, "jpg", "mr_kit", pos_x, pos_y, size, size);
	
	for (var key in json.SpiritsByID)
	{
		var line = json.SpiritsByID[key];
		
		if ( line.spawnedGenerator )
		{		
			pos_x = 4 * (line.location[0] + offset_x);
			pos_y = 4 * (offset_y - line.location[1]);
								
			loadAndDraw(rutaBase, "jpg", line.characterID, pos_x - (size / 2), pos_y - (size / 2), size, size);
		}
	}	
	
	//Ancient lamps		
	//Common fence to mark places if marked TRUE	
	for( key in json.ItemsOnGroundData.OnGround )
	{			
		const size_fence = 30;
		
		line = json.ItemsOnGroundData.OnGround[key];
		
		try {
		
		if ( fences && ( line.item.configID == "dc_LC_fence_B_common" || line.item.configID == "dc_LC_fence_A_common" ) )
		{
			pos_x = 4 * (line.position[0] + offset_x) - (size_fence / 4);
			pos_y = 4 * (offset_y - line.position[1]) - (size_fence / 2);
			
			loadAndDraw(rutaBase, "png", "fence", pos_x, pos_y, size_fence / 2, size_fence);
		}
		
		if ( line.item.configID.substring(0,11) == "major_lamp_" )
		{
			pos_x = 4 * (line.position[0] + offset_x) - (size_fence / 2);
			pos_y = 4 * (offset_y - line.position[1]) - (size_fence / 2);
			
			loadAndDraw(rutaBase, "png", "flamey", pos_x, pos_y, size_fence, size_fence);
		}
		} catch(err) {}
	}		
}	
	
function paintGrid()
{
	const grid = 25;
		
	var max_x = ( canvas.clientWidth / 4 ) - offset_x;
	var max_y = offset_y - ( canvas.clientHeight / 4 );
	
	var start_x = Math.trunc( -offset_x / grid ) * grid;
	var start_y = Math.trunc( offset_y / grid ) * grid;
	
	for ( var v_p = start_x; v_p < max_x; v_p += grid )
	{
		const posx = 4 * ( v_p + offset_x );
		
		ctx.beginPath();
		ctx.moveTo( posx , 0);
		ctx.lineTo( posx ,canvas.clientHeight);
		ctx.strokeStyle = "lightgray";
		ctx.stroke();
		
		ctx.font 	  = "12px Courier New";
		ctx.fillStyle = 'black';
		ctx.textAlign = 'start';
		ctx.fillText(v_p, posx, 10); 
	}
	for ( var h_p = start_y; h_p > max_y; h_p -= grid )
	{
		const posy = 4 * ( offset_y - h_p );
	
		ctx.beginPath();
		ctx.moveTo( 0, posy );
		ctx.lineTo( canvas.clientWidth, posy );
		ctx.strokeStyle = "lightgray";
		ctx.stroke();
		
		ctx.font 	  = "12px Courier New";
		ctx.fillStyle = 'black';
		ctx.textAlign = 'end';
		ctx.fillText(h_p, canvas.clientWidth, posy); 
	}		
	ctx.textAlign = 'start';
}
	