// your JS code here. If required.

const form = document.getElementById("form");
const age = document.getElementById("age");
const name = document.getElementById("name");

form.addEventListener("submit", function (element) {
    element.preventDefault();

    if (age.value === "" || name.value.trim() === "") {
        alert("Please enter valid details.");
        return;
    }

    const userAge = Number(age.value);
    const userName = name.value.trim();

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000);
    });

    promise
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});