# Commit Message Guidelines

## Commit Format

```
<header>
<BLANK LINE>
<body>
```

### Header

Mandatory, and should follow this rule :

```
<type>: <short summary>
```

Type can be one of these :

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

Summary should be written in present tense

### Body

Just like summary, write in present tense, and explain the change you did in the commit

This is a note for myself to learn about GitHub

> Taken from https://github.com/angular/angular/blob/main/CONTRIBUTING.md
