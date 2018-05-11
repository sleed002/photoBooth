
# CRUD-App

## App Proposal –Event Image Sharing

### Description
You and your friends create an event and share your pics during an event. The images can be viewed by anyone connected to the event. Friends can also caption an image and delete an image.
**completed**

### MVP
Tell us what you must have for the project to work:
Ability to create and name the event and change the name. An image upload option for a user - one image at a time for the MVP. The ability to connect multiple users and have the clients all be able to see the images of other clients. The ability for a user to delete an image. **completed**

### Goals
Slideshow of images, ~stylized backgrounds depending on the event~, music options to be played during the slideshow. ~Ability to see all members in the event~. Ability to ~caption each image, update the caption and~ delete the image. Ability for a user to create multiple events and see them in their user page. **completed apart from crossouts**

### Stretch Goals
Tell us what you would like to get to, if time were no issue. You should not expect to reach these.
The ability to mass upload images to the event. Ability to send the link to the event so other friends can join.
**not completed.**

**User Stories**:

1. As a user I'd like to be able to upload my images of the event. **completed**
2. As a user I'd like to be able to see the images my friends have shared and have them see mine. **completed**
3. As a user I'd like only people in the event to be able to see my photos and no one else. **completed**
4. As a user I'd like to be able to delete an image I do not like. **completed**

### Technologies
*   Node.js, Express, Sockets, EJS, MongoDB, Mongoose, HTML, CSS, Javascript JQuery (two seperate files)

### Tell us how you plan on implementing the difficult parts
* The hardest part will be getting the image uploades to work using Node.js. This seems to be a very difficult process per everything I have read about it this weekend. **I actually managed to get this working in a day. Turns out the actual hardest part is that uploaded images are stored temporarily on heroku so later I will need to add in an image hosting service with a key to keep them permanantly there**
**The socket part was tricky as well but I tricked it in by adding the uploaded file as a temp file to the socket and on refresh it was there as it was stored into the database **

## Timeline
1.   Monday night?
* By Moday I'd like to have the sockets working, the event page setup to create an event and the database setup for users, and new events and a standin add in feature for images to test **completed**

2.  Tuesday Night?
* By Tuesday I’d like to get the image upload working so users can add photos everyone can see. **completed**

3.  Wednesday night?
* By Wednesday since I probably still won't have figured out the image uploader so I'd like to get the image upload working and manage all the css and GUI. Image delete option should be added as well. **completed**

4.  Thursday night?
* Any cleanups, touch ups, fixes or if all is good, the extra goals. Would really like to get the commenting on the photos first, then slideshow, background and music options. **completed apart from photo commenting and background change options**


## Wireframe
<a href="https://ibb.co/m23zeS"><img src="https://preview.ibb.co/jNjSYn/Screen_Shot_2018_05_06_at_8_52_01_AM.png" alt="Screen_Shot_2018_05_06_at_8_52_01_AM" border="0"></a>

## View logic:
1. On the main home page the welcome greeting and sample images **/index**
2. On user page user can view all events. **index/events**
3.  On the create page user can make a new event with a unique event ID **index/events/add**
4. The user can view and add photos in the event and watch a slideshow. **index/events/eventID**
5. The user can view or delete a photo. **main/events/photoID** (photo ID includes event ID)


## Struggles
* By far my biggest struggle was the fact that heroku does not keep any uploaded images for more than an hour.  I also struggled with managing the photo upload, getting the photo to load automatically into the slideshow and how to add the image into the database but I figured it out using sockets, J-Query and a lot of google and stack overflow - references in the code.

## Future Goals
*  I will need to connect to an image hosting service such as AWS and deploy my uploaded images there to keep them permanently on my app as turns out heroku does not allow for permanent file upload hosting.  I will probably implement this goal next week with my buddy.

## App
Link to the App: [https://blooming-hamlet-11569.herokuapp.com/]

## Screenshots:

The Home page with sample images.
<a href='https://postimg.cc/image/spus1xs9j/' target='_blank'><img src='https://s7.postimg.cc/49cm7griz/Screen_Shot_2018-05-10_at_5.22.27_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.22.27_PM'/></a>


An example of a user page with the user's events.
<a href='https://postimg.cc/image/h0qse51cn/' target='_blank'><img src='https://s7.postimg.cc/4m40dt9uj/Screen_Shot_2018-05-10_at_5.24.26_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.24.26_PM'/></a>

The event creation page.
<a href='https://postimg.cc/image/5po4pkk53/' target='_blank'><img src='https://s7.postimg.cc/jw3vksv0b/Screen_Shot_2018-05-10_at_5.28.30_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.28.30_PM'/></a><br /><a href='https://postimages.org/'></a><br />


Inside an event, a user adding a photo.
<a href='https://postimg.cc/image/c239zhuxz/' target='_blank'><img src='https://s7.postimg.cc/ogq1ztmgb/Screen_Shot_2018-05-10_at_5.24.46_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.24.46_PM'/></a>


Uploaded images on an event page.
<a href='https://postimg.cc/image/hq9kqfwqf/' target='_blank'><img src='https://s7.postimg.cc/j5b5f5xtn/Screen_Shot_2018-05-10_at_5.25.46_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.25.46_PM'/></a>


Changing the name of the event.
<a href='https://postimg.cc/image/5bmsq8n9j/' target='_blank'><img src='https://s7.postimg.cc/othg66k7f/Screen_Shot_2018-05-10_at_5.26.03_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.26.03_PM'/></a><br /><a href='https://postimages.org/'></a><br />


Changing the name of the event creator.
<a href='https://postimg.cc/image/s0bzptrsn/' target='_blank'><img src='https://s7.postimg.cc/crm2c1y4b/Screen_Shot_2018-05-10_at_5.26.19_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.26.19_PM'/></a>


Clicking on a specific image.
<a href='https://postimg.cc/image/ew6fd92cn/' target='_blank'><img src='https://s7.postimg.cc/6qodf3e3v/Screen_Shot_2018-05-10_at_5.26.39_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.26.39_PM'/></a><br /><a href='https://postimages.org/'></a><br />


Using the messaging feature to talk to other users watching the slideshow or in the event.
<a href='https://postimg.cc/image/ogq205etz/' target='_blank'><img src='https://s7.postimg.cc/xoiagulwb/Screen_Shot_2018-05-10_at_5.27.03_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.27.03_PM'/></a>


Event host responding to a user message.
<a href='https://postimg.cc/image/mq70y52af/' target='_blank'><img src='https://s7.postimg.cc/7hh3kd8m3/Screen_Shot_2018-05-10_at_5.27.21_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.27.21_PM'/></a><br /><a href='https://postimages.org/app'>screenshot windows 7</a><br />


Changing the music for the Slideshow.
<a href='https://postimages.org/' target='_blank'><img src='https://s7.postimg.cc/b131a766z/Screen_Shot_2018-05-10_at_5.27.33_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.27.33_PM'/></a>


Example of the Slideshow showing one of the slides.
<a href='https://postimg.cc/image/3l3rog0hz/' target='_blank'><img src='https://s7.postimg.cc/z4tsyj6ob/Screen_Shot_2018-05-10_at_5.27.54_PM.png' border='0' alt='Screen_Shot_2018-05-10_at_5.27.54_PM'/></a>
