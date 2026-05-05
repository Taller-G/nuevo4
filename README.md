# Boiler Post 1HS

## Description
This project is a boilerplate template for a web application based on Clean Architecture principles using HTML, CSS, and JavaScript.

## Setup Instructions
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies (this project does not include any by default)

## Clean Architecture Layers
- **Domain**: Contains business rules and logic.
- **Application**: Orchestrates domain objects to fulfill use cases.
- **Infrastructure**: Implements interfaces defined in domain/application, handling I/O operations.
- **Interfaces**: Entry points into the application, managing inputs and outputs between the outside world and the application.