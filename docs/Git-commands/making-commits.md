---
id: making-commits
title: Staging and Committing Changes
sidebar_label: Making Commits
sidebar_position: 3
---

# Staging and Committing Changes

After checking your repository status, the next step is to **stage your changes** and **commit them** to the repository.  

---

## 1. Stage Changes

```bash
git add <file>
```
**Description:** Adds changes in a file to the staging area.  
Staged changes are ready to be committed.  

**Example:**  

```bash
git add file1.txt
```
- To stage all changes in the repository:  

```bash
git add .
```
---

## 2. Commit Changes

```bash
git commit -m "Your commit message"
```
**Description:** Records the staged changes in the repository history with a descriptive message.  

**Example:**  

```bash
git commit -m "Add initial project files"
```
- Commit messages should be short and descriptive.  
- You can see the commit in the log using:

```bash
git log --oneline
```
---

## 3. Amend Last Commit

```bash
git commit --amend -m "Updated commit message"
```
**Description:** Modify the most recent commit. Useful if you forgot to include something or want to change the message.  

**Example:**  

```bash
git commit --amend -m "Add README file and initial setup"
```
- Only amend commits that haven’t been pushed to a remote repository.

---

## Summary of Commit Commands

| Command                             | Purpose                                     |
|------------------------------------|--------------------------------------------|
| `git add <file>`                    | Stage changes in a specific file           |
| `git add .`                         | Stage all changes in the repository        |
| `git commit -m "message"`           | Commit staged changes with a message       |
| `git commit --amend -m "message"`   | Modify the most recent commit              |

---

Next, you’ll learn how to **push and pull changes** with a remote repository.
