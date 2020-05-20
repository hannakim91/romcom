![RomCom website](https://gist.github.com/hannakim91/016a7e33e310c9703488e0b9a878e728)

# RomCom

## Mod 1 Paired Project

### Objective

**RomCom is the website you need to get you started on writing your next romance novel. Get ideas for and format your own (hilariously) scintillating romance novel covers.**

## Learning Goals

* Write clean, DRY JavaScript to store information in the data model and manipulate by adding functionality in the DOM. Key features: show, hide, add and remove elements from the DOM tree.
* Use a provided class to create new object instances using the `new` keyword.
* Understand event bubbling and use event delegation on dynamic elements.
* Learn to read and understand the HTML and CSS provided by instructors. Begin to understand how to write effective, clean HTML & CSS
​
(## Table of Contents: )

## Set Up

1. Fork [this repository](https://github.com/turingschool-examples/romcom).
2. Go to settings and turn on *GitHub Pages* for this repository.
3. All contributors: Clone down [this repository](git@github.com:turingschool-examples/romcom.git).
4. `cd` into your local repository.
5. Run `open index.html` to view page in the browser.

## Planning:

The paired project was created using Atom as a text editor and Trello as a project management tool. We referenced MDN and lesson plans for informations and our mentors for support. Our [remote repository](https://github.com/hannakim91/romcom) is stored on GitHub.


This was a 7-day paired project.

## Progression:

### Iteration 0: **Main Page**
​
When a user opens the page, it loads with a randomized instance of the Covers class displayed in **Home** view.

### Iteration 1: **Show Random Cover**

 When a user clicks the **Show New Random Cover** button, a new instance of the Covers class is generated and displayed in **Home** view.

### Iteration 2: **Switching Views**

**"Make Your Own Cover" Feature:** **Make my book** button brings a user to a form that can be filled with their own RomCom cover ideas.

**"View Saved Covers" Feature:** When the **View Saved Covers** button is clicked, the view is changed to where saved instances of covers are displayed.

**Cross-view Functionality:** The controls section for each page view is streamlined to include only the necessary buttons for that feature.
​
### Iteration 3: **Create A New Cover**

![User input fields](https://www.dropbox.com/s/jbxkoa3v9befaow/fill%20form.png?dl=0)

**"Make Your Own Cover" Feature**: A user can save their own custom RomCom cover by filling in the available fields in this view and hitting the **Make my book** button.

### Iteration 4: **Save and View Covers**

**"Save Cover" Feature:** A user can save covers they like by clicking the **Save Cover** button located in the controls section.

This feature prevents user error by only allowing one instance of a cover to be saved.

### Iteration 5: **Delete Covers**

A user can delete covers from the **Saved Covers** view by double-clicking on the one they don't like.

### Refactoring Code:

We refactored the code several times to incorporate new features to the webpage.

* `showNewBook(event)`: We were able to nest multiple functions within this function to declutter our DOM.

* `saveCoverDM()`: We had functionality based each Cover's id value once it was randomly created, but realized the id would be different each time it was randomly created. We created a condition within a loop comparing each of the other properties of a new instance of Cover with existing covers.

## Built With:
* Vanilla JavaScript
* HTML and CSS provided by [Turing Mod 1 Instructors](https://github.com/letakeane)


## Contributors:

* [Amy Karnaze](https://github.com/amykarnaze)
* [Hanna Kim](https://github.com/hannakim91)
​
## Additional Links:

* [DTR](https://gist.github.com/hannakim91/016a7e33e310c9703488e0b9a878e728)
* [Trello](https://trello.com/b/ZddAi4n7/romcom)
* [Project page](https://frontend.turing.io/projects/module-1/romcom-paired.html)
* [GitHub Link](https://github.com/hannakim91/romcom)
* [Clone Me (SSH)](git@github.com:hannakim91/romcom.git)
