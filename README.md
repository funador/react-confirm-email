# React Confirm Email

![React Image Upload](https://cdn-images-1.medium.com/max/800/1*Tx026w_PlV29l5OiBFqCXQ.gif)

A small MERN app that walks through the classic "collect an email, send a confirmation link, mark it confirmed when clicked" flow. Client and server are both TypeScript.

## Demo

[Live demo](http://react-confirm-email.surge.sh)

## Medium post

[Email Confirmation with React and Node](https://medium.com/p/257e5d9de725/)

## Getting Started

```shell
git clone https://github.com/funador/react-confirm-email.git

cd react-confirm-email/client
npm i && npm start

# open another terminal tab
cd react-confirm-email/server
npm i && npm run dev

# open another terminal tab (if running mongo locally)
mongod
```

### Running MongoDB

Local dev always points at `mongodb://localhost/simple-email-confirmation` (see `server/config.ts`), so just [install and run mongod](https://www.mongodb.com/docs/manual/administration/install-community/) locally. `DB_URL` in `.env` is only read when `NODE_ENV=production` — that's for a real deployment, e.g. pointing at a hosted [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster.

### Sending real email

Create a dedicated Gmail account for this — its credentials are going to sit in a `.env` file on your machine, so don't reuse one you care about.

Gmail no longer allows password-based SMTP login for regular accounts. Instead, turn on [2-Step Verification](https://myaccount.google.com/security) and generate an [App Password](https://myaccount.google.com/apppasswords), then use that as `MAIL_PASS`:

```shell
# server/.env
MAIL_USER=your_new_email_address@gmail.com
MAIL_PASS=your_16_character_app_password
```

### Issues

Something not working? Please [open an issue](https://github.com/funador/react-confirm-email/issues) or submit a PR.
