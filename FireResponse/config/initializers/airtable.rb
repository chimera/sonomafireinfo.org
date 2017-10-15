Airrecord.api_key = ENV['AIRTABLE_BASE']

AirtableSheets = {
  recent_news: {
    klass: :RecentNews,
    sort: { "Last Updated" => "desc" },
  },
  shelters: {
    klass: :Shelters,
    sort: { "Name" => "asc" },
  },
  resources: {
    klass: :Resources,
    sort: { "Name" => "asc" },
  },
  important_info: {
    klass: :ImportantInfo,
    sort: {
      "PriorityNumber" => "asc",
    },
  },
  support_services: {
    klass: :SupportServices,
    sort: { "Name" => "asc" },
  },
  donations: {
    klass: :Donations,
    sort: { "Name" => "asc" },
  },
  gas_stations: {
    klass: :GasStations,
    sort: { "Name" => "asc" },
  },
  markets: {
    klass: :Markets,
    sort: { "Name" => "asc" },
  },
  volunteering: {
    klass: :Volunteering,
    sort: { "Name" => "asc" },
  },
  animals: {
    klass: :Animals,
    sort: { "Name" => "asc" },
  },
  schools: {
    klass: :Schools,
    sort: { "Name" => "asc" },
  },
  social_media: {
    klass: :SocialMedia,
    sort: { "Name" => "asc" },
  },
  pharmacies: {
    klass: :Pharmacies,
    sort: { "Name" => "asc" },
  },
  evacuations: {
    klass: :Evacuations,
    sort: { "Name" => "asc" },
  },
  shelter_contacts: {
    klass: :ShelterContacts,
    sort: { "Name" => "asc" },
  },
  stats: {
    klass: :Stats,
    sort: { "Name" => "asc" },
  },
  team_members: {
    klass: :TeamMembers,
    sort: { "Name" => "asc" },
  },
  spanish: {
    klass: :Spanish,
    sort: { "Last Updated" => "desc" },
  },
  recovery: {
    klass: :Recovery,
    sort: { "Name" => "asc" },
  }
}

AirtableSheets.each do |k,v|

  klass = Class.new(Airrecord::Table) do
    self.base_key = "appsj7gOti4YuE2v1"
    self.table_name = v[:klass].to_s

    attr_accessor :spanish_fields

    def spanish!
      @spanish_fields ||= {}

      @fields.map do |key, value|
        val = if value.kind_of?(String)
                val = EasyTranslate.translate(value, :to => :spanish, api_key: ENV['GOOGLE_TRANSLATE_API']) rescue value
              else
                value
              end

        @spanish_fields[key] = val
      end
    end
  end

  Object.const_set(v[:klass], klass)


end
