function first() {
     alert("Getting Answers 🔃")
     // number one
     var one = 3;
     var two = 8;
     var sum = one + two;
     document.getElementById('text').innerHTML = " <hr>Phase one: The sum of " + one + " & " + two + " is " + sum;
}

function sec() {
     var one = 3;
     var two = 8;
     var sum = one - two;
     document.getElementById('text2').innerHTML = "<hr>Phase two: The differnce of " + one + " & " + two + " is " + sum;
     var one = 3;
     var two = 8;
     var sum = one * two;
     document.getElementById('text3').innerHTML = "The multiplication of " + one + " & " + two + " is " + sum;
     var one = 3;
     var two = 8;
     var sum = one / two;
     document.getElementById('text4').innerHTML = "The division of " + one + " & " + two + " is " + sum;
     var one = 3;
     var two = 8;
     var sum = one % two;
     document.getElementById('text5').innerHTML = "The reminder of " + one + " & " + two + " is " + sum;
}

function third() {
     var undef;
     undef = 20;
     var incre = undef + 1;
     var add = 7;
     var addition = incre + add;
     var decree = incre - add;
     var remind = decree % 3;

     document.getElementById('thirdOne').innerHTML = "<hr>Phase three: Value after declaration is Undefined";
     document.getElementById('thirdTwo').innerHTML = "Initial value: " + undef;
     document.getElementById('thirdThree').innerHTML = "Value after incrememnt " + incre;
     document.getElementById('thirdFour').innerHTML = "Value after Addition " + addition;
     document.getElementById('thirdFive').innerHTML = "Value after decrement " + decree;
     document.getElementById('thirdSix').innerHTML = "Value after Reminder " + remind;

}

function fourth() {
     var cost = 600;
     var five = cost * 5;
     document.getElementById('four').innerHTML = "<hr>Phase four: The cost of five tickets of ALto falto movie is " + five + " PKR";
}

function fifth() {
     var t2 = 2;
     var one = t2 * 1;
     var two = t2 * 2;
     var three = t2 * 3;
     var four = t2 * 4;
     var fie = t2 * 5;
     var six = t2 * 6;
     var seven = t2 * 7;
     var eight = t2 * 8;
     var nine = t2 * 9;
     var ten = t2 * 10;
     document.getElementById('five').innerHTML =
          "<hr>Phase 5: table;<br>" +
          t2 + " x 1 = " + one + "<br>" +
          t2 + " x 2 = " + two + "<br>" +
          t2 + " x 3 = " + three + "<br>" +
          t2 + " x 4 = " + four + "<br>" +
          t2 + " x 5 = " + fie + "<br>" +
          t2 + " x 6 = " + six + "<br>" +
          t2 + " x 7 = " + seven + "<br>" +
          t2 + " x 8 = " + eight + "<br>" + t2 + " x 9 = " + nine + "<br>" + t2 + " x 10 = " + ten;
}

function sixth() {
     var celc = 23;
     var farhe = 70;
     var farsum = (celc * 9 / 5) + 32;
     var celsum = (farhe - 32) * 5 / 9;
     document.getElementById('sixone').innerHTML = "<hr>Phase 6: " + celc + " is " + farsum;
     document.getElementById('sixtwo').innerHTML = farhe + " is " + celsum;
}

function seventh() {
     var item1 = 300
     var item2 = 500
     var quan1 = 2
     var quan2 = 4
     var charges = 10000
     var total = item1 * quan1 + item2 * quan2 + charges
     document.getElementById('sevenone').innerHTML = "<hr>Phase 7: Price of item 1 is: " + item1;
     document.getElementById('seventwo').innerHTML = "Quantity of item 1 is: " + quan1;
     document.getElementById('seventhree').innerHTML = "Price of item 2 is: " + item2;
     document.getElementById('sevenfour').innerHTML = "Quantity of item 2 is: " + quan2;
     document.getElementById('sevenfive').innerHTML = "Our charges are: " + charges;
     document.getElementById('sevensix').innerHTML = "Total amount is: " + total;
}

function eight() {
     var total = 500;
     var obtai = 473;
     var perce = obtai / total * 100 + "%"
     document.getElementById('eightone').innerHTML = "<hr>Phase 8: Total marks: " + total;
     document.getElementById('eighttwo').innerHTML = "Obtained marks: " + obtai;
     document.getElementById('eightthree').innerHTML = "Percentage: " + perce;
}

function nine() {
     var usdAmount = 10;
     var pkrForUSD = 104.80;
     var pkrForSR = 28;
     var srAmount = 25;
     var usdToPKR = usdAmount * pkrForUSD;
     var srToPKR = pkrForSR * srAmount;
     document.getElementById('nineone').innerHTML = "<hr>Phase 9: 10 USD in PKR: " + usdToPKR + "PKR";
     document.getElementById('ninetwo').innerHTML = "25 Saudi riyal in PKR: " + srToPKR + "PKR";
}

function ten() {
     var num = 10;
     var result = ((num + 5) * 10) / 2;
     document.getElementById('tenone').innerHTML = "<hr> Phase 10: The calculated value: " + result;
}

function eleven() {
     var currentYear = 2025;
     var birthYear = 1999;
     var birth = currentYear - birthYear;
     document.getElementById('elevenone').innerHTML = "<hr> Phase 11: Current year: " + currentYear;
     document.getElementById('eleventwo').innerHTML = "Your birth year: " + birthYear;
     document.getElementById('eleventhree').innerHTML = "Your Age : " + birth;
}

function twelve(){
     var radius = 25;
     var circum = 2 * 3.142 * radius;
     var area = 3.142 * radius ** 2;
     document.getElementById('twelveone').innerHTML = "<hr><h1>The geometrizer</h1>";
     document.getElementById('twelvetwo').innerHTML = "Radius of CIrcle: " + radius;
     document.getElementById('twelvethree').innerHTML = "Circumference: " + circum;
     document.getElementById('twelvefour').innerHTML = "Area: " + area;
}

function thirteen(){
     var favSnack = "Cocomo";
     var currentAge = 15;
     var maxAge = 40;
     var snackPerDay = 8;
     var remainYear = maxAge - snackPerDay;
     var totalSnack = remainYear * 365.25 * snackPerDay;
     document.getElementById('thirteenone').innerHTML = "<hr> Phase 13: Faviroute snack: " + favSnack;
     document.getElementById('thirteentwo').innerHTML = "Current age: " + currentAge;
     document.getElementById('thirteenthree').innerHTML = "Estimated max age: " + maxAge;
     document.getElementById('thirteenfour').innerHTML = "Amount of snack per day: " + snackPerDay;
     document.getElementById('thirteenfive').innerHTML = "You will need " + totalSnack + " " + favSnack + " to last you until the ripe old age of " + maxAge;

}