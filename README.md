# SIT737 Week 5D - Distinction Task

## Description
# SIT737 Week 5D Distinction Task - Node.js Dockerized Web App Deployment
## Project Overview
This project showcases the full DevOps workflow by developing, containerizing, and deploying a
simple Node.js web application. The objective is to give students practical experience with modern
development tools and platforms such as Docker, GitHub, and Google Cloud Platform (GCP). By
completing this task, students will understand how to structure a Node.js application, use version
control effectively, build and run containers, and deploy an app to the cloud.
The application is created using the Express.js framework, which allows for quick setup of a web
server. This app is then packaged into a Docker container to ensure portability and consistency
across environments. Finally, we use Google Cloud services to deploy the app in a production-like
environment.

## Steps Covered
- Node.js setup
- Dockerized application
- GitHub integration
- Pushed image to GCR

## How to Run
```bash
docker build -t 52d-web .
docker run -p 3000:3000 52d-web
