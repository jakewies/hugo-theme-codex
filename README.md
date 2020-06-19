## Codex

A minimal blog theme built for [Hugo](https://gohugo.io/) 🍜

- An about page 👋🏻 and a blog 📝
- Blog posts can be tagged 🏷

### Getting started

At the root of your Hugo project, run:

```bash
git submodule add https://github.com/jakewies/hugo-theme-codex.git themes/codex
```

Next, copy the contents of the [default `config.toml`](https://github.com/jakewies/hugo-theme-codex/blob/master/exampleSite/config.toml) to your site's `config.toml`. Make sure to read all the comments, as there a few nuances with Hugo themes that require some changes to that file. 

Finally, run:

```
hugo server -D 
```

**Note: If you are seeing a blank page it is probably because you have nothing in your `content/` directory. Read on to fix that.**

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

You can also create additional social icons by replicating the code in `partials/social-icons.html`. For example, to add an email social icon, you can add the follwing:

```html
<a class="social-icons__icon social-icons__icon--email" href="mailto:youremail@example.com"></a>
```
Note that you also need to add the following css in corresponding css files where social icons are displayed, i.e. `about.css` and `post.css`:

```css
.social-icons__icon--email {
  background-image: url("/icons/email.svg");
}
```

### Creating a blog post

You can create a new blog post page by going to the root of your project and typing:

```
hugo new blog/:blog-post.md
```

Where `:blog-post.md` is the name of the file of your new post.

The theme supports KaTeX which renders math typesetting in markdown document. Simply turn on by `math: true` in your post.

### Adding a new section menu

In your site's `config.toml`, add a new menu definition for say, "photos":
```toml
# config.toml

[[menu.main]]
    identifier = "photos"
    name = "photos"
    title = "Photos"
    url = "/photos"
```

Then, put your posts under "content/photos". 

### Tags

Right now `hugo-theme-codex` uses the `tags` taxonomy for blog posts. You can view all the blog posts of a given tag by going to `/tags/:tag-name`, where `:tag-name` is the name of your tag.

### Favicon

To update favicon of the site, replace the one in `static/favicon.ico` with your own.

## Future Updates & Contributing

Right now the way to customize the theme is not very user-friendly. That is the first thing to work on. If you get curious just hop into the theme directory and go exploring through the code. It's not too complicated what's going on.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.chuxinhuang.com/"><img src="https://avatars2.githubusercontent.com/u/30974572?v=4" width="100px;" alt=""/><br /><sub><b>Chuxin Huang</b></sub></a><br /><a href="https://github.com/jakewies/hugo-theme-codex/commits?author=chuxinh" title="Documentation">📖</a> <a href="https://github.com/jakewies/hugo-theme-codex/commits?author=chuxinh" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
