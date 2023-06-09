# devices-testcafe-js

This is a sample project that demonstrates how to use [TestCafe](https://testcafe.io/) to automate end-to-end tests for a web application that manages a list of devices. It includes several test scenarios that cover the basic functionality of the application, such as creating, updating, and deleting devices.

The device management application consists of a client-side UI and a server-side API, which are separate projects.

## Prerequisites

To run the tests, you will need to have the following:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Yarn](https://yarnpkg.com/)

## Getting Started

To install the project dependencies, run the following command in the project directory:

```sh
yarn install
```

## Configuration

The project uses environment variables to configure the URLs of the web application and its API. The URLs can be set in `.env.dev` for the development environment. The following environment variables are used:

- `TESTCAFE_API_BASE_URL`: The base URL of the API.
- `TESTCAFE_UI_BASE_URL`: The base URL of the web application.

By default, the development environment is used. To configure a new environment, create a new `.env` file with a custom name and include the new URLs. For example, you could create an `.env.staging` file for a staging environment.

To switch to the new environment, set the `TESTCAFE_ENV` environment variable to the name of your custom environment when running the tests. For example:

```sh
TESTCAFE_ENV=staging yarn test:chrome
``` 

Note: If no environment is specified, the tests will use the `TESTCAFE_ENV` environment variable or the default development environment. If the `.env` file for the specified environment does not exist, the tests will fail with an error.

## Client Setup

To run the client application locally, follow these steps:
1. Clone the client repository to your local machine:
```sh
git clone https://github.com/Yastrenky/devices-clientapp
```
2. In the root directory, run `npm install` to install the dependencies.
3. Start the client application by running `npm start`. This will start the UI server on port **3001**.
4. Open your web browser and navigate to http://localhost:3001 to view the application.

### Troubleshooting

If you encounter issues while setting up or running the client application, try the following steps:

1. **npm ERR! Build failed with error code: 1**

    If you encounter this error, try deleting the `package-lock.json` file and running `npm install` again.

2. **bad option: --openssl-legacy-provider**

    If you encounter this error, edit the `package.json` file and remove the `--openssl-legacy-provider` option from the `start` script.

## Server Setup

To run the server application locally, follow these steps:
1. Clone the server repository to your local machine:
```sh
git clone https://github.com/NinjaRMM/devicesTask_serverApp
```
2. In the root directory, run `npm install` to install the dependencies.
3. Start the server by running `npm start`. This will start the API server on port **3000**.

## Usage

To run the tests, use one of the following commands:

```sh
yarn test:chrome           # Run the tests in Chrome
yarn test:firefox          # Run the tests in Firefox
yarn test:safari           # Run the tests in Safari
yarn test:multi            # Run the tests in Chrome and Firefox
yarn test:chrome:headless  # Run the tests in Chrome headless mode
yarn test:chrome:parallel  # Run the tests in parallel in Chrome headless mode
```

## Test Scenarios

The project contains four test scenarios that cover the basic functionality of the application. These scenarios can be found in the `tests/specs` directory:

- `create-device.spec.js`: Creates a new device and verifies that it appears in the list.
- `list-devices.spec.js`: Retrieves the list of devices from the API and verifies that they appear in the list.
- `update-device.spec.js`: Renames the first device in the list and verifies that the name has been updated.
- `delete-device.spec.js`: Deletes the last device in the list and verifies that it has been removed from the list.

## Project Structure

The project structure is as follows:

- `tests/`: Contains the TestCafe test files.
- `api/`: Contains the test files for the API tests.
- `helpers/`: Contains the helper functions used in the tests.
- `pages/`: Contains the Page Object Model files for the web application.
- `specs/`: Contains the test scenarios.
- `.env.dev`: Contains the environment variables for the development environment.
- `.env.prod`: Contains the environment variables for the production environment.
- `.eslintrc.json`: Contains the ESLint configuration for the project.
- `.testcaferc.json`: Contains the TestCafe configuration for the project.
- `config.js`: Loads the environment variables from the `.env` file.
- `package.json`: Contains the dependencies and scripts for the project.
- `yarn.lock`: Lockfile generated by Yarn.

## Reporting

This project includes three types of test reports: Spec, HTML, and Allure.

### Spec Report

The Spec report is a default TestCafé reporter that logs the test results in the console output.

### HTML Report

The HTML report displays the test results in a web page, and it is generated automatically after test run.

The report will be available at `output/reports/html/report.html`.

### Allure Report

The Allure report provides a detailed and interactive view of test results. To generate this report, use the following command after the test run finishes. 
```
yarn test:report:open
```
This command will generate the report at `output/reports/allure/allure-report/index.html` and open it automatically in the default web browser.

#### Allure Configuration

To configure the Allure report, use the `doc-allure-config.js` file in the root directory. This file includes configuration options such as the report directory, labels, and metadata.

## License

This project is licensed under the [MIT License](LICENSE).