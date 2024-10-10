# GatherGram Frontend Challenge

This repository contains the frontend challenge solution for GatherGram. The challenge involves building a fully functional React application based on a Figma design, including landing pages, login, and registration flows, while connecting to external APIs and handling user authentication.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Demo Video](#demo-video)
- [Hosted Application](#hosted-application)
- [License](#license)

## Features

- **Landing Page Implementation**: Responsive landing page built according to Figma specifications.
- **User Authentication**: Includes login and registration pages, connected to external API for user authentication.
- **Error Handling**: Robust client-side and server-side error handling for form validation and API requests.
- **Personalized Experience**: After successful login/registration, users are greeted with a personalized message and redirected to a portal.
  
## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to external APIs.
- **React Router**: For handling page navigation.
- **Jest**: For unit and integration testing.
- **React Testing Library**: For testing React components.
- **Vercel**: For hosting the live application.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/isaacpitwa/gathergram.git
cd gathergram
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
REACT_APP_API_BASE_URL=https://jellyfish-app-sjgrf.ondigitalocean.app/
```

## Running the App

To start the development server, run:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Testing

To run the test suite, use the following command:

```bash
npm test
```

The tests include unit and integration tests for various components, ensuring that the landing page, authentication flows, and error handling work correctly.

## Demo Video

A walkthrough of the app is available in the demo video: [Demo Video Link](#)

## Hosted Application

The live version of the application is hosted on Vercel and can be accessed via this link: [GatherGram Live](#)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
