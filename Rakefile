desc "Compile the site"
task :compile do
  FileUtils.rm_r('output') if File.exist?('output')
  exec("nanoc compile")
end

desc "Test to ensure the site will compile from scratch"
task :test do
  FileUtils.rm_r('output') if File.exist?('output')
  exec("nanoc compile")
end

task :default => [:test]
