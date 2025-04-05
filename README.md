# SIT737 Week 5D - Distinction Task

## Description
This is a simple Express.js application containerized using Docker and pushed to Google Container Registry.

## Steps Covered
- Node.js setup
- Dockerized application
- GitHub integration
- Pushed image to GCR

## How to Run
```bash
docker build -t 52d-web .
docker run -p 3000:3000 52d-web
