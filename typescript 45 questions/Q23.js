var car = 'subaru';
var check_variable = car;
var j = 1;
for (var i = 0; i < 2; i++) {
    console.log(j++, " Condition using Ternairy:", check_variable === 'subaru' ? " Pridect True" : " Pridect False");
    console.log(j++, " Condition using Boolean", check_variable === 'subaru');
    if (check_variable === 'subaru') {
        console.log(j++, " Condition using if else:", " Pridect True");
    }
    else {
        console.log(j++, " Condition using if else : Pridect False");
    }
    switch (check_variable) {
        case 'subaru':
            console.log(j++, " Condition using swith case:", " Pridect True");
            break;
        default:
            console.log(j++, " Condition: using swith case: ", " Pridect False");
    }
    if (car.length === check_variable.length && car === check_variable) {
        console.log(j++, " Condition using if else:", " Pridect True");
    }
    else {
        console.log(j++, " Condition using if else:", " Pridect False");
    }
    check_variable = "audi";
}
