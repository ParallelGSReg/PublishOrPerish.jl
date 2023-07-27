var documenterSearchIndex = {"docs":
[{"location":"todo/#News","page":"Todo","title":"News","text":"","category":"section"},{"location":"todo/","page":"Todo","title":"Todo","text":"using Markdown, PublishOrPerish\r\nMarkdown.parse_file(joinpath(pkgdir(PublishOrPerish), \"TODO.md\"))","category":"page"},{"location":"license/#License","page":"License","title":"License","text":"","category":"section"},{"location":"license/","page":"License","title":"License","text":"using Markdown, PublishOrPerish\r\nMarkdown.parse_file(joinpath(pkgdir(PublishOrPerish), \"LICENSE\"))","category":"page"},{"location":"usage/#Usage","page":"Usage","title":"Usage","text":"","category":"section"},{"location":"usage/#Index","page":"Usage","title":"Index","text":"","category":"section"},{"location":"usage/","page":"Usage","title":"Usage","text":"Pages = [\"usage.md\"]","category":"page"},{"location":"usage/#Advanced-usage","page":"Usage","title":"Advanced usage","text":"","category":"section"},{"location":"usage/","page":"Usage","title":"Usage","text":"using PublishOrPerish\r\n\r\nsearch(\r\n    query = [\"machine learning\", \"ai\", \"julia\"],\r\n    max = 50, \r\n    source = \"pubmed\", \r\n    method = \"keywords\", \r\n    outfile = \"output.csv\",\r\n    username = \"a_username\",\r\n    password = \"a_password\"\r\n)","category":"page"},{"location":"usage/#search()-function","page":"Usage","title":"search() function","text":"","category":"section"},{"location":"usage/","page":"Usage","title":"Usage","text":"search(\r\n    query::Union{String, Vector{String}}; \r\n    max::Int = 100, \r\n    source::String = \"pubmed\", \r\n    method::String = \"keywords\", \r\n    outfile::String = \"output.csv\",\r\n    username::String = \"default\",\r\n    password::String = \"default\"\r\n)","category":"page"},{"location":"usage/#Parameters","page":"Usage","title":"Parameters","text":"","category":"section"},{"location":"usage/","page":"Usage","title":"Usage","text":"query::Union{String, Vector{String}}: The search query, which can be a single string or a vector of strings for advanced queries.","category":"page"},{"location":"usage/#Optional-parameters","page":"Usage","title":"Optional parameters","text":"","category":"section"},{"location":"usage/","page":"Usage","title":"Usage","text":"max::Int64: The maximum number of results to retrieve (default: 100).","category":"page"},{"location":"usage/","page":"Usage","title":"Usage","text":"source::String: The source from which to perform the search. Possible values are crossref, gsauthor, gscholar, gsciting, gsprofile, masv2, openalex, pubmed, scopus, semscholar, and wos (default: pubmed).","category":"page"},{"location":"usage/","page":"Usage","title":"Usage","text":"method::String: The search method to use. Possible values are author, affiliation, citedid, field, issn, journal, title, keywords, years, and raw (default: keywords).","category":"page"},{"location":"usage/","page":"Usage","title":"Usage","text":"outfile::String: The name of the output file to store the search results in CSV format (default: salida.csv).","category":"page"},{"location":"usage/","page":"Usage","title":"Usage","text":"username::String: The username for authentication (default: default).","category":"page"},{"location":"usage/","page":"Usage","title":"Usage","text":"password::String: The password for authentication (default: default).","category":"page"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"using Markdown, PublishOrPerish\r\nMarkdown.parse_file(joinpath(pkgdir(PublishOrPerish), \"CONTRIBUTING.md\"))","category":"page"},{"location":"start/#Getting-started","page":"Getting Started","title":"Getting started","text":"","category":"section"},{"location":"start/","page":"Getting Started","title":"Getting Started","text":"This basic example demonstrates how to use the package in its simplest way. However, for a more in-depth understanding of the various options and features, please navigate to the Usage section where all available functionalities and usage scenarios are thoroughly explained.","category":"page"},{"location":"start/#Installation","page":"Getting Started","title":"Installation","text":"","category":"section"},{"location":"start/","page":"Getting Started","title":"Getting Started","text":"PublishOrPerish.jl can be installed using the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run","category":"page"},{"location":"start/","page":"Getting Started","title":"Getting Started","text":"pkg> add PublishOrPerish","category":"page"},{"location":"start/#Usage","page":"Getting Started","title":"Usage","text":"","category":"section"},{"location":"start/","page":"Getting Started","title":"Getting Started","text":"using PublishOrPerish\r\n\r\ndata = search([\"machine learning\", \"ai\", \"julia\"])","category":"page"},{"location":"news/#News","page":"News","title":"News","text":"","category":"section"},{"location":"news/","page":"News","title":"News","text":"using Markdown, PublishOrPerish\r\nMarkdown.parse_file(joinpath(pkgdir(PublishOrPerish), \"NEWS.md\"))","category":"page"},{"location":"#PublishOrPerish.jl","page":"Home","title":"PublishOrPerish.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"PublishOrPerish.jl is a Julia package that serves as a wrapper for the powerful Publish or Perish software. The package aims to streamline the process of accessing and utilizing Publish or Perish functionalities directly from Julia.","category":"page"},{"location":"#Features","page":"Home","title":"Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Seamless Integration: Easily integrate with Publish or Perish, a leading citation analysis tool for academic and scientific research.\nSimplified API: Abstracts away complexities, providing a straightforward API to access and leverage Publish or Perish's extensive capabilities.\nAutomated Retrieval: Retrieve publication metrics, citation data, and more with ease, all directly from your Julia environment.","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the repository. Make sure to follow the guidelines outlined in the CONTRIBUTING.md file.","category":"page"},{"location":"#TODO-List","page":"Home","title":"TODO List","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For an overview of pending tasks, improvements, and future plans for the ModelSelectionGUI package, please refer to the TODO.md file.","category":"page"},{"location":"#License","page":"Home","title":"License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is licensed under the MIT License.","category":"page"}]
}
