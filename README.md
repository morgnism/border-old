# Border Dev Blog

Sanity developer blog built with NextJS. The app is a monorepo built with lerna and yarn workspaces.

## Setup and Install

Install all dependencies for both app projects from project root:

```bash
yarn
```

## Running the app

Run the `web` and `studio` projects in parrallel with:

```bash
yarn run dev
```

Or just the `web`:

```bash
yarn run start-web
```

## Builds and Deploys

Each app project can be run similarly to running each one individually with:

```bash
yarn run build-web
```

### Deploying the apps

Both apps are deployed to Netlify, and are triggered with successful pushes to the `main` branch.
