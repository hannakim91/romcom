### iteration 3

In the new cover form view, users should be able to fill out the four input fields and then hit the save button
  ~~When the save button is clicked, several things will happen:~~
  * Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
  * Use the values from the inputs to create a new instance of the Cover class
  * Change back to the main home view (hiding the form view again)
  * Display the newly created cover image, title, and descriptors in the main cover

    * use .value to retrieve user form inputs
    * ~~user querySelector to assign variables to new user form inputs~~
    * create a function to assign input.value to the corresponding html element -- can we use innerHTML to lump this all together?
    * create an event listener for create-new-book-button class to create functionality for this button
    * might need to use Cover class


    function showNewBook(event) {
      event.preventDefault();
      makeNewBook();
      showHome();
    }

Currently: make my own button takes you back to main page for some reason?

Cover Form view:
<!-- save user input for cover image (URL of image), title string, descriptors and save into existing arrays -->


iteration 3 pull request notes:
### What's this PR do?
- Added `makeNewBook()`, which uses user input variables to create a new instance of cover under the variable `currentCover`.
### Where should the reviewer start?
Lines 15-19
Lines 52-54
### How should this be manually tested?
Go to cover forms view, fill out input fields (cover should be a link to an image), and hit the 'Make My Book' button.

// function saveCoverDM() {
//   var duplicateCover = savedCovers.find(cover => {
//     var coverCheck =
//       savedCovers.cover === currentCover.cover
//       && savedCovers.title === currentCover.title
//       && savedCovers.tagline1 === currentCover.tagline1
//       && savedCovers.tagline2 === currentCover.tagline2
//     return coverCheck;
//   });
//   console.log(duplicateCover);
//   if (duplicateCover === undefined) {
//       savedCovers.push(currentCover);
//   }
//   console.log(savedCovers);
// }

// function saveCoverDM() {
//   var checkCovers = savedCovers.filter(function(saveCover) {
//     return currentCover.id === saveCover.id;
//       });
//       if (checkCovers.length === 0) {
//         savedCovers.push(currentCover);
//       }
// }
