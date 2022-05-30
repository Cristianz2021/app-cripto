document.addEventListener("DOMContentLoaded", () => {

	for (var id = 0; id < 3; id++) {
		fetchCriptoPrice(id);
	}

	translate();
});

const fetchCriptoPrice = async(id) => {
try{
	const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='24h'");
	const data = await res.json();


	navbarCripto(data,id);

	}catch (error){
		console.log(error);
	}
}

//Grafica in navbar
const navbarCripto = (Data, id) =>{
	const graficaCripto = document.getElementById('cripto_price');	
	const templateCripto = document.getElementById('cripto_price_template').content;
	const clone = templateCripto.cloneNode(true);
	const Fragment = document.createDocumentFragment();

	clone.querySelector('.icon_cripto').setAttribute("src", Data[id].image);
	clone.querySelector('.card_price_cripto').textContent = Data[id].current_price + "$";	

	Fragment.appendChild(clone);
	graficaCripto.appendChild(Fragment);

}

//Effect translate
function translate() {
	//Event__main
	const mainVar = document.querySelector('.main_var');
	const main__menu = document.querySelector('.nav-main');

	//Navigation-function
	mainVar.addEventListener('click', () => {
	 main__menu.classList.toggle('show');
	});
}