## **Introduction to Git and GitHub**

### **What is Git?**

Git is a distributed version control system that helps developers manage and track changes in their codebase efficiently.

### **What is GitHub?**

GitHub is a web-based hosting platform for version control using Git. It provides a collaborative environment for software development and versioning.

---

## **Getting Started with Git**

### **1\. Initialization**

To create a new Git repository, use the following command:

bash

```
git init
```

---

### **2\. Configuration**

Before using Git, you need to set up your user details for version tracking.

#### **Set Global Configuration**

bash

```
git config --global user.name "John"
git config --global user.email "example@gmail.com"
```

#### **Check Configuration**

To verify your configuration, use:

bash

```
git config --list
```

---

### **3\. Checking the Repository Status**

To view the current status of your repository, including changes and tracked files:

bash

```
git status
```

---

### **4\. Staging Changes**

#### **Stage Specific Files**

bash

```
git add <filename>
```

#### **Stage All Changes**

bash

```
git add .

```

---

### **5\. Committing Changes**

To save changes with a descriptive message:

bash

```
git commit -m "Your commit message"

```

---

### **6\. Connecting to a Remote Repository**

#### **Add a Remote Repository**

To link your local repository to a remote GitHub repository:

bash

```
git remote add origin https://github.com/your-username/your-repo.git

```

---

### **7\. Pushing Changes to GitHub**

To upload your commits to the remote repository:

bash

```
git push -u origin main

```

---

### **8\. Viewing Commit Logs**

#### **View Commit History**

bash

```
git log

```

#### **View Simplified Log (One-Line Format)**

bash

```
git log --oneline

```

---

## **Branch Management**

### **1\. Switching to the Main Branch**

To switch to the main branch of your repository:

bash

```
git switch main

```

Alternatively, you can use:

bash

```
git checkout main

```

### **2\. Creating a New Branch**

To create a new branch:

bash

```
git branch <branch-name>

```

### **3\. Switching to a Different Branch**

To switch to a specific branch:

bash

```
git switch <branch-name>

```

Or use:

bash

```
git checkout <branch-name>

```

### **4\. Listing All Branches**

To list all the branches in your repository:

bash

```
git branch

```

---

## **Merging Branches**

Merging combines the changes from one branch into another.

### **1\. Merging a Branch**

To merge a branch into the currently active branch:

bash

```
git merge <branch-name>

```

### **Example:**

1.  Switch to the branch you want to merge changes **into** (e.g., `main`):

    bash

    ```
    git switch main

    ```

    Or:

    bash

    ```
    git checkout main

    ```

2.  Merge the branch (e.g., `feature-branch`) into the current branch:

    bash

    ```
    git merge feature-branch

    ```

### **2\. Resolving Merge Conflicts**

If there are conflicts during the merge, Git will notify you. To resolve conflicts:

1.  Open the conflicted files in a text editor.
2.  Manually resolve the conflicts.
3.  Mark the conflicts as resolved by staging the files:

    bash

    ```
    git add <conflicted-file>

    ```

4.  Complete the merge with a commit:

    bash

    ```
    git commit

    ```

---

## **Common Git Workflow**

```
1.  Initialize a repository: `git init`
2.  Check repository status: `git status`
3.  Stage changes: `git add` or `git add .`
4.  Commit changes: `git commit -m "message"`
5.  Add remote repository: `git remote add origin <URL>`
6.  Push changes: `git push -u origin main`
7.  Create and switch branches: `git branch <branch-name>` and `git switch <branch-name>`
8.  Merge branches: `git merge <branch-name>`

---

```
