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

function makeSoldier() {
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

let lagA = Math.floor(Math.random() * 10) + 1;
let lagB = Math.floor(Math.random() * 10) + 1;

console.log('lagA: ' + lagA, 'lagB: ' + lagB);

while (lagA > 0 && lagB > 0) {
    let angrep = 5;
    let a_liv = 10;
    let b_liv = 10;
    const A = makeSoldier();
    const B = makeSoldier();
    const skadeA = A.skill + A.strength - B.defense;
    const skadeB = B.skill + B.strength - A.defense;
    while (a_liv > 0 && b_liv > 0 && angrep > 0) {
        const randNum = Math.random();
        if (randNum >= 0.5) {
            console.log('Lag A angriper med ein ' + A.name);
            if (skadeA > B.defense) {
                b_liv -= skadeA;
                console.log('Soldat B tok skade, nåværende liv: ' + b_liv + ', skade frå A: ' + skadeA);
                if (b_liv <= 0) {
                    lagB--;
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
                    lagA--;
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
    console.log(`Lag B vant med ${lagB} soldatar`);
} else {
    console.log(`Lag A vant med ${lagA} soldatar`);
};

