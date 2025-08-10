
# DevOps Training Frontend

This is an Angular application for DevOps training, featuring pages for DevOps, Jenkins, Docker, AWS, Kubernetes, Ansible, and Git. Each page includes a placeholder for repository links and an image for the tool.

## Project Structure

- `src/app/pages/` — Contains standalone components for each DevOps tool
- `src/assets/images/` — Place PNG images for each tool here (see below)
- `Dockerfile` — Multi-stage build (Node + NGINX)
- `Dockerfile.single-stage` — Single-stage build (Node + http-server)
## Images for Tools

Add PNG images for each tool in `src/assets/images/` with these filenames:

- `devops.png`
- `jenkins.png`
- `docker.png`
- `aws.png`
- `k8s.png`
- `ansible.png`
- `git.png`

You can use official logos or open-source icons. The HTML for each page already references these filenames.

## Docker: Build & Run

### Multi-stage (NGINX)

Build:
```bash
docker build -t devops-training-frontend:multi-stage -f Dockerfile .
```
Run:
```bash
docker run -p 8080:80 devops-training-frontend:multi-stage
```
App will be available at http://localhost:8080

### Single-stage (http-server)

Build:
```bash
docker build -t devops-training-frontend:single-stage -f Dockerfile.single-stage .
```
Run:
```bash
docker run -p 8080:8080 devops-training-frontend:single-stage
```
App will be available at http://localhost:8080



## Development server

To start a local development server, run:

```bash
ng serve
```

Then open http://localhost:4200/

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```


## Building

To build the project:

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
