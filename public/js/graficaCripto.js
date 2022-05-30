document.addEventListener("DOMContentLoaded", () => {
	/*res grafica_cripto*/
	fetch_cripto();		
});

/*res grafica_cripto*/
const fetch_cripto = async() =>{
	try{
	const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='24h'");
	const data = await res.json();

	price_cripto(data);

	}catch (error){
		console.log(error);
	}
}

//Price cripto.
function price_cripto(Data){
	let tbody = '';
	//data of coingecko. 
	 for (let i= 0; i < Data.length; i++) {
	 	tbody += `
	 			<tr>
				<th scope="row">${Data[i].market_cap_rank}</th>
	      		<td><img src="${Data[i].image}"> ${Data[i].id} (${Data[i].symbol})</td>
				<td>${Data[i].current_price}</td>
				<td class="${Data[i].price_change_percentage_24h > 0 ? "positivo" : "negativo"}">${Data[i].price_change_percentage_24h}</td>
				<td>${Data[i].price_change_24h}</td>
				</tr>
	 			`; 			   
	 	}
	 //Create Element in tbody.
	 document.getElementById('tbody').innerHTML = tbody;
}
