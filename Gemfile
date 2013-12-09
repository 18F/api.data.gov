source "https://rubygems.org"

gem "nanoc"

gem "rake"

# Sprockets for combining/minifying javascripts and stylesheets
gem "nanoc-sprockets-filter"
gem "sprockets-helpers"
gem "sprockets-sass"

# Cache busting for image tags
gem "nanoc-cachebuster"

# Javascript compression
gem "uglifier"
gem "therubyracer"

# Sass stylesheets and compression
gem "sass"
gem "compass"

# Twitter bootstrap
gem "bootstrap-sass", "~> 2.3.2.2"

# Markdown
gem "kramdown", ">= 1.2.0"

# Syntax highlighting
gem "coderay"

# HTML parsing
gem "nokogiri"

# For simple variables in templates
gem "mustache"

# JSON validation
gem "multi_json"

group :development do
  # Static file server for nanoc development
  gem "adsf"

  # Deployment
  gem "capistrano", "~> 2.15.5"
  gem "capistrano-ext"
  gem "capistrano_nrel_ext", :git => "https://github.com/NREL/capistrano_nrel_ext.git"
end
