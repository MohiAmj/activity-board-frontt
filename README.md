# Naming Convention

## Modules

To create a module we don't need to set aa modulesuffix at the end of the name, as a result we should run the following code to create an `Auth Module`.

```bash
ng generate module auth --routing
```

## Components

A component must be determined whether it is a page, a card or a reusable component. So we specify the type by adding a suffix at the end of the name only in kebab case. Therefor in order to create an `Login Page` we run the following command.

```bash
ng generate component login-page
```

A card is a component which receives iterable functions such as `ngFor` functions. So in order to create a `News Card`, we shall use the following command.

```bash
ng generate component news-card
```

A layout is a component which contains certain `CSS` configurations which are repeated throughout the project. For example a `Main Page Layout` is made via the code below.

```bash
ng generate component main-layout
```

## Services

Services are setup by their usecase. So we can create services that can contain certain operations according to our usecase. The suffix is also madatory for this part as well.

```bash
ng generate service auth-service
```

> The directives and pipes are also setup in the same manner.

> Since the performance is up value in the projects to come, it is mandatory to remove the provided in root from services, directives and pipes. We must provide them according to their use case in that particular module

#

# ActivityBoardFront

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
