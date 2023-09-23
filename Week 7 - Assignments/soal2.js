const fs = require('fs');

// Membaca homework.log 
fs.readFile('homework.log', 'utf-8', (err, logData) => {
    if (err) {
        console.error(err);
        return; // Catch error
    }

    console.log("Data read successfully! Showing data:" + logData);

    // Membuat file log.txt
    fs.writeFile('log.txt', logData, 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return; // Catch error
        }
        console.log("Data written successfully!");
    });
});
