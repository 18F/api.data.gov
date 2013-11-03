require "compass"

Compass.add_project_configuration 'config/compass.rb'

Compass.sass_engine_options[:load_paths].each do |path|
::Sass.load_paths << path
end
