### iteration 3

In the new cover form view, users should be able to fill out the four input fields and then hit the save button
  ~~When the save button is clicked, several things will happen:~~
  * Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
    * inside the showNewBook() function, push values from new instance of Covers class into corresponding arrays using dot notation.
  * ~~Use the values from the inputs to create a new instance of the Cover class~~
  * ~~Change back to the main home view (hiding the form view again)~~
  * ~~Display the newly created cover image, title, and descriptors in the main cover~~

    * use .value to retrieve user form inputs
    * ~~user querySelector to assign variables to new user form inputs~~
    * create a function to assign input.value to the corresponding html element -- can we use innerHTML to lump this all together?
    * create an event listener for create-new-book-button class to create functionality for this button
    * might need to use Cover class

Currently: make my own button takes you back to main page for some reason?

Cover Form view:
<!-- save user input for cover image (URL of image), title string, descriptors and save into existing arrays -->

### iteration 4

* When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array
* If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates)
* When a user clicks the “View Saved Covers” button, we should see the saved covers section
* All the covers in the savedCovers array should be displayed in the saved covers section

create a button for 'save cover' - event listener tied to function saveCover() that removes/adds hidden classes depending what buttons/sections you need to show.

saveCover function - pushes current instance of Cover into savedCovers array using this.id to make sure it's an original covers
---what if cover generated randomly and you get the exact same cover again? - what do you consider to be a unique cover - timestamp will always be unique but title/tagline/image may be same?
-- loop through saved covers array, does id match? title/tagline/etc if no - push , if yes then

snippet from saveCoverDM trial:

currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText)
for (var i = 0; i < savedCovers.length; i++) {
  if (!currentCover.cover === savedCovers[i].cover && !currentCover.title === savedCovers[i].title && !currentCover.tagline1 === savedCovers[i].tagline1 && !currentCover.tagline2 === savedCovers[i].tagline2) {
    savedCovers.push(currentCover);
  }
}

function saveNewCover() {
  var isDuplicate = false;
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.id === savedCovers[i].id) {
      isDuplicate = true;
    //   break;
    // } else if (currentCover.cover === savedCovers[i].cover) { // would be a lot of nested else if's
    //   else
    // }
  }
  if (!isDuplicate) { // runs only if statement evaluates to truthy value
  savedCovers.push(currentCover);
  }
}


### iteration 5:

from saved covers view - if user double clicks a saved poster, it'll be deleted

savedCoversSection.addEventListener('double-click'**, deleteSavedCover);

function:
deleteSavedCover(event) {
  var coverToDelete = event.target.parentElement**.id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (coverToDelete === savedCovers[i].id) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
}

* event listener for double click / function
* array of savedCovers
* event.target on parent element (.saved-covers-section)- save in a variable -- whichever child element (title/image/descript) in parent element is clicked on is the "target"
* when event happens (double click):
* for loop to go through savedCovers
  *  conditional statement in for loop: compare 'id' to (from Cover instance) cover.id in array; if they're === equal, then:
    * savedCovers.splice(i, 1) - which index # cover and splice out 1 to remove


-*could* add an id to html<id='id'/>
