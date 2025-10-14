---
id: collaborating
title: Collaborating with Remote Repositories
sidebar_label: Collaborating
sidebar_position: 4
---

# Collaborating with Remote Repositories

Once you have committed changes locally, you often need to **share your work** or **get updates** from a remote repository such as GitHub.

---

## 1. Add a Remote Repository

```bash
git remote add origin <repository-url>
```
**Description:** Links your local repository to a remote repository.  
This only needs to be done **once** per repository.

**Example:**  

```bash
git remote add origin 'https://github.com/user/repo.git'
```
- You can verify the remote using:

```bash
git remote -v
```
---

## 2. Push Changes to Remote

```bash
git push -u origin <branch>
```
**Description:** Sends your local commits to the remote repository.  
- `-u` sets the upstream branch for future pushes.  
- Replace `<branch>` with your branch name, e.g., `main` or `master`.

**Example:**  

```bash
git push -u origin main
```
- For subsequent pushes, you can simply run:

```bash
git push
```
---

## 3. Pull Changes from Remote

```bash
git pull origin <branch>
```
**Description:** Fetches and merges changes from the remote repository into your local branch.  
- Always pull before pushing to avoid conflicts.

**Example:**  

```bash
git pull origin main
```
- This ensures your local repository is up-to-date.

---

## 4. Fetch Changes Without Merging

```bash
git fetch origin
```
**Description:** Downloads updates from the remote without merging them.  
- Useful if you want to inspect changes before merging.

- After fetching, you can merge manually if needed.

---

## Summary of Remote Collaboration Commands

| Command                         | Purpose                                           |
|---------------------------------|-------------------------------------------------|
| `git remote add origin <url>`    | Link local repository to a remote               |
| `git remote -v`                  | Verify remote repositories                       |
| `git push -u origin <branch>`    | Push commits to remote and set upstream branch  |
| `git push`                       | Push commits to remote (after initial setup)    |
| `git pull origin <branch>`       | Fetch and merge remote changes                  |
| `git fetch origin`               | Fetch remote changes without merging            |

---

Next, you’ll learn how to **work with branches** in the repository.
