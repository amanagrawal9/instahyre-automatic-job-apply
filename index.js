document.getElementById('interested-btn').click()
for(i = 0; i < 53 ; i++) {
	await new Promise(done => setTimeout(() => done(), 1000));  
	document.getElementsByClassName('btn btn-lg btn-success')[0].click();
	await new Promise(done => setTimeout(() => done(), 1000));
	if (document.getElementsByClassName('btn btn-lg btn-success')[2].offsetLeft > 0) {
		document.getElementsByClassName('btn btn-lg btn-success')[2].click();
	}
	console.log(i);
}
