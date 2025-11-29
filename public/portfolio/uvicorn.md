Gunicorn is a process manager role, which nowadays is handled by mighty and fury Kubernetes, so we was migrating
from it to Uvicorn standalone server.

# Seznam & Heureka.cz
___
- <i>Migrated several services from Gunicorn to Uvicorn</i>, which resulted in decreased dependency management,
  runtime complexity and <b>improved startup time by dozen of percent</b> and <b>better observability</b>