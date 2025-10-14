---
id: getting-started
title: Getting Started with Git
sidebar_label: Getting Started
sidebar_position: 1
---

# Getting Started with Git

Before using Git commands, you need to set up Git and know a few basics about how it works.

---

## 1. Initialize a Repository

```bash
git init
```

**Description:** Creates a new Git repository in the current folder. Git will start tracking changes in this directory.  

**Example:**  
- Make a new folder and create a new git repository
```bash
mkdir my-project
cd my-project
git init
```

---

## 2. Clone an Existing Repository  
```bash
git clone <repository-url>
```  
**Description:** Copies an existing repository from a remote location (such as GitHub) to your local machine.  

**Example:**  
```bash 
git clone https://github.com/user/repo.git 
``` 
replacing with the actual URL  

---

## 3. Configure Your Git Identity  
```bash  
git config --global user.name "Your Name"  
git config --global user.email "you@example.com"
``` 

**Description:** Git needs your username and email to identify who makes commits. Using `--global` sets these details for all Git repositories on your computer.  

---

## 4. Get Help in Git  
```bash  
git help  
git help <command>  
```
**Description:** Displays help information and manuals for Git commands. For example, `git help commit` shows the manual for the commit command.  

---

## Summary of Basic Git Commands
| Command         | Purpose                         |
| --------------- | ------------------------------- |
| `git init`        | Start a new Git repository      |
| `git clone <url>` | Copy an existing repository     |
| `git config`      | Set your user identity globally |
| `git help`        | Show command usage and manuals  |

Next steps include learning how to check the status of your repository and view changes.