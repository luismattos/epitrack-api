# Epitrack API

<p align="right">
  <!-- Technologies -->
  <a href="https://jestjs.io" target="_blank">
    <img src="https://img.shields.io/badge/Jest-29.7.0-C21325?style=flat&logo=jest&logoColor=white" alt="Jest" />
  </a>
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/NestJS-10.3.3-EA2845?style=flat&logo=nestjs&logoColor=white" alt="NestJS" />
  </a>
  <a href="https://nodejs.org" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-20.11.1-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" />
  </a>
  <br>
  <a href="https://pnpm.io" target="_blank">
    <img src="https://img.shields.io/badge/pnpm-8.15.4-F69220?style=flat&logo=pnpm&logoColor=white" alt="pnpm" />
  </a>
  <a href="https://www.postgresql.org" target="_blank">
    <img src="https://img.shields.io/badge/PostgreSQL-16.2-336791?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </a>
  <a href="https://www.prisma.io" target="_blank">
    <img src="https://img.shields.io/badge/Prisma-5.10.2-2D3748?style=flat&logo=prisma&logoColor=white" alt="Prisma" />
  </a>
  <br>
  <a href="https://www.passportjs.org" target="_blank">
    <img src="https://img.shields.io/badge/Passport.js-0.7.0-34E27A?style=flat&logo=passport&logoColor=white" alt="Passport.js" />
  </a>
  <a href="https://novu.co" target="_blank">
    <img src="https://img.shields.io/badge/Novu-0.19.0-7C3AED?style=flat&logo=novu&logoColor=white" alt="Novu" />
  </a>
  <a href="https://www.typescriptlang.org" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-5.3.3-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
</p>

<p align="right">
  <!-- Architecture & Design -->
  <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank">
    <img src="https://img.shields.io/badge/Architecture-Clean%20Architecture-2496ED?style=flat" alt="Clean Architecture" />
  </a>
  <a href="https://martinfowler.com/bliki/DomainDrivenDesign.html" target="_blank">
    <img src="https://img.shields.io/badge/Design-DDD-FFC107?style=flat" alt="DDD" />
  </a>
  <a href="https://martinfowler.com/bliki/TestDrivenDevelopment.html" target="_blank">
    <img src="https://img.shields.io/badge/Development-TDD-E91E63?style=flat" alt="TDD" />
  </a>
  <br>
  <a href="https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html" target="_blank">
    <img src="https://img.shields.io/badge/Principles-SOLID-4CAF50?style=flat" alt="SOLID" />
  </a>
</p>

<p align="right">
  <!-- License -->
  <a href="https://opensource.org/license/mit" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" />
  </a>
</p>

## Description

Epitrack is a web application developed as a Final Year Project (TCC) in Computer Science, focused on helping people with epilepsy track and manage their episodes. The project aims to provide a personal solution for monitoring seizures and medication schedules, with a focus on user privacy and ease of use.

## Objectives

- Develop a secure and user-friendly platform for personal epilepsy episode tracking
- Implement real-time notifications for medication reminders
- Create a simple and effective way to record and analyze episodes
- Apply modern software development practices and architecture patterns
- Demonstrate the practical application of web development concepts
- Document the development process and technical decisions

## Architecture and Development Practices

### Clean Architecture
- Clear separation of responsibilities in layers:
  - Domain Layer: Business entities and rules
  - Application Layer: Use cases and application services
  - Infrastructure Layer: External services and implementations
- Framework independence through interfaces and abstractions
- Testability through dependency injection and mocking
- UI independence through clear boundaries
- Database independence through repository pattern

### SOLID
- Single Responsibility Principle (SRP): Each class has one reason to change
- Open/Closed Principle (OCP): Extensible through inheritance and composition
- Liskov Substitution Principle (LSP): Subtypes are substitutable for their base types
- Interface Segregation Principle (ISP): Clients only depend on methods they use
- Dependency Inversion Principle (DIP): High-level modules don't depend on low-level modules

### Domain-Driven Design (DDD)
- Rich domain modeling with clear boundaries
- Ubiquitous Language in code and documentation
- Bounded Contexts for different subdomains
- Aggregates for consistency boundaries
- Value Objects for immutable concepts
- Entities for mutable domain objects

### Test-Driven Development (TDD)
- Test-driven development cycle
- Unit tests for business logic
- Integration tests for external services
- End-to-end tests for critical flows
- Test coverage monitoring

## Main Features

### User Management
- Secure authentication
- User profiles and preferences
- Privacy settings

### Episode Tracking
- Record seizure episodes
- Track triggers and symptoms
- Basic data visualization

### Medication Management
- Medication schedule tracking
- Reminder notifications
- Dosage history
- Treatment effectiveness tracking

### Notification System
- Medication reminders
- Custom notification preferences
- Multiple channels (email, push)

## Future Features

The following features are planned for future releases:

### Healthcare Integration
- Share data with providers
- Export medical reports
- Emergency contact system
- Treatment plan tracking

### Advanced Analytics
- Detailed episode analysis
- Pattern recognition
- Treatment effectiveness reports
- Trigger analysis

### Social Features
- Community support
- Anonymous sharing
- Experience exchange
- Resource sharing

## Technology Stack

### Backend
- NestJS (Node.js Framework)
  - Modular architecture
  - Dependency injection
  - Middleware support
  - OpenAPI documentation
- Prisma (ORM)
  - Type-safe database access
  - Migration management
  - Schema validation
- PostgreSQL (Database)
  - Relational data storage
  - JSON support
  - Full-text search
- Passport.js (Authentication)
  - JWT strategy
  - Local strategy
  - OAuth2 support
- Novu (Notification System)
  - Multi-channel notifications
  - Template management
  - Real-time updates
  - Analytics
- Jest (Testing)
  - Unit testing
  - Integration testing
  - E2E testing
  - Coverage reports

### Frontend (Separate Repository)
- React
  - Component-based architecture
  - Hooks for state management
  - Context API
- TypeScript
  - Static typing
  - Interface definitions
  - Type safety
- Tailwind CSS
  - Utility-first styling
  - Responsive design
  - Custom components
- React Query
  - Server state management
  - Caching
  - Real-time updates
- Vitest (Testing)
  - Component testing
  - Integration testing
  - E2E testing

## Project Structure

```
src/
├── core/                    # Core domain and business logic
│   ├── domain/             # Domain entities and rules
│   │   ├── entities/       # User, Episode, Medication entities
│   │   └── interfaces/     # Repository and service interfaces
│   └── application/        # Use cases and services
│       ├── services/       # Business logic services
│       └── dtos/          # Data transfer objects
├── modules/                # Feature modules
│   ├── auth/              # Authentication module
│   │   ├── controllers/   # Auth endpoints
│   │   └── guards/        # Auth guards
│   ├── users/             # User management
│   │   ├── controllers/   # User endpoints
│   │   └── services/      # User services
│   ├── episodes/          # Episode tracking
│   │   ├── controllers/   # Episode endpoints
│   │   └── services/      # Episode services
│   └── medications/       # Medication management
│       ├── controllers/   # Medication endpoints
│       ├── services/      # Medication services
│       └── templates/     # Notification templates
├── shared/                # Shared utilities
│   ├── decorators/        # Custom decorators
│   ├── utils/            # Helper functions
│   └── constants/        # Shared constants
└── tests/                # Test suites
    ├── unit/             # Unit tests
    └── e2e/             # End-to-end tests
```

## Environment Setup

```bash
# Install dependencies
$ pnpm install

# Configure environment variables
$ cp .env.example .env

# Start Docker containers (PostgreSQL, Redis, MongoDB, and Novu)
$ docker-compose up -d

# Run database migrations
$ pnpm prisma migrate dev

# Run tests
$ pnpm test

# Start in development mode
$ pnpm run start:dev
```

### Docker Services

The project uses Docker Compose to manage the following services:

- **PostgreSQL**: Main database
  - Port: 5432
  - Data persisted in `postgres_data` volume

- **Novu Services**:
  - **Redis**: Cache and queues
    - Port: 6379
    - Data persisted in `redis_data` volume
  - **MongoDB**: Notification storage
    - Port: 27017
    - Data persisted in `mongodb_data` volume
  - **Novu API**: Core notification service
    - Port: 3000
    - REST API endpoints
  - **Novu Worker**: Background processing
    - Processes notification queues
    - Handles retries and scheduling
  - **Novu WebSocket**: Real-time notifications
    - Port: 3002
    - WebSocket connections
  - **Novu Dashboard**: Admin interface
    - Port: 4000
    - Manage notifications and templates

### Environment Variables

The following environment variables need to be configured in the `env` file:

```env
# PostgreSQL
POSTGRES_USER=epitrack
POSTGRES_PASSWORD=your_secure_password
POSTGRES_DB=epitrack

# Novu MongoDB
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=secret
MONGO_URL=mongodb://root:secret@mongodb:27017/novu-db?authSource=admin

# Novu Core
NODE_ENV=local
API_PORT=3000
WS_PORT=3002
JWT_SECRET=your-secret
STORE_ENCRYPTION_KEY=<32_CHAR_ENCRYPTION_KEY>
NOVU_SECRET_KEY=<RANDOM_GENERATED_SECRET_KEY>

# Novu URLs
HOST_NAME=http://localhost
API_ROOT_URL=http://localhost:3000
FRONT_BASE_URL=http://localhost:4200
VITE_API_HOSTNAME=http://localhost:3000
VITE_WEBSOCKET_HOSTNAME=ws://localhost:3002

# Redis
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=

# AWS S3 (optional)
S3_LOCAL_STACK=http://localhost:4566
S3_BUCKET_NAME=novu-local
S3_REGION=us-east-1
AWS_ACCESS_KEY_ID=test
AWS_SECRET_ACCESS_KEY=test

# SMTP (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SMTP_PASSWORD=your_app_password
```

## Development Workflow

### Git Flow
- `main`: Main branch
- `feature/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates

### Commits
Following [Conventional Commits](https://www.conventionalcommits.org/):
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: General tasks

Example:
```
feat(auth): implement user registration
fix(medications): correct reminder timezone
docs(readme): update project structure
```

### Issues
- Clearly describe the problem/feature
- Assign basic labels
- Define milestones for deliveries

Labels:
- `bug`: Reported issues
- `feature`: New features
- `documentation`: Documentation updates
- `priority:high`: High priority

### Pull Requests
- Describe changes
- Keep PRs focused
- Ensure tests pass

PR Template:
```markdown
## Description
[Description of changes]

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Code follows project standards
```

### GitHub Projects
Using GitHub Projects for organization:

#### Columns
1. **To Do**
   - Next tasks
   - Planned features

2. **In Progress**
   - Tasks in development
   - PRs under review

3. **Done**
   - Merged PRs
   - Completed features

#### Milestones
- MVP deliveries
- Phase objectives

### Code Review
- Review changes
- Check quality
- Validate documentation

### CI/CD
- GitHub Actions for automation
- Lint and tests on each PR
- Automatic build

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Academic Citation

If you use this work in your research or academic work, please cite it as follows:

```bibtex
@software{epitrack2025,
  author = {Luis Paulo Barcia de Mattos},
  orcid = {0000-0002-2372-0524},
  title = {Epitrack: Epilepsy Tracking System},
  year = {2025},
  publisher = {GitHub},
  url = {https://github.com/yourusername/epitrack},
  note = {Final Year Project in Computer Science}
}
```

For other citation formats or additional information, please refer to the [CITATION.cff](CITATION.cff) file in the repository root.
