require 'nokogiri'

module Nanoc::Filters
  class AddIDsToHeaders < Nanoc::Filter
    identifiers :add_ids_to_headers

    def run(content, arguments={})
      doc = Nokogiri::HTML.fragment(content)
      doc.css("h1, h2, h3, h4, h5, h6").each do |header|
        header['id'] = header.content.downcase.gsub(/\W+/, '-').gsub(/^-|-$/, '')
      end
      doc.to_s
    end
  end
end
