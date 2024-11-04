***** My target is to learn 5 tutorials per day ***************

Running a docker container

`docker run <image-name> `

example
`docker run hello-world`

Overriding the default commands

`docker run hello-world echo hi there`

`docker run busybox ls` listing the files inside the container

Listing the currently running containers

`docker ps`

listing all images

`docker images`

To see all containers that we have ever created

`docker ps --all`

Creating a docker image

`docker create hello-world`

Starting a container

`docker start -a id` -a is for watching the output from container and print it out. Note the same command is used to restart the exited container.

To delete all containers

`docker system prune`

To get the logs of all records of a container

`docker logs id`

How to stop a running container

`docker stop id`

`docker kill id` when stop command failed to work

Note: There is container id and image id

Running redis

`docker run redis`

`docker exec -it id redis-cli` to run redis-cli inside redis container. -it means that the cli will be enaled in channel and display the text output whether is error or something else in a nicely format.

To access full shell command line

`docker exec -it id sh`

`docker run -it busybox sh` the downside for this command is the chances are you are not going to run other process
remember to type contro+C or D or exit to exit

<-- End of section 2 -->

creating an image from scratch

set of instruction is in the docker file

then 

`docker build .`

ended at the episode 034 the build process in details

tagging an image

`docker build -t id/project-name:latest .`  -t means tag

example

`docker build -t doe/redis:latest .`


Manual image generation with docker commit

`docker run -it alpine sh`

run commands

then docker commit 

`docker commit -c 'CMD["redis-server"]' id


container maping

`docker run -p 8080:8080 ibunhabibu/visits`

Docker compose allow to work with multiple containers at the same time

running the image

`docker-compose up`

running and building the image

`docker-compose up --build`

run containers in background

`docker-compose up -d`

stopping containers in docker-compose

`docker-compose down`

Restart policies

"no", always, on-failure, unless-stopped

status with docker compose 

`docker-compose ps`



### *********** Section 6 ********************************************

#### *********** Custome docker file ***********************************

Dockerfile.dev

`docker build -f Dockerfile.dev .`

`docker build -f Dockerfile.dev -t ibunhabibu/frontend:latest .`


Docker volume

 `docker run -p 5173:5173 -v /app/node_modules -v $(pwd):/app ibunhabibu/frontend`

 docker run -p 5173:5173 -v /app/node_modules -v $(pwd):/app  7277a68c084e      
docker: invalid reference format.
See 'docker run --help'.

Solution 
[link in stack overfow](https://stackoverflow.com/questions/47435418/docker-command-returns-invalid-reference-format)



 `docker run -p 5173:5173 -v "/app/node_modules" -v "$(pwd):/app" ibunhabibu/frontend`