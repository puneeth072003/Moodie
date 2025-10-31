<!-- Badges -->
[![Last Commit][last-commit-shield]][last-commit-url]
[![Issues][issues-shield]][issues-url]
[![Top Language][top-language-shield]][top-language-url]

<br>
<div align="center">
  <div align="center">
    <img src="https://github.com/puneeth072003/Moodie/assets/119479391/0642746b-9154-41f8-9a7d-e752b007b645" alt="Moodie Logo" width="200" align="center" />
  </div>

<br>
  <h3 align="center">Moodie</h3>

  <p align="center">
    AI-powered sentiment analysis for Reddit users' mental health and digital well-being
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#demo">View Demo</a>
    &middot;
    <a href="https://github.com/puneeth072003/Moodie/issues">Report Bug</a>
    &middot;
    <a href="https://github.com/puneeth072003/Moodie/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#architecture">Architecture</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-locally">Running Locally</a></li>
      </ul>
    </li>
    <li>
      <a href="#deployment">Deployment</a>
      <ul>
        <li><a href="#docker-deployment">Docker Deployment</a></li>
        <li><a href="#kubernetes-deployment">Kubernetes Deployment</a></li>
      </ul>
    </li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#monitoring">Monitoring</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

**Moodie** is a comprehensive sentiment analysis web application built with the MERN stack that helps users understand their digital mental health by analyzing their Reddit activity. The application fetches a user's recent Reddit posts, performs advanced sentiment analysis using VADER (Valence Aware Dictionary and sEntiment Reasoner), and provides personalized insights and suggestions based on their emotional patterns.

### How It Works

1. **User Input**: Enter a Reddit username through the intuitive web interface
2. **Data Collection**: Application fetches the user's 10 most recent Reddit posts using PRAW (Python Reddit API Wrapper)
3. **Text Processing**: Posts are cleaned and preprocessed to remove noise, URLs, and special characters
4. **Sentiment Analysis**: VADER analyzes the emotional content, calculating positivity, negativity, and neutrality scores
5. **Results Display**: Users receive a comprehensive breakdown with:
   - Percentage scores for positive, negative, and neutral sentiment
   - Overall mood classification
   - Personalized suggestions for mental well-being

### Key Features

- 🎯 **Real-time Sentiment Analysis**: Instant analysis of Reddit user posts
- 📊 **Comprehensive Metrics**: Detailed breakdown of emotional patterns
- 💡 **Personalized Suggestions**: Context-aware recommendations based on sentiment
- 🔒 **Secure & Scalable**: Production-ready with Docker and Kubernetes support
- 📈 **Monitoring Ready**: Built-in Prometheus metrics for observability
- 🚀 **Modern Tech Stack**: React 18, Node.js 20, Python 3.11
- 🎨 **Responsive UI**: Beautiful, user-friendly interface with smooth animations

### Built With

#### Frontend
* [![React][React.js]][React-url]
* [![Vite][Vite]][Vite-url]
* [![React Router][React-Router]][React-Router-url]

#### Backend
* [![Node.js][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Python][Python]][Python-url]

#### AI/ML & APIs
* **VADER Sentiment** - Advanced sentiment analysis
* **PRAW** - Python Reddit API Wrapper
* **Reddit API** - Data source for user posts

#### DevOps & Infrastructure
* [![Docker][Docker]][Docker-url]
* [![Kubernetes][Kubernetes]][Kubernetes-url]
* [![Prometheus][Prometheus]][Prometheus-url]

### Architecture

```
┌─────────────────┐
│   React Frontend│
│   (Vite + React)│
└────────┬────────┘
         │ HTTP
         ▼
┌─────────────────┐
│  Express.js API │
│  (Node.js 20)   │◄──── Prometheus Metrics
└────────┬────────┘
         │ spawn
         ▼
┌─────────────────┐
│  Python Engine  │
│  (PRAW + VADER) │
└────────┬────────┘
         │ API
         ▼
┌─────────────────┐
│   Reddit API    │
└─────────────────┘
```

**Deployment Architecture:**
- **Multi-stage Docker builds** for optimized image size (~279MB)
- **Kubernetes orchestration** with 2 replicas for high availability
- **Health checks** at Docker and Kubernetes levels
- **Prometheus monitoring** for metrics collection
- **Resource limits** for efficient resource utilization


## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (v18.0.0 or higher)
  ```sh
  node --version
  ```

* **npm** (v8.0.0 or higher)
  ```sh
  npm --version
  ```

* **Python** (v3.11 or higher)
  ```sh
  python --version
  ```

* **Git**
  ```sh
  git --version
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/puneeth072003/Moodie.git
   cd Moodie
   ```

2. **Install Backend Dependencies**
   ```sh
   npm install
   ```

3. **Install Python Dependencies**
   ```sh
   pip install praw vaderSentiment
   ```

4. **Install Frontend Dependencies**
   ```sh
   cd Frontend
   npm install
   cd ..
   ```

### Running Locally

#### Development Mode

1. **Start the Backend Server**
   ```sh
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
   ```sh
   cd Frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Access the Application**

   Open your browser and navigate to `http://localhost:5173`

#### Production Mode

```sh
# Backend
npm start

# Frontend (build and serve)
cd Frontend
npm run build
npm run preview
```

## Deployment

### Docker Deployment

The application uses a multi-stage Docker build for optimal performance and security.

#### Build Docker Image

```sh
docker build -t moodie:latest .
```

#### Run Docker Container

```sh
docker run -p 5000:5000 moodie:latest
```

#### Docker Features
- ✅ Multi-stage builds (Python + Node.js)
- ✅ Non-root user execution
- ✅ Health checks built-in
- ✅ Optimized layer caching
- ✅ Production-ready (~279MB image)

### Kubernetes Deployment

#### Prerequisites for Kubernetes

* **Minikube** or any Kubernetes cluster
* **kubectl** configured

#### Quick Start with Minikube

1. **Start Minikube**
   ```sh
   minikube start --driver=docker --memory=4096 --cpus=2
   minikube addons enable metrics-server
   ```

2. **Build and Load Image**
   ```sh
   docker build -t moodie:latest .
   minikube image load moodie:latest
   ```

3. **Deploy to Kubernetes**
   ```sh
   cd Deployement

   # Deploy ConfigMap
   kubectl apply -f prometheus-configmap.yml

   # Deploy Application
   kubectl apply -f deployment.yaml

   # Deploy Prometheus
   kubectl apply -f prometheus.yml
   ```

4. **Wait for Deployments**
   ```sh
   kubectl wait --for=condition=available --timeout=300s deployment/moodie-backend-deployment
   kubectl wait --for=condition=available --timeout=300s deployment/prometheus-deployment
   ```

5. **Access Services**
   ```sh
   # Port forward to access services
   kubectl port-forward service/moodie-backend-service 8080:80
   kubectl port-forward service/prometheus-service 9090:9090
   ```


#### Kubernetes Features
- 🔄 **2 Replicas** for high availability
- 💪 **Resource Limits**: Memory (256Mi) and CPU (250m)
- 🏥 **Health Probes**: Liveness, Readiness, and Startup probes
- 📊 **Prometheus Integration**: Automatic metrics scraping
- 🔧 **ConfigMaps**: Externalized configuration

#### Automated Deployment Scripts

**PowerShell (Windows):**
```powershell
.\Deployement\scripts\deploy.ps1
```

**Bash (Linux/Mac):**
```bash
./Deployement/scripts/deploy.sh
```

## API Documentation

### Endpoints

#### `GET /api/v1/`
**Description**: Health check endpoint

**Response:**
```json
"Hello from Moodie!!!"
```

#### `GET /api/v1/fetch`
**Description**: Analyze Reddit user sentiment

**Request Body:**
```json
{
  "username": "reddit_username"
}
```

**Response:**
```json
{
  "Positive": "45.23",
  "Negative": "12.45",
  "Neutral": "42.32",
  "Overall": "Positive",
  "Suggestion": "Good going! keep it up"
}
```

#### `GET /metrics`
**Description**: Prometheus metrics endpoint

**Response:** Prometheus-formatted metrics

## Monitoring

### Prometheus Metrics

The application exposes the following metrics:

- **HTTP Request Duration**: `http_request_duration_seconds`
  - Labels: `method`, `route`, `code`
  - Type: Histogram

### Health Checks

- **Docker Health Check**: Checks `/metrics` endpoint every 30s
- **Kubernetes Probes**:
  - **Liveness Probe**: Ensures container is running
  - **Readiness Probe**: Ensures container is ready to serve traffic
  - **Startup Probe**: Ensures application has started successfully

### Accessing Prometheus

```sh
kubectl port-forward service/prometheus-service 9090:9090
```

Navigate to `http://localhost:9090` to access the Prometheus UI.

## Testing

### Run Tests

```sh
npm test
```

### Test Coverage

The project includes tests for:
- ✅ Suggestion generation logic
- ✅ API endpoint functionality

### Test Files
- `test/getSuggestion.test.js` - Tests for suggestion randomization
- `test/getPosts.test.js` - Tests for post fetching logic

## Project Structure

```
Moodie/
├── Frontend/                    # React frontend application
│   ├── src/
│   │   ├── App/                # Main app component
│   │   ├── Controller/         # Progress bars and UI controllers
│   │   ├── Final/              # Analysis results component
│   │   ├── Navbar/             # Navigation component
│   │   ├── Pages/              # About, Tools, Case Study pages
│   │   ├── login/              # Login and Signup components
│   │   ├── assets/             # Images and videos
│   │   └── main.jsx            # App entry point
│   ├── package.json
│   └── vite.config.js
│
├── src/                         # Backend source code
│   ├── Controller/
│   │   ├── getPosts.js         # Main controller for sentiment analysis
│   │   ├── getSuggestion.js    # Suggestion generation logic
│   │   └── gethome.js          # Home endpoint controller
│   ├── Router/
│   │   └── route.js            # Express routes
│   └── logic/
│       └── getPosts.py         # Python script for Reddit + VADER
│
├── Deployement/                 # Kubernetes deployment files
│   ├── deployment.yaml         # K8s deployment and service
│   ├── prometheus.yml          # Prometheus deployment
│   ├── prometheus-configmap.yml# Prometheus configuration
│   └── scripts/                # Deployment automation scripts
│
├── test/                        # Test files
│   ├── getPosts.test.js
│   └── getSuggestion.test.js
│
├── app.js                       # Express server entry point
├── Dockerfile                   # Multi-stage Docker build
├── package.json                 # Backend dependencies
├── DEPLOYMENT_README.md         # Detailed deployment guide
└── README.md                    # This file
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Quick Start

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m '✨ Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)



## Code of Conduct

This project adheres to the Contributor Covenant [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Contact

Project Link: [https://github.com/puneeth072003/Moodie](https://github.com/puneeth072003/Moodie)

## Acknowledgments

* [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment) - Sentiment analysis tool
* [PRAW](https://praw.readthedocs.io/) - Python Reddit API Wrapper
* [Reddit API](https://www.reddit.com/dev/api/) - Data source
* [React](https://reactjs.org/) - Frontend framework
* [Express.js](https://expressjs.com/) - Backend framework
* [Prometheus](https://prometheus.io/) - Monitoring solution
* [Docker](https://www.docker.com/) - Containerization
* [Kubernetes](https://kubernetes.io/) - Container orchestration

---

<div align="center">
  <p>Made with ❤️ for better digital mental health awareness</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>

<!-- MARKDOWN LINKS & IMAGES -->
[last-commit-shield]: https://img.shields.io/github/last-commit/puneeth072003/Moodie?style=for-the-badge
[last-commit-url]: https://github.com/puneeth072003/Moodie/commits/main
[issues-shield]: https://img.shields.io/github/issues/puneeth072003/Moodie?style=for-the-badge
[issues-url]: https://github.com/puneeth072003/Moodie/issues
[top-language-shield]: https://img.shields.io/github/languages/top/puneeth072003/Moodie?style=for-the-badge
[top-language-url]: https://github.com/puneeth072003/Moodie

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[React-Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-Router-url]: https://reactrouter.com/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Python]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Kubernetes]: https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white
[Kubernetes-url]: https://kubernetes.io/
[Prometheus]: https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white
[Prometheus-url]: https://prometheus.io/
