# DOCKER

- Docker comes to make life of developer easy by making an isolated environment to install dependencies and run code in it.

## Days before docker

All the application that are deployed are on cloud servers. One server could handle only one application at that time.
Suppose you bought one server and deployed your code there.
Again you want to deploy another app. Previous server could handle another app as well but it can't do so.
To solve this problem Virtual machines were developed.

## Virtual Machines

    - It is a virtual emulation of physical computer.
    - VM is an entire operating system with its own kernel, hardware drivers, programs, and applications
    - Could deploy as many application as server can hold by creating new VMs.
    - It runs an OS and app like physical computer isolating from real physical computer.
    - With each VMs created it requires new OS which need its own hardware resources to be allocated.
    - Migration might be consuming.
    - One VM may have another version of dependencies install but application may require other version to run.

## Other challenges

    - App may run on one machine but not on other due to dependencies version mismatching.
    - Settingup large project is hard and its time consuming manually. Docker makes it much more easier with just one command.

# Above problem can be solved by docker.

## Problem of Virtual machine can be solved by container.

- With containerization one can run many application within one operating system only unlike VM we need to install more than one OS for different application.

### Container

    - Something like VMs but dont require extra OS. It can run many application within one OS in an isolating manner.
    - Con

### Container Vs VMs.

    - Container runs different app on single OS and all of these application is managed using container engine which is on top of OS.
    - Have structure like

    -              App1 |    App2
        ___________Container Engine_________
        ________________OS__________________
        ___________Hardware/Infrastructure___

    - VMs runs different app on different OS and resource allocation is done by Hypervisor to different OS from Hardware/Infrastructure.
    - Have Structure like
                     App1 |    App2
                      OS1       OS2
        ___________Hardware/Infrastructure_____

# Docker

- It is a container platform which helps to create container and deploy , build,test it quickly and run application in an isolated environment.
- Container itself is an isolated environment.

## Docker Parts
- Docker Runtime
    - Helps to start and stop containers.
    - Types 
        - runc -> Work with OS to start and stop the containers.
        - containerd (CNCF project) -> high level container runtime and manages runc as well container. Focuses more on networking(pulling images, exposing port with host OS).

- Docker Engine
    - Used to interact with Docker.
    - Parts: 
        - Docker Daemon -> Runs on Host machine as a background process, listens for docker API request, process them and manages containetes based on request. 
            
            - Steps: Docker CLI -> Rest API -> Docker Server -> Docker daemon -> Container Runtime -> Manages Containers based on request from Docker CLI. 

- Orchestration
    - Automated management of containerized applications.
    - Includes deploying, scaling, networking, and monitoring containers.
    - If Docker is running more than one container of v1 app then
    after a while you want to update all container to v2 app.
    - Stop one and update then go for other. This is done manually.
    - This can be automated by Orchestration.
    - Docker swarm, Kubernetes can be used to do so.

## Docker Image
 - Executable software package that includes everything needed to run a piece of software, including the code, runtime, libraries, environment variables and configuration files.
 - Image can be created using docker file.
 - Running instance of image is known as containers.
 - Image can be shared with other.
 - Other can download and run image then it becomes containers.


# Docker commands

### Download and run docker image to create container.
```
docker run hello-world
```

### Download and run image to create container in interactive environment(dont exit out of it)
```
docker run -it ubuntu
```

### Show all running containers
```
docker ps
```
### Downloading Images
```
docker pull mongo
```
### Downloading specific version of image
```
docker pull mongo:2.3
```
### Show all images
```
docker images
```
### Delete image
```
docker rmi mongo
```

### Run same container in multiple terminal
```
docker container exec -it <container-tag> bash
```

### Stop container
```
docker stop <container-id>
```

### Show all stopped container 
```
docker ps -a
```

### Gell all info about running container
```
docker inspect <container-id>
```

### logs of docker container
```
docker logs <container-id>
```
### Delete all containers
```
docker container prune -f
```
- -f means delete without confirmation
- prune means delete all the stopped containers

### Delete one stopped container
```
docker rm <container-id>
```

### Sometimes you need container to run for long time in background like servers then 
```
docker run -d <container-name>
```

### Accessing running container on host machine with port

## How image runs to become container?
- Every app need OS to run.
- In docker also it is same.
- Every image contains an OS, its a minimal version tailored for containerized environment.