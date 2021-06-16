require "minitest/autorun"

BUILD_ROOT = File.expand_path("../../build", __FILE__)

class TestBuild < Minitest::Test
  def test_cache_busted_embed_css
    path = File.join(BUILD_ROOT, "static/javascripts/signup_embed.js")
    assert(File.exist?(path))

    content = File.read(path)
    assert(content)

    # The reference to the embedd.css file should be the cache busted version
    # (eg, "embed-8ae78a26.css").
    assert_match(%r{embed-\w+.css}, content)

    # Make sure the full path to the embed stylesheet is absolute and looks
    # right (note the array in the output is a weird artifact of getting
    # Middleman to properly cache bust the path).
    web_site_root = ENV["WEB_SITE_ROOT"].to_s
    assert_match(%r{^https://}, web_site_root)
    assert_match(%r{var (\w+)="#{web_site_root}";\w+\.href=\[\1,"/static/stylesheets/embed-\w+.css"\].join\(""\)}, content)
  end
end
