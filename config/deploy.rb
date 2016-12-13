# config valid only for current version of Capistrano
lock "3.6.1"

set :application, "static-site"
set :repo_url, "https://github.com/NREL/api-umbrella-static-site.git"
set :branch, "master"

set :scm, :rsync
set :rsync_options, [
  "--archive",
  "--verbose",
  "--compress",
  "--delete-after",
  "--delete-excluded",
  "--exclude", ".git*",
  "--exclude", "source",
]

set :deploy_to, "/opt/api-umbrella/embedded/apps/static-site"

namespace :middleman do
  task :build do
    run_locally do
      Dir.chdir(fetch(:rsync_stage)) do
        execute "bundle", "exec", "middleman", "build", "--verbose"
      end
    end
  end
end
after "rsync:stage_done", "middleman:build"
