require "active_support/core_ext/array/grouping"

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

page "/404.html", :directory_index => false

# General configuration

activate :sprockets do |c|
  c.imported_asset_path = "static/assets"
  c.expose_middleman_helpers = true
end
activate :directory_indexes
activate :syntax

set :css_dir, "static/stylesheets"
set :js_dir, "static/javascripts"
set :fonts_dir, "static/fonts"
set :images_dir, "static/img"

set :markdown_engine, :kramdown
set :markdown, {
  :input => "GFM",
  :smart_quotes => ["apos", "apos", "quot", "quot"],
}

# Reload the browser automatically whenever files change
configure :development do
  if(ENV["MIDDLEMAN_LIVERELOAD_PORT"] && ENV["MIDDLEMAN_LIVERELOAD_JS_HOST"])
    activate :livereload, :port => ENV["MIDDLEMAN_LIVERELOAD_PORT"], :js_host => ENV["MIDDLEMAN_LIVERELOAD_JS_HOST"]
  else
    activate :livereload
  end
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def breadcrumbs_trail
    page = current_page
    trail = [page]

    while(page = page.parent)
      unless(page.data.disable_in_breadcrumbs_trail)
        trail << page
      end
    end

    trail.reverse
  end
end

activate :relative_assets

# Build the metrics page from the Vue sub-project. This requires a bit of
# templating gymnastics that would probably be good to revisit at some point
# (we have to fake the Vue app spitting out an ERB template, so that it will
# render the app's template from Middleman).
activate :external_pipeline,
  :name => :webpack,
  :command => build? ? "cd metrics && yarn run build" : "cd metrics && yarn run watch",
  :source => "metrics/dist",
  :latency => 1
page "/metrics/*.html", :layout => false, :data => { :title => "Metrics" }

module SprocketsExclude
  def processible?(filename)
    # Don't try to process Vue js/css files with sprockets.
    if filename.include?("metrics/dist")
      return false
    end

    super
  end
end
Middleman::Sprockets::Interface.send(:prepend, SprocketsExclude)

# Build-specific configuration
configure :build do
  # Enable cache buster
  activate :asset_hash, :ignore => [
    # Don't cache-bust the embed javascript file, since its references need to
    # be hardcoded.
    %r{signup_embed.js},

    %r{metrics},
  ]

  # Minify CSS on build
  activate :minify_css, :ignore => [
    %r{metrics},
  ]

  # Minify Javascript on build
  activate :minify_javascript, :ignore => [
    %r{metrics},
  ]
end

after_configuration do
  sprockets.append_path(File.join(root, "vendor/data.gov/roots-nextdatagov/assets/css"))
  sprockets.append_path(File.join(root, "vendor/data.gov/roots-nextdatagov/assets/fonts"))
  sprockets.append_path(File.join(root, "vendor/data.gov/roots-nextdatagov/assets/img"))
  sprockets.append_path(File.join(root, "vendor/data.gov/roots-nextdatagov/assets/js"))
  sprockets.append_path(File.join(root, "vendor/data.gov/plugins/custom-post-view-generator/libs/flowplayer"))
  sprockets.append_path(File.join(root, "vendor/data.gov/plugins/custom-post-view-generator/libs/smartpaginator"))
  sprockets.append_path(File.join(root, "vendor/data.gov/plugins/custom-post-view-generator/libs/tablesorter"))
end

import_path File.join(root, "vendor/data.gov/roots-nextdatagov/assets/img") do |target_path, original_path|
  target_path.gsub(%r{\Aimg/}, "static/img/")
end

import_path File.join(root, "vendor/data.gov/roots-nextdatagov/assets/fonts") do |target_path, original_path|
  target_path.gsub(%r{\Afonts/}, "static/fonts/")
end

if(build?)
  ENV["WEB_SITE_ROOT"] ||= "https://api.data.gov"
end
