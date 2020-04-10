source "https://rubygems.org"

ruby "~> 2.6.0"

gem "rake", "~> 13.0"

# Middleman Gems
gem "middleman", "~> 4.3.2"
gem "middleman-livereload", "~> 3.4.6"

# Syntax highlighting
gem "middleman-syntax", "~> 3.2.0"

# Assets
gem "middleman-sprockets", "~> 4.1.0"
# Pin sprockets to less than 4 to fix current issues in 4.0.0 with js.erb
# files.
gem "sprockets", "< 4"
gem "sass", "~> 3.7.3"
# Try sassc master to fix GitHub Action crashes:
# https://github.com/sass/sassc-ruby/issues/183
gem "sassc", :git => "https://github.com/sass/sassc-ruby.git"

# Asset minification
gem "mini_racer", "~> 0.2.3"

# For making API calls within generated pages
gem "rest-client", "~> 2.1.0"
gem "multi_json", "~> 1.14.1"
