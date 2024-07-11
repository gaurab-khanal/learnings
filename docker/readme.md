# DOCKER

- Docker comes to make life of developer easy by making an isolated environment to install dependencies and run code in it.

## Days before docker

All the application that are deployed are on cloud servers. One server could handle only one application at that time.
Suppose you bought one server and deployed your code there.
Again you want to deploy another app. Previous server could handle another app as well but it can't do so.
To solve this problem Virtual machines were developed.

## Virtual Machines

    - It is a virtual emulation of physical computer.
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
        _____________Hypervisor_________________
        ___________Hardware/Infrastructure_____