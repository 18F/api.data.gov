require "middleman-gh-pages"

desc "Test to ensure the site will compile from scratch"
task :test do
  FileUtils.rm_r('build') if File.exist?('build')
  exec("middleman build  --verbose")
end

task :default => [:test]
