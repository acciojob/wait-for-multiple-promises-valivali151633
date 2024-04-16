// Create an array of three Promises that resolve after a random time between 1 and 3 seconds
function createPromise() {
    const randomTime = Math.floor(Math.random() * 2000) + 1000; // Random time between 1 and 3 seconds
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(randomTime);
        }, randomTime);
    });
}

const promises = [createPromise(), createPromise(), createPromise()];

// Add a row with "Loading..." to the table
const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";

loadingRow.appendChild(loadingCell);
document.getElementById("output").appendChild(loadingRow);

// Wait for all promises to resolve using Promise.all()
Promise.all(promises)
    .then((data) => {
        // Remove the loading row
        document.getElementById("output").removeChild(loadingRow);

        // Populate the table with the resolved values
        data.forEach((time, index) => {
            const datarow = document.createElement("tr");
            const promiseCell = document.createElement("td");
            const timeCell = document.createElement("td");
            promiseCell.textContent = `Promise ${index + 1}`;
            timeCell.textContent = time / 1000; // Convert milliseconds to seconds
            datarow.appendChild(promiseCell);
            datarow.appendChild(timeCell);
            document.getElementById("output").appendChild(datarow);
        });

        // Calculate and display the total time
        const totalTime = data.reduce((acc, curr) => acc + curr, 0);
        const totalRow = document.createElement("tr");
        const totalNameCell = document.createElement("td");
        const totalTimeCell = document.createElement("td");
        totalNameCell.textContent = "Total";
        totalTimeCell.textContent = totalTime / 1000; // Convert milliseconds to seconds
        totalRow.appendChild(totalNameCell);
        totalRow.appendChild(totalTimeCell);
        document.getElementById("output").appendChild(totalRow);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
