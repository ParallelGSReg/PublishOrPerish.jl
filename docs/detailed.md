# # ResearchAccPublishOrPerishelerator.jl Documentation

## Advanced usage
```julia
using PublishOrPerish

search(
    query = ["machine learning", "ai", "julia"],
    max = 50, 
    source = "pubmed", 
    method = "keywords", 
    outfile = "output.csv",
    username = "a_username",
    password = "a_password"
)
```

## Detailed documentation: 

```julia
search(
    query::Union{String, Vector{String}}; 
    max::Int = 100, 
    source::String = "pubmed", 
    method::String = "keywords", 
    outfile::String = "output.csv",
    username::String = "default",
    password::String = "default"
)
```

### Parameters
- `query::Union{String, Vector{String}}`: The search query, which can be a single string or a vector of strings for advanced queries.

### Optional parameters

- `max::Int64`: The maximum number of results to retrieve (default: 100).

- `source::String`: The source from which to perform the search. Possible values are `crossref,` `gsauthor,` `gscholar,` `gsciting,` `gsprofile,` `masv2,` `openalex,` `pubmed,` `scopus,` `semscholar,` and `wos` (default: `pubmed`).

- `method::String`: The search method to use. Possible values are `author,` `affiliation,` `citedid,` `field,` `issn,` `journal,` `title,` `keywords,` `years,` and `raw` (default: `keywords`).

- `outfile::String`: The name of the output file to store the search results in CSV format (default: `salida.csv`).

- `username::String`: The username for authentication (default: `default`).

- `password::String`: The password for authentication (default: `default`).
