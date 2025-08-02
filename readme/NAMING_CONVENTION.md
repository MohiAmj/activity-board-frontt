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
