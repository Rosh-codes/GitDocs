---
id: merging-branches
title: Merging Branches
sidebar_label: Merging Branches
sidebar_position: 6
---

# Merging Branches

Once you have multiple branches, you often need to **combine changes** from one branch into another. This is called **merging**.

---

## 1. Merge a Branch into Current Branch

```bash
git merge <branch>
```
**Description:** Integrates changes from the specified branch into your current branch.  
- Always commit or stash your changes before merging.

**Example:**  

```bash
git checkout main
git merge feature-login
```
- If there are no conflicts, the branches are combined automatically.  

---

## 2. Handling Merge Conflicts

**Description:** If Git cannot automatically merge changes, it will mark conflicts in files.  
- You need to **edit the files manually**, then stage and commit the resolved changes.

**Example:**  

```bash
# Edit conflicting files
git add <file>
git commit -m "Resolve merge conflicts"
```
---

## 3. Fast-Forward Merge

```bash
git merge <branch> --ff-only
```
**Description:** Only performs a merge if Git can do a **fast-forward merge** (no divergent changes).  
- Prevents creating unnecessary merge commits.

**Example:**  

```bash
git merge feature-login --ff-only
```
---

## 4. Merge with a Commit

```bash
git merge <branch> --no-ff
```
**Description:** Forces Git to create a **merge commit** even if a fast-forward merge is possible.  
- Useful for keeping a clear branch history.

**Example:**  

```bash
git merge feature-login --no-ff
```

## 5. Rebase a Branch

```bash
git rebase <branch>
```
**Description:** Moves your current branch commits on top of the specified branch.  
- Keeps history **linear**, unlike merge which can create extra commits.  
- Conflicts are resolved similarly to merge conflicts.

**Example:**  

```bash
git checkout feature-login
git rebase main
```
- If conflicts occur:  

```bash
# Resolve conflicts in files
git add <file>
git rebase --continue
```
- To cancel the rebase at any time:  

```bash
git rebase --abort
```
-------
## Merge vs Rebase

**Merge** and **Rebase** are two ways to integrate changes from one branch into another.  

- **Merge:**  
  - Combines branches into one commit.  
  - Preserves full branch history.  
  - Can create a “merge commit” even if branches could fast-forward.  

- **Rebase:**  
  - Reapplies commits on top of another branch.  
  - Creates a **linear history**, making it cleaner.  
  - Changes the commit history, so avoid rebasing shared branches.  

**When to use:**  
- Use **merge** when you want to preserve the branch history.  
- Use **rebase** when you want a clean, linear history before pushing or merging.

---

## Summary of Merge Commands

| Command                          | Purpose                                           |
|---------------------------------|-------------------------------------------------|
| `git merge <branch> `          | Merge the specified branch into current branch  |
| `git merge <branch> --ff-only` | Merge only if a fast-forward is possible        |
| `git merge <branch> --no-ff`   | Force a merge commit even if fast-forward possible |
| `git rebase <branch>`         | Reapply commits on top of another branch (linear history) |
| Conflict resolution              | Edit files manually, stage, and commit          |

---

Next, you’ll learn how to **undo changes** in the repository.


JUST A TEST TO CHECK CICD
