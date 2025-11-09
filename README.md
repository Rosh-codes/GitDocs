# 🚀 GitDocs

**GitDocs** is a documentation website built with [Docusaurus](https://docusaurus.io/) — a modern static site generator.  
It is automatically built and deployed using a **CI/CD pipeline** configured through **GitHub Actions**.

🌐 **Live Site:** [https://rosh-codes.github.io/GitDocs/](https://rosh-codes.github.io/GitDocs/)  
🐳 **Docker Deployment (Render):** [https://gitdocs-lgwz.onrender.com](https://gitdocs-lgwz.onrender.com) _(may have ~50s cold start delay on free plan)_
📦 **Source Code:** [GitHub Repository](https://github.com/Rosh-codes/GitDocs)

---

## 🧩 Project Overview

GitDocs is a **documentation platform** built using Docusaurus and automated through GitHub Actions.  
The pipeline builds the site, creates a Docker image for consistent deployment environments, and deploys the generated site to **GitHub Pages**.  

The Docker image is stored securely in a **Docker Hub repository** — it is not publicly accessible for now.

- GitDocs is a fully automated **documentation platform** powered by Docusaurus.
- It leverages GitHub Actions for **CI/CD**, **Docker** for containerization, and supports dual deployment:
- Static Site Deployment — via GitHub Pages
- Containerized Deployment — via Render (Docker-based hosting)

---

## ⚙️ Technologies Used

| Category | Technology | Purpose |
|-----------|-------------|----------|
| **Framework** | [Docusaurus 3](https://docusaurus.io/) | Static site generation using React |
| **Language** | Node.js  | Runtime for build scripts |
| **Containerization** | [Docker](https://www.docker.com/) | Containerized build environment |
| **Hosting (static)** | [GitHub Pages](https://pages.github.com/) | Serves the built documentation site |
| **Hosting (Containerized)** | [Render](https://gitdocs-lgwz.onrender.com) | Runs the site from a Docker image |
| **Automation** | [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline management |

---

## 🔁 CI/CD Workflow

The **GitHub Actions** workflow automatically handles both CI and CD stages.

### 🔹 Continuous Integration (CI)
Triggered on every push to `main`:
1. 🧱 Checks out the latest code
2. 📦 Installs dependencies
3. 🏗️ Builds the Docusaurus static site
4. 🐳 Builds and pushes a Docker image to a Docker Hub repository
- The Docker image serves as a secure, versioned artifact for deployment.


### 🔹 Continuous Deployment (CD)
After a successful build:
1. 📤 Uploads the built site as an artifact.
2. 🌐 Automatically deploys it to **GitHub Pages**.
3. 🐳 Deploys the Dockerized site to **Render**
4. ✨ Publishes the live site automatically

---

## 🚀 Local Development

To run locally:
```bash
git clone https://github.com/Rosh-codes/GitDocs.git
cd GitDocs
npm ci
npm run start
``` 
Then visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 Summary of the Pipeline

| **Stage** | **Description** | **Tool(s)** |
|------------|-----------------|-------------|
| 🧱 **CI (Continuous Integration)** | Builds the Docusaurus site and pushes a Docker image | Node.js, Docker |
| 🚀 **CD (Continuous Deployment)** | DDeploys to GitHub Pages and Render (Docker) | GitHub Pages, Render |
| 🌍 **Result** | Updated docs go live automatically after every push | GitHub Actions |

---

## 🔁 CI/CD Workflow Overview

```text
                ┌──────────────────────────────┐
                │          🧠 Git Push         │
                │        (main branch)         │
                └──────────────┬───────────────┘
                               │
                               ▼
                 ┌────────────────────────────--┐
                 │     ⚙️ Continuous            │
                 │     Integration (CI)         │
                 ├────────────────────────────--┤
                 │ ✅ Checkout code             │
                 │ 📦 Install dependencies      │
                 │ 🏗️ Build Docusaurus site     │
                 │ 🐳 Build Docker image        │
                 │ 🔒 Push to registry          │
                 └──────────────┬─────────────--┘
                                │
                                ▼
                 ┌────────────────────────────┐
                 │     🚀 Continuous          │
                 │     Deployment (CD)        │
                 ├──────────────────────────-─┤
                 │ 📤 Upload build artifact   │
                 │ 🌐 Deploy to GitHub Pages  │
                 │ 🐳 Deploy Docker image to  │
                 │     Render (live site)     │
                 └──────────────┬─────────────┘

                                │
                                ▼
                   ✨ **Live Docs Updated Automatically!** ✨
```
### 🧭 Deployment Summary

| **Platform** | **Type**     | **URL**                                                                        | **Notes**                      |
| ------------ | ------------ | ------------------------------------------------------------------------------ | ------------------------------ |
| GitHub Pages | Static       | [https://rosh-codes.github.io/GitDocs/](https://rosh-codes.github.io/GitDocs/) | Fast, ideal            |
| Render       | Docker-based | [https://gitdocs-lgwz.onrender.com](https://gitdocs-lgwz.onrender.com)         | May have ~50s cold start delay (due to free plan) |
