load "middleman-gh-pages/tasks/gh-pages.rake"

require "rake/testtask"
Rake::TestTask.new do |t|
  t.pattern = "test/**/test_*.rb"
end

# Build before running tests (since the tests rely on a build).
task :test => [:build]

# Run the tests after building (this doesn't cause an infinite loop with the
# above, since rake tasks only get executed once).
#
# This ensures that we run the tests during the "rake publish" process (which
# calls "build").
Rake::Task["build"].enhance do
  Rake::Task["test"].invoke
end

task :default => [:test]
