'use strict'
//global//
var equirino1;
var jplaurel1;
var mcarthur1;
var ecowestdr1;
var matinaaplaya1;
var ecoland1;
var tulipdr1;
var quimpoblvd1;
var sandawa1;

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https');
const axios = require('axios');
//var express = require('express')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES

app.get('/', function(req, res) {
	res.send("Hi I am a chatbot")
})

let token = "EAAimrKFwRkIBANhp34pVkXyR2joBUq9INneq877fwSZA0Soszdaeb63x4qBIf2xZCi77fte0twclNpjmTySyBZCAfPNwLHSJlEkTltvsChSIBZBmzzKPdlPeT9nelakZChxiI88ViLybZBi1dyxYwJfvXGe8Yj3vD8n0Cbmg3pSQZDZD"

// Facebook 

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "wow") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})
app.get('/equirino',function(_req, _res){
	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  	
		//equirino south

		//equirino south intersections	 	
		equirino1 = body.RWS[0].RW[0].DE;
	  	const intc1 = body.RWS[0].RW[0].FIS[0].FI[0].TMC.DE;
	  	const jf1 = body.RWS[0].RW[0].FIS[0].FI[0].CF[0].JF;  	
	  	const intc2 = body.RWS[0].RW[0].FIS[0].FI[1].TMC.DE;
	  	const jf2 = body.RWS[0].RW[0].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[0].FIS[0].FI[2].TMC.DE;
	  	const jf3 = body.RWS[0].RW[0].FIS[0].FI[2].CF[0].JF;
	  	const intc4 = body.RWS[0].RW[0].FIS[0].FI[3].TMC.DE;
	  	const jf4 = body.RWS[0].RW[0].FIS[0].FI[3].CF[0].JF;
	  	const intc5 = body.RWS[0].RW[0].FIS[0].FI[4].TMC.DE;
	  	const jf5 = body.RWS[0].RW[0].FIS[0].FI[4].CF[0].JF;
	  	var p = ' ';
 
	  	let analysisjf1 = "";
	  	if(jf1 == 0 || jf1 < 4){
	  		analysisjf1 = "For"+p+intc1+p+ "South bound Free flow of traffic";
	  	}else if(jf1 == 4 || jf1 < 8){
	  		analysisjf1 = "For"+p+intc1+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf1 == 8 || jf1 < 10){
	  		analysisjf1 = "For"+p+intc1+p+ "South bound Slow flow of traffic";
	  	}else if(jf1 == 10){
	  		analysisjf1 = "For"+p+intc1+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysisjf1 = "Cannot compute"
	  	}

	  	let analysisjf2 = "";
	  	if(jf2 == 0 || jf2 < 4){
	  		analysisjf2 = "For"+p+intc2+p+ "South bound Free flow of traffic";
	  	}else if(jf2 == 4 || jf2 < 8){
	  		analysisjf2 = "For"+p+intc2+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf2 == 8 || jf2 < 10){
	  		analysisjf2 = "For"+p+intc2+p+ "South bound Slow flow of traffic";
	  	}else if(jf2 == 10){
	  		analysisjf2 = "For"+p+intc2+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysisjf2 = "Cannot compute"
	  	}

	  	let analysisjf3 = "";
	  	if(jf3 == 0 || jf3 < 4){
	  		analysisjf3 = "For"+p+intc3+p+ "South bound Free flow of traffic";
	  	}else if(jf3 == 4 || jf3 < 8){
	  		analysisjf3 = "For"+p+intc3+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf3 == 8 || jf3 < 10){
	  		analysisjf3 = "For"+p+intc3+p+ "South bound Slow flow of traffic";
	  	}else if(jf3 == 10){
	  		analysisjf3 = "For"+p+intc3+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysisjf3 = "Cannot compute"
	  	}

	  	let analysisjf4 = "";
	  	if(jf4 == 0 || jf4 < 4){
	  		analysisjf4 = "For"+p+intc4+p+ "South bound Free flow of traffic";
	  	}else if(jf4 == 4 || jf4 < 8){
	  		analysisjf4 = "For"+p+intc4+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf4 == 8 || jf4 < 10){
	  		analysisjf4 = "For"+p+intc4+p+ "South bound Slow flow of traffic";
	  	}else if(jf4 == 10){
	  		analysisjf4 = "For"+p+intc4+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysisjf4 = "Cannot compute"
	  	}

	  	let analysisjf5 = "";
	  	if(jf5 == 0 || jf5 < 4){
	  		analysisjf5 = "For"+p+intc5+p+ "South bound Free flow of traffic";
	  	}else if(jf5 == 4 || jf5 < 8){
	  		analysisjf5 = "For"+p+intc5+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf5 == 8 || jf5 < 10){
	  		analysisjf5 = "For"+p+intc5+p+ "South bound Slow flow of traffic";
	  	}else if(jf5 == 10){
	  		analysisjf5 = "For"+p+intc5+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysisjf5 = "Cannot compute"
	 	}
		//equirino north

	  	//equirino north intersection
	  	const equirinoo1 = body.RWS[0].RW[1].DE;
	  	const intc6 = body.RWS[0].RW[1].FIS[0].FI[0].TMC.DE;
	  	const jf6 = body.RWS[0].RW[1].FIS[0].FI[0].CF[0].JF;
	  	const intc7 = body.RWS[0].RW[1].FIS[0].FI[1].TMC.DE;
	  	const jf7 = body.RWS[0].RW[1].FIS[0].FI[1].CF[0].JF;
	  	const intc8 = body.RWS[0].RW[1].FIS[0].FI[2].TMC.DE;
	  	const jf8 = body.RWS[0].RW[1].FIS[0].FI[2].CF[0].JF;
	  	const intc9 = body.RWS[0].RW[1].FIS[0].FI[3].TMC.DE;
	  	const jf9 = body.RWS[0].RW[1].FIS[0].FI[3].CF[0].JF;
	  	const intc10 = body.RWS[0].RW[1].FIS[0].FI[4].TMC.DE;
	  	const jf10 = body.RWS[0].RW[1].FIS[0].FI[4].CF[0].JF;
	  	var va  = ' ';
	  	let analysisjf6 = "";
	  	if(jf6 == 0 || jf6 < 4){
	  		analysisjf6 = "For"+va+intc6+va+ "North bound lane Free flow of traffic";
	  	}else if(jf6 == 4 || jf6 < 8){
	  		analysisjf6 = "For"+va+intc6+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf6 == 8 || jf6 < 10){
	  		analysisjf6 = "For"+va+intc6+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf6 == 10){
	  		analysisjf6 = "For"+va+intc6+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysisjf6 = "Cannot compute"
	  	}
	  	let analysisjf7 = "";
	  	if(jf7 == 0 || jf7 < 4){
	  		analysisjf7 = "For"+va+intc7+va+ "North bound lane Free flow of traffic";
	  	}else if(jf7 == 4 || jf7 < 8){
	  		analysisjf7 = "For"+va+intc7+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf7 == 8 || jf7 < 10){
	  		analysisjf7 = "For"+va+intc7+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf7 == 10){
	  		analysisjf7 = "For"+va+intc7+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysisjf7 = "Cannot compute"
	  	}
	  	let analysisjf8 = "";
	  	if(jf8 == 0 || jf8 < 4){
	  		analysisjf8 = "For"+va+intc8+va+ "North bound lane Free flow of traffic";
	  	}else if(jf8 == 4 || jf8 < 8){
	  		analysisjf8 = "For"+va+intc8+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf8 == 8 || jf8 < 10){
	  		analysisjf8 = "For"+va+intc8+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf8 == 10){
	  		analysisjf8 = "For"+va+intc8+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysisjf8 = "Cannot compute"
	  	}
	  	let analysisjf9 = "";
	  	if(jf9 == 0 || jf9 < 4){
	  		analysisjf9 = "For"+va+intc9+va+ "North bound lane Free flow of traffic";
	  	}else if(jf9 == 4 || jf9 < 8){
	  		analysisjf9 = "For"+va+intc9+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf9 == 8 || jf9 < 10){
	  		analysisjf9 = "For"+va+intc9+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf9 == 10){
	  		analysisjf9 = "For"+va+intc9+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysisjf9 = "Cannot compute"
	  	}
	  	let analysisjf10 = "";
	  	if(jf10 == 0 || jf10 < 4){
	  		analysisjf10 = "For"+va+intc10+va+ "North bound lane Free flow of traffic";
	  	}else if(jf10 == 4 || jf10 < 8){
	  		analysisjf10 = "For"+va+intc10+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf10 == 8 || jf10 < 10){
	  		analysisjf10 = "For"+va+intc10+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf10 == 10){
	  		analysisjf10 = "For"+va+intc10+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysisjf10 = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ equirino1: equirino1, intc1: intc1, jf1: jf1,  intc2: intc2, jf2: jf2,  intc3: intc3, jf3: jf3, 
    		intc4: intc4, jf4: jf4,  intc5: intc5, jf5: jf5, analysisjf1: analysisjf1, analysisjf2: analysisjf2, analysisjf3:analysisjf3, analysisjf4:analysisjf4, 
    		analysisjf5:analysisjf5,equirinoo1: equirinoo1, intc6: intc6, jf6: jf6,  intc7: intc7, jf7: jf7,  intc8: intc8, jf8: jf8, 
    		intc9: intc9, jf9: jf9,  intc10: intc10, jf10: jf10, analysisjf6: analysisjf6, analysisjf7: analysisjf7, analysisjf8:analysisjf8, analysisjf9:analysisjf9, 
    		analysisjf10:analysisjf10}));	  
	});
});
// app.get('/jplaurel',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }
// 	  	//jp south

// 	  	//jp south intersections  	
// 	  	streetj = body.RWS[0].RW[2].DE;
// 	  	const int001 = body.RWS[0].RW[2].FIS[0].FI[0].TMC.DE;
// 	  	const jf001 = body.RWS[0].RW[2].FIS[0].FI[0].CF[0].JF;	
// 	  	const int002 = body.RWS[0].RW[2].FIS[0].FI[1].TMC.DE;
// 	  	const jf002 = body.RWS[0].RW[2].FIS[0].FI[1].CF[0].JF;
// 	 	const int003 = body.RWS[0].RW[2].FIS[0].FI[2].TMC.DE;
// 	  	const jf003 = body.RWS[0].RW[2].FIS[0].FI[2].CF[0].JF;
// 	  	const int004 = body.RWS[0].RW[2].FIS[0].FI[3].TMC.DE;
// 	  	const jf004 = body.RWS[0].RW[2].FIS[0].FI[3].CF[0].JF;
// 	  	const int005 = body.RWS[0].RW[2].FIS[0].FI[4].TMC.DE;
// 	  	const jf005 = body.RWS[0].RW[2].FIS[0].FI[4].CF[0].JF;
// 		const int006 = body.RWS[0].RW[2].FIS[0].FI[5].TMC.DE;
// 	  	const jf006 = body.RWS[0].RW[2].FIS[0].FI[5].CF[0].JF;
// 	  	var vva = ' ';
// 	    let analysisjp01 = "";
// 	  	if(jf001 == 0 || jf001 < 4){
// 	  	analysisjp01 = "For"+vva+int001+vva+ "South bound lane Free flow of traffic";
// 	  	}else if(jf001 == 4 || jf001 < 8){
// 	  		analysisjp01 = "For"+vva+int001+vva+ "South bound Sluggish flow of traffic";
// 	  	}else if(jf001 == 8 || jf001 < 10){
// 	  		analysisjp01 = "For"+vva+int001+vva+ "South bound Slow flow of traffic";
// 	  	}else if(jf001 == 10){
// 	  		analysisjp01 = "For"+vva+int001+vva+ "South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp01 = "Cannot compute"
// 	  	}
// 	  	let analysisjp02 = "";
// 	  	if(jf002 == 0 || jf002 < 4){
// 	  	analysisjp02 = "For"+vva+int002+vva+ "South bound Free flow of traffic";
// 	  	}else if(jf002 == 4 || jf002 < 8){
// 	  		analysisjp02 = "For"+vva+int002+vva+ "South bound Sluggish flow of traffic";
// 	  	}else if(jf002 == 8 || jf002 < 10){
// 	  		analysisjp02 = "For"+vva+int002+vva+ "South bound Slow flow of traffic";
// 	  	}else if(jf002 == 10){
// 	  		analysisjp02 = "For"+vva+int002+vva+ "South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp02 = "Cannot compute"
// 	  	}
// 	  	let analysisjp03 = "";
// 	  	if(jf003 == 0 || jf003 < 4){
// 	  	analysisjp03 = "For"+vva+int003+vva+ "South bound Free flow of traffic";
// 	  	}else if(jf003 == 4 || jf003 < 8){
// 	  		analysisjp03 = "For"+vva+int003+vva+ "South bound Sluggish flow of traffic";
// 	  	}else if(jf003 == 8 || jf003 < 10){
// 	  		analysisjp03 = "For"+vva+int003+vva+ "South bound Slow flow of traffic";
// 	  	}else if(jf003 == 10){
// 	  		analysisjp03 = "For"+vva+int003+vva+ "South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp03 = "Cannot compute"
// 	  	}
// 	  	let analysisjp04 = "";
// 	  	if(jf004 == 0 || jf004 < 4){
// 	  	analysisjp04 = "For"+vva+int004+vva+ "South bound Free flow of traffic";
// 	  	}else if(jf004 == 4 || jf004 < 8){
// 	  		analysisjp04 = "For"+vva+int004+vva+ "South bound Sluggish flow of traffic";
// 	  	}else if(jf004 == 8 || jf004 < 10){
// 	  		analysisjp04 = "For"+vva+int004+vva+ "South bound Slow flow of traffic";
// 	  	}else if(jf004 == 10){
// 	  		analysisjp04 = "For"+vva+int004+vva+ "South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp04 = "Cannot compute"
// 	  	}

// 	  	let analysisjp05 = "";
// 	  	if(jf005 == 0 || jf005 < 4){
// 	  	analysisjp05 = "For"+vva+int005+vva+ "South bound Free flow of traffic";
// 	  	}else if(jf005 == 4 || jf005 < 8){
// 	  		analysisjp05 = "For"+vva+int005+vva+ "South bound Sluggish flow of traffic";
// 	  	}else if(jf005 == 8 || jf005 < 10){
// 	  		analysisjp05 = "For"+vva+int005+vva+ "South bound Slow flow of traffic";
// 	  	}else if(jf005 == 10){
// 	  		analysisjp05 = "For"+vva+int005+vva+ "South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp05 = "Cannot compute"
// 	  	}
// 	    let analysisjp06 = "";
// 	  	if(jf006 == 0 || jf006 < 4){
// 	  	analysisjp06 = "For"+vva+int006+vva+ "South bound Free flow of traffic";
// 	  	}else if(jf006 == 4 || jf006 < 8){
// 	  		analysisjp06 = "For"+vva+int006+vva+ "South bound Sluggish flow of traffic";
// 	  	}else if(jf006 == 8 || jf006 < 10){
// 	  		analysisjp06 = "For"+vva+int006+vva+ "South bound Slow flow of traffic";
// 	  	}else if(jf006 == 10){
// 	  		analysisjp06 = "For"+vva+int006+vva+ "South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp06 = "Cannot compute"
// 	  	}
// 	  	//jp north 

// 	  	//jp north intersections
// 	  	const street2 = body.RWS[0].RW[3].DE;
// 	  	const int01 = body.RWS[0].RW[3].FIS[0].FI[0].TMC.DE;
// 	  	const jf01 = body.RWS[0].RW[3].FIS[0].FI[0].CF[0].JF;
// 	  	const int02 = body.RWS[0].RW[3].FIS[0].FI[1].TMC.DE;
// 	  	const jf02 = body.RWS[0].RW[3].FIS[0].FI[1].CF[0].JF;
// 	  	const int03 = body.RWS[0].RW[3].FIS[0].FI[2].TMC.DE;
// 	  	const jf03 = body.RWS[0].RW[3].FIS[0].FI[2].CF[0].JF;
// 	  	const int04 = body.RWS[0].RW[3].FIS[0].FI[3].TMC.DE;
// 	  	const jf04 = body.RWS[0].RW[3].FIS[0].FI[3].CF[0].JF;
// 	  	const int05 = body.RWS[0].RW[3].FIS[0].FI[4].TMC.DE;
// 	  	const jf05 = body.RWS[0].RW[3].FIS[0].FI[4].CF[0].JF;
// 	  	const int06 = body.RWS[0].RW[3].FIS[0].FI[5].TMC.DE;
// 	  	const jf06 = body.RWS[0].RW[3].FIS[0].FI[5].CF[0].JF;
// 	  	var pp = ' ';
// 	  	let analysisjp1 = "";
// 	  	if(jf01 == 0 || jf01 < 4){
// 	  	analysisjp1 = "For"+pp+int01+pp+"North bound lane Free flow of traffic";
// 	  	}else if(jf01 == 4 || jf01 < 8){
// 	  		analysisjp1 = "For"+pp+int01+pp+"North bound lane Free Sluggish flow of traffic";
// 	  	}else if(jf01 == 8 || jf01 < 10){
// 	  		analysisjp1 = "For"+pp+int01+pp+"North bound lane Free Slow flow of traffic";
// 	  	}else if(jf01 == 10){
// 	  		analysisjp1 = "For"+pp+int01+pp+"North bound lane Free Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp1 = "Cannot compute"
// 	  	}
// 	  	let analysisjp2 = "";
// 	  	if(jf02 == 0 || jf02 < 4){
// 	  	analysisjp2 = "For"+pp+int02+pp+"North bound lane Free Angliongto: Free flow of traffic";
// 	  	}else if(jf02 == 4 || jf02 < 8){
// 	  		analysisjp2 = "For"+pp+int02+pp+"North bound lane Free Sluggish flow of traffic";
// 	  	}else if(jf02 == 8 || jf02 < 10){
// 	  		analysisjp2 = "For"+pp+int02+pp+"North bound lane Free Slow flow of traffic";
// 	  	}else if(jf02 == 10){
// 	  		analysisjp2 = "For"+pp+int02+pp+"North bound lane Free Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp2 = "Cannot compute"
// 	  	}
// 	  	let analysisjp3 = "";
// 	  	if(jf03 == 0 || jf03 < 4){
// 	  	analysisjp3 = "For"+pp+int03+pp+"North bound lane Free Free flow of traffic";
// 	  	}else if(jf03 == 4 || jf03 < 8){
// 	  		analysisjp3 = "For"+pp+int03+pp+"North bound lane Free Sluggish flow of traffic";
// 	  	}else if(jf03 == 8 || jf03 < 10){
// 	  		analysisjp3 = "For"+pp+int03+pp+"North bound lane Free Slow flow of traffic";
// 	  	}else if(jf03 == 10){
// 	  		analysisjp3 = "For"+pp+int03+pp+"North bound lane Free Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp3 = "Cannot compute"
// 	  	}
// 	  	let analysisjp4 = "";
// 	  	if(jf04 == 0 || jf04 < 4){
// 	  	analysisjp4 = "For"+pp+int04+pp+"North bound lane Free Free flow of traffic";
// 	  	}else if(jf04 == 4 || jf04 < 8){
// 	  		analysisjp4 = "For"+pp+int04+pp+"North bound lane Free Sluggish flow of traffic";
// 	  	}else if(jf04 == 8 || jf04 < 10){
// 	  		analysisjp4 = "For"+pp+int04+pp+"North bound lane Free Slow flow of traffic";
// 	  	}else if(jf04 == 10){
// 	  		analysisjp4 = "For"+pp+int04+pp+"North bound lane Free Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp4 = "Cannot compute"
// 	  	}
// 	  	let analysisjp5 = "";
// 	  	if(jf05 == 0 || jf05 < 4){
// 	  	analysisjp5 = "For"+pp+int05+pp+"North bound lane Free Free flow of traffic";
// 	  	}else if(jf05 == 4 || jf05 < 8){
// 	  		analysisjp5 = "For"+pp+int05+pp+"North bound lane Free Sluggish flow of traffic";
// 	  	}else if(jf05 == 8 || jf05 < 10){
// 	  		analysisjp5 = "For"+pp+int05+pp+"North bound lane Free Slow flow of traffic";
// 	  	}else if(jf05 == 10){
// 	  		analysisjp5 = "For"+pp+int05+pp+"North bound lane Free Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp5 = "Cannot compute"
// 	  	}
// 	  	let analysisjp6 = "";
// 	  	if(jf06 == 0 || jf06 < 4){
// 	  	analysisjp6 = "For"+pp+int06+pp+"North bound lane Free Free flow of traffic";
// 	  	}else if(jf06 == 4 || jf06 < 8){
// 	  		analysisjp6 = "For"+pp+int06+pp+"North bound lane Free Sluggish flow of traffic";
// 	  	}else if(jf06 == 8 || jf06 < 10){
// 	  		analysisjp6 = "For"+pp+int06+pp+"North bound lane Free Slow flow of traffic";
// 	  	}else if(jf06 == 10){
// 	  		analysisjp6 = "For"+pp+int06+pp+"North bound lane Free Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysisjp6 = "Cannot compute"
// 	  	}
// 	  	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ streetj: streetj,int01: int01, jf01: jf01,  int02: int02, jf02: jf02,  int03: int03, jf03: jf03,  
//     		int04: int04, jf04: jf04,  int05: int05, jf05: jf05, int06: int06,jf06:jf06,analysisjp1:analysisjp1, analysisjp2:analysisjp2, analysisjp3:analysisjp3,
//     		analysisjp4:analysisjp4, analysisjp5:analysisjp5,analysisjp6:analysisjp6,street1: street1,int001: int001, jf001: jf001,  int002: int002, jf002:  jf002 ,int003: int003, jf003: jf003, int004: int004, jf004: jf004,  int005: int005, jf005: jf005,
//     		int006:int006,jf006:jf006, analysisjp6:analysisjp6,
// 		analysisjp01:analysisjp01, analysisjp02:analysisjp02, analysisjp03:analysisjp03,
//     		analysisjp04:analysisjp04, analysisjp05:analysisjp05, analysisjp06:analysisjp06}));
	 
// 	});
// });
// app.get('/mcarthur',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }
	  	
// 	  	//south intersections
// 	  	streetmm = body.RWS[0].RW[4].DE;
// 	  	const intm = body.RWS[0].RW[4].FIS[0].FI[0].TMC.DE;
// 	  	const jfm = body.RWS[0].RW[4].FIS[0].FI[0].CF[0].JF;
// 	  	const intm1 = body.RWS[0].RW[4].FIS[0].FI[1].TMC.DE;
// 	  	const jf02 = body.RWS[0].RW[4].FIS[0].FI[1].CF[0].JF;
// 		const intm2 = body.RWS[0].RW[4].FIS[0].FI[2].TMC.DE;
// 	  	const jfm2 = body.RWS[0].RW[4].FIS[0].FI[2].CF[0].JF;
// 		const intm3 = body.RWS[0].RW[4].FIS[0].FI[3].TMC.DE;
// 	  	const jfm3 = body.RWS[0].RW[4].FIS[0].FI[3].CF[0].JF;
// 	  	const intm4 = body.RWS[0].RW[4].FIS[0].FI[4].TMC.DE;
// 	  	const jfm4 = body.RWS[0].RW[4].FIS[0].FI[4].CF[0].JF;
// 	  	const intm5 = body.RWS[0].RW[4].FIS[0].FI[5].TMC.DE;
// 	  	const jfm5 = body.RWS[0].RW[4].FIS[0].FI[5].CF[0].JF;
// 	  	const intm6 = body.RWS[0].RW[4].FIS[0].FI[6].TMC.DE;
// 	  	const jfm6 = body.RWS[0].RW[4].FIS[0].FI[6].CF[0].JF;
// 	  	const intm7 = body.RWS[0].RW[4].FIS[0].FI[7].TMC.DE;
// 	  	const jfm7 = body.RWS[0].RW[4].FIS[0].FI[7].CF[0].JF;
// 	  	const intm8 = body.RWS[0].RW[4].FIS[0].FI[8].TMC.DE;
// 	  	const jfm8 = body.RWS[0].RW[4].FIS[0].FI[8].CF[0].JF;
// 	  	const intm9 = body.RWS[0].RW[4].FIS[0].FI[9].TMC.DE;
// 	  	const jfm9 = body.RWS[0].RW[4].FIS[0].FI[9].CF[0].JF;
// 	  	const intm10 = body.RWS[0].RW[4].FIS[0].FI[10].TMC.DE;
// 	  	const jfm10  = body.RWS[0].RW[4].FIS[0].FI[10].CF[0].JF;	
// 	  	const intm11 = body.RWS[0].RW[4].FIS[0].FI[11].TMC.DE;
// 	  	const jfm11 = body.RWS[0].RW[4].FIS[0].FI[11].CF[0].JF;
// 	  	const intm12 = body.RWS[0].RW[4].FIS[0].FI[12].TMC.DE;
// 	  	const jfm12 = body.RWS[0].RW[4].FIS[0].FI[12].CF[0].JF;
// 	  	const intm13 = body.RWS[0].RW[4].FIS[0].FI[13].TMC.DE;
// 	  	const jfm13 = body.RWS[0].RW[4].FIS[0].FI[13].CF[0].JF;
// 	  	var ya = ' ';
// 	  	let analysis35 = "";
// 	  	if(jfm == 0 || jfm < 4){
// 	  	analysis35 = "For"+ya+intm+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm == 4 || jfm < 8){
// 	  		analysis35 = "For"+ya+intm+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm == 8 || jfm < 10){
// 	  		analysis35 = "For"+ya+intm+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm == 10){
// 	  		analysis35 = "For"+ya+intm+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis35 = "Cannot compute"
// 	  	}
// 	  	let analysis22 = "";
// 	  	if(jf02 == 0 || jf02 < 4){
// 	  	analysis22 = "For"+ya+intm1+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jf02 == 4 || jf02 < 8){
// 	  		analysis22 = "For"+ya+intm1+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jf02 == 8 || jf02 < 10){
// 	  		analysis22 = "For"+ya+intm1+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jf02 == 10){
// 	  		analysis22 = "For"+ya+intm1+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis22 = "Cannot compute"
// 	  	}
// 	  	let analysis23 = "";
// 	  	if(jfm2 == 0 || jfm2 < 4){
// 	  	analysis23 = "For"+ya+intm2+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm2 == 4 || jfm2 < 8){
// 	  		analysis23 = "For"+ya+intm2+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm2 == 8 || jfm2 < 10){
// 	  		analysis23 = "For"+ya+intm2+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm2 == 10){
// 	  		analysis23 = "For"+ya+intm2+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis23 = "Cannot compute"
// 	  	} 	
// 	  	let analysis24 = "";
// 	  	if(jfm3 == 0 || jfm3 < 4){
// 	  	analysis24 = "For"+ya+intm3+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm3 == 4 || jfm3 < 8){
// 	  		analysis24 = "For"+ya+intm3+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm3 == 8 || jfm3 < 10){
// 	  		analysis24 = "For"+ya+intm3+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm3 == 10){
// 	  		analysis24 = "For"+ya+intm3+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis24 = "Cannot compute"
// 	  	} 	
// 	  	let analysis25 = "";
// 	  	if(jfm4 == 0 || jfm4 < 4){
// 	  	analysis25 = "For"+ya+intm4+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm4 == 4 || jfm4 < 8){
// 	  		analysis25 = "For"+ya+intm4+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm4 == 8 || jfm4 < 10){
// 	  		analysis25 = "For"+ya+intm4+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm4 == 10){
// 	  		analysis25 = "For"+ya+intm4+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis25 = "Cannot compute"
// 	  	} 	
// 	  	let analysis26 = "";
// 	  	if(jfm5 == 0 || jfm5 < 4){
// 	  	analysis26 = "For"+ya+intm5+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm5 == 4 || jfm5 < 8){
// 	  		analysis26 = "For"+ya+intm5+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm5 == 8 || jfm5 < 10){
// 	  		analysis26 = "For"+ya+intm5+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm5 == 10){
// 	  		analysis26 = "For"+ya+intm5+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis26 = "Cannot compute"
// 	  	}
// 	  	let analysis27 = "";
// 	  	if(jfm6 == 0 || jfm6 < 4){
// 	  	analysis27 = "For"+ya+intm6+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm6 == 4 || jfm6 < 8){
// 	  		analysis27 = "For"+ya+intm6+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm6 == 8 || jfm6 < 10){
// 	  		analysis27 = "For"+ya+intm6+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm6 == 10){
// 	  		analysis27 = "For"+ya+intm+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis27 = "Cannot compute"
// 	  	}
// 	  	let analysis28 = "";
// 	  	if(jfm7 == 0 || jfm7 < 4){
// 	  	analysis28 = "For"+ya+intm7+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm7 == 4 || jfm7 < 8){
// 	  		analysis28 = "For"+ya+intm7+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm7 == 8 || jfm7 < 10){
// 	  		analysis28 = "For"+ya+intm7+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm7 == 10){
// 	  		analysis28 = "For"+ya+intm7+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis28 = "Cannot compute"
// 	  	}
// 	  	let analysis29 = "";
// 	  	if(jfm8 == 0 || jfm8 < 4){
// 	  	analysis29 = "For"+ya+intm8+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm8 == 4 || jfm8 < 8){
// 	  		analysis29 = "For"+ya+intm8+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm8 == 8 || jfm8 < 10){
// 	  		analysis29 = "For"+ya+intm8+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm8 == 10){
// 	  		analysis29 = "For"+ya+intm8+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis29 = "Cannot compute"
// 	  	}
// 	  	let analysis30 = "";
// 	  	if(jfm9 == 0 || jfm9 < 4){
// 	  	analysis30 = "For"+ya+intm9+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm9 == 4 || jfm9 < 8){
// 	  		analysis30 = "For"+ya+intm9+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm9 == 8 || jfm9 < 10){
// 	  		analysis30 = "For"+ya+intm9+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm9 == 10){
// 	  		analysis30 = "For"+ya+intm9+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis30 = "Cannot compute"
// 	  	}
// 	  	let analysis31 = "";
// 	  	if(jfm10 == 0 || jfm10 < 4){
// 	  	analysis31 = "For"+ya+intm10+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm10 == 4 || jfm10 < 8){
// 	  		analysis31 = "For"+ya+intm10+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm10 == 8 || jfm10 < 10){
// 	  		analysis31 = "For"+ya+intm10+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm10 == 10){
// 	  		analysis31 = "For"+ya+intm10+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis31 = "Cannot compute"
// 	  	}
// 	  	let analysis32 = "";
// 	  	if(jfm11 == 0 || jfm11 < 4){
// 	  	analysis32 = "For"+ya+intm11+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm11 == 4 || jfm11 < 8){
// 	  		analysis32 = "For"+ya+intm11+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm11 == 8 || jfm11 < 10){
// 	  		analysis32 = "For"+ya+intm11+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm11 == 10){
// 	  		analysis32 = "For"+ya+intm11+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis32 = "Libby Rd"
// 	  	}
// 	  	let analysis33 = "";
// 	  	if(jfm12 == 0 || jfm12 < 4){
// 	  	analysis33 = "For"+ya+intm12+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm12 == 4 || jfm12 < 8){
// 	  		analysis33 = "For"+ya+intm12+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm12 == 8 || jfm12 < 10){
// 	  		analysis33 = "For"+ya+intm12+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm12 == 10){
// 	  		analysis33 = "For"+ya+intm12+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis33 = "Cannot compute"
// 	  	}
// 	  	let analysis34 = "";
// 	  	if(jfm13 == 0 || jfm13 < 4){
// 	  	analysis34 = "For"+ya+intm13+ya+"South bound lane Free flow of traffic";
// 	  	}else if(jfm13 == 4 || jfm13 < 8){
// 	  		analysis34 = "For"+ya+intm13+ya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm13 == 8 || jfm13 < 10){
// 	  		analysis34 = "For"+ya+intm13+ya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm13 == 10){
// 	  		analysis34 = "For"+ya+intm13+ya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis34 = "Cannot compute"
// 	  	}

// 	  	//north intersections
// 	  	const streetmmm = body.RWS[0].RW[5].DE;
// 	  	const intmm = body.RWS[0].RW[5].FIS[0].FI[0].TMC.DE;
// 	  	const jfmm = body.RWS[0].RW[5].FIS[0].FI[0].CF[0].JF;
// 	  	const intmm1 = body.RWS[0].RW[5].FIS[0].FI[1].TMC.DE;
// 	  	const jfm02 = body.RWS[0].RW[5].FIS[0].FI[1].CF[0].JF;
// 	  	const intmm2 = body.RWS[0].RW[5].FIS[0].FI[2].TMC.DE;
// 	  	const jfmm2 = body.RWS[0].RW[5].FIS[0].FI[2].CF[0].JF;
// 	  	const intmm3 = body.RWS[0].RW[5].FIS[0].FI[3].TMC.DE;
// 	  	const jfmm3 = body.RWS[0].RW[5].FIS[0].FI[3].CF[0].JF;
// 	  	const intmm4 = body.RWS[0].RW[5].FIS[0].FI[4].TMC.DE;
// 	  	const jfmm4 = body.RWS[0].RW[5].FIS[0].FI[4].CF[0].JF;
// 	  	const intmm5 = body.RWS[0].RW[5].FIS[0].FI[5].TMC.DE;
// 	  	const jfmm5 = body.RWS[0].RW[5].FIS[0].FI[5].CF[0].JF;
// 	  	const intmm6 = body.RWS[0].RW[5].FIS[0].FI[6].TMC.DE;
// 	  	const jfmm6 = body.RWS[0].RW[5].FIS[0].FI[6].CF[0].JF;
// 	  	const intmm7 = body.RWS[0].RW[5].FIS[0].FI[7].TMC.DE;
// 	  	const jfmm7 = body.RWS[0].RW[5].FIS[0].FI[7].CF[0].JF;
// 	  	const intmm8 = body.RWS[0].RW[5].FIS[0].FI[8].TMC.DE;
// 	  	const jfmm8 = body.RWS[0].RW[5].FIS[0].FI[8].CF[0].JF;
// 	  	const intmm9 = body.RWS[0].RW[5].FIS[0].FI[9].TMC.DE;
// 	  	const jfmm9 = body.RWS[0].RW[5].FIS[0].FI[9].CF[0].JF;
// 	  	const intmm10 = body.RWS[0].RW[5].FIS[0].FI[10].TMC.DE;
// 	  	const jfmm10  = body.RWS[0].RW[5].FIS[0].FI[10].CF[0].JF;	
// 	  	const intmm11 = body.RWS[0].RW[5].FIS[0].FI[11].TMC.DE;
// 	  	const jfmm11 = body.RWS[0].RW[5].FIS[0].FI[11].CF[0].JF;
// 	  	const intmm12 = body.RWS[0].RW[5].FIS[0].FI[12].TMC.DE;
// 	  	const jfmm12 = body.RWS[0].RW[5].FIS[0].FI[12].CF[0].JF;	
// 	  	const intmm13 = body.RWS[0].RW[5].FIS[0].FI[13].TMC.DE;
// 	  	const jfmm13 = body.RWS[0].RW[5].FIS[0].FI[13].CF[0].JF;

// 		let analysis222 = "";
// 	  	if(jfmm == 0 || jfmm < 4){
// 	  	analysis222 = "For"+ya+intmm+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm == 4 || jfmm < 8){
// 	  		analysis222 = "For"+ya+intmm+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm == 8 || jfmm < 10){
// 	  		analysi2s22 = "For"+ya+intmm+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm == 10){
// 	  		analysis222 = "For"+ya+intmm+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis222 = "Cannot compute"
// 	  	}
// 	  	let analysis223 = "";
// 	  	if(jfm02 == 0 || jfm02 < 4){
// 	  	analysis223 = "For"+ya+intmm1+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfm02 == 4 || jfm02 < 8){
// 	  		analysis223 = "For"+ya+intmm1+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfm02 == 8 || jfm02 < 10){
// 	  		analysis223 = "For"+ya+intmm1+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfm02 == 10){
// 	  		analysis223 = "For"+ya+intmm1+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis223 = "Cannot compute"
// 	  	}	
// 	  	let analysis224 = "";
// 	  	if(jfmm2 == 0 || jfmm2 < 4){
// 	  	analysis224 = "For"+ya+intmm2+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm2 == 4 || jfmm2 < 8){
// 	  		analysis224 = "For"+ya+intmm2+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm2 == 8 || jfmm2 < 10){
// 	  		analysis224 = "For"+ya+intmm2+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm2 == 10){
// 	  		analysis224 = "For"+ya+intmm2+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis224 = "Cannot compute"
// 	  	}	
// 	  	let analysis225 = "";
// 	  	if(jfmm3 == 0 || jfmm3 < 4){
// 	  	analysis225 = "For"+ya+intmm3+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm3 == 4 || jfmm3 < 8){
// 	  		analysis225 = "For"+ya+intmm3+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm3 == 8 || jfmm3 < 10){
// 	  		analysis225 = "For"+ya+intmm3+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm3 == 10){
// 	  		analysis225 = "For"+ya+intmm3+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis225 = "Cannot compute"
// 	  	} 	
// 	 	let analysis226 = "";
// 	  	if(jfmm4 == 0 || jfmm4 < 4){
// 	  	analysis226 = "For"+ya+intmm4+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm4 == 4 || jfmm4 < 8){
// 	  		analysis226 = "For"+ya+intmm4+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm4 == 8 || jfmm4 < 10){
// 	  		analysis226 = "For"+ya+intmm4+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm4 == 10){
// 	  		analysis226 = "For"+ya+intmm4+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis226 = "Cannot compute"
// 	  	}
// 	  	let analysis227 = "";
// 	  	if(jfmm5 == 0 || jfmm5 < 4){
// 	  	analysis227 = "For"+ya+intmm5+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm5 == 4 || jfmm5 < 8){
// 	  		analysis227 = "For"+ya+intmm5+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm5 == 8 || jfmm5 < 10){
// 	  		analysis227 = "For"+ya+intmm5+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm5 == 10){
// 	  		analysis227 = "For"+ya+intmm5+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis227 = "Cannot compute"
// 	  	}
// 	  	let analysis228 = "";
// 	  	if(jfmm6 == 0 || jfmm6 < 4){
// 	  	analysis228 = "For"+ya+intmm6+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm6 == 4 || jfmm6 < 8){
// 	  		analysis228 = "For"+ya+intmm6+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm6 == 8 || jfmm6 < 10){
// 	  		analysis228 = "For"+ya+intmm6+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm6 == 10){
// 	  		analysis228 = "For"+ya+intmm6+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis228 = "Cannot compute"
// 	  	}
// 	  	let analysis229 = "";
// 	  	if(jfmm7 == 0 || jfmm7 < 4){
// 	  	analysis229 = "For"+ya+intmm7+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm7 == 4 || jfmm7 < 8){
// 	  		analysis229 = "For"+ya+intmm7+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm7 == 8 || jfmm7 < 10){
// 	  		analysis229 = "For"+ya+intmm7+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm7 == 10){
// 	  		analysis229 = "For"+ya+intmm7+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis229 = "Cannot compute"
// 	  	}
// 	  	let analysis230 = "";
// 	  	if(jfmm8 == 0 || jfmm8 < 4){
// 	  	analysis230 = "For"+ya+intmm8+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm8 == 4 || jfmm8 < 8){
// 	  		analysis230 = "For"+ya+intmm8+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm8 == 8 || jfmm8 < 10){
// 	  		analysis230 = "For"+ya+intmm8+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm8 == 10){
// 	  		analysis230 = "For"+ya+intmm8+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis230 = "Cannot compute"
// 	  	}
// 	  	let analysis231 = "";
// 	  	if(jfmm9 == 0 || jfmm9 < 4){
// 	  	analysis231 = "For"+ya+intmm9+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm9 == 4 || jfmm9 < 8){
// 	  		analysis231 = "For"+ya+intmm9+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm9 == 8 || jfmm9 < 10){
// 	  		analysis231 = "For"+ya+intmm9+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm9 == 10){
// 	  		analysis231 = "For"+ya+intmm9+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis231 = "Cannot compute"
// 	  	}
// 	  	let analysis232 = "";
// 	  	if(jfmm10 == 0 || jfmm10 < 4){
// 	  	analysis232 = "For"+ya+intmm10+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm10 == 4 || jfmm10 < 8){
// 	  		analysis232 = "For"+ya+intmm10+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm10 == 8 || jfmm10 < 10){
// 	  		analysis232 = "For"+ya+intmm10+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm10 == 10){
// 	  		analysis232 = "For"+ya+intmm10+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis232 = "Cannot compute"
// 	  	}
// 	  	let analysis233 = "";
// 	  	if(jfmm11 == 0 || jfmm11 < 4){
// 	  	analysis233 = "For"+ya+intmm11+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm11 == 4 || jfmm11 < 8){
// 	  		analysis233 = "For"+ya+intmm11+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm11 == 8 || jfmm11 < 10){
// 	  		analysis233 = "For"+ya+intmm11+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm11 == 10){
// 	  		analysis233 = "For"+ya+intmm11+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis233 = "Cannot compute"
// 	  	}
// 	  	let analysis234 = "";
// 	  	if(jfmm12 == 0 || jfmm12 < 4){
// 	  	analysis234 = "For"+ya+intmm12+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm12 == 4 || jfmm12 < 8){
// 	  		analysis234 = "For"+ya+intmm12+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm12 == 8 || jfmm12 < 10){
// 	  		analysis234 = "For"+ya+intmm12+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm12 == 10){
// 	  		analysis234 = "For"+ya+intmm12+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis234 = "Cannot compute"
// 	  	}
// 		let analysis235 = "";
// 	  	if(jfmm13 == 0 || jfmm13 < 4){
// 	  	analysis235 = "For"+ya+intmm13+ya+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm13 == 4 || jfmm13 < 8){
// 	  		analysis235 = "For"+ya+intmm13+ya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm13 == 8 || jfmm13 < 10){
// 	  		analysis235 = "For"+ya+intmm13+ya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm13 == 10){
// 	  		analysis235 = "For"+ya+intmm13+ya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis235 = "Cannot compute"
// 	  	}

//   	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ streetmm: streetmm,intm: intm, jfm:jfm, intm1: intm1, jf02: jf02, intm2: intm2, jfm2: jfm2,  intm3: intm3, 
//     		jfm3: jfm3, intm4: intm4, jfm4: jfm4,  intm5: intm5, jfm5: jfm5,  intm6: intm6, jfm6: jfm6,  intm7: intm7, 
//     		jfm7: jfm7,  intm8: intm8, jfm8: jfm8,  intm9: intm9, jfm9: jfm9, intm10: intm10, jfm10: jfm10, 
//     		intm11: intm11, jfm11: jfm11, intm12: intm12, jfm12: jfm12,  intm13: intm13, jfm13: jfm13,analysis35: analysis35,
//     		analysis22: analysis22, analysis23:analysis23, analysis24:analysis24, analysis25:analysis25, analysis26:analysis26, analysis27:analysis27, analysis28:analysis28,
//     		analysis29:analysis29, analysis30:analysis30, analysis31:analysis31, analysis32:analysis32, analysis33:analysis33, analysis34:analysis34, streetmmm: streetmmm,  
//     		intmm: intmm, jfmm:jfmm, intmm1: intmm1, jfm02: jfm02, intmm2: intmm2, jfmm2: jfmm2,  intmm3: intmm3, 
//     		jfmm3: jfmm3, intmm4: intmm4, jfmm4: jfmm4,  intmm5: intmm5, jfmm5: jfmm5,  intmm6: intmm6, jfmm6: jfmm6,  intmm7: intmm7, 
//     		jfmm7: jfmm7,  intmm8: intmm8, jfmm8: jfmm8,  intmm9: intmm9, jfmm9: jfmm9, intmm10: intmm10, jfmm10: jfmm10, 
//     		intmm11: intmm11, jfmm11: jfmm11, intmm12: intmm12, jfmm12: jfmm12,  intmm13: intmm13, jfmm13: jfmm13,  analysis222: analysis222,
//     		analysis223: analysis223, analysis224: analysis224, analysis225: analysis225, analysis226: analysis226, 
//     		analysis227: analysis227, analysis228: analysis228, analysis229: analysis229, analysis230: analysis230, analysis231: analysis231,
//     		analysis232: analysis232, analysis233: analysis233, analysis234: analysis234, analysis235: analysis235 }));
// 	});
// });
// app.get('/ecowestdr',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }
// 	  	//south intersections
// 	 	streetec = body.RWS[0].RW[6].DE;
// 	  	const inte1 = body.RWS[0].RW[6].FIS[0].FI[0].TMC.DE;
// 	  	const jfe1 = body.RWS[0].RW[6].FIS[0].FI[0].CF[0].JF;
// 	  	const inte2 = body.RWS[0].RW[6].FIS[0].FI[1].TMC.DE;
// 	  	const jfe2 = body.RWS[0].RW[6].FIS[0].FI[1].CF[0].JF;
// 	  	var yya = ' ';
// 	  	let analysis5 = "";
// 	  	if(jfe1 == 0 || jfe1 < 4){
// 	  	analysis5 = "For"+yya+inte1+yya+"South bound lane Free flow of traffic";
// 	  	}else if(jfe1 == 4 || jfe1 < 8){
// 	  		analysis5 = "For"+yya+inte1+yya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfe1 == 8 || jfe1 < 10){
// 	  		analysis5 = "For"+yya+inte1+yya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfe1 == 10){
// 	  		analysis5 = "For"+yya+inte1+yya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis5 = "Cannot compute"
// 	  	}
// 	  	let analysis6 = "";
// 	  	if(jfe2 == 0 || jfe2 < 4){
// 	  	    analysis6 = "For"+yya+inte2+yya+"South bound lane Free flow of traffic";
// 	  	}else if(jfe2 == 4 || jfe2 < 8){
// 	  		analysis6 = "For"+yya+inte2+yya+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfe2 == 8 || jfe2 < 10){
// 	  		analysis6 = "For"+yya+inte2+yya+"South bound lane Slow flow of traffic";
// 	  	}else if(jfe2 == 10){
// 	  		analysis6 = "For"+yya+inte2+yya+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis6 = "Cannot compute"
// 	  	}
// 	  	//north intersection
// 	  	const streeteec = body.RWS[0].RW[7].DE;
// 	  	const intee1 = body.RWS[0].RW[7].FIS[0].FI[0].TMC.DE;
// 	  	const jfee1 = body.RWS[0].RW[7].FIS[0].FI[0].CF[0].JF;  	
// 	  	const intee2 = body.RWS[0].RW[7].FIS[0].FI[1].TMC.DE;
// 	  	const jfee2 = body.RWS[0].RW[7].FIS[0].FI[1].CF[0].JF;
// 	  	let analysis05 = "";
// 	  	if(jfee1 == 0 || jfee1 < 4){
// 	  	analysis05 = "For"+yya+intee1+yya+"North bound lane Free flow of traffic";
// 	  	}else if(jfee1 == 4 || jfee1 < 8){
// 	  		analysis05 = "For"+yya+intee1+yya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfee1 == 8 || jfee1 < 10){
// 	  		analysis05 = "For"+yya+intee1+yya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfee1 == 10){
// 	  		analysis05 = "For"+yya+intee1+yya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis05 = "Cannot compute"
// 	  	}
// 	  	let analysis06 = "";
// 	  	if(jfee2 == 0 || jfee2 < 4){
// 	  	    analysis06 = "For"+yya+intee2+yya+"North bound lane Free flow of traffic";
// 	  	}else if(jfee2 == 4 || jfee2 < 8){
// 	  		analysis06 = "For"+yya+intee2+yya+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfee2 == 8 || jfee2 < 10){
// 	  		analysis06 = "For"+yya+intee2+yya+"North bound lane Slow flow of traffic";
// 	  	}else if(jfee2 == 10){
// 	  		analysis06 = "For"+yya+intee2+yya+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis06 = "Cannot compute"
// 	  	}  	
// 	  	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ street: streetec,inte1: inte1, jfe1: jfe1,  inte2: inte2, jfe2: jfe2, 
//     		analysis5:analysis5, analysis6:analysis6,street: streetec, intee1: intee1, jfee1: jfee1,  intee2: intee2, jfee2: jfee2, 
//     		analysis05:analysis05, analysis06:analysis06}));  
// 	});
// });
// app.get('/matinaaplaya',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }
		
// 		//south intersections
// 		var yyas = ' ';
// 	  	const streetm = body.RWS[0].RW[8].DE;
// 	  	const intm1 = body.RWS[0].RW[8].FIS[0].FI[0].TMC.DE;
// 	  	const jfm1 = body.RWS[0].RW[8].FIS[0].FI[0].CF[0].JF;  	
// 	  	const intm2 = body.RWS[0].RW[8].FIS[0].FI[1].TMC.DE;
// 	  	const jfm2 = body.RWS[0].RW[8].FIS[0].FI[1].CF[0].JF;
// 	  	const intm3 = body.RWS[0].RW[8].FIS[0].FI[2].TMC.DE;
// 	  	const jfm3 = body.RWS[0].RW[8].FIS[0].FI[2].CF[0].JF;
// 	  	const intm4 = body.RWS[0].RW[8].FIS[0].FI[3].TMC.DE;
// 	  	const jfm4 = body.RWS[0].RW[8].FIS[0].FI[3].CF[0].JF;  

// 		let analysis9 = "";
// 	  	if(jfm1 == 0 || jfm1 < 4){
// 	  	analysis9 = "For"+yyas+intm1+yyas+"South bound lane Free flow of traffic";
// 	  	}else if(jfm1 == 4 || jfm1 < 8){
// 	  		analysis9 = "For"+yyas+intm1+yyas+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm1 == 8 || jfm1 < 10){
// 	  		analysis9 = "For"+yyas+intm1+yyas+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm1 == 10){
// 	  		analysis9 = "For"+yyas+intm1+yyas+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis9 = "Cannot compute"
// 	  	}
// 		let analysis10 = "";
// 	  	if(jfm2 == 0 || jfm2 < 4){
// 	  	analysis10 = "For"+yyas+intm2+yyas+"South bound lane Free flow of traffic";
// 	  	}else if(jfm2 == 4 || jfm2 < 8){
// 	  		analysis10 = "For"+yyas+intm2+yyas+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm2 == 8 || jfm2 < 10){
// 	  		analysis10 = "For"+yyas+intm2+yyas+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm2 == 10){
// 	  		analysis10 = "For"+yyas+intm2+yyas+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis10 = "Cannot compute"
// 	  	}
// 		let analysis11 = "";
// 	  	if(jfm3 == 0 || jfm3 < 4){
// 	  	analysis11 = "For"+yyas+intm3+yyas+"South bound lane Free flow of traffic";
// 	  	}else if(jfm3 == 4 || jfm3 < 8){
// 	  		analysis11 = "For"+yyas+intm3+yyas+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm3 == 8 || jfm3 < 10){
// 	  		analysis11 = "For"+yyas+intm3+yyas+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm3 == 10){
// 	  		analysis11 = "For"+yyas+intm3+yyas+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis11 = "Cannot compute"
// 	  	}
// 	  	let analysis12 = "";
// 	  	if(jfm4 == 0 || jfm4 < 4){
// 	  	analysis12 = "For"+yyas+intm4+yyas+"South bound lane Free flow of traffic";
// 	  	}else if(jfm4 == 4 || jfm4 < 8){
// 	  		analysis12 = "For"+yyas+intm4+yyas+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfm4 == 8 || jfm4 < 10){
// 	  		analysis12 = "For"+yyas+intm4+yyas+"South bound lane Slow flow of traffic";
// 	  	}else if(jfm4 == 10){
// 	  		analysis12 = "For"+yyas+intm4+yyas+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis12 = "Cannot compute"
// 	  	}

// 	  	//north intersections
// 	  	streetmmm = body.RWS[0].RW[10].DE;
// 	  	const intmm1 = body.RWS[0].RW[10].FIS[0].FI[0].TMC.DE;
// 	  	const jfmm1 = body.RWS[0].RW[10].FIS[0].FI[0].CF[0].JF;
// 	  	const intmm2 = body.RWS[0].RW[10].FIS[0].FI[1].TMC.DE;
// 	  	const jfmm2 = body.RWS[0].RW[10].FIS[0].FI[1].CF[0].JF;
// 	  	const intmm3 = body.RWS[0].RW[10].FIS[0].FI[2].TMC.DE;
// 	  	const jfmm3 = body.RWS[0].RW[10].FIS[0].FI[2].CF[0].JF;
// 	  	const intmm4 = body.RWS[0].RW[10].FIS[0].FI[3].TMC.DE;
// 	  	const jfmm4 = body.RWS[0].RW[10].FIS[0].FI[3].CF[0].JF;

// 	  	let analysis09 = "";
// 	  	if(jfmm1 == 0 || jfmm1 < 4){
// 	  	analysis09 = "For"+yyas+intmm1+yyas+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm1 == 4 || jfmm1 < 8){
// 	  		analysis09 = "For"+yyas+intmm1+yyas+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm1 == 8 || jfmm1 < 10){
// 	  		analysis09 = "For"+yyas+intmm1+yyas+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm1 == 10){
// 	  		analysis09 = "For"+yyas+intmm1+yyas+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis09 = "Cannot compute"
// 	  	}

// 		let analysis010 = "";
// 	  	if(jfmm2 == 0 || jfmm2 < 4){
// 	  	analysis010 = "For"+yyas+intmm2+yyas+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm2 == 4 || jfmm2 < 8){
// 	  		analysis010 = "For"+yyas+intmm2+yyas+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm2 == 8 || jfmm2 < 10){
// 	  		analysis010 = "For"+yyas+intmm2+yyas+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm2 == 10){
// 	  		analysis010 = "For"+yyas+intmm2+yyas+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis010 = "Cannot compute"
// 	  	}

// 		let analysis011 = "";
// 	  	if(jfmm3 == 0 || jfmm3 < 4){
// 	  	analysis011 = "For"+yyas+intmm3+yyas+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm3 == 4 || jfmm3 < 8){
// 	  		analysis011 = "For"+yyas+intmm3+yyas+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm3 == 8 || jfmm3 < 10){
// 	  		analysis011 = "For"+yyas+intmm3+yyas+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm3 == 10){
// 	  		analysis011 = "For"+yyas+intmm3+yyas+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis011 = "Cannot compute"
// 	  	}

// 		let analysis012 = "";
// 	  	if(jfmm4 == 0 || jfmm4 < 4){
// 	  	analysis012 = "For"+yyas+intmm4+yyas+"North bound lane Free flow of traffic";
// 	  	}else if(jfmm4 == 4 || jfmm4 < 8){
// 	  		analysis012 = "For"+yyas+intmm4+yyas+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfmm4 == 8 || jfmm4 < 10){
// 	  		analysis012 = "For"+yyas+intmm4+yyas+"North bound lane Slow flow of traffic";
// 	  	}else if(jfmm4 == 10){
// 	  		analysis012 = "For"+yyas+intmm4+yyas+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis012 = "Cannot compute"
// 	  	}

// 	  	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ street: streetm,  intm1: intm1, jfm1: jfm1,  intm2: intm2, jfm2: jfm2, intm3: intm3, jfm3: jfm3, intm4:intm4, jfm4:jfm4, 
//     		 analysis9:analysis9, analysis10: analysis10, analysis11: analysis11,analysis12:analysis12,streetm: streetm, intmm1: intmm1, jfmm1: jfmm1, 
//     		  intmm2: intmm2, jfmm2: jfmm2, intmm3: intmm3, jfmm3: jfmm3, intmm4:intmm4, jfmm4:jfmm4,
//     	analysis09:analysis09, analysis010:analysis010, analysis011:analysis011, analysis012:analysis012}));
  
// 	});
// });
// app.get('/ecoland',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }
// 	  	//south intersection	
// 	  	street = body.RWS[0].RW[9].DE;
// 	  	const intc1 = body.RWS[0].RW[9].FIS[0].FI[0].TMC.DE;
// 	  	const jfc1 = body.RWS[0].RW[9].FIS[0].FI[0].CF[0].JF;  	
// 	  	const intc2 = body.RWS[0].RW[9].FIS[0].FI[1].TMC.DE;
// 	  	const jfc2 = body.RWS[0].RW[9].FIS[0].FI[1].CF[0].JF;
// 	  	const intc3 = body.RWS[0].RW[9].FIS[0].FI[2].TMC.DE;
// 	  	const jfc3 = body.RWS[0].RW[9].FIS[0].FI[2].CF[0].JF;
// 	  	var s = ' ';
// 	  	let analysis10 = "";
// 	  	if(jfc1 == 0 || jfc1 < 4){
// 	  		analysis10 = "For"+s+intc1+s+"South bound lane Free flow of traffic";
// 	  	}else if(jfc1 == 4 || jfc1 < 8){
// 	  		analysis10 = "For"+s+intc1+s+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfc1 == 8 || jfc1 < 10){
// 	  		analysis10 = "For"+s+intc1+s+"South bound lane Slow flow of traffic";
// 	  	}else if(jfc1 == 10){
// 	  		analysis10 = "For"+s+intc1+s+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis10 = "Cannot compute"
// 	  	}
// 	  	let analysis11 = "";
// 	  	if(jfc2 == 0 || jfc2 < 4){
// 	  		analysis11 = "For"+s+intc2+s+"South bound lane Free flow of traffic";
// 	  	}else if(jfc2 == 4 || jfc2 < 8){
// 	  		analysis11 = "For"+s+intc2+s+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfc2 == 8 || jfc2 < 10){
// 	  		analysis11 = "For"+s+intc2+s+"South bound lane Slow flow of traffic";
// 	  	}else if(jfc2 == 10){
// 	  		analysis11 = "For"+s+intc2+s+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis11 = "Cannot compute"
// 	  	}
// 	  	let analysis12 = "";
// 	  	if(jfc3 == 0 || jfc3 < 4){
// 	  		analysis12 = "For"+s+intc3+s+"South bound lane Free flow of traffic";
// 	  	}else if(jfc3 == 4 || jfc3 < 8){
// 	  		analysis12 = "For"+s+intc3+s+"South bound lane Sluggish flow of traffic";
// 	  	}else if(jfc3 == 8 || jfc3 < 10){
// 	  		analysis12 = "For"+s+intc3+s+"South bound lane Slow flow of traffic";
// 	  	}else if(jfc3 == 10){
// 	  		analysis12 = "For"+s+intc3+s+"South bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis12 = "Cannot compute"
// 	  	}
// 	  	//north intersection
// 	  	const streeet = body.RWS[0].RW[11].DE;
// 	  	const intm1 = body.RWS[0].RW[11].FIS[0].FI[0].TMC.DE;
// 	  	const jfm1 = body.RWS[0].RW[11].FIS[0].FI[0].CF[0].JF; 	
// 	  	const intm2 = body.RWS[0].RW[11].FIS[0].FI[1].TMC.DE;
// 	  	const jfm2 = body.RWS[0].RW[11].FIS[0].FI[1].CF[0].JF;
// 	  	const intm3 = body.RWS[0].RW[11].FIS[0].FI[2].TMC.DE;
// 	  	const jfm3 = body.RWS[0].RW[11].FIS[0].FI[2].CF[0].JF;
// 	  	const intm4 = body.RWS[0].RW[11].FIS[0].FI[3].TMC.DE;
// 	  	const jfm4 = body.RWS[0].RW[11].FIS[0].FI[3].CF[0].JF;
// 	  	let analysis09 = "";
// 	  	if(jfm1 == 0 || jfm1 < 4){
// 	  	analysis09 = "For"+s+intm1+s+"North bound lane Free flow of traffic";
// 	  	}else if(jfm1 == 4 || intm1 < 8){
// 	  		analysis09 = "For"+s+jfm1+s+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfm1 == 8 || intm1 < 10){
// 	  		analysis09 = "For"+s+intm1+s+"North bound lane Slow flow of traffic";
// 	  	}else if(jfm1 == 10){
// 	  		analysis09 = "For"+s+intm1+s+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis09 = "Cannot compute"
// 	  	}
// 		let analysis010 = "";
// 	  	if(jfm2 == 0 || jfm2 < 4){
// 	  	analysis010 = "For"+s+intm2+s+"North bound lane Free flow of traffic";
// 	  	}else if(jfm2 == 4 || intm2 < 8){
// 	  		analysis010 = "For"+s+intm2+s+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfm2 == 8 || intm2 < 10){
// 	  		analysis010 = "For"+s+intm2+s+"North bound lane Slow flow of traffic";
// 	  	}else if(jfm2 == 10){
// 	  		analysis010 = "For"+s+intm2+s+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis010 = "Cannot compute"
// 	  	}
// 		let analysis011 = "";
// 	  	if(jfm3 == 0 || jfm3 < 4){
// 	  	analysis011 = "For"+s+intm3+s+"North bound lane Free flow of traffic";
// 	  	}else if(jfm3 == 4 || jfm3 < 8){
// 	  		analysis011 = "For"+s+intm3+s+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfm3 == 8 || jfm3 < 10){
// 	  		analysis011 = "For"+s+intm3+s+"North bound lane Slow flow of traffic";
// 	  	}else if(jfm3 == 10){
// 	  		analysis011 = "For"+s+intm3+s+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis011 = "Cannot compute"
// 	  	}
// 		let analysis012 = "";
// 	  	if(jfm4 == 0 || jfm4 < 4){
// 	  	analysis012 = "For"+s+intm4+s+"North bound lane Free flow of traffic";
// 	  	}else if(jfm4 == 4 || jfm4 < 8){
// 	  		analysis012 = "For"+s+intm4+s+"North bound lane Sluggish flow of traffic";
// 	  	}else if(jfm4 == 8 || jfm4 < 10){
// 	  		analysis012 = "For"+s+intm4+s+"North bound lane Slow flow of traffic";
// 	  	}else if(jfm4 == 10){
// 	  		analysis012 = "For"+s+intm4+s+"North bound lane Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis012 = "Cannot compute"
// 	  	}
// 	  	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ street:street,intc1: intc1, jfc1: jfc1,  intc2: intc2, jfc2: jfc2, intc3: intc3, jfc3: jfc3,
//     	analysis10:analysis10, analysis11:analysis11, analysis12:analysis12, streeet: streeet, intm1: intm1, jfm1: jfm1,  intm2: intm2, jfm2: jfm2, intm3: intm3, jfm3: jfm3, intm4:intm4, jfm4:jfm4,
//     	analysis09:analysis09, analysis010:analysis010, analysis011:analysis011, analysis012:analysis012}));  
// 	});
// });
// app.get('/tulipdr',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }

// 		var wa = ' ';
// 	  	//south intersections
// 	 	streetccc = body.RWS[0].RW[12].DE;
// 	  	const intcc1 = body.RWS[0].RW[12].FIS[0].FI[0].TMC.DE;
// 	  	const jfcc1 = body.RWS[0].RW[12].FIS[0].FI[0].CF[0].JF;	
// 	  	const intcc2 = body.RWS[0].RW[12].FIS[0].FI[1].TMC.DE;
// 	  	const jfcc2 = body.RWS[0].RW[12].FIS[0].FI[1].CF[0].JF;
// 	  	const intcc3 = body.RWS[0].RW[12].FIS[0].FI[2].TMC.DE;
// 	  	const jfcc3 = body.RWS[0].RW[12].FIS[0].FI[2].CF[0].JF;

// 	  	let analysis111 = "";
// 	  	if(jfcc1 == 0 || jfcc1 < 4){
// 	  		analysis111 = "For"+wa+intcc1+wa+"South bound Free flow of traffic";
// 	  	}else if(jfcc1 == 4 || jfcc1 < 8){
// 	  		analysis111 = "For"+wa+intcc1+wa+"South bound flow of traffic";
// 	  	}else if(jfcc1 == 8 || jfcc1 < 10){
// 	  		analysis111 = "For"+wa+intcc1+wa+"South bound Ecoland: Slow flow of traffic";
// 	  	}else if(jfcc1 == 10){
// 	  		analysis111 = "For"+wa+intcc1+wa+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis11 = "Cannot compute"
// 	  	}
// 		let analysis112 = "";
// 	  	if(jfcc2 == 0 || jfcc2 < 4){
// 	  		analysis112 = "For"+wa+intcc2+wa+"South bound Free flow of traffic";
// 	  	}else if(jfcc2 == 4 || jfcc2 < 8){
// 	  		analysis112 = "For"+wa+intcc2+wa+"South bound Sluggish flow of traffic";
// 	  	}else if(jfcc2 == 8 || jfcc2 < 10){
// 	  		analysis112 = "For"+wa+intcc2+wa+"South bound Slow flow of traffic";
// 	  	}else if(jfcc2 == 10){
// 	  		analysis112 = "For"+wa+intcc2+wa+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis12 = "Cannot compute"
// 	  	}
// 		let analysis113 = "";
// 	  	if(jfcc3 == 0 || jfcc3 < 4){
// 	  		analysis113 = "For"+wa+intcc3+wa+"South bound Free flow of traffic";
// 	  	}else if(jfcc3 == 4 || jfcc3 < 8){
// 	  		analysis113 = "For"+wa+intcc3+wa+"South bound Sluggish flow of traffic";
// 	  	}else if(jfcc3 == 8 || jfcc3 < 10){
// 	  		analysis113 = "For"+wa+intcc3+wa+"South bound Slow flow of traffic";
// 	  	}else if(jfcc3 == 10){
// 	  		analysis113 = "For"+wa+intcc3+wa+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis113 = "Cannot compute"
// 	  	}

// 	  	//north intersections
// 		const streeetccc = body.RWS[0].RW[13].DE;
// 	  	const intc1 = body.RWS[0].RW[13].FIS[0].FI[0].TMC.DE;
// 	  	const jfc1 = body.RWS[0].RW[13].FIS[0].FI[0].CF[0].JF;  	
// 	  	const intc2 = body.RWS[0].RW[13].FIS[0].FI[1].TMC.DE;
// 	  	const jfc2 = body.RWS[0].RW[13].FIS[0].FI[1].CF[0].JF;
// 	  	const intc3 = body.RWS[0].RW[13].FIS[0].FI[2].TMC.DE;
// 	  	const jfc3 = body.RWS[0].RW[13].FIS[0].FI[2].CF[0].JF;
	
// 	  	let analysis12 = "";
// 	  	if(jfc1 == 0 || jfc1 < 4){
// 	  		analysis12 = "For"+wa+intc1+wa+"North bound Free flow of traffic";
// 	  	}else if(jfc1 == 4 || jfc1 < 8){
// 	  		analysis12 = "For"+wa+intc1+wa+"North bound Sluggish flow of traffic";
// 	  	}else if(jfc1 == 8 || jfc1 < 10){
// 	  		analysis12 = "For"+wa+intc1+wa+"North bound Slow flow of traffic";
// 	  	}else if(jfc1 == 10){
// 	  		analysis12 = "For"+wa+intc1+wa+"North bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis12 = "Cannot compute"
// 	  	}
// 		let analysis13 = "";
// 	  	if(jfc2 == 0 || jfc2 < 4){
// 	  		analysis13 = "For"+wa+intc2+wa+"North bound Free flow of traffic";
// 	  	}else if(jfc2 == 4 || jfc2 < 8){
// 	  		analysis13 = "For"+wa+intc2+wa+"North bound Slow flow of traffic";
// 	  	}else if(jfc2 == 8 || jfc2 < 10){
// 	  		analysis13 = "For"+wa+intc2+wa+"North bound Slow flow of traffic";
// 	  	}else if(jfc2 == 10){
// 	  		analysis13 = "For"+wa+intc2+wa+"North bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis13 = "Cannot compute"
// 	  	}
// 		let analysis14 = "";
// 	  	if(jfc3 == 0 || jfc3 < 4){
// 	  		analysis14 = "For"+wa+intc3+wa+"North bound Free flow of traffic";
// 	  	}else if(jfc3 == 4 || jfc3 < 8){
// 	  		analysis14 = "For"+wa+intc3+wa+"North bound Sluggish flow of traffic";
// 	  	}else if(jfc3 == 8 || jfc3 < 10){
// 	  		analysis14 = "For"+wa+intc3+wa+"North bound Slow flow of traffic";
// 	  	}else if(jfc3 == 10){
// 	  		analysis14 = "For"+wa+intc3+wa+"North bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis14 = "Cannot compute"
// 	  	}
// 	  	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ streetccc: streetccc,intc1: intc1, jfc1: jfc1,intc2: intc2, jfc2: jfc2, intc3: intc3, jfc3: jfc3,
//     	analysis12:analysis12, analysis13:analysis13, analysis14:analysis14,streetccc: streetccc, intcc1: intcc1, jfcc1: jfcc1,  intcc2: intcc2, jfcc2: jfcc2, intcc3: intcc3, jfcc3: jfcc3, 
//     		analysis111:analysis111, analysis112:analysis112, analysis113:analysis113}));  
// 	});
// });
// app.get('/quimpoblvd',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }
// 	    //north 
// 	  	quimpo = body.RWS[0].RW[14].DE;
// 	  	const inttc11 = body.RWS[0].RW[14].FIS[0].FI[0].TMC.DE; 
// 	  	const jffc11 = body.RWS[0].RW[14].FIS[0].FI[0].CF[0].JF;	
// 	  	const inttc22 = body.RWS[0].RW[14].FIS[0].FI[1].TMC.DE;
// 	  	const jffc22 = body.RWS[0].RW[14].FIS[0].FI[1].CF[0].JF;
// 	  	const inttc33 = body.RWS[0].RW[14].FIS[0].FI[2].TMC.DE;
// 	    const jffc33 = body.RWS[0].RW[14].FIS[0].FI[2].CF[0].JF;
// 	  	const inttc44 = body.RWS[0].RW[14].FIS[0].FI[3].TMC.DE;
// 	  	const jffc44 = body.RWS[0].RW[14].FIS[0].FI[3].CF[0].JF;
// 	  	var x = ' ';//space ni
// 	  	let analysis116 = "";
// 	  	if(jffc11 == 0 || jffc11 < 4){
// 	  		analysis116 = "For"+x+inttc11+x+"South bound Free flow of traffic";
// 	  	}else if(jffc11 == 4 || jffc11 < 8){
// 	  		analysis116 = "For"+x+inttc11+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jffc11 == 8 || jffc11 < 10){
// 	  		analysis116 = "For"+x+inttc11+x+"South bound Slow flow of traffic";
// 	  	}else if(jffc11 == 10){
// 	  		analysis116 = "For"+x+inttc11+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis116 = "Cannot compute"
// 	  	}
// 	  	let analysis117 = "";
// 	  	if(jffc22 == 0 || jffc22 < 4){
// 	  		analysis117 = "For"+x+inttc22+x+"South bound Free flow of traffic";
// 	  	}else if(jffc22 == 4 || jffc22 < 8){
// 	  		analysis117 = "For"+x+inttc22+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jffc22 == 8 || jffc22 < 10){
// 	  		analysis117 = "For"+x+inttc22+x+"South bound Slow flow of traffic";
// 	  	}else if(jffc22 == 10){
// 	  		analysis117 = "For"+x+inttc22+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis117 = "Cannot compute"
// 	  	}
// 	  	let analysis118 = "";
// 	  	if(jffc33 == 0 || jffc33 < 4){
// 	  		analysis118 = "For"+x+inttc33+x+"South bound Free flow of traffic";
// 	  	}else if(jffc33 == 4 || jffc33 < 8){
// 	  		analysis118 = "For"+x+inttc3+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jffc33 == 8 || jffc33 < 10){
// 	  		analysis118 = "For"+x+inttc3+x+"South bound Slow flow of traffic";
// 	  	}else if(jffc33 == 10){
// 	  		analysis118 = "For"+x+inttc3+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis118 = "Cannot compute"
// 	  	}
// 	  	let analysis119 = "";
// 	  	if(jffc44 == 0 || jffc44 < 4){
// 	  		analysis119 = "For"+x+inttc44+x+"South bound Free flow of traffic";
// 	  	}else if(jffc44 == 4 || jffc44 < 8){
// 	  		analysis119 = "For"+x+inttc44+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jffc44 == 8 || jffc44 < 10){
// 	  		analysis119 = "For"+x+inttc44+x+"South bound Slow flow of traffic";
// 	  	}else if(jffc44 == 10){
// 	  		analysis119 = "For"+x+inttc44+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis119 = "Cannot compute"
// 	  	}
// 	  	//north
// 	  	const quimpooo = body.RWS[0].RW[16].DE;
// 	  	const intc11 = body.RWS[0].RW[16].FIS[0].FI[0].TMC.DE; 
// 	  	const jfc11 = body.RWS[0].RW[16].FIS[0].FI[0].CF[0].JF;	
// 	  	const intc22 = body.RWS[0].RW[16].FIS[0].FI[1].TMC.DE;
// 	  	const jfc22 = body.RWS[0].RW[16].FIS[0].FI[1].CF[0].JF;
// 	  	const intc33 = body.RWS[0].RW[16].FIS[0].FI[2].TMC.DE;
// 	    const jfc33 = body.RWS[0].RW[16].FIS[0].FI[2].CF[0].JF;
// 	  	const intc44 = body.RWS[0].RW[16].FIS[0].FI[3].TMC.DE;
// 	  	const jfc44 = body.RWS[0].RW[16].FIS[0].FI[3].CF[0].JF;
// 	  	var x = ' ';//space ni
// 	  	let analysis16 = "";
// 	  	if(jfc11 == 0 || jfc11 < 4){
// 	  		analysis16 = "For"+x+intc11+x+"South bound Free flow of traffic";
// 	  	}else if(jfc11 == 4 || jffc11 < 8){
// 	  		analysis16 = "For"+x+intc11+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jfc11 == 8 || jfc11 < 10){
// 	  		analysis16 = "For"+x+intc11+x+"South bound Slow flow of traffic";
// 	  	}else if(jfc11 == 10){
// 	  		analysis16 = "For"+x+intc11+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis16 = "Cannot compute"
// 	  	}
// 	  	let analysis17 = "";
// 	  	if(jfc22 == 0 || jfc22 < 4){
// 	  		analysis17 = "For"+x+intc22+x+"South bound Free flow of traffic";
// 	  	}else if(jfc22 == 4 || jfc22 < 8){
// 	  		analysis17 = "For"+x+intc22+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jfc22 == 8 || jfc22 < 10){
// 	  		analysis17 = "For"+x+intc22+x+"South bound Slow flow of traffic";
// 	  	}else if(jfc22 == 10){
// 	  		analysis17 = "For"+x+intc22+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis17 = "Cannot compute"
// 	  	}
// 	  	let analysis18 = "";
// 	  	if(jfc33 == 0 || jfc33 < 4){
// 	  		analysis18 = "For"+x+intc33+x+"South bound Free flow of traffic";
// 	  	}else if(jfc33 == 4 || jfc33 < 8){
// 	  		analysis18 = "For"+x+intc3+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jfc33 == 8 || jfc33 < 10){
// 	  		analysis18 = "For"+x+intc3+x+"South bound Slow flow of traffic";
// 	  	}else if(jfc33 == 10){
// 	  		analysis18 = "For"+x+intc3+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis18 = "Cannot compute"
// 	  	}
// 	  	let analysis19 = "";
// 	  	if(jfc44 == 0 || jfc44 < 4){
// 	  		analysis19 = "For"+x+intc44+x+"South bound Free flow of traffic";
// 	  	}else if(jfc44 == 4 || jfc44 < 8){
// 	  		analysis19 = "For"+x+intc44+x+"South bound Sluggish flow of traffic";
// 	  	}else if(jfc44 == 8 || jfc44 < 10){
// 	  		analysis19 = "For"+x+intc44+x+"South bound Slow flow of traffic";
// 	  	}else if(jfc44 == 10){
// 	  		analysis19 = "For"+x+intc44+x+"South bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis19 = "Cannot compute"
// 	  	}
// 	  	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ quimpo: quimpo,inttc11: inttc11, jffc11: jffc11,  inttc22: inttc22, jffc22: jffc22,inttc33:inttc33,inttc33:inttc33,inttc44: inttc44, jffc44: jffc44,
//     	analysis116:analysis116, analysis117:analysis117,analysis118:analysis118, analysis119:analysis119,quimpo:quimpo, }));  
// 	});
// });
// app.get('/sandaward',function(_req, _res){

// 	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
// 	  if (err) { return console.log(err); }
// 	    //north 
// 	  	sandawa = body.RWS[0].RW[15].DE;
// 	  	const inttc11 = body.RWS[0].RW[14].FIS[0].FI[0].TMC.DE; 
// 	  	const jffc11 = body.RWS[0].RW[14].FIS[0].FI[0].CF[0].JF;	
// 	  	const inttc22 = body.RWS[0].RW[14].FIS[0].FI[1].TMC.DE;
// 	  	const jffc22 = body.RWS[0].RW[14].FIS[0].FI[1].CF[0].JF;
// 	  	const inttc33 = body.RWS[0].RW[14].FIS[0].FI[2].TMC.DE;
// 	    const jffc33 = body.RWS[0].RW[14].FIS[0].FI[2].CF[0].JF;
// 	  	const inttc44 = body.RWS[0].RW[14].FIS[0].FI[3].TMC.DE;
// 	  	const jffc44 = body.RWS[0].RW[14].FIS[0].FI[3].CF[0].JF;
// 	  	var x = ' ';//space ni
// 	  	let analysis116 = "";
// 	  	if(jffc11 == 0 || jffc11 < 4){
// 	  		analysis116 = "For"+x+inttc11+x+"North bound Free flow of traffic";
// 	  	}else if(jffc11 == 4 || jffc11 < 8){
// 	  		analysis116 = "For"+x+inttc11+x+"North bound Sluggish flow of traffic";
// 	  	}else if(jffc11 == 8 || jffc11 < 10){
// 	  		analysis116 = "For"+x+inttc11+x+"North bound Slow flow of traffic";
// 	  	}else if(jffc11 == 10){
// 	  		analysis116 = "For"+x+intc11+x+"North bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis116 = "Cannot compute"
// 	  	}
// 	  	let analysis117 = "";
// 	  	if(jffc22 == 0 || jffc22 < 4){
// 	  		analysis117 = "For"+x+inttc22+x+"North bound Free flow of traffic";
// 	  	}else if(jffc22 == 4 || jffc22 < 8){
// 	  		analysis117 = "For"+x+inttc22+x+"North bound Sluggish flow of traffic";
// 	  	}else if(jffc22 == 8 || jffc22 < 10){
// 	  		analysis117 = "For"+x+inttc22+x+"North bound Slow flow of traffic";
// 	  	}else if(jffc22 == 10){
// 	  		analysis117 = "For"+x+inttc22+x+"North bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis117 = "Cannot compute"
// 	  	}
// 	  	let analysis118 = "";
// 	  	if(jffc33 == 0 || jffc33 < 4){
// 	  		analysis118 = "For"+x+inttc33+x+"North bound Free flow of traffic";
// 	  	}else if(jffc33 == 4 || jffc33 < 8){
// 	  		analysis118 = "For"+x+inttc3+x+"North bound Sluggish flow of traffic";
// 	  	}else if(jffc33 == 8 || jffc33 < 10){
// 	  		analysis118 = "For"+x+inttc3+x+"North bound Slow flow of traffic";
// 	  	}else if(jffc33 == 10){
// 	  		analysis118 = "For"+x+inttc3+x+"North bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis18 = "Cannot compute"
// 	  	}
// 	  	let analysis119 = "";
// 	  	if(jffc44 == 0 || jffc44 < 4){
// 	  		analysis119 = "For"+x+inttc44+x+"North bound Free flow of traffic";
// 	  	}else if(jffc44 == 4 || jffc44 < 8){
// 	  		analysis119 = "For"+x+inttc44+x+"North bound Sluggish flow of traffic";
// 	  	}else if(jffc44 == 8 || jffc44 < 10){
// 	  		analysis119 = "For"+x+inttc44+x+"North bound Slow flow of traffic";
// 	  	}else if(jffc44 == 10){
// 	  		analysis119 = "For"+x+inttc44+x+"North bound Traffic stopped or Road closed"
// 	  	}else{
// 	  		analysis119 = "Cannot compute"
// 	  	}
// 	  	_res.setHeader('Content-Type', 'application/json');
//     	_res.send(JSON.stringify({ quimpo: quimpo,inttc11: inttc11, jffc11: jffc11,  inttc22: inttc22, jffc22: jffc22,inttc33:inttc33,inttc33:inttc33,inttc44: inttc44, jffc44: jffc44,
//     	analysis116:analysis116, analysis117:analysis117,analysis118:analysis118, analysis119:analysis119,quimpo:quimpo}));  
// 	});
// });

//-------------------------------------------

app.get('/geo',function(req, res){
	axios.get('https://fathomless-escarpment-16808.herokuapp.com/equirino')
	  .then(function (response) {
	    console.log(response.data);
	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
// app.get('/geo',function(req, res){
// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/jplauel')
// 	  .then(function (response) {
// 	    console.log(response.data);	  
// 	  })
// 	  .catch(function (error) {
// 	    console.log(error);
	 
// 	  });
// })
// app.get('/geo',function(req, res){
// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/mcarthur')
// 	  .then(function (response) {
// 	    console.log(response.data);	  
// 	  })
// 	  .catch(function (error) {
// 	    console.log(error);
	 
// 	  });
// })
// app.get('/geo',function(req, res){
// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecowestdr')
// 	  .then(function (response) {
// 	    console.log(response.data);	  
// 	  })
// 	  .catch(function (error) {
// 	    console.log(error);
	 
// 	  });
// })
// app.get('/geo',function(req, res){
// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/matinaaplaya')
// 	  .then(function (response) {
// 	    console.log(response.data);	  
// 	  })
// 	  .catch(function (error) {
// 	    console.log(error);
	 
// 	  });
// })
// app.get('/geo',function(req, res){
// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecoland')
// 	  .then(function (response) {
// 	    console.log(response.data);	  
// 	  })
// 	  .catch(function (error) {
// 	    console.log(error);
	 
// 	  });
// })
// app.get('/geo',function(req, res){
// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/tulipdr')
// 	  .then(function (response) {
// 	    console.log(response.data);	  
// 	  })
// 	  .catch(function (error) {
// 	    console.log(error);
	 
// 	  });
// })
// app.get('/geo',function(req, res){
// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/quimpoblvd')
// 	  .then(function (response) {
// 	    console.log(response.data);	  
// 	  })
// 	  .catch(function (error) {
// 	    console.log(error);
	 
// 	  });
// })


//facebook reply---------------------------------------------------------------------------------------------------------------

var b = 'hallo';
//var a  = ' ';

app.post('/webhook/', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
			let text = event.message.text
			var a  = ' ';
		//	streetj = body.RWS[0].RW[3].DE;
			if(text.includes('quirino north') || text.includes("Quirino North")|| text.includes("quirino North")){
				 sendText(sender, "I guess you mean"+a+equirino1+a+"north intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";	
				axios.get('https://fathomless-escarpment-16808.herokuapp.com/equirino')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisjf1;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysisjf2;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysisjf3;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysisjf4;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysisjf5;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('quirino south') || text.includes("Quirino South")|| text.includes("quirino South")){
				 sendText(sender, "I guess you mean"+a+equirino1+a+"south intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://fathomless-escarpment-16808.herokuapp.com/equirino')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisjf6;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysisjf7;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysisjf8;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysisjf9;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysisjf10;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text== ''+equirino1+a+'south intersections'){
				 //sendText(sender, "I guess you mean"+a+street+a+"north intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://fathomless-escarpment-16808.herokuapp.com/equirino')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisjf1;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysisjf2;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysisjf3;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysisjf4;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysisjf5;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text== ''+equirino1+a+'north intersections'){
				 //sendText(sender, "I guess you mean"+a+street+a+"north intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";	
				//source : https://www.npmjs.com/package/axios
				axios.get('https://fathomless-escarpment-16808.herokuapp.com/equirino')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysisjf6;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysisjf7;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysisjf8;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysisjf9;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysisjf10;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
			// 	else if(text.includes('laurel north') || text.includes("Laurel North")|| text.includes("laurel North")){
			// 	 sendText(sender, "I guess you mean"+a+streetj+a+"north intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";	
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/jplaurel')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysisjp1;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysisjp2;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysisjp3;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysisjp4;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysisjp5;
			// 	    sendText(sender, chatbotResponse4)
			// 	     chatbotResponse5 = response.data.analysisjp6;
			// 	    sendText(sender, chatbotResponse5)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('laurel south') || text.includes("Laurel south")|| text.includes("laurel South")){
			// 	 sendText(sender, "I guess you mean"+a+streetj+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";	
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/jplaurel')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysisjp01;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysisjp02;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysisjp03;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysisjp04;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysisjp05;
			// 	    sendText(sender, chatbotResponse4)
			// 	     chatbotResponse5 = response.data.analysisjp06;
			// 	    sendText(sender, chatbotResponse5)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text == ''+streetj+a+'south intersections'){
			// 	 //sendText(sender, "I guess you mean"+a+streetj+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";	
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/jplaurel')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysisjp01;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysisjp02;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysisjp03;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysisjp04;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysisjp05;
			// 	    sendText(sender, chatbotResponse4)
			// 	     chatbotResponse5 = response.data.analysisjp06;
			// 	    sendText(sender, chatbotResponse5)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text == ''+streetj+a+'north intersections'){
			// 	 //sendText(sender, "I guess you mean"+a+streetj+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";	
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/jplaurel')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysisjp1;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysisjp2;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysisjp3;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysisjp4;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysisjp5;
			// 	    sendText(sender, chatbotResponse4)
			// 	     chatbotResponse5 = response.data.analysisjp6;
			// 	    sendText(sender, chatbotResponse5)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('arthur south') ||  text.includes('arthur South')){
			// 	 sendText(sender, "I guess you mean"+a+streetmm+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";
			// 	let chatbotResponse6 = "";
			// 	let chatbotResponse7 = "";
			// 	let chatbotResponse8 = "";
			// 	let chatbotResponse9 = "";
			// 	let chatbotResponse10 = "";
			// 	let chatbotResponse11 = "";
			// 	let chatbotResponse12 = "";
			// 	let chatbotResponse13 = "";	
			// 	let chatbotResponse14 = "";		
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/mcarthur')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis35;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis22;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis23;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysis24;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysis25;
			// 	    sendText(sender, chatbotResponse4)
			// 	    chatbotResponse5 = response.data.analysis26;
			// 	    sendText(sender, chatbotResponse5)
			// 	     chatbotResponse6 = response.data.analysis26;
			// 	    sendText(sender, chatbotResponse6)
			// 	     chatbotResponse7 = response.data.analysis27;
			// 	    sendText(sender, chatbotResponse7)
			// 	     chatbotResponse8 = response.data.analysis28;
			// 	    sendText(sender, chatbotResponse8)
			// 	     chatbotResponse9 = response.data.analysis29;
			// 	    sendText(sender, chatbotResponse9)
			// 	     chatbotResponse10 = response.data.analysis30;
			// 	    sendText(sender, chatbotResponse10)
			// 	     chatbotResponse11 = response.data.analysis31;
			// 	    sendText(sender, chatbotResponse12)
			// 	     chatbotResponse12 = response.data.analysis32;
			// 	    sendText(sender, chatbotResponse12)
			// 	    chatbotResponse13 = response.data.analysis33;
			// 	    sendText(sender, chatbotResponse13)
			// 	    chatbotResponse14 = response.data.analysis34;
			// 	    sendText(sender, chatbotResponse14)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text.includes('arthur north') || text.includes('arthur North')){
			// 	sendText(sender, "I guess you mean"+a+streetmm+a+"north intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";
			// 	let chatbotResponse6 = "";
			// 	let chatbotResponse7 = "";
			// 	let chatbotResponse8 = "";
			// 	let chatbotResponse9 = "";
			// 	let chatbotResponse10 = "";
			// 	let chatbotResponse11 = "";
			// 	let chatbotResponse12 = "";
			// 	let chatbotResponse13 = "";	
			// 	let chatbotResponse14 = "";		
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/mcarthur')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis222;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis223;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis224;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysis225;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysis226;
			// 	    sendText(sender, chatbotResponse4)
			// 	    chatbotResponse5 = response.data.analysis227;
			// 	    sendText(sender, chatbotResponse5)
			// 	     chatbotResponse6 = response.data.analysis228;
			// 	    sendText(sender, chatbotResponse6)
			// 	     chatbotResponse7 = response.data.analysis229;
			// 	    sendText(sender, chatbotResponse7)
			// 	     chatbotResponse8 = response.data.analysis230;
			// 	    sendText(sender, chatbotResponse8)
			// 	     chatbotResponse9 = response.data.analysis231;
			// 	    sendText(sender, chatbotResponse9)
			// 	     chatbotResponse10 = response.data.analysis232;
			// 	    sendText(sender, chatbotResponse10)
			// 	     chatbotResponse11 = response.data.analysis233;
			// 	    sendText(sender, chatbotResponse12)
			// 	     chatbotResponse12 = response.data.analysis234;
			// 	    sendText(sender, chatbotResponse12)
			// 	    chatbotResponse13 = response.data.analysis235;
			// 	    sendText(sender, chatbotResponse13)
			// 	    // chatbotResponse14 = response.data.analysis34;
			// 	    // sendText(sender, chatbotResponse14)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text == ''+streetmm+a+'south intersections'){
			// 	 //sendText(sender, "I guess you mean"+a+streetj+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";
			// 	let chatbotResponse6 = "";
			// 	let chatbotResponse7 = "";
			// 	let chatbotResponse8 = "";
			// 	let chatbotResponse9 = "";
			// 	let chatbotResponse10 = "";
			// 	let chatbotResponse11 = "";
			// 	let chatbotResponse12 = "";
			// 	let chatbotResponse13 = "";	
			// 	let chatbotResponse14 = "";		
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/mcarthur')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis35;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis22;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis23;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysis24;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysis25;
			// 	    sendText(sender, chatbotResponse4)
			// 	    chatbotResponse5 = response.data.analysis26;
			// 	    sendText(sender, chatbotResponse5)
			// 	     chatbotResponse6 = response.data.analysis26;
			// 	    sendText(sender, chatbotResponse6)
			// 	     chatbotResponse7 = response.data.analysis27;
			// 	    sendText(sender, chatbotResponse7)
			// 	     chatbotResponse8 = response.data.analysis28;
			// 	    sendText(sender, chatbotResponse8)
			// 	     chatbotResponse9 = response.data.analysis29;
			// 	    sendText(sender, chatbotResponse9)
			// 	     chatbotResponse10 = response.data.analysis30;
			// 	    sendText(sender, chatbotResponse10)
			// 	     chatbotResponse11 = response.data.analysis31;
			// 	    sendText(sender, chatbotResponse12)
			// 	     chatbotResponse12 = response.data.analysis32;
			// 	    sendText(sender, chatbotResponse12)
			// 	    chatbotResponse13 = response.data.analysis33;
			// 	    sendText(sender, chatbotResponse13)
			// 	    chatbotResponse14 = response.data.analysis34;
			// 	    sendText(sender, chatbotResponse14)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text == ''+streetmm+a+'north intersections'){
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	let chatbotResponse4 = "";
			// 	let chatbotResponse5 = "";
			// 	let chatbotResponse6 = "";
			// 	let chatbotResponse7 = "";
			// 	let chatbotResponse8 = "";
			// 	let chatbotResponse9 = "";
			// 	let chatbotResponse10 = "";
			// 	let chatbotResponse11 = "";
			// 	let chatbotResponse12 = "";
			// 	let chatbotResponse13 = "";	
			// 	let chatbotResponse14 = "";		
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/mcarthur')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis222;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis223;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis224;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysis225;
			// 	    sendText(sender, chatbotResponse3)
			// 	    chatbotResponse4 = response.data.analysis226;
			// 	    sendText(sender, chatbotResponse4)
			// 	    chatbotResponse5 = response.data.analysis227;
			// 	    sendText(sender, chatbotResponse5)
			// 	     chatbotResponse6 = response.data.analysis228;
			// 	    sendText(sender, chatbotResponse6)
			// 	     chatbotResponse7 = response.data.analysis229;
			// 	    sendText(sender, chatbotResponse7)
			// 	     chatbotResponse8 = response.data.analysis230;
			// 	    sendText(sender, chatbotResponse8)
			// 	     chatbotResponse9 = response.data.analysis231;
			// 	    sendText(sender, chatbotResponse9)
			// 	     chatbotResponse10 = response.data.analysis232;
			// 	    sendText(sender, chatbotResponse10)
			// 	     chatbotResponse11 = response.data.analysis233;
			// 	    sendText(sender, chatbotResponse12)
			// 	     chatbotResponse12 = response.data.analysis234;
			// 	    sendText(sender, chatbotResponse12)
			// 	    chatbotResponse13 = response.data.analysis235;
			// 	    sendText(sender, chatbotResponse13)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text.includes('ecowest north') || text.includes("Ecowest North")|| text.includes("ecowest North")){
			// 	sendText(sender, "I guess you mean"+a+streetec+a+"north intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecowestdr')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis05;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis06;
			// 	    sendText(sender, chatbotResponse1)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text.includes('ecowest south') || text.includes("Ecowest South")|| text.includes("ecowest South")){
			// 	sendText(sender, "I guess you mean"+a+streetec+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecowestdr')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis5;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis6;
			// 	    sendText(sender, chatbotResponse1)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text==''+streetec+a+'south intersections'){
			// //	sendText(sender, "I guess you mean"+a+streetec+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecowestdr')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis5;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis6;
			// 	    sendText(sender, chatbotResponse1)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}
			// 	else if(text==''+streetec+a+'north intersections'){
			// //	sendText(sender, "I guess you mean"+a+streetec+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecowestdr')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis05;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis06;
			// 	    sendText(sender, chatbotResponse1)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('mati south') || text.includes("Mati South")|| text.includes("mati South")){
			// 	sendText(sender, "I guess you mean"+a+streetmmm+a+"south intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/matinaaplaya')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis9;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis10;
			// 	    sendText(sender, chatbotResponse1)
			// 	      chatbotResponse2 = response.data.analysis11;
			// 	    sendText(sender, chatbotResponse2)
			// 	      chatbotResponse3 = response.data.analysis12;
			// 	    sendText(sender, chatbotResponse3)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('mati north') || text.includes("Mati North")|| text.includes("mati north")){
			// 	sendText(sender, "I guess you mean"+a+streetmmm+a+"north intersections. The traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/matinaaplaya')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis09;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis010;
			// 	    sendText(sender, chatbotResponse1)
			// 	      chatbotResponse2 = response.data.analysis011;
			// 	    sendText(sender, chatbotResponse2)
			// 	      chatbotResponse3 = response.data.analysis012;
			// 	    sendText(sender, chatbotResponse3)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text==''+streetmmm+a+'south intersections'){
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/matinaaplaya')
			// 	  .then(function (response) {
			// 	    //console.log(response);
			// 	    chatbotResponse = response.data.analysis9;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis10;
			// 	    sendText(sender, chatbotResponse1)
			// 	      chatbotResponse2 = response.data.analysis11;
			// 	    sendText(sender, chatbotResponse2)
			// 	      chatbotResponse3 = response.data.analysis12;
			// 	    sendText(sender, chatbotResponse3)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text==''+streetmmm+a+'north intersections'){
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/matinaaplaya')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis09;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis010;
			// 	    sendText(sender, chatbotResponse1)
			// 	      chatbotResponse2 = response.data.analysis011;
			// 	    sendText(sender, chatbotResponse2)
			// 	      chatbotResponse3 = response.data.analysis012;
			// 	    sendText(sender, chatbotResponse3)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('ecoland south ')||text.includes('ecoland South ')){
			// 	sendText(sender, "I guess you mean"+a+street+a+"south intersections. The Traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecoland')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis10;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis11;
			// 	    sendText(sender, chatbotResponse1)
			// 	      chatbotResponse2 = response.data.analysis12;
			// 	    sendText(sender, chatbotResponse2)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('ecoland north ')||text.includes('ecoland North ')){
			// 	sendText(sender, "I guess you mean"+a+street+a+"north intersections. The Traffic status for the intersections.")
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecoland')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis09;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis010;
			// 	    sendText(sender, chatbotResponse1)
			// 	      chatbotResponse2 = response.data.analysis011;
			// 	    sendText(sender, chatbotResponse2)
			// 	     chatbotResponse3 = response.data.analysis012;
			// 	    sendText(sender, chatbotResponse3)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text==''+street+a+'south intersections'){
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecoland')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis10;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis11;
			// 	    sendText(sender, chatbotResponse1)
			// 	      chatbotResponse2 = response.data.analysis12;
			// 	    sendText(sender, chatbotResponse2)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text==''+street+a+'north intersections'){
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	let chatbotResponse3 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/ecoland')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis09;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis010;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis011;
			// 	    sendText(sender, chatbotResponse2)
			// 	    chatbotResponse3 = response.data.analysis012;
			// 	    sendText(sender, chatbotResponse3)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text==''+streetccc+a+'north intersections'){
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/tulipdr')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis12;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis13;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis14;
			// 	    sendText(sender, chatbotResponse2)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text==''+streetccc+a+'south intersections'){
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/tulipdr')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis111;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis112;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis113;
			// 	    sendText(sender, chatbotResponse2)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('tulip north') || text.includes('tulip North')){
			// 	sendText(sender, "I gues you mean"+a+streetccc+a+"north intersections.The traffic status for the intersections.")		
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/tulipdr')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis12;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis13;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis14;
			// 	    sendText(sender, chatbotResponse2)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else if(text.includes('tulip south') || text.includes('tulip South')){
			// 	sendText(sender, "I gues you mean"+a+streetccc+a+"south intersections.The traffic status for the intersections.")		
			// 	let chatbotResponse = "";
			// 	let chatbotResponse1 = "";
			// 	let chatbotResponse2 = "";
			// 	axios.get('https://fathomless-escarpment-16808.herokuapp.com/tulipdr')
			// 	  .then(function (response) {
			// 	    chatbotResponse = response.data.analysis111;
			// 	    sendText(sender, chatbotResponse)
			// 	    chatbotResponse1 = response.data.analysis112;
			// 	    sendText(sender, chatbotResponse1)
			// 	    chatbotResponse2 = response.data.analysis113;
			// 	    sendText(sender, chatbotResponse2)
			// 	  })
			// 	  .catch(function (error) {
			// 	    //console.log(error);
			// 	    chatbotResponse = "not ok";
			// 	    sendText(sender, chatbotResponse)
			// 	  });
			// 	  break;
			// 	}else{
			// 		sendText(sender, "Oops error")
			// 	}



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
	console.log("running: port")
})