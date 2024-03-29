using Documenter, DocumenterTools
using PublishOrPerish

# The DOCSARGS environment variable can be used to pass additional arguments to make.jl.
# This is useful on CI, if you need to change the behavior of the build slightly but you
# can not change the .travis.yml or make.jl scripts any more (e.g. for a tag build).
if haskey(ENV, "DOCSARGS")
    for arg in split(ENV["DOCSARGS"])
        (arg in ARGS) || push!(ARGS, arg)
    end
end

makedocs(
    format = Documenter.HTML(
        prettyurls = true,
        assets = ["assets/favicon.ico"],
    ),
    source = "src",
    build   = "build",
    clean   = true,
    modules = [PublishOrPerish],
    sitename = "PublishOrPerish.jl",
    pages = [
        "Home" => "index.md",
        "Getting Started" => "start.md",
        "Usage" => "usage.md",
        "Contributing" => "contributing.md",
        "News" => "news.md",
        "Todo" => "todo.md",
        "License" => "license.md",
    ],
)

deploydocs(
    repo = "github.com/ParallelGSReg/PublishOrPerish.jl.git",
    versions = nothing,
)
