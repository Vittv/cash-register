let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

document.getElementById("price-screen").innerHTML = `Total: $${price}`;

const formatAmount = (amount) => {
    return amount % 1 === 0 ? amount.toString() : amount.toFixed(2);
};

const displayCashDrawer = () => {
    document.getElementById("pennies").innerHTML = `Pennies: $${formatAmount(cid[0][1])}`;
    document.getElementById("nickels").innerHTML = `Nickels: $${formatAmount(cid[1][1])}`;
    document.getElementById("dimes").innerHTML = `Dimes: $${formatAmount(cid[2][1])}`;
    document.getElementById("quarters").innerHTML = `Quarters: $${formatAmount(cid[3][1])}`;
    document.getElementById("ones").innerHTML = `Ones: $${formatAmount(cid[4][1])}`;
    document.getElementById("fives").innerHTML = `Fives: $${formatAmount(cid[5][1])}`;
    document.getElementById("tens").innerHTML = `Tens: $${formatAmount(cid[6][1])}`;
    document.getElementById("twenties").innerHTML = `Twenties: $${formatAmount(cid[7][1])}`;
    document.getElementById("hundreds").innerHTML = `Hundreds: $${formatAmount(cid[8][1])}`;
};

displayCashDrawer();