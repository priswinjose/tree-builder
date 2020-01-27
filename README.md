# Tree Builder

### Application frameworks

Backend - Symfony CLI version v4.12.3

Frontend - Angular CLI version 8.3.23


### Docker
Tree builder is very easy to install and deploy using a Docker container.

Builds the containers for a service: [https://docs.docker.com/compose/reference/up/]

```sh
docker-compose up
```

Stopping the docker:

```sh
ctrl + c
```

Starts the containers in the background and leaves them running (daemon mode): [https://docs.docker.com/compose/reference/up/]

```sh
docker-compose up -d
```

Shutdown the containers: [https://docs.docker.com/compose/reference/down/]

```sh
docker-compose down
```

List all running containers: [https://docs.docker.com/engine/reference/commandline/ps/]

```sh
docker ps -a
```

Run a command in a running container: [https://docs.docker.com/engine/reference/commandline/exec/]

```sh
docker exec -it api /bin/bash
```

Install composer inside the docker machine:

```sh
Run composer install
```
