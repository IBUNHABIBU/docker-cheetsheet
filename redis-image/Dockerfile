# Use an existing docker image as base
FROM alpine

# Download and install a dependency
RUN apk add --update redis
RUN apk add --update gcc

# if you repeat the build command, it will use the cache from the previous 
# build unless the command has changed or the order of the commands has changed

# Tell the image what to do when it starts as a container
CMD ["redis-server"]