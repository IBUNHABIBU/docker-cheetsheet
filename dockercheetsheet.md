Section 2

Running a docker container
`docker run <image-name> `
example
`docker run hello-world`

Overriding the default commands
`docker run hello-world echo hi there`
`docker run busybox ls` listing the files inside the container

Listing the currently running containers
`docker ps`

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

Running redis
`docker run redis`
`docker exec -it id redis-cli` to run redis-cli inside redis container. -it means that the cli will be enaled in channel and display the text output whether is error or something else in a nicely format.

To access full shell command line
`docker exec -it id sh`
`docker run -it busybox sh` the downside for this command is the chances are you are not going to run other process
remember to type contro+C or D or exit to exit

<!-- End of section 2 -->







