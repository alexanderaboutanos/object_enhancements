const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
}

// createInstructor('Alexander', 'Aboutanos')

var favoriteNumber = "42";

var instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite"
}

// next

var instructor = {
    firstName: "Colt",
    sayHi() {return "Hi!"},
    sayBye() {return this.firstName + " says bye!"}
}

// next

const createAnimal = (species, verb, noise) => {
    return {
        species, 
        [verb]() {return noise}
    }
}
