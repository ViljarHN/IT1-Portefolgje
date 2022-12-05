const antallTimer = 5;
const antallMinutter = 36;
const antallSekunder = 55;
console.log(antallTimer * 3600 + antallMinutter * 60 + antallSekunder + ' sekunder')

function sekund(antallTimer, antallMinutter, antallSekunder) {
    return antallTimer * 3600 + antallMinutter * 60 + antallSekunder
} 
console.log(sekund(5, 36, 55));