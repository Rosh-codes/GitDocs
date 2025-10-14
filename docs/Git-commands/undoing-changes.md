---
id: undoing-changes
title: Undoing Changes
sidebar_label: Undoing Changes
sidebar_position: 7
---

# Undoing Changes

Sometimes you need to **undo changes** in your Git repository. Git provides safe ways to revert, reset, or temporarily save changes.

---

## 1. Stash Changes

```bash
git stash
```
**Description:** Temporarily saves your **unstaged and staged changes** so you can work on something else.  

 - All changes are saved, and your working directory is clean.  

 **To apply the saved changes back:**

```bash
git stash pop
```
---

## 2. Reset Changes

```bash
git reset <file>
```
**Description:** Unstages a file that was added to the staging area.  
- Does **not** delete changes from the file.  

**Example:**  

```bash
git add file1.txt
git reset file1.txt
```
- To unstage all files:

```bash
git reset
```
---

## 3. Discard Changes in a File

```bash
git checkout -- <file>
```
**Description:** Reverts the file to the **last committed version**, discarding any changes.  

**Example:**  

```bash
git checkout -- file1.txt
```
---

## 4. Revert a Commit

```bash
git revert `<commit-hash>`
```
**Description:** Creates a **new commit** that undoes the changes from a previous commit.  
- Safe for commits that have already been pushed.  

**Example:**  

```bash
git revert `a1b2c3d`
```
- Git opens an editor to allow you to modify the revert commit message.

---

## Summary of Undo Commands

| Command                        | Purpose                                               |
|--------------------------------|-----------------------------------------------------|
| `git stash`                     | Save current changes temporarily                     |
| `git stash pop`                 | Reapply stashed changes                               |
| `git reset <file>`              | Unstage a file                                       |
| `git reset`                     | Unstage all files                                    |
| `git checkout -- <file>`     | Discard changes in a file and revert to last commit |
| `git revert <commit-hash> `   | Undo a commit by creating a new revert commit       |

---

Next, you’ll learn about **tags and remotes** in the repository.
