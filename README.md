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

Sudden stopping of the docker:

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

Run a command in the server side running container: [https://docs.docker.com/engine/reference/commandline/exec/]

```sh
docker exec -it api /bin/bash
```

Install composer inside the docker machine:

```sh
Run composer install
```

Run a command in the client side running container: [https://docs.docker.com/engine/reference/commandline/exec/]

```sh
docker exec -it client /bin/bash
```


### Application Urls

Server url: [http://localhost:8000/tree]

Client url: [http://localhost:4200/]

(Use these urls only after docker-compose is completely up and running)


### Working

Tree listing:
    - The application will refresh and build trees automatically.

Create a tree node:
    - Without selecting a node from tree listing, input a node name directly in the 'Add Node' input textbox.
    - Click 'Add' button to save it.

Create one child node:
    - Select one node by clicking a node in the tree listing. 
    - The selected node will be shown in the 'Update node' input textbox.
    - Input a node name into the 'Add Node' input textbox.
    - Click 'Add' button to save it. 

Update one node:
    - Select one node by clicking a node in the tree listing. 
    - The selected node will be shown in the 'Update node' input textbox.
    - Change the node name in the 'Update Node' input textbox.
    - Click 'Update' button to change it.

Remove one node:
    - Select one node by clicking a node in the tree listing. 
    - The selected node will be shown in the 'Update node' input textbox.
    - Click 'Remove' button to delete it.