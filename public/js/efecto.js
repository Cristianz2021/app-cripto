document.addEventListener("DOMContentLoaded", () => {
	/*Validation form*/
	validationForm();
	//Grafica de Criptomonedas
	Grafica();
	//Grafica de Riesgo.
	Grafica_negativa();
	//Team user
	for (var i = 1; i < 4; i++) {
	 fetch_users(i);
	}
	/*Acordeon questions*/
	Questions();
	/*Time sucess*/
	TimeSucess();
});

//Grafica de Criptomonedas
function Grafica() {
	const canvas = document.getElementById('grafica_cripto');
	const canvas2d = canvas.getContext('2d');

	var chart = new Chart(canvas2d, {
	type: "line",
	data:{
	  labels:['Ripple XRP','Ethereum','Bitcoin'],
	  datasets:[
	   {
	   	label:"Cripto en su valor historico en $",
	   	backgroundColor:"#5468ff",
	   	borderColor:"#0072E5",
	   	data:['371','4665','66000'] 
	   }
	  ]	  
	}
});
	
}
//Grafica Negativa
function Grafica_negativa(){
	const canvasNegativa = document.getElementById('grafica_negativa').getContext('2d'); 

	var chart_negativo = new Chart(canvasNegativa, {
		type:"line",
		data:{
		 labels:['09/11/21', '09/12/21','09/01/22','09/02/22','09/03/2022'],
	  	 datasets:[
	   	 {
	   		label:"Bitcoin desde su valor historico hasta la actualidad.",
	   		backgroundColor:"#D3D3D3",
	   		borderColor:"#6F7E8C",
	   		data:['66000','49000','42000','44000', '41000'] 
	   	}
	  ]	  	
		}

	});
}

//Data Users
const fetch_users = async(id) =>{
	try{
	 const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	 const data = await res.json();

	 const UserData = {
	  img: '/img/person.png',
	  name: data.name,
	  email: data.email,
	  phone: data.phone
	 }
	 Users(UserData);	
	
	}catch (error){
		console.log(error);
	}
}

//Users
const Users = (UserData) =>{
	const main = document.getElementById('main_team');
	const content = document.createElement("div");
	content.classList.add("content_card");
	const template = document.getElementById('template').content;
	const clone = template.cloneNode(true);
	const fragment = document.createDocumentFragment();

	clone.querySelector('.card_user_img').setAttribute("src", UserData.img);
	clone.querySelector('.card_name').textContent = "Name: " + UserData.name;
	clone.querySelector('.card_mail').textContent = "Email: " + UserData.email;
	clone.querySelector('.card_phone').textContent = "Phone: " + UserData.phone;

	content.appendChild(clone);
	fragment.appendChild(content);
	main.appendChild(fragment);	

}	


/*Acordeon questions*/
function Questions() {
const title = document.querySelectorAll('.title');

title.forEach((cadaTitle, i) =>{
	title[i].addEventListener('click', function(){

		this.classList.toggle('activo');
		const content = this.nextElementSibling;
		
		if (content.style.width == '70%') {
			content.style.width = '0';
			content.style.height = '0';

		}else{
			content.style.width = '70%';
		    content.style.height = '12em';

		}
	});
});
	
}

/*Validation form*/
function validationForm(){
	const Form = document.getElementById('form');
	const Name = document.getElementById('name');
	const Email = document.getElementById('email');
	const parrafo = document.getElementById('warning');

	Form.addEventListener('submit', e => {
		let warning = '';
		let validationEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let error = false;

		if (Name.value.length < 5) {
			warning += `!Ups¡ a ocurrido un error en nombre. Por favor de ser completo.`;
			error = true; 
		}

		if (!validationEmail.test(Email.value)) {
			warning += `!Ups¡ a ocurrido un error en Email. Por favor revise a ver si es correcto.`;
			error = true;
		}

		if (error) {
	    e.preventDefault();
	    parrafo.innerHTML = warning;	
	    TimeError();
		}

	});
}

/*Time Error*/
function TimeError(){
   const cardError = document.querySelector('.card_error');
   cardError.classList.add('activo');
   const tiempoEspera = setTimeout(effectError, 10000);

}
/*Effect Error*/
function effectError(){
	const cardError = document.querySelector('.card_error');
	cardError.classList.remove('activo');
}

/*Time sucess*/
function TimeSucess(){
   const cardSucess = document.querySelector('.card_sucess');
   cardSucess.classList.add('activo');
   const tiempoEspera = setTimeout(effectSucess, 10000);

}
//Effect Sucess
function effectSucess(){
	const cardSucess = document.querySelector('.card_sucess');
	cardSucess.classList.remove('activo');
}