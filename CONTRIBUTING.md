# Contributing

First off, thank you for your time and effort! This project is not very large and easy to jump into.

## Development stack

- Built with [Hugo](https://gohugo.io/) 🔥
- [Gulp](https://gulpjs.com/) as a build tool 🍹
- Styles in [Stylus](http://stylus-lang.com/) 💅🏻
- [Yarn](https://yarnpkg.com/) as a package manager 📦

## Getting started

1. Fork and clone the repository
2. Install dependencies:

```bash
cd hugo-theme-codex

yarn install
```

## Scripts

There are 3 npm scripts that can be used for development purposes:

```bash
yarn develop
```

This command will start a hugo webserver and serve the `exampleSite`. This works well because the example site uses `hugo-theme-codex`, so any changes
we make to the codebase can be viewed in real time.

```bash
yarn watch:assets
```

If you are working with `js` or `css` you will probably want to run this command in a separate tab from `yarn develop` so that any changes to assets like javascript and css will trigger a re-build by `gulp``.

```bash
yarn build:assets
```

Triggers a one-time build of the static directory.

## Questions

If you have any questions feel free to reach out to me directly. Best ways to contact me:

- Twitter: https://twitter.com/jakewies
- Email: jakewiesler@gmail.com
