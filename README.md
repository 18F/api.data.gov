# api.data.gov

The website content for api.data.gov built with [nanoc](http://nanoc.ws).

All contributions are welcome. To submit a change, fork this repo, commit your changes, and send us a [pull request](https://help.github.com/articles/using-pull-requests).

## Setup

Ruby 1.9+ is required to build the site.

```sh
$ git submodule update --init --recursive # Make sure to pull in git submodules
$ gem install bundler
$ bundle install
```

## Development

The content files to edit are in `./content`. Nanoc will compile the site into static HTML files inside `./output`:

```sh
$ nanoc compile
```

You can view the output on a local web server built-in to nanoc:

```sh
$ nanoc view
$ open http://localhost:3000
```

After you're happy with your changes, commit and submit a pull request.

## Deploy

To publish to production with GitHub Pages:

```sh
$ rake publish
```
