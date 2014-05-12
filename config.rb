###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

page "/404.html", :directory_index => false

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

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

set :css_dir, 'static/stylesheets'
set :js_dir, 'static/javascripts'
set :fonts_dir, 'static/fonts'
set :images_dir, 'static/img'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash, :ignore => [
    # Don't cache-bust the Swagger throbber image, since it's hardcoded to
    # throbber.gif.
    %r{images/throbber.gif},
  ]

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :directory_indexes

activate :syntax

set :markdown_engine, :kramdown
set :markdown, {
  :input => 'GFM',
  :smart_quotes => ['apos', 'apos', 'quot', 'quot'],
}

after_configuration do
  sprockets.append_path(File.join(root, "vendor/data.gov/themes/roots-nextdatagov/assets/css"))
  sprockets.append_path(File.join(root, "vendor/data.gov/themes/roots-nextdatagov/assets/fonts"))
  sprockets.append_path(File.join(root, "vendor/data.gov/themes/roots-nextdatagov/assets/img"))
  sprockets.append_path(File.join(root, "vendor/data.gov/themes/roots-nextdatagov/assets/js"))
  sprockets.append_path(File.join(root, "vendor/data.gov/plugins/custom-post-view-generator/libs/flowplayer"))
  sprockets.append_path(File.join(root, "vendor/data.gov/plugins/custom-post-view-generator/libs/smartpaginator"))
  sprockets.append_path(File.join(root, "vendor/data.gov/plugins/custom-post-view-generator/libs/tablesorter"))
end

ready do
  Dir.glob(File.join(root, "vendor/data.gov/themes/roots-nextdatagov/assets/img/*")).each do |path|
    sprockets.import_asset(File.basename(path))
  end
end

after_build do |builder|
  Dir.glob("build/**/*.json").each do |path|
    puts "Validating JSON for #{path}"
    json = MultiJson.load(File.read(path))
    MultiJson.dump(json, :pretty => false)
  end
end
