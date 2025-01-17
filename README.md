# RomCom

One of Turing's FE projects. The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/romcom-pair-v2.html)

### Iteration 0
Main Page
- [x] Clicking "Show New Random Cover" button displays new random cover

### Iteration 1
Make Your Own Cover View
- [x] Clicking "Make Your Own Cover" button shows the form. Homepage view is hidden
- [x] "Show New Random Cover" & "Save Cover" buttons are hidden
- [x] "Home" button is visible

Saved Covers View
- [x] Clicking "View Saved Covers" button shows saved covers section. Homepage view is hidden
- [x] “Show New Random Cover” & “Save Cover” buttons are hidden
- [x] "Home" button is visible

Home View
- [x] "Show New Random Cover" & "Save Cover" buttons visible again
- [x] "Home" button is hidden

### Iteration 2
Creating a New Cover
- [x] User can fill out the Make Your Own Cover form and click "Make My Book" button to submit
- [x] Inputted values create a new, unique cover object
- [x] Values are saved to the proper arrays (covers, titles, etc.)
- [x] Submitting form returns user to Home View
- [x] Home View now has the newly created cover displayed

### Iteration 3
Save/View Covers
- [x] Clicking "Save Cover" button adds current cover to savedCovers array
- [x] Prevent duplicate covers being saved
- [x] Clicking "View Saved Covers" goes to the Saved Covers View
- [x] Saved Covers View displays all covers in the savedCovers array

### Iteration 4
Deleing Saved Covers
- [x] Double clicking a cover on the Saved Covers View deletes it

### Optional Extensions
- [ ] Implement data validation and error handling into the form (disable the button until all fields are filled, provide error messages if data entered is not correct, etc.)
- [ ] In Home View, allow users to click each piece of the cover (image, title, descriptors) to update just that piece with another random item from the appropriate array
- [ ] When a user single clicks a saved cover, create a modal to view it larger
- [ ] Allow users to drag and drop saved posters into whatever order they want them to appear