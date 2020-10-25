function checkanswers(){
	var score = 0;
	var answers = ["9th","lakeedge","1856","clearwaters","countryjam","oakwood","menards","tires"];
	var i;
	for (i = 0; i < answers.length; i++) {
		console.log(score);
		if(document.getElementById(answers[i]).checked == true){
			score++;
		}
	}
	document.getElementById("score").innerHTML = score + "/8";
	var percentage = (score/8) * 100;
	document.getElementById("percent").innerHTML = percentage + "%";
}