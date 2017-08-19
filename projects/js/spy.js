var first = prompt("What is your first name?");             //First prompting for first
var last = prompt("What is your last name?");               //name, then for last name.
var age = 0;                                                //Establishing blank
var height = 0;                                             //global vars for age,
var hasPet = null;                                          //height, pet status,
var petName;                                                //and pet name.

if (first[0] === last[0]) {                                 //Checking initials before
    age = prompt("What is your age?");                      //prompting for age.
} else {
    alert("ACCESS DENIED!!!");                              //...unless...
}

if (age > 20 && age < 30) {                                 //Checking age before
    height = prompt("What is your height in centimeters?"); //prompting for height.
} else {
    alert("ACCESS DENIED!!!");                              //...unless...
}

if (height >= 170) {                                        //Checking height before
    hasPet = prompt("Do you have a pet?");                  //prompting about pet.
} else {
    alert("ACCESS DENIED!!!");                              //...unless...
}

if (hasPet[0] === "y") {                                    //Checking pet answer (affirmatives typically
    petName = prompt("What is your pet's name?");           //start with "Y") before prompting for name.
} else {
    alert("ACCESS DENIED!!!");                              //...unless...
}

if (petName[petName.length - 1] === "y") {                  //Checking last letter of pet
    alert("SECRET MESSAGE!!!");                             //name before telling secrets
} else {
    alert("ACCESS DENIED!!!");                              //...unless...
}
