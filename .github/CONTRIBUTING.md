# Contributing

Thanks for your interest in contributing to Makinox-ui! Please take a moment to review this document **before submitting a pull request**.

## Pull requests

**Please ask first before starting work on any significant new features.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors create [a feature request](https://github.com/makinox/makinox-ui/discussions/new?category=ideas) to first discuss any significant new ideas. This includes things like adding new utilities, creating new at-rules, etc.

## Coding standards

Our code formatting rules are defined in [.eslintrc](https://github.com/makinox/makinox-ui/blob/main/.eslintrc.json). You can check your code against these standards by running:

```sh
yarn lint
```

To automatically fix any style violations in your code, you can run:

```sh
yarn lint -- --fix
```

## Running tests

You can run the test suite using the following commands:

```sh
yarn test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features to the project, please include tests.
