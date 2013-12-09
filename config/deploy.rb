# Setup our multi-stage environments.
require "capistrano/ext/multistage"

require "capistrano_nrel_ext/recipes/defaults"
require "capistrano_nrel_ext/recipes/gem_bundler"
require "capistrano_nrel_ext/recipes/nanoc"
require "capistrano_nrel_ext/recipes/nginx"
require "capistrano_nrel_ext/recipes/redhat"

# Set the application being deployed.
set :application, "static-site"

# Deploy from git.
set :scm, "git"
set :repository, "https://github.com/GSA-OCSIT/api.data.gov.git"
set :git_enable_submodules, true

# Set the base path for deployment.
set :deploy_to_base, "/opt/api-umbrella"

# Use the deploying user's local SSH keys for git access.
ssh_options[:forward_agent] = true

set :gem_bundler_apps, ["."]
