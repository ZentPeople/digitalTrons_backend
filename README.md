# Slot Booker API

A NodeJs Backend for Booking slots in hour intervals

## Installation

Clone the repository and Install the dependencies and devDependencies .

```
npm install
```

## Configuration

Open .env file and Configure below items

| Key              | Description                    |
| ---------------- | ------------------------------ |
| MONGODB_ENDPOINT | MongoDB url                    |
| PORT             | Port at which API needs to run |

## Starting Development environment

To start the application development server

```
npm run dev
```

## Starting Production environment

To start the application production server, install pm2 and start server

```
npm i -g pm2
pm2 start index.js
```
