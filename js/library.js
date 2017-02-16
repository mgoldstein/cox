
// Create a variable named "currentcolor" and assign it the value "red"
var currentcolor = "Red";

// Create a function named "changeColor". This function is called when the user clicks the form submit button
function changeColor()

{

	if (  currentcolor == "Red" )
		currentcolor = "Green";

	else
		if ( currentcolor == "Green" )
			currentcolor = "Blue";

	else
		if ( currentcolor == "Blue" )
			currentcolor = "Purple";

	else
		if ( currentcolor == "Purple" )
			currentcolor = "Orange";

// I changed the spacing on this one and added brackets

	else if ( currentcolor == "Orange" )
			{
			currentcolor = "Yellow";
			}

// This one is a true "else" statement -- it has no "if" operation

	else {
	currentcolor = "Red";
	}

// Display the value of the currentcolor variable in the form's text input box

	document.form1.textbox1.value = currentcolor;

// Set the page's background color to the value of the currentcolor variable

	document.bgColor = currentcolor;

}

// Create a function called "textbox1". This function is called when the page loads

function displayColor()
	{

// Display the value of the currentcolor variable in the form's text input box

	document.form1.textbox1.value = currentcolor;

// Set the page's background color to the value of the currentcolor variable

	document.bgColor = currentcolor;

	}

// Create varibale "currentdate" and assign it the value of the date information grabbed from the client's machine
currentdate = new Date();
// Create the variable "dateform2" and leave it empty
var dateform2;
// Create a variable named "speed" and assign it the value 1000
speed=1000;
// Create a variable called "tid" and assign it the value 0
tid = 0;

// This function writes the value of the current date variable into
function displayDate() {

document.dateform1.textbox1.value = currentdate;

}


/* this function is set up to loop infinately, updating the value of the form textbox with the new date
once every 1000 milliseconds */
function dodate()

{

  y.date.value=new Date();

  tid=window.setTimeout("dodate()",speed);

}


/* The function named "Clock" passes the name of the form to the function named "start". The "start" function assigns the value of the form name to a variable named "x" */

function start(x) {
// Assign the value of "x" to a variable named "y"
  y=x
// The value of the "tid" variable to the method "window.setTimeout"
// the method "setTimeout" tells the program to execute the function "dodate" after a delay of 1000 milliseconds
// 1000 is the value of the the variable "speed". 1000 milliseconds equals one second

  tid=window.setTimeout("dodate()",speed);

}


// this function creates the form text box to display the real time clock
function Clock()

{
// Note use of escape characters
document.write('<FORM name=\"dateform2\"><b>JavaScript Clock:</b> <input name=date size=40 value=\"JavaScript Clock\"></FORM>');

// Call the function named "start" and pass it the name of the form object
start(document.dateform2);

}

function loadPage(list) {

        self.location.href = list.options[list.selectedIndex].value

}

function MM_openBrWindow(theURL,winName,features) { //v1.2

  window.open(theURL,winName,features);

}

