# William He's Personal Website

## Recent Updates

2020.06.18: Added Latex Support on Blog Posts

## Introduction

This repository contains source code of my Personal Blogger hosted on [willh.ml](https://willh.ml). The website uses [React](https://reactjs.org/) as Front-end and [Express](https://expressjs.com/) as Back-end. The CSS stylesheet is based heavily on [startbootstrap-agency](https://github.com/StartBootstrap/startbootstrap-agency).

The Routes are listed in [ROUTES.md](https://github.com/GitHubdeWill/website/blob/master/base/ROUTES.md).

## Features

- Markdown support for blog posts
- Dynamic project listings, feature project carousel and professional timeline configuration
- Upload Read-only blogposts using `git commit`
- Easily deployable using [node](https://nodejs.org/) or [pm2](https://pm2.keymetrics.io/)
- No Database setup needed

## Installation

### Pre-requisites

To install all dependencies, run the following command in `{project root}/base`:

```bash
$ npm install
```

### Production build

The production build of Reactjs portion is included in the repository so no further action is needed. To rebuild the react front-end, run the following command in `{project root}/base`:

```bash
$ npm run build
```

### Run the Production Server

You can use either `node` or `pm2` to run the server:

```bash
$ NODE_ENV=production; node {project root}/base/bin/www  # Or
$ NODE_ENV=production; pm2 {project root}/base/bin/www
```

### Development build

To build and watch over file changes and recompile, run the following two commands in `{project root}/base` in **two separate terminals** (Or use [tmux](https://github.com/tmux/tmux)). 

```bash
$ npm run build-dev  # Front-end
$ npm run start-dev  # Back-end
```

Alternatively, you can also use the following command to start a new tmux session with `dev-tmux-start.sh`.

## TODOs

- [x] Latex and Formula Support -- 6.18.2020
- [x] Link Generation for posts -- 6.19.2020
- [ ] Proper Router Setup
- [ ] Photo Gallery