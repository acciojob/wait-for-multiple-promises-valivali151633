


// creating a random promise
function createPromise (){
    const randomTime = Math.floor(Math.random()*2000) +1000 //time value should be between 1 t0 3 seconds
return new Promise((resolve , reject) => {
    setTimeout(() =>{
        resolve(randomTime);
      }, randomTime);
    }
)
};

const promises = [createPromise(), createPromise() ,createPromise()];

const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";
loadingCell.style.backgroundColor = "blue"
loadingRow.appendChild(loadingCell);
document.getElementById("output").appendChild(loadingRow);


Promise.all(promises).then((data) =>{
    document.getElementById('output').removeChild(loadingRow);

    data.forEach((time, index) =>{
        const dataRow = document.createElement("tr");
        const promiseCell = document.createElement("td");
        promiseCell.textContent = `Promise${index + 1}`;
        const timeCell = document.createElement('td');
        timeCell.textContent = time / 1000 ;
        dataRow.append(promiseCell , timeCell)
        document.getElementById('output').appendChild(dataRow)
      }
    )


    const totalTime = data.reduce((acc , curr) =>  acc + curr , 0 );
        const totalRow = document.createElement('tr');
        const totalPromiseCell = document.createElement('td');
        const totalTimeCell = document.createElement('td');
        totalPromiseCell.textContent = "Total"
        totalTimeCell.textContent = totalTime/1000 ; 
        totalRow.append(totalPromiseCell , totalTimeCell);
        document.getElementById('output').appendChild(totalRow);



})
.catch((error) => {
    console.log("Error:", error);
});







