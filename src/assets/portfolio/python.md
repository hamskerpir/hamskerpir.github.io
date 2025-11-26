My ~~native~~ primary programming language.  
Tl;dr: love it.

My focus is on **Modern Python** heavily leveraging **async/await**, strict **static typing** (with `mypy`) and also
keep code maintainable and clean.

I'm trying to keep version of python up-to-date with the latest stable (and highly-adopted by community) release.

I worked on several very interesting projects using Python:
# Seznam.cz
___
- <i>Migrated from python 3.7 to 3.11</i>, which brought significant performance (<b>30% speedup</b>).
- <i>Added typing system with generics</i>, due to big codebase without types it was hard to maintain and add new features,
  so it <b>decreased onboarding time for new developers</b>.
- <i>Extended AirflowPodOperator</i> to support custom sidecars for media processing tasks, which allowed us to parallelize
  encoding and brought <b>massive (up to 70%) performance improvements</b>.

# Enverus
___
- I  <i>was lobbying a FastAPI</i> as framework for new services, that <b>saved a development time</b> and made 
    developers happier.

# Heureka.cz
___
- <i>Created a boilerplate</i> of FastAPI microservice that includes best practices, CI/CD pipelines, logging,
  monitoring and alerting setup, which <b>decreased bootstrapping time by 2-3 days</b>
- <i>Designed and implemented an ETL pipeline</i> that could sync category tree from old monolithic database to new
  microservice-scoped database, which <b>improved data-governance</b> and <b>data retrieval speed by 20%</b> with the
  fact that this distributed load from monolith to microservices.
