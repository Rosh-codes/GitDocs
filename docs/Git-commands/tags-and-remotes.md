---
id: tags-and-remotes
title: Tags and Remotes
sidebar_label: Tags & Remotes
sidebar_position: 8
---

# Tags and Remotes

Git allows you to **mark important points** in your history with tags and manage multiple remote repositories for collaboration.

---

## 1. Create a Tag

```bash
git tag `<tag-name>`
```
**Description:** Creates a lightweight tag at the current commit.  
- Tags are often used to mark **releases or milestones**.

**Example:**  

```bash
git tag v1.0
```
**To see all tags:**

```bash
git tag
```
---

## 2. Annotated Tag

```bash
git tag -a `<tag-name>` -m "Message"
```
**Description:** Creates an **annotated tag** with a message and author information.  
- Recommended for public releases.

**Example:**  

```bash
git tag -a v1.0 -m "Initial release"
```
---

## 3. Push Tags to Remote

```bash
git push origin `<tag-name>`
```
**Description:** Sends a specific tag to the remote repository.  

**To push all tags:**

```bash
git push origin --tags
```
---

## 4. Add or View Remotes

```bash
git remote add `<name>` `<repository-url>`
```
**Description:** Adds a remote repository with a given name (like `origin`).  

**Example:**  

```bash
git remote add upstream https://github.com/user/repo.git
```
**To view all remotes:**

```bash
git remote -v
```
---

## 5. Fetch from All Remotes

```bash
git fetch --all
```
**Description:** Fetches updates from **all configured remote repositories** without merging them.  


## Summary of Tags & Remote Commands

| Command                             | Purpose                                         |
|------------------------------------|------------------------------------------------|
| `git tag <tag-name> `             | Create a lightweight tag                        |
| `git tag -a <tag-name> -m "msg" ` | Create an annotated tag with a message         |
| `git push origin <tag-name> `     | Push a specific tag to remote                   |
| `git push origin --tags`            | Push all tags to remote                          |
| `git remote add <name> <url> `  | Add a remote repository                          |
| `git remote -v`                     | List configured remotes                          |
| `git fetch --all`                   | Fetch updates from all remotes                  |

---

