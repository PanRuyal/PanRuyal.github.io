const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write positive number");
} else if (age >= 18) {
    console.log("You can drink");
} else {
    console.log("You are too young to drink");
}
