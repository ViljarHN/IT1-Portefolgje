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

function findASoldierWhoAttacked(soldier) {
    switch (soldier.name) {
        case 'Fotsoldat':
            return 'soldierA'
        case 'Rytter':
            return 'riderA'
        case 'Kanonmann':
            return 'cannoncrewA'
    }
}
function findBSoldierWhoAttacked(soldier) {
    switch (soldier.name) {
        case 'Fotsoldat':
            return 'soldierB'
        case 'Rytter':
            return 'riderB'
        case 'Kanonmann':
            return 'cannoncrewB'
    }
}

function A_MoveToBattleField(soldier, soldierDiv) {
    switch (soldier.name) {
        case 'Fotsoldat':
            soldierDiv.style.opacity = '1';
            soldierDiv.style.left = '370px';
            break;
        case 'Rytter':
            soldierDiv.style.opacity = '1'
            soldierDiv.style.left = '360px';
            break;
        case 'Kanonmann':
            soldierDiv.style.opacity = '1';
            soldierDiv.style.left = '360px';
    }
}
function B_MoveToBattleField(soldier, soldierDiv) {
    switch (soldier.name) {
        case 'Fotsoldat':
            soldierDiv.style.opacity = '1';
            soldierDiv.style.left = '770px';
            break;
        case 'Rytter':
            soldierDiv.style.opacity = '1';
            soldierDiv.style.left = '585px';
            break;
        case 'Kanonmann':
            soldierDiv.style.opacity = '1';
            soldierDiv.style.left = '210px';
            break;
    }
}
function A_LeaveBattleField(soldier, soldierDiv) {
    switch (soldier.name) {
        case 'Fotsoldat':
            soldierDiv.style.opacity = '0';
            soldierDiv.style.left = '130px';
            break;
        case 'Rytter':
            soldierDiv.style.opacity = '0';
            soldierDiv.style.left = '60px';
            break;
        case 'Kanonmann':
            soldierDiv.style.opacity = '0';
            soldierDiv.style.left = '80px';
            break;
    }
}
function B_LeaveBattleField(soldier, soldierDiv) {
    switch (soldier.name) {
        case 'Fotsoldat':
            soldierDiv.style.opacity = '0';
            soldierDiv.style.left = '1000px';
            break;
        case 'Rytter':
            soldierDiv.style.opacity = '0';
            soldierDiv.style.left = '900px';
            break;
        case 'Kanonmann':
            soldierDiv.style.opacity = '0';
            soldierDiv.style.left = '500px';
            break;
    }
}

let allowStart = true;

function startBattle() { 
    if (allowStart == true) {
        allowStart = false;
        let lagA = Math.floor(Math.random() * 10) + 5;
        let lagB = Math.floor(Math.random() * 10) + 5;
        document.getElementById('redTeamAmount').innerHTML = lagA;
        document.getElementById('blueTeamAmount').innerHTML = lagB;
        document.getElementById('endResult').innerHTML = '';
        function newbattle() {
            if (lagA > 0 && lagB > 0) {  
                let angrep = 3;
                let a_liv = 10;
                let b_liv = 10;
                const A = makeSoldier();
                const B = makeSoldier();
                const aSoldierDiv = document.getElementById(findASoldierWhoAttacked(A));
                const bSoldierDiv = document.getElementById(findBSoldierWhoAttacked(B));
                A_MoveToBattleField(A, aSoldierDiv);
                B_MoveToBattleField(B, bSoldierDiv);
                const skadeA = A.skill + A.strength - B.defense;
                const skadeB = B.skill + B.strength - A.defense;
                while (a_liv > 0 && b_liv > 0 && angrep > 0) {
                    const randNum = Math.random();
                    if (randNum >= 0.5) {
                        console.log('Lag A angriper med ein ' + A.name);
                        if (skadeA > B.defense) {
                            b_liv -= skadeA;
                            angrep--;
                            console.log('Soldat B tok skade, nåværende liv: ' + b_liv + ', skade frå A: ' + skadeA);
                            if (b_liv <= 0) {
                                lagB--;
                                console.log('Lag B mista ein soldat');
                                setTimeout(() => {
                                    B_LeaveBattleField(B, bSoldierDiv)
                                    document.getElementById('blueTeamAmount').innerHTML = lagB;
                                }, 1000);
                                setTimeout(() => {
                                    A_LeaveBattleField(A, aSoldierDiv)
                                }, 2000);
                                setTimeout(function() {
                                    newbattle(); 
                                }, 3000); 
                            };
                            if (angrep <= 0) {
                                console.log('Ingen nytte i kampen, trekk tilbake!')
                                setTimeout(() => {
                                    A_LeaveBattleField(A, aSoldierDiv)
                                    B_LeaveBattleField(B, bSoldierDiv)
                                }, 1000);
                                setTimeout(function() {
                                    newbattle(); 
                                }, 2000); 
                            }
                        } else {
                            angrep--;
                            console.log('Soldat B forsvarte seg');
                            if (angrep <= 0) {
                                console.log('Ingen nytte i kampen, trekk tilbake!')
                                setTimeout(() => {
                                    A_LeaveBattleField(A, aSoldierDiv)
                                    B_LeaveBattleField(B, bSoldierDiv)
                                }, 1000);
                                setTimeout(function() {
                                    newbattle(); 
                                }, 2000); 
                            }
                        }
                    } else {
                        console.log('Lag B angriper med ein ' + B.name);
                        if (skadeB > A.defense) {
                            a_liv -= skadeB;
                            angrep--;
                            console.log('Soldat A tok skade, nåværende liv: ' + a_liv + ', skade frå B: ' + skadeB);
                            if (a_liv <= 0) {
                                lagA--;
                                console.log('Lag A mista ein soldat')
                                setTimeout(() => {
                                    A_LeaveBattleField(A, aSoldierDiv)
                                    document.getElementById('redTeamAmount').innerHTML = lagA;
                                }, 1000);
                                setTimeout(() => {
                                    B_LeaveBattleField(B, bSoldierDiv)
                                }, 2000);
                                setTimeout(function() {
                                    newbattle(); 
                                }, 3000);
                            }
                            if (angrep <= 0) {
                                console.log('Ingen nytte i kampen, trekk tilbake!')
                                setTimeout(() => {
                                    A_LeaveBattleField(A, aSoldierDiv)
                                    B_LeaveBattleField(B, bSoldierDiv)
                                }, 1000);
                                setTimeout(function() {
                                    newbattle(); 
                                }, 2000); 
                            }z
                        } else {
                            angrep--;
                            console.log('Soldat A forsvarte seg');
                            if (angrep <= 0) {
                                console.log('Ingen nytte i kampen, trekk tilbake!')
                                setTimeout(() => {
                                    A_LeaveBattleField(A, aSoldierDiv)
                                    B_LeaveBattleField(B, bSoldierDiv)
                                }, 1000);
                                setTimeout(function() {
                                    newbattle(); 
                                }, 2000);
                            }
                        }
                    }
                };
            } else {
                allowStart = true;
                if (lagA == 0) {
                    console.log(`Lag B vant med ${lagB} soldatar`);
                    document.getElementById('endResult').innerHTML = `Blå vant med ${lagB} soldater!`;
                } else {
                    console.log(`Lag A vant med ${lagA} soldatar`);
                    document.getElementById('endResult').innerHTML = `Raud vant med ${lagA} soldater!`;
                };
            }
        }
        newbattle();   
    }
};