// Ques:1 Write the code to access element which is having id as "text"

const element1=document.getElementById("text")
console.log(element1);

//Ques:2 Write the code to access element which is having tag as "h1"

const element2=document.getElementsByTagName("h1")
console.log(element2);

//Ques3:- Write the code to access element which is having class as "box"

const element3=document.getElementsByClassName("example")
console.log(element3);


// Ques4:
// <h1>Hello </h1>

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions" 


const element4=document.getElementsByTagName("h1")
element4[0].innerText="Hello World";
console.log(element4[0].innerText);

// Ques5:- Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function changePosition()
{
    const element5=document.getElementsByClassName("main")
    element5[0].style.flexDirection="column"
}


// Ques:6 What’s the difference between window vs document?

// window-- A global variable, window , representing the window in which the script is running, is exposed to JavaScript code. The Window interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window

// Document:--A Document object represents the HTML document that is displayed in that window. The Document object has various properties that refer to other objects which allow access to and modification of document content. The way a document content is accessed and modified is called the Document Object Model, or DOM.




// Ques 7: "<h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

const element6=document.createElement("h1")
element6.setAttribute("id", "heading")
element6.innerText= "Hello"
element6.style.color="red"
console.log(element6);

element1.appendChild(element6)




// Ques 8: Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"


function ReplaceText()
{
    const element7=document.getElementsByTagName("h2")
    element7[0].innerText="Welcome to Elevation academy"
    console.log(element7[0]);
}




//Ques9:  Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

// function showRealTime()
// {
//     const date=new Date()
//     console.log("date");
//     const hours = date.getHours()
//     const mins = date.getMinutes()
//     const secs = date.getSeconds()
//     console.log(hours,mins,secs);
//     setTimeout(()=> {
//         showRealTime()
//     },1000);
// }
// showRealTime()




// Ques:-10 Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function getOption() {
    selectElement = document.querySelector('#select1');
    const output = selectElement.value;
    document.querySelector('.output').textContent = output;
}



// Ques 11:- "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"


const element8 = document.getElementById("phone");
console.log(element8);
formpar.setAttribute("value","91");
document.body.appendChild(element8)
