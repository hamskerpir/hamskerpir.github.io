Let's start with package management in Python.

# Package Managers

- `pip` is dead, rest in peace with honer of mine, old friend.
- `conda` was useful, now too heavy for simple tasks, except datascience, that anyway trying to be transparent.
- `poetry` was a king of package management, and is highly adopted.
- `uv` is a newcomer, and took the throne from poetry, includes Python distribution management, venvs, and package
  management, tool management, all in one, with a simple CLI and powered by Rust speed. Compiling to bytecode, have
  global cache for packets, a dream...

now lets tools I'm using in my daily Python development.

# Formatters

- `black` is the most popular code formatter, I prefer use it in combination with `ruff` linter.
- `ruff` is a fast linter and code fixer, can also do some formatting tasks
- `isort` is a dedicated import sorter, can be used alongside black for better import organization.
- `pytest` is a popular testing framework for Python, can be used with tox for automated testing across different
  environments.
- `coverage.py` measures code coverage of Python programs, can be used with pytest to ensure
- `mypy` is a static type checker for Python, helps catch type-related errors before runtime.

