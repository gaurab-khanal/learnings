# AWS

- It is a cloud service provided by Amazon.

- It can help you with: 
    - Renting servers
    - Manage domains
    - Upload files(mp4, pdf, and so on)
    - Autoscale servers
    - Create k8s clusters

## Services

- EC2
    - VMs on AWS are called EC2 Servers.
    - Stands fo Elastic Compute Version 2.
    - Elastic -> Can increase/decresse the sixe of machine
    - Compute -> Machine/Computer
    
## Connect with EC2 machine
- Go to the folder where you have your key security file
- Run the cmd:
- Syntax:
    ```
    ssh -i filename machine@ipofmachine(public ipv4)
    ```
-   Example:
    ```
    ssh -i learning01password.pem ubuntu@3.27.59.102

    ```
- You may face error while running above cmd.
- Run below cmd to fix(make keypasswordfile restrictive)
    ```
    chmod 700 learning01password.pem
    ```

# NGNIX
- A opensource software used for web serving, reverse proxying, caching, load balancing, media streaming and more.
- By default nginx runs on port 80

## Installation
```
sudo apt update
sudo apt install nginx
```

### nginx.conf

```
events {

}

http {
    server {
        listen 80;
        server_name _;

        location /{
            return 200 "Hello From nginx conf file";
        }
    }
}
```

### Reload 
```
sudo nginx -s reload
```