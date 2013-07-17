require "sass"
require "uglifier"
require "nanoc-sprockets-filter"

require "compass"
require "bootstrap-sass"

Nanoc::Helpers::Sprockets.configure do |config|
  config.environment = Nanoc::Filters::Sprockets.environment
  config.prefix      = "/static/assets"
  config.digest      = true
end

# FIXME: Workaround for bootstrap-sass not being in Sass's load path in a
# non-Rails environment:
# https://github.com/thomas-mcdonald/bootstrap-sass/pull/388
gem_root = Gem.loaded_specs['bootstrap-sass'].full_gem_path
stylesheets = File.expand_path(File.join(gem_root, 'vendor', 'assets', 'stylesheets'))
::Sass.load_paths << stylesheets

include Nanoc::Helpers::Sprockets
