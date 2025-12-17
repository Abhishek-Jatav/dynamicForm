"use client";

import { useState } from "react";
import QuestionForm from "../components/QuestionForm";
import DisplayQuestions from "../components/DisplayQuestions";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const addParentQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      text: "",
      type: "short",
      answer: null,
      children: [],
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (id, key, value) => {
    const updateRecursive = (qs) => {
      return qs.map((q) => {
        if (q.id === id) return { ...q, [key]: value };
        if (q.children.length > 0)
          return { ...q, children: updateRecursive(q.children) };
        return q;
      });
    };
    setQuestions((prev) => updateRecursive(prev));
  };

  const addChildQuestion = (parentId) => {
    const newChild = {
      id: Date.now().toString(),
      text: "",
      type: "short",
      answer: null,
      children: [],
    };
    const addRecursive = (qs) =>
      qs.map((q) =>
        q.id === parentId
          ? { ...q, children: [...q.children, newChild] }
          : { ...q, children: addRecursive(q.children) }
      );
    setQuestions((prev) => addRecursive(prev));
  };

  const deleteQuestion = (id, qs) =>
    qs
      .filter((q) => q.id !== id)
      .map((q) => ({ ...q, children: deleteQuestion(id, q.children) }));
  const removeQuestion = (id) =>
    setQuestions((prev) => deleteQuestion(id, prev));

  const generateNumbers = (qs, prefix = "") =>
    qs.map((q, index) => {
      const number = prefix ? `${prefix}.${index + 1}` : `${index + 1}`;
      return {
        ...q,
        number: `Q${number}`,
        children: generateNumbers(q.children, number),
      };
    });

  const numberedQuestions = generateNumbers(questions);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dynamic Question Form</h1>

      {!submitted && (
        <>
          <button onClick={addParentQuestion} style={{ marginBottom: "1rem" }}>
            Add New Question
          </button>

          {numberedQuestions.map((q) => (
            <div
              key={q.id}
              style={{ marginBottom: "1rem", paddingLeft: "1rem" }}>
              <strong>{q.number}:</strong>
              <QuestionForm
                question={q}
                update={updateQuestion}
                addChild={addChildQuestion}
                remove={removeQuestion}
              />
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              fontWeight: "bold",
            }}>
            Submit
          </button>
        </>
      )}

      {submitted && <DisplayQuestions questions={numberedQuestions} />}
    </main>
  );
}
