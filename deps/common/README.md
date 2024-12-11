## Description

This library provides common util namespaces to share between the frontend and
other non-frontend namespaces. This library is not supposed to depend on other ideamesh
libraries. This library is compatible with ClojureScript and with
node/[nbb-ideamesh](https://github.com/khulnasoft/ideamesh) to respectively provide
frontend and Electron/commandline functionality.


## API

This library is under the parent namespace `ideamesh.khulnasoft.common`.

## Dev

This follows the practices that [the Ideamesh frontend
follows](/docs/dev-practices.md). Most of the same linters are used, with
configurations that are specific to this library. See [this library's CI
file](/.github/workflows/ideamesh-common.yml) for linting examples.

### Setup

To run linters and tests, you'll want to install yarn dependencies once:
```
yarn install
```
### Testing

To run nbb-ideamesh tests:

```
# Run all tests
$ yarn test
# List available options
$ yarn test -H
# Run tests with :focus metadata flag
$ yarn test -i focus
```

To run ClojureScript tests:
```
clojure -M:test
```

To auto-run ClojureScript tests while writing tests:

```
clojure -M:test -w src
```
### Managing dependencies

See [standard nbb/cljs library advice in graph-parser](/deps/graph-parser/README.md#managing-dependencies).