


// creating a random promise
functin createPromise (){
	return new Promise((resolve , reject) =>{
		const randomTime = Math.floor(Math.random*()*2000) +1000 //time value should be between 1 t0 3 seconds
		setTimeOut(() =>{
			resolve(randomTime);
		}, randomTime);
	}
	)
};

let promises = [createPromise() ,createPromise() ,createPromise()];

const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
document.getElementById("output").appendChild(loadingRow);


const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";

loadingRow.appendChild(loadingCell);
document.getElementById("output").appendChild(loadingRow);





Promise.all(promises)
	.then((results) =>{
	document.
})
