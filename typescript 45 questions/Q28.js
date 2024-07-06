function Age_Check(age) {
    if (age < 2) {
        console.log("Age = ".concat(age, ". The person is a baby."));
    }
    else if (age >= 2 && age < 4) {
        console.log("Age = ".concat(age, ". The person is a toddler."));
    }
    else if (age >= 4 && age < 13) {
        console.log("Age = ".concat(age, ". The person is a kid."));
    }
    else if (age >= 13 && age < 20) {
        console.log("Age = ".concat(age, ". The person is a teenager."));
    }
    else if (age >= 20 && age < 65) {
        console.log("Age = ".concat(age, ". The person is an adult."));
    }
    else {
        console.log("Age = ".concat(age, ". The person is an elder."));
    }
}
var Person_age = 7;
Age_Check(Person_age);
Person_age = 3;
Age_Check(Person_age);
Person_age = 33;
Age_Check(Person_age);
Person_age = 78;
Age_Check(Person_age);
Person_age = 1;
Age_Check(Person_age);
