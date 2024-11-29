//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------

let users = [
  {
    firstName: "Ola",
    lastName: "Nordmann",
    age: 30,
    job: true,
  },
  {
    firstName: "Kari",
    lastName: "Nordmann",
    age: 25,
    job: false,
  },
  {
    firstName: "Per",
    lastName: "Hansen",
    age: 40,
    job: true,
  },
  {
    firstName: "Ingrid",
    lastName: "Larsen",
    age: 35,
    job: false,
  },
  {
    firstName: "Lars",
    lastName: "Olsen",
    age: 28,
    job: true,
  },
];

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------

console.log(users[0].firstName);
console.log(users[0]["lastName"]);

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < users.length; i++) {
  users[i].fullName = `${users[i].firstName} ${users[i].lastName}`;
}

console.log(users[1].fullName);

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------

users[2].age += 1;
users[2].job = !users[2].job;

console.log(users);

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
//------------------------------------------------------------------------------------------------------------------------------------------------
function fotballPubben(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      console.log(`Party time, ${users[i].fullName}`);
    } else {
      console.log(`Too young, ${users[i].fullName}`);
    }
  }
}
fotballPubben(users);

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------

//# Create a person object//

function university(person, degreeType) {
  if (degreeType === "bachelors") {
    person.age += 3;
    person.degree = "Bachelors";
    person.studentLoan = 250000; // Example loan amount for a bachelor's degree
  } else degreeType === "masters";
  person.age += 2; // Assuming a master's degree takes 2 years
  person.degree = "Masters";
  person.studentLoan = 160000; // Example loan amount for a master's degree
}

let student = {
  name: "Lars",
  age: 19,
};

university(student, "bachelors");

console.log(student);

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------

//sets up constants fro m the DOM
const dog1 = document.getElementById("dog1");
const dog2 = document.getElementById("dog2");
const dog3 = document.getElementById("dog3");
const dog4 = document.getElementById("dog4");

//set up API url
const randUrl = "https://dog.ceo/api/breed/hound/afghan/images/random";

async function getRandImg(dog) {
  const response = await fetch(randUrl);
  const data = await response.json();
  dog.src = data.message;
}

getRandImg(dog1);
getRandImg(dog2);
getRandImg(dog3);
getRandImg(dog4);

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
