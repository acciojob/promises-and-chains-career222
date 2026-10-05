//your JS code here. If required.
const form = document.getElementById("form");
const age = document,getElementById("age");
const name = document.getElementById("name");

form.addEventListener("submit",function (element){
	event.preventDefault();

	if(age.value == " " || name.value.trim() === " "){
		alert("Please enter valid detail.");
		return;
	}
	const userAge = Namber(age.value);
	const userName = name.value.trim();

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if(userAge > 18){
				resolve(`welcome, ${userName}. you can vote .`);
			}else{
				reject (`oh sorry ${userName}. you aren't old enough.`);
			}
		},4000);
	});

	promise.then((message) =>{
		alert(message);

	}).catch((message)=>{
		alert(message);
	});

	
});