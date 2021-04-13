console.log("Hello, Bookshelf!");

//load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyMyP0MQgOvejV49" }).base(
  "appKSDj9gUs4pXa1j"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("papertable").select({}).eachPage(gotPageOfPapermemories, 
gotAllPapermemories);

// create an empty array to hold our data
const papermemories = [];

// callback function that receives our data
function gotPageOfPapermemories(records, fetchNextPage) {
  console.log("gotPageOfPapermemories()");
  // add the records from this page to our array
  papermemories.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all of the pages are loaded
function gotAllPapermemories(err) {
  console.log("gotAllPapermemories()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogPapermemories();
  showPapermemories();
}

// just loop through the books and console.log them
function consoleLogPapermemories() {
  console.log("consoleLogPapermemories()");
  papermemories.forEach((papermemory) => {
    console.log("Papermemory:", papermemory);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showPapermemories() {
  console.log("showPapermemories()");
  papermemories.forEach((papermemory) => {
   
   		// var paperName = document.createElement("h1");
   		// paperName.innerText = papermemory.fields.name;
   		// document.body.append(paperName)

   		// var papermemoriesNotes = document.createElement("p");
   		// papermemoriesNotes.innerText = papermemory.fields.notes;
   		// document.body.append(papermemoriesNotes);

   		// var papermemoryImage = document.createElement("img");
   		// papermemoryImage.src = papermemory.fields.paperimage[0].url;
   		// document.querySelector(".papermemories").append(papermemoryImage);
   		// document.body.append(papermemoryImage);

   		// creating a new div container
   		// this is where our paper memories will show
   		var papermemoryContainer = document.createElement("div");
   		papermemoryContainer.classList.add("papermemory-container");
   		document.querySelector(".papermemories").append(papermemoryContainer);

   		// add name to paper memory
   		var paperName = document.createElement("h1");
   		paperName.classList.add("papermemory-container");
   		paperName.innerText = papermemory.fields.name;
   		papermemoryContainer.append("name");

   		// add note to paper memory
   		var paperNote = document.createElement("h1");
   		paperNote.classList.add("paper-note");
   		paperNote.innerText = papermemory.fields.notes;
   		papermemoryContainer.append(paperNote);

   		var papermemoryImage = document.createElement("img");
   		papermemoryImage.classList.add("papermemory-image");
   		papermemoryImage.src = papermemory.fields.paperimage[0].url;
   		papermemoryContainer.append(papermemoryImage);

   		// add event listener
   		// when user clicks on song container, image and description will appear or disappear

   		papermemoryContainer.addEventListener("click", function(){
   			papermemoryImage.classList.toggle("active");
   		})

  });
}