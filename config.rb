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

# activate :external_pipeline,
#   :name => :metrics,
#   :command => "cd metrics && yarn && yarn run build",
#   :source => "metrics/dist"

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

# Build-specific configuration
configure :build do
  # Enable cache buster
  activate :asset_hash, :ignore => [
    # Don't cache-bust the embed javascript file, since its references need to
    # be hardcoded.
    %r{signup_embed.js},
  ]

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
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

after_build do |builder|
  require "shellwords"

  builder.thor.run "cd metrics && yarn && yarn run build"
  builder.thor.run "rm -rf #{Shellwords.escape(File.join(root, "build/metrics-prototype/"))} && cp -r #{Shellwords.escape(File.join(root, "metrics/dist/metrics-prototype/"))} #{Shellwords.escape(File.join(root, "build/metrics-prototype/"))}"
end
