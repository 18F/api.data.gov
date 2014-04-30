# api.data.gov

The website content for api.data.gov built with [Middleman](http://middlemanapp.com).

All contributions are welcome. To submit a change, fork this repo, commit your changes, and send us a [pull request](https://help.github.com/articles/using-pull-requests).

## Setup

Ruby 1.9+ is required to build the site.

```sh
$ gem install bundler
$ bundle install --binstubs
```

## Development

The content files to edit are in `./source`. You can view your changes as you make them by running the Middleman preview server:

```sh
$ ./bin/middleman server
```

This will start a local web server running at [http://localhost:4567/](http://localhost:4567/)

After you're happy with your changes, commit and submit a pull request.

## Deploy

To publish to production with GitHub Pages:

```sh
$ ./bin/rake publish
```
