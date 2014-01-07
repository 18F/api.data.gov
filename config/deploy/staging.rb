require "capistrano_nrel_ext/recipes/branches"

# Set the servers for this stage.
role :app, "stage-web1.apidatagov.aws", "stage-web2.apidatagov.aws"
role :web, "stage-web1.apidatagov.aws", "stage-web2.apidatagov.aws"

# Set the accessible web domain for this site.
set :base_domain, "stage-api.data.gov"
set :base_domain_aliases, ["stage-api.anydns.com"]

# Set the Rails environment.
set :rails_env, "staging"

default_environment["SWAGGER_HOST"] = "//stage-api.data.gov"
