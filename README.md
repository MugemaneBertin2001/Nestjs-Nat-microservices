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
Docker is a platform for containerizing applications to ensure consistency across different environments.

![Docker Logo](https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png)

### NATS
NATS is a high-performance messaging system for cloud-native applications and microservices architectures.

![NATS Logo](https://nats.io/img/logos/nats-horizontal-color.png)

## Project Structure

This project includes the following microservices and components:
- **`http-api-gateway`**: Handles routing and serves as the entry point for the microservices.
- **`users-microservice`**: Manages user-related operations.
- **`payments-microservice`**: Handles payment processing.

## Running the Project Locally

1. **Ensure Docker and Docker Compose are installed** on your machine.

2. **Build and start all services** (including microservices, MySQL, and NATS) with Docker Compose:
    ```bash
    docker-compose up --build
    ```
    This command will spin up the `http-api-gateway`, `users-microservice`, `payments-microservice`, as well as the MySQL and NATS services.

3. **Verify the setup** by checking the logs and ensuring that all services are running correctly.

## Conclusion

This setup provides a complete microservice architecture using NestJS, MySQL, Docker, and NATS. Customize and extend it to fit your specific application requirements.

## License

[MIT](LICENSE)
