require "rake/testtask"
Rake::TestTask.new do |t|
  t.pattern = "test/**/test_*.rb"
end

# Build before running tests (since the tests rely on a build).
task :test => [:build]

task :build do
  sh "bundle exec middleman build --clean"

  # Run the tests after building (this doesn't cause an infinite loop with the
  # above, since rake tasks only get executed once).
  Rake::Task["test"].invoke
end

task :default => [:test]
