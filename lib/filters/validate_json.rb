require 'multi_json'

module Nanoc::Filters
  class ValidateJson < Nanoc::Filter
    identifiers :validate_json

    def run(content, params = {})
      json = MultiJson.load(content)
      MultiJson.dump(json, :pretty => false)
    end
  end
end
