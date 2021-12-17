# Borrow.me App - Front End Application

This repository keeps the front end application for Borrow.me app.

## Made with

- ReactJS
- Google Books API

## External libs:

- React-bootstrap
- React-dom
- React-router-dom
- Axios
- Bootstrap
- Formik
- Prop-types
- React-simple-star-rating
- Swiper
- Yup

## App Description

Borrow.me is a social network based on books. Its main focus is on finding out people who would lend (or trade) books. So the app will show you these people and the books they would like to trade with you.
A secondary function of the app is to keep a book reading diary, so you can add the books you've already read, and add reviews to them.
You can also check the reviews on the latest books your friends have read.

### Requirements

Mobile phone with internet access.

### How to use it

Access https://borrowme.netlify.app/ from your browser.

If you're not registered in Borrow.me, you'll have to do that by clicking on "Register" in the landing page. Then, you should add your name, e-mail and password to be registered in the app.

<div align="center">
<img src="https://github.com/andrekleine/borrow.me-react/blob/main/src/components/misc/images/readme/login.png" alt="login screen" height="450"/>
<img src="https://github.com/andrekleine/borrow.me-react/blob/main/src/components/misc/images/readme/register.png" alt="register screen" height="450"/>
</div>

Once you've logged in, the home page is gonna show a sample of 3 sections. The first one shows the latest books your friends have read. The second, the ones they've added as they "will lend". The third one, the latest books you've added as read to your collection.
If you click in any of the 3 section names, a new window, with an expanded view of the section, will open.

<div align="center">
<img src="https://github.com/andrekleine/borrow.me-react/blob/main/src/components/misc/images/readme/home.png" alt="home screen" height="450"/>

<img src="https://github.com/andrekleine/borrow.me-react/blob/main/src/components/misc/images/readme/section.png" alt="section screen" height="450"/>
</div>

Anytime you click in a book cover, a detail page is gonna open. Besides the book's information, it indicates the people who are gonna lend this book. Their name are links to their e-mail addresses.
Also, if you have already added a review to this book, it is gonna show right below.
<div align="center">
<img src="https://github.com/andrekleine/borrow.me-react/blob/main/src/components/misc/images/readme/detail.png" alt="section screen" height="450"/>
</div>

The icons in the detail page are the key of the app's functionality.
To add a book as "read" to your collection, click on the eye. It is gonna be filled.
To delete a book, click on it again. It will return to the initial state, empty.
To add a review, click on the star. It is gonna be filled.
To delete a review, click on it again. It will return to the initial state, empty.
To mark a book as "lendable", click on the book icon. It's gonna be filled. To unmark it, click on it again. It will return to the initial state, empty.

<div align="center">
<img src="https://github.com/andrekleine/borrow.me-react/blob/main/src/components/misc/images/readme/icons.png" alt="icons" height="450"/>
</div>

Finally, to search for new books, just click on the magnifying glass in the footer of the app. A new "search" page is gonna open, where you can search for books by title and/or author name.

<div align="center">
<img src="https://github.com/andrekleine/borrow.me-react/blob/main/src/components/misc/images/readme/icons.png" alt="icons" height="450"/>
</div>


## Author

- **André Kleine** - [Github](https://github.com/andrekleine) [LinkedIn](https://www.linkedin.com/in/andre-kleine-/)

## Acknowledgement

The awesome teachers crew @ Ironhack:

- Henrique Mendes
- Henrique Morikawa
- Flavia Maia
