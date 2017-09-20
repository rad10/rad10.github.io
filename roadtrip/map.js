// JavaScript Document
$(document).ready(function(){
	//mapHoverFunction
	$("#mapLiverpool").hover(function(){
		$("#infoLiverpool").css("visibility", "visible");
	}, function(){
		$("#infoLiverpool").css("visibility", "hidden");
	});
	$("#mapKingston").hover(function(){
		$("#infoKingston").css("visibility", "visible");
	}, function(){
		$("#infoKingston").css("visibility", "hidden");
	});
	$("#mapLondon").hover(function(){
		$("#infoLondon").css("visibility", "visible");
	}, function(){
		$("#infoLondon").css("visibility", "hidden");
	});
	$("#mapCologne").hover(function(){
		$("#infoCologne").css("visibility", "visible");
	}, function(){
		$("#infoCologne").css("visibility", "hidden");
	});
	$("#mapHamburg").hover(function(){
		$("#infoHamburg").css("visibility", "visible");
	}, function(){
		$("#infoHamburg").css("visibility", "hidden");
	});
	$("#mapBerlin").hover(function(){
		$("#infoBerlin").css("visibility", "visible");
	}, function(){
		$("#infoBerlin").css("visibility", "hidden");
	});
	$("#mapAutobahn").hover(function(){
		$("#infoAutobahn").css("visibility", "visible");
	}, function(){
		$("#infoAutobahn").css("visibility", "hidden");
	});
	$("#mapMunich").hover(function(){
		$("#infoMunich").css("visibility", "visible");
	}, function(){
		$("#infoMunich").css("visibility", "hidden");
	});
	$("#mapFrankfurt").hover(function(){
		$("#infoFrankfurt").css("visibility", "visible");
	}, function(){
		$("#infoFrankfurt").css("visibility", "hidden");
	});
	$("#mapParis").hover(function(){
		$("#infoParis").css("visibility", "visible");
	}, function(){
		$("#infoParis").css("visibility", "hidden");
	});
	// /end mapHoverFunction
	//dataHoverFunction
	$("#dataMelbourne1").hover(function(){
		$("#dataMelbourne1").css({"background-color":"#F60","color":"#000"});
		$("#a1,#b1,#c1,#d1,#e1").css("background-color", "#FFF");
	}, function(){
		$("#dataMelbourne1").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a1,#b1,#c1,#d1,#e1").css("background-color","transparent");
	});
	$("#dataLiverpool").hover(function(){
		$("#infoLiverpool").css("visibility","visible");
		$("#dataLiverpool").css({"background-color":"#F60","color":"#000"});
		$("#a2,#b2,#c2,#d2,#e2").css("background-color", "#FFF");
	}, function(){
		$("#infoLiverpool").css("visibility","hidden");
		$("#dataLiverpool").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a2,#b2,#c2,#d2,#e2").css("background-color","transparent");
	});
	$("#dataKingston").hover(function(){
		$("#infoKingston").css("visibility","visible");
		$("#dataKingston").css({"background-color":"#F60","color":"#000"});
		$("#a3,#b3,#c3,#d3,#e3").css("background-color", "#FFF");
	}, function(){
		$("#infoKingston").css("visibility","hidden");
		$("#dataKingston").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a3,#b3,#c3,#d3,#e3").css("background-color","transparent");
	});
	$("#dataLondon").hover(function(){
		$("#infoLondon").css("visibility","visible");
		$("#dataLondon").css({"background-color":"#F60","color":"#000"});
		$("#a4,#b4,#c4,#d4,#e4").css("background-color", "#FFF");
	}, function(){
		$("#infoLondon").css("visibility","hidden");
		$("#dataLondon").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a4,#b4,#c4,#d4,#e4").css("background-color","transparent");
	});
	$("#dataCologne").hover(function(){
		$("#infoCologne").css("visibility","visible");
		$("#dataCologne").css({"background-color":"#F60","color":"#000"});
		$("#a5,#b5,#c5,#d5,#e5").css("background-color", "#FFF");
	}, function(){
		$("#infoCologne").css("visibility","hidden");
		$("#dataCologne").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a5,#b5,#c5,#d5,#e5").css("background-color","transparent");
	});
	$("#dataHamburg").hover(function(){
		$("#infoHamburg").css("visibility","visible");
		$("#dataHamburg").css({"background-color":"#F60","color":"#000"});
		$("#a6,#b6,#c6,#d6,#e6").css("background-color", "#FFF");
	}, function(){
		$("#infoHamburg").css("visibility","hidden");
		$("#dataHamburg").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a6,#b6,#c6,#d6,#e6").css("background-color","transparent");
	});
	$("#dataBerlin").hover(function(){
		$("#infoBerlin").css("visibility","visible");
		$("#dataBerlin").css({"background-color":"#F60","color":"#000"});
		$("#a7,#b7,#c7,#d7,#e7").css("background-color", "#FFF");
	}, function(){
		$("#infoBerlin").css("visibility","hidden");
		$("#dataBerlin").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a7,#b7,#c7,#d7,#e7").css("background-color","transparent");
	});
	$("#dataAutobahn").hover(function(){
		$("#infoAutobahn").css("visibility","visible");
		$("#dataAutobahn").css({"background-color":"#F60","color":"#000"});
		$("#a8,#b8,#c8,#d8,#e8").css("background-color", "#FFF");
	}, function(){
		$("#infoAutobahn").css("visibility","hidden");
		$("#dataAutobahn").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a8,#b8,#c8,#d8,#e8").css("background-color","transparent");
	});
	$("#dataMunich").hover(function(){
		$("#infoMunich").css("visibility","visible");
		$("#dataMunich").css({"background-color":"#F60","color":"#000"});
		$("#a9,#b9,#c9,#d9,#e9").css("background-color", "#FFF");
	}, function(){
		$("#infoMunich").css("visibility","hidden");
		$("#dataMunich").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a9,#b9,#c9,#d9,#e9").css("background-color","transparent");
	});
	$("#dataFrankfurt").hover(function(){
		$("#infoFrankfurt").css("visibility","visible");
		$("#dataFrankfurt").css({"background-color":"#F60","color":"#000"});
		$("#a10,#b10,#c10,#d10,#e10").css("background-color", "#FFF");
	}, function(){
		$("#infoFrankfurt").css("visibility","hidden");
		$("#dataFrankfurt").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a10,#b10,#c10,#d10,#e10").css("background-color","transparent");
	});
	$("#dataParis").hover(function(){
		$("#infoParis").css("visibility","visible");
		$("#dataParis").css({"background-color":"#F60","color":"#000"});
		$("#a11,#b11,#c11,#d11,#e11").css("background-color", "#FFF");
	}, function(){
		$("#infoParis").css("visibility","hidden");
		$("#dataParis").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a11,#b11,#c11,#d11,#e11").css("background-color","transparent");
	});
	$("#dataMelbourne2").hover(function(){
		$("#dataMelbourne2").css({"background-color":"#F60","color":"#000"});
		$("#a12,#b12,#c12,#d12,#e12").css("background-color", "#FFF");
	}, function(){
		$("#dataMelbourne2").css({"background-color":"#03C","color":"#FCFCFC"});
		$("#a12,#b12,#c12,#d12,#e12").css("background-color","transparent");
	});
});