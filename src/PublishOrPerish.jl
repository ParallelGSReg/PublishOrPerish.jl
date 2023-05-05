module PublishOrPerish

	sources = ["crossref", "gsauthor", "gscholar", "gsciting", "gsprofile", 
		   "masv2", "openalex", "pubmed", "scopus", "semscholar", "wos"]

	methods = ["author", "affiliation", "citedid", "field", "issn", "journal", "title", "keywords", "years"]

	function search(
			query::AbstractString; 
			max::Int=100, 
			source::String="pubmed", 
			method::String="keywords", 
			outfile::String="salida.csv"
		)::Bool
	    max = 100
	    if !(source in sources) 
		    # FIXME throw exception
		    print("Invalid source. Given: $source, available sources $sources")
		    return false
	    end

	    if !(method in methods)
		    # FIXME throw exception
		    print("Invalid method. Given: $method, available methods $methods")
		    return false
	    end

	    source = "--$source"
	    method = "--$method"
	    #=
--author authorspec
--affiliation affiliation
--citedid id
--field fieldofstudy
--issn issn
--journal journalname
--title title
--keywords words
--years from-to
or:
--raw syntax    use native 'syntax' directly
	    =#
	    cmd_salida = `bin/pop8query --max=$max $source $method=\"$query\" $outfile`
	    cmd_bibtex= `bin/pop8query --max=$max $source $method=\"$query\" --format=bibtex $outfile.bib`
	    try
	    	output = read(run(cmd_salida), String)
	    	output = read(run(cmd_bibtex), String)
	    catch y
		print("Error: $y")
		if(isa(y, ProcessFailedException))
			return false 
		end
	    # run(::Base.AbstractCmd, ::Any...; wait) at process.jl:477
	    end
	    return true
	end

	export search

end
