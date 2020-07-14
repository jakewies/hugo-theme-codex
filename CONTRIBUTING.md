# Contributing

First off, thank you for your time and effort! This project is not very large
and easy to jump into.

## Getting started

1. Fork and clone the repository
2. Install dependencies:

```bash
cd hugo-theme-codex

yarn install
```

## Scripts

```bash
yarn develop
```

Triggers a one-time build of the static directory.

```bash
yarn format
```

Runs prettier on the entire project directory.

## Assets

The `assets/` directory is where you can write JS and SCSS, which get processed
into CSS files before being placed in the `static/` directory. 

### Making `scss` changes

If you make a change to a source `scss` file in `assets/scss`, you will need to make sure that you rebuild the `exampleSite/resources/_gen/assets/` directory to reflect the change in the demo site, else the demo's styles will become stale.

If you are running `yarn develop`, `hugo` will pick up these changes by default. You can also run `yarn build:example`, which will trigger a one-time rebuild of the example site. From there, commit the updated `resources/_gen` directory to version control.

## Questions

If you have any questions feel free to reach out to me directly. Best ways to
contact me:

- Twitter: https://twitter.com/jakewies
- Email: jakewiesler@gmail.com
