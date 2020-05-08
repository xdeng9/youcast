# YouCast

[See YouCast Live](https://you-cast.herokuapp.com/#/)

YouCast is a clone of the popular video sharing site YouTube. This web app allows users to upload, view, comment, search, and like/dislike shared videos.

## Technologies

* This site is built with React, Redux, and Javascript for the frontend.
* The backend of this app is built with Ruby on Rails.
* I used Amazon S3 web service as the storage for video files, and video thumbnails. Everything else was stored on PostgreSQL.


## Core Features
* New account creation, login, and guest/demo login.
  * Users can sign up, sign in, log out.
  * Users can use a demo login to try the site.
   <img src="https://github.com/xdeng9/youcast/blob/master/img/sign-up.png" width="600px"/>


* Home page displays a list of recommended videos.
<img src="https://github.com/xdeng9/youcast/blob/master/img/video-index.png"/>

* Logged in users can upload, edit, and delete videos.
<img src="https://github.com/xdeng9/youcast/blob/master/img/upload.png" width="600px"/>

* Each video displays information such as title, description, creator username, number of views, published date, and number of likes/dislikes.
  * Logged in users can give a video a thumbup or thumbdown.
<img src="https://github.com/xdeng9/youcast/blob/master/img/video-show.png"/>
  
  
* Logged in users can write and delete comments under a video.
* Users can easily navigate through the site by using the navigation sidebar.
* Users can search for videos.

## Future Features
* Channels/Subscriptions
* Reply to comments
* Like/dislike comments
* User profile page
