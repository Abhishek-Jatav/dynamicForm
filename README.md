
# 📝 Dynamic Question Form Builder

[![Next.js](https://img.shields.io/badge/Next.js-13-blue?logo=next.js&logoColor=white)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)](https://reactjs.org/)  
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A **dynamic, hierarchical question form builder** built with **Next.js** and **React**.  
Easily create parent and child questions, auto-number them, and view the final structure in a **read-only hierarchical display**.  

---

## ✨ Features

- ✅ **Add Parent Questions** dynamically  
- ✅ **Nested Child Questions** based on True/False answers  
- ✅ **Recursive Structure** allows unlimited depth  
- ✅ **Auto-Numbering** for hierarchical questions (`Q1`, `Q1.1`, `Q1.1.1`)  
- ✅ **Delete Functionality** removes questions and all their children  
- ✅ **Form Submission** displays a **read-only hierarchical view**  

---

## 📁 Project Structure

```

dynamicForm/
├── src/
│   ├── app/
│   │   └── page.js          # Main page with form logic
│   ├── components/
│   │   ├── QuestionForm.js  # Recursive question form component
│   │   └── DisplayQuestions.js # Read-only display after submit
├── package.json
├── README.md
└── ... (Next.js default files)

````

---

## 🚀 Demo Workflow

1. Click **“Add New Question”** to create a parent question.  
2. Enter **question text** and select **question type** (`Short Answer` or `True/False`).  
3. For **True/False** questions:
   - If answer is **True**, click **“Add Child Question”** to create nested questions.  
4. Click **Delete** to remove any question along with its nested children.  
5. Click **Submit** to see the **hierarchical read-only display**.

---

## 💻 Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Abhishek-Jatav/dynamicForm.git
cd dynamicForm
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🖼 Screenshots

### Form Builder

![Form Builder Screenshot](screenshots/form-builder.png)

### Submitted Hierarchical View

![Submitted View Screenshot](screenshots/submitted-view.png)

> *(Optional: add screenshots in `/screenshots` folder for better presentation)*

---

## ⚙️ Tech Stack

* **Next.js 13 (App Router)**
* **React 18**
* **CSS / Inline Styling**
* Fully **client-side**, no backend/API required

---

## 📌 Notes

* Recursive state structure supports **unlimited nested child questions**.
* Auto-numbering updates automatically when **adding or deleting** questions.
* Read-only display ensures **submitted data is visible but not editable**.

---

## 📝 License

This project is licensed under **MIT License**.
