# NestJS-NATS-Microservices

This project demonstrates how to create a microservice architecture using NestJS, MySQL, Docker, and NATS.

## Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**
- **Docker**
- **Docker Compose**

## Tools Overview

### NestJS
NestJS is a progressive Node.js framework for building efficient and scalable server-side applications.

![NestJS Logo](https://docs.nestjs.com/assets/logo-small.svg)

### MySQL
MySQL is a relational database management system based on SQL – Structured Query Language.

![MySQL Logo](https://www.mysql.com/common/logos/logo-mysql-170x115.png)

### Docker
Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers.

![Docker Logo](https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png)

### NATS
NATS is a simple, secure, and high-performance open-source messaging system for cloud-native applications, IoT messaging, and microservices architectures.

![NATS Logo](https://nats.io/img/logos/nats-horizontal-color.png)

## Project Structure

This project includes the following microservices and components:
- **`http-api-gateway`**: Handles routing and serves as the entry point for the microservices.
- **`users-microservice`**: Manages user-related operations.
- **`payments-microservice`**: Handles payment processing.

## Running the Project Locally

### Step 1: Set Up NestJS Projects

1. **Initialize each NestJS project** using the NestJS CLI.
2. **Install Required Dependencies** in each project using npm.

### Step 2: Configure Docker and NATS

1. **Create `docker-compose.yml`** in the root of your project to define MySQL and NATS services.
2. **Run Docker Compose** to start the containers.

### Step 3: Configure Each Microservice

1. **Update Configuration** in each microservice to include MySQL and NATS settings.
2. **Create Controllers and Services** to handle business logic and NATS events.

### Step 4: Running the Application

1. **Start each NestJS application** by running the respective start scripts.
2. **Send Test Events** using a NATS client to verify communication between microservices.

## Conclusion

This setup provides a basic microservice architecture using NestJS, MySQL, Docker, and NATS. Customize the application as needed to fit your specific requirements.

## License

[MIT](LICENSE)
