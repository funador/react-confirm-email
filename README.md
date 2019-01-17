# React Confirm Email

![React Image Upload](https://cdn-images-1.medium.com/max/800/1*Tx026w_PlV29l5OiBFqCXQ.gif)
## Demo
[Live demo](http://react-confirm-email.surge.sh)

## Medium post
[Email Confirmation with React and Node](https://medium.com/p/257e5d9de725/)

## Getting Started

```
git clone https://github.com/funador/react-confirm-email.git
cd react-confirm-email/client
npm i && npm start
// open another terminal tab
cd react-confirm-email/server
npm i && npm run dev
// open another terminal tab (if running mongo locally)
mongod
```
#### To run MongoDB 
* [Run mongo locally](https://medium.com/@peaonunes/how-to-install-mongodb-mac-1c70dc240f5b)
or
* [Use a third party service like mLab](https://medium.com/@alialhaddad/how-to-setup-a-online-mongo-db-database-using-mlab-24bb583720ba)

#### Create a new gmail account. 
You can sign up for a new gmail account [here](https://accounts.google.com/signup?hl=en-GB). Afterwards you will need to plug the credentials for your new account into a *.env* file on the server.

```shell
// server/.env
MAIL_USER=your_new_email_address@gmail.com
MAIL_PASS=your_password
```
#### Very Important!!!
In order for your newly created account to be able to send emails on your behalf (and allow this application to run), you will likely need to allow 'Less secure app access' on your new gmail account as described [here](https://support.google.com/accounts/answer/6010255?hl=en). 

### Issues

Something not working?  Please [open an issue](https://github.com/funador/react-confirm-email/issues) or submit a PR.