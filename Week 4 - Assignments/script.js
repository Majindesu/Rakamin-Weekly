function randomArrayGen(min, max, arraysize){
    let randomArray = [];
    for (let i = 0; i < arraysize; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}

function calculateTotal(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

function calculateAverage(array){
    return calculateTotal(array) / array.length;
}

function separator(array){
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0){
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    return [evenArray, oddArray];
}

function findMax(array){
    let maxValue = 0;
    for (let i = 0; i < array.length; i++){
        maxValue = array[i] > maxValue ? array[i] : maxValue;
    }
    return maxValue;
}

function findMin(array){
    let minValue = 100;
    for (let i = 0; i < array.length; i++){
        minValue = array[i] < minValue ? array[i] : minValue;
    }
    return minValue;
}


// Penggunaan onClick
function generate(){
    let generatedArray = randomArrayGen(1, 50, 100);
    let [generatedEven, generatedOdd] = separator(generatedArray);

    let evenMin = findMin(generatedEven);
    let evenMax = findMax(generatedEven);
    let evenTotal = calculateTotal(generatedEven);
    let evenAverage = calculateAverage(generatedEven);

    let oddMin = findMin(generatedOdd);
    let oddMax = findMax(generatedOdd);
    let oddTotal = calculateTotal(generatedOdd);
    let oddAverage = calculateAverage(generatedOdd);

    let minComparison = evenMin > oddMin ? "Min lebih besar array genap" : "Min lebih besar array ganjil";
    let maxComparison = evenMax > oddMax ? "Max lebih besar array genap" : "Max lebih besar array ganjil";
    let totalComparison = evenTotal === oddTotal ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total tidak sama antara array genap dan ganjil";
    let averageComparison = evenAverage > oddAverage ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil";

    const contentDom = document.getElementById('contentContainer')
    contentDom.innerHTML= ""
    contentDom.innerHTML= 
        `
        <div id="outer" class="container mt-5 text-center">
            <div class="row">
                <div class="card m-2 col bg-warning p-2">
                <h3>Array dengan jumlah index 100: </h3> 
                <p class="text-wrap">${generatedArray.join(", ")}</p>
                </div>
            </div>
            <div class="row">
                <div class="card m-2 col bg-success text-white p-2">
                    <h3>Array genap:</h3>
                    <p>${generatedEven.join(", ")}</p>
                    <h3>Statistika Pembanding: </h3>
                    <p>Nilai Minimum: <strong>${evenMin}</strong></p>
                    <p>Nilai Maximum: <strong>${evenMax}</strong></p>
                    <p>Nilai Total: <strong>${evenTotal}</strong></p>
                    <p>Nilai Rata - Rata: <strong>${evenAverage}</strong></p>
                </div>
                <div class="card m-2 col bg-danger text-white p-2">
                    <h3>Array ganjil: </h3>
                    <p>${generatedOdd.join(", ")}</p>
                    <h3>Statistika Pembanding: </h3>
                    <p>Nilai Minimum: <strong>${oddMin}</strong></p>
                    <p>Nilai Maximum: <strong>${oddMax}</strong></p>
                    <p>Nilai Total: <strong>${oddTotal}</strong></p>
                    <p>Nilai Rata - Rata: <strong>${oddAverage}</strong></p>
                </div>
            </div>
            <div class="row">
                <div class="card m-2 col bg-warning p-2">
                    <p>${minComparison}</p>
                </div>
                <div class="card m-2 col bg-warning p-2">
                    <p>${maxComparison}</p>
                </div>
                <div class="card m-2 col bg-warning p-2">
                    <p>${totalComparison}</p>
                </div>
                <div class="card m-2 col bg-warning p-2">
                    <p>${averageComparison}</p>
                </div>
            </div>
        </div>
        `
    const regenerateDom = document.getElementById('generateBtn')
    regenerateDom.innerHTML = "Re-Generate"
    regenerateDom.id="regenerateBtn"
    regenerateDom.setAttribute('onclick','regenerate()')
    }

    //penggunaan setelah klik pertama
    function regenerate(){
        const generateDom = document.getElementById('regenerateBtn')
        generateDom.id="generateBtn" //Agar tidak muncul Error, mengganti ID 'regenerate' kembali menjadi 'generate'
        const outerDom = document.getElementById("outer")
        outerDom.classList.add("exit")
        setTimeout(generate,1000)
        
    }

