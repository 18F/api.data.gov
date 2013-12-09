# Set the servers for this stage.
role :app, "web1.apidatagov.aws", "web2.apidatagov.aws"
role :web, "web1.apidatagov.aws", "web2.apidatagov.aws"

# Set the accessible web domain for this site.
set :base_domain, "api.data.gov"

# Set the Rails environment.
set :rails_env, "production"

default_environment["SWAGGER_HOST"] = "http://api.data.gov"
