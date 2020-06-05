## Codex

A minimal blog theme built for [Hugo](https://gohugo.io/) 🍜

- An about page 👋🏻 and a blog 📝
- Blog posts can be tagged 🏷

### Getting Started

**1. Start a new `hugo` site**

```
hugo new site my-new-site
cd my-new-site
```

**2. Initialize project with `git`**

```
git init
```

**3. Add `hugo-theme-codex` as a submodule**

```
git add submodule https://github.com/jakewies/hugo-theme-codex themes/codex
```

**4. List `"codex"` as the name of your theme in `config.toml`**

```toml
# config.toml

theme = "codex"
```

See the contents of the [example site](https://github.com/jakewies/hugo-theme-codex/tree/master/exampleSite) for more details.

### Configuring the Home Page

The site's home page can be configured by creating a `content/_index.md` file. This file can use the following frontmatter:

```md
---
heading: "Hi, I'm Codex"
subheading: "A minimal blog theme for hugo."
handle: "hugo-theme-codex"
---
```

If you would rather override the about page's layout with your own, you can do so by creating a `layouts/index.html`. You can find the `index.html` file that `hugo-theme-codex` uses [here](https://github.com/jakewies/hugo-theme-codex/blob/master/layouts/index.html).

See the contents of the [example site](https://github.com/jakewies/hugo-theme-codex/tree/master/exampleSite) for more details.

### Configuring Social Icons

Social Icons are optional. As of right now we support Twitter and GitHub, but more can be supported in the future. To show any of these icons, just provide the value in the `[params]` section of `config.toml`.

```toml
# config.toml

[params]
  twitter = "hugo-theme-codex"
  github = "jakewies/hugo-theme-codex"
```

If either of these options are given, `hugo-theme-codex` will render the social icon in the footer.

See the contents of the [example site](https://github.com/jakewies/hugo-theme-codex/tree/master/exampleSite) for more details.

### Creating a blog post

You can create a new blog post page by going to the root of your project and typing:

```
hugo new blog/:blog-post.md
```

Where `:blog-post.md` is the name of the file of your new post.

### Tags

Right now `hugo-theme-codex` uses the `tags` taxonomy for blog posts. You can view all the blog posts of a given tag by going to `/tags/:tag-name`, where `:tag-name` is the name of your tag.

## Future Updates & Contributing

Right now the way to customize the theme is not very user-friendly. That is the first thing to work on. If you get curious just hop into the theme directory and go exploring through the code. It's not too complicated what's going on.
