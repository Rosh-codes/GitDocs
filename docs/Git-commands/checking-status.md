---
id: checking-status
title: Checking Repository Status
sidebar_label: Checking Status
sidebar_position: 2
---

# Checking Repository Status

Once you have a Git repository set up, you need to know how to check the current state of your files and commits. This helps you track changes and understand what to do next.

---

## 1. Check Status of Files

```bash
git status
```
**Description:** Shows which files are **staged**, **unstaged**, or **untracked**.  
It helps you see what changes are ready to be committed and what files are new or modified.


**Output will list files like:**

- `modified: file1.txt` → changed but not staged  
- `new file: file2.txt` → new file not yet tracked  

---

## 2. See Differences

```bash
git diff
```
**Description:** Shows the actual changes in your files that have not been staged for commit.  
It’s useful to review what you’ve modified before committing.

- Lines removed will start with `-`  
- Lines added will start with `+`  

To see changes that are staged for commit:

```bash
git diff --staged
```
---

## 3. View Commit History

```bash
git log
```
**Description:** Displays the commit history of the repository in reverse chronological order.  
You can see who made each commit, the commit message, and the commit hash.

***To make it shorter and easier to read:***

```bash
git log --oneline
```
This shows each commit on a single line with its short hash and message.

---

## Summary of Status & Log Commands

| Command             | Purpose                                     |
| ------------------- | ------------------------------------------- |
| `git status`        | Check staged, unstaged, and untracked files |
| `git diff`          | See changes not staged for commit           |
| `git diff --staged` | See changes staged and ready to commit      |
| `git log`           | View full commit history                    |
| `git log --oneline` | View compact commit history                 |

---

Next, you’ll learn how to **stage and commit changes** in the repository.
