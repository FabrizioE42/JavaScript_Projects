function checkCashRegister(price, cash, cid) {
    let diff = cash - price;
    let diffCopy = diff;
    let drawer = {
        status: "",
        change: []
    }
    const currency = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.10,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };
    let cidReverse = cid.slice().reverse();
    const money = Object.fromEntries(cidReverse);
    let sum = 0;
    for(const property in money) {
        sum += money[property];
    }
    var currencyCopy = Object.assign(currency,currencyCopy);
    for(const property in currency ) {
        let changeVal = 0;
        let ratio = money[property]/currency[property].toFixed(2);
        while(diff.toFixed(2) >= currency[property] && ratio >= 1) {
            diff -= currency[property];
            changeVal += currency[property];
            ratio--;
        }
        if(changeVal > 0) {
            if(changeVal - Math.floor(changeVal) !==0) {
                currencyCopy[property] = changeVal.toFixed(2);
                currencyCopy[property] = parseFloat(currencyCopy[property])
            }
            else {
                currencyCopy[property] = changeVal;
            }
        
        }
        else {
            currencyCopy[property] = changeVal;
        }
    }
    let sumCurrencyCopy = 0;
    for(const property in currencyCopy) {
        sumCurrencyCopy += currencyCopy[property];
    }
    sumCurrencyCopy.toFixed(2);

    if(sum < diffCopy || sumCurrencyCopy < diffCopy) {
        drawer.status = "INSUFFICIENT_FUNDS";
        
    }
    else if (sum == diffCopy) {
        drawer.status = "CLOSED";
        drawer.change = cid;
    }
    else {
        let currencyCopyFiltered = [];
        let i = 0;
        for(const property in currencyCopy) {
            if(currencyCopy[property]!==0) {
                
                currencyCopyFiltered.push([Object.keys(currencyCopy)[i],currencyCopy[property]]);
            }
            i++;
        }
        drawer.status = "OPEN";
        drawer.change = currencyCopyFiltered;
    }
    return drawer;
}

let x = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

console.log(x);