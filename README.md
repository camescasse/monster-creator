# Monster Creator

React + TypeScript project that let's you create different kinds of Monsters with their corresponding `name`, `attack`, `hp`, `defense`, `speed` and `image`.

## Getting Started

1. Install [Node.js](https://nodejs.org/en) on your local machine.
2. Clone this repository `git clone <repo-url>`.
3. Navigate to this project's folder.
4. Install dependencies:

   ```
   npm install
   ```
5. Run the app locally:

   ```
   npm run dev
   ```
   
> [!IMPORTANT]
> The recommended Node.js version is: ```v16.10.0-v17.0.0```

## Testing

### Unit tests

There are two kinds of tests in this project, there are components based unit tests that can be executed via running:

```
npm test
```

### End-to-End tests

These kind of tests have been written using Cypress and there are two ways run them:

> [!NOTE]
> For a full list of the End-to-End Test Plan, click [here](https://github.com/camescasse/cypress-fullstacklabs-assessment/blob/main/TESTPLAN.md).

#### Using a GUI for local development

The recommended to run Cypress tests locally is using their GUI, for this you will need to run:

```
npm run cy
```

#### Headless mode for CI/CD

Another alternative is run these tests on a browser in headless mode, like this:

```
npm run cy:hl
```

> [!NOTE]
> If you are not familiar with what headless mode means, you can visit [this](https://docs.cypress.io/guides/guides/command-line) documentation.