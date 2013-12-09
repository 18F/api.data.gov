require "capistrano_nrel_ext/recipes/vagrant_deploy"

# Set the servers for this stage.
role :app, "api.vagrant"
role :web, "api.vagrant"

# Set the accessible web domain for this site.
set :base_domain, "api.vagrant"

# Set the Rails environment.
set :rails_env, "development"

# Set gem bundler options for the development environment.
set :bundle_without, [:test]
set :bundle_flags, "--quiet"

# Reset forced "vagrant" user. Deploy as the DEPLOY_USER env variable or fall
# back to the running user.
set :user, ENV["DEPLOY_USER"]

default_environment["SWAGGER_HOST"] = "http://api.vagrant"
