const express = require('express');
const router = express.Router();
//config Nodemailer
const nodemailer = require('nodemailer');

router.post('/new-user', async(req, res) => {
	const {name, email} = req.body;
	userHtml=`
      <h4>Nuevo usuario app-cripto</h4> 
	  <ul>
	  	<li><h2>${name}<h2></li>
		<li><h2>${email}<h2></li>
	  </ul>
    `;

	const Email = process.env.PORTFOLIO_EMAIL;
    const Password = process.env.PORTFOLIO_PASSWORD;
    const Host = process.env.PORTFOLIO_HOST;
    const Port = process.env.PORTFOLIO_PORT;

	let transportador = nodemailer.createTransport({
		host: Host,
		port: Port,
		 secure: false,
        auth: {
            user: Email,
            pass: Password
	    },
        tls: {
          rejectUnauthorized: false
         }
	});

	 var mailOptions = await transportador.sendMail({
     from: `"CristianZamora" <${Email}>`,
     to:  'cristian.zamora2400@gmail.com',
     subject: 'leading page information.',
     html: userHtml
    }); 
     res.redirect('/sucess');
});

//Config of router
router.get('/', (req, res)=>{
	res.render('index');
});

router.get('/sucess', (req, res) =>{
	res.render('sucess');
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