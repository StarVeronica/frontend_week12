function calculateBMI(weight, height) {
    // console.log(weight / Math.pow(height, 2));
    return Math.round(weight / Math.pow(height, 2) * 100) / 100;
}

const btn = document.getElementById("btn");

btn.addEventListener('click', function(evt) {
    const str = "abcdefghij";

    console.log("(2,3): "    + str.substr(2,3));
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    document.getElementById("result").textContent = `Индекс массы тела (ИМТ): ${calculateBMI(weight, height)}`;
});
