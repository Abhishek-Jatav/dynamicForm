"use client";

export default function DisplayQuestions({ questions }) {
  const renderQuestions = (qs, level = 0) => {
    return qs.map((q) => (
      <div
        key={q.id}
        style={{ marginLeft: `${level * 20}px`, marginTop: "0.5rem" }}>
        <strong>{q.number}:</strong> {q.text}{" "}
        {q.type === "truefalse" && `(Answer: ${q.answer})`}
        {q.children.length > 0 && renderQuestions(q.children, level + 1)}
      </div>
    ));
  };

  return (
    <div>
      <h2>Submitted Questions</h2>
      {renderQuestions(questions)}
    </div>
  );
}
