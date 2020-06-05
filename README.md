## Codex

A minimal blog theme built for [Hugo](https://gohugo.io/) 🍜

## What this theme is

- An about page and a blog. No more. No less. 
- Blog posts can be tagged
- Tag pages can

Right now the way to customize the theme is not very user-friendly. That is the first thing to work on.

## Archetypes

You can create a new blog post page by going to the root of your project and typing:

```
hugo new blog/post.md
```

Where `post.md` is the name of your new post.

## Configuration

There are a few configuration parameters you can add in your `config.toml` to customize the theme:



```toml
# config.toml
# values listed here are default values

[params]

  name = "Codex"
  description = "A minimal blog theme for hugo."
  twitter = "hugo-theme-codex"
  github = "jakewies/hugo-theme-codex"
```

1. `name`: This is the heading on the `/about` page
2. `description`: This is the subheading on the `/about` page
3. `twitter`: Your Twitter handle without the @ symbol (optional)
4. `github`: Your GitHub handle without the @ symbol (optional)

