'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const axios = require('axios');
const https = require('https');
const BootBot = require('bootbot')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES
app.get('/', function(req, res) {
	res.send("Hi I am a chatbot")
})


app.get('/equirino',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  //	equirinonorth
	 	const jf1 = body.RWS[0].RW[39].FIS[0].FI[0].CF[0].JF;
	 	const jf2 = body.RWS[0].RW[39].FIS[0].FI[0].CF[0].JF;
	 	const jf3 = body.RWS[0].RW[36].FIS[0].FI[0].CF[0].JF;
	 	const jf4 = body.RWS[0].RW[37].FIS[0].FI[1].CF[0].JF;
		const jf5 = body.RWS[0].RW[27].FIS[0].FI[1].CF[0].JF;
		const jf6 = body.RWS[0].RW[4].FIS[0].FI[0].CF[0].JF;
		const jf7 = body.RWS[0].RW[5].FIS[0].FI[13].CF[0].JF;
	//  equirinosouth
		const jf01 = body.RWS[0].RW[40].FIS[0].FI[0].CF[0].JF;
		const jf02 = body.RWS[0].RW[3].FIS[0].FI[0].CF[0].JF;
		const jf03 = body.RWS[0].RW[37].FIS[0].FI[1].CF[0].JF;
		const jf04 = body.RWS[0].RW[28].FIS[0].FI[2].CF[0].JF;
		const jf05 = body.RWS[0].RW[5].FIS[0].FI[13].CF[0].JF;
	// equirino north intersections 
		const equirinsouth = body.RWS[0].RW[1].DE;
		const equirinonorth = body.RWS[0].RW[0].DE;
	  	const mcarthur = body.RWS[0].RW[0].FIS[0].FI[0].TMC.DE;
	  	const mcarthurjf = body.RWS[0].RW[0].FIS[0].FI[0].CF[0].JF;	
	  	const pichon = body.RWS[0].RW[0].FIS[0].FI[1].TMC.DE;
	  	const pichonjf = body.RWS[0].RW[0].FIS[0].FI[1].CF[0].JF;
	  	const sanpedro = body.RWS[0].RW[0].FIS[0].FI[2].TMC.DE;
	  	const sanpedrost = body.RWS[0].RW[0].FIS[0].FI[2].CF[0].JF;
	  	const bangoy = body.RWS[0].RW[0].FIS[0].FI[3].TMC.DE;
	  	const bangoyst = body.RWS[0].RW[0].FIS[0].FI[3].CF[0].JF;
	  	const Laurel = body.RWS[0].RW[0].FIS[0].FI[4].TMC.DE;
	  	const Laurelst = body.RWS[0].RW[0].FIS[0].FI[4].CF[0].JF;
	  // equirino south intersections 
		//const street = body.RWS[0].RW[1].DE;
	  	const jp = body.RWS[0].RW[1].FIS[0].FI[0].TMC.DE;
	  	const jpjf = body.RWS[0].RW[1].FIS[0].FI[0].CF[0].JF;
	  	const cbang = body.RWS[0].RW[1].FIS[0].FI[1].TMC.DE;
	  	const cbangjf = body.RWS[0].RW[1].FIS[0].FI[1].CF[0].JF;
	  	const sanp = body.RWS[0].RW[1].FIS[0].FI[2].TMC.DE;
	  	const sanjf = body.RWS[0].RW[1].FIS[0].FI[2].CF[0].JF;
	  	const pichonn = body.RWS[0].RW[1].FIS[0].FI[3].TMC.DE;
	  	const pichonjjf = body.RWS[0].RW[1].FIS[0].FI[3].CF[0].JF;
	  	const macc = body.RWS[0].RW[1].FIS[0].FI[4].TMC.DE;
	  	const macjf = body.RWS[0].RW[1].FIS[0].FI[4].CF[0].JF;
	  	//north
	  	var x = 7
	  	var nf = jf1+jf2+jf3+jf4+jf5+jf6+jf7;
		var njf = nf/x;
		//south
		var y = 5
		var sf = jf01 + jf02 + jf03 + jf04 + jf05;
		var sjf = sf/y;
	  	let analysisNorth = "";
	  	if(njf == 0 || njf < 4){
	  	analysisNorth = "For North Bound lane is Free flow of traffic.";
	  	}else if(njf == 4 || njf < 8){
	  		analysisNorth = "For North Bound lane is Sluggish flow of traffic.";
	  	}else if(njf == 8 || njf < 10){
	  		analysisNorth = "For North Bound lane is Slow flow of traffic.";
	  	}else if(njf == 10){
	  		analysisNorth = "For North Bound lane North Bound is Traffic stopped or Road closed."
	  	}else{
	  		
	  	}
	  	let analysisSouth = "";
	  	if(sjf == 0 || sjf < 4){
	  	analysisSouth = "For South Bound lane is Free flow of traffic.";
	  	}else if(sjf == 4 || sjf < 8){
	  		analysisSouth = "For South Bound lane is Sluggish flow of traffic.";
	  	}else if(sjf == 8 || sjf < 10){
	  		analysisSouth = "For South Bound lane is Slow flow of traffic.";
	  	}else if(sjf == 10){
	  		analysisSouth = "For South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		analysisSouth = "Cannot compute"
	  	}
	  	let arthur = "";
	  	if(mcarthurjf == 0 || mcarthurjf < 4){
	  	arthur = "Mac Arthur Hwy North Bound lane is Free flow of traffic.";
	  	}else if(mcarthurjf == 4 || mcarthurjf < 8){
	  		arthur = "Mac Arthur Hwy North Bound lane is Sluggish flow of traffic.";
	  	}else if(mcarthurjf == 8 || mcarthurjf < 10){
	  		arthur = "Mac Arthur Hwy North Bound lane is Slow flow of traffic.";
	  	}else if(mcarthurjf == 10){
	  		arthur = "Mac Arthur Hwy North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		arthur = "Cannot compute"
	  	}
	  	let pichon1 = "";
	  	if(pichonjf == 0 || pichonjf < 4){
	  	pichon1 = "Pichon St North Bound lane is Free flow of traffic.";
	  	}else if(pichonjf == 4 || pichonjf < 8){
	  		pichon1 = "Pichon St North Bound lane is Sluggish flow of traffic.";
	  	}else if(pichonjf == 8 || pichonjf < 10){
	  		pichon1 = " Pichon St North Bound lane is Slow flow of traffic.";
	  	}else if(pichonjf == 10){
	  		pichon1 = "Pichon St North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		pichon1 = "Cannot compute"
	  	}
	  	let san = "";
	  	if(sanpedrost == 0 || sanpedrost < 4){
	  	san = " Sanpedro St North Bound lane is Free flow of traffic.";
	  	}else if(sanpedrost == 4 || sanpedrost < 8){
	  		san = "Sanpedro St North Bound lane is Sluggish flow of traffic.";
	  	}else if(sanpedrost == 8 || sanpedrost < 10){
	  		san = "Sanpedro St North Bound lane is Slow flow of traffic.";
	  	}else if(sanpedrost == 10){
	  		san = "Sanpedro St North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		san = "Cannot compute"
	  	}
	  	let bang = "";
	  	if(bangoyst == 0 || bangoyst < 4){
	  	bang = " C. Bangoy North Bound lane is Free flow of traffic.";
	  	}else if(bangoyst == 4 || bangoyst < 8){
	  		bang = "C. Bangoy North Bound lane is Sluggish flow of traffic.";
	  	}else if(bangoyst == 8 || bangoyst < 10){
	  		bang = "C. Bangoy North Bound lane is Slow flow of traffic.";
	  	}else if(bangoyst == 10){
	  		bang = "C. Bangoy North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		bang = "Cannot compute"
	  	}
	  	let lau = "";
	  	if(Laurelst == 0 || Laurelst < 4){
	  	lau = " J. P Laurel North Bound lane is Free flow of traffic.";
	  	}else if(Laurelst == 4 || Laurelst < 8){
	  		lau = "J. P Laurel North Bound lane is Sluggish flow of traffic.";
	  	}else if(Laurelst == 8 || Laurelst < 10){
	  		lau = "J. P Laurel North Bound lane is Slow flow of traffic.";
	  	}else if(Laurelst == 10){
	  		lau = "J. P Laurel North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		lau = "Cannot compute"
	  	}
	  	//#33333333333333333333333333333333333333333333333333333333333333333333333
	  	let jpl = "";
	  	if(jpjf == 0 || jpjf < 4){
	  	jpl = " J. P Laurel South Bound lane is Free flow of traffic.";
	  	}else if(jpjf == 4 || jpjf < 8){
	  		jpl = "J. P Laurel South Bound lane is Sluggish flow of traffic.";
	  	}else if(jpjf == 8 || jpjf < 10){
	  		jpl = "J. P Laurel South Bound lane is Slow flow of traffic.";
	  	}else if(jpjf == 10){
	  		jpl = "J. P Laurel South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		jpl = "Cannot compute"
	  	}
	  	let bangg = "";
	  	if(cbangjf == 0 || cbangjf < 4){
	  	bangg = " C. Bangoy South Bound lane is Free flow of traffic.";
	  	}else if(cbangjf == 4 || cbangjf < 8){
	  		bangg = "C. Bangoy South Bound lane is Sluggish flow of traffic.";
	  	}else if(cbangjf == 8 || cbangjf < 10){
	  		bangg = "C. Bangoy South Bound lane is Slow flow of traffic.";
	  	}else if(cbangjf == 10){
	  		bangg = "C. Bangoy South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		bangg = "Cannot compute"
	  	}
	  	let sann = "";
	  	if(sanjf == 0 || sanjf < 4){
	  	sann = " Sanpedro St South Bound lane is Free flow of traffic.";
	  	}else if(sanjf == 4 || sanjf < 8){
	  		sann = "Sanpedro St South Bound lane is Sluggish flow of traffic.";
	  	}else if(sanjf == 8 || sanjf < 10){
	  		sann = "Sanpedro St South Bound lane is Slow flow of traffic.";
	  	}else if(sanjf == 10){
	  		sann = "Sanpedro St South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		sann = "Cannot compute"
	  	}
	  	let pi = "";
	  	if(pichonjjf == 0 || pichonjjf < 4){
	  	pi = " Pichon St South Bound lane is Free flow of traffic.";
	  	}else if(pichonjjf == 4 || pichonjjf < 8){
	  		pi = "Pichon St South Bound lane is Sluggish flow of traffic.";
	  	}else if(pichonjjf == 8 || pichonjjf < 10){
	  		pi = "Pichon St South Bound lane is Slow flow of traffic.";
	  	}else if(pichonjjf == 10){
	  		pi = "Pichon St South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		pi = "Cannot compute"
	  	}
	  	let macky = "";
	  	if(macjf == 0 || macjf < 4){
	  	macky = " Mac Arthur Hwy South Bound lane is Free flow of traffic.";
	  	}else if(macjf == 4 || macjf < 8){
	  		macky = "Mac Arthur Hwy South Bound lane is Sluggish flow of traffic.";
	  	}else if(macjf == 8 || macjf < 10){
	  		macky = "Mac Arthur Hwy South Bound lane is Slow flow of traffic.";
	  	}else if(macjf == 10){
	  		macky = "Mac Arthur Hwy South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		macky = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ equirinoNorth: equirinonorth, njf:njf, mcarthur:mcarthur, mcarthurjf:mcarthurjf,
    	 pichon:pichon, pichonjf:pichonjf, sanpedro:sanpedro, sanpedrost:sanpedrost, bangoy:bangoy, bangoyst:bangoyst, Laurel:Laurel, Laurelst:Laurelst,
    	 bangoy:bangoy,bangoyst:bangoyst, analysisNorth:analysisNorth,arthur:arthur, pichon1:pichon1,san:san, bang:bang,lau:lau,
    	 equirinSouth:equirinsouth, sjf:sjf, jp:jp ,jpjf:jpjf , cbang:cbang , cbangjf:cbangjf,sanp:sanp,sanjf:sanjf, pichonn:pichonn,pichonjjf:pichonjjf, macc:macc, macjf:macjf,  analysisSouth:analysisSouth, jpl:jpl, bangg:bangg,
    	 sann:sann,pi:pi, macky:macky }));
	 
	});


});

app.get('/jp',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  	//jplaurel south
	  	const soth = body.RWS[0].RW[2].DE;
	  	const jf1 = body.RWS[0].RW[76].FIS[0].FI[3].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[63].FIS[0].FI[2].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[56].FIS[0].FI[1].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[49].FIS[0].FI[0].CF[0].JF;
	  	const jf5 = body.RWS[0].RW[43].FIS[0].FI[2].CF[0].JF;
	  	const jf6 = body.RWS[0].RW[41].FIS[0].FI[1].CF[0].JF;
	  	const jf7 = body.RWS[0].RW[30].FIS[0].FI[0].CF[0].JF;
	  	const jf8 = body.RWS[0].RW[24].FIS[0].FI[0].CF[0].JF;
	  	const jf9 = body.RWS[0].RW[20].FIS[0].FI[0].CF[0].JF;
	  	var n = 9
	  	var x = jf1 + jf2 + jf3 + jf4 + jf5 + jf6 + jf7 + jf8 + jf9;
	  	var northh = x/n;
	  	//jplaurel north
	  	const nor = body.RWS[0].RW[3].DE;
	  	const jf01 = body.RWS[0].RW[78].FIS[0].FI[0].CF[0].JF;
	  	const jf02 = body.RWS[0].RW[66].FIS[0].FI[0].CF[0].JF;
	  	const jf03 = body.RWS[0].RW[55].FIS[0].FI[0].CF[0].JF;
	  	const jf04 = body.RWS[0].RW[50].FIS[0].FI[2].CF[0].JF;
	  	const jf05 = body.RWS[0].RW[44].FIS[0].FI[0].CF[0].JF;
	  	const jf06 = body.RWS[0].RW[42].FIS[0].FI[1].CF[0].JF;
	  	const jf07 = body.RWS[0].RW[32].FIS[0].FI[1].CF[0].JF;
	  	const jf08 = body.RWS[0].RW[25].FIS[0].FI[1].CF[0].JF;
	  	const jf09 = body.RWS[0].RW[23].FIS[0].FI[1].CF[0].JF;
	  	var xx = jf01 + jf02 + jf03 + jf04 + jf05 + jf06 + jf07 + jf08 + jf09;
	  	var southh = xx/n;
	  	//jplaurel south intersections
	  	const r = body.RWS[0].RW[2].FIS[0].FI[0].TMC.DE;
	  	const jf001 = body.RWS[0].RW[2].FIS[0].FI[0].CF[0].JF;
	  	const angg = body.RWS[0].RW[2].FIS[0].FI[1].TMC.DE;
	  	const jf002 = body.RWS[0].RW[2].FIS[0].FI[1].CF[0].JF;
	  	const cab = body.RWS[0].RW[2].FIS[0].FI[2].TMC.DE;
	  	const jf003 = body.RWS[0].RW[2].FIS[0].FI[2].CF[0].JF;
 		const dacc = body.RWS[0].RW[2].FIS[0].FI[3].TMC.DE;
	  	const jf004 = body.RWS[0].RW[2].FIS[0].FI[3].CF[0].JF;
	  	const ft = body.RWS[0].RW[2].FIS[0].FI[4].TMC.DE;
	  	const jf005 = body.RWS[0].RW[2].FIS[0].FI[4].CF[0].JF;
	  	const eq = body.RWS[0].RW[2].FIS[0].FI[5].TMC.DE;
	  	const jf006 = body.RWS[0].RW[2].FIS[0].FI[5].CF[0].JF;
	  	//jplaurel north intersections
	  	const eeq = body.RWS[0].RW[3].FIS[0].FI[0].TMC.DE;
	  	const jf0001 = body.RWS[0].RW[3].FIS[0].FI[0].CF[0].JF;
	  	const fft = body.RWS[0].RW[3].FIS[0].FI[1].TMC.DE;
	  	const jf0002 = body.RWS[0].RW[3].FIS[0].FI[1].CF[0].JF;
	  	const daccc = body.RWS[0].RW[3].FIS[0].FI[2].TMC.DE;
	  	const jf0003 = body.RWS[0].RW[3].FIS[0].FI[2].CF[0].JF;
	  	const cabb = body.RWS[0].RW[3].FIS[0].FI[3].TMC.DE;
	  	const jf0004 = body.RWS[0].RW[3].FIS[0].FI[3].CF[0].JF;
	  	const anggg = body.RWS[0].RW[3].FIS[0].FI[4].TMC.DE;
	  	const jf0005 = body.RWS[0].RW[3].FIS[0].FI[4].CF[0].JF;
	  	const rr = body.RWS[0].RW[3].FIS[0].FI[5].TMC.DE;
	  	const jf0006 = body.RWS[0].RW[3].FIS[0].FI[5].CF[0].JF;
	  	let analysisNorth = "";
	  	if(northh == 0 || northh < 4){
	  	analysisNorth = "For North Bound lane is Free flow of traffic.";
	  	}else if(northh == 4 || northh < 8){
	  		analysisNorth = "For North Bound lane is Sluggish flow of traffic.";
	  	}else if(northh == 8 || northh < 10){
	  		analysisNorth = "For North Bound lane is Slow flow of traffic.";
	  	}else if(northh == 10){
	  		analysisNorth = "For North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		
	  	}
	  	let analysisSouth = "";
	  	if(southh == 0 || southh < 4){
	  	analysisSouth = "For South Bound lane is Free flow of traffic.";
	  	}else if(southh == 4 || southh < 8){
	  		analysisSouth = "For South Bound lane is Sluggish flow of traffic.";
	  	}else if(southh == 8 || southh < 10){
	  		analysisSouth = "For South Bound lane is Slow flow of traffic.";
	  	}else if(southh == 10){
	  		analysisSouth = "For South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		analysisSouth = "Cannot compute"
	  	}
	  	let rs = "";
	  	if(jf001 == 0 || jf001 < 4){
	  	rs = "R. Castillo South Bound lane is Free flow of traffic.";
	  	}else if(jf001 == 4 || jf001 < 8){
	  		rs = "R. Castillo South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf001 == 8 || jf001 < 10){
	  		rs = "R. Castillo South Bound lane is Slow flow of traffic.";
	  	}else if(jf001 == 10){
	  		rs = "R. Castillo South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		rs = "Cannot compute"
	  	}
	  	let an = "";
	  	if(jf002 == 0 || jf002 < 4){
	  	an = "Angliongto South Bound lane is Free flow of traffic.";
	  	}else if(jf002 == 4 || jf002 < 8){
	  		an = "Angliongto South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf002 == 8 || jf002 < 10){
	  		an = "Angliongto South Bound lane is Slow flow of traffic.";
	  	}else if(jf002 == 10){
	  		an = "Angliongto South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		an = "Cannot compute"
	  	}
	  	let ca = "";
	  	if(jf003 == 0 || jf003 < 4){
	  	ca = "Cabaguio South Bound lane is Free flow of traffic.";
	  	}else if(jf003 == 4 || jf003 < 8){
	  		ca = "Cabaguio South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf003 == 8 || jf003 < 10){
	  		ca = "Cabaguio South Bound lane is Slow flow of traffic.";
	  	}else if(jf003 == 10){
	  		ca = "Cabaguio South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ca = "Cannot compute"
	  	}
	  	let dac = "";
	  	if(jf004 == 0 || jf004 < 4){
	  	dac = "Dacudao Ave/Buhangin South Bound lane is Free flow of traffic.";
	  	}else if(jf004 == 4 || jf004 < 8){
	  		dac = "Dacudao Ave/Buhangin South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf004 == 8 || jf004 < 10){
	  		dac = "Dacudao Ave/Buhangin South Bound lane is Slow flow of traffic.";
	  	}else if(jf004 == 10){
	  		dac = "Dacudao Ave/Buhangin South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		dac = "Cannot compute"
	  	}
	  	let f = "";
	  	if(jf005 == 0 || jf005 < 4){
	  	f = "F. Torres South Bound lane is Free flow of traffic.";
	  	}else if(jf005 == 4 || jf005 < 8){
	  		f = "F. Torres South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf005 == 8 || jf005 < 10){
	  		f = "F. Torres South Bound lane is Slow flow of traffic.";
	  	}else if(jf005 == 10){
	  		f = "F. Torres South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		f = "Cannot compute"
	  	}
	  	let fe = "";
	  	if(jf006 == 0 || jf006 < 4){
	  	fe = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Free flow of traffic.";
	  	}else if(jf006 == 4 || jf006 < 8){
	  		fe = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf006 == 8 || jf006 < 10){
	  		fe = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Slow flow of traffic.";
	  	}else if(jf006 == 10){
	  		fe = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		fe = "Cannot compute"
	  	}
	  	//##########################################################################################
	  	let fee = "";
	  	if(jf0001 == 0 || jf0001 < 4){
	  	fee = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Free flow of traffic.";
	  	}else if(jf0001 == 4 || jf0001 < 8){
	  		fee = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0001 == 8 || jf0001 < 10){
	  		fee = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Slow flow of traffic.";
	  	}else if(jf0001 == 10){
	  		fee = "E. Quirino Ave/Sta. Ana Ave South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		fee = "Cannot compute"
	  	}
	  	let ff = "";
	  	if(jf0002 == 0 || jf0002 < 4){
	  	ff = "F. Torres South Bound lane is Free flow of traffic.";
	  	}else if(jf0002 == 4 || jf0002 < 8){
	  		ff = "F. Torres South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0002 == 8 || jf0002 < 10){
	  		ff = "F. Torres South Bound lane is Slow flow of traffic.";
	  	}else if(jf0002 == 10){
	  		ff = "F. Torres South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ff = "Cannot compute"
	  	}
	  	let dacccc = "";
	  	if(jf0003 == 0 || jf0003 < 4){
	  	dacccc = "Dacudao Ave/Buhangin South Bound lane is Free flow of traffic.";
	  	}else if(jf0003 == 4 || jf0003 < 8){
	  		dacccc = "Dacudao Ave/Buhangin South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0003 == 8 || jf0003 < 10){
	  		dacccc = "Dacudao Ave/Buhangin South Bound lane is Slow flow of traffic.";
	  	}else if(jf0003 == 10){
	  		dacccc = "Dacudao Ave/Buhangin South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		dacccc = "Cannot compute"
	  	}
	 	let caaa = "";
	  	if(jf0004 == 0 || jf0004 < 4){
	  	caaa = "Cabaguio South Bound lane is Free flow of traffic.";
	  	}else if(jf0004 == 4 || jf0004 < 8){
	  		caaa = "Cabaguio South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0004 == 8 || jf0004 < 10){
	  		caaa = "Cabaguio South Bound lane is Slow flow of traffic.";
	  	}else if(jf0004 == 10){
	  		caaa = "Cabaguio South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		caaa = "Cannot compute"
	  	}
	  	let ann = "";
	  	if(jf0005== 0 || jf0005 < 4){
	  	ann = "Angliongto South Bound lane is Free flow of traffic.";
	  	}else if(jf0005 == 4 || jf0005 < 8){
	  		ann = "Angliongto South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0005 == 8 || jf0005 < 10){
	  		ann = "Angliongto South Bound lane is Slow flow of traffic.";
	  	}else if(jf0005 == 10){
	  		ann = "Angliongto South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ann = "Cannot compute"
	  	}
	 	let rss = "";
	  	if(jf0006 == 0 || jf0006 < 4){
	  	rss = "R. Castillo South Bound lane is Free flow of traffic.";
	  	}else if(jf0006 == 4 || jf0006 < 8){
	  		rss = "R. Castillo South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0006 == 8 || jf0006 < 10){
	  		rss = "R. Castillo South Bound lane is Slow flow of traffic.";
	  	}else if(jf0006 == 10){
	  		rss = "R. Castillo South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		rss = "Cannot compute"
	  	}


	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ soth:soth,southh:southh,r:r, jf001:jf001, angg:angg,jf002:jf002,cab:cab,jf003:jf003, dacc:dacc,jf004:jf004, ft:ft, jf005:jf005,eq:eq, jf006:jf006,analysisSouth:analysisSouth,rs:rs,an:an,ca:ca,dac:dac,
    	 f:f, fe:fe, nor:nor,northh:northh , eeq:eeq,jf0001:jf0001, fft:fft, jf0002:jf0002, daccc:daccc,jf0003:jf0003,cabb:cabb,jf0004:jf0004,rr:rr,jf0005:jf0005, anggg:anggg, jf0006:jf0006, analysisNorth: analysisNorth,
    	 fee:fee, ff:ff, dacccc:dacccc, caaa:caaa, rss:rss , ann:ann}));
	 
	});


});
app.get('/mcarthur',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  	//mcarthur south
	  	const south = body.RWS[0].RW[4].DE;
	  	const jf1 = body.RWS[0].RW[73].FIS[0].FI[1].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[61].FIS[0].FI[1].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[59].FIS[0].FI[2].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[61].FIS[0].FI[0].CF[0].JF;
	  	const jf5 = body.RWS[0].RW[17].FIS[0].FI[3].CF[0].JF;
	  	const jf6 = body.RWS[0].RW[14].FIS[0].FI[0].CF[0].JF;
	  	const jf7 = body.RWS[0].RW[13].FIS[0].FI[0].CF[0].JF;
	  	const jf8 = body.RWS[0].RW[9].FIS[0].FI[0].CF[0].JF;
	  	const jf9 = body.RWS[0].RW[0].FIS[0].FI[0].CF[0].JF;
	  	var sn = 9
	  	var s = jf1 + jf2 + jf3 + jf4 + jf5 + jf6 + jf7 + jf8 + jf9;
	  	var ss = s/sn;
	  	//mcarthur south intersections
	  	const quirino = body.RWS[0].RW[4].FIS[0].FI[0].TMC.DE;
	  	const qui = body.RWS[0].RW[4].FIS[0].FI[0].CF[0].JF;
	  	const generoso = body.RWS[0].RW[4].FIS[0].FI[1].TMC.DE;
	  	const gene = body.RWS[0].RW[4].FIS[0].FI[1].CF[0].JF;
	  	const sandwa = body.RWS[0].RW[4].FIS[0].FI[2].TMC.DE;
	  	const san = body.RWS[0].RW[4].FIS[0].FI[2].CF[0].JF;
	  	const Maa = body.RWS[0].RW[4].FIS[0].FI[3].TMC.DE;
	  	const maa = body.RWS[0].RW[4].FIS[0].FI[3].CF[0].JF;
	  	const tulipdr = body.RWS[0].RW[4].FIS[0].FI[4].TMC.DE;
	  	const tul = body.RWS[0].RW[4].FIS[0].FI[4].CF[0].JF;
	  	const shrine = body.RWS[0].RW[4].FIS[0].FI[5].TMC.DE;
	  	const sg = body.RWS[0].RW[4].FIS[0].FI[5].CF[0].JF;
	  	const quimpo = body.RWS[0].RW[4].FIS[0].FI[6].TMC.DE;
	  	const quimp = body.RWS[0].RW[4].FIS[0].FI[6].CF[0].JF;
	  	const matina = body.RWS[0].RW[4].FIS[0].FI[7].TMC.DE;
	  	const mati = body.RWS[0].RW[4].FIS[0].FI[7].CF[0].JF;
	  	const diversion = body.RWS[0].RW[4].FIS[0].FI[8].TMC.DE;
	  	const div = body.RWS[0].RW[4].FIS[0].FI[8].CF[0].JF
	  	const tolomo = body.RWS[0].RW[4].FIS[0].FI[9].TMC.DE;
	  	const tolo = body.RWS[0].RW[4].FIS[0].FI[9].CF[0].JF;
	  	const davaobukidnon = body.RWS[0].RW[4].FIS[0].FI[10].TMC.DE;
	  	const dav  = body.RWS[0].RW[4].FIS[0].FI[10].CF[0].JF;
	  	const libby = body.RWS[0].RW[4].FIS[0].FI[11].TMC.DE;
	  	const lib = body.RWS[0].RW[4].FIS[0].FI[11].CF[0].JF;
		const angliongto = body.RWS[0].RW[4].FIS[0].FI[12].TMC.DE;
	  	const ag = body.RWS[0].RW[4].FIS[0].FI[12].CF[0].JF;
	  	const cruz = body.RWS[0].RW[4].FIS[0].FI[13].TMC.DE;
	  	const santa = body.RWS[0].RW[4].FIS[0].FI[13].CF[0].JF;	
	  	
	  	//mcarthur north intersections
	  	const quirrino = body.RWS[0].RW[5].FIS[0].FI[13].TMC.DE
	  	const qqui = body.RWS[0].RW[5].FIS[0].FI[13].CF[0].JF;
	  	const ggeneroso = body.RWS[0].RW[5].FIS[0].FI[12].TMC.DE;
	  	const ggene = body.RWS[0].RW[5].FIS[0].FI[12].CF[0].JF;
	  	const ssandawa = body.RWS[0].RW[5].FIS[0].FI[11].TMC.DE;
	  	const ssan = body.RWS[0].RW[5].FIS[0].FI[11].CF[0].JF;
	  	const mmaa = body.RWS[0].RW[5].FIS[0].FI[10].TMC.DE;
	  	const mma = body.RWS[0].RW[5].FIS[0].FI[10].CF[0].JF;
	  	const ttulip = body.RWS[0].RW[5].FIS[0].FI[9].TMC.DE;
	  	const tu = body.RWS[0].RW[5].FIS[0].FI[9].CF[0].JF;
	  	const sshrine = body.RWS[0].RW[5].FIS[0].FI[8].TMC.DE;
	  	const sc = body.RWS[0].RW[5].FIS[0].FI[8].CF[0].JF;
	  	const qquimpo = body.RWS[0].RW[5].FIS[0].FI[7].TMC.DE;
	  	const quim = body.RWS[0].RW[5].FIS[0].FI[7].CF[0].JF;
		const mattina = body.RWS[0].RW[5].FIS[0].FI[6].TMC.DE;
	  	const mat = body.RWS[0].RW[5].FIS[0].FI[6].CF[0].JF;
	  
	  	const ddiversion = body.RWS[0].RW[5].FIS[0].FI[5].TMC.DE;
	  	const di = body.RWS[0].RW[5].FIS[0].FI[5].CF[0].JF;
	  	const ttolomo = body.RWS[0].RW[5].FIS[0].FI[4].TMC.DE;
	  	const tol = body.RWS[0].RW[5].FIS[0].FI[4].CF[0].JF;
	  	const ddavao = body.RWS[0].RW[5].FIS[0].FI[3].TMC.DE;
	  	const da  = body.RWS[0].RW[5].FIS[0].FI[3].CF[0].JF;
		const llibby = body.RWS[0].RW[5].FIS[0].FI[2].TMC.DE;
	  	const li = body.RWS[0].RW[5].FIS[0].FI[2].CF[0].JF;
	  	const aangtoo = body.RWS[0].RW[5].FIS[0].FI[1].TMC.DE;
	  	const agt = body.RWS[0].RW[5].FIS[0].FI[1].CF[0].JF;
	  	const ssanta = body.RWS[0].RW[5].FIS[0].FI[0].TMC.DE;
	  	const sant = body.RWS[0].RW[5].FIS[0].FI[0].CF[0].JF;
	  	
	  	//mcarthur north
	  	const north = body.RWS[0].RW[5].DE;
	  	const jf01 = body.RWS[0].RW[74].FIS[0].FI[0].CF[0].JF;
	  	const jf02 = body.RWS[0].RW[62].FIS[0].FI[0].CF[0].JF;
	  	const jf03 = body.RWS[0].RW[60].FIS[0].FI[0].CF[0].JF;
	  	const jf04 = body.RWS[0].RW[62].FIS[0].FI[1].CF[0].JF;
	  	const jf05 = body.RWS[0].RW[15].FIS[0].FI[0].CF[0].JF;
	  	const jf06 = body.RWS[0].RW[16].FIS[0].FI[1].CF[0].JF;
	  	const jf07 = body.RWS[0].RW[12].FIS[0].FI[2].CF[0].JF;
	  	const jf08 = body.RWS[0].RW[10].FIS[0].FI[3].CF[0].JF;
	  	const jf09 = body.RWS[0].RW[1].FIS[0].FI[4].CF[0].JF;
	  
	  	var n = jf01 + jf02 + jf03 + jf04 + jf05 + jf06 + jf07 + jf08 + jf09;
	  	var nn = n/sn;

	  	let sou = "";
	  	if(ss == 0 || ss < 4){
	  	sou = "For South Bound lane is Free flow of traffic.";
	  	}else if(ss == 4 || ss < 8){
	  		sou = "For South Bound lane is Sluggish flow of traffic.";
	  	}else if(ss == 8 || ss < 10){
	  		sou = "For South Bound lane is Slow flow of traffic.";
	  	}else if(ss == 10){
	  		sou = "For South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		sou = "Cannot compute"
	  	}


	  	let quet = "";
	  	if(qui == 0 || qui < 4){
	  	quet = "E. Quirino Ave South Bound lane is Free flow of traffic.";
	  	}else if(qui == 4 || qui < 8){
	  		quet = "E. Quirino Ave South Bound lane is Sluggish flow of traffic.";
	  	}else if(qui == 8 || qui < 10){
	  		quet = "E. Quirino Ave South Bound lane is Slow flow of traffic.";
	  	}else if(qui == 10){
	  		quet = "E. Quirino Ave South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		quet = "Cannot compute"
	  	}
	  	let gener = "";
	  	if(gene == 0 || gene < 4){
	  	gener = "Generoso I Brg South Bound lane is Free flow of traffic.";
	  	}else if(gene == 4 || gene < 8){
	  		gener = "Generoso I Brg South Bound lane is Sluggish flow of traffic.";
	  	}else if(gene == 8 || gene < 10){
	  		gener = "Generoso I Brg South Bound lane is Slow flow of traffic.";
	  	}else if(gene == 10){
	  		gener = "Generoso I Brg South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		gener = "Cannot compute"
	  	}
	  	let sadd = "";
	  	if(san == 0 || san < 4){
	  	sadd = "Sandawa Rd South Bound lane is Free flow of traffic.";
	  	}else if(san == 4 || san < 8){
	  		sadd = "Sandawa Rd Brg South Bound lane is Sluggish flow of traffic.";
	  	}else if(san == 8 || san < 10){
	  		sadd = "Sandawa Rd Brg South Bound lane is Slow flow of traffic.";
	  	}else if(san == 10){
	  		sadd = "Sandawa Rd Brg South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		sadd = "Cannot compute"
	  	}
	  	let mmm = "";
	  	if(maa == 0 || maa < 4){
	  	mmm = "Ma-A Rd South Bound lane is Free flow of traffic.";
	  	}else if(maa == 4 || maa < 8){
	  		mmm = "Ma-A Rd South Bound lane is Sluggish flow of traffic.";
	  	}else if(maa == 8 || maa < 10){
	  		mmm = "Ma-A Rd South Bound lane is Slow flow of traffic.";
	  	}else if(maa == 10){
	  		mmm = "Ma-A Rd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		mmm = "Cannot compute"
	  	}
	  	let lip = "";
	  	if(tul == 0 || tul < 4){
	  	lip = "Tulip Dr South Bound lane is Free flow of traffic.";
	  	}else if(tul == 4 || tul < 8){
	  		lip = "Tulip Dr South Bound lane is Sluggish flow of traffic.";
	  	}else if(tul == 8 || tul < 10){
	  		lip = "Tulip Dr South Bound lane is Slow flow of traffic.";
	  	}else if(tul == 10){
	  		lip = "Tulip Dr South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		lip = "Cannot compute"
	  	}
	  	let ssss = "";
	  	if(sg == 0 || sg < 4){
	  	ssss = "S Cuyugan/Shrine Hills Rd South Bound lane is Free flow of traffic.";
	  	}else if(sg == 4 || sg < 8){
	  		ssss = "S Cuyugan/Shrine Hills Rd South Bound lane is Sluggish flow of traffic.";
	  	}else if(sg == 8 || sg < 10){
	  		ssss = "S Cuyugan/Shrine Hills Rd South Bound lane is Slow flow of traffic.";
	  	}else if(sg == 10){
	  		ssss = "S Cuyugan/Shrine Hills Rd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ssss = "Cannot compute"
	  	}
	  	let qqqq = "";
	  	if(quimp == 0 || quimp < 4){
	  	qqqq = "Quimpo Blvd South Bound lane is Free flow of traffic.";
	  	}else if(quimp == 4 || quimp < 8){
	  		qqqq = "Quimpo Blvd South Bound lane is Sluggish flow of traffic.";
	  	}else if(quimp == 8 || quimp < 10){
	  		qqqq = "Quimpo Blvd South Bound lane is Slow flow of traffic.";
	  	}else if(quimp == 10){
	  		qqqq = "Quimpo Blvd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		qqqq = "Cannot compute"
	  	}
	  	let matt = "";
	  	if(mati == 0 || mati < 4){
	  	matt = "Matina Pangi/Aplaya South Bound lane is Free flow of traffic.";
	  	}else if(mati == 4 || mati < 8){
	  		matt = "Matina Pangi/Aplaya South Bound lane is Sluggish flow of traffic.";
	  	}else if(mati == 8 || mati < 10){
	  		matt = "Matina Pangi/Aplaya South Bound lane is Slow flow of traffic.";
	  	}else if(mati == 10){
	  		matt = "Matina Pangi/Aplaya South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		matt = "Cannot compute"
	  	}
	  	
	  	let dddiv = "";
	  	if(div == 0 || div < 4){
	  	dddiv = "Diversion Rd South Bound lane is Free flow of traffic.";
	  	}else if(div == 4 || div < 8){
	  		dddiv = "Diversion Rd South Bound lane is Sluggish flow of traffic.";
	  	}else if(div == 8 || div < 10){
	  		dddiv = "Diversion Rd South Bound lane is Slow flow of traffic.";
	  	}else if(div == 10){
	  		dddiv = "Diversion Rd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		dddiv = "Cannot compute"
	  	}
	  	let ttl = "";
	  	if(tolo == 0 || tolo < 4){
	  	ttl = "Tolomo Ii Brg/Tolomo I Brg South Bound lane is Free flow of traffic.";
	  	}else if(tolo == 4 || tolo < 8){
	  		ttl = "Tolomo Ii Brg/Tolomo I Brg Bound lane is Sluggish flow of traffic.";
	  	}else if(tolo == 8 || tolo < 10){
	  		ttl = "Tolomo Ii Brg/Tolomo I Brg South Bound lane is Slow flow of traffic.";
	  	}else if(tolo == 10){
	  		ttl = "Tolomo Ii Brg/Tolomo I Brg South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ttl = "Cannot compute"
	  	}
	  	let bukid = "";
	  	if(dav == 0 || dav < 4){
	  	bukid = "Davao Bukidnon Rd South Bound lane is Free flow of traffic.";
	  	}else if(dav == 4 || dav < 8){
	  		bukid = "Davao Bukidnon Rd South Bound lane is Sluggish flow of traffic.";
	  	}else if(dav == 8 || dav < 10){
	  		bukid = "Davao Bukidnon Rd South Bound lane is Slow flow of traffic.";
	  	}else if(dav == 10){
	  		bukid = "Davao Bukidnon Rd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		bukid = "Cannot compute"
	  	}
	  	let lbb = "";
	  	if(lib == 0 || lib < 4){
	  	lbb = "Libby Rd South Bound lane is Free flow of traffic.";
	  	}else if(lib == 4 || lib < 8){
	  		lbb = "Libby Rd South Bound lane is Sluggish flow of traffic.";
	  	}else if(lib == 8 || lib < 10){
	  		lbb = "Libby Rd South Bound lane is Slow flow of traffic.";
	  	}else if(lib == 10){
	  		lbb = "Libby Rd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		lbb = "Cannot compute"
	  	}
	  	let agtoo = "";
	  	if(ag == 0 || ag < 4){
	  	agtoo = "Agton/Manggahan South Bound lane is Free flow of traffic.";
	  	}else if(ag == 4 || ag < 8){
	  	agtoo = "Agton/Manggahan South Bound lane is Sluggish flow of traffic.";
	  	}else if(ag == 8 || ag < 10){
	  	agtoo = "Agton/Manggahan South Bound lane is Slow flow of traffic.";
	  	}else if(ag == 10){
	  	agtoo = "Agton/Manggahan South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  	agtoo = "Cannot compute"
	  	}
	  	let santfe = "";
	  	if(santa == 0 || santa < 4){
	  	santfe = "Santa Cruz/Davao City Border South Bound lane is Free flow of traffic.";
	  	}else if(santa == 4 || santa < 8){
	  	santfe = "Santa Cruz/Davao City Border South Bound lane is Sluggish flow of traffic.";
	  	}else if(santa == 8 || santa < 10){
	  	santfe = "Santa Cruz/Davao City Border South Bound lane is Slow flow of traffic.";
	  	}else if(santa == 10){
	  	santfe = "Santa Cruz/Davao City Border South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  	santfe = "Cannot compute"
	  	}


	  	//############################################

	  	let nou = "";
	  	if(nn == 0 || nn < 4){
	  	nou = "For North Bound is Free flow of traffic.";
	  	}else if(nn == 4 || nn < 8){
	  		nou = "For North Bound is Sluggish flow of traffic.";
	  	}else if(nn == 8 || nn < 10){
	  		nou = "For North Bound is Slow flow of traffic.";
	  	}else if(nn == 10){
	  		nou = "For North Bound is Traffic stopped or Road closed."
	  	}else{
	  		nou = "Cannot compute"
	  	}
		let qqq = "";
	  	if(qqui == 0 || qqui < 4){
	  	qqq = "E. Quirino Ave North Bound lane is Free flow of traffic.";
	  	}else if(qqui == 4 || qqui < 8){
	  		qqq = "E. Quirino Ave North Bound lane is Sluggish flow of traffic.";
	  	}else if(qqui == 8 || qqui < 10){
	  		qqq = "E. Quirino Ave North Bound lane is Slow flow of traffic.";
	  	}else if(qqui == 10){
	  		nou = "E. Quirino Ave North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		qqq = "Cannot compute"
	  	}
	  	let ggg = "";
	  	if(ggene == 0 || ggene < 4){
	  	ggg = "Generoso I Brg North Bound lane is Free flow of traffic.";
	  	}else if(ggene == 4 || ggene < 8){
	  		ggg = "Generoso I Brg North Bound lane is Sluggish flow of traffic.";
	  	}else if(ggene == 8 || ggene < 10){
	  		ggg = "Generoso I Brg North Bound lane is Slow flow of traffic.";
	  	}else if(ggene == 10){
	  		ggg = "Generoso I Brg North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ggg = "Cannot compute"
	  	}
	  	let sss = "";
	  	if(ssan == 0 || ssan < 4){
	  	sss = "Sandawa Rd North Bound lane is Free flow of traffic.";
	  	}else if(ssan == 4 || ssan < 8){
	  		sss = "Sandawa Rd North Bound lane is Sluggish flow of traffic.";
	  	}else if(ssan == 8 || ssan < 10){
	  		sss = "Sandawa Rd North Bound lane is Slow flow of traffic.";
	  	}else if(ssan == 10){
	  		sss = "Sandawa Rd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		sss = "Cannot compute"
	  	}
	  	let mmmm = "";
	  	if(mma == 0 || mma < 4){
	  	mmmm = "Maa Rd North Bound lane is Free flow of traffic.";
	  	}else if(mma == 4 || mma < 8){
	  		mmmm = "Maa Rd North Bound lane is Sluggish flow of traffic.";
	  	}else if(mma == 8 || mma < 10){
	  		mmmm = "Maa Rd North Bound lane is Slow flow of traffic.";
	  	}else if(mma == 10){
	  		mmmm = "Maa Rd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		mmmm = "Cannot compute"
	  	}
	  	let ttt = "";
	  	if(tu == 0 || tu < 4){
	  	ttt = "Tulip Dr North Bound lane is Free flow of traffic.";
	  	}else if(tu == 4 || tu < 8){
	  		ttt = "Tulip Dr North Bound lane is Sluggish flow of traffic.";
	  	}else if(tu == 8 || tu < 10){
	  		ttt = "Tulip Dr North Bound lane is Slow flow of traffic.";
	  	}else if(tu == 10){
	  		ttt = "Tulip Dr North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ttt = "Cannot compute"
	  	}
	  	let sssss = "";
	  	if(sc == 0 || sc < 4){
	  	sssss = "S Cuyugan/Shrine Hills Rd North Bound lane is Free flow of traffic.";
	  	}else if(sc == 4 || sc < 8){
	  		sssss = "S Cuyugan/Shrine Hills Rd North Bound lane is Sluggish flow of traffic.";
	  	}else if(sc == 8 || sc < 10){
	  		sssss = "S Cuyugan/Shrine Hills Rd North Bound lane is Slow flow of traffic.";
	  	}else if(sc == 10){
	  		sssss = "S Cuyugan/Shrine Hills Rd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		sssss = "Cannot compute"
	  	}
	  	let qq = "";
	  	if(quim == 0 || quim < 4){
	  	qq = "Quimpo Blvd North Bound lane is Free flow of traffic.";
	  	}else if(quim == 4 || quim < 8){
	  		qq = "Quimpo Blvd North Bound lane is Sluggish flow of traffic.";
	  	}else if(quim == 8 || quim < 10){
	  		qq = "Quimpo Blvd North Bound lane is Slow flow of traffic.";
	  	}else if(quim == 10){
	  		qq = "Quimpo Blvd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		qq = "Cannot compute"
	  	}
	  	let mm = "";
	  	if(mat == 0 || mat < 4){
	  	mm = "Matina Pangi/Aplaya North Bound lane is Free flow of traffic.";
	  	}else if(mat == 4 || mat < 8){
	  		mm = "Matina Pangi/Aplaya North Bound lane is Sluggish flow of traffic.";
	  	}else if(mat == 8 || mat < 10){
	  		mm = "Matina Pangi/Aplaya North Bound lane is Slow flow of traffic.";
	  	}else if(mat == 10){
	  		mm = "Matina Pangi/Aplaya North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		mm = "Cannot compute"
	  	}
	  	let dd = "";
	  	if(di == 0 || di < 4){
	  	dd = "Diversion Rd North Bound lane is Free flow of traffic.";
	  	}else if(di == 4 || di < 8){
	  		dd = "Diversion Rd North Bound lane is Sluggish flow of traffic.";
	  	}else if(di == 8 || di < 10){
	  		dd = "Diversion Rd North Bound lane is Slow flow of traffic.";
	  	}else if(di == 10){
	  		dd = "Diversion Rd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		dd = "Cannot compute"
	  	}
	  	let tt = "";
	  	if(di == 0 || di < 4){
	  	tt = "Tolomo Ii Brg/Tolomo I Brg North Bound lane is Free flow of traffic.";
	  	}else if(di == 4 || di < 8){
	  		tt = "Tolomo Ii Brg/Tolomo I Brg North Bound lane is Sluggish flow of traffic.";
	  	}else if(di == 8 || di < 10){
	  		tt = "Tolomo Ii Brg/Tolomo I Brg North Bound lane is Slow flow of traffic.";
	  	}else if(di == 10){
	  		tt = "Tolomo Ii Brg/Tolomo I Brg North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		tt = "Cannot compute"
	  	}
	  	let ddd = "";
	  	if(di == 0 || di < 4){
	  	ddd = "Davao Bukidnon Rd North Bound lane is Free flow of traffic.";
	  	}else if(di == 4 || di < 8){
	  		ddd = "Davao Bukidnon Rd North Bound lane is Sluggish flow of traffic.";
	  	}else if(di == 8 || di < 10){
	  		ddd = "Davao Bukidnon Rd North Bound lane is Slow flow of traffic.";
	  	}else if(di == 10){
	  		ddd = "Davao Bukidnon Rd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ddd = "Cannot compute"
	  	}
	  	let lll = "";
	  	if(li == 0 || li < 4){
	  	lll = "Libby Rd North Bound lane is Free flow of traffic.";
	  	}else if(li == 4 || li < 8){
	  		lll = "Libby Rd North Bound lane is Sluggish flow of traffic.";
	  	}else if(li == 8 || li < 10){
	  		lll = "Libby Rd North Bound lane is Slow flow of traffic.";
	  	}else if(li == 10){
	  		lll = "Libby Rd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		lll = "Cannot compute"
	  	}
	  	let aa = "";
	  	if(agt == 0 || agt < 4){
	  	aa = "Agton/Manggahan North Bound lane is Free flow of traffic.";
	  	}else if(agt == 4 || agt < 8){
	  		aa = "Agton/Manggahan North Bound lane is Sluggish flow of traffic.";
	  	}else if(agt == 8 || agt < 10){
	  		aa = "Agton/Manggahan North Bound lane is Slow flow of traffic.";
	  	}else if(agt == 10){
	  		aa = "Agton/Manggahan North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		aa = "Cannot compute"
	  	}
	  	let ssS = "";
	  	if(sant == 0 || sant < 4){
	  	ssS = "Santa Cruz/Davao City Border North Bound lane is Free flow of traffic.";
	  	}else if(sant == 4 || sant < 8){
	  		ssS = "Santa Cruz/Davao City Border North Bound lane is Sluggish flow of traffic.";
	  	}else if(sant == 8 || sant < 10){
	  		ssS = "ASanta Cruz/Davao City Border North Bound lane is Slow flow of traffic.";
	  	}else if(sant == 10){
	  		ssS = "Santa Cruz/Davao City Border North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ssS = "Cannot compute"
	  	}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({south:south,ss:ss, quirino:quirino,qui:qui,generoso:generoso,gene:gene,sandwa:sandwa,san:san,Maa:Maa,maa:maa,  
    		tulipdr:tulipdr,tul:tul,shrine:shrine,sg:sg,quimpo:quimpo,quimp:quimp,matina:matina,mati:mati,diversion:diversion,div:div,tolomo:tolomo,tolo:tolo,davaobukidnon:davaobukidnon,dav:dav,
    		  libby:libby,lib:lib,angliongto:angliongto,ag:ag,cruz:cruz,santa:santa,    sou:sou,quet:quet,gener:gener,sadd:sadd,mmm:mmm,lip:lip,ssss:ssss,qqqq:qqqq,  
    		matt:matt,dddiv:dddiv,ttl:ttl,bukid:bukid,lbb:lbb,agtoo:agtoo,santfe:santfe,   north:north,nn:nn,quirrino:quirrino,qqui:qqui,ggeneroso:ggeneroso,ggene:ggene,
    		ssandawa:ssandawa,ssan:ssan,mmaa:mmaa,mma:mma,ttulip:ttulip,tu:tu,sshrine:sshrine,sc:sc,qquimpo:qquimpo,quim:quim,mattina:mattina,mat:mat,ddiversion:ddiversion,
    		di:di,ttolomo:ttolomo,tol:tol,ddavao:ddavao,da:da,llibby:llibby,li:li,aangtoo:aangtoo,agt:agt,ssanta:ssanta,sant:sant,nou:nou,qqq:qqq,ggg:ggg,sss:sss,mmmm:mmmm,
    		ttt:ttt,sssss:sssss,qq:qq,mm:mm,mmmm:mmmm,dd:dd,tt:tt,ddd:ddd,lll:lll,aa:aa,ssS:ssS}));
	 
	});


});
app.get('/ecowestdr',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  
	  //ecowestdr south
		  const south = body.RWS[0].RW[6].DE;
		  const jf1 = body.RWS[0].RW[17].FIS[0].FI[2].CF[0].JF;
		  const jf2 = body.RWS[0].RW[8].FIS[0].FI[2].CF[0].JF;
		  const jf3 = body.RWS[0].RW[9].FIS[0].FI[3].CF[0].JF;
		  var s = 3
		  var ss = jf1 + jf2 + jf3;
		  var ssouth = ss/s; 
	  
		//south Quimpo Blvd, Ecoland Dr/Ecoland
		const qqquimpo = body.RWS[0].RW[6].FIS[0].FI[0].TMC.DE;
	  	const jf11 = body.RWS[0].RW[6].FIS[0].FI[0].CF[0].JF;
	  	const eecc = body.RWS[0].RW[6].FIS[0].FI[1].TMC.DE;
	  	const jf22 = body.RWS[0].RW[6].FIS[0].FI[1].CF[0].JF;
	  	
	  	//north Ecoland Dr/Ecoland, Quimpo Blvd
	  	const eeccc = body.RWS[0].RW[7].FIS[0].FI[0].TMC.DE;
	  	const jf0001 = body.RWS[0].RW[7].FIS[0].FI[0].CF[0].JF;
	  	const qqqquimpo = body.RWS[0].RW[7].FIS[0].FI[1].TMC.DE;
		const jf0002 = body.RWS[0].RW[7].FIS[0].FI[1].CF[0].JF;
	  	
	  //ecowestdr north
	  const north = body.RWS[0].RW[7].DE;
	  const jf01 = body.RWS[0].RW[17].FIS[0].FI[2].CF[0].JF;
	  const jf02 = body.RWS[0].RW[11].FIS[0].FI[0].CF[0].JF;
	  const jf03 = body.RWS[0].RW[10].FIS[0].FI[0].CF[0].JF;

	  var nn = jf01 + jf02 + jf03;
	  var nnourth = nn/s;

	  	let South = "";
	  	if(ss == 0 || ss < 4){
	  	South = "For South Bound lane is Free flow of traffic.";
	  	}else if(ss == 4 || ss < 8){
	  		South = "For South Bound lane is Sluggish flow of traffic.";
	  	}else if(ss == 8 || ss < 10){
	  		South = "For South Bound lane is Slow flow of traffic.";
	  	}else if(ss == 10){
	  		South = "For South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		South = "Cannot compute"
	  	}
	  	let North = "";
	  	if(nnourth == 0 || nnourth < 4){
	  	North = "For North Bound lane is Free flow of traffic.";
	  	}else if(nnourth == 4 || nnourth < 8){
	  		North = "For North Bound lane is Sluggish flow of traffic.";
	  	}else if(nnourth == 8 || nnourth < 10){
	  		North = "For North Bound lane is Slow flow of traffic.";
	  	}else if(nnourth == 10){
	  		North = "For North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		North = "Cannot compute"
	  	}
	  	let eqq = "";
	  	if(jf11 == 0 || jf1 < 4){
	  	eqq = "Quimpo Blvd South Bound lane is Free flow of traffic.";
	  	}else if(jf11 == 4 || jf11 < 8){
	  		eqq = "Quimpo Blvd South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf11 == 8 || jf11 < 10){
	  		eqq = "Quimpo Blvd South Bound lane is Slow flow of traffic.";
	  	}else if(jf11 == 10){
	  		eqq = "Quimpo Blvd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		eqq = "Cannot compute"
	  	}
	  	let eec = "";
	  	if(jf22 == 0 || jf22 < 4){
	  	eec = "Ecoland Dr/Ecoland South Bound lane is Free flow of traffic.";
	  	}else if(jf22 == 4 || jf22 < 8){
	  		eec = "Ecoland Dr/Ecoland South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf22 == 8 || jf22 < 10){
	  		eec = "Ecoland Dr/Ecoland South Bound lane is Slow flow of traffic.";
	  	}else if(jf22 == 10){
	  		eec = "Ecoland Dr/Ecoland South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		eec = "Cannot compute"
	  	}
	  	let qeumpo = "";
	  	if(jf0001 == 0 || jf0001 < 4){
	  	qeumpo = "Quimpo Blvd North Bound lane is Free flow of traffic.";
	  	}else if(jf0001 == 4 || jf0001 < 8){
	  		qeumpo = "Quimpo Blvd North Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0001 == 8 || jf0001 < 10){
	  		qeumpo = "Quimpo Blvd North Bound lane is Slow flow of traffic.";
	  	}else if(jf0001 == 10){
	  		qeumpo = "Quimpo Blvd North Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		eec = "Cannot compute"
	  	}
	  	let eeccoo = "";
	  	if(jf0002 == 0 || jf0002 < 4){
	  	eeccoo = "Ecoland Dr/Ecoland South Bound lane is Free flow of traffic.";
	  	}else if(jf0002 == 4 || jf0002 < 8){
	  		eeccoo = "Ecoland Dr/Ecoland South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf0002 == 8 || jf0002 < 10){
	  		eeccoo = "Ecoland Dr/Ecoland South Bound lane is Slow flow of traffic.";
	  	}else if(jf0002 == 10){
	  		eeccoo = "Ecoland Dr/Ecoland South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		eeccoo = "Cannot compute"
	  	}



	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ south:south,ss:ss,eecc:eecc,jf22:jf22,qqquimpo:qqquimpo,jf11:jf11,South:South,eec:eec,eqq:eqq,
    		north:north,nn:nn,qqqquimpo:qqqquimpo,jf0002:jf0002,eeccc:eeccc,jf0001:jf0001,North:North,qeumpo:qeumpo,eeccoo:eeccoo}));
	 
	});


});
app.get('/ecoland',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  
	  	//ecoland south
	  	const south = body.RWS[0].RW[8].DE;
	  	const jf1 = body.RWS[0].RW[18].FIS[0].FI[4].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[17].FIS[0].FI[0].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[13].FIS[0].FI[2].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[6].FIS[0].FI[1].CF[0].JF;
	  	//ecoland south intersections
	  	const quim = body.RWS[0].RW[8].FIS[0].FI[0].TMC.DE;
	  	const jf001 = body.RWS[0].RW[8].FIS[0].FI[0].CF[0].JF;
	  	const tulli = body.RWS[0].RW[8].FIS[0].FI[1].TMC.DE;
	  	const jf002 = body.RWS[0].RW[8].FIS[0].FI[1].CF[0].JF;
	  	const Ecc = body.RWS[0].RW[8].FIS[0].FI[2].TMC.DE;
	  	const jf003 = body.RWS[0].RW[8].FIS[0].FI[2].CF[0].JF;

	  	var es= 4
	  	var s = jf1 + jf2 + jf3 + jf4;
	  	var ss = s/es;

	  	//ecoland north
	  	const north = body.RWS[0].RW[11].DE;
	  	const jf01 = body.RWS[0].RW[19].FIS[0].FI[0].CF[0].JF;
	  	const jf02 = body.RWS[0].RW[15].FIS[0].FI[3].CF[0].JF;
	  	const jf03 = body.RWS[0].RW[12].FIS[0].FI[0].CF[0].JF;
	  	const jf04 = body.RWS[0].RW[7].FIS[0].FI[0].CF[0].JF;
	  	//ecoland north intersections
	  	const eccccc = body.RWS[0].RW[11].FIS[0].FI[0].TMC.DE;
	  	const jf0001= body.RWS[0].RW[11].FIS[0].FI[0].CF[0].JF;	  	
	  	const tuuuuu = body.RWS[0].RW[11].FIS[0].FI[1].TMC.DE;
	  	const jf0002 = body.RWS[0].RW[11].FIS[0].FI[1].CF[0].JF;
	  	const quuuuu = body.RWS[0].RW[11].FIS[0].FI[2].TMC.DE;
	  	const jf0003= body.RWS[0].RW[11].FIS[0].FI[2].CF[0].JF;

	  	var en = jf01 + jf02 + jf03 + jf04;
	  	var nn = en/es;
	  	
	  	let ssouth = "";
	  	if(ss == 0 || ss < 4){
	  	ssouth = "For South Bound lane is Free flow of traffic.";
	  	}else if(ss == 4 || ss < 8){
	  		ssouth = "For South Bound lane is Sluggish flow of traffic.";
	  	}else if(ss == 8 || ss < 10){
	  		ssouth = "For South Bound lane is Slow flow of traffic.";
	  	}else if(ss == 10){
	  		ssouth = "For South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ssouth = "Cannot compute"
	  	}
	  	let QQ = "";
	  	if(jf001 == 0 || jf001 < 4){
	  	QQ = "Quimpo Blvd/Quezon Blvd South Bound lane is Free flow of traffic.";
	  	}else if(jf001 == 4 || jf001 < 8){
	  		QQ = "Quimpo Blvd/Quezon Blvd South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf001 == 8 || jf001 < 10){
	  		QQ = "Quimpo Blvd/Quezon Blvd South Bound lane is Slow flow of traffic.";
	  	}else if(jf001 == 10){
	  		QQ = "Quimpo Blvd/Quezon Blvd South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		QQ = "Cannot compute"
	  	}
	  	let tulili = "";
	  	if(jf002 == 0 || jf002 < 4){
	  	tulili = "Tulip Dr South Bound lane is Free flow of traffic.";
	  	}else if(jf002 == 4 || jf002 < 8){
	  		tulili = "Tulip Dr South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf002 == 8 || jf002 < 10){
	  		tulili = "Tulip Dr South Bound lane is Slow flow of traffic.";
	  	}else if(jf002 == 10){
	  		tulili = "Tulip Dr South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		tulili = "Cannot compute"
	  	}
	  	let dr = "";
	  	if(jf003 == 0 || jf003 < 4){
	  	dr = "Eco West Dr South Bound lane is Free flow of traffic.";
	  	}else if(jf003 == 4 || jf003 < 8){
	  		dr = "Eco West Dr South Bound lane is Sluggish flow of traffic.";
	  	}else if(jf003 == 8 || jf003 < 10){
	  		dr = "Eco West Dr South Bound lane is Slow flow of traffic.";
	  	}else if(jf003 == 10){
	  		dr = "Eco West Dr South Bound lane is Traffic stopped or Road closed."
	  	}else{
	  		dr = "Cannot compute"
	  	}
	  	//###############################################################################################################
	  	let nnorth = "";
	  	if(nn == 0 || nn < 4){
	  	nnorth = "For  North lane is Free flow of traffic.";
	  	}else if(nn == 4 || nn < 8){
	  		nnorth = "For  North lane is Sluggish flow of traffic.";
	  	}else if(nn == 8 || nn < 10){
	  		nnorth = "For  North lane is Slow flow of traffic.";
	  	}else if(nn == 10){
	  		nnorth = "For North lane is Traffic stopped or Road closed."
	  	}else{
	  		nnorth = "Cannot compute"
	  	}
	  	let ecoeco = "";
	  	if(jf0001 == 0 || jf0001 < 4){
	  	ecoeco = "Eco West Dr  North bound lane is Free flow of traffic.";
	  	}else if(jf0001 == 4 || jf0001 < 8){
	  		ecoeco = "Eco West Dr  North bound lane is Sluggish flow of traffic.";
	  	}else if(jf0001 == 8 || jf0001 < 10){
	  		ecoeco = "Eco West Dr North bound lane is Slow flow of traffic.";
	  	}else if(jf0001 == 10){
	  		ecoeco = "Eco West Dr  North bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ecoeco = "Cannot compute"
	  	}
	  	let tueli = "";
	  	if(jf0002 == 0 || jf0002 < 4){
	  	tueli = "Tulip Dr  North bound lane is Free flow of traffic.";
	  	}else if(jf0002 == 4 || jf0002 < 8){
	  		tueli = "Tulip Dr North bound lane is Sluggish flow of traffic.";
	  	}else if(jf0002 == 8 || jf0002 < 10){
	  		tueli = "Tulip Dr North bound lane is Slow flow of traffic.";
	  	}else if(jf0002 == 10){
	  		tueli = "Tulip Dr South bound North lane is Traffic stopped or Road closed."
	  	}else{
	  		tueli = "Cannot compute"
	  	}
	  	let queem = "";
	  	if(jf0003 == 0 || jf0003 < 4){
	  	queem = "Quimpo Blvd/Quezon Blvd  North bound lane is Free flow of traffic.";
	  	}else if(jf0003 == 4 || jf0003 < 8){
	  		queem = "Quimpo Blvd/Quezon Blvd North bound lane is Sluggish flow of traffic.";
	  	}else if(jf0003 == 8 || jf0003 < 10){
	  		queem = "Quimpo Blvd/Quezon Blvd North bound lane is Slow flow of traffic.";
	  	}else if(jf0003 == 10){
	  		queem = "Quimpo Blvd/Quezon Blvd North bound lane is Traffic stopped or Road closed."
	  	}else{
	  		queem = "Cannot compute"
	  	}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({south:south,ss:ss,quim:quim,jf001:jf001,tulli:tulli,jf002:jf002,Ecc:Ecc,jf003:jf003,ssouth:ssouth,QQ:QQ,tulili:tulili,dr:dr,north:north,nn:nn,eccccc:eccccc, jf0001:jf0001,
    	tuuuuu:tuuuuu,jf0002:jf0002,quuuuu:quuuuu, jf0003:jf0003,     nnorth:nnorth,ecoeco:ecoeco   ,tueli:tueli,queem:queem }));
	
	});


});
app.get('/matina',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//matina pangi/aplaya south
	  	const south = body.RWS[0].RW[9].DE;
	  	const jf1 = body.RWS[0].RW[52].FIS[0].FI[5].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[4].FIS[0].FI[7].CF[0].JF;
	  	var m = 2
	  	var mm = jf1 + jf2;
	  	var mmm = mm/m;

	  	let nert = "";
	  	if(mmm == 0 || mmm < 4){
	  	nert = "For South lane is Free flow of traffic.";
	  	}else if(mmm == 4 || mmm < 8){
	  		nert = "For South lane is Sluggish flow of traffic.";
	  	}else if(mmm == 8 || mmm < 10){
	  		nert = "For South bound lane is Slow flow of traffic.";
	  	}else if(mmm == 10){
	  		nert = "For South bound lane is Traffic stopped or Road closed."
	  	}else{
	  		nert = "Cannot compute"
	  	}
	  	//matina pangi/aplaya south intersections
	  	const mac = body.RWS[0].RW[9].FIS[0].FI[0].TMC.DE;
	  	const jf001 = body.RWS[0].RW[9].FIS[0].FI[0].CF[0].JF;
	  	const jas = body.RWS[0].RW[9].FIS[0].FI[1].TMC.DE;
	  	const jf002 = body.RWS[0].RW[9].FIS[0].FI[1].CF[0].JF;
	  	const Punta = body.RWS[0].RW[9].FIS[0].FI[2].TMC.DE;
	  	const jf003 = body.RWS[0].RW[9].FIS[0].FI[2].CF[0].JF;
	  	const Ecoeco = body.RWS[0].RW[9].FIS[0].FI[3].TMC.DE;
	  	const jf004 = body.RWS[0].RW[9].FIS[0].FI[3].CF[0].JF;

	  	let mmc = "";
	  	if(jf001 == 0 || jf001 < 4){
	  	mmc = "Mac Arthur Hwy South bound lane is Free flow of traffic.";
	  	}else if(jf001 == 4 || jf001 < 8){
	  		mmc = "Mac Arthur Hwy South bound lane is Sluggish flow of traffic.";
	  	}else if(jf001 == 8 || jf001 < 10){
	  		mmc = "Mac Arthur Hwy South bound lane is Slow flow of traffic.";
	  	}else if(jf001 == 10){
	  		mmc = "Mac Arthur Hwy South bound lane is Traffic stopped or Road closed."
	  	}else{
	  		mmc = "Cannot compute"
	  	}
	  	let jjas = "";
	  	if(jf002 == 0 || jf002 < 4){
	  	jjas = "Jasmine St South bound lane is Free flow of traffic.";
	  	}else if(jf002 == 4 || jf002 < 8){
	  		jjas = "Jasmine St South bound lane is Sluggish flow of traffic.";
	  	}else if(jf002 == 8 || jf002 < 10){
	  		jjas = "Jasmine St South bound lane is Slow flow of traffic.";
	  	}else if(jf002 == 10){
	  		jjas = "Jasmine St South bound lane is Traffic stopped or Road closed."
	  	}else{
	  		jjas = "Cannot compute"
	  	}
	  	let ppun = "";
	  	if(jf003 == 0 || jf003 < 4){
	  	ppun = "Punta Dumalag Rd South bound lane is Free flow of traffic.";
	  	}else if(jf003 == 4 || jf003 < 8){
	  		ppun = "Punta Dumalag Rd South bound lane is Sluggish flow of traffic.";
	  	}else if(jf003 == 8 || jf003 < 10){
	  		ppun = "Punta Dumalag Rd South bound lane is Slow flow of traffic.";
	  	}else if(jf003 == 10){
	  		ppun = "Punta Dumalag Rd South bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ppun = "Cannot compute"
	  	}
	  	let ecece = "";
	  	if(jf004 == 0 || jf004 < 4){
	  	ecece = "Eco West Dr South bound lane is Free flow of traffic.";
	  	}else if(jf004 == 4 || jf004 < 8){
	  		ecece = "Eco West Dr South bound lane is Sluggish flow of traffic.";
	  	}else if(jf004 == 8 || jf004 < 10){
	  		ecece = "Eco West Dr South bound lane is Slow flow of traffic.";
	  	}else if(jf004 == 10){
	  		ecece = "Eco West Dr South bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ecece = "Cannot compute"
	  	}

	  	//#######################################################
	  	//matina pangi/aplaya north intesections
	  	const echo = body.RWS[0].RW[10].FIS[0].FI[0].TMC.DE;
	  	const jf0001 = body.RWS[0].RW[10].FIS[0].FI[0].CF[0].JF;  	
	  	const ppp = body.RWS[0].RW[10].FIS[0].FI[1].TMC.DE;
	  	const jf0002 = body.RWS[0].RW[10].FIS[0].FI[1].CF[0].JF;
	  	const jjj = body.RWS[0].RW[10].FIS[0].FI[2].TMC.DE;
	  	const jf0003 = body.RWS[0].RW[10].FIS[0].FI[2].CF[0].JF;
	  	const mmma = body.RWS[0].RW[10].FIS[0].FI[3].TMC.DE;
	  	const jf0004 = body.RWS[0].RW[10].FIS[0].FI[3].CF[0].JF;

	  	//matina pangi/aplaya north
	  	const north = body.RWS[0].RW[9].DE;
	  	const jf01 = body.RWS[0].RW[53].FIS[0].FI[1].CF[0].JF;
	  	const jf02 = body.RWS[0].RW[5].FIS[0].FI[6].CF[0].JF;
	  	var ma = jf01 + jf02;
	  	var maaa = ma/m;
	  	
	  	let seot = "";
	  	if(maaa == 0 || maaa < 4){
	  	seot = "For North bound lane is Free flow of traffic.";
	  	}else if(maaa == 4 || maaa < 8){
	  		seot = "For North bound lane is Sluggish flow of traffic.";
	  	}else if(maaa == 8 || maaa < 10){
	  		seot = "For North bound lane is Slow flow of traffic.";
	  	}else if(maaa == 10){
	  		seot = "For North bound lane is Traffic stopped or Road closed."
	  	}else{
	  		seot = "Cannot compute"
	  	}

	  	let wwe = "";
	  	if(jf0001 == 0 || jf0001 < 4){
	  	wwe = "Eco West Dr North bound lane is Free flow of traffic.";
	  	}else if(jf0001 == 4 || jf0001 < 8){
	  	wwe = "Eco West Dr North bound lane is Sluggish flow of traffic.";
	  	}else if(jf0001 == 8 || jf0001 < 10){
	  	wwe = "Eco West Dr North bound lane is Slow flow of traffic.";
	  	}else if(jf0001 == 10){
	  	wwe = "Eco West Dr North bound lane is Traffic stopped or Road closed."
	  	}else{
	  		wwe = "Cannot compute"
	  	}
	  	let ppu = "";
	  	if(jf0002 == 0 || jf0002 < 4){
	  	ppu = "Punta Dumalag Rd North bound lane is Free flow of traffic.";
	  	}else if(jf0002 == 4 || jf0002 < 8){
	  	ppu = "Punta Dumalag Rd North bound lane is Sluggish flow of traffic.";
	  	}else if(jf0002 == 8 || jf0002 < 10){
	  	ppu = "Punta Dumalag Rd North bound lane is Slow flow of traffic.";
	  	}else if(jf0002 == 10){
	  	ppu = "Punta Dumalag Rd North bound lane is Traffic stopped or Road closed."
	  	}else{
	  		ppu = "Cannot compute"
	  	}
	  	let jja = "";
	  	if(jf0003 == 0 || jf0003 < 4){
	  	jja = "Jasmine St North bound lane is Free flow of traffic.";
	  	}else if(jf0003 == 4 || jf0003 < 8){
	  	jja = "Jasmine St North bound lane is Sluggish flow of traffic.";
	  	}else if(jf0003 == 8 || jf0003 < 10){
	  	jja = "Jasmine St North bound lane is Slow flow of traffic.";
	  	}else if(jf0003 == 10){
	  	jja = "Jasmine St North bound lane is Traffic stopped or Road closed."
	  	}else{
	  		jja = "Cannot compute"
	  	}
	  	let mmmac = "";
	  	if(jf0004 == 0 || jf0004 < 4){
	  	mmmac = "Mac Arthur Hwy North bound lane is Free flow of traffic.";
	  	}else if(jf0004 == 4 || jf0004 < 8){
	  	mmmac = "Mac Arthur Hwy North bound lane is Sluggish flow of traffic.";
	  	}else if(jf0004 == 8 || jf0004 < 10){
	  	mmmac = "Mac Arthur Hwy North bound lane is Slow flow of traffic.";
	  	}else if(jf0004 == 10){
	  	mmmac = "Mac Arthur Hwy North bound lane is Traffic stopped or Road closed."
	  	}else{
	  		mmmac = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({south:south,mmm:mmm,mac:mac,jf001:jf001,jas:jas,jf002:jf002,Punta:Punta,jf003:jf003,Ecoeco:Ecoeco,jf004:jf004,nert:nert,mmc:mmc,jjas:jjas,ppun:ppun,ecece:ecece,north:north,maaa:maaa,
    	echo:echo,jf0001:jf0001,ppp:ppp,jf0002:jf0002,jjj:jjj,jf0003:jf0003,mmma:mmma,jf0004:jf0004,     seot:seot,wwe:wwe,ppu:ppu,jja:jja,mmmac:mmmac}));
	
	});


});
app.get('/tulipdr',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  		
	  		//tulipdr south
	  		const sooth = body.RWS[0].RW[13].DE;
	  		const jf1 = body.RWS[0].RW[17].FIS[0].FI[1].CF[0].JF;
	  		const jf2 = body.RWS[0].RW[8].FIS[0].FI[1].CF[0].JF;
	  		const jf3 = body.RWS[0].RW[4].FIS[0].FI[4].CF[0].JF;
	  		var so = 3
	  		var ss = jf1 + jf2 + jf3;
	  		var sos = ss/so;
	  		//tulipdr south intersections
	  		const macc = body.RWS[0].RW[13].FIS[0].FI[0].TMC.DE;
		  	const jf01 = body.RWS[0].RW[13].FIS[0].FI[0].CF[0].JF;  	
		  	const qquem = body.RWS[0].RW[13].FIS[0].FI[1].TMC.DE;
		  	const jf02 = body.RWS[0].RW[13].FIS[0].FI[1].CF[0].JF;
		  	const ecolla = body.RWS[0].RW[13].FIS[0].FI[2].TMC.DE;
		  	const jf03 = body.RWS[0].RW[13].FIS[0].FI[2].CF[0].JF;
	  		
	  		let sotht = "";
		  	if(sos == 0 || sos < 4){
		  	sotht = "For South bound lane is Free flow of traffic.";
		  	}else if(sos == 4 || sos < 8){
		  	sotht = "For South bound lane is Sluggish flow of traffic.";
		  	}else if(sos == 8 || sos < 10){
		  	sotht = "For South bound lane is Slow flow of traffic.";
		  	}else if(sos == 10){
		  	sotht = "For South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		sotht = "Cannot compute"
		  	}
		  	let mec = "";
		  	if(jf01 == 0 || jf01 < 4){
		  	mec = "Mac Arthur Hwy South bound lane is Free flow of traffic.";
		  	}else if(jf01 == 4 || jf01 < 8){
		  	mec = "Mac Arthur Hwy South bound lane is Sluggish flow of traffic.";
		  	}else if(jf01 == 8 || jf01 < 10){
		  	mec = "Mac Arthur Hwy South bound lane is Slow flow of traffic.";
		  	}else if(jf01 == 10){
		  	mec = "Mac Arthur Hwy South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		mec = "Cannot compute"
		  	}
		  	let qem = "";
		  	if(jf02 == 0 || jf02 < 4){
		  	qem = "Quimpo Blvd South bound lane is Free flow of traffic.";
		  	}else if(jf02 == 4 || jf02 < 8){
		  	qem = "Quimpo Blvd South bound lane is Sluggish flow of traffic.";
		  	}else if(jf02 == 8 || jf02 < 10){
		  	qem = "Quimpo Blvd South bound lane is Slow flow of traffic.";
		  	}else if(jf02 == 10){
		  	qem = "Quimpo Blvd South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		qem = "Cannot compute"
		  	}
		  	let ecu = "";
		  	if(jf03 == 0 || jf03 < 4){
		  	ecu = "Ecoland South bound lane is Free flow of traffic.";
		  	}else if(jf03 == 4 || jf03 < 8){
		  	ecu = "Ecoland South bound lane is Sluggish flow of traffic.";
		  	}else if(jf03 == 8 || jf03 < 10){
		  	ecu = "Ecoland South bound lane is Slow flow of traffic.";
		  	}else if(jf03 == 10){
		  	ecu = "Ecoland South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ecu = "Cannot compute"
		  	}
           
            //tulipdr north intersections
            const mcmc = body.RWS[0].RW[12].FIS[0].FI[0].TMC.DE;
		  	const jf0001 = body.RWS[0].RW[12].FIS[0].FI[0].CF[0].JF;	
		  	const quuim = body.RWS[0].RW[12].FIS[0].FI[1].TMC.DE;
		  	const jf0002 = body.RWS[0].RW[12].FIS[0].FI[1].CF[0].JF;
		  	const ecco = body.RWS[0].RW[12].FIS[0].FI[2].TMC.DE;
		  	const jf0003 = body.RWS[0].RW[12].FIS[0].FI[2].CF[0].JF;
	  		//tulip north
	  		const noort = body.RWS[0].RW[12].DE;
	  		const jf001 = body.RWS[0].RW[15].FIS[0].FI[2].CF[0].JF;
	  		const jf002 = body.RWS[0].RW[11].FIS[0].FI[1].CF[0].JF;
	  		const jf003 = body.RWS[0].RW[5].FIS[0].FI[9].CF[0].JF;
	  		var non = jf001 + jf002 + jf003;
	  		var nonn = non/so;
	  		
	  		let nnor = "";
		  	if(nonn == 0 || nonn < 4){
		  	nnor = "For North bound lane is Free flow of traffic.";
		  	}else if(nonn == 4 || nonn < 8){
		  	nnor = "For North bound lane is Sluggish flow of traffic.";
		  	}else if(nonn == 8 || nonn < 10){
		  	nnor = "For North bound lane is Slow flow of traffic.";
		  	}else if(nonn == 10){
		  	nnor = "For North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		nnor = "Cannot compute"
		  	}
		  	let eech = "";
		  	if(jf0001 == 0 || jf0001 < 4){
		  	eech = "Ecoland North bound lane is Free flow of traffic.";
		  	}else if(jf0001 == 4 || jf0001 < 8){
		  	eech = "Ecoland North bound lane is Sluggish flow of traffic.";
		  	}else if(jf0001 == 8 || jf0001 < 10){
		  	eech = "Ecoland North bound lane is Slow flow of traffic.";
		  	}else if(jf0001 == 10){
		  	eech = "Ecoland North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		eech = "Cannot compute"
		  	}
		  	let qoo = "";
		  	if(jf0002 == 0 || jf0002 < 4){
		  	qoo = "Quimpo Blvd North bound lane is Free flow of traffic.";
		  	}else if(jf0002 == 4 || jf0002 < 8){
		  	qoo = "Quimpo Blvd North bound lane is Sluggish flow of traffic.";
		  	}else if(jf0002 == 8 || jf0002 < 10){
		  	qoo = "Quimpo Blvd North bound lane is Slow flow of traffic.";
		  	}else if(jf0002 == 10){
		  	qoo = "Quimpo Blvd North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		qoo = "Cannot compute"
		  	}
		  	let macmac = "";
		  	if(jf0003 == 0 || jf0003 < 4){
		  	macmac = "Mac Arthur Hwy North bound lane is Free flow of traffic.";
		  	}else if(jf0003 == 4 || jf0003 < 8){
		  	macmac = "Mac Arthur Hwy North bound lane is Sluggish flow of traffic.";
		  	}else if(jf0003 == 8 || jf0003 < 10){
		  	macmac = "Mac Arthur Hwy North bound lane is Slow flow of traffic.";
		  	}else if(jf0003 == 10){
		  	macmac = "Mac Arthur Hwy North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		macmac = "Cannot compute"
		  	}


	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ sooth:sooth,sos:sos,macc:macc,jf01:jf01,qquem:qquem,jf02:jf02,ecolla:ecolla,jf03:jf03,         sotht:sotht,ecu:ecu,qem:qem,mec:mec,     
    		noort:noort,nonn:nonn,ecco:ecco,jf0001:jf0001,quuim:quuim,jf0002:jf0002,mcmc:mcmc,jf0003:jf0003,         nnor:nnor,eech:eech,qoo:qoo,macmac:macmac}));
	
	});


});
app.get('/sandawa',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  		//sandawa south
	  		const ssouth = body.RWS[0].RW[14].DE;
	  		const jf1 = body.RWS[0].RW[18].FIS[0].FI[3].CF[0].JF;
	  		const jf2 = body.RWS[0].RW[4].FIS[0].FI[2].CF[0].JF;
	  		var ses = 2
	  		var ss = jf1 + jf2;
	  		var san = ss/ses;
	  		//sandawa south intersections
		  	const mcmac = body.RWS[0].RW[14].FIS[0].FI[0].TMC.DE;
		  	const jf01 = body.RWS[0].RW[14].FIS[0].FI[0].CF[0].JF;  	
		  	const ququ = body.RWS[0].RW[14].FIS[0].FI[1].TMC.DE;
		  	const jf02 = body.RWS[0].RW[14].FIS[0].FI[1].CF[0].JF;

	  		let south = "";
		  	if(san == 0 || san < 4){
		  	south = "For South bound lane is Free flow of traffic.";
		  	}else if(san == 4 || san < 8){
		  	south = "For South bound lane is Sluggish flow of traffic.";
		  	}else if(san == 8 || san < 10){
		  	south = "For South bound lane is Slow flow of traffic.";
		  	}else if(san == 10){
		  	south = "For South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		south = "Cannot compute"
		  	}
		  	let mecmec = "";
		  	if(jf01 == 0 || jf01 < 4){
		  	mecmec = "Mac Arthur Hwy South bound lane is Free flow of traffic.";
		  	}else if(jf01 == 4 || jf01 < 8){
		  	mecmec = "Mac Arthur Hwy South bound lane is Sluggish flow of traffic.";
		  	}else if(jf01 == 8 || jf01 < 10){
		  	mecmec = "Mac Arthur Hwy South bound lane is Slow flow of traffic.";
		  	}else if(jf01 == 10){
		  	mecmec = "Mac Arthur Hwy South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		mecmec = "Cannot compute"
		  	}
		  	let qeqe = "";
		  	if(jf02 == 0 || jf02 < 4){
		  	qeqe = "Quezon Blvd South bound lane is Free flow of traffic.";
		  	}else if(jf02 == 4 || jf02 < 8){
		  	qeqe = "Quezon Blvd South bound lane is Sluggish flow of traffic.";
		  	}else if(jf02 == 8 || jf02 < 10){
		  	qeqe = "Quezon Blvd South bound lane is Slow flow of traffic.";
		  	}else if(jf02 == 10){
		  	qeqe = "Quezon Blvd South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		qeqe = "Cannot compute"
		  	}
	  		//sandawa north
	  		const nnort = body.RWS[0].RW[16].DE;
	  		const jf001 = body.RWS[0].RW[19].FIS[0].FI[1].CF[0].JF;
	  		const jf002 = body.RWS[0].RW[5].FIS[0].FI[11].CF[0].JF;
	  		var sses = jf001 + jf002;
	  		var ssan = sses/ses;

	  		//sandwa north intersections
	  		const qiqi = body.RWS[0].RW[16].FIS[0].FI[0].TMC.DE;
		  	const jfc1 = body.RWS[0].RW[16].FIS[0].FI[0].CF[0].JF;	
		  	const micmic = body.RWS[0].RW[16].FIS[0].FI[1].TMC.DE;
		  	const jfc2 = body.RWS[0].RW[16].FIS[0].FI[1].CF[0].JF;
	
	  		let north = "";
		  	if(ssan == 0 || ssan < 4){
		  	north = "For North bound lane is Free flow of traffic.";
		  	}else if(ssan == 4 || ssan < 8){
		  	north = "For North bound lane is Sluggish flow of traffic.";
		  	}else if(ssan == 8 || ssan < 10){
		  	north = "For North bound lane is Slow flow of traffic.";
		  	}else if(ssan == 10){
		  	north = "For North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		north = "Cannot compute"
		  	}
		  	let qqiqi = "";
		  	if(jfc1 == 0 || jfc1 < 4){
		  	qqiqi = "Quezon Blvd North bound lane is Free flow of traffic.";
		  	}else if(jfc1 == 4 || jfc1 < 8){
		  	qqiqi = "Quezon Blvd North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc1 == 8 || jfc1 < 10){
		  	qqiqi = "Quezon Blvd North bound lane is Slow flow of traffic.";
		  	}else if(jfc1 == 10){
		  	qqiqi = "Quezon Blvd North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		qqiqi = "Cannot compute"
		  	}
		  	let mmicmic = "";
		  	if(jfc2 == 0 || jfc2 < 4){
		  	mmicmic = "Mac Arthur Hwy North bound lane is Free flow of traffic.";
		  	}else if(jfc2 == 4 || jfc2 < 8){
		  	mmicmic = "Mac Arthur Hwy North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc2 == 8 || jfc2 < 10){
		  	mmicmic = "Mac Arthur Hwy North bound lane is Slow flow of traffic.";
		  	}else if(jfc2 == 10){
		  	mmicmic = "Mac Arthur Hwy North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		mmicmic = "Cannot compute"
		  	}
	  		


	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ ssouth:ssouth,san:san,mcmac:mcmac,jf01:jf01,ququ:ququ,jf02:jf02,      south:south,mecmec:mecmec,qeqe:qeqe,     nnort:nnort,ssan:ssan,qiqi:qiqi,
    	 jfc1:jfc1,micmic:micmic,jfc2:jfc2,    north:north,qqiqi:qqiqi,mmicmic:mmicmic}));
	
	});


});
app.get('/quimpoblvd',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  		//quimpo blvd south
	  		const ssouth = body.RWS[0].RW[17].DE;
	  		const jf1 = body.RWS[0].RW[13].FIS[0].FI[1].CF[0].JF;
	  		const jf2 = body.RWS[0].RW[8].FIS[0].FI[0].CF[0].JF;
	  		const jf3 = body.RWS[0].RW[6].FIS[0].FI[0].CF[0].JF;
	  		const jf4 = body.RWS[0].RW[4].FIS[0].FI[6].CF[0].JF;
	  		var n = 4
	  		var nn = jf1 + jf2 + jf3 + jf4;
	  		var nno = nn/n;
	  		//quimpo blvd south intersections
	  			
	  		const ecC = body.RWS[0].RW[15].FIS[0].FI[0].TMC.DE;
		  	const jf001 = body.RWS[0].RW[15].FIS[0].FI[0].CF[0].JF;  	
		  	const ttL = body.RWS[0].RW[15].FIS[0].FI[1].TMC.DE;
		  	const jf002 = body.RWS[0].RW[15].FIS[0].FI[1].CF[0].JF;
		    const ecw = body.RWS[0].RW[15].FIS[0].FI[2].TMC.DE;
		  	const jf003 = body.RWS[0].RW[15].FIS[0].FI[2].CF[0].JF;
		  	const hwy = body.RWS[0].RW[15].FIS[0].FI[3].TMC.DE;
		  	const jf004 = body.RWS[0].RW[15].FIS[0].FI[3].CF[0].JF;


	  		let south = "";
		  	if(nno == 0 || nno < 4){
		  	south = "For South bound lane is Free flow of traffic.";
		  	}else if(nno == 4 || nno < 8){
		  	south = "For Southh bound lane is Sluggish flow of traffic.";
		  	}else if(nno == 8 || nno < 10){
		  	south = "For South bound lane is Slow flow of traffic.";
		  	}else if(nno == 10){
		  	south = "For South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		south = "Cannot compute"
		  	}
		  	let mcc = "";
		  	if(jf001 == 0 || jf001 < 4){
		  	mcc = "Ecoland South bound lane is Free flow of traffic.";
		  	}else if(jf001 == 4 || jf001 < 8){
		  	mcc = "Ecoland South bound lane is Sluggish flow of traffic.";
		  	}else if(jf001 == 8 || jf001 < 10){
		  	mcc = "Ecoland South bound lane is Slow flow of traffic.";
		  	}else if(jf001 == 10){
		  	mcc = "Ecoland South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		mcc = "Cannot compute"
		  	}
		  	let tll = "";
		  	if(jf002 == 0 || jf002 < 4){
		  	tll = "Tulip Dr South bound lane is Free flow of traffic.";
		  	}else if(jf002 == 4 || jf002 < 8){
		  	tll = "Tulip Dr South bound lane is Sluggish flow of traffic.";
		  	}else if(jf002 == 8 || jf002 < 10){
		  	tll = "Tulip Dr South bound lane is Slow flow of traffic.";
		  	}else if(jf002 == 10){
		  	tll = "Tulip Dr South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		tll = "Cannot compute"
		  	}
		  	let ecc = "";
		  	if(jf003 == 0 || jf003 < 4){
		  	ecc = "Eco West Dr South bound lane is Free flow of traffic.";
		  	}else if(jf003 == 4 || jf003 < 8){
		  	ecc = "Eco West Dr South bound lane is Sluggish flow of traffic.";
		  	}else if(jf003 == 8 || jf003 < 10){
		  	ecc = "Eco West Dr South bound lane is Slow flow of traffic.";
		  	}else if(jf003 == 10){
		  	ecc = "Eco West Dr South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ecc = "Cannot compute"
		  	}
		  	let mmM = "";
		  	if(jf004 == 0 || jf004 < 4){
		  	mmM = "Mac Arthur Hwy South bound lane is Free flow of traffic.";
		  	}else if(jf004 == 4 || jf004 < 8){
		  	mmM = "Mac Arthur Hwy South bound lane is Sluggish flow of traffic.";
		  	}else if(jf004 == 8 || jf004 < 10){
		  	mmM = "Mac Arthur Hwy South bound lane is Slow flow of traffic.";
		  	}else if(jf004 == 10){
		  	mmM = "Mac Arthur Hwy  South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		mmM = "Cannot compute"
		  	}
		  	

	  		//quimpo blvd north
	  		const nnorthh = body.RWS[0].RW[15].DE;
	  		const jf01 = body.RWS[0].RW[12].FIS[0].FI[1].CF[0].JF;
	  		const jf02 = body.RWS[0].RW[11].FIS[0].FI[2].CF[0].JF;
	  		const jf03 = body.RWS[0].RW[7].FIS[0].FI[1].CF[0].JF;
	  		const jf04 = body.RWS[0].RW[5].FIS[0].FI[7].CF[0].JF;
	  		var ss = jf01 + jf02 + jf03 + jf04;
	  		var sso = ss/n;
	  		//quimpo blvd north intersections
	  		
	  		const intc1 = body.RWS[0].RW[17].FIS[0].FI[0].TMC.DE;
			const jfc1 = body.RWS[0].RW[17].FIS[0].FI[0].CF[0].JF;  	
			const intc2 = body.RWS[0].RW[17].FIS[0].FI[1].TMC.DE;
			const jfc2 = body.RWS[0].RW[17].FIS[0].FI[1].CF[0].JF;
			const intc3 = body.RWS[0].RW[17].FIS[0].FI[2].TMC.DE;
			const jfc3 = body.RWS[0].RW[17].FIS[0].FI[2].CF[0].JF;
			const intc4 = body.RWS[0].RW[17].FIS[0].FI[3].TMC.DE;
			const jfc4 = body.RWS[0].RW[17].FIS[0].FI[3].CF[0].JF;

			let north = "";
		  	if(sso == 0 || sso < 4){
		  	north = "For North bound lane is Free flow of traffic.";
		  	}else if(sso == 4 || sso < 8){
		  	north = "For North bound lane is Sluggish flow of traffic.";
		  	}else if(sso == 8 || sso < 10){
		  	north = "For North bound lane is Slow flow of traffic.";
		  	}else if(sso == 10){
		  	north = "For North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		north = "Cannot compute"
		  	}
		  	let maaaa = "";
		  	if(jfc1 == 0 || jfc1 < 4){
		  	maaaa = "Mac Arthur Hwy North bound lane is Free flow of traffic.";
		  	}else if(jfc1 == 4 || jfc1 < 8){
		  	maaaa = "Mac Arthur Hwy North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc1 == 8 || jfc1 < 10){
		  	maaaa = "Mac Arthur Hwy North bound lane is Slow flow of traffic.";
		  	}else if(jfc1 == 10){
		  	maaaa = "Mac Arthur Hwy North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		maaaa = "Cannot compute"
		  	}
		  	let ec0000 = "";
		  	if(jfc2 == 0 || jfc2 < 4){
		  	ec0000 = "Eco West Dr North bound lane is Free flow of traffic.";
		  	}else if(jfc2 == 4 || jfc2 < 8){
		  	ec0000 = "Eco West Dr North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc2 == 8 || jfc2 < 10){
		  	ec0000 = "Eco West Dr North bound lane is Slow flow of traffic.";
		  	}else if(jfc2 == 10){
		  	ec0000 = "Eco West Dr North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ec0000 = "Cannot compute"
		  	}
		  	let tulll = "";
		  	if(jfc3 == 0 || jfc3 < 4){
		  	tulll = "Tulip Dr North bound lane is Free flow of traffic.";
		  	}else if(jfc3 == 4 || jfc3 < 8){
		  	tulll = "Tulip Dr North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc3 == 8 || jfc3 < 10){
		  	tulll = "Tulip Dr North bound lane is Slow flow of traffic.";
		  	}else if(jfc3 == 10){
		  	tulll = "Tulip Dr North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		tulll = "Cannot compute"
		  	}
		  	let eccoow = "";
		  	if(jfc4 == 0 || jfc4 < 4){
		  	eccoow = "Ecoland North bound lane is Free flow of traffic.";
		  	}else if(jfc4 == 4 || jfc4 < 8){
		  	eccoow = "Ecoland North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc4 == 8 || jfc4 < 10){
		  	eccoow = "Ecoland North bound lane is Slow flow of traffic.";
		  	}else if(jfc4 == 10){
		  	eccoow = "Ecoland North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		eccoow = "Cannot compute"
		  	}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ssouth:ssouth,nno:nno,ecC:ecC,jf001:jf001,ttL:ttL,jf002:jf002,ecw:ecw,jf003:jf003,hwy:hwy,jf004:jf004,
    	south:south,mcc:mcc,tll:tll,ecc:ecc,mmM:mmM,nnorthh:nnorthh,sso:sso,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,
    	intc4:intc4,jfc4:jfc4,            north:north,maaaa:maaaa,ec0000:ec0000,tulll:tulll,eccoow:eccoow               }));
	
	});


});
app.get('/quezonblvd',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  		//quezon blvd south
	  		const quezon1 = body.RWS[0].RW[18].DE;
	  		const jf1 = body.RWS[0].RW[27].FIS[0].FI[4].CF[0].JF;
	  		const jf2 = body.RWS[0].RW[14].FIS[0].FI[1].CF[0].JF;
	  		const jf3 = body.RWS[0].RW[8].FIS[0].FI[0].CF[0].JF;
	  		var q = 3
	  		var qq = jf1 + jf2 + jf3;
	  		var qe = qq/q;
	  		//quezon blvd south intersections
			  	const intc1 = body.RWS[0].RW[18].FIS[0].FI[0].TMC.DE;
			  	const jfc1 = body.RWS[0].RW[18].FIS[0].FI[0].CF[0].JF;		  	
			  	const intc2 = body.RWS[0].RW[18].FIS[0].FI[1].TMC.DE;
			  	const jfc2 = body.RWS[0].RW[18].FIS[0].FI[1].CF[0].JF;
			    const intc3 = body.RWS[0].RW[18].FIS[0].FI[2].TMC.DE;
			  	const jfc3 = body.RWS[0].RW[18].FIS[0].FI[2].CF[0].JF;
			  	const intc4 = body.RWS[0].RW[18].FIS[0].FI[3].TMC.DE;
			  	const jfc4 = body.RWS[0].RW[18].FIS[0].FI[3].CF[0].JF;
			  	const intc5 = body.RWS[0].RW[18].FIS[0].FI[4].TMC.DE;
			  	const jfc5 = body.RWS[0].RW[18].FIS[0].FI[4].CF[0].JF; 		
	  		
	  		let que = "";
		  	if(qe == 0 || qe < 4){
		  	que = "For South bound lane is Free flow of traffic.";
		  	}else if(qe == 4 || qe < 8){
		  	que = "For South bound lane is Sluggish flow of traffic.";
		  	}else if(qe == 8 || qe < 10){
		  	que = "For South bound lane is Slow flow of traffic.";
		  	}else if(qe == 10){
		  	que = "For South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		que = "Cannot compute"
		  	}
		  	let saa = "";
		  	if(jfc1 == 0 || jfc1 < 4){
		  	saa = "San Pedro St South bound lane is Free flow of traffic.";
		  	}else if(jfc1 == 4 || jfc1 < 8){
		  	saa = "San Pedro St South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc1 == 8 || jfc1 < 10){
		  	saa = "San Pedro St South bound lane is Slow flow of traffic.";
		  	}else if(jfc1 == 10){
		  	saa = "San Pedro St South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		saa = "Cannot compute"
		  	}
		  	let piii = "";
		  	if(jfc2 == 0 || jfc2 < 4){
		  	piii = "Pichon St South bound lane is Free flow of traffic.";
		  	}else if(jfc2 == 4 || jfc2 < 8){
		  	piii = "Pichon St South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc2 == 8 || jfc2 < 10){
		  	piii = "Pichon St South bound lane is Slow flow of traffic.";
		  	}else if(jfc2 == 10){
		  	piii = "Pichon St South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		piii = "Cannot compute"
		  	}
		  	let boo = "";
		  	if(jfc3 == 0 || jfc3 < 4){
		  	boo = "Bolton Brg South bound lane is Free flow of traffic.";
		  	}else if(jfc3 == 4 || jfc3 < 8){
		  	boo = "Bolton Brg South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc3 == 8 || jfc3 < 10){
		  	boo = "Bolton Brg South bound lane is Slow flow of traffic.";
		  	}else if(jfc3 == 10){
		  	boo = "Bolton Brg South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		boo = "Cannot compute"
		  	}
		  	let gge = "";
		  	if(jfc4 == 0 || jfc4 < 4){
		  	gge = "G. Torres Ave Formerly Sandawa Rd South bound lane is Free flow of traffic.";
		  	}else if(jfc4 == 4 || jfc4 < 8){
		  	gge = "G. Torres Ave Formerly Sandawa Rd South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc4 == 8 || jfc4 < 10){
		  	gge = "G. Torres Ave Formerly Sandawa Rd South bound lane is Slow flow of traffic.";
		  	}else if(jfc4 == 10){
		  	gge = "G. Torres Ave Formerly Sandawa Rd South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		gge = "Cannot compute"
		  	}
		  	let echh = "";
		  	if(jfc5 == 0 || jfc5 < 4){
		  	echh = "Ecoland South bound lane is Free flow of traffic.";
		  	}else if(jfc5 == 4 || jfc5 < 8){
		  	echh = "Ecoland South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc5 == 8 || jfc5 < 10){
		  	echh = "Ecoland South bound lane is Slow flow of traffic.";
		  	}else if(jfc5 == 10){
		  	echh = "Ecoland South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		echh = "Cannot compute"
		  	}

	  		//quezon blvd north
	  		const quezon2 = body.RWS[0].RW[19].DE;
	  		const jf01 = body.RWS[0].RW[28].FIS[0].FI[0].CF[0].JF;
			const jf02 = body.RWS[0].RW[16].FIS[0].FI[0].CF[0].JF;
			const jf03 = body.RWS[0].RW[11].FIS[0].FI[2].CF[0].JF;
			var b = jf01 + jf02 + jf03;
			var bb = b/q;

			//quezon blvd north intersections
				const Ec = body.RWS[0].RW[19].FIS[0].FI[0].TMC.DE;
			  	const jf001 = body.RWS[0].RW[19].FIS[0].FI[0].CF[0].JF;  	
			  	const G = body.RWS[0].RW[19].FIS[0].FI[1].TMC.DE;
			  	const jf002 = body.RWS[0].RW[19].FIS[0].FI[1].CF[0].JF;
			    const Bo = body.RWS[0].RW[19].FIS[0].FI[2].TMC.DE;
			  	const jf003 = body.RWS[0].RW[19].FIS[0].FI[2].CF[0].JF;
			  	const Pi = body.RWS[0].RW[19].FIS[0].FI[3].TMC.DE;
			  	const jf004 = body.RWS[0].RW[19].FIS[0].FI[3].CF[0].JF;
			  	const Sa = body.RWS[0].RW[19].FIS[0].FI[4].TMC.DE;
			  	const jf005 = body.RWS[0].RW[19].FIS[0].FI[4].CF[0].JF;

			let que1 = "";
		  	if(bb == 0 || bb < 4){
		  	que1 = "For North bound lane is Free flow of traffic.";
		  	}else if(bb == 4 || bb < 8){
		  	que1 = "For North bound lane is Sluggish flow of traffic.";
		  	}else if(bb == 8 || bb < 10){
		  	que1 = "For North bound lane is Slow flow of traffic.";
		  	}else if(bb == 10){
		  	que1 = "For North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		que1 = "Cannot compute"
		  	}

		  	let aco = "";
		  	if(jf001 == 0 || jf001 < 4){
		  	aco = "Ecoland North bound lane is Free flow of traffic.";
		  	}else if(jf001 == 4 || jf001 < 8){
		  	aco = "Ecoland North bound lane is Sluggish flow of traffic.";
		  	}else if(jf001 == 8 || jf001 < 10){
		  	aco = "Ecoland North bound lane is Slow flow of traffic.";
		  	}else if(jf001 == 10){
		  	aco = "Ecoland North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		aco = "Cannot compute"
		  	}
		  	let gg = "";
		  	if(jf002 == 0 || jf002 < 4){
		  	gg = "G. Torres Ave Formerly Sandawa Rd North bound lane is Free flow of traffic.";
		  	}else if(jf002 == 4 || jf002 < 8){
		  	gg = "G. Torres Ave Formerly Sandawa Rd North bound lane is Sluggish flow of traffic.";
		  	}else if(jf002 == 8 || jf002 < 10){
		  	gg = "G. Torres Ave Formerly Sandawa Rd North bound lane is Slow flow of traffic.";
		  	}else if(jf002 == 10){
		  	gg = "G. Torres Ave Formerly Sandawa Rd North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		gg = "Cannot compute"
		  	}
		  	let bu = "";
		  	if(jf003 == 0 || jf003 < 4){
		  	bu = "Bolton Brg North bound lane is Free flow of traffic.";
		  	}else if(jf003 == 4 || jf003 < 8){
		  	bu = "Bolton Brg North bound lane is Sluggish flow of traffic.";
		  	}else if(jf003 == 8 || jf003 < 10){
		  	bu = "Bolton Brg North bound lane is Slow flow of traffic.";
		  	}else if(jf003 == 10){
		  	bu = "Bolton Brg North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		bu = "Cannot compute"
		  	}
		  	let ppi = "";
		  	if(jf004 == 0 || jf004 < 4){
		  	ppi = "Pichon St North bound lane is Free flow of traffic.";
		  	}else if(jf004 == 4 || jf004 < 8){
		  	ppi = "Pichon St North bound lane is Sluggish flow of traffic.";
		  	}else if(jf004 == 8 || jf004 < 10){
		  	ppi = "Pichon St North bound lane is Slow flow of traffic.";
		  	}else if(jf004 == 10){
		  	ppi = "Pichon St North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ppi = "Cannot compute"
		  	}
		  	let ssaa = "";
		  	if(jf005 == 0 || jf005 < 4){
		  	ssaa = "San Pedro St North bound lane is Free flow of traffic.";
		  	}else if(jf005 == 4 || jf005 < 8){
		  	ssaa = "San Pedro St North bound lane is Sluggish flow of traffic.";
		  	}else if(jf005 == 8 || jf005 < 10){
		  	ssaa = "San Pedro St North bound lane is Slow flow of traffic.";
		  	}else if(jf005 == 10){
		  	ssaa = "San Pedro St North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ssaa = "Cannot compute"
		  	}

	  		

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({quezon1:quezon1,qe:qe,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,intc4:intc4,jfc4:jfc4,intc5:intc5,jfc5:jfc5,     
    		que:que,saa:saa,piii:piii,boo:boo,gge:gge,echh:echh,quezon2:quezon2,bb:bb,Ec:Ec,jf001:jf001,G:G,jf002:jf002,Bo:Bo,jf003:jf003,Pi:Pi,jf004:jf004,Sa:Sa,
    		jf005:jf005,que1:que1,aco:aco,gg:gg,bu:bu,ppi:ppi,ssaa:ssaa}));
	
	});


});
app.get('/cabaguio',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  		//cabaguio south
	  		const south = body.RWS[0].RW[20].DE;
	  		const cab= body.RWS[0].RW[2].FIS[0].FI[3].CF[0].JF;

	  		//cabaguio south intersections
	  		const jp = body.RWS[0].RW[20].FIS[0].FI[0].TMC.DE;
		  	const jfc1 = body.RWS[0].RW[20].FIS[0].FI[0].CF[0].JF;  	
		  	const lap = body.RWS[0].RW[20].FIS[0].FI[1].TMC.DE;
		  	const jfc2 = body.RWS[0].RW[20].FIS[0].FI[1].CF[0].JF;

	  		let ssouth = "";
		  	if(cab == 0 || cab < 4){
		  	ssouth = "For South bound lane is Free flow of traffic.";
		  	}else if(cab == 4 || cab < 8){
		  	ssouth = "For South bound lane is Sluggish flow of traffic.";
		  	}else if(cab == 8 || cab < 10){
		  	ssouth = "For South bound lane is Slow flow of traffic.";
		  	}else if(cab == 10){
		  	ssouth = "For South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ssouth = "Cannot compute"
		  	}
		  	let jjp = "";
		  	if(jfc1 == 0 || jfc1 < 4){
		  	jjp = "J. P. Laurel Ave South bound lane is Free flow of traffic.";
		  	}else if(jfc1 == 4 || jfc1 < 8){
		  	jjp = "J. P. Laurel Ave South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc1 == 8 || jfc1 < 10){
		  	jjp = "J. P. Laurel Ave South bound lane is Slow flow of traffic.";
		  	}else if(jfc1 == 10){
		  	jjp = "J. P. Laurel Ave South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		jjp = "Cannot compute"
		  	}
		  	let llp = "";
		  	if(jfc2 == 0 || jfc2 < 4){
		  	llp = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Free flow of traffic.";
		  	}else if(jfc2 == 4 || jfc2 < 8){
		  	llp = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc2 == 8 || jfc2 < 10){
		  	llp = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Slow flow of traffic.";
		  	}else if(jfc2 == 10){
		  	llp = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		llp = "Cannot compute"
		  	}
	  		//cabaguio north
	  		const north = body.RWS[0].RW[23].DE;
	  		const cab1 = body.RWS[0].RW[3].FIS[0].FI[2].CF[0].JF;
	  		//cabaguio north intersections
	  		const intc1 = body.RWS[0].RW[23].FIS[0].FI[0].TMC.DE;
		  	const jfc01 = body.RWS[0].RW[23].FIS[0].FI[0].CF[0].JF;	  	
		  	const intc2 = body.RWS[0].RW[23].FIS[0].FI[1].TMC.DE;
		  	const jfc02 = body.RWS[0].RW[23].FIS[0].FI[1].CF[0].JF;

	  		let nnort = "";
		  	if(cab == 0 || cab < 4){
		  	nnort = "For North bound lane is Free flow of traffic.";
		  	}else if(cab == 4 || cab < 8){
		  	nnort = "For North bound lane is Sluggish flow of traffic.";
		  	}else if(cab == 8 || cab < 10){
		  	nnort = "For North bound lane is Slow flow of traffic.";
		  	}else if(cab == 10){
		  	nnort = "For North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		nnort = "Cannot compute"
		  	}
		  	let aal = "";
		  	if(jfc01 == 0 || jfc01 < 4){
		  	aal = "Lapu-Lapu/R. Castillo/Dacudao North bound lane is Free flow of traffic.";
		  	}else if(jfc01 == 4 || jfc01 < 8){
		  	aal = "Lapu-Lapu/R. Castillo/Dacudao North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc01 == 8 || jfc01 < 10){
		  	aal = "Lapu-Lapu/R. Castillo/Dacudao North bound lane is Slow flow of traffic.";
		  	}else if(jfc01 == 10){
		  	aal = "Lapu-Lapu/R. Castillo/Dacudao North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		aal = "Cannot compute"
		  	}
		  	let jpp = "";
		  	if(jfc02 == 0 || jfc02 < 4){
		  	jpp = "J. P. Laurel Ave North bound lane is Free flow of traffic.";
		  	}else if(jfc02 == 4 || jfc02 < 8){
		  	jpp = "J. P. Laurel Ave North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc02 == 8 || jfc02 < 10){
		  	jpp = "J. P. Laurel Ave North bound lane is Slow flow of traffic.";
		  	}else if(jfc02 == 10){
		  	jpp = "J. P. Laurel Ave North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		jpp = "Cannot compute"
		  	}

	  		

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({south:south,cab:cab,jp:jp,jfc1:jfc1,lap:lap,jfc2:jfc2,      ssouth:ssouth,jjp:jjp,llp:llp,           
    		north:north,cab1:cab1,intc1:intc1,jfc01:jfc01,intc2:intc2,jfc02:jfc02,       nnort:nnort,aal:aal,jpp:jpp}));
	
	});


});app.get('/mlquezon',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  		//cabaguio south
	  		const south = body.RWS[0].RW[21].DE;
	  		const jf1 = body.RWS[0].RW[41].FIS[0].FI[0].CF[0].JF;
	  		const jf2 = body.RWS[0].RW[35].FIS[0].FI[2].CF[0].JF;
	 		const jf3 = body.RWS[0].RW[31].FIS[0].FI[2].CF[0].JF;
	 		var j = 3
	 		var ca = jf1 + jf2 + jf3;
	 		var cab = ca/j;
	 		//cabaguio south intersections
	 		const intc1 = body.RWS[0].RW[21].FIS[0].FI[0].TMC.DE;
		  	const jfc1 = body.RWS[0].RW[21].FIS[0].FI[0].CF[0].JF;
     	  	const intc2 = body.RWS[0].RW[21].FIS[0].FI[1].TMC.DE;
		  	const jfc2 = body.RWS[0].RW[21].FIS[0].FI[1].CF[0].JF;
		  	const intc3 = body.RWS[0].RW[21].FIS[0].FI[2].TMC.DE;
		  	const jfc3 = body.RWS[0].RW[21].FIS[0].FI[2].CF[0].JF;
		  	const intc4 = body.RWS[0].RW[21].FIS[0].FI[3].TMC.DE;
		  	const jfc4 = body.RWS[0].RW[21].FIS[0].FI[3].CF[0].JF;
		  	const intc5 = body.RWS[0].RW[21].FIS[0].FI[4].TMC.DE;
		  	const jfc5 = body.RWS[0].RW[21].FIS[0].FI[4].CF[0].JF;
		  	const intc6 = body.RWS[0].RW[21].FIS[0].FI[5].TMC.DE;
		  	const jfc6 = body.RWS[0].RW[21].FIS[0].FI[5].CF[0].JF;
			
			let sourth = "";
		  	if(cab == 0 || cab < 4){
		  	sourth = "For South bound lane is Free flow of traffic.";
		  	}else if(cab == 4 || cab < 8){
		  	sourth = "For South bound lane is Sluggish flow of traffic.";
		  	}else if(cab == 8 || cab < 10){
		  	sourth = "For South bound lane is Slow flow of traffic.";
		  	}else if(cab == 10){
		  	sourth = "For South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		sourth = "Cannot compute"
		  	}
		  	let laps = "";
		  	if(jfc1 == 0 || jfc1 < 4){
		  	laps = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Free flow of traffic.";
		  	}else if(jfc1 == 4 || jfc1 < 8){
		  	laps = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc1 == 8 || jfc1 < 10){
		  	laps = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Slow flow of traffic.";
		  	}else if(jfc1 == 10){
		  	laps = "Lapu-Lapu/R. Castillo/Dacudao South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		laps = "Cannot compute"
		  	}
		  	let ssta = "";
		  	if(jfc2 == 0 || jfc2 < 4){
		  	ssta = "Sta. Ana Ave South bound lane is Free flow of traffic.";
		  	}else if(jfc2 == 4 || jfc2 < 8){
		  	ssta = "Sta. Ana Ave South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc2 == 8 || jfc2 < 10){
		  	ssta = "Sta. Ana Ave South bound lane is Slow flow of traffic.";
		  	}else if(jfc2 == 10){
		  	ssta = "Sta. Ana Ave South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ssta = "Cannot compute"
		  	}
		  	let rm = "";
		  	if(jfc3 == 0 || jfc3 < 4){
		  	rm = "R. Magsaysay Ave South bound lane is Free flow of traffic.";
		  	}else if(jfc3 == 4 || jfc3 < 8){
		  	rm = "R. Magsaysay Ave South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc3 == 8 || jfc3 < 10){
		  	rm = "R. Magsaysay Ave South bound lane is Slow flow of traffic.";
		  	}else if(jfc3 == 10){
		  	rm = "R. Magsaysay Ave South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		rm = "Cannot compute"
		  	}
		  	let mr = "";
		  	if(jfc4 == 0 || jfc4 < 4){
		  	mr = "M. Roxas South bound lane is Free flow of traffic.";
		  	}else if(jfc4 == 4 || jfc4 < 8){
		  	mr = "M. Roxas South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc4 == 8 || jfc4 < 10){
		  	mr = "M. Roxas South bound lane is Slow flow of traffic.";
		  	}else if(jfc4 == 10){
		  	mr = "M. Roxas South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		mr = "Cannot compute"
		  	}
		  	let ab = "";
		  	if(jfc5 == 0 || jfc5 < 4){
		  	ab = "A. Bonifacio St South bound lane is Free flow of traffic.";
		  	}else if(jfc5 == 4 || jfc5 < 8){
		  	ab = "A. Bonifacio St South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc5 == 8 || jfc5 < 10){
		  	ab = "A. Bonifacio St South bound lane is Slow flow of traffic.";
		  	}else if(jfc5 == 10){
		  	ab = "A. Bonifacio St South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ab = "Cannot compute"
		  	}
		  	let ss = "";
		  	if(jfc6 == 0 || jfc6 < 4){
		  	ss = "San Pedro St South bound lane is Free flow of traffic.";
		  	}else if(jfc6 == 4 || jfc6 < 8){
		  	ss = "San Pedro St South bound lane is Sluggish flow of traffic.";
		  	}else if(jfc6 == 8 || jfc6 < 10){
		  	ss = "San Pedro St South bound lane is Slow flow of traffic.";
		  	}else if(jfc6 == 10){
		  	ss = "San Pedro St South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		ss = "Cannot compute"
		  	}
	  		//cabaguio north
	  		const north = body.RWS[0].RW[22].DE;
	  		const jf01 = body.RWS[0].RW[42].FIS[0].FI[2].CF[0].JF;
	  		const jf02 = body.RWS[0].RW[34].FIS[0].FI[0].CF[0].JF;
	  		const jf03 = body.RWS[0].RW[33].FIS[0].FI[0].CF[0].JF;
	  		var cc = jf01 + jf02 + jf03;
	  		var  cCc = cc/j;
	  		//cabaguio north intersections
	  		const int1 = body.RWS[0].RW[22].FIS[0].FI[0].TMC.DE;
		  	const jf001 = body.RWS[0].RW[22].FIS[0].FI[0].CF[0].JF;	  	
		  	const int2 = body.RWS[0].RW[22].FIS[0].FI[1].TMC.DE;
		  	const jf002 = body.RWS[0].RW[22].FIS[0].FI[1].CF[0].JF;
		  	const int3 = body.RWS[0].RW[22].FIS[0].FI[2].TMC.DE;
		  	const jf003 = body.RWS[0].RW[22].FIS[0].FI[2].CF[0].JF;
		  	const int4 = body.RWS[0].RW[22].FIS[0].FI[3].TMC.DE;
		  	const jf004 = body.RWS[0].RW[22].FIS[0].FI[3].CF[0].JF;
		  	const int5 = body.RWS[0].RW[22].FIS[0].FI[4].TMC.DE;
		  	const jf005 = body.RWS[0].RW[22].FIS[0].FI[4].CF[0].JF;
		  	const int6 = body.RWS[0].RW[22].FIS[0].FI[5].TMC.DE;
		  	const jf006 = body.RWS[0].RW[22].FIS[0].FI[5].CF[0].JF;

	  		let nert = "";
		  	if(cCc == 0 || cCc < 4){
		  	nert = "For North bound lane is Free flow of traffic.";
		  	}else if(cCc == 4 || cCc < 8){
		  	nert = "For North bound lane is Sluggish flow of traffic.";
		  	}else if(cCc == 8 || cCc < 10){
		  	nert = "For North bound lane is Slow flow of traffic.";
		  	}else if(cCc == 10){
		  	nert = "For North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		nert = "Cannot compute"
		  	}
		  	let isan = "";
		  	if(jf001 == 0 || jf001 < 4){
		  	isan = "San Pedro St North bound lane is Free flow of traffic.";
		  	}else if(jf001 == 4 || jf001 < 8){
		  	isan = "San Pedro St North bound lane is Sluggish flow of traffic.";
		  	}else if(jf001 == 8 || jf001 < 10){
		  	isan = "San Pedro St North bound lane is Slow flow of traffic.";
		  	}else if(jf001 == 10){
		  	isan = "San Pedro St North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		isan = "Cannot compute"
		  	}
		  	let abb = "";
		  	if(jf002 == 0 || jf002 < 4){
		  	abb = "A. Bonifacio St North bound lane is Free flow of traffic.";
		  	}else if(jf002 == 4 || jf002 < 8){
		  	abb = "A. Bonifacio St North bound lane is Sluggish flow of traffic.";
		  	}else if(jf002 == 8 || jf002 < 10){
		  	abb = "A. Bonifacio St North bound lane is Slow flow of traffic.";
		  	}else if(jf002 == 10){
		  	abb = "A. Bonifacio St North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		abb = "Cannot compute"
		  	}
		  	let mrr = "";
		  	if(jf003 == 0 || jf003 < 4){
		  	mrr = "M. Roxas North bound lane is Free flow of traffic.";
		  	}else if(jf003 == 4 || jf003 < 8){
		  	mrr = "M. Roxas North bound lane is Sluggish flow of traffic.";
		  	}else if(jf003 == 8 || jf003 < 10){
		  	mrr = "M. Roxas North bound lane is Slow flow of traffic.";
		  	}else if(jf003 == 10){
		  	mrr = "M. Roxas North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		mrr = "Cannot compute"
		  	}
		  	let rmm = "";
		  	if(jf004 == 0 || jf004 < 4){
		  	rmm = "R. Magsaysay Ave North bound lane is Free flow of traffic.";
		  	}else if(jf004 == 4 || jf004 < 8){
		  	rmm = "R. Magsaysay Ave North bound lane is Sluggish flow of traffic.";
		  	}else if(jf004 == 8 || jf004 < 10){
		  	rmm = "R. Magsaysay Ave North bound lane is Slow flow of traffic.";
		  	}else if(jf004 == 10){
		  	rmm = "R. Magsaysay Ave North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		rmm = "Cannot compute"
		  	}
		  	let stta = "";
		  	if(jf005 == 0 || jf005 < 4){
		  	stta = "Sta. Ana Ave North bound lane is Free flow of traffic.";
		  	}else if(jf005 == 4 || jf005 < 8){
		  	stta = "Sta. Ana Ave Ave North bound lane is Sluggish flow of traffic.";
		  	}else if(jf005 == 8 || jf005 < 10){
		  	stta = "Sta. Ana Ave Ave North bound lane is Slow flow of traffic.";
		  	}else if(jf005 == 10){
		  	stta = "Sta. Ana Ave Ave North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		stta = "Cannot compute"
		  	}
		  	let lplp = "";
		  	if(jf006 == 0 || jf006 < 4){
		  	lplp = "Lapu-Lapu/R. Castillo/Dacudao North bound lane is Free flow of traffic.";
		  	}else if(jf006 == 4 || jf006 < 8){
		  	lplp = "Lapu-Lapu/R. Castillo/Dacudao Ave North bound lane is Sluggish flow of traffic.";
		  	}else if(jf006 == 8 || jf006 < 10){
		  	lplp = "Lapu-Lapu/R. Castillo/Dacudao North bound lane is Slow flow of traffic.";
		  	}else if(jf006 == 10){
		  	lplp = "Lapu-Lapu/R. Castillo/Dacudao North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		lplp = "Cannot compute"
		  	}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({south:south,cab:cab,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,
    		intc4:intc4,jfc4:jfc4,intc5:intc5,jfc5:jfc5,intc6:intc6,jfc6:jfc6,sourth:sourth,laps:laps,ssta:ssta,rm:rm,mr:mr,
    		ab:ab,ss:ss,north:north,cc:cc,int1:int1,jf001:jf001,int2:int2,jf002:jf002,int3:int3,jf003:jf003,
    		int4:int4,jf004:jf004,int5:int5,jf005:jf005,int6:int6,jf006:jf006,nert:nert,isan:isan,abb:abb,mrr:mrr,rmm:rmm,
    		stta:stta,lplp:lplp}));
	
	});


});
app.get('/dacudao',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  		//dacudao south
	  		const dacS = body.RWS[0].RW[24].DE;
	  		const jf1 = body.RWS[0].RW[2].FIS[0].FI[3].CF[0].JF;	
			const jf2 = body.RWS[0].RW[52].FIS[0].FI[1].CF[0].JF;
	  		var d = 2
	  		var da = jf1 + jf2;
	  		var dada = da/d;	
	  		let dsouth = "";
		  	if(dada == 0 || dada < 4){
		  	dsouth = "For South bound lane is Free flow of traffic.";
		  	}else if(dada == 4 || dada < 8){
		  	dsouth = "For South bound lane is Sluggish flow of traffic.";
		  	}else if(dada == 8 || dada < 10){
		  	dsouth = "For South bound lane is Slow flow of traffic.";
		  	}else if(dada == 10){
		  	dsouth = "For South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		dsouth = "Cannot compute"
		  	}
		  	//dacudao south intersections
		  	const jp = body.RWS[0].RW[24].FIS[0].FI[0].TMC.DE;
		  	const jf001 = body.RWS[0].RW[24].FIS[0].FI[0].CF[0].JF;	  	
		  	const la = body.RWS[0].RW[24].FIS[0].FI[1].TMC.DE;
		  	const jf002 = body.RWS[0].RW[24].FIS[0].FI[1].CF[0].JF;
		  	let jjjp = "";
		  	if(jf001 == 0 || jf001 < 4){
		  	jjjp = "J. P. Laurel Ave South bound lane is Free flow of traffic.";
		  	}else if(jf001 == 4 || jf001 < 8){
		  	jjjp = "J. P. Laurel Ave South bound lane is Sluggish flow of traffic.";
		  	}else if(jf001 == 8 || jf001 < 10){
		  	jjjp = "J. P. Laurel Ave South bound lane is Slow flow of traffic.";
		  	}else if(jf001 == 10){
		  	jjjp = "J. P. Laurel Ave South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		jjjp = "Cannot compute"
		  	}
		  	let lala = "";
		  	if(jf002 == 0 || jf002 < 4){
		  	lala = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover South bound lane is Free flow of traffic.";
		  	}else if(jf002 == 4 || jf002 < 8){
		  	lala = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover South bound lane is Sluggish flow of traffic.";
		  	}else if(jf002 == 8 || jf002 < 10){
		  	lala = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover South bound lane is Slow flow of traffic.";
		  	}else if(jf002 == 10){
		  	lala = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover South bound lane is Traffic stopped or Road closed."
		  	}else{
		  		lala = "Cannot compute"
		  	}
	  		//dacudao north
	  		const dacN = body.RWS[0].RW[25].DE;
	  		const jf01 = body.RWS[0].RW[3].FIS[0].FI[2].CF[0].JF;
	  		const jf02 = body.RWS[0].RW[53].FIS[0].FI[5].CF[0].JF;
	  		var daa = jf01 + jf02;
	  		var dndn = daa/d;
			//dacudao north intersections
	  		const intc1 = body.RWS[0].RW[25].FIS[0].FI[0].TMC.DE;
	  		const jfc1 = body.RWS[0].RW[25].FIS[0].FI[0].CF[0].JF;	
	  		const intc2 = body.RWS[0].RW[25].FIS[0].FI[1].TMC.DE;
	  		const jfc2 = body.RWS[0].RW[25].FIS[0].FI[1].CF[0].JF;
	  		let dnorth= "";
		  	if(dndn == 0 || dndn < 4){
		  	dnorth = "For North bound lane is Free flow of traffic.";
		  	}else if(dndn == 4 || dndn < 8){
		  	dnorth = "For North bound lane is Sluggish flow of traffic.";
		  	}else if(dndn == 8 || dndn < 10){
		  	dnorth = "For North bound lane is Slow flow of traffic.";
		  	}else if(dndn == 10){
		  	dnorth = "For North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		dnorth = "North compute"
		  	}
		  	let lp= "";
		  	if(jfc1 == 0 || jfc1 < 4){
		  	lp = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover North bound lane is Free flow of traffic.";
		  	}else if(jfc1 == 4 || jfc1 < 8){
		  	lp = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc1 == 8 || jfc1 < 10){
		  	lp = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover North bound lane is Slow flow of traffic.";
		  	}else if(jfc1 == 10){
		  	lp = "Lapu-Lapu/R. Castillo/L. Garcia/Agdao Flyover North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		lp = "North compute"
		  	}
		  	let jeo= "";
		  	if(jfc2 == 0 || jfc2 < 4){
		  	jeo = "J. P. Laurel Ave North bound lane is Free flow of traffic.";
		  	}else if(jfc2 == 4 || jfc2 < 8){
		  	jeo = "J. P. Laurel Ave North bound lane is Sluggish flow of traffic.";
		  	}else if(jfc2 == 8 || jfc2 < 10){
		  	jeo = "J. P. Laurel Ave North bound lane is Slow flow of traffic.";
		  	}else if(jfc2 == 10){
		  	jeo = "J. P. Laurel Ave North bound lane is Traffic stopped or Road closed."
		  	}else{
		  		jeo = "North compute"
		  	}
	  		

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({dacS:dacS,dada:dada,jp:jp,jf001:jf001,la:la,jf002:jf002,    dsouth:dsouth,jjjp:jjjp,lala:lala,      
    	 dacN:dacN,dndn:dndn,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,       dnorth:dnorth,lp:lp,jeo:jeo}));
	
	});


});
app.get('/pichonst',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//pichon  south 
	  	const south = body.RWS[0].RW[27].DE;
	  	const jf1 = body.RWS[0].RW[0].FIS[0].FI[1].CF[0].JF;
	    const jf2 = body.RWS[0].RW[1].FIS[0].FI[3].CF[0].JF;
	    const jf3 = body.RWS[0].RW[18].FIS[0].FI[1].CF[0].JF;
		const jf4 = body.RWS[0].RW[19].FIS[0].FI[3].CF[0].JF;
		const jf5 = body.RWS[0].RW[38].FIS[0].FI[0].CF[0].JF;
		var one = 5
		var pi = jf1 + jf2 + jf3 + jf4 + jf5;
		var ppi = pi/one;
		//pichon  south  intersections
		const intc1 = body.RWS[0].RW[27].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[27].FIS[0].FI[0].CF[0].JF;
		const intc3 = body.RWS[0].RW[27].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[27].FIS[0].FI[2].CF[0].JF;
		const intc4 = body.RWS[0].RW[27].FIS[0].FI[3].TMC.DE;
	  	const jfc4 = body.RWS[0].RW[27].FIS[0].FI[3].CF[0].JF;
		const intc5 = body.RWS[0].RW[27].FIS[0].FI[4].TMC.DE;
	  	const jfc5 = body.RWS[0].RW[27].FIS[0].FI[4].CF[0].JF;

	  		
		let southh= "";
		if(ppi == 0 || ppi < 4){
		southh = "South bound lane is Free flow of traffic.";
		}else if(ppi == 4 || ppi < 8){
		southh = "South bound lane is Sluggish flow of traffic.";
		}else if(ppi == 8 || ppi < 10){
		southh = "South bound lane is Slow flow of traffic.";
		}else if(ppi == 10){
		southh = "South bound lane is Traffic stopped or Road closed."
		}else{
		southh = "North compute"
		}
		let ff= "";
		if(jfc1 == 0 || jfc1 < 4){
		ff = "F. Torres St South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		ff = "F. Torres St South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		ff = "F. Torres St South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		ff = "F. Torres St South bound lane is Traffic stopped or Road closed."
		}else{
		ff = "North compute"
		}
		let ee= "";
		if(jfc3 == 0 || jfc3 < 4){
		ee = "E. Quirino Ave South bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		ee = "E. Quirino Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		ee = "E. Quirino Ave South bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		ee = "E. Quirino Ave South bound lane is Traffic stopped or Road closed."
		}else{
		ee = "North compute"
		}
		let cc= "";
		if(jfc4 == 0 || jfc4 < 4){
		cc = "C. M. Recto South bound lane is Free flow of traffic.";
		}else if(jfc4 == 4 || jfc4 < 8){
		cc = "C. M. Recto South bound lane is Sluggish flow of traffic.";
		}else if(jfc4 == 8 || jfc4 < 10){
		cc = "C. M. Recto South bound lane is Slow flow of traffic.";
		}else if(jfc4 == 10){
		cc = "C. M. Recto South bound lane is Traffic stopped or Road closed."
		}else{
		cc = "North compute"
		}
		let gg= "";
		if(jfc5 == 0 || jfc5 < 4){
		gg = "Quezon Blvd South bound lane is Free flow of traffic.";
		}else if(jfc5 == 4 || jfc5 < 8){
		gg = "Quezon Blvd South bound lane is Sluggish flow of traffic.";
		}else if(jfc5 == 8 || jfc5 < 10){
		gg = "Quezon Blvd South bound lane is Slow flow of traffic.";
		}else if(jfc5 == 10){
		gg = "Quezon Blvd South bound lane is Traffic stopped or Road closed."
		}else{
		gg = "North compute"
		}
	  		

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({south:south,ppi:ppi,intc1:intc1,jfc1:jfc1,intc3:intc3,jfc3:jfc3,intc4:intc4,jfc4:jfc4,
    	intc5:intc5,jfc5:jfc5,southh:southh,ff:ff,ee:ee,cc:cc,gg:gg}));
	
	});


});
app.get('/sanpedro',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//sanpedro north
	  	const pedro = body.RWS[0].RW[28].DE;
	  	const jf1 = body.RWS[0].RW[0].FIS[0].FI[2].CF[0].JF;
	   	const jf2 = body.RWS[0].RW[1].FIS[0].FI[2].CF[0].JF;
	   	const jf3 = body.RWS[0].RW[18].FIS[0].FI[0].CF[0].JF;
		const jf4 = body.RWS[0].RW[19].FIS[0].FI[4].CF[0].JF;
		const jf5 = body.RWS[0].RW[21].FIS[0].FI[5].CF[0].JF;
	  	const jf6 = body.RWS[0].RW[22].FIS[0].FI[0].CF[0].JF;
	  	const jf7 = body.RWS[0].RW[38].FIS[0].FI[1].CF[0].JF;
	  	var san = 7
	  	var sd = jf1 + jf2 + jf3 + jf4 + jf5 + jf6 + jf7;
	  	var san = sd/san;	
	  	//sanpedro north intersections
	  	const intc1 = body.RWS[0].RW[28].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[28].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[28].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[28].FIS[0].FI[1].CF[0].JF;
		const intc3 = body.RWS[0].RW[28].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[28].FIS[0].FI[2].CF[0].JF; 	
	  	
	  	let ssa= "";
		if(san == 0 || san < 4){
		ssa = "North bound lane is Free flow of traffic.";
		}else if(san == 4 || san < 8){
		ssa = "North bound lane is Sluggish flow of traffic.";
		}else if(san == 8 || san < 10){
		ssa = "North bound lane is Slow flow of traffic.";
		}else if(san == 10){
		ssa = "North bound lane is Traffic stopped or Road closed."
		}else{
		ssa = "North compute"
		}
		let mml= "";
		if(jfc1 == 0 || jfc1 < 4){
		mml = "M. L. Quezon Blvd/Quezon Blvd North bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		mml = "M. L. Quezon Blvd/Quezon Blvd North bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		mml = "M. L. Quezon Blvd/Quezon Blvd North bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		mml = "M. L. Quezon Blvd/Quezon Blvd North bound lane is Traffic stopped or Road closed."
		}else{
		mml = "North compute"
		}
		let ccm= "";
		if(jfc2 == 0 || jfc2 < 4){
		ccm = "C. M. Recto North bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		ccm = "C. M. Recto North bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		ccm = "C. M. Recto North bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		ccm = "C. M. Recto North bound lane is Traffic stopped or Road closed."
		}else{
		ccm = "North compute"
		}
		let eeq= "";
		if(jfc3 == 0 || jfc3 < 4){
		eeq = "E. Quirino Ave North bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		eeq = "E. Quirino Ave North bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		eeq = "E. Quirino Ave North bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		eeq = "E. Quirino Ave North bound lane is Traffic stopped or Road closed."
		}else{
		eeq = "North compute"
		}
	  		
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ pedro:pedro,san:san,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,
    		ssa:ssa,mml:mml,ccm:ccm,eeq:eeq}));
	
	});


});app.get('/torres',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//torres south
	  	const tsouth = body.RWS[0].RW[30].DE;
	  	const jf1 = body.RWS[0].RW[2].FIS[0].FI[4].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[27].FIS[0].FI[0].CF[0].JF;
		var s = 2
		var ss = jf1 + jf2;
		var fs = ss/s;
		//torres south intersections
		const intc1 = body.RWS[0].RW[30].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[30].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[30].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[30].FIS[0].FI[1].CF[0].JF;

		let tssouth= "";
		if(fs == 0 || fs < 4){
		tssouth = "South bound lane is Free flow of traffic.";
		}else if(fs == 4 || fs < 8){
		tssouth = "South bound lane is Sluggish flow of traffic.";
		}else if(fs == 8 || fs < 10){
		tssouth = "South bound lane is Slow flow of traffic.";
		}else if(fs == 10){
		tssouth = "South bound lane is Traffic stopped or Road closed."
		}else{
		tssouth = "North compute"
		}
		let tjp= "";
		if(jfc1 == 0 || jfc1 < 4){
		tjp = "J. P. Laurel Ave South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		tjp = "J. P. Laurel Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		tjp = "J. P. Laurel Ave South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		tjp = "J. P. Laurel Ave South bound lane is Traffic stopped or Road closed."
		}else{
		tjp = "North compute"
		}
		let tf= "";
		if(jfc2 == 0 || jfc2 < 4){
		tf = "Father Selga St South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		tf = "Father Selga St South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		tf = "Father Selga St South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		tf = "Father Selga St South bound lane is Traffic stopped or Road closed."
		}else{
		tf = "North compute"
		}
	  	//torres north
	  	const tnorth = body.RWS[0].RW[30].DE;
	   	const jf3 = body.RWS[0].RW[3].FIS[0].FI[1].CF[0].JF;
	   	const jf4 = body.RWS[0].RW[26].FIS[0].FI[0].CF[0].JF;
	   	var nn = jf3 + jf4;
	   	var fn = nn/s;

	   	const intcc1 = body.RWS[0].RW[32].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[32].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[32].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[32].FIS[0].FI[1].CF[0].JF;   	
	   	let tnnorth= "";
		if(fn == 0 || fn < 4){
		tnnorth = "North bound lane is Free flow of traffic.";
		}else if(fn == 4 || fn < 8){
		tnnorth = "North bound lane is Sluggish flow of traffic.";
		}else if(fn == 8 || fn < 10){
		tnnorth = "North bound lane is Slow flow of traffic.";
		}else if(fn == 10){
		tnnorth = "North bound lane is Traffic stopped or Road closed."
		}else{
		tnnorth = "North compute"
		}
		let tff= "";
		if(jfcc1 == 0 || jfcc1 < 4){
		tff = "Father Selga St North bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		tff = "Father Selga St North bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		tff = "Father Selga St North bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		tff = "Father Selga St North bound lane is Traffic stopped or Road closed."
		}else{
		tff = "North compute"
		}
		let ttjp= "";
		if(jfcc2 == 0 || jfcc2 < 4){
		ttjp = "J. P. Laurel Ave North bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		ttjp = "J. P. Laurel Ave North bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		ttjp = "J. P. Laurel Ave North bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		ttjp = "J. P. Laurel Ave North bound lane is Traffic stopped or Road closed."
		}else{
		ttjp = "North compute"
		}
	  	
	  		
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ tsouth:tsouth,fs:fs,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,tssouth:tssouth,tjp:tjp,tf:tf,   tnorth:tnorth,fn:fn,
		intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,tnnorth:tnnorth,tff:tff,ttjp:ttjp}));
	
	});


});app.get('/bonifacio',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//bonifacio south
	  	const bsouth = body.RWS[0].RW[31].DE;
	  	const jf1 = body.RWS[0].RW[21].FIS[0].FI[4].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[39].FIS[0].FI[2].CF[0].JF;
	  	var a = 2
	  	var aa = jf1 + jf2;
	  	var bs = aa/a;
	  	//bonifacio south intersections
	  	const intc1 = body.RWS[0].RW[31].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[31].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[31].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[31].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[31].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[31].FIS[0].FI[2].CF[0].JF;
	  	
	  	let bbsouth= "";
		if(jf1 == 0 || jf1 < 4){
		bbsouth = "For South bound lane is Free flow of traffic.";
		}else if(jf1 == 4 || jf1 < 8){
		bbsouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(jf1 == 8 || jf1 < 10){
		bbsouth = "For South bound lane is Slow flow of traffic.";
		}else if(jf1 == 10){
		bbsouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		bbsouth = "North compute"
		}
		let cbb= "";
		if(jfc1 == 0 || jfc1 < 4){
		cbb = "C. Bangoy South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		cbb = "C. Bangoy South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		cbb = "C. Bangoy South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		cbb = "C. Bangoy South bound lane is Traffic stopped or Road closed."
		}else{
		cbb = "North compute"
		}
		let cmm= "";
		if(jfc2 == 0 || jfc2 < 4){
		cmm = "C. M. Recto South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		cmm = "C. M. Recto South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		cmm = "C. M. Recto South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		cmm = "C. M. Recto South bound lane is Traffic stopped or Road closed."
		}else{
		cmm = "North compute"
		}
		let mll= "";
		if(jfc3 == 0 || jfc3 < 4){
		mll = "M. L. Quezon Blvd South bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		mll = "M. L. Quezon Blvd South bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		mll = "M. L. Quezon Blvd South bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		mll = "M. L. Quezon Blvd South bound lane is Traffic stopped or Road closed."
		}else{
		mll = "North compute"
		}

		//bonifacio north
		 const bnorth = body.RWS[0].RW[31].DE;
	  	 const jfcc1 = body.RWS[0].RW[22].FIS[0].FI[1].CF[0].JF;
	  	 const jfcc2 = body.RWS[0].RW[38].FIS[0].FI[2].CF[0].JF;
	  	 var bn = jfcc1 + jfcc2;
	  	 var bnn = bn/a;
	  	 //bonifacio north intersections
	  	const intcc1 = body.RWS[0].RW[33].FIS[0].FI[0].TMC.DE;
	  	const jfccc1 = body.RWS[0].RW[33].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[33].FIS[0].FI[1].TMC.DE;
	  	const jfccc2 = body.RWS[0].RW[33].FIS[0].FI[1].CF[0].JF;
	  	const intcc3 = body.RWS[0].RW[33].FIS[0].FI[2].TMC.DE;
	  	const jfccc3 = body.RWS[0].RW[33].FIS[0].FI[2].CF[0].JF;

	  	let bbnorth= "";
		if(bnn == 0 || bnn < 4){
		bbnorth = "For North bound lane is Free flow of traffic.";
		}else if(bnn == 4 || bnn < 8){
		bbnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(bnn == 8 || bnn < 10){
		bbnorth = "For North bound lane is Slow flow of traffic.";
		}else if(bnn == 10){
		bbnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		bbnorth = "North compute"
		}
		let mml= "";
		if(jfccc1 == 0 || jfccc1 < 4){
		mml = "M. L. Quezon Blvd North bound lane is Free flow of traffic.";
		}else if(jfccc1 == 4 || jfccc1 < 8){
		mml = "M. L. Quezon Blvd North bound lane is Sluggish flow of traffic.";
		}else if(jfccc1 == 8 || jfccc1 < 10){
		mml = "M. L. Quezon Blvd North bound lane is Slow flow of traffic.";
		}else if(jfccc1 == 10){
		mml = "M. L. Quezon Blvd North bound lane is Traffic stopped or Road closed."
		}else{
		mml = "North compute"
		}
		let mmcc= "";
		if(jfccc2 == 0 || jfccc2 < 4){
		mmcc = "C. M. Recto North bound lane is Free flow of traffic.";
		}else if(jfccc2 == 4 || jfccc2 < 8){
		mmcc = "C. M. Recto North bound lane is Sluggish flow of traffic.";
		}else if(jfccc2 == 8 || jfccc2 < 10){
		mmcc = "C. M. Rectoy North bound lane is Slow flow of traffic.";
		}else if(jfccc2 == 10){
		mmcc = "C. M. Recto North bound lane is Traffic stopped or Road closed."
		}else{
		mmcc = "North compute"
		}
		let ccb= "";
		if(jfccc3 == 0 || jfccc3 < 4){
		ccb = "C. Bangoy North bound lane is Free flow of traffic.";
		}else if(jfccc3 == 4 || jfccc3 < 8){
		ccb = "C. Bangoy North bound lane is Sluggish flow of traffic.";
		}else if(jfccc3 == 8 || jfccc3 < 10){
		ccb = "C. Bangoy North bound lane is Slow flow of traffic.";
		}else if(jfccc3 == 10){
		ccb = "C. Bangoy North bound lane is Traffic stopped or Road closed."
		}else{
		ccb = "North compute"
		}
	  	  		
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({bsouth:bsouth,bs:bs,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3, 
    	       bbsouth:bbsouth,cbb:cbb,cmm:cmm,mll:mll,    bnorth:bnorth,bnn:bnn,intcc1:intcc1,jfccc1:jfccc1,intcc2:intcc2,jfccc2:jfccc2,
    	       intcc3:intcc3,jfccc3:jfccc3,   bbnorth:bbnorth,mml:mml,mmcc:mmcc,ccb:ccb  }));
	
	});


});app.get('/mroxas',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//mroxas south
	  	const msouth = body.RWS[0].RW[35].DE;
		const jf1 = body.RWS[0].RW[21].FIS[0].FI[3].CF[0].JF;
		const jf2 = body.RWS[0].RW[39].FIS[0].FI[1].CF[0].JF;
		const jf3 = body.RWS[0].RW[41].FIS[0].FI[2].CF[0].JF;
		var ms = 2
		var m = jf1 + jf2 + jf3;
		var mm =m/ms;
		//mroxas south intersections
		const rrm = body.RWS[0].RW[35].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[35].FIS[0].FI[0].CF[0].JF;
	  	const cmrr = body.RWS[0].RW[35].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[35].FIS[0].FI[1].CF[0].JF;
	  	const mel = body.RWS[0].RW[35].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[35].FIS[0].FI[2].CF[0].JF;

		let mmsouth= "";
		if(mm == 0 || mm < 4){
		mmsouth = "For South bound lane is Free flow of traffic.";
		}else if(mm == 4 || mm < 8){
		mmsouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(mm == 8 || mm < 10){
		mmsouth = "For South bound lane is Slow flow of traffic.";
		}else if(mm == 10){
		mmsouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		mmsouth = "North compute"
		}
		let rmg= "";
		if(jfc1 == 0 || jfc1 < 4){
		rmg = "R. Magsaysay Ave/C. Bangoy South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		rmg = "R. Magsaysay Ave/C. Bangoy South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		rmg = "R. Magsaysay Ave/C. Bangoy South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		rmg = "R. Magsaysay Ave/C. Bangoy South bound lane is Traffic stopped or Road closed."
		}else{
		rmg = "North compute"
		}
		let cmr= "";
		if(jfc2 == 0 || jfc2 < 4){
		cmr = "C. M. Recto South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		cmr = "C. M. Recto South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		cmr = "C. M. Recto South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		cmr = "C. M. Recto South bound lane is Traffic stopped or Road closed."
		}else{
		cmr = "North compute"
		}
		let mlq= "";
		if(jfc3 == 0 || jfc3 < 4){
		mlq = "M. L. Quezon Blvd South bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		mlq = "M. L. Quezon Blvd South bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		mlq = "M. L. Quezon Blvd South bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		mlq = "M. L. Quezon Blvd South bound lane is Traffic stopped or Road closed."
		}else{
		mlq = "North compute"
		}
	  	//mroxas north
	  	const mnorth = body.RWS[0].RW[35].DE;
	  	const jf4 = body.RWS[0].RW[22].FIS[0].FI[2].CF[0].JF;
	  	const jf5 = body.RWS[0].RW[38].FIS[0].FI[3].CF[0].JF;
	  	const jf6 = body.RWS[0].RW[42].FIS[0].FI[0].CF[0].JF;
	  	var mn = jf4 + jf5 + jf6;
	  	var mmn = mn/ms;
	  	//mroxas north intersections
	  	const intc1 = body.RWS[0].RW[34].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[34].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[34].FIS[0].FI[1].TMC.DE;
	 	const jfcc2 = body.RWS[0].RW[34].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[34].FIS[0].FI[2].TMC.DE;
	  	const jfcc3 = body.RWS[0].RW[34].FIS[0].FI[2].CF[0].JF;
	  	
	  	let mmnorth= "";
		if(mmn == 0 || mmn < 4){
		mmnorth = "For North bound lane is Free flow of traffic.";
		}else if(mmn == 4 || mmn < 8){
		mmnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(mmn == 8 || mmn < 10){
		mmnorth = "For North bound lane is Slow flow of traffic.";
		}else if(mmn == 10){
		mmnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		mmnorth = "North compute"
		} 
		let llm= "";
		if(jfcc1 == 0 || jfcc1 < 4){
		llm = "M. L. Quezon Blvd North bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		llm = "M. L. Quezon Blvd North bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		llm = "M. L. Quezon Blvd North bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		llm = "M. L. Quezon Blvd North bound lane is Traffic stopped or Road closed."
		}else{
		llm = "North compute"
		} 
		let mmcs= "";
		if(jfcc2 == 0 || jfcc2 < 4){
		mmcs = "C. M. Recto North bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		mmcs = "C. M. Recto North bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		mmcs = "C. M. Recto North bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		mmcs = "C. M. Recto North bound lane is Traffic stopped or Road closed."
		}else{
		mmcs = "North compute"
		}
		let rmag= "";
		if(jfcc3 == 0 || jfcc3 < 4){
		rmag = "R. Magsaysay Ave/C. Bangoy North bound lane is Free flow of traffic.";
		}else if(jfcc3 == 4 || jfcc3 < 8){
		rmag = "R. Magsaysay Ave/C. Bangoy North bound lane is Sluggish flow of traffic.";
		}else if(jfcc3 == 8 || jfcc3 < 10){
		rmag = "R. Magsaysay Ave/C. Bangoy North bound lane is Slow flow of traffic.";
		}else if(jfcc3 == 10){
		rmag = "R. Magsaysay Ave/C. Bangoy North bound lane is Traffic stopped or Road closed."
		}else{
		rmag = "North compute"
		}   	   		
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({msouth:msouth,mm:mm,rrm:rrm,jfc1:jfc1,cmrr:cmrr,jfc2:jfc2,mel:mel,jfc3:jfc3,mmsouth:mmsouth,
    	rmg:rmg,cmr:cmr,mlq:mlq,mnorth:mnorth,mmn:mmn,intc1:intc1,jfcc1:jfcc1,intc2:intc2,jfcc2:jfcc2,intc3:intc3,jfcc3:jfcc3,     
    	mmnorth:mmnorth,llm:llm,mmcs:mmcs,rmag:rmag    }));
	
	});


});app.get('/cmrecto',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//cmrecto north 
	  	const north = body.RWS[0].RW[38].DE;
	  	const jf1 = body.RWS[0].RW[27].FIS[0].FI[3].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[28].FIS[0].FI[1].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[31].FIS[0].FI[1].CF[0].JF;
	    const jf4 = body.RWS[0].RW[33].FIS[0].FI[1].CF[0].JF;
	  	const jf5 = body.RWS[0].RW[35].FIS[0].FI[1].CF[0].JF;
	  	const jf6 = body.RWS[0].RW[34].FIS[0].FI[1].CF[0].JF;
	  	const jf7 = body.RWS[0].RW[41].FIS[0].FI[1].CF[0].JF;
	 	const jf8 = body.RWS[0].RW[42].FIS[0].FI[1].CF[0].JF;
	 	var r = 8
	 	var re = jf1 + jf2 + jf3 + jf4 + jf5 + jf6 + jf7 + jf8;
	 	var ree = re/r;
	 	//cmrecto north intersections
	 	const intc1 = body.RWS[0].RW[38].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[38].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[38].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[38].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[38].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[38].FIS[0].FI[2].CF[0].JF;
	  	const intc4 = body.RWS[0].RW[38].FIS[0].FI[3].TMC.DE;
	  	const jfc4 = body.RWS[0].RW[38].FIS[0].FI[3].CF[0].JF;
	  	const intc5 = body.RWS[0].RW[38].FIS[0].FI[4].TMC.DE;
	  	const jfc5 = body.RWS[0].RW[38].FIS[0].FI[4].CF[0].JF;

	 	let nnorth= "";
		if(ree == 0 || ree < 4){
		nnorth = "North bound lane is Free flow of traffic.";
		}else if(ree == 4 || ree < 8){
		nnorth = "North bound lane is Sluggish flow of traffic.";
		}else if(ree == 8 || ree < 10){
		nnorth = "North bound lane is Slow flow of traffic.";
		}else if(ree == 10){
		nnorth = "North bound lane is Traffic stopped or Road closed."
		}else{
		nnorth = "North compute"
		}
		let ppi= "";
		if(jfc1 == 0 || jfc1 < 4){
		ppi = "Pichon St North bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		ppi = "Pichon St North bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		ppi = "Pichon St North bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		ppi = "Pichon St North bound lane is Traffic stopped or Road closed."
		}else{
		ppi = "North compute"
		}  
		let ssn= "";
		if(jfc2 == 0 || jfc2 < 4){
		ssn = "San Pedro St North bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		ssn = "San Pedro St North bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		ssn = "San Pedro St North bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		ssn = "San Pedro St North bound lane is Traffic stopped or Road closed."
		}else{
		ssn = "North compute"
		}
		let aab= "";
		if(jfc3 == 0 || jfc3 < 4){
		aab = "A. Bonifacio St North bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		aab = "A. Bonifacio St North bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		aab = "A. Bonifacio St North bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		aab = "A. Bonifacio St North bound lane is Traffic stopped or Road closed."
		}else{
		aab = "North compute"
		}
		let mrmr= "";
		if(jfc4 == 0 || jfc4 < 4){
		mrmr = "M. Roxas North bound lane is Free flow of traffic.";
		}else if(jfc4 == 4 || jfc4 < 8){
		mrmr = "M. Roxas North bound lane is Sluggish flow of traffic.";
		}else if(jfc4 == 8 || jfc4 < 10){
		mrmr = "M. Roxas North bound lane is Slow flow of traffic.";
		}else if(jfc4 == 10){
		mrmr = "M. Roxas North bound lane is Traffic stopped or Road closed."
		}else{
		mrmr = "North compute"
		}
		let mra= "";
		if(jfc5 == 0 || jfc5 < 4){
		mra = "R. Magsaysay Ave North bound lane is Free flow of traffic.";
		}else if(jfc5 == 4 || jfc5 < 8){
		mra = "R. Magsaysay Ave North bound lane is Sluggish flow of traffic.";
		}else if(jfc5 == 8 || jfc5 < 10){
		mra = "R. Magsaysay Ave North bound lane is Slow flow of traffic.";
		}else if(jfc5 == 10){
		mra = "R. Magsaysay Ave North bound lane is Traffic stopped or Road closed."
		}else{
		mra = "North compute"
		}      	

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({north:north,ree:ree,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,intc4:intc4,
    	jfc4:jfc4,intc5:intc5,jfc5:jfc5,         nnorth:nnorth,ppi:ppi,ssn:ssn,aab:aab,mrmr:mrmr,mra:mra }));
	
	});


});app.get('/cbangoy',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//cbangoy south
	  	const csouth = body.RWS[0].RW[39].DE;
	  	 const jf1 = body.RWS[0].RW[0].FIS[0].FI[3].CF[0].JF;
	   	 const jf2 = body.RWS[0].RW[31].FIS[0].FI[0].CF[0].JF;
	 	 const jf3 = body.RWS[0].RW[35].FIS[0].FI[0].CF[0].JF;
	 	 const jf4 = body.RWS[0].RW[41].FIS[0].FI[2].CF[0].JF;
		var c = 4
		var cc = jf1 + jf2 + jf3 + jf4;
		var sc = cc/c;
		//cbangoy south intersections
		const intc1 = body.RWS[0].RW[39].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[39].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[39].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[39].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[39].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[39].FIS[0].FI[2].CF[0].JF;
		let ccsouth= "";
		if(sc == 0 || sc < 4){
		ccsouth = "For South bound lane is Free flow of traffic.";
		}else if(sc == 4 || sc < 8){
		ccsouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(sc == 8 || sc < 10){
		ccsouth = "For South bound lane is Slow flow of traffic.";
		}else if(sc == 10){
		ccsouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		ccsouth = "North compute"
		} 
		let eqq= "";
		if(jfc1 == 0 || jfc1 < 4){
		eqq = "E. Quirino Ave South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		eqq = "E. Quirino Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		eqq = "E. Quirino Ave South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		eqq = "E. Quirino Ave South bound lane is Traffic stopped or Road closed."
		}else{
		eqq = "North compute"
		} 
		let mmrrr= "";
		if(jfc2 == 0 || jfc2 < 4){
		mmrrr = "M. Roxas/R. Magsaysay Ave South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		mmrrr = "M. Roxas/R. Magsaysay Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		mmrrr = "M. Roxas/R. Magsaysay Ave South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		mmrrr = "M. Roxas/R. Magsaysay Ave South bound lane is Traffic stopped or Road closed."
		}else{
		mmrrr = "North compute"
		}
		let abo= "";
		if(jfc3 == 0 || jfc3 < 4){
		abo = "A. Bonifacio St South bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		abo = "A. Bonifacio St South bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		abo = "A. Bonifacio St South bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		abo = "A. Bonifacio St South bound lane is Traffic stopped or Road closed."
		}else{
		abo = "North compute"
		}           	 
	  	//cbangoy north
	  	const cnorth = body.RWS[0].RW[39].DE;
	  	const jf01 = body.RWS[0].RW[1].FIS[0].FI[1].CF[0].JF;
	  	const jf02 = body.RWS[0].RW[33].FIS[0].FI[2].CF[0].JF;
	  	const jf03 = body.RWS[0].RW[34].FIS[0].FI[2].CF[0].JF;
	  	const jf04 = body.RWS[0].RW[42].FIS[0].FI[0].CF[0].JF;
	  	var c2 = jf01 + jf02 + jf03 + jf04;
	  	var cc2 = c2/c;

	  	//bangoy north intersections
	  	const intcc1 = body.RWS[0].RW[40].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[40].FIS[0].FI[0].CF[0].JF;
	  	
	  	let ccnorth= "";
		if(cc2 == 0 || cc2 < 4){
		ccnorth = "For North bound lane is Free flow of traffic.";
		}else if(cc2 == 4 || cc2 < 8){
		ccnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(cc2 == 8 || cc2 < 10){
		ccnorth = "For North bound lane is Slow flow of traffic.";
		}else if(cc2 == 10){
		ccnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		ccnorth = "North compute"
		}
		let eqq1= "";
		if(jfcc1 == 0 || jfcc1 < 4){
		eqq1 = "E. Quirino Ave North bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		eqq1 = "E. Quirino Ave North bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		eqq1 = "E. Quirino Ave North bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		eqq1 = "E. Quirino Ave North bound lane is Traffic stopped or Road closed."
		}else{
		eqq1 = "North compute"
		}   

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({csouth:csouth,sc:sc,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,     
    		ccsouth:ccsouth,eqq:eqq,mmrrr:mmrrr, abo:abo,       
    		cnorth:cnorth,cc2:cc2,intcc1:intcc1,jfcc1:jfcc1,      ccnorth:ccnorth,eqq1:eqq1}));
	
	});


});app.get('/rmagg',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//rmag south
	  	const rsouth = body.RWS[0].RW[41].DE;
	  	const jf1 = body.RWS[0].RW[21].FIS[0].FI[2].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[35].FIS[0].FI[0].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[36].FIS[0].FI[1].CF[0].JF;
		var so = 3
		var sr = jf1 + jf2 + jf3;
		var srr = sr/so;
		//rmag south intersections
		const intc1 = body.RWS[0].RW[41].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[41].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[41].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[41].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[41].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[41].FIS[0].FI[2].CF[0].JF;

		let rssouth= "";
		if(srr == 0 || srr < 4){
		rssouth = "For South bound lane is Free flow of traffic.";
		}else if(srr == 4 || srr < 8){
		rssouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(srr == 8 || srr < 10){
		rssouth = "For South bound lane is Slow flow of traffic.";
		}else if(srr == 10){
		rssouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		rssouth = "North compute"
		} 
		let mell= "";
		if(jfc1 == 0 || jfc1 < 4){
		mell = "M. L. Quezon Blvd South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		mell = "M. L. Quezon Blvd South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		mell = "M. L. Quezon Blvd South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		mell = "M. L. Quezon Blvd South bound lane is Traffic stopped or Road closed."
		}else{
		mell = "North compute"
		}
		let cem= "";
		if(jfc2 == 0 || jfc2 < 4){
		cem = "C. M. Recto/J. P. Laurel Ave South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		cem = "C. M. Recto/J. P. Laurel Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		cem = "C. M. Recto/J. P. Laurel Ave South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		cem = "C. M. Recto/J. P. Laurel Ave South bound lane is Traffic stopped or Road closed."
		}else{
		cem = "North compute"
		}
		let cbe= "";
		if(jfc3 == 0 || jfc3 < 4){
		cbe = "C. Bangoy/M. Roxas South bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		cbe = "C. Bangoy/M. Roxas South bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		cbe = "C. Bangoy/M. Roxas South bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		cbe = "C. Bangoy/M. Roxas South bound lane is Traffic stopped or Road closed."
		}else{
		cbe = "North compute"
		}       
     	//rmag north
     	const rnorth = body.RWS[0].RW[41].DE;
	  	const jf01 = body.RWS[0].RW[22].FIS[0].FI[3].CF[0].JF;
	  	const jf02 = body.RWS[0].RW[34].FIS[0].FI[2].CF[0].JF;
	  	const jf03 = body.RWS[0].RW[37].FIS[0].FI[0].CF[0].JF;
	  	const jf04 = body.RWS[0].RW[38].FIS[0].FI[4].CF[0].JF;
	  	var nn = 4
	  	var nno = jf01 + jf02 + jf03 + jf04;
	  	var noo = nno/nn;
	  	//rmagsaysay north intersections
	  	const intcc1 = body.RWS[0].RW[42].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[42].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[42].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[42].FIS[0].FI[1].CF[0].JF;
	  	const intcc3 = body.RWS[0].RW[42].FIS[0].FI[2].TMC.DE;
	  	const jfcc3 = body.RWS[0].RW[42].FIS[0].FI[2].CF[0].JF;

	  	let rnnorth= "";
		if(noo == 0 || noo < 4){
		rnnorth = "For North bound lane is Free flow of traffic.";
		}else if(noo == 4 || noo < 8){
		rnnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(noo == 8 || noo < 10){
		rnnorth = "For North bound lane is Slow flow of traffic.";
		}else if(noo == 10){
		rnnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		rnnorth = "North compute"
		}
		let cba= "";
		if(jfcc1 == 0 || jfcc1 < 4){
		cba = "C. Bangoy/M. Roxas South bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		cba = "C. Bangoy/M. Roxas South bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		cba = "C. Bangoy/M. Roxas South bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		cba = "C. Bangoy/M. Roxas South bound lane is Traffic stopped or Road closed."
		}else{
		cba = "North compute"
		}   
		let cemr= "";
		if(jfcc2 == 0 || jfcc2 < 4){
		cemr = "C. M. Recto/J. P. Laurel Ave South bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		cemr = "C. M. Recto/J. P. Laurel Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		cemr = "C. M. Recto/J. P. Laurel Ave South bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		cemr = "C. M. Recto/J. P. Laurel Ave South bound lane is Traffic stopped or Road closed."
		}else{
		cemr = "North compute"
		}
		let mel1= "";
		if(jfcc3 == 0 || jfcc3 < 4){
		mel1 = "M. L. Quezon Blvd South bound lane is Free flow of traffic.";
		}else if(jfcc3 == 4 || jfcc3 < 8){
		mel1 = "M. L. Quezon Blvd South bound lane is Sluggish flow of traffic.";
		}else if(jfcc3 == 8 || jfcc3 < 10){
		mel1 = "M. L. Quezon Blvd South bound lane is Slow flow of traffic.";
		}else if(jfcc3 == 10){
		mel1 = "M. L. Quezon Blvd South bound lane is Traffic stopped or Road closed."
		}else{
		mel1 = "North compute"
		}

	  
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({rsouth:rsouth,srr:srr,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,     
    		    rssouth:rssouth,mell:mell,cem:cem,cbe:cbe,      
    		rnorth:rnorth,noo:noo,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,intcc3:intcc3,jfcc3:jfcc3,      
    		rnnorth:rnnorth,cba:cba,cemr:cemr,mel1:mel1     }));
	
	});


});app.get('/sta',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//sta south 
	  	const Ssout = body.RWS[0].RW[44].DE;
	  	const jf1 = body.RWS[0].RW[36].FIS[0].FI[0].CF[0].JF;
	  	const jf2= body.RWS[0].RW[21].FIS[0].FI[1].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[2].FIS[0].FI[5].CF[0].JF;
		const jf4 = body.RWS[0].RW[45].FIS[0].FI[1].CF[0].JF;
		var s = 4
		var st = jf1 + jf2 + jf3 + jf4;
		var sst = st/s;	
		//sta south intersections
		const intc1 = body.RWS[0].RW[43].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[43].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[43].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[43].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[43].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[43].FIS[0].FI[2].CF[0].JF;
		let ssouth= "";
		if(sst == 0 || sst < 4){
		ssouth = "For South bound lane is Free flow of traffic.";
		}else if(sst == 4 || sst < 8){
		ssouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(sst == 8 || sst < 10){
		ssouth = "For South bound lane is Slow flow of traffic.";
		}else if(sst == 10){
		ssouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		ssouth = "North compute"
		}
		let lg= "";
		if(jfc1 == 0 || jfc1 < 4){
		lg = "L. Garcia South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		lg = "L. Garcia South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		lg = "L. Garcia South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		lg = "L. Garcia South bound lane is Traffic stopped or Road closed."
		}else{
		lg = "North compute"
		}
		let laplp= "";
		if(jfc2 == 0 || jfc2 < 4){
		laplp = "Lapu-Lapu South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		laplp = "Lapu-Lapu South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		laplp = "Lapu-Lapu South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		laplp = "Lapu-Lapu South bound lane is Traffic stopped or Road closed."
		}else{
		laplp = "North compute"
		}
		let jepjp= "";
		if(jfc3 == 0 || jfc3 < 4){
		jepjp = "J. P. Laurel Ave South bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		jepjp = "J. P. Laurel Aveu South bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		jepjp = "J. P. Laurel Ave South bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		jepjp = "J. P. Laurel Ave South bound lane is Traffic stopped or Road closed."
		}else{
		jepjp = "North compute"
		}
	  	//sta north
	    const Nnorth = body.RWS[0].RW[44].DE;
	  	const jf5 = body.RWS[0].RW[37].FIS[0].FI[1].CF[0].JF;
		const jf6 = body.RWS[0].RW[22].FIS[0].FI[4].CF[0].JF;
		const jf7 = body.RWS[0].RW[3].FIS[0].FI[0].CF[0].JF;	
		const jf8 = body.RWS[0].RW[47].FIS[0].FI[0].CF[0].JF;
		var nt = jf5 + jf6 + jf7 + jf8;
		var nnt = nt/s;
		//sta north interections
		const intcc1 = body.RWS[0].RW[44].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[44].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[44].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[44].FIS[0].FI[1].CF[0].JF;
	  	const intcc3 = body.RWS[0].RW[44].FIS[0].FI[2].TMC.DE;
	  	const jfcc3 = body.RWS[0].RW[44].FIS[0].FI[2].CF[0].JF;
		let ssnorth= "";
		if(nnt == 0 || nnt < 4){
		ssnorth = "For North bound lane is Free flow of traffic.";
		}else if(nnt == 4 || nnt < 8){
		ssnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(nnt == 8 || nnt < 10){
		ssnorth = "For North bound lane is Slow flow of traffic.";
		}else if(nnt == 10){
		ssnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		ssnorth = "North compute"
		}
		let jepjpp= "";
		if(jfcc1 == 0 || jfcc1 < 4){
		jepjpp = "J. P. Laurel Ave North bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		jepjpp = "J. P. Laurel Ave North bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		jepjpp = "J. P. Laurel Ave North bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		jepjpp = "J. P. Laurel Ave North bound lane is Traffic stopped or Road closed."
		}else{
		jepjpp = "North compute"
		}
		let lapu= "";
		if(jfcc2 == 0 || jfcc2 < 4){
		lapu = "Lapu-Lapu North bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		lapu = "Lapu-Lapu North bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		lapu = "Lapu-Lapu North bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		lapu = "Lapu-Lapu North bound lane is Traffic stopped or Road closed."
		}else{
		lapu = "North compute"
		}
		let lepu= "";
		if(jfcc3 == 0 || jfcc3 < 4){
		lepu = "L. Garcia North bound lane is Free flow of traffic.";
		}else if(jfcc3 == 4 || jfcc3 < 8){
		lepu = "L. Garcia North bound lane is Sluggish flow of traffic.";
		}else if(jfcc3 == 8 || jfcc3 < 10){
		lepu = "L. Garcia North bound lane is Slow flow of traffic.";
		}else if(jfcc3 == 10){
		lepu = "L. Garcia North bound lane is Traffic stopped or Road closed."
		}else{
		lepu = "North compute"
		}
	  
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({Ssout:Ssout,sst:sst,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,   
    		ssouth:ssouth,lg:lg,laplp:laplp,jepjp:jepjp,         
    		Nnorth:Nnorth,nnt:nnt,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,intcc3:intcc3,jfcc3:jfcc3,        
    		ssnorth:ssnorth,jepjpp:jepjpp,lapu:lapu,lepu:lepu}));
	
	});


});app.get('/lapulapu',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	 //laplapu south
	  	 const slapu = body.RWS[0].RW[45].DE;
	  	 const jf1 = body.RWS[0].RW[20].FIS[0].FI[1].CF[0].JF;
	  	 const jf2 = body.RWS[0].RW[21].FIS[0].FI[0].CF[0].JF; 
	  	 const jf3 = body.RWS[0].RW[24].FIS[0].FI[1].CF[0].JF;
	  	 const jf4 = body.RWS[0].RW[43].FIS[0].FI[1].CF[0].JF;
	  	 const jf5 = body.RWS[0].RW[46].FIS[0].FI[1].CF[0].JF;
	  	 var sn = 5
	  	 var snn = jf1 + jf2 + jf3 + jf4 + jf5;
	  	 var ssl = snn/sn;
	  	  //laplapu south interections
	  	const intc1 = body.RWS[0].RW[45].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[45].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[45].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[45].FIS[0].FI[1].CF[0].JF;

	  	let lsouth= "";
		if(jf1 == 0 || jf1 < 4){
		lsouth = "For South bound lane is Free flow of traffic.";
		}else if(jf1 == 4 || jf1 < 8){
		lsouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(jf1 == 8 || jf1 < 10){
		lsouth = "For South bound lane is Slow flow of traffic.";
		}else if(jf1 == 10){
		lsouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		lsouth = "North compute"
		}
		let dac= "";
		if(jfc1 == 0 || jfc1 < 4){
		dac = "Dacudao/L. Garcia/Agdao Flyover South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		dac = "Dacudao/L. Garcia/Agdao Flyover South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		dac = "Dacudao/L. Garcia/Agdao Flyover South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		dac = "Dacudao/L. Garcia/Agdao Flyover South bound lane is Traffic stopped or Road closed."
		}else{
		dac = "North compute"
		}
		let ta= "";
		if(jfc2 == 0 || jfc2 < 4){
		ta = "Sta. Ana Ave South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		ta = "Sta. Ana Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		ta = "Sta. Ana Ave South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		ta = "Sta. Ana Ave South bound lane is Traffic stopped or Road closed."
		}else{
		ta = "North compute"
		}
	  	 //laplapue north
	  	 const nlapu = body.RWS[0].RW[45].DE;
	  	 const jf6= body.RWS[0].RW[23].FIS[0].FI[0].CF[0].JF;
	  	 const jf7 = body.RWS[0].RW[22].FIS[0].FI[5].CF[0].JF;
  		 const jf8 = body.RWS[0].RW[25].FIS[0].FI[0].CF[0].JF;
  		 const jf9 = body.RWS[0].RW[44].FIS[0].FI[1].CF[0].JF; 
  		 const jf10 = body.RWS[0].RW[48].FIS[0].FI[1].CF[0].JF;
  		 var nss = jf6 + jf7 + jf8 + jf9 + jf10;
  		 var nns = nss/sn;
  		//lapulapu north intersections
  		const intcc1 = body.RWS[0].RW[47].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[47].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[47].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[47].FIS[0].FI[1].CF[0].JF;

  		let lnorth= "";
		if(nns == 0 || nns < 4){
		lnorth = "For North bound lane is Free flow of traffic.";
		}else if(nns == 4 || nns < 8){
		lnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(nns == 8 || nns < 10){
		lnorth = "For North bound lane is Slow flow of traffic.";
		}else if(nns == 10){
		lnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		lnorth = "North compute"
		}
		let tta= "";
		if(jfcc1 == 0 || jfcc1 < 4){
		tta = "Sta. Ana Ave North bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		tta = "Sta. Ana Ave North bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		tta = "Sta. Ana Ave North bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		tta = "Sta. Ana Ave North bound lane is Traffic stopped or Road closed."
		}else{
		tta = "North compute"
		}
		let df = "";
		if(jfcc2 == 0 || jfcc2 < 4){
		df = "Dacudao/L. Garcia/Agdao Flyover North bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		df = "Dacudao/L. Garcia/Agdao Flyover North bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		df = "Dacudao/L. Garcia/Agdao Flyover North bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		df = "Dacudao/L. Garcia/Agdao Flyover North bound lane is Traffic stopped or Road closed."
		}else{
		df = "North compute"
		}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({slapu:slapu,ssl:ssl,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,      
    		lsouth:lsouth,dac:dac,ta:ta,nlapu:nlapu,nns:nns,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,
    		lnorth:lnorth,tta:tta,df:df}));
	
	});


});app.get('/agadofly',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	 //agdao south
	  	 const as = body.RWS[0].RW[48].DE;
	  	 const jf1 = body.RWS[0].RW[24].FIS[0].FI[1].CF[0].JF;
	  	 const jf2 = body.RWS[0].RW[45].FIS[0].FI[0].CF[0].JF;	
	  	 const jf3 = body.RWS[0].RW[49].FIS[0].FI[2].CF[0].JF;
	  	 var f = 3
	  	 var fly = jf1 + jf2 + jf3;
	  	 var flyo = fly/f;
	  	 //agdao south intersections
	  	const intc1 = body.RWS[0].RW[46].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[46].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[46].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[46].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[46].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[46].FIS[0].FI[2].CF[0].JF;

	  	let asouth = "";
		if(flyo == 0 || flyo < 4){
		asouth = "For South bound lane is Free flow of traffic.";
		}else if(flyo == 4 || flyo < 8){
		asouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(flyo == 8 || flyo < 10){
		asouth = "For South bound lane is Slow flow of traffic.";
		}else if(flyo == 10){
		asouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		asouth = "North compute"
		}
		let llg = "";
		if(jfc1 == 0 || jfc1 < 4){
		llg = "L. Garcia (North) South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		llg = "L. Garcia (North) South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		llg = "L. Garcia (North) South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		llg = "L. Garcia (North) South bound lane is Traffic stopped or Road closed."
		}else{
		llg = "North compute"
		}
		let lgd = "";
		if(jfc2 == 0 || jfc2 < 4){
		lgd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		lgd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		lgd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		lgd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Traffic stopped or Road closed."
		}else{
		lgd = "North compute"
		}
		let lgs = "";
		if(jfc3 == 0 || jfc3 < 4){
		lgs = "L. Garcia (South) South bound lane is Free flow of traffic.";
		}else if(jfc3 == 4 || jfc3 < 8){
		lgs = "L. Garcia (South) South bound lane is Sluggish flow of traffic.";
		}else if(jfc3 == 8 || jfc3 < 10){
		lgs = "L. Garcia (South) South bound lane is Slow flow of traffic.";
		}else if(jfc3 == 10){
		lgs = "L. Garcia (South) South bound lane is Traffic stopped or Road closed."
		}else{
		lgs = "North compute"
		}
	  	 //agdao north
	  	  const an = body.RWS[0].RW[48].DE;
	  	 const jf4 = body.RWS[0].RW[25].FIS[0].FI[0].CF[0].JF;
	  	 const jf5 = body.RWS[0].RW[47].FIS[0].FI[1].CF[0].JF;
	  	 const jf6 = body.RWS[0].RW[50].FIS[0].FI[0].CF[0].JF;
	  	 var flov = jf4 + jf5 + jf6;
	  	 var flyove = flov/f;
	  	//agdao north intersections
	  	const intcc1 = body.RWS[0].RW[48].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[48].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[48].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[48].FIS[0].FI[1].CF[0].JF;
	  	const intcc3 = body.RWS[0].RW[48].FIS[0].FI[2].TMC.DE;
	  	const jfcc3 = body.RWS[0].RW[48].FIS[0].FI[2].CF[0].JF;

	  	let anorth = "";
		if(jfcc2 == 0 || jfcc2 < 4){
		anorth = "For North bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		anorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		anorth = "For North bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		anorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		anorth = "North compute"
		}
		let llgs = "";
		if(jfcc1 == 0 || jfcc1 < 4){
		llgs = "L. Garcia (South) South bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		llgs = "L. Garcia (South) South bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		llgs = "L. Garcia (South) South bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		llgs = "L. Garcia (South) South bound lane is Traffic stopped or Road closed."
		}else{
		llgs = "North compute"
		}
		let lgdd = "";
		if(jfcc2 == 0 || jfcc2 < 4){
		lgdd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		lgdd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		lgdd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		lgdd = "Lapu-Lapu/L. Garcia/R. Castillo/Dacudao South bound lane is Traffic stopped or Road closed."
		}else{
		lgdd = "North compute"
		}
		let lllg = "";
		if(jfcc3 == 0 || jfcc3 < 4){
		lllg = "L. Garcia (North) South bound lane is Free flow of traffic.";
		}else if(jfcc3 == 4 || jfcc3 < 8){
		lllg = "L. Garcia (North) South bound lane is Sluggish flow of traffic.";
		}else if(jfcc3 == 8 || jfcc3 < 10){
		lllg = "L. Garcia (North) South bound lane is Slow flow of traffic.";
		}else if(jfcc3 == 10){
		lllg = "L. Garcia (North) South bound lane is Traffic stopped or Road closed."
		}else{
		lllg = "North compute"
		}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({as:as,flyo:flyo,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,
    	 asouth:asouth,llg:llg,lgd,lgd,lgs:lgs,             
    	 an:an,flyove:flyove,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,intcc3:intcc3,jfcc3:jfcc3,
    	 anorth:anorth,llgs:llgs,lgdd:lgdd,lllg:lllg    }));
	
	});


});app.get('/rcastillo',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	 //rcastillo south
	  	const rsouth = body.RWS[0].RW[49].DE; 
	  	const jf1 = body.RWS[0].RW[2].FIS[0].FI[0].CF[0].JF;
		const jf2 = body.RWS[0].RW[20].FIS[0].FI[1].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[21].FIS[0].FI[0].CF[0].JF;
	 	const jf4 = body.RWS[0].RW[24].FIS[0].FI[1].CF[0].JF;
	  	const jf5 = body.RWS[0].RW[46].FIS[0].FI[1].CF[0].JF;
		var r = 5
		var sr = jf1 + jf2 + jf3 + jf4 + jf5;
		var srr = sr/r;	
		//rcastillo south intersections
		const intc1 = body.RWS[0].RW[49].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[49].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[49].FIS[0].FI[2].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[49].FIS[0].FI[2].CF[0].JF;
		let rrsouth = "";
		if(srr == 0 || srr < 4){
		rrsouth = "For South bound lane is Free flow of traffic.";
		}else if(srr == 4 || srr < 8){
		rrsouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(srr == 8 || srr < 10){
		rrsouth = "For South bound lane is Slow flow of traffic.";
		}else if(srr == 10){
		rrsouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		rrsouth = "North compute"
		}
		let jep = "";
		if(jfc1 == 0 || jfc1 < 4){
		jep = "J. P. Laurel Ave South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		jep = "J. P. Laurel Ave South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		jep = "J. P. Laurel Ave South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		jep = "J. P. Laurel Ave South bound lane is Traffic stopped or Road closed."
		}else{
		jep = "North compute"
		}
		let agg = "";
		if(jfc2 == 0 || jfc2 < 4){
		agg = "Agdao Flyover/L. Garcia/Dacudao South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		agg = "Agdao Flyover/L. Garcia/Dacudao South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		agg = "Agdao Flyover/L. Garcia/Dacudao South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		agg = "Agdao Flyover/L. Garcia/Dacudao South bound lane is Traffic stopped or Road closed."
		}else{
		agg = "North compute"
		}
	  	 //rcastillo north
	  	 const rnorth = body.RWS[0].RW[49].DE; 
	  	 const jf6 = body.RWS[0].RW[3].FIS[0].FI[5].CF[0].JF;	
	  	 const jf7 = body.RWS[0].RW[23].FIS[0].FI[0].CF[0].JF;
	  	 const jf8 = body.RWS[0].RW[22].FIS[0].FI[5].CF[0].JF;
	  	 const jf9 = body.RWS[0].RW[25].FIS[0].FI[0].CF[0].JF;
	  	 const jf10 = body.RWS[0].RW[48].FIS[0].FI[1].CF[0].JF;
	  	 var nr = jf6 + jf7 + jf8 + jf9 + jf10;
	  	 var nrr = nr/r;
	  	 //rcastillo north
	  	const intcc1 = body.RWS[0].RW[50].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[50].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[50].FIS[0].FI[2].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[50].FIS[0].FI[2].CF[0].JF;
	  	let rrnorth = "";
		if(nrr == 0 || nrr < 4){
		rrnorth = "For North bound lane is Free flow of traffic.";
		}else if(nrr == 4 || nrr < 8){
		rrnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(nrr == 8 || nrr < 10){
		rrnorth = "For North bound lane is Slow flow of traffic.";
		}else if(nrr == 10){
		rrnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		rrnorth = "North compute"
		}
		let aggg = "";
		if(jfcc1 == 0 || jfcc1 < 4){
		aggg = "Agdao Flyover/L. Garcia/Dacudao North bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		aggg = "Agdao Flyover/L. Garcia/Dacudao North bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		aggg = "Agdao Flyover/L. Garcia/Dacudao North bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		aggg = "Agdao Flyover/L. Garcia/Dacudao North bound lane is Traffic stopped or Road closed."
		}else{
		aggg = "North compute"
		}
		let jepp = "";
		if(jfcc2 == 0 || jfcc2 < 4){
		jepp = "J. P. Laurel Ave North bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		jepp = "J. P. Laurel Ave North bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		jepp = "J. P. Laurel Ave North bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		jepp = "J. P. Laurel Ave North bound lane is Traffic stopped or Road closed."
		}else{
		jepp = "North compute"
		}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({rsouth:rsouth,srr:srr,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,rrsouth:rrsouth,jep:jep,agg:agg, 
    	 rnorth:rnorth,nrr:nrr,intcc1:intcc1,jfc1:jfc1,intcc2:intcc2,jfc2:jfc2,rrnorth:rrnorth,aggg:aggg,jepp:jepp      }));
	
	});


});
app.get('/garcia',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	 //garcia south
	  	const gsouth = body.RWS[0].RW[54].DE;
	  	const jf1 = body.RWS[0].RW[56].FIS[0].FI[0].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[57].FIS[0].FI[0].CF[0].JF;
		const jf3 = body.RWS[0].RW[63].FIS[0].FI[1].CF[0].JF;
	 	const jf4 = body.RWS[0].RW[64].FIS[0].FI[1].CF[0].JF;
	 	const jf5 = body.RWS[0].RW[76].FIS[0].FI[2].CF[0].JF;
	 	var g = 5
	 	var sg = jf1 + jf2 + jf3 + jf4 + jf5;
	 	var ssg = sg/g;
	 	//garcia south itersections
		const intc1 = body.RWS[0].RW[51].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[51].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[51].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[51].FIS[0].FI[1].CF[0].JF;

	 	let ggsouth = "";
		if(ssg == 0 || ssg < 4){
		ggsouth = "For South bound lane is Free flow of traffic.";
		}else if(ssg == 4 || ssg < 8){
		ggsouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(ssg == 8 || ssg < 10){
		ggsouth = "For South bound lane is Slow flow of traffic.";
		}else if(ssg == 10){
		ggsouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		ggsouth = "North compute"
		}
		let dm = "";
		if(jfc1 == 0 || jfc1 < 4){
		dm = "Daang Maharlika South bound lane is Free flow of traffic.";
		}else if(jfc1 == 4 || jfc1 < 8){
		dm = "Daang Maharlika South bound lane is Sluggish flow of traffic.";
		}else if(jfc1 == 8 || jfc1 < 10){
		dm = "Daang Maharlika South bound lane is Slow flow of traffic.";
		}else if(jfc1 == 10){
		dm = "Daang Maharlika South bound lane is Traffic stopped or Road closed."
		}else{
		dm = "North compute"
		}
		let al = "";
		if(jfc2 == 0 || jfc2 < 4){
		al = "Angliongto South bound lane is Free flow of traffic.";
		}else if(jfc2 == 4 || jfc2 < 8){
		al = "Angliongto South bound lane is Sluggish flow of traffic.";
		}else if(jfc2 == 8 || jfc2 < 10){
		al = "Angliongto South bound lane is Slow flow of traffic.";
		}else if(jfc2 == 10){
		al = "Angliongto South bound lane is Traffic stopped or Road closed."
		}else{
		al = "North compute"
		}

  	  //garcia north
  	  	const gnorth = body.RWS[0].RW[54].DE;
	  	const jf6 = body.RWS[0].RW[55].FIS[0].FI[1].CF[0].JF;
	  	const jf7 = body.RWS[0].RW[58].FIS[0].FI[1].CF[0].JF;
	  	const jf8 = body.RWS[0].RW[66].FIS[0].FI[1].CF[0].JF;
	  	const jf9= body.RWS[0].RW[67].FIS[0].FI[0].CF[0].JF;
	  	const jf10 = body.RWS[0].RW[78].FIS[0].FI[1].CF[0].JF;
	  	var ng = jf6 + jf7 + jf8 + jf9 + jf10;
	  	var ngg = ng/g;
	  	//garcia north intersections
	  	const intcc1 = body.RWS[0].RW[54].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[54].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[54].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[54].FIS[0].FI[1].CF[0].JF;
	  	let ggnorth = "";
		if(ngg == 0 || ngg < 4){
		ggnorth = "For North bound lane is Free flow of traffic.";
		}else if(ngg == 4 || ngg < 8){
		ggnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(ngg == 8 || ngg < 10){
		ggnorth = "For North bound lane is Slow flow of traffic.";
		}else if(ngg == 10){
		ggnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		ggnorth = "North compute"
		}
		 let all = "";
		if(jfcc1 == 0 || jfcc1 < 4){
		all = "Angliongto North bound lane is Free flow of traffic.";
		}else if(jfcc1 == 4 || jfcc1 < 8){
		all = "Angliongto North bound lane is Sluggish flow of traffic.";
		}else if(jfcc1 == 8 || jfcc1 < 10){
		all = "Angliongto North bound lane is Slow flow of traffic.";
		}else if(jfcc1 == 10){
		all = "Angliongto North bound lane is Traffic stopped or Road closed."
		}else{
		all = "North compute"
		}
		 let dmm = "";
		if(jfcc2 == 0 || jfcc2 < 4){
		dmm = "Daang Maharlika North bound lane is Free flow of traffic.";
		}else if(jfcc2 == 4 || jfcc2 < 8){
		dmm = "Daang Maharlika North bound lane is Sluggish flow of traffic.";
		}else if(jfcc2 == 8 || jfcc2 < 10){
		dmm = "Daang Maharlika North bound lane is Slow flow of traffic.";
		}else if(jfcc2 == 10){
		dmm = "Daang Maharlika North bound lane is Traffic stopped or Road closed."
		}else{
		dmm = "North compute"
		}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({gsouth:gsouth,ssg:ssg,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,ggsouth:ggsouth,dm:dm,al:al,
    	 gnorth:gnorth,ngg:ngg,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,ngg:ngg,ggnorth:ggnorth,all:all,dmm:dmm }));
	
	});


});
app.get('/diversion',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	 //diversion south
	  	const dsouth = body.RWS[0].RW[52].DE;
	  	const jf1 = body.RWS[0].RW[4].FIS[0].FI[8].CF[0].JF;
		const jf2 = body.RWS[0].RW[56].FIS[0].FI[0].CF[0].JF;
	  	const jf3 = body.RWS[0].RW[57].FIS[0].FI[0].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[61].FIS[0].FI[0].CF[0].JF;
	  	const jf5 = body.RWS[0].RW[63].FIS[0].FI[1].CF[0].JF;
	  	const jf6 = body.RWS[0].RW[64].FIS[0].FI[1].CF[0].JF;
	  	var d = 6
	  	var dd = jf1 + jf2 + jf3 + jf4 + jf5 + jf6;
	  	var sdd = dd/d;
	  	//diversion road intersectiosn
	 	 const intc1 = body.RWS[0].RW[52].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[52].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[52].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[52].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[52].FIS[0].FI[3].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[52].FIS[0].FI[3].CF[0].JF;
	  	const intc4 = body.RWS[0].RW[52].FIS[0].FI[4].TMC.DE;
	  	const jfc4 = body.RWS[0].RW[52].FIS[0].FI[4].CF[0].JF;
	  	const intc5 = body.RWS[0].RW[52].FIS[0].FI[5].TMC.DE;
	  	const jfc5 = body.RWS[0].RW[52].FIS[0].FI[5].CF[0].JF;
	  	const intc6 = body.RWS[0].RW[52].FIS[0].FI[6].TMC.DE;
	  	const jfc6 = body.RWS[0].RW[52].FIS[0].FI[6].CF[0].JF;

		let ddsouth = "";
		if(sdd == 0 || sdd < 4){
		ddsouth = "For South bound lane is Free flow of traffic.";
		}else if(sdd == 4 || sdd < 8){
		ddsouth = "For South bound lane is Sluggish flow of traffic.";
		}else if(sdd == 8 || sdd < 10){
		ddsouth = "For South bound lane is Slow flow of traffic.";
		}else if(sdd == 10){
		ddsouth = "For South bound lane is Traffic stopped or Road closed."
		}else{
		ddsouth = "North compute"
		} 
		let angli = "";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		angli = "Angliongto: Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		angli = "Angliongto: Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		angli = "Angliongto: Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		angli = "Angliongto: Traffic stopped or Road closed"
	  	}else{
	  		angli = "Cannot compute"
	  	}

	  	let mquu = "";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		mquu = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd South bound lane Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		mquu = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd South bound lane Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		mquu = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd South bound lane Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		mquu = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd South bound lane Traffic stopped or Road closed"
	  	}else{
	  		mquu = "Cannot compute"
	  	}
	  	let jrro = "";
	  	if(jfc3 == 0 || jfc3 < 4){
	  		jrro = "J. Rodriguez Ma-A South bound lane Free flow of traffic";
	  	}else if(jfc3 == 4 || jfc3 < 8){
	  		jrro = "J. Rodriguez Ma-A South bound lane Sluggish flow of traffic";
	  	}else if(jfc3 == 8 || jfc3 < 10){
	  		jrro = "J. Rodriguez Ma-A South bound lane Slow flow of traffic";
	  	}else if(jfc3 == 10){
	  		jrro = "J. Rodriguez Ma-A South bound lane Traffic stopped or Road closed"
	  	}else{
	  		jrro = "Cannot compute"
	  	}

	  	let sssh = "";
	  	if(jfc4 == 0 || jfc4 < 4){
	  		sssh = "Shrine Hills Rd/S Cuyugan South bound lane Free flow of traffic";
	  	}else if(jfc4 == 4 || jfc4 < 8){
	  		sssh = "Shrine Hills Rd/S Cuyugan South bound lane Sluggish flow of traffic";
	  	}else if(jfc4 == 8 || jfc4 < 10){
	  		sssh = "Shrine Hills Rd/S Cuyugan South bound lane Slow flow of traffic";
	  	}else if(jfc4 == 10){
	  		sssh = "Shrine Hills Rd/S Cuyugan South bound lane Traffic stopped or Road closed"
	  	}else{
	  		sssh = "Cannot compute"
	  	}

	  	let matii = "";
	  	if(jfc5 == 0 || jfc5 < 4){
	  		matii = "Matina Pangi South bound lane Free flow of traffic";
	  	}else if(jfc5 == 4 || jfc5 < 8){
	  		matii = "Matina Pangi South bound lane Sluggish flow of traffic";
	  	}else if(jfc5 == 8 || jfc5 < 10){
	  		matii = "Matina Pangi South bound lane  Slow flow of traffic";
	  	}else if(jfc5 == 10){
	  		matii = "Matina Pangi South bound lane Traffic stopped or Road closed"
	  	}else{
	  		matii = "Cannot compute"
	  	}

	  	let art = "";
	  	if(jfc6 == 0 || jfc6 < 4){
	  		art = "Mac Arthur Hwy/Mac Arthur South bound lane Free flow of traffic";
	  	}else if(jfc6 == 4 || jfc6 < 8){
	  		art = "Mac Arthur Hwy/Mac Arthur South bound lane Sluggish flow of traffic";
	  	}else if(jfc6 == 8 || jfc6 < 10){
	  		art = "Mac Arthur Hwy/Mac Arthur South bound lane Slow flow of traffic";
	  	}else if(jfc6 == 10){
	  		art = "Mac Arthur Hwy/Mac Arthur South bound lane Traffic stopped or Road closed"
	  	}else{
	  		art = "Cannot compute"
	  	}


	  	 //diversion north
	  	const dnorth = body.RWS[0].RW[52].DE;
	  	const jf7 = body.RWS[0].RW[5].FIS[0].FI[5].CF[0].JF;
	  	const jf8 = body.RWS[0].RW[55].FIS[0].FI[1].CF[0].JF;
	  	const jf9 = body.RWS[0].RW[58].FIS[0].FI[1].CF[0].JF;
	  	const jf10 = body.RWS[0].RW[62].FIS[0].FI[1].CF[0].JF;
	  	const jf11 = body.RWS[0].RW[66].FIS[0].FI[1].CF[0].JF;
 		const jf12= body.RWS[0].RW[67].FIS[0].FI[0].CF[0].JF;
 		var di = jf7 + jf8 + jf9 + jf10 + jf11 + jf12;
 		var ddi = di/d;
 		//diversion north intersections
 		const intcc1 = body.RWS[0].RW[53].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[53].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[53].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[53].FIS[0].FI[1].CF[0].JF;
	  	const intcc3 = body.RWS[0].RW[53].FIS[0].FI[2].TMC.DE;
	  	const jfcc3 = body.RWS[0].RW[53].FIS[0].FI[2].CF[0].JF;
	  	const intcc4 = body.RWS[0].RW[53].FIS[0].FI[3].TMC.DE;
	  	const jfcc4 = body.RWS[0].RW[53].FIS[0].FI[3].CF[0].JF;
	  	const intcc5 = body.RWS[0].RW[53].FIS[0].FI[5].TMC.DE;
	    const jfcc5 = body.RWS[0].RW[53].FIS[0].FI[5].CF[0].JF;
	  	const intcc6 = body.RWS[0].RW[53].FIS[0].FI[6].TMC.DE;
	  	const jfcc6 = body.RWS[0].RW[53].FIS[0].FI[6].CF[0].JF;

 		let ddnorth = "";
		if(ddi == 0 || ddi < 4){
		ddnorth = "For North bound lane is Free flow of traffic.";
		}else if(ddi == 4 || ddi < 8){
		ddnorth = "For North bound lane is Sluggish flow of traffic.";
		}else if(ddi == 8 || ddi < 10){
		ddnorth = "For North bound lane is Slow flow of traffic.";
		}else if(ddi == 10){
		ddnorth = "For North bound lane is Traffic stopped or Road closed."
		}else{
		ddnorth = "North compute"
		} 
		let meca = "";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		meca = "Mac Arthur Hwy/Mac Arthur North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		meca = "Mac Arthur Hwy/Mac Arthur North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		meca = "Mac Arthur Hwy/Mac Arthur North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		meca = "Mac Arthur Hwy/Mac Arthur North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		meca = "Cannot compute"
	  	}
	  	let mate = "";
	  	if(jfcc2 == 0 || jfcc2 < 4){
	  		mate = "Matina Pangi North bound lane is Free flow of traffic";
	  	}else if(jfcc2 == 4 || jfcc2 < 8){
	  		mate = "Matina Pangi North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc2 == 8 || jfcc2 < 10){
	  		mate = "Matina Pangi North bound lane is Slow flow of traffic";
	  	}else if(jfcc2 == 10){
	  		mate = "Matina Pangi North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mate = "Cannot compute"
	  	}
	  	let ssh = "";
	  	if(jfcc3 == 0 || jfcc3 < 4){
	  		ssh = "Shrine Hills Rd/S Cuyugan North bound lane is Free flow of traffic";
	  	}else if(jfcc3 == 4 || jfcc3 < 8){
	  		ssh = "Shrine Hills Rd/S Cuyugan North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc3 == 8 || jfcc3 < 10){
	  		ssh = "Shrine Hills Rd/S Cuyugan North bound lane is Slow flow of traffic";
	  	}else if(jfcc3 == 10){
	  		ssh = "Shrine Hills Rd/S Cuyugan North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ssh = "Cannot compute"
	  	}
	  	let jr = "";
	  	if(jfcc4 == 0 || jfcc4 < 4){
	  		jr = "J. Rodriguez Ma-A North bound lane is Free flow of traffic";
	  	}else if(jfcc4 == 4 || jfcc4 < 8){
	  		jr = "J. Rodriguez Ma-A North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc4 == 8 || jfcc4 < 10){
	  		jr = "SJ. Rodriguez Ma-A North bound lane is Slow flow of traffic";
	  	}else if(jfcc4 == 10){
	  		jr = "J. Rodriguez Ma-A North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		jr = "Cannot compute"
	  	}
	  	let quei = "";
	  	if(jfcc5 == 0 || jfcc5 < 4){
	  		quei = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd North bound lane is Free flow of traffic";
	  	}else if(jfcc5 == 4 || jfcc5 < 8){
	  		quei = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc5 == 8 || jfcc5 < 10){
	  		quei = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd North bound lane is Slow flow of traffic";
	  	}else if(jfcc5 == 10){
	  		quei = "M. Quinones Rd/Dacudao Ave/Buhangin-Cabantian Rd North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		quei = "Cannot compute"
	  	}
	  	let angle = "";
	  	if(jfcc6 == 0 || jfcc6 < 4){
	  		angle = "Angliongto North bound lane is Free flow of traffic";
	  	}else if(jfcc6 == 4 || jfcc6 < 8){
	  		angle = "Angliongto North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc6 == 8 || jfcc6 < 10){
	  		angle = "Angliongto North bound lane is Slow flow of traffic";
	  	}else if(jfcc6 == 10){
	  		angle = "Angliongto North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		angle = "Cannot compute"
	  	}
	 	

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({dsouth:dsouth,sdd:sdd,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,
    	intc4:intc4,jfc4:jfc4,intc5:intc5,jfc5:jfc5,intc6:intc6,jfc6:jfc6,ddsouth:ddsouth,angli:angli,mquu:mquu,jrro:jrro,sssh:sssh,matii:matii,art:art,
    		dnorth:dnorth,ddi:ddi,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,intcc3:intcc3,jfcc3:jfcc3,
    	intcc4:intcc4,jfcc4:jfcc4,intcc5:intcc5,jfcc5:jfcc5,intcc6:intcc6,jfcc6:jfcc6,    ddnorth:ddnorth,     
    	meca:meca,mate:mate,ssh:ssh,jr:jr,quei:quei,        angle:angle}));
	
	});


});app.get('/quenones',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	 //quenones south
	  	const qqsouth = body.RWS[0].RW[55].DE;
		const jf1 = body.RWS[0].RW[52].FIS[0].FI[1].CF[0].JF;
	  	let qsouth = "";
	  	if(jf1 == 0 || jf1 < 4){
	  		qsouth = "For South bound lane is Free flow of traffic";
	  	}else if(jf1 == 4 || jf1 < 8){
	  		qsouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(jf1 == 8 || jf1 < 10){
	  		qsouth = "For South bound lane is Slow flow of traffic";
	  	}else if(jf1 == 10){
	  		qsouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		qsouth = "Cannot compute"
	  	}
	  	//quenones south intersections
	  	const intc1 = body.RWS[0].RW[56].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[56].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[56].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[56].FIS[0].FI[1].CF[0].JF;
	  	let quo = "";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		quo = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		quo = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		quo = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		quo = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		quo = "Cannot compute"
	  	}
	  	let jppe = "";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		jppe = "J. P. Laurel Ave South bound lane is Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		jppe = "J. P. Laurel Ave South bound lane is Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		jppe = "J. P. Laurel Ave South bound lane is Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		jppe = "J. P. Laurel Ave South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		jppe = "Cannot compute"
	  	}
	  	// quenones north
	  	const qqnorth = body.RWS[0].RW[55].DE;
	  	const jf2 = body.RWS[0].RW[53].FIS[0].FI[5].CF[0].JF;
	  	//quenones north intersections
	  	const intcc1 = body.RWS[0].RW[55].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[55].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[55].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[55].FIS[0].FI[1].CF[0].JF;

	  	let qnorth = "";
	  	if(jf2 == 0 || jf2 < 4){
	  		qnorth = "For North bound lane is Free flow of traffic";
	  	}else if(jf2 == 4 || jf2 < 8){
	  		qnorth = "For North bound lane is Sluggish flow of traffic";
	  	}else if(jf2 == 8 || jf2 < 10){
	  		qnorth = "For North bound lane is Slow flow of traffic";
	  	}else if(jf2 == 10){
	  		qnorth = "For North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		qnorth = "Cannot compute"
	  	}
	  	let ave = "";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		ave = "J. P. Laurel Ave North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		ave = "J. P. Laurel Ave North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		ave = "J. P. Laurel Ave North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		ave = "J. P. Laurel Ave North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ave = "Cannot compute"
	  	}
	  	let avee = "";
	  	if(jfcc2 == 0 || jfcc2 < 4){
	  		avee = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West North bound lane is Free flow of traffic";
	  	}else if(jfcc2 == 4 || jfcc2 < 8){
	  		avee = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc2 == 8 || jfcc2 < 10){
	  		avee = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West North bound lane is Slow flow of traffic";
	  	}else if(jfcc2 == 10){
	  		avee = "C. P. Garcia/Diversion Rd/C. P. Garcia East/C. P. Garcia West North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		avee = "Cannot compute"
	  	}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({qqsouth:qqsouth,jf1:jf1,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,qsouth:qsouth,quo:quo,jppe:jppe,
    	qqnorth:qqnorth,jf2:jf2,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,qnorth:qnorth,ave:ave,avee:avee }));
	
	});


});
app.get('/rodri',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	 //rodri south
	  	 const jsouth = body.RWS[0].RW[57].DE;
	  	const jf02 = body.RWS[0].RW[52].FIS[0].FI[1].CF[0].JF;
		let jssouth = "";
	  	if(jf02 == 0 || jf02 < 4){
	  		jssouth = "For South bound lane is Free flow of traffic";
	  	}else if(jf02 == 4 || jf02 < 8){
	  		jssouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(jf02 == 8 || jf02 < 10){
	  		jssouth = "For South bound lane is Slow flow of traffic";
	  	}else if(jf02 == 10){
	  		jssouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		jssouth = "Cannot compute"
	  	}
	  	//rodri south intersections
	  	const intc1 = body.RWS[0].RW[57].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[57].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[57].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[57].FIS[0].FI[1].CF[0].JF;
	  	let divver = "";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		divver = "Diversion Rd/C. P. Garcia South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		divver = "Diversion Rd/C. P. Garcia South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		divver = "Diversion Rd/C. P. Garcia South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		divver = "Diversion Rd/C. P. Garcia South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		divver = "Cannot compute"
	  	}  	
	  	let nnar = "";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		nnar = "Narra St/Ma-A Rd South bound lane is Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		nnar = "Narra St/Ma-A Rd South bound lane is Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		nnar = "Narra St/Ma-A Rd South bound lane is Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		nnar = "Narra St/Ma-A Rd South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		nnar = "Cannot compute"
	  	}  	

	  	//rodri north
	  	 const jnorth = body.RWS[0].RW[57].DE;
  		const jf005 = body.RWS[0].RW[53].FIS[0].FI[5].CF[0].JF;
  		//rodri north intersections
  		const intcc1 = body.RWS[0].RW[58].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[58].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[58].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[58].FIS[0].FI[1].CF[0].JF;

  		let jnnorth = "";
	  	if(jf005 == 0 || jf005 < 4){
	  		jnnorth = "For North bound lane is Free flow of traffic";
	  	}else if(jf005 == 4 || jf005 < 8){
	  		jnnorth = "For North bound lane is Sluggish flow of traffic";
	  	}else if(jf005 == 8 || jf005 < 10){
	  		jnnorth = "For North bound lane is Slow flow of traffic";
	  	}else if(jf005 == 10){
	  		jnnorth = "For North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		jnnorth = "Cannot compute"
	  	}
	  	let nnarr = "";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		nnarr = "Narra St/Ma-A Rd North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		nnarr = "Narra St/Ma-A Rd North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		nnarr = "Narra St/Ma-A Rd North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		nnarr = "Narra St/Ma-A Rd North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		nnarr = "Cannot compute"
	  	}  
	  		let divverr = "";
	  	if(jfcc2 == 0 || jfcc2 < 4){
	  		divverr = "Diversion Rd/C. P. Garcia North bound lane is Free flow of traffic";
	  	}else if(jfcc2 == 4 || jfcc2 < 8){
	  		divverr = "Diversion Rd/C. P. Garcia North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc2 == 8 || jfcc2 < 10){
	  		divverr = "Diversion Rd/C. P. Garcia North bound lane is Slow flow of traffic";
	  	}else if(jfcc2 == 10){
	  		divverr = "Diversion Rd/C. P. Garcia North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		divverr = "Cannot compute"
	  	} 	


	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({jsouth:jsouth,jf02:jf02,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,jssouth:jssouth,divver:divver,nnar:nnar,
    		jnorth:jnorth,jf005:jf005,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,jnnorth:jnnorth,nnarr:nnarr,divverr:divverr}));
	
	});


});
app.get('/maa',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//maa south intersections
	  	const msouth = body.RWS[0].RW[59].DE;
	  	const jf1 = body.RWS[0].RW[4].FIS[0].FI[3].CF[0].JF;
		const jf2 = body.RWS[0].RW[57].FIS[0].FI[1].CF[0].JF;
	  	var m = 2
	  	var sm = jf1 + jf2;
	  	var ssm = sm/m;
	  	//maa south intersections
	 	const intc1 = body.RWS[0].RW[59].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[59].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[59].FIS[0].FI[2].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[59].FIS[0].FI[2].CF[0].JF;

	  	let mmsouth = "";
	  	if(ssm == 0 || ssm < 4){
	  		mmsouth = "For South bound lane is Free flow of traffic";
	  	}else if(ssm == 4 || ssm < 8){
	  		mmsouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(ssm == 8 || ssm < 10){
	  		mmsouth = "For South bound lane is Slow flow of traffic";
	  	}else if(ssm == 10){
	  		mmsouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mmsouth = "Cannot compute"
	  	} 	 
	  	let  nare = "";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		nare = "Narra St South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		nare = "Narra St South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		nare = "Narra St South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		nare = "Narra St South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		nare = "Cannot compute"
	  	} 	
	  	let  mec = "";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		mec = "Mac Arthur Hwy South bound lane is Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		mec = "Mac Arthur Hwy South bound lane is Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		mec = "Mac Arthur Hwy South bound lane is Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		mec = "Mac Arthur Hwy South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mec = "Cannot compute"
	  	} 	
	  	//maa north intersections
	  	const mnorth = body.RWS[0].RW[59].DE;
	  	const jf3 = body.RWS[0].RW[5].FIS[0].FI[10].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[58].FIS[0].FI[0].CF[0].JF;
	  	var mm = 2
	  	var smm = jf3 + jf4;
	  	var sssm = smm/mm;
	  	//maa north intersections
	  	const intcc1 = body.RWS[0].RW[60].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[60].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[60].FIS[0].FI[2].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[60].FIS[0].FI[2].CF[0].JF;

	  	let mmnorth = "";
	  	if(sssm == 0 || sssm < 4){
	  		mmnorth = "For North bound lane is Free flow of traffic";
	  	}else if(sssm == 4 || sssm < 8){
	  		mmnorth = "For North bound lane is Sluggish flow of traffic";
	  	}else if(sssm == 8 || sssm < 10){
	  		mmnorth = "For North bound lane is Slow flow of traffic";
	  	}else if(sssm == 10){
	  		mmnorth = "For North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mmnorth = "Cannot compute"
	  	} 
	  	let  mecc = "";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		mecc = "Mac Arthur Hwy South bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		mecc = "Mac Arthur Hwy South bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		mecc = "Mac Arthur Hwy South bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		mecc = "Mac Arthur Hwy South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mecc = "Cannot compute"
	  	} 	
	  	let  narer = "";
	  	if(jfcc2 == 0 || jfcc2 < 4){
	  		narer = "Narra St South bound lane is Free flow of traffic";
	  	}else if(jfcc2 == 4 || jfcc2 < 8){
	  		narer = "Narra St South bound lane is Sluggish flow of traffic";
	  	}else if(jfcc2 == 8 || jfcc2 < 10){
	  		narer = "Narra St South bound lane is Slow flow of traffic";
	  	}else if(jfcc2 == 10){
	  		narer = "Narra St South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		narer = "Cannot compute"
	  	} 	
	  


	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({msouth:msouth,ssm:ssm,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,mmsouth:mmsouth,nare:nare,mec:mec,
    	  mnorth:mnorth,sssm:sssm,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,mmnorth:mmnorth,mecc:mecc,narer:narer }));
	
	});


});
app.get('/shrine',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//shrine south
	  	const ssouth = body.RWS[0].RW[61].DE;
	  	const jf1 = body.RWS[0].RW[4].FIS[0].FI[5].CF[0].JF;
		const jf2 = body.RWS[0].RW[52].FIS[0].FI[4].CF[0].JF;
	  	var s = 2;
	  	var ss = jf1 + jf2;
	  	var sss = ss/s;
	  	//shrine south intersections	
	  	const intc1 = body.RWS[0].RW[61].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[61].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[61].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[61].FIS[0].FI[1].CF[0].JF;

	  	let  sssouth = "";
	  	if(sss == 0 || sss < 4){
	  		sssouth = "For South bound lane is Free flow of traffic";
	  	}else if(sss == 4 || sss < 8){
	  		sssouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(sss == 8 || sss < 10){
	  		sssouth = "For South bound lane is Slow flow of traffic";
	  	}else if(sss == 10){
	  		sssouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mec = "Cannot compute"
	  	}
	  	let ddev = "";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		ddev = "Diversion Rd South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		ddev = "Diversion Rd South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		ddev = "Diversion Rd South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		ddev = "Diversion Rd South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ddev = "Cannot compute"
	  	}
	  	let mmec = "";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		mmec = "Mac Arthur Hwy South bound lane is Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		mmec = "Mac Arthur Hwy South bound lane is Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		mmec = "Mac Arthur Hwy South bound lane is Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		mmec = "Mac Arthur Hwy South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mmec = "Cannot compute"
	  	}

	  	//shrine north
	  	const ssnorth = body.RWS[0].RW[61].DE;
	  	const jf3 = body.RWS[0].RW[5].FIS[0].FI[8].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[53].FIS[0].FI[2].CF[0].JF;
	  	var nn = jf1 + jf2;
	  	var nnn = nn/s;
	  	//shrine north intersections
	  	const intcc1 = body.RWS[0].RW[62].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[62].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[62].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[62].FIS[0].FI[1].CF[0].JF;
		let  sssnorth= "";
	  	if(nnn == 0 || nnn < 4){
	  		sssnorth = "For North bound lane is Free flow of traffic";
	  	}else if(nnn == 4 || nnn < 8){
	  		sssnorth = "For North bound lane is Sluggish flow of traffic";
	  	}else if(nnn == 8 || nnn < 10){
	  		sssnorth = "For North bound lane is Slow flow of traffic";
	  	}else if(nnn == 10){
	  		sssnorth = "For North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		sssnorth = "Cannot compute"
	  	}
	  	let  mmmec= "";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		mmmec = "Mac Arthur Hwy North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		mmmec = "Mac Arthur Hwy North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		mmmec = "Mac Arthur Hwy North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		mmmec = "Mac Arthur Hwy North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mmmec = "Cannot compute"
	  	}
	  	let  dddev= "";
	  	if(jfcc2 == 0 || jfcc2 < 4){
	  		dddev = "Diversion Rd North bound lane is Free flow of traffic";
	  	}else if(jfcc2 == 4 || jfcc2 < 8){
	  		dddev = "Diversion Rd North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc2 == 8 || jfcc2 < 10){
	  		dddev = "Diversion Rd North bound lane is Slow flow of traffic";
	  	}else if(jfcc2 == 10){
	  		dddev = "Diversion Rd North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		dddev = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ssouth:ssouth,sss:sss,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,sssouth:sssouth,ddev:ddev,mmec:mmec,
    	 ssnorth:ssnorth,nnn:nnn,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,sssnorth:sssnorth,mmmec:mmmec,dddev:dddev}));
	
	});


});app.get('/angg',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//angliongto south
	  	const asouth = body.RWS[0].RW[66].DE;
	  	const jf1 = body.RWS[0].RW[2].FIS[0].FI[1].CF[0].JF;
		const jf2 = body.RWS[0].RW[51].FIS[0].FI[1].CF[0].JF;	
		const jf3 = body.RWS[0].RW[52].FIS[0].FI[0].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[65].FIS[0].FI[0].CF[0].JF;
	  	const jf5 = body.RWS[0].RW[69].FIS[0].FI[1].CF[0].JF;	
	  	var a = 5
	  	var aa = jf1 + jf2 + jf3 + jf4 + jf5;
	  	var aaa = aa/a;
	  	//angliongto south intersections
	  	const intc1 = body.RWS[0].RW[63].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[63].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[63].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[63].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[63].FIS[0].FI[2].TMC.DE;
	  	const jfc3 = body.RWS[0].RW[63].FIS[0].FI[2].CF[0].JF;

	  	let  aasouth= "";
	  	if(aaa == 0 || aaa < 4){
	  		aasouth = "For South bound lane is Free flow of traffic";
	  	}else if(aaa == 4 || aaa < 8){
	  		aasouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(aaa == 8 || aaa < 10){
	  		aasouth = "For South bound lane is Slow flow of traffic";
	  	}else if(aaa == 10){
	  		aasouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		aasouth = "Cannot compute"
	  	} 	
	  	let  ssai= "";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		ssai = "Saint Anthony Subd/Cabantian Rd South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		ssai = "Saint Anthony Subd/Cabantian Rd South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		ssai = "Saint Anthony Subd/Cabantian Rd South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		ssai = "Saint Anthony Subd/Cabantian Rd South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ssai = "Cannot compute"
	  	} 
	    let  dede= "";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		dede = "Diversion Rd/C. P. Garcia South bound lane is Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		dede = "Diversion Rd/C. P. Garcia South bound lane is Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		dede = "Diversion Rd/C. P. Garcia South bound lane is Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		dede = "Diversion Rd/C. P. Garcia South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		dede = "Cannot compute"
	  	} 	
	  	 let  jeje= "";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		jeje = "J. P. Laurel Ave South bound lane is Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		jeje = "J. P. Laurel Ave South bound lane is Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		jeje = "J. P. Laurel Ave South bound lane is Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		jeje = "J. P. Laurel Ave South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		jeje = "Cannot compute"
	  	} 	
	  	//angliongto north
	  	const anorth = body.RWS[0].RW[66].DE;
	  	const jf6 = body.RWS[0].RW[54].FIS[0].FI[0].CF[0].JF;
	  	const jf7 = body.RWS[0].RW[53].FIS[0].FI[6].CF[0].JF;
	  	const jf8 = body.RWS[0].RW[3].FIS[0].FI[4].CF[0].JF;
	  	const jf9 = body.RWS[0].RW[68].FIS[0].FI[1].CF[0].JF;
	   const jf10 = body.RWS[0].RW[70].FIS[0].FI[0].CF[0].JF;
	   //angliogto north intersectiosn
	  	 const intcc1 = body.RWS[0].RW[66].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[66].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[66].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[66].FIS[0].FI[1].CF[0].JF;
	  	const intcc3 = body.RWS[0].RW[66].FIS[0].FI[2].TMC.DE;
	  	const jfcc3 = body.RWS[0].RW[66].FIS[0].FI[2].CF[0].JF;

	  	var naa = jf6 + jf7 + jf8 + jf9 + jf10;
	  	var naaa = naa/a; 	
	  	let  aanorth= "";
	  	if(naaa == 0 || naaa < 4){
	  		aanorth = "For North bound lane is Free flow of traffic";
	  	}else if(naaa == 4 || naaa < 8){
	  		aanorth = "For North bound lane is Sluggish flow of traffic";
	  	}else if(naaa == 8 || naaa < 10){
	  		aanorth = "For North bound lane is Slow flow of traffic";
	  	}else if(naaa == 10){
	  		aanorth = "For North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		aanorth = "Cannot compute"
	  	} 	
	  	 let  jejeje = "";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		jejeje = "J. P. Laurel Ave North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		jejeje = "J. P. Laurel Ave North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		jejeje = "J. P. Laurel Ave North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		jejeje = "J. P. Laurel Ave North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		jejeje = "Cannot compute"
	  	} 	
	  	 let  dedede= "";
	  	if(jfcc2 == 0 || jfcc2 < 4){
	  		dedede = "Diversion Rd/C. P. Garcia North bound lane is Free flow of traffic";
	  	}else if(jfcc2 == 4 || jfcc2 < 8){
	  		dedede = "Diversion Rd/C. P. Garcia North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc2 == 8 || jfcc2 < 10){
	  		dedede = "Diversion Rd/C. P. Garcia North bound lane is Slow flow of traffic";
	  	}else if(jfcc2 == 10){
	  		dedede = "Diversion Rd/C. P. Garcia North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		dedede = "Cannot compute"
	  	} 
	  	let  ssaia= "";
	  	if(jfcc3 == 0 || jfcc3 < 4){
	  		ssaia = "Saint Anthony Subd/Cabantian Rd North bound lane is Free flow of traffic";
	  	}else if(jfcc3 == 4 || jfcc3 < 8){
	  		ssaia = "Saint Anthony Subd/Cabantian Rd North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc3 == 8 || jfcc3 < 10){
	  		ssaia = "Saint Anthony Subd/Cabantian Rd North bound lane is Slow flow of traffic";
	  	}else if(jfcc3 == 10){
	  		ssaia = "Saint Anthony Subd/Cabantian Rd North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ssaia = "Cannot compute"
	  	} 	

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({asouth:asouth,aaa:aaa,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,intc3:intc3,jfc3:jfc3,
    		aasouth:aasouth,ssai:ssai,dede:dede,jeje:jeje,
    	  anorth:anorth,naaa:naaa,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,intcc3:intcc3,jfcc3:jfcc3,       
    	  aanorth:aanorth,jejeje:jejeje,dedede:dedede,ssaia:ssaia  }));
	
	});


});app.get('/buhangin',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//buhangin south
	  	const bsouth = body.RWS[0].RW[64].DE;
	  	const jf1 = body.RWS[0].RW[2].FIS[0].FI[3].CF[0].JF;
		const jf2 = body.RWS[0].RW[52].FIS[0].FI[1].CF[0].JF;
		var b = 2
		var sb = jf1 + jf2;
		var ssb = sb/b;
		//buhangin south intersections
		const intc1 = body.RWS[0].RW[64].FIS[0].FI[1].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[64].FIS[0].FI[1].CF[0].JF;

		let  bbsouth= "";
	  	if(ssb == 0 || ssb < 4){
	  		bbsouth = "For South bound lane is Free flow of traffic";
	  	}else if(ssb == 4 || ssb < 8){
	  		bbsouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(ssb == 8 || ssb < 10){
	  		bbsouth = "For South bound lane is Slow flow of traffic";
	  	}else if(ssb == 10){
	  		bbsouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		bbsouth = "Cannot compute"
	  	} 
	  	let  ccp= "";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		ccp = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		ccp = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		ccp = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		ccp = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ccp = "Cannot compute"
	  	} 	

	  	//buhangin north
	  	const bnorth = body.RWS[0].RW[64].DE;
	  	const jf3 = body.RWS[0].RW[3].FIS[0].FI[2].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[53].FIS[0].FI[5].CF[0].JF;
	  	var nb = jf1 + jf2;
		var nnb = nb/b;
		//buhangin north intersections
		const intcc1 = body.RWS[0].RW[67].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[67].FIS[0].FI[0].CF[0].JF;

		let  bbnorth = "";
	  	if(nnb == 0 || nnb < 4){
	  		bbnorth = "For North bound lane is Free flow of traffic";
	  	}else if(nnb == 4 || nnb < 8){
	  		bbnorth = "For North bound lane is Sluggish flow of traffic";
	  	}else if(nnb == 8 || nnb < 10){
	  		bbnorth = "For North bound lane is Slow flow of traffic";
	  	}else if(nnb == 10){
	  		bbnorth = "For North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		bbnorth = "Cannot compute"
	  	} 	
	  	let  ddevs  ="";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		ddevs = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		ddevs = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		ddevs = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		ddevs = "Diversion Rd/C. P. Garcia/C. P. Garcia East/C. P. Garcia West North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ddevs = "Cannot compute"
	  	} 	


	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({bsouth:bsouth,ssb:ssb,intc1:intc1,jfc1:jfc1,bbsouth:bbsouth,ccp:ccp,
    	  bnorth:bnorth,nnb:nnb,intcc1:intcc1,jfcc1:jfcc1,bbnorth:bbnorth,ddevs:ddevs}));
	
	});


});app.get('/cabantian',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//cabantian south
	   const ccsouth = body.RWS[0].RW[69].DE;
	  	const jf1 = body.RWS[0].RW[52].FIS[0].FI[1].CF[0].JF;
	  	const jf2 = body.RWS[0].RW[63].FIS[0].FI[0].CF[0].JF;
	  	var to = 2
	  	var c = jf1 + jf2;
	  	var cc = c/to;
	  	//cabantian south intersections
	  	const intc1 = body.RWS[0].RW[69].FIS[0].FI[1].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[69].FIS[0].FI[1].CF[0].JF;

	  	let  ccssouth  ="";
	  	if(cc == 0 || cc < 4){
	  		ccssouth = "For South bound lane is Free flow of traffic";
	  	}else if(cc == 4 || cc < 8){
	  		ccssouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(cc == 8 || cc < 10){
	  		ccssouth = "For South bound lane is Slow flow of traffic";
	  	}else if(cc == 10){
	  		ccssouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ccssouth = "Cannot compute"
	  	} 	
	  	let  aale  ="";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		aale = "Angliongto South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		aale = "Angliongto South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		aale = "Angliongto South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		aale = "Angliongto South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		aale = "Cannot compute"
	  	} 	
	  	//buhangin north
	  	  const ccnorth = body.RWS[0].RW[69].DE;
	  	const jf3 = body.RWS[0].RW[53].FIS[0].FI[5].CF[0].JF;
	  	const jf4 = body.RWS[0].RW[66].FIS[0].FI[2].CF[0].JF;
	  	var cp = jf3 + jf4;
	  	var ccp = cp/to;
	  	//cabatian north intersections
	  		const intcc1 = body.RWS[0].RW[70].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[70].FIS[0].FI[0].CF[0].JF;
	  	
	  	let  ccsnorth  ="";
	  	if(ccp == 0 || ccp < 4){
	  		ccsnorth = "For South bound lane is Free flow of traffic";
	  	}else if(cc == 4 || ccp < 8){
	  		ccsnorth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(ccp == 8 || ccp < 10){
	  		ccsnorth = "For South bound lane is Slow flow of traffic";
	  	}else if(ccp == 10){
	  		ccsnorth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ccsnorth = "Cannot compute"
	  	} 
	  	let  aalle  ="";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		aalle = "Angliongto North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		aalle = "Angliongto North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		aalle = "Angliongto North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		aalle = "Angliongto North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		aalle = "Cannot compute"
	  	} 

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ccsouth:ccsouth,cc:cc,intc1:intc1,jfc1:jfc1,ccssouth:ccssouth,aale:aale,
    	  ccnorth:ccnorth,ccp:ccp,intcc1:intcc1,jfcc1:jfcc1,ccsnorth:ccsnorth,aalle:aalle  }));  
	
	});


});
app.get('/bukidnon',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  
	  	//bukidnon south
	  	const bsouth = body.RWS[0].RW[73].DE;
		const jf1= body.RWS[0].RW[4].FIS[0].FI[10].CF[0].JF;
		//bukidnon south intersection
		const intc1 = body.RWS[0].RW[73].FIS[0].FI[0].TMC.DE;
	  	const jfc1 = body.RWS[0].RW[73].FIS[0].FI[0].CF[0].JF;
	  	const intc2 = body.RWS[0].RW[73].FIS[0].FI[1].TMC.DE;
	  	const jfc2 = body.RWS[0].RW[73].FIS[0].FI[1].CF[0].JF;	

		let  bbsouth  ="";
	  	if(jf1 == 0 || jf1 < 4){
	  		bbsouth = "For South bound lane is Free flow of traffic";
	  	}else if(jf1 == 4 || jf1 < 8){
	  		bbsouth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(jf1 == 8 || jf1 < 10){
	  		bbsouth = "For South bound lane is Slow flow of traffic";
	  	}else if(jf1 == 10){
	  		bbsouth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		bbsouth = "Cannot compute"
	  	} 
	  	let  qua  ="";
	  	if(jfc1 == 0 || jfc1 < 4){
	  		qua = "Quary St South bound lane is Free flow of traffic";
	  	}else if(jfc1 == 4 || jfc1 < 8){
	  		qua = "Quary St South bound lane is Sluggish flow of traffic";
	  	}else if(jfc1 == 8 || jfc1 < 10){
	  		qua = "Quary St South bound lane is Slow flow of traffic";
	  	}else if(jfc1 == 10){
	  		qua = "Quary St South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		qua = "Cannot compute"
	  	}
	  	let  ma  ="";
	  	if(jfc2 == 0 || jfc2 < 4){
	  		ma = "Mac Arthur South bound lane is Free flow of traffic";
	  	}else if(jfc2 == 4 || jfc2 < 8){
	  		ma = "Mac Arthur South bound lane is Sluggish flow of traffic";
	  	}else if(jfc2 == 8 || jfc2 < 10){
	  		ma = "Mac Arthur South bound lane is Slow flow of traffic";
	  	}else if(jfc2 == 10){
	  		ma = "Mac Arthur South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		ma = "Cannot compute"
	  	}  
	  	//bukidnon north
	  	const bnorth = body.RWS[0].RW[73].DE;
	  	const jf2  = body.RWS[0].RW[5].FIS[0].FI[3].CF[0].JF;
	  	//bukidnon north intersections
	  	const intcc1 = body.RWS[0].RW[74].FIS[0].FI[0].TMC.DE;
	  	const jfcc1 = body.RWS[0].RW[74].FIS[0].FI[0].CF[0].JF;
	  	const intcc2 = body.RWS[0].RW[74].FIS[0].FI[1].TMC.DE;
	  	const jfcc2 = body.RWS[0].RW[74].FIS[0].FI[1].CF[0].JF;

	  	let  bbnorth ="";
	  	if(jf1 == 0 || jf1 < 4){
	  		bbnorth = "For South bound lane is Free flow of traffic";
	  	}else if(jf1 == 4 || jf1 < 8){
	  		bbnorth = "For South bound lane is Sluggish flow of traffic";
	  	}else if(jf1 == 8 || jf1 < 10){
	  		bbnorth = "For South bound lane is Slow flow of traffic";
	  	}else if(jf1 == 10){
	  		bbnorth = "For South bound lane is Traffic stopped or Road closed"
	  	}else{
	  		bbnorth = "Cannot compute"
	  	} 
	  	let  mama  ="";
	  	if(jfcc1 == 0 || jfcc1 < 4){
	  		mama = "Mac Arthur North bound lane is Free flow of traffic";
	  	}else if(jfcc1 == 4 || jfcc1 < 8){
	  		mama = "Mac Arthur North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc1 == 8 || jfcc1 < 10){
	  		mama = "Mac Arthur North bound lane is Slow flow of traffic";
	  	}else if(jfcc1 == 10){
	  		mama = "Mac Arthur North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		mama = "Cannot compute"
	  	}  	
	  	let  qqua  ="";
	  	if(jfcc2 == 0 || jfcc2 < 4){
	  		qqua = "Quary St North bound lane is Free flow of traffic";
	  	}else if(jfcc2 == 4 || jfcc2 < 8){
	  		qqua = "Quary St North bound lane is Sluggish flow of traffic";
	  	}else if(jfcc2 == 8 || jfcc2 < 10){
	  		qqua = "Quary St North bound lane is Slow flow of traffic";
	  	}else if(jfcc2 == 10){
	  		qqua = "Quary St North bound lane is Traffic stopped or Road closed"
	  	}else{
	  		qqua = "Cannot compute"
	  	} 

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({bsouth:bsouth,jf1:jf1,intc1:intc1,jfc1:jfc1,intc2:intc2,jfc2:jfc2,bbsouth:bbsouth,qua:qua,ma:ma,
    	bnorth:bnorth,jf2:jf2,intcc1:intcc1,jfcc1:jfcc1,intcc2:intcc2,jfcc2:jfcc2,bbnorth:bbnorth,mama:mama,qqua:qqua       }));  
	
	});


});
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/equirino')
	  .then(function (response) {
	    console.log(response.data);
	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/jp')
	  .then(function (response) {
	    console.log(response.data);
	   
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/mcarthur')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/ecowestdr')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/ecoland')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/tulipdr')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/sandawa')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/quimpoblvd')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/quezonblvd')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/cabaguio')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/mlquezon')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/dacudao')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/pichonst')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/torres')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/bonifacio')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/mroxas')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/cmrecto')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/cbangoy')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/rmagg')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/sta')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/lapulapu')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/agadofly')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/rcastillo')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/garcia')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/diversion')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/quenones')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/rodri')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/maa')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/shrine')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/angg')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/buhangin')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/cabantian')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
app.get('/geo',function(req, res){
	

	axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
	  .then(function (response) {
	    console.log(response.data);
	    
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });

})
let token = "EAAe72eh0wNEBABSSLXqZCe7vVZBYisqKZBpLJA1ONKNTmjtmoEtMC6yciCRdDKqvdsSatJPZAJ0M2W85PCFZAo5m1zxKK2VZBFvYpZBHTWwOljSYZCt96VKZAG2p1beZBr2kGDnAu1q9qb1rC2ngwk3ug4yHzbuc2yzIWRqfSONixdCwZDZD"

// Facebook 

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "Hi") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})


app.post('/webhook/', function(req, res) {
	
	let messaging_events = req.body.entry[0].messaging
	
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		
		if (event.message && event.message.text) {
			let text = event.message.text
			
				
					if(text.includes('quirino south int') || text.includes('Quirino south int ') || text == 'E. Quirino south int'|| text == 'E. Quirino North int'||text.includes('quirino South int')||text.includes('Quirino South int'))
					{
					sendText(sender, "I guess mean E. Quirino Ave south intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
			
					axios.get('https://whispering-inlet-28384.herokuapp.com/equirino')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.arthur;
					    chatbotResponse = response.data.pichon1;
					     chatbotResponse2 = response.data.san;	
					     chatbotResponse3 = response.data.bang;	
					     chatbotResponse4 = response.data.lau;	
 
						sendText(sender, chatbotResponse)
					    sendText(sender, chatbotResponse1)
					    sendText(sender, chatbotResponse2)
					    sendText(sender, chatbotResponse3)
					    sendText(sender, chatbotResponse4)
					   
					  })
					  .catch(function (error) {
					    
					     chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					    sendText(sender, "If not I recomment check your spelling!")


				  });
					break;
					 
				}
				if(text.includes('quirino north int') || text.includes('Quirino north int ') || text.includes('Quirino North int ') || text.includes('quirino North int '))
					{
					sendText(sender, "I guess you mean E. Quirino Ave north intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					
			
					axios.get('https://whispering-inlet-28384.herokuapp.com/equirino')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.jpl;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.bangg;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.sann;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.pi;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.macky;					
					    sendText(sender, chatbotResponse4)	   
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
				  });
					break;
					 
				}
				if(text.includes('jp laurel south int') || text.includes('J. P. laurel South int') || text.includes('jp Laurel south int') || text.includes('jplaurel south int')|| text.includes('JpLaurel south int'))
					{
					sendText(sender, "I guess you mean J. P. Laurel south intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					axios.get('https://whispering-inlet-28384.herokuapp.com/jp')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.rs;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.an;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.ca;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.dac;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.f;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.fe;					
					    sendText(sender, chatbotResponse5)	   
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
					break;
					 
				}if(text.includes('jp laurel north int') || text.includes('J. P. Laurel north  int') || text.includes('jp Laurel north int') || text.includes('jplaurel north int')|| text.includes('JpLaurel north int'))
					{
					sendText(sender, "I guess you mean J. P. Laurel north intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/jp')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.fee;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.ff;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.dacccc;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.caaa;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.ann;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.rss;					
					    sendText(sender, chatbotResponse5)	   
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
					break;
					 
				}if(text.includes('mcarthur south int') || text.includes('Mcarthur south int') || text.includes('Macarthur south int') || text.includes('macarthur south int')
					|| text.includes('Mcarthur South int'||text.includes('mcarthur South int')||text.includes('mc arthur South int') ||text.includes('mac arthur South int')||text.includes('Mac arthur South int')))
					{
					sendText(sender, "I guess you mean Mac Arthur Hwy south intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					let chatbotResponse6 = "";
					let chatbotResponse7 = "";
					let chatbotResponse8 = "";
					let chatbotResponse9 = "";
					let chatbotResponse10 = "";	
					let chatbotResponse11 = "";	
					let chatbotResponse12 = "";
					let chatbotResponse13 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/mcarthur')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.quet;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.gener;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.sadd;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.mmm;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.lip;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.ssss;					
					    sendText(sender, chatbotResponse5)
					    chatbotResponse6 = response.data.qqqq;					
					    sendText(sender, chatbotResponse6)
					    chatbotResponse7 = response.data.matt;					
					    sendText(sender, chatbotResponse7)
					    chatbotResponse8 = response.data.dddiv;					
					    sendText(sender, chatbotResponse8)
					    chatbotResponse9 = response.data.ttl;					
					    sendText(sender, chatbotResponse9)	
					    chatbotResponse10 = response.data.bukid;					
					    sendText(sender, chatbotResponse10)	 
					    chatbotResponse11 = response.data.lbb;					
					    sendText(sender, chatbotResponse11)	 
					    chatbotResponse12 = response.data.agtoo;					
					    sendText(sender, chatbotResponse12)	 
					    chatbotResponse13 = response.data.santfe;					
					    sendText(sender, chatbotResponse13)	    
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
					break;
					 
				}if(text.includes('mcarthur north int') || text.includes('Mcarthur north int') || text.includes('Macarthur north int') || text.includes('macarthur north int')
					|| text.includes('Mcarthur North int'||text.includes('mcarthur North int')||text.includes('mc arthur North int') ||text.includes('mac arthur North int')||text.includes('Mac arthur North int')))
					{
					sendText(sender, "I guess you mean Mac Arthur Hwy north intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					let chatbotResponse6 = "";
					let chatbotResponse7 = "";
					let chatbotResponse8 = "";
					let chatbotResponse9 = "";
					let chatbotResponse10 = "";	
					let chatbotResponse11 = "";	
					let chatbotResponse12 = "";
					let chatbotResponse13 = "";
					let chatbotResponse14 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/mcarthur')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.qqq;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.ggg;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.sadd;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.sss;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.mmm;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.ttt;					
					    sendText(sender, chatbotResponse5)
					    chatbotResponse6 = response.data.sssss;					
					    sendText(sender, chatbotResponse6)
					    chatbotResponse7 = response.data.qq;					
					    sendText(sender, chatbotResponse7)
					    chatbotResponse8 = response.data.mm;					
					    sendText(sender, chatbotResponse8)
					    chatbotResponse9 = response.data.dd;					
					    sendText(sender, chatbotResponse9)	
					    chatbotResponse10 = response.data.tt;					
					    sendText(sender, chatbotResponse10)	 
					    chatbotResponse11 = response.data.ddd;					
					    sendText(sender, chatbotResponse11)	 
					    chatbotResponse12 = response.data.lll;					
					    sendText(sender, chatbotResponse12)	 
					    chatbotResponse13 = response.data.aa;					
					    sendText(sender, chatbotResponse13)	
					     chatbotResponse14 = response.data.ssS;					
					    sendText(sender, chatbotResponse14)	     
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
					break;
					 
				}if(text.includes('ecowest south int') || text.includes('Ecowest south int') || text.includes('eco west south int') || text.includes('Eco west south int')
					||text.includes('west south') || text.includes('West south'))
					{
					sendText(sender, "I guess you mean Eco West Dr south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/ecowestdr')
					  .then(function (response) {
					  	   
					   
					    chatbotResponse = response.data.eqq;					
					    sendText(sender, chatbotResponse)
					     chatbotResponse1 = response.data.eec;					
					    sendText(sender, chatbotResponse1)
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('ecowest north int') || text.includes('Ecowest north int') || text.includes('eco west north int') || text.includes('Eco west north int') 
					||text.includes('west north') || text.includes('West north'))
					{
					sendText(sender, "I guess you mean Eco West Dr north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/ecowestdr')
					  .then(function (response) {
					  	   
					   
					    chatbotResponse = response.data.qeumpo;					
					    sendText(sender, chatbotResponse)
					     chatbotResponse1 = response.data.eeccoo;					
					    sendText(sender, chatbotResponse1)
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('ecoland south int') ||  text.includes('eco land south int') || text.includes('Eco land south int') 
					||text.includes('land  south') || text.includes('Land south'))
					{
					sendText(sender, "I guess you mean Ecoland south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/ecoland')
					  .then(function (response) {
					  	   
					   
					    chatbotResponse = response.data.QQ;					
					    sendText(sender, chatbotResponse)
					     chatbotResponse1 = response.data.tulili;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.dr;					
					    sendText(sender, chatbotResponse2)
					       
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('ecoland north int') ||  text.includes('eco land north int') || text.includes('Eco land north int') 
					||text.includes('land  north') || text.includes('Land south'))	
					{
						sendText(sender, "I guess you mean Ecoland north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/ecoland')
					  .then(function (response) {
					  	   
					   
					    chatbotResponse = response.data.ecoeco;					
					    sendText(sender, chatbotResponse)
					     chatbotResponse1 = response.data.tueli;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.queem;					
					    sendText(sender, chatbotResponse2)
					       
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('matina south int') || text.includes('Matina south int') || text.includes('Mat south int') || text.includes('mat south int') 
					|| text.includes('mat sou int') || text.includes('Mat sou int'))
					{
					sendText(sender, "I guess you mean Matina Aplaya Rd south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.mmc;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jjas;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.ppun;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.ecece;					
					    sendText(sender, chatbotResponse3)
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('matina north int') || text.includes('Matina north int') || text.includes('Mat north int') || text.includes('mat north int') 
					|| text.includes('mat nor int') || text.includes('Mat nor int'))
					{
					sendText(sender, "I guess you mean Matina Aplaya Rd north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
					  .then(function (response) {		  	   
				     chatbotResponse = response.data.wwe;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ppu;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.jja;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.mmmac;					
					    sendText(sender, chatbotResponse3)
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('matina north int') || text.includes('Matina north int') || text.includes('Mat north int') || text.includes('mat north int') 
					|| text.includes('mat nor int') || text.includes('Mat nor int'))
					{
					sendText(sender, "I guess you mean Matina Aplaya Rd north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
					  .then(function (response) {		  	   
				     chatbotResponse = response.data.wwe;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ppu;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.jja;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.mmmac;					
					    sendText(sender, chatbotResponse3)
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('tulipdr south int') || text.includes('Tulipdr south int') || text.includes('tulip dr south int') || text.includes('Tulip dr south int'))
					{
					sendText(sender, "I guess you mean Tulip Dr south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/tulipdr')
					  .then(function (response) {		  	   
				     chatbotResponse = response.data.mec;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qem;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.ecu;					
					    sendText(sender, chatbotResponse2)		   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('tulipdr north int') || text.includes('Tulipdr north int') || text.includes('tulip dr north int') || text.includes('Tulip dr north int'))
					{
					sendText(sender, "I guess you mean Tulip Dr north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/tulipdr')
					  .then(function (response) {		  	   
				     chatbotResponse = response.data.eech;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qoo;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.macmac;					
					    sendText(sender, chatbotResponse2)		   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('sandawa south int') ||   text.includes('san south int') ||  text.includes('San south int'))
					{
					sendText(sender, "I guess you mean Sandawa south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/sandawa')
					  .then(function (response) {		  	   
				     chatbotResponse = response.data.mecmec;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qeqe;					
					    sendText(sender, chatbotResponse1)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('sandawa north int') ||   text.includes('san north int') ||  text.includes('San north int'))
					{
					sendText(sender, "I guess you mean Sandawa north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/sandawa')
					  .then(function (response) {		  	   
				     chatbotResponse = response.data.qqiqi;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.mmicmic;					
					    sendText(sender, chatbotResponse1)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}
				if(text.includes('quimpo blvd south int') ||   text.includes('Quimpo blvd south int') ||  text.includes('Quimpo blvd South int')||  text.includes('quimpo blvd South int')
					||  text.includes('quimpo Blvd South int') || text.includes('quimpo Blvd south int')|| text.includes('Quimpo Blvd South int'))
					{
					sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quimpoblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mcc;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.tll;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.ecc;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.mmM;					
					    sendText(sender, chatbotResponse3)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
				}
				if(text.includes('quimpo blvd north int') ||   text.includes('Quimpo blvd north int') ||  text.includes('Quimpo blvd North int')||  text.includes('quimpo blvd North int')
					||  text.includes('quimpo Blvd North int')||  text.includes('quimpo Blvd north int')||   text.includes('Quimpo Blvd North int'))
					{
					sendText(sender, "I guess you mean Quimpo Blvd north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quimpoblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.maaaa;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ec0000;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.tulll;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.eccoow;					
					    sendText(sender, chatbotResponse3)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('mlquezon blvd south int') || text.includes('ml quezon blvd south int') || text.includes('ml quezon blvd south int')|| text.includes('Ml quezon blvd south int') )
					{
					sendText(sender, "I guess you mean M. L. Quezon Blvd south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
					let chatbotResponse5 = "";	
					axios.get('https://whispering-inlet-28384.herokuapp.com/mlquezon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.laps;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ssta;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.rm;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.mr;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.ab;					
					    sendText(sender, chatbotResponse4)
					    chatbotResponse5 = response.data.ab;					
					    sendText(sender, chatbotResponse5)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('mlquezon blvd north int') || text.includes('ml quezon blvd north int') || text.includes('ml quezon blvd north int')|| text.includes('Ml quezon blvd north int') )
					{
					sendText(sender, "I guess you mean M. L. Quezon Blvd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
					let chatbotResponse5 = "";	
					axios.get('https://whispering-inlet-28384.herokuapp.com/mlquezon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.isan;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.abb;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.mrr;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.rmm;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.stta;					
					    sendText(sender, chatbotResponse4)
					    chatbotResponse5 = response.data.lplp;					
					    sendText(sender, chatbotResponse5)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('quezon blvd south int') ||   text.includes('Quezon blvd south int') ||  text.includes('quizon blvd South int')|| text.includes('Quizon blvd South int')
					|| text.includes('Quizon Blvd South int') || text.includes('quezon Blvd south int')||  text.includes('quizon Blvd South int'))
					{
					sendText(sender, "I guess you mean Quezon Blvd south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quezonblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.saa;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.piii;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.boo;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.gge;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.echh;					
					    sendText(sender, chatbotResponse4)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('quezon north int') || text.includes('Quezon north int') ||  text.includes('quizon North int')||  text.includes('Quizon North int'))
					{
					sendText(sender, "I guess you mean Quezon Blvd north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quezonblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.aco;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.gg;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.bu;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.ppi;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.ssaa;					
					    sendText(sender, chatbotResponse4)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('cabag south int') || text.includes('Cabag south int') ||  text.includes('cabag South int')||  text.includes('Cabag South int'))
					{
					sendText(sender, "I guess you mean Cabaguio Ave south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
						
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/cabaguio')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.jjp;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.llp;						    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('cabaguio Ave north int') || text.includes('cabaguio Ave North int')||  text.includes('Cabaguio Ave North int'))
					{
					sendText(sender, "I guess you mean Cabaguio Ave north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
						
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/cabaguio')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.aal;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jpp;						    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('dacudao Ave south int') || text.includes('Dacudao Ave South int'))
					{
					sendText(sender, "I guess you mean Dacudao Ave south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
						
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/dacudao')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.jjjp;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.lala;		
					    sendText(sender, chatbotResponse1)				    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('dacudao Ave north int') || text.includes('Dacudao Ave North int'))
					{
					sendText(sender, "I guess you mean Dacudao Ave north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
						
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/dacudao')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.lp;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jeo;					
					    sendText(sender, chatbotResponse1)
					   		    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('pichon st South int') || text.includes('pichon st south int')|| text.includes('Pichon St South int')|| text.includes('Pichon st south int'))
					{
					sendText(sender, "I guess you mean Pichon St south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/pichonst')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ff;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.ee;					
					    sendText(sender, chatbotResponse1)
					   	chatbotResponse2 = response.data.cc;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.gg;					
					    sendText(sender, chatbotResponse3)	    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('sanpedro st North int') || text.includes('sanpedro st south int')|| text.includes('Sanpedro St South int')|| text.includes('Sanpedro st south int'))
					{
					sendText(sender, "I guess you mean Sanpedro St north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/sanpedro')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mml;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.ccm;					
					    sendText(sender, chatbotResponse1)
					   	chatbotResponse2 = response.data.eeq;					
					    sendText(sender, chatbotResponse2)	        	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('torres South')||text.includes('torres south') )
					{
					sendText(sender, "I guess you mean F. Torres St south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					//let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/torres')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.tjp;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.tf;					
					    sendText(sender, chatbotResponse1)
					   	       	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('torres North')||text.includes('torres north'))
					{
					sendText(sender, "I guess you mean F. Torres St north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					//let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/torres')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.tff;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.ttjp;					
					    sendText(sender, chatbotResponse1)
					   	       	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('bonifacio North')||text.includes('Bonifacio north')||text.includes('bonifacio north')||text.includes('bonifacio north'))
					{
					sendText(sender, "I guess you mean A. Bonifacio St north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/bonifacio')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mml;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.mmcc;					
					    sendText(sender, chatbotResponse1)
					   	chatbotResponse2 = response.data.ccb;					
					    sendText(sender, chatbotResponse2)       	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('bonifacio South')||text.includes('Bonifacio south')||text.includes('bonifacio south')||text.includes('Bonifacio South'))
					{
					sendText(sender, "I guess you mean A. Bonifacio St south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/bonifacio')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.cbb;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.cmm;					
					    sendText(sender, chatbotResponse1)
					   	chatbotResponse2 = response.data.mll;					
					    sendText(sender, chatbotResponse2)       	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('roxas South')||text.includes('roxas south')||text.includes('Roxas South'))
					{
					sendText(sender, "I guess you mean M. Roxas south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/mroxas')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.rmg;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.cmr;					
					    sendText(sender, chatbotResponse1)
					   	chatbotResponse2 = response.data.mlq;					
					    sendText(sender, chatbotResponse2)       	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('roxas North')||text.includes('roxas north') || text.includes('Roxas North'))
					{
					sendText(sender, "I guess you mean M. Roxas north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/mroxas')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.llm;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.mmcs;					
					    sendText(sender, chatbotResponse1)
					   	chatbotResponse2 = response.data.rmag;					
					    sendText(sender, chatbotResponse2)       	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('cmrecto North')||text.includes('cmrecto north') || text.includes('Cmrecto North') 
					)
					{
					sendText(sender, "I guess you mean C. M. Recto north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";				
					axios.get('https://whispering-inlet-28384.herokuapp.com/cmrecto')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ppi;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.ssn;					
					    sendText(sender, chatbotResponse1)
					   	chatbotResponse2 = response.data.aab;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.mrmr;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.mra;					
					    sendText(sender, chatbotResponse4)        	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('cbangoy South')||text.includes('cbangoy south') || text.includes('Cbangoy South') || text.includes('Cbangoy south'))
			
					{
						sendText(sender, "I guess you mean C. Bangoy south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/cbangoy')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.eqq;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.mmrrr;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.mmrrr;					
					    sendText(sender, chatbotResponse2)
					      	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('cbangoy North')||text.includes('cbangoy north') || text.includes('Cbangoy North') || text.includes('Cbangoy north'))
			
					{
					sendText(sender, "I guess you mean C. Bangoy north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";		
					axios.get('https://whispering-inlet-28384.herokuapp.com/cbangoy')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.eqq1;					
					    sendText(sender, chatbotResponse)
					      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('magsaysay North')||text.includes('Magsaysay north')||text.includes('magsaysay north')||text.includes('Magsaysay North'))
		
					{
					sendText(sender, "I guess you mean R. Magsaysay Ave north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/rmagg')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mell;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.cem;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.cbe;					
					    sendText(sender, chatbotResponse2)
					      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('magsaysay South')||text.includes('Magsaysay south')||text.includes('magsaysay south')||text.includes('Magsaysay South'))
					{
					sendText(sender, "I guess you mean R. Magsaysay Ave south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/rmagg')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.cba;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.cemr;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.mel1;					
					    sendText(sender, chatbotResponse2)
					      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('sta ana south') || text.includes('Sta ana south'))
					{
					sendText(sender, "I guess you mean Sta. Ana Ave south intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/sta')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.lg;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.laplp;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.jepjp;					
					    sendText(sender, chatbotResponse2)
					      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('sta ana north') || text.includes('Sta ana north'))
					{
					sendText(sender, "I guess you mean Sta. Ana Ave north intersections. The traffic congestion in the intersections.")
						
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/sta')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.jepjpp;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.lapu;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.lepu;					
					    sendText(sender, chatbotResponse2)
					      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('lapu north') || text.includes('Lapu north')|| text.includes('Lapu North')|| text.includes('lapu North'))
					{
					sendText(sender, "I guess you mean Lapu-Lapu Ave north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/lapulapu')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.tta;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.df;					
					    sendText(sender, chatbotResponse1)			      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('lapu south') || text.includes('Lapu South')|| text.includes('Lapu south')|| text.includes('lapu South'))
					{
					sendText(sender, "I guess you mean Lapu-Lapu Ave south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/lapulapu')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.dac;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ta;					
					    sendText(sender, chatbotResponse1)			      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('agdao south') || text.includes('Agdao south')|| text.includes('Agdao South')|| text.includes('agdao South'))
					{
					sendText(sender, "I guess you mean Agdao Flyover south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/agadofly')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.llg;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.lgd;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.lgs;					
					    sendText(sender, chatbotResponse2)			      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('agdao north') || text.includes('Agdao north')|| text.includes('Agdao North')|| text.includes('agdao North'))
					{
					sendText(sender, "I guess you mean Agdao Flyover north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";		
					let chatbotResponse2 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/agadofly')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.llgs;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.lgdd;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.lllg;					
					    sendText(sender, chatbotResponse2)			      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('castillo north') || text.includes('Castillo North')|| text.includes('castillo North'))
					{
					sendText(sender, "I guess you mean R. Castillo north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";				
					axios.get('https://whispering-inlet-28384.herokuapp.com/rcastillo')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.aggg;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jepp;					
					    sendText(sender, chatbotResponse1)		      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('castillo south') || text.includes('Castillo South')|| text.includes('castillo South'))
					{
					sendText(sender, "I guess you mean R. Castillo south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";				
					axios.get('https://whispering-inlet-28384.herokuapp.com/rcastillo')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.jep;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.agg;					
					    sendText(sender, chatbotResponse1)		      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('garcia south') || text.includes('Garcia South')|| text.includes('garcia South')|| text.includes('Garcia South'))
					{
					sendText(sender, "I guess you mean C. P. Garcia south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";				
					axios.get('https://whispering-inlet-28384.herokuapp.com/garcia')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.dm;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.al;					
					    sendText(sender, chatbotResponse1)		      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('garcia north') || text.includes('Garcia North')|| text.includes('garcia North')|| text.includes('Garcia North'))
					{
					sendText(sender, "I guess you mean C. P. Garcia north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";				
					axios.get('https://whispering-inlet-28384.herokuapp.com/garcia')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.all;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.dmm;					
					    sendText(sender, chatbotResponse1)		      	   
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('diversion north') || text.includes('Diversion North')|| text.includes('diversion North'))
					{
					sendText(sender, "I guess you mean Diversion Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";				
					axios.get('https://whispering-inlet-28384.herokuapp.com/diversion')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.meca;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.mate;					
					    sendText(sender, chatbotResponse1)		      	   
					     chatbotResponse2 = response.data.ssh;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.jr;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.quei;					
					    sendText(sender, chatbotResponse4)
					    chatbotResponse5 = response.data.angle;					
					    sendText(sender, chatbotResponse5)
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('diversion south') || text.includes('Diversion South')|| text.includes('diversion South'))
					{
					sendText(sender, "I guess you mean Diversion Rd south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";				
					axios.get('https://whispering-inlet-28384.herokuapp.com/diversion')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.angli;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.mquu;					
					    sendText(sender, chatbotResponse1)		      	   
					     chatbotResponse2 = response.data.jrro;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.sssh;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.matii;					
					    sendText(sender, chatbotResponse4)
					    chatbotResponse5 = response.data.art;					
					    sendText(sender, chatbotResponse5)
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('quinones south') || text.includes('Quinones South')|| text.includes('quinones South'))
					{
					sendText(sender, "I guess you mean Diversion Rd south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/quenones')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.quo;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jppe;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('quinones north') || text.includes('Quinones North')|| text.includes('quinones North'))
					{
					sendText(sender, "I guess you mean M. Quinones Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/quenones')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ave;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.avee;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('rodriguez north') || text.includes('Rodriguez North')|| text.includes('rodriguez North'))
					{
					sendText(sender, "I guess you mean J. Rodriguez Ma-A north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/rodri')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.nnarr;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.divverr;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('rodriguez south') || text.includes('Rodriguez South')|| text.includes('rodriguez South'))
					{
					sendText(sender, "I guess you mean J. Rodriguez Ma-A south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/rodri')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.divver;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.nnar;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('maa south') || text.includes('Maa South')|| text.includes('maa South'))
					{
					sendText(sender, "I guess you mean Ma-A Rd south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/maa')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.nare;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.mec;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('maa north') || text.includes('Maa North')|| text.includes('maa North'))
					{
					sendText(sender, "I guess you mean Ma-A Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/maa')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mecc;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.narer;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('shrine north') || text.includes('shrine North')|| text.includes('Cagu North')|| text.includes('cagu north'))
					{
					sendText(sender, "I guess you mean Shrine Hills Rd//S Cuyugan north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/shrine')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mmmec;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.dddev;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('shrine south') || text.includes('shrine South')|| text.includes('Cagu South')|| text.includes('cagu south'))
					{
					sendText(sender, "I guess you mean Shrine Hills Rd//S Cuyugan south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/shrine')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ddev;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.mmec;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('angl south') || text.includes('angl South')|| text.includes('Angl South'))
					{
					sendText(sender, "I guess you mean Angliongto south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/angg')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ssai;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.dede;					
					    sendText(sender, chatbotResponse1)
					     chatbotResponse1 = response.data.jeje;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('angl north') || text.includes('angl North')|| text.includes('Angl North'))
					{
					sendText(sender, "I guess you mean Angliongto north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";	
					let chatbotResponse2 = "";	
									
					axios.get('https://whispering-inlet-28384.herokuapp.com/angg')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.jejeje;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.dedede;					
					    sendText(sender, chatbotResponse1)
					     chatbotResponse1 = response.data.ssaia;					
					    sendText(sender, chatbotResponse1)		      	   
					
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('buhangin north') || text.includes('buhangin North')|| text.includes('Buhangin North'))
					{
					sendText(sender, "I guess you mean Buhangin-Cabantian Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";						
					axios.get('https://whispering-inlet-28384.herokuapp.com/buhangin')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ddevs;					
					    sendText(sender, chatbotResponse)		      	   	
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;					 
				}if(text.includes('buhangin south') || text.includes('buhangin South')|| text.includes('Buhangin South'))
					{
					sendText(sender, "I guess you mean Buhangin-Cabantian Rd south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";						
					axios.get('https://whispering-inlet-28384.herokuapp.com/buhangin')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ccp;					
					    sendText(sender, chatbotResponse)		      	   	
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('cabantian south') || text.includes('cabantian South')|| text.includes('Cabantian South'))
					{
					sendText(sender, "I guess you mean Cabantian Rd south intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";						
					axios.get('https://whispering-inlet-28384.herokuapp.com/cabantian')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.aale;					
					    sendText(sender, chatbotResponse)		      	   	
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('cabantian north') || text.includes('cabantian North')|| text.includes('Cabantian North'))
					{
					sendText(sender, "I guess you mean Cabantian Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";						
					axios.get('https://whispering-inlet-28384.herokuapp.com/cabantian')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.aalle;					
					    sendText(sender, chatbotResponse)		      	   	
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text.includes('bukidnon north') || text.includes('bukidnon North')|| text.includes('Bukidnon North'))
					{
					sendText(sender, "I guess you mean Davao Bukdinon Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";
					let chatbotResponse1 = "";							
					axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mama;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qqua;					
					    sendText(sender, chatbotResponse1)		      	   	
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				if(text.includes('bukidnon south') || text.includes('bukidnon South')|| text.includes('Bukidnon South'))
					{
					sendText(sender, "I guess you mean Davao Bukdinon Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";
					let chatbotResponse1 = "";							
					axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.qua;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ma;					
					    sendText(sender, chatbotResponse1)		      	   	
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}}if(text.includes('bukidnon north') || text.includes('bukidnon North')|| text.includes('Bukidnon North'))
					{
					sendText(sender, "I guess you mean Davao Bukdinon Rd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";
					let chatbotResponse1 = "";							
					axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mama;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qqua;					
					    sendText(sender, chatbotResponse1)		      	   	
					  })
					  .catch(function (error) {	    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}else{

					
				if(text == 'E. Quirino Ave')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";			
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/equirino')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisNorth;
				    chatbotResponse1 = response.data.analysisSouth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				break;

			} if(text == 'E. Quirino Ave north intersections')
			{	
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					
			
					axios.get('https://whispering-inlet-28384.herokuapp.com/equirino')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.jpl;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.bangg;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.sann;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.pi;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.macky;					
					    sendText(sender, chatbotResponse4)	   
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
				  });
				break;

			}
			if(text == 'E. Quirino Ave south intersections')
			{
			
					//sendText(sender, "I guess you mean E. Quirino Ave north intersections. The traffic congestion in the intersections")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
			
					axios.get('https://whispering-inlet-28384.herokuapp.com/equirino')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.arthur;
					    chatbotResponse = response.data.pichon1;
					     chatbotResponse2 = response.data.san;	
					     chatbotResponse3 = response.data.bang;	
					     chatbotResponse4 = response.data.lau;	
 
						sendText(sender, chatbotResponse)
					    sendText(sender, chatbotResponse1)
					    sendText(sender, chatbotResponse2)
					    sendText(sender, chatbotResponse3)
					    sendText(sender, chatbotResponse4)
					   
					  })
					  .catch(function (error) {
					    
					     chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					//    sendText(sender, "If not I recomment check your spelling!")


				  });
				break;

			}
			if(text == 'J. P. Laurel')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/jp')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisNorth;
				    chatbotResponse1 = response.data.analysisSouth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}
			if(text == 'J. P. Laurel south intersections')
			{
			
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					axios.get('https://whispering-inlet-28384.herokuapp.com/jp')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.rs;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.an;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.ca;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.dac;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.f;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.fe;					
					    sendText(sender, chatbotResponse5)	   
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
				break;

			}
			if(text == 'J. P. Laurel north intersections')
			{
			
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					axios.get('https://whispering-inlet-28384.herokuapp.com/jp')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.fee;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.ff;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.dacccc;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.caaa;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.ann;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.rss;					
					    sendText(sender, chatbotResponse5)	   
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
				break;

			}if(text == 'Mac Arthur Hwy')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/mcarthur')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.sou;
				    chatbotResponse1 = response.data.nou;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'Mac Arthur Hwy south intersections')
					{
					//sendText(sender, "I guess you mean Mac Arthur Hwy south intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					let chatbotResponse6 = "";
					let chatbotResponse7 = "";
					let chatbotResponse8 = "";
					let chatbotResponse9 = "";
					let chatbotResponse10 = "";	
					let chatbotResponse11 = "";	
					let chatbotResponse12 = "";
					let chatbotResponse13 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/mcarthur')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.quet;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.gener;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.sadd;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.mmm;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.lip;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.ssss;					
					    sendText(sender, chatbotResponse5)
					    chatbotResponse6 = response.data.qqqq;					
					    sendText(sender, chatbotResponse6)
					    chatbotResponse7 = response.data.matt;					
					    sendText(sender, chatbotResponse7)
					    chatbotResponse8 = response.data.dddiv;					
					    sendText(sender, chatbotResponse8)
					    chatbotResponse9 = response.data.ttl;					
					    sendText(sender, chatbotResponse9)	
					    chatbotResponse10 = response.data.bukid;					
					    sendText(sender, chatbotResponse10)	 
					    chatbotResponse11 = response.data.lbb;					
					    sendText(sender, chatbotResponse11)	 
					    chatbotResponse12 = response.data.agtoo;					
					    sendText(sender, chatbotResponse12)	 
					    chatbotResponse13 = response.data.santfe;					
					    sendText(sender, chatbotResponse13)	    
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
					break;
					 
				}
			if(text == 'Mac Arthur Hwy north intersections')
					{
					//sendText(sender, "I guess you mean Mac Arthur Hwy south intersections. The traffic congestion in the intersections.")
					let chatbotResponse1 = "";		
					let chatbotResponse = "";	
					let chatbotResponse2 = "";	
					let chatbotResponse3 = "";	
					let chatbotResponse4 = "";	
					let chatbotResponse5 = "";
					let chatbotResponse6 = "";
					let chatbotResponse7 = "";
					let chatbotResponse8 = "";
					let chatbotResponse9 = "";
					let chatbotResponse10 = "";	
					let chatbotResponse11 = "";	
					let chatbotResponse12 = "";
					let chatbotResponse13 = "";
					let chatbotResponse14 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/mcarthur')
					  .then(function (response) {
					  	   
					    chatbotResponse1 = response.data.qqq;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = response.data.ggg;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = response.data.sadd;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.sss;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.mmm;					
					    sendText(sender, chatbotResponse4)	
					    chatbotResponse5 = response.data.ttt;					
					    sendText(sender, chatbotResponse5)
					    chatbotResponse6 = response.data.sssss;					
					    sendText(sender, chatbotResponse6)
					    chatbotResponse7 = response.data.qq;					
					    sendText(sender, chatbotResponse7)
					    chatbotResponse8 = response.data.mm;					
					    sendText(sender, chatbotResponse8)
					    chatbotResponse9 = response.data.dd;					
					    sendText(sender, chatbotResponse9)	
					    chatbotResponse10 = response.data.tt;					
					    sendText(sender, chatbotResponse10)	 
					    chatbotResponse11 = response.data.ddd;					
					    sendText(sender, chatbotResponse11)	 
					    chatbotResponse12 = response.data.lll;					
					    sendText(sender, chatbotResponse12)	 
					    chatbotResponse13 = response.data.aa;					
					    sendText(sender, chatbotResponse13)	
					     chatbotResponse14 = response.data.ssS;					
					    sendText(sender, chatbotResponse14)	     
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					    sendText(sender, chatbotResponse)
					    chatbotResponse2 = "not ok";
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = "not ok";
					    sendText(sender, chatbotResponse3)
					     chatbotResponse4 = "not ok";
					    sendText(sender, chatbotResponse4)
					     chatbotResponse5 = "not ok";
					    sendText(sender, chatbotResponse5)
				  });
					break;
					 
				}if(text == 'Eco West Dr')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.South;
				    chatbotResponse1 = response.data.North;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'Eco West Dr north intersections')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.qeumpo;
				    chatbotResponse1 = response.data.eeccoo;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'Eco West Dr south intersections')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.eqq;
				    chatbotResponse1 = response.data.eec;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}
			if(text == 'Ecoland south intersections')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";		
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecoland')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.QQ;
				    chatbotResponse1 = response.data.tulili;
				    chatbotResponse2 = response.data.dr;
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				     sendText(sender, chatbotResponse2)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}
			if(text == 'Ecoland north intersections')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";		
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecoland')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ecoeco;
				    chatbotResponse1 = response.data.tueli;
				    chatbotResponse2 = response.data.queem;
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				     sendText(sender, chatbotResponse2)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'Ecoland')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecoland')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ssouth;
				    chatbotResponse1 = response.data.nnorth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'Matina Aplaya Rd')
			{
			
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.seot;
				    chatbotResponse1 = response.data.nert;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'Matina Aplaya Rd south intersections')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";	
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.mmc;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jjas;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.ppun;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.ecece;					
					    sendText(sender, chatbotResponse3)
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}if(text == 'Matina Aplaya Rd north intersections')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";	
					axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.wwe;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ppu;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.jja;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.mmmac;					
					    sendText(sender, chatbotResponse3)
					       
					   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}if(text == 'Tulip Dr')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					//let chatbotResponse2 = "";
					axios.get('https://whispering-inlet-28384.herokuapp.com/tulipdr')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.sotht;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.nnor;					
					    sendText(sender, chatbotResponse1)
					    		   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}
			if(text == 'Tulip Dr south intersections')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					axios.get('https://whispering-inlet-28384.herokuapp.com/tulipdr')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.mec;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qem;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.ecu;					
					    sendText(sender, chatbotResponse2)		   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}
			if(text == 'Tulip Dr north intersections')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					axios.get('https://whispering-inlet-28384.herokuapp.com/tulipdr')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.eech;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qoo;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.macmac;					
					    sendText(sender, chatbotResponse2)		   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}
			if(text == 'Sandawa')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
				
					axios.get('https://whispering-inlet-28384.herokuapp.com/sandawa')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.south;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.north;					
					    sendText(sender, chatbotResponse1)
					   	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}
			if(text == 'Sandawa south intersections')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
				
					axios.get('https://whispering-inlet-28384.herokuapp.com/sandawa')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.mecmec;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.qeqe;					
					    sendText(sender, chatbotResponse1)
					   	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}
			if(text == 'Sandawa north intersections')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
				
					axios.get('https://whispering-inlet-28384.herokuapp.com/sandawa')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.qqiqi;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.mmicmic;					
					    sendText(sender, chatbotResponse1)
					   	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}if(text == 'Quimpo Blvd')
			{	
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
				
					axios.get('https://whispering-inlet-28384.herokuapp.com/quimpoblvd')
					  .then(function (response) {		  	   
					   
					    chatbotResponse = response.data.south;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.north;					
					    sendText(sender, chatbotResponse1)
					   	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
				break;

			}if(text == 'Quimpo Blvd south intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quimpoblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.mcc;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.tll;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.ecc;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.mmM;					
					    sendText(sender, chatbotResponse3)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Quimpo Blvd north intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quimpoblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.maaaa;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ec0000;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.tulll;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.eccoow;					
					    sendText(sender, chatbotResponse3)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'M. L. Quezon Blvd north intersections' )
					{
				//	sendText(sender, "I guess you mean M. L. Quezon Blvd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
					let chatbotResponse5 = "";	
					axios.get('https://whispering-inlet-28384.herokuapp.com/mlquezon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.isan;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.abb;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.mrr;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.rmm;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.stta;					
					    sendText(sender, chatbotResponse4)
					    chatbotResponse5 = response.data.lplp;					
					    sendText(sender, chatbotResponse5)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text == 'M. L. Quezon Blvd south intersections' )
					{
					//sendText(sender, "I guess you mean M. L. Quezon Blvd north intersections. The traffic congestion in the intersections.")			
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";		
					let chatbotResponse5 = "";	
					axios.get('https://whispering-inlet-28384.herokuapp.com/mlquezon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.laps;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.ssta;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.rm;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.mr;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.ab;					
					    sendText(sender, chatbotResponse4)
					    chatbotResponse5 = response.data.ss;					
					    sendText(sender, chatbotResponse5)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					    chatbotResponse = "not ok";
					   
				  });
					break;
					 
				}if(text == 'Quezon Blvd south intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quezonblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.saa;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.piii;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.boo;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.gge;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.echh;					
					    sendText(sender, chatbotResponse4)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Quezon Blvd north intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quezonblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.aco;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.gg;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.bu;					
					    sendText(sender, chatbotResponse2)
					     chatbotResponse3 = response.data.ppi;					
					    sendText(sender, chatbotResponse3)
					    chatbotResponse4 = response.data.ssaa;					
					    sendText(sender, chatbotResponse4)
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}
			if(text == 'Quezon Blvd south intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/quezonblvd')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.que;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.que1;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Cabaguio Ave')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/cabaguio')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ssouth;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.nnort;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Cabaguio Ave south intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/cabaguio')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.jjp;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.llp;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Cabaguio Ave north intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/cabaguio')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.aal;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jpp;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'M. L. Quezon Blvd')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/mlquezon')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.sourth;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.nert;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Dacudao Ave')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/dacudao')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.dsouth;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.dnorth;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Dacudao Ave north intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					
					
					
					axios.get('https://whispering-inlet-28384.herokuapp.com/dacudao')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.lp;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.jeo;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Dacudao Ave south intersections')
			{					
					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";			
					axios.get('https://whispering-inlet-28384.herokuapp.com/dacudao')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.jjjp;					
					    sendText(sender, chatbotResponse)
					    chatbotResponse1 = response.data.lala;					
					    sendText(sender, chatbotResponse1)
					   
					    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Pichon St')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
						
					axios.get('https://whispering-inlet-28384.herokuapp.com/pichonst')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.southh;					
					    sendText(sender, chatbotResponse)
					   			    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Pichon St south intersections')
			{					
					//sendText(sender, "I guess you mean Quimpo Blvd south intersections. The traffic congestion in the intersections.")					
					let chatbotResponse = "";	
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";	
					axios.get('https://whispering-inlet-28384.herokuapp.com/pichonst')
					  .then(function (response) {		  	   
				     	chatbotResponse = response.data.ff;					
					    sendText(sender, chatbotResponse)
					   	chatbotResponse1 = response.data.ee;					
					    sendText(sender, chatbotResponse1)
					    chatbotResponse2 = response.data.cc;					
					    sendText(sender, chatbotResponse2)
					    chatbotResponse3 = response.data.gg;					
					    sendText(sender, chatbotResponse3)		    	   
					  })
					  .catch(function (error) {
					    
					    chatbotResponse1 = "not ok";
					    sendText(sender, chatbotResponse1)
					//    chatbotResponse = "not ok";
					   
				  });


				break;

			}if(text == 'Sanpedro St')
			{
			
				let chatbotResponse = "";
				//let chatbotResponse1 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/sanpedro')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ssa;
				   // chatbotResponse1 = response.data.nou;
    
				    sendText(sender, chatbotResponse)
				  //  sendText(sender, chatbotResponse1)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'Sanpedro St north intersections')
			{
			
				//let chatbotResponse = "";
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";	
				let chatbotResponse3 = "";	
																	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/sanpedro')
				  .then(function (response) {
				    //console.log(response);
				  //  chatbotResponse = response.data.int;
				    chatbotResponse1 = response.data.mml;
    				 chatbotResponse2 = response.data.ccm;
    				 chatbotResponse3 = response.data.eeq;
    				// sendText(sender, chatbotResponse)
				   sendText(sender, chatbotResponse1)
				    sendText(sender, chatbotResponse2)
				     sendText(sender, chatbotResponse3)
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'F. Torres St')
			{
			
				//let chatbotResponse = "";
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";	
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/torres')
				  .then(function (response) {
				    //console.log(response);
				  //  chatbotResponse = response.data.int;
				    chatbotResponse1 = response.data.tssouth;
    				 chatbotResponse2 = response.data.tnnorth;
				   sendText(sender, chatbotResponse1)
				    sendText(sender, chatbotResponse2)
				    
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'F. Torres St south intersections')
			{
			
				//let chatbotResponse = "";
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";	
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/torres')
				  .then(function (response) {
				    //console.log(response);
				  //  chatbotResponse = response.data.int;
				    chatbotResponse1 = response.data.tjp;
    				 chatbotResponse2 = response.data.tf;
				   sendText(sender, chatbotResponse1)
				    sendText(sender, chatbotResponse2)
				    
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'F. Torres St north intersections')
			{
			
				//let chatbotResponse = "";
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";	
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/torres')
				  .then(function (response) {
				    //console.log(response);
				  //  chatbotResponse = response.data.int;
				    chatbotResponse1 = response.data.tff;
    				 chatbotResponse2 = response.data.ttjp;
				   sendText(sender, chatbotResponse1)
				    sendText(sender, chatbotResponse2)
				    
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'A. Bonifacio St')
			{
			
				//let chatbotResponse = "";
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";	
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/bonifacio')
				  .then(function (response) {
				    //console.log(response);
				  //  chatbotResponse = response.data.int;
				    chatbotResponse1 = response.data.bbsouth;
    				 chatbotResponse2 = response.data.bbnorth;
				   sendText(sender, chatbotResponse1)
				    sendText(sender, chatbotResponse2)
				    
				    
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'A. Bonifacio St south intersections')
			{	
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";	
				
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/bonifacio')
				  .then(function (response) {
				    //console.log(response);
			
				 chatbotResponse1 = response.data.cbb;
    		     chatbotResponse2 = response.data.cmm;
    		     chatbotResponse3 = response.data.mll;
    		    
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
				  sendText(sender, chatbotResponse3)   
				 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'A. Bonifacio St north intersections')
			{	
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";	
				
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/bonifacio')
				  .then(function (response) {
				    //console.log(response);
			
				 chatbotResponse1 = response.data.mml;
    		     chatbotResponse2 = response.data.mmcc;
    		     chatbotResponse3 = response.data.ccb;
    		    
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
				  sendText(sender, chatbotResponse3)   
				 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'M. Roxas south intersections')
			{	
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/mroxas')
				  .then(function (response) {
				    //console.log(response);
			
				 chatbotResponse1 = response.data.rmg;
    		     chatbotResponse2 = response.data.cmr;
    		     chatbotResponse3 = response.data.mlq;
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
				 sendText(sender, chatbotResponse3)
				 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'M. Roxas north intersections')
			{	
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/mroxas')
				  .then(function (response) {
				    //console.log(response);
			
				 chatbotResponse1 = response.data.llm;
    		     chatbotResponse2 = response.data.mmcs;
    		     chatbotResponse3 = response.data.rmag;
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
				 sendText(sender, chatbotResponse3)
				 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				
				    
				 

				  });
				break;

			}if(text == 'M. Roxas')
			{	
				let chatbotResponse1 = "";	
				let chatbotResponse2 = "";
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/mroxas')
				  .then(function (response) {
				    //console.log(response);
			
				 chatbotResponse1 = response.data.mmsouth;
    		     chatbotResponse2 = response.data.mmnorth;
    		  
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
				
				 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'C. M. Recto')
			{	
				let chatbotResponse1 = "";	
			//	let chatbotResponse2 = "";
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cmrecto')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.nnorth;
    		  //   chatbotResponse2 = response.data.mmnorth;  
				 sendText(sender, chatbotResponse1)
			///	 sendText(sender, chatbotResponse2)
				
				 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'C. M. Recto north intersections')
			{	
				let chatbotResponse1 = "";	
			   let chatbotResponse2 = "";
			   let chatbotResponse3 = "";
			   let chatbotResponse4 = "";
			     let chatbotResponse5 = "";
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cmrecto')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ppi;
    		  	 chatbotResponse2 = response.data.ssn;
    		  	  chatbotResponse3 = response.data.aab; 
    		  	   chatbotResponse4 = response.data.mrmr;
    		  	    chatbotResponse5 = response.data.mra;      
				 
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
				  sendText(sender, chatbotResponse3)
				   sendText(sender, chatbotResponse4)
				    sendText(sender, chatbotResponse5)
		 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'C. Bangoy')
			{	
				let chatbotResponse1 = "";	
			   let chatbotResponse2 = "";
			  
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cbangoy')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ccnorth;
    		  	 chatbotResponse2 = response.data.ccsouth;
			 
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
	 
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'C. Bangoy south intersections')
			{	
				let chatbotResponse1 = "";	
			   let chatbotResponse2 = "";
			    let chatbotResponse3 = "";
			//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cbangoy')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.eqq;
    		  	 chatbotResponse2 = response.data.mmrrr;
			 		 chatbotResponse3 = response.data.abo;
				 sendText(sender, chatbotResponse1)
				 sendText(sender, chatbotResponse2)
	 			 sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'C. Bangoy north intersections')
			{	
				let chatbotResponse1 = "";	
				axios.get('https://whispering-inlet-28384.herokuapp.com/cbangoy')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.eqq;
				 sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)
				//     chatbotResponse2 = "not ok";
				    
				 

				  });
				break;

			}if(text == 'R. Magsaysay Ave')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";		
				axios.get('https://whispering-inlet-28384.herokuapp.com/rmagg')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.rnnorth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse1 = response.data.rssouth;
				 sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'R. Magsaysay Ave south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";	
				let chatbotResponse3 = "";	

				axios.get('https://whispering-inlet-28384.herokuapp.com/rmagg')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.mell;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse1 = response.data.cem;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse3 = response.data.cbe;
				 sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'R. Magsaysay Ave north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";	
				let chatbotResponse3 = "";	

				axios.get('https://whispering-inlet-28384.herokuapp.com/rmagg')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.cba;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse1 = response.data.cemr;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse3 = response.data.mel1;
				 sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Sta. Ana Ave')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";	
				axios.get('https://whispering-inlet-28384.herokuapp.com/sta')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ssouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.ssnorth;
				 sendText(sender, chatbotResponse2)				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Sta. Ana Ave south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";		
				axios.get('https://whispering-inlet-28384.herokuapp.com/sta')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.lg;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.laplp;
				 sendText(sender, chatbotResponse2)
				 chatbotResponse3 = response.data.jepjp;
				 sendText(sender, chatbotResponse3)				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Sta. Ana Ave north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";		
				axios.get('https://whispering-inlet-28384.herokuapp.com/sta')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.jepjpp;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.lapu;
				 sendText(sender, chatbotResponse2)
				 chatbotResponse3 = response.data.lepu;
				 sendText(sender, chatbotResponse3)				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Lapu-Lapu south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				
				axios.get('https://whispering-inlet-28384.herokuapp.com/lapulapu')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.dac;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.ta;	
				   sendText(sender, chatbotResponse2)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Lapu-Lapu north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				
				axios.get('https://whispering-inlet-28384.herokuapp.com/lapulapu')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.tta;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.df;
				   sendText(sender, chatbotResponse2)			
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Lapu-Lapu')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				
				axios.get('https://whispering-inlet-28384.herokuapp.com/lapulapu')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.lnorth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.lsouth;	
				  sendText(sender, chatbotResponse2)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Agdao Flyover')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				
				axios.get('https://whispering-inlet-28384.herokuapp.com/agadofly')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.asouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.anorth;	
				  sendText(sender, chatbotResponse2)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Agdao Flyover south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/agadofly')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.llg;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.lgd;	
				  sendText(sender, chatbotResponse2)
				  chatbotResponse3 = response.data.lgs;	
				  sendText(sender, chatbotResponse3)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Agdao Flyover north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/agadofly')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.llgs;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.lgdd;	
				  sendText(sender, chatbotResponse2)
				  chatbotResponse3 = response.data.lllg;	
				  sendText(sender, chatbotResponse3)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'R. Castillo south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/rcastillo')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.jep;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.agg;	
				  sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'R. Castillo north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/rcastillo')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.aggg;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.jepp;	
				  sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'R. Castillo')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/rcastillo')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.rrsouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.rrnorth;	
				  sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'C. P. Garcia')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/garcia')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ggsouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.ggnorth;	
				  sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'C. P. Garcia south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/garcia')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.dm;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.al;	
				  sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'C. P. Garcia north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/garcia')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.all;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.dmm;	
				  sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Diversion Rd')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/diversion')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ddsouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.ddnorth;	
				  sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Diversion Rd north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";
				let chatbotResponse6 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/diversion')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.meca;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.mate;	
				  sendText(sender, chatbotResponse2)
				   chatbotResponse3 = response.data.ssh;	
				  sendText(sender, chatbotResponse3)
				   chatbotResponse4 = response.data.jr;	
				  sendText(sender, chatbotResponse4)
				   chatbotResponse5 = response.data.quei;	
				  sendText(sender, chatbotResponse5)
				   chatbotResponse6 = response.data.angle;	
				  sendText(sender, chatbotResponse6)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Diversion Rd south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";
				let chatbotResponse6 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/diversion')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.angli;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.mquu;	
				  sendText(sender, chatbotResponse2)
				   chatbotResponse3 = response.data.jrro;	
				  sendText(sender, chatbotResponse3)
				   chatbotResponse4 = response.data.sssh;	
				  sendText(sender, chatbotResponse4)
				   chatbotResponse5 = response.data.matii;	
				  sendText(sender, chatbotResponse5)
				   chatbotResponse6 = response.data.art;	
				  sendText(sender, chatbotResponse6)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'M. Quinones Rd')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/quenones')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.qsouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.qnorth;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'M. Quinones Rd south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/quenones')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.quo;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.jppe;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'M. Quinones Rd north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/quenones')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ave;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.avee;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'J. Rodriguez Ma-A')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/rodri')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.jssouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.jnnorth;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'J. Rodriguez Ma-A north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/rodri')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.nnarr;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.divverr;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'J. Rodriguez Ma-A south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/rodri')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.divver;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.nnar;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Ma-A Rd')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/maa')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.mmsouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.mmnorth;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Ma-A Rd south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/maa')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.nare;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.mec;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Ma-A Rd north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/maa')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.narer;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.mecc;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Shrine Hills Rd//S Cuyugan')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/shrine')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.sssouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.sssnorth;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Shrine Hills Rd//S Cuyugan north intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/shrine')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.mmmec;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.dddev;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Shrine Hills Rd//S Cuyugan south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/shrine')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ddev;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.mmec;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Angliongto')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/angg')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.aasouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.aanorth;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Angliongto south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/angg')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ssai;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.dede;	
				  sendText(sender, chatbotResponse2)
				   chatbotResponse3 = response.data.jeje;	
				  sendText(sender, chatbotResponse3)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Angliongto south intersections')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/angg')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.jejeje;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.dedede;	
				  sendText(sender, chatbotResponse2)
				   chatbotResponse3 = response.data.ssaia;	
				  sendText(sender, chatbotResponse3)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Buhangin-Cabantian Rd')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/buhangin')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.bbsouth;
				 sendText(sender, chatbotResponse1)
				  chatbotResponse2 = response.data.bbnorth;	
				  sendText(sender, chatbotResponse2)
				
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Buhangin-Cabantian Rd south intersections')
			{	
				let chatbotResponse1 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/buhangin')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.cpp;
				 sendText(sender, chatbotResponse1)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Buhangin-Cabantian Rd north intersections')
			{	
				let chatbotResponse1 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/buhangin')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ddevs;
				 sendText(sender, chatbotResponse1)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Cabantian Rd')
			{	
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/cabantian')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.ccssouth;
				 sendText(sender, chatbotResponse1)	
				  chatbotResponse2 = response.data.ccsnorth;
				 sendText(sender, chatbotResponse2)		
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Cabantian Rd south intersections')
			{	
				let chatbotResponse1 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/cabantian')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.aale;
				 sendText(sender, chatbotResponse1)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Cabantian Rd north intersections')
			{	
				let chatbotResponse1 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/cabantian')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.aalle;
				 sendText(sender, chatbotResponse1)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Davao Bukidnon Rd')
			{	
				let chatbotResponse1 = "";
					let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.bbsouth;
				 sendText(sender, chatbotResponse1)	
				 chatbotResponse2 = response.data.bbnorth;
				 sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Davao Bukidnon Rd south intesections')
			{	
				let chatbotResponse1 = "";
					let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.qua;
				 sendText(sender, chatbotResponse1)	
				 chatbotResponse2 = response.data.ma;
				 sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}if(text == 'Davao Bukidnon Rd north intesections')
			{	
				let chatbotResponse1 = "";
					let chatbotResponse2 = "";
				axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
				  .then(function (response) {
				    //console.log(response);
				 chatbotResponse1 = response.data.mama;
				 sendText(sender, chatbotResponse1)	
				 chatbotResponse2 = response.data.qqua;
				 sendText(sender, chatbotResponse2)	
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = "not ok";
				  sendText(sender, chatbotResponse1)

				  });
				break;

			}else{
					
			if(text.includes('quir') || text.includes('Quir') ||  text.includes('Quer')|| text.includes('quer'))	
			{
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				sendText(sender, "I guess you mean  " +equirinsouth+". The traffic congestion in this road.")			
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/equirino')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisNorth;
				     chatbotResponse1 = response.data.analysisSouth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}
				if(text.includes('jp') || text.includes('Jp') ||  text.includes('Laurel')|| text.includes('laurel'))	
			{
				
				
				let chatbotResponse = "";
				let chatbotResponse1 = "";		
				sendText(sender, "I guess you mean J. P. Laurel. The traffic congestion in this road.")	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/jp')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisNorth;
				     chatbotResponse1 = response.data.analysisSouth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('mac') || text.includes('mc') ||  text.includes('Mac')|| text.includes('Mc')|| text.includes('mcarthur')|| text.includes('Mcarthur'))	
			{
				
				
				let chatbotResponse = "";
				let chatbotResponse1 = "";		
				sendText(sender, "I guess you mean Mac Arthur Hwy. The traffic congestion in this road.")	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/mcarthur')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.sou;
				     chatbotResponse1 = response.data.nou;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('ecowe') || text.includes('Ecowe') || text.includes('Eco we') || text.includes('eco we'))	
			{
			
				
				let chatbotResponse = "";
				let chatbotResponse1 = "";		
				sendText(sender, "I guess you mean Eco West Dr. The traffic congestion in this road.")	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.South;
				     chatbotResponse1 = response.data.North;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('ecola') || text.includes('Ecola') || text.includes('Eco la') || text.includes('eco la'))	
			{
				
				
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Ecoland. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/ecoland')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ssouth;
				     chatbotResponse1 = response.data.nnorth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('mati') || text.includes('Mati') || text.includes('mat') || text.includes('Mat'))	
			{
				
				
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Matina Aplaya Rd. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/matina')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.nert;
				     chatbotResponse1 = response.data.seot;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('tuli') || text.includes('Tuli'))	
			{
				sendText(sender, "I guess you mean Tulip Dr. The traffic congestion in this road.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/tulipdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.sotht;
				     chatbotResponse1 = response.data.nnor;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('sand') || text.includes('Sand') || text.includes('Sandawa') || text.includes('sandawa'))	
			{
					
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Sandawa. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/sandawa')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.south;
				     chatbotResponse1 = response.data.north;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('quim') || text.includes('Quim'))	
			{
					
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Quimpo Blvd. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/quimpoblvd')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.south;
				     chatbotResponse1 = response.data.north;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('mlque') || text.includes('Mlque') || text.includes('ml que') || text.includes('Ml que'))	
			{
					
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean M. L. Quezon Blvd. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/mlquezon')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.sourth;
				     chatbotResponse1 = response.data.nert;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('quez') || text.includes('Quez')|| text.includes('Quiz')|| text.includes('quiz'))	
			{
					
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Quezon Blvd. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/quezonblvd')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.que;
				     chatbotResponse1 = response.data.que1;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('cabag') || text.includes('Cabag'))	
			{
					
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Cabaguio Ave. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cabaguio')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ssouth;
				     chatbotResponse1 = response.data.nnort;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}
				if(text.includes('dac') || text.includes('Dac'))	
			{
					
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Dacudao Ave. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/dacudao')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.dsouth;
				     chatbotResponse1 = response.data.dnorth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('pich') || text.includes('Pich'))	
			{
					
				let chatbotResponse = "";
				//let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Pichon St. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/pichonst')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.southh;
				  //   chatbotResponse1 = response.data.dnorth;
    
				    sendText(sender, chatbotResponse)
				   // sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('sanped') || text.includes('Sanped')|| text.includes('sanPed')|| text.includes('SanPed'))	
			{
					
				let chatbotResponse = "";
				//let chatbotResponse1 = "";	
				sendText(sender, "I guess you mean Sanpedro St. The traffic congestion in this road.")		
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/sanpedro')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ssa;
				  //   chatbotResponse1 = response.data.dnorth;
    
				    sendText(sender, chatbotResponse)
				   // sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('torr') || text.includes('Torr')|| text.includes('tor')|| text.includes('Torr'))	
			{
					sendText(sender, "I guess you mean F. Torres St. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/torres')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.tssouth;
				     chatbotResponse1 = response.data.tnnorth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('bon') || text.includes('Bon') || text.includes('Bun')|| text.includes('bun'))	
			{
					sendText(sender, "I guess you mean A. Bonifacio St. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/bonifacio')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.bbsouth;
				     chatbotResponse1 = response.data.bbsouth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('rox') || text.includes('Rox') || text.includes('rux')|| text.includes('Rux'))	
			{
					sendText(sender, "I guess you mean M. Roxas. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse1 = "";	
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/mroxas')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.mmsouth;
				     chatbotResponse1 = response.data.mmnorth;
    
				    sendText(sender, chatbotResponse)
				    sendText(sender, chatbotResponse1)

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('cmrecto') || text.includes('Cmrecto') || text.includes('cm recto')|| text.includes('Cm recto')
					|| text.includes('Cm')|| text.includes('cm') || text.includes('rec')|| text.includes('Rec'))	
			{
				sendText(sender, "I guess you mean C. M. Recto. The traffic congestion in this road.")	
				let chatbotResponse = "";
				
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cmrecto')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.nnorth;
				    sendText(sender, chatbotResponse)
				    

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('cbangoy') || text.includes('bang') || text.includes('Bang')|| text.includes('c bang')
					|| text.includes('C bang')|| text.includes('c bang') || text.includes('C Bang'))	
			{
				sendText(sender, "I guess you mean C. Bangoy. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse1 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cbangoy')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ccsouth;
				    sendText(sender, chatbotResponse)
				      chatbotResponse1 = response.data.ccnorth;
				    sendText(sender, chatbotResponse1)
				    

				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Mag') || text.includes('mag'))	
			{
				sendText(sender, "I guess you mean R. Magsaysay Ave. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/rmagg')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.rssouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.rnnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Santa') || text.includes('santa')|| text.includes('sta')|| text.includes('Sta'))	
			{
				sendText(sender, "I guess you mean Sta. Ana Ave. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/sta')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ssouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.ssnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Lap') || text.includes('lap'))	
			{
				sendText(sender, "I guess you mean Lapu-Lapu. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/lapulapu')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.lnorth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.lsouth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Agdao') || text.includes('agdao'))	
			{
				sendText(sender, "I guess you mean Agdao Flyover. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/agadofly')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.anorth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.asouth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('casti') || text.includes('Casti'))	
			{
				sendText(sender, "I guess you mean R. Castillo. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/rcastillo')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.rrsouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.rrnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('garc') || text.includes('Garc'))	
			{
				sendText(sender, "I guess you mean C. P. Garcia. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/garcia')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ggsouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.ggnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Dive') || text.includes('dive'))	
			{
				sendText(sender, "I guess you mean Diversion Rd. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/diversion')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ddsouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.ddnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Quin') || text.includes('quin')|| text.includes('quen') || text.includes('Quen'))	
			{
				sendText(sender, "I guess you mean M. Quinones Rd. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/quenones')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.qsouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.qnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Rodri') || text.includes('rodri')|| text.includes('rodre')|| text.includes('Rodre'))	
			{
				sendText(sender, "I guess you mean J. Rodriguez Ma-A. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/rodri')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.jssouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.jnnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Ma') || text.includes('ma')|| text.includes('ma')|| text.includes('Ma'))	
			{
				sendText(sender, "I guess you mean Ma-A Rd. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/maa')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.mmsouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.mmnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Shr') || text.includes('shr')|| text.includes('cag')|| text.includes('Cagu'))	
			{
				sendText(sender, "I guess you mean Shrine Hills Rd//S Cuyugan. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/shrine')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.sssouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.sssnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Angl') || text.includes('angl'))	
			{
				sendText(sender, "I guess you mean Angliongto. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/angg')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.aasouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.aanorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Buhan') || text.includes('buha'))	
			{
				sendText(sender, "I guess you mean Buhangin-Cabantian Rd. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/buhangin')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.bbsouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.bbnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Cabant') || text.includes('cabant'))	
			{
				sendText(sender, "I guess you mean Cabantian Rd. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/cabantian')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.ccssouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.ccsnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}if(text.includes('Bukid') || text.includes('bukid'))	
			{
				sendText(sender, "I guess you mean Davao Bukidnon Rd. The traffic congestion in this road.")	
				let chatbotResponse = "";
				let chatbotResponse2 = "";
					
				//source : https://www.npmjs.com/package/axios
				axios.get('https://whispering-inlet-28384.herokuapp.com/bukidnon')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.bbsouth;
				    sendText(sender, chatbotResponse)
				     chatbotResponse2 = response.data.bbnorth;
				    sendText(sender, chatbotResponse2)			    
				   
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				     chatbotResponse1 = "not ok";
				    sendText(sender, chatbotResponse1)
				 

				  });
				  break;

				}else{
					sendText(sender, "Oooooppss! I cannot recognize the road you specify! Please check your spelling or maybe that road is out of my scope! ");
				}


				}

		
			}
				
			
	}



}




	res.sendStatus(200)
})





function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(app.get('port'), function() {
	console.log("running: ", app.get('port'))
})