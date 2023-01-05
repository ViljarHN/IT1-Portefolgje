let lagA = 50
let lagB = 60

while (lagA >= 0 || lagB >= 0) {
    const randNum = Math.random()
    if (randNum >= 0.5) {
        lagA--;
        console.log(lagA)
    } else {
        lagB--;
        console.log(lagB)
    }
}