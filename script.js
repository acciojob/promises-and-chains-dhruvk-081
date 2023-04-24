//your JS code here. If required.
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const btn = document.getElementById('btn');

form.addEventListener('submit', (e)=>{
	event.preventDefault();
	if(nameInput.value === '' || ageInput.value ===''){
		alert('Please fill out all fields');
		return;
	}
	const age = +(ageInput.value);

	const promise = new Promise((resolve, reject)=>{
		setTimeOut(()=>{
			if(age>=18){
				resolve();
			}else{
				reject();
			}
		},4000);
	});
	promise.then(()=>{
		alert('Welcome, ${nameInput.value}. You can vote.');
	})
	.catch(()=>{
		alert("Oh sorry ${nameInput.value}. You aren't old enough.");
	})
	
})

