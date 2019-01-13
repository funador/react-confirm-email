# React Confirm Email

![React Image Upload](https://cdn-images-1.medium.com/max/1600/1*2a5Zidam3OI-Ep19-tT1AQ.gif)

## Medium post that details this repo
* [Email Confirmation with React and Node](https://medium.com/p/257e5d9de725/)

## Getting Started

```
git clone https://github.com/funador/react-confirm-email.git
cd react-confirm-email/client
npm i && npm start
// open new terminal
cd react-confirm-email/server
npm i && npm run dev
```

#### To run this project you will need a new gmail account. 
You can sign up for a new gmail account [here](https://accounts.google.com/signup?hl=en-GB). Afterwards you will need to plug the credentials for your new account into a *.env* file on the server that needs to be created as well.

```shell
// server/.env
MAIL_USER=your_new_email_address@gmail.com
MAIL_PASS=your_password
```
### Very Important!!!
In order for your newly created account to be able to send emails on your behalf (and allow this application to run), you will likely need to allow 'Less secure app access' on your new gmail account as described [here](https://support.google.com/accounts/answer/6010255?hl=en). 

But that is it for the setup!

### Issues

Something not working?  Please [open an issue](https://github.com/funador/react-confirm-email/issues) or even better submit a PR that fixes the bug!