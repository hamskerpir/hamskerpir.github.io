My secondary programming language, to which I have very warm feelings.

The power of golang - write fast and execute blazingly fast.
I love many approaches Google took when designing the language:
- interfaces over inheritance,
- 1 formatter, 1 package management tool with repository as git.
- No runtime dependencies, just a single binary.

I was working in different open-source and commercial projects with Go:
Open-source:
- Kubernetes
- NATS Server, cli
- yq

# Seznam.cz
___
- <i>Rewrote parsing service from Python to Go</i>, which resulted in <b>5x performance improvement</b> and
  <b>reduced infrastructure costs by 40%</b>.

# Heureka.cz
- <i>Rewrote authorization service</i> added request coalescing and caching, which resulted in
  <b>decreasing request time from 400us to 5us (for 99p)</b>, which led to extreme decrease in network volume and 
  <b>reduced load on databases</b>.
