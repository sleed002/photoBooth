# CRUD-App

## App Proposal –Event Image Sharing

### Description
You and your friends create an event and share your pics during an event. The images can be viewed by anyone connected to the event. Friends can also caption an image and delete an image.

### MVP
Tell us what you must have for the project to work:
Ability to create and name the event. An image upload option for a user - can be one image at a time for the MVP. The ability to connect multiple users and have the clients all be able to see the images of other clients. The ability for a user to delete an image.

### Goals
Slideshow of images, stylized backgrounds depending on the event, music options to be played during the slideshow. Ability to see all members in the event. Ability to caption each image, update the caption and delete the image. Ability for a user to create multiple events and see them in their user page.

### Stretch Goals
Tell us what you would like to get to, if time were no issue. You should not expect to reach these.
The ability to mass upload images to the event. Ability to send the link to the event so other friends can join.

**User Stories**:

1. As a user I'd like to be able to upload my images of the event.
2. As a user I'd like to be able to see the images my friends have shared and have them see mine.
3. As a user I'd like only people in the event to be able to see my photos and no one else.
4. As a user I'd like to be able to delete an image I do not like.

### Technologies
*   Node.js, Express, Sockets, EJS, MongoDB, Mongoose, HTML, CSS, Javascript

### Tell us how you plan on implementing the difficult parts
* The hardest part will be getting the image uploades to work using Node.js. This seems to be a very difficult process per everything I have read about it this weekend.

## Timeline
1.   Monday night?
* By Moday I'd like to have the sockets working, the event page setup to create an event and the database setup for users, and new events and a standin add in feature for images to test

2.  Tuesday Night?
* By Tuesday I’d like to get the image upload working so users can add photos everyone can see.

3.  Wednesday night?
* By Wednesday since I probably still won't have figured out the image uploader so I'd like to get the image upload working and manage all the css and GUI. Image delete option should be added as well.

4.  Thursday night?
* Any cleanups, touch ups, fixes or if all is good, the extra goals. Would really like to get the commenting on the photos first, then slideshow, background and music options.


## Wireframes

<a href="https://ibb.co/m23zeS"><img src="https://preview.ibb.co/jNjSYn/Screen_Shot_2018_05_06_at_8_52_01_AM.png" alt="Screen_Shot_2018_05_06_at_8_52_01_AM" border="0"></a>

## Logic pieces:
1. On main page user can make a new event. This will link to a new event page with an event ID. **/main**
2. Each event page will have a name and the option to add users by sending the page link. **main/event1**
3. The user ID page will have links to all the events they have made or joined plus make new events option. **main/user1**
4. The user can add photos which others in the event can see. **main/event1**
5. The user can view all the photos in the event in a slideshow. **main/event1/slideshow**
6. The user can caption or delete a photo. **main/photo1**
7. The user can see other users in the event. **main/event1** (sockets)
