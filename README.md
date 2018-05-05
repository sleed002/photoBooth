# CRUD-App

## App Proposal –Event Image Sharing and Slideshow

### Description
You and your friends create an event and share your pics during an event. The images shared are immediately added to a slideshow which anyone who is connected to the event can see. Friends can also comment on the images and download the images.

### MVP
Tell us what you must have for the project to work:
Ability to create and name the event. An image upload option for a user - can be one image at a time for the MVP. A slideshow of images added. The ability to connect multiple users and have the clients all be able to see the images and the slideshow. The ability for a user to delete an image.

### Goals
Stylized backgrounds depending on the event, music options to be played during the slideshow. Ability to see all members in the event. Ability to comment on each image, update the comment and delete the comment. Ability to create multiple events.

### Stretch Goals
Tell us what you would like to get to, if time were no issue. You should not expect to reach these.
The ability to mass upload images to the event. Ability to send the link to the event so other friends can join.

**User Stories**:

1. As a user I'd like to be able to upload my images of the event to share with friends.
2. As a user I'd like to be able to see the images my friends have shared.
3. As a user I'd like only people in the event to be able to see my photos.
4. As a user I'd like to have the images make a slideshow for my friends to enjoy.

### Technologies
*   Node.js, Express, Sockets, EJS, MongoDB, Mongoose, HTML, CSS, Javascript

### Tell us how you plan on implementing the difficult parts
* The hardest part will be getting the image uploades to work using Node.js. This seems to be a very difficult process per everything I have read about it this weekend.

## Timeline
1.   Monday night?
* By Moday I'd like to have the sockets working, the event page setup to create an event and the database setup for users, new events and a standin for images**

2.  Tuesday Night?
* By Tuesday I’d like to get the image upload working so users can add photos everyone can see.

3.  Wednesday night?
* By Wednesday since I probably still won't have figured out the image uploader I'd like to get the image upload working and the slideshow set up. Image delete option as well.

4.  Thursday night?
* Any cleanups, touch ups, fixes or if all is good, the extra goals. Would really like to get the commenting on the photos first, then background and music options.


## Wireframes

<a href="https://ibb.co/eEbi97"><img src="https://preview.ibb.co/cYHC2S/Screen_Shot_2018_04_19_at_6_16_40_PM.png" alt="Screen_Shot_2018_04_19_at_6_16_40_PM" border="0"></a>

## Logic pieces:
1. On main page user can make a new event. This will link to a new event page with an event ID. **/main**
2. Each event page will have a name and the option to add users. **main/event1**
3. The user ID page will have links to all the events they have made or joined. **main/user1/events**
4. The user can add photos which others in the event can see. **main/event1/photos/add**
5. The user can view all the photos in the event in a slideshow. **main/event1/photos**
6. The user can comment on a photo. **main/event1/photos/photo1**
7. The user can see other users in the event. **main/event1/users**
