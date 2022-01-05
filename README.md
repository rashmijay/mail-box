
Table of Contents:
- [Introduction](#introduction)
- [Running this project locally](#running-this-project-locally)
- [Feature list](#feature-list)


# Introduction

`Mail box: RIRM (Frontend) Round-1`

**Technologies used**
1. Angular for the frontend
2. Local storage acting as our database.
3. Creds for login:\
    `Username`: test\
    `Password`: test\
**NOTE:** Password is `case-sensitive`
4. While adding multiple emails to the `To or Cc` field use `,` as seperator

# Running this project locally

### Live version : <!-- omit in toc -->

Check out live application [Mail box](https://mail-box-test.herokuapp.com/).
___
### From the repo : <!-- omit in toc -->
1. Clone the project locally. You will need node and npm installed globally on your machine.
2. Navigate to the `mailbox` folder using bash/command line
3. Run `npm install` in your bash/command line
4. Run `ng s -o` in your bash/command line

**NOTE:** If you get error related to node-sass while running `ng s -o`.\
 Add a dev dependency for `sass`.\
    Command: `npm i -D sass`


# Feature list

### This project includes: <!-- omit in toc -->
<br/>

- [x] Added a seed data button to populate the local storage with test users.
- [x] Login page implementation.
- [x] Authentication of a valid user.
- [x] Compose email feature.
- [ ] Home page with the list of email and unread mail.