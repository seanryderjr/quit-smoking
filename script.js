function calculate() {
	// Get the quit date and number of cigarettes per day from the input fields
	var quitDate = document.getElementById("quitDate").value;
	var numPacks = document.getElementById("numPacks").value;
    var pricePack = document.getElementById("pricePack").value;

	// Calculate the number of days since the quit date
	var today = new Date();
	var quitDay = new Date(quitDate);
	var daysSinceQuit = Math.round((today - quitDay) / (1000 * 60 * 60 * 24));

	// Calculate the number of cigarettes not smoked
	var cigarettesNotSmoked = daysSinceQuit * numPacks * 20;

    // Calculate the money saved
    var moneySaved = numPacks * pricePack * daysSinceQuit;

	// Display the results
	var result = document.getElementById("result");
	result.innerHTML = `Congratulations! You have not smoked ${cigarettesNotSmoked} cigarettes since your quit date.`;

    var result2 = document.getElementById("result2");
    result2.innerHTML = `Congratulations! You have saved $${moneySaved} since your quit date.`;

    var result3 = document.getElementById("result3");

    var result4 = document.getElementById("result4");


}
