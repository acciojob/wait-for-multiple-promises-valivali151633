// Create an array of three Promises that resolve after a random time between 1 and 3 seconds
function createRandomPromise() {
    const randomTime = Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(randomTime);
        }, randomTime);
    });
}

const promises = [createRandomPromise(), createRandomPromise(), createRandomPromise()];

// Add a row with "Loading..." to the table
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
document.getElementById("output").appendChild(loadingRow);

// Wait for all promises to resolve using Promise.all()
Promise.all(promises)
    .then((results) => {
        // Remove the loading row
        document.getElementById("output").removeChild(loadingRow);

        // Populate the table with the resolved values
        results.forEach((time, index) => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const timeCell = document.createElement("td");
            nameCell.textContent = `Promise ${index + 1}`;
            timeCell.textContent = (time / 1000).toFixed(3); // Convert milliseconds to seconds
            row.appendChild(nameCell);
            row.appendChild(timeCell);
            document.getElementById("output").appendChild(row);
        });

        // Calculate and display the total time
        const totalTime = results.reduce((acc, curr) => acc + curr, 0);
        const totalRow = document.createElement("tr");
        const totalNameCell = document.createElement("td");
        const totalTimeCell = document.createElement("td");
        totalNameCell.textContent = "Total";
        totalTimeCell.textContent = (totalTime / 1000).toFixed(3); // Convert milliseconds to seconds
        totalRow.appendChild(totalNameCell);
        totalRow.appendChild(totalTimeCell);
        document.getElementById("output").appendChild(totalRow);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
