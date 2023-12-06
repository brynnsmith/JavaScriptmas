const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(arr) {
    // Your code here
    const pairs = {};
    for (let i = 0; i < arr.length; i++) {
        let random = Math.floor(Math.random() * (i+1));
        const temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp; 
    }
    for (let j = 0; j < arr.length; j++) {
        if (j === arr.length-1) {
            pairs[arr[j]] = arr[0];
        } else {
            pairs[arr[j]] = arr[j+1];   
        }
    }
    return pairs;
}

console.log(generateSecretSantaPairs(people))