# 🚀 GitDocs

**GitDocs** is a documentation website built with [Docusaurus](https://docusaurus.io/) — a modern static site generator.  
It is automatically built and deployed using a **CI/CD pipeline** configured through **GitHub Actions**.

🌐 **Live Site:** [https://rosh-codes.github.io/GitDocs/](https://rosh-codes.github.io/GitDocs/)  
📦 **Source Code:** [GitHub Repository](https://github.com/Rosh-codes/GitDocs)

---

## 🧩 Project Overview

GitDocs is a **documentation platform** built using Docusaurus and automated through GitHub Actions.  
The pipeline builds the site, creates a Docker image for consistent deployment environments, and deploys the generated site to **GitHub Pages**.  

The Docker image is stored securely in a **private Docker Hub repository** — it is not publicly accessible for now.

---

## ⚙️ Technologies Used

| Category | Technology | Purpose |
|-----------|-------------|----------|
| **Framework** | [Docusaurus 3](https://docusaurus.io/) | Static site generation using React |
| **Language** | Node.js (v20) | Runtime for build scripts |
| **Containerization** | [Docker](https://www.docker.com/) | Containerized build environment |
| **Hosting** | [GitHub Pages](https://pages.github.com/) | Deploys the built documentation site |
| **Automation** | [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline management |

---

## 🔁 CI/CD Workflow

The **GitHub Actions** workflow automatically handles both CI and CD stages.

### 🔹 Continuous Integration (CI)
Triggered on every push to `main`:
1. Checks out the latest code.
2. Installs Node.js dependencies.
3. Builds the Docusaurus static site.
4. Builds and **pushes a Docker image** to a **private Docker Hub repository** (for internal use only).

🧱 *The Docker image is private and cannot be pulled publicly. It serves as a secure, consistent build artifact for future deployments.*

### 🔹 Continuous Deployment (CD)
After a successful build:
1. Uploads the built site as an artifact.
2. Automatically deploys it to **GitHub Pages**.
3. Publishes the live site at  
   👉 [https://rosh-codes.github.io/GitDocs/](https://rosh-codes.github.io/GitDocs/)

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
| 🧱 **CI (Continuous Integration)** | Builds the Docusaurus site and pushes a Docker image (stored privately) | Node.js, Docker |
| 🚀 **CD (Continuous Deployment)** | Deploys the built static site to GitHub Pages | GitHub Pages |
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
                 │ 🔒 Push to *private* registry│
                 └──────────────┬─────────────--┘
                                │
                                ▼
                 ┌────────────────────────────┐
                 │     🚀 Continuous          │
                 │     Deployment (CD)        │
                 ├────────────────────────── ─┤
                 │ 📤 Upload build artifact   │
                 │ 🌐 Deploy to GitHub Pages  │
                 │ 🔄 Publish live website    │
                 └──────────────┬─────────────┘
                                │
                                ▼
                   ✨ **Live Docs Updated Automatically!** ✨
```
## 💡 The Docker image created during the CI phase is stored privately and used for internal deployment consistency —  ***it is not publicly accessible.***