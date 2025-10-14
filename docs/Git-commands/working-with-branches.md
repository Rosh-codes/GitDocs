---
id: working-with-branches
title: Working with Branches
sidebar_label: Branches
sidebar_position: 5
---

# Working with Branches

Branches in Git allow you to **work on different features or experiments independently** without affecting the main codebase.

---

## 1. View Branches

```bash
git branch
```
**Description:** Lists all local branches in your repository.  
- The current branch is highlighted with `*`.

Output might look like:  

- `* main` → current branch  
- `feature-login` → another branch  

---

## 2. Create a New Branch

```bash
git branch <branch>
```
**Description:** Creates a new branch with the specified name.  
- Your current working branch does not change until you switch to it.

**Example:**  

```bash
git branch feature-login
```
---

## 3. Switch Branches

```bash
git checkout <branch>
```
**Description:** Switches your working directory to the specified branch.  

**Example:**  

```bash
git checkout feature-login
```
- Alternative (newer Git versions):  

```bash
git switch feature-login
```
---

## 4. Create and Switch in One Command

```bash
git checkout -b <branch>
```
**Description:** Creates a new branch and switches to it immediately.  

**Example:**  

```bash
git checkout -b feature-signup
```
- Alternative (newer Git versions):  

```bash
git switch -c feature-signup
```
---

## 5. Delete a Branch

```bash
git branch -d <branch>
```
**Description:** Deletes a local branch that has been merged.  
- Use `-D` to force delete an unmerged branch.

**Example:**  

```bash
git branch -d feature-login
```
---

## Summary of Branch Commands

| Command                             | Purpose                                         |
|------------------------------------|------------------------------------------------|
| `git branch`                       | List all local branches                        |
| `git branch <branch>`              | Create a new branch                            |
| `git checkout <branch>`            | Switch to an existing branch                   |
| `git switch <branch>`              | Switch to an existing branch (modern syntax)  |
| `git checkout -b <branch>`         | Create and switch to a new branch             |
| `git switch -c <branch>`           | Create and switch to a new branch (modern)    |
| `git branch -d <branch>`           | Delete a merged branch                         |

---

Next, you’ll learn how to **merge branches**.
