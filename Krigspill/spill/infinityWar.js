class soldier {
    constructor() {
        this.name = 'Fotsoldat';
        this.strength = Math.floor(Math.random() * 10) + 1;
        this.skill = Math.floor(Math.random() * 10) + 1;
        this.defense = Math.floor(Math.random() * 30) + 10;
    }
}
class horseman {
    constructor() {
        this.name = 'Rytter';
        this.strength = Math.floor(Math.random() * 20) + 10;
        this.skill = Math.floor(Math.random() * 10) + 1;
        this.defense = Math.floor(Math.random() * 20) + 1;
    }
}
class cannoncrew {
    constructor() {
        this.name = 'Kanonmann';
        this.strength = Math.floor(Math.random() * 10) + 40;
        this.skill = Math.floor(Math.random() * 10) + 1;
        this.defense = Math.floor(Math.random() * 5) + 1;
    }
}

function newSoldier() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        const newSoldier = new soldier;
        return newSoldier
    } else if (randNum == 1) {
        const newHorseman = new horseman;
        return newHorseman
    } else {
        const newCannoncrew = new cannoncrew;
        return newCannoncrew
    }
}

function summonArmy() {
    let armyAmount = Math.floor(Math.random() * 5) + 5;
    let array = [];
    let army = {
        soldat: 0,
        hest: 0,
        kanon: 0,
        antall: armyAmount
    }
    for (let i = 0; i < armyAmount; i++) {
        array.push(newSoldier()); //legg til tilfeldig soldat i array-et
    }
    array.forEach(element => { //skjekker kor mange type av kvar soldat
        switch (element.name) {
            case 'Fotsoldat':
                army.soldat++;
                break;
            case 'Rytter':
                army.hest++;
                break;
            case 'Kanonmann':
                army.kanon++;
        }
    });
    array.unshift(army) //unshift: legger til fremst i array-et
    return array;
}

let lagA = summonArmy(); //array med alle soldatar, pluss antall soldatar og antall type kvar
let lagB = summonArmy();

while (lagA[0].antall > 0 && lagB[0].antall > 0) {
    const randSoldierA = Math.floor(Math.random() * (lagA[0].antall)) + 1;
    const randSoldierB = Math.floor(Math.random() * (lagB[0].antall)) + 1;
    let angrep = 4;
    let a_liv = 10;
    let b_liv = 10;
    const A = lagA[randSoldierA]; //tilfeldig soldat frå hæren som skal kjempe
    const B = lagB[randSoldierB];
    const skadeA = A.skill + A.strength - B.defense + B.skill;
    const skadeB = B.skill + B.strength - A.defense + B.skill;

    while (a_liv > 0 && b_liv > 0 && angrep > 0) {
        const randNum = Math.random();
        if (randNum >= 0.5) {
            console.log('Lag A angriper med ein ' + A.name);
            if (skadeA > B.defense) {
                b_liv -= skadeA;
                console.log('Soldat B tok skade, nåværende liv: ' + b_liv + ', skade frå A: ' + skadeA);
                if (b_liv <= 0) {
                    lagB[0].antall--;
                    lagB.splice(lagB.indexOf(B), 1)
                    console.log('Lag B mista ein soldat')
                }
            } else {
                console.log('Soldat B forsvarte seg');
            }
            angrep--;
            if (angrep <= 0) {
                console.log('Ingen nytte i kampen, trekk tilbake!')
            }
        } else {
            console.log('Lag B angriper med ein ' + B.name);
            if (skadeB > A.defense) {
                a_liv -= skadeB;
                console.log('Soldat A tok skade, nåværende liv: ' + a_liv + ', skade frå B: ' + skadeB);
                if (a_liv <= 0) {
                    lagA[0].antall--;
                    lagA.splice(lagA.indexOf(A), 1)
                    console.log('Lag A mista ein soldat')
                }
            } else {
                console.log('Soldat A forsvarte seg');
            }
            angrep--;
            if (angrep <= 0) {
                console.log('Ingen nytte i kampen, trekk tilbake!')
            }
        }
    }
};

if (lagA == 0) {
    console.log(`Lag B vant med ${lagB[0].antall} soldatar`);
    console.log(lagB)
} else {
    console.log(`Lag A vant med ${lagA[0].antall} soldatar`);
    console.log(lagA)
};

