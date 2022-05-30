const express = require('express');
const router = express.Router();
//Variables de entorno
require("dotenv").config();

//Config firebase
const firebase = require('firebase-admin');
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

//Firebase config 
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
//Config of router
router.get('/', (req, res)=>{
	res.render('index');
});

router.get('/sucess', (req, res) =>{
	res.render('sucess');
});

//received Post
router.post('/new-user', (req, res) =>{
	const User ={
	  name: req.body.name,
	  email: req.body.email
	}

	db.ref('users').push(User);
	res.redirect('/sucess');
	console.log('enviado');
});

//Curiosity render express
router.get('/curiosity', (req, res) =>{
	res.render('curiosity');
});

//Price cripto render
router.get('/price', (req, res) =>{
	res.render('priceCripto');
});

//Contact cripto render
router.get('/contact', (req, res) =>{
	res.render('information');
});

module.exports = router;