<div align="center">
  <img src="./Frontend/public/img/branding/nav-logo-home.svg" alt="Yuume" width="280" />

  <p><strong>Every mind becomes a world.</strong></p>
  <p>
    An AI-powered multiplayer game where a player's inner world
    becomes a living, evolving dream.
  </p>

  <p>
    <a href="https://github.com/Nicole2137/Yuume/actions/workflows/frontend-ci.yml">
      <img src="https://github.com/Nicole2137/Yuume/actions/workflows/frontend-ci.yml/badge.svg" alt="Frontend CI" />
    </a>
    <a href="https://github.com/Nicole2137/Yuume/actions/workflows/backend-ci.yml">
      <img src="https://github.com/Nicole2137/Yuume/actions/workflows/backend-ci.yml/badge.svg" alt="Backend CI" />
    </a>
    <img src="https://img.shields.io/badge/status-active%20development-c4a9ef" alt="Project status: active development" />
  </p>

  <p>
    <a href="#about">About</a> ·
    <a href="#features">Features</a> ·
    <a href="#tech-stack">Tech stack</a> ·
    <a href="#getting-started">Getting started</a> ·
    <a href="#testing">Testing</a>
  </p>
</div>

<img src="./Frontend/public/img/animations/login-background.png" alt="Yuume's soft, dreamlike visual direction" width="100%" />

## About

Yuume is an AI-powered multiplayer game built around one idea: every person
dreams differently because every person is different.

The game interprets a player's reflections, emotions, choices, and recurring
themes to build an evolving in-game psychological profile. AI systems use that
profile to generate a personal dream — from its atmosphere, locations, and
characters to its events and gameplay. The result is a world that reflects the
person behind the player and changes as they do.

Multiplayer begins when individual dreams intersect. Players can enter worlds
shaped by one another, creating shared experiences influenced by their combined
profiles, decisions, and interactions.

The project pairs a carefully crafted, responsive interface with a small
ASP.NET Core API. Its current implementation focuses on the visual foundation,
authentication views, responsive navigation, and newsletter subscriptions.

> [!NOTE]
> Yuume is in active development. The home and authentication experiences are
> implemented. AI profile analysis, dream generation, and multiplayer gameplay
> are the core product direction and are still on the roadmap.

## Features

### Available now

- Responsive landing page with an animated, atmospheric hero
- Dedicated login, registration, and password-reset views
- Desktop and mobile navigation
- Newsletter signup backed by the Brevo API
- Accessible form labels, keyboard-friendly controls, and responsive layouts
- Frontend unit tests plus backend unit and integration tests
- Separate GitHub Actions pipelines for the frontend and backend

### Core gameplay vision

- **A dream shaped by you** — reflections, emotions, and choices become input
  for an evolving psychological model of the player
- **AI-generated worlds** — environments, characters, stories, and encounters
  are created to mirror the player's personality and inner state
- **Adaptive gameplay** — the dream changes over time in response to new
  thoughts, decisions, and behavior
- **Multiplayer dream convergence** — individual worlds can overlap and form a
  shared dream influenced by everyone inside it
- **A reflective journal** — writing is not just stored; it helps shape the
  world the player later explores
- **Gallery, community, and shop** — additional ways to discover, share, and
  support the Yuume universe

## Tech stack

| Area | Technologies |
| --- | --- |
| Frontend | Next.js 16, React 19, TypeScript 6, Sass Modules |
| UI | Motion, Lucide React, responsive custom components |
| Backend | ASP.NET Core 10, controller-based REST API, `HttpClient` |
| External service | Brevo Contacts API |
| Frontend tests | Vitest, Testing Library, jsdom |
| Backend tests | xUnit v3, ASP.NET Core integration testing, MockHttp |
| Automation | GitHub Actions, Dependabot |

## Core gameplay loop

```mermaid
flowchart TB
    A["Player input"] --> B["Psychological profile"]
    B --> C["AI dream generation"]
    C --> D["Personal dream"]
    D -->|"Actions update profile"| B
    D --> E["Dream convergence"]
    F["Another player's dream"] --> E
    E --> G["Shared multiplayer world"]
```

Player input includes reflections, emotions, choices, and recurring themes.
The AI uses the resulting profile to shape the dream's world, story, and
gameplay. Actions taken inside the dream feed back into that profile, while
multiplayer convergence combines it with another player's world.

The current repository contains the web experience and the first backend
service. Next.js serves the interface and proxies `/api/*` requests to ASP.NET
Core, which currently handles newsletter subscriptions through Brevo. The AI
dream engine and multiplayer services will be introduced in later stages.

## Project structure

```text
Yuume/
├── Frontend/                  # Next.js application and component tests
├── Backend/                   # ASP.NET Core API
├── Backend.UnitTests/         # Service and mapping tests
├── Backend.IntegrationTests/  # HTTP endpoint tests
├── .github/workflows/         # Frontend and backend CI
└── Yuume.slnx                 # .NET solution
```

## Getting started

### Prerequisites

- [Node.js 24](https://nodejs.org/)
- [pnpm 11](https://pnpm.io/)
- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- A [Brevo](https://www.brevo.com/) API key for newsletter subscriptions

### 1. Clone the repository

```bash
git clone https://github.com/Nicole2137/Yuume.git
cd Yuume
```

### 2. Configure and run the backend

Store the API key with .NET user secrets so it never enters source control:

```bash
dotnet user-secrets set "Newsletter:ApiKey" "<your-brevo-api-key>" --project Backend
dotnet run --project Backend --launch-profile http
```

The API will be available at `http://localhost:8000`.

### 3. Configure and run the frontend

Create `Frontend/.env.local`:

```dotenv
BACKEND_API_URL=http://localhost:8000
```

Then install the dependencies and start the development server:

```bash
cd Frontend
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> [!IMPORTANT]
> Do not commit `.env.local`, Brevo credentials, or any other secrets.

## API

### Subscribe to the newsletter

```http
POST /api/newsletter
Content-Type: application/json

{
  "email": "dreamer@example.com"
}
```

The endpoint returns `200 OK` when the contact is created or updated. Invalid
requests and external-service failures are returned as `4xx` or `5xx`
responses.

## Testing

Run frontend quality checks from the repository root:

```bash
pnpm --dir Frontend lint
pnpm --dir Frontend test
pnpm --dir Frontend build
```

Run the complete backend test suite:

```bash
dotnet test Yuume.slnx
```

GitHub Actions runs the same frontend and backend checks for relevant pushes
and pull requests.

## Contributing

Yuume is still taking shape. If you would like to help:

1. Fork the repository and create a focused branch.
2. Keep changes consistent with the project's dreamlike visual language.
3. Add or update tests for changed behavior.
4. Run the relevant checks locally.
5. Open a pull request describing both the change and its motivation.

<div align="center">
  <br />
  <img src="./Frontend/public/img/decorations/stars/diamond-sparkle.svg" alt="" width="22" />
  <p><em>Soft thoughts, beautiful days.</em></p>
</div>
