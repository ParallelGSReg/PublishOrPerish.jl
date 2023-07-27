# News

```@eval
using Markdown, PublishOrPerish
Markdown.parse_file(joinpath(pkgdir(PublishOrPerish), "NEWS.md"))
```
