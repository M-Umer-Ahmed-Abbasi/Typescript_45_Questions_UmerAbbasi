let User_list:string[]=["Fawwad Khan","Abdullah","Admin","Ali"];
User_list.forEach(element => {
    if(element==="Admin"){
        console.log(`Hello ${element}, thank you for logging in again.`)
        console.log(`Hello ${element}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${element}, thank you for logging in again.`)
    }
});