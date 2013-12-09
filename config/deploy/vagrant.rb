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

# Reset forced "vagrant" user. Deploy as the running user
# (api-umbrella-deployer in the case of the git hook).
set :user, nil

default_environment["SWAGGER_HOST"] = "http://api.vagrant"
