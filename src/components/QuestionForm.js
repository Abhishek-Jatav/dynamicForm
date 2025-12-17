"use client";

export default function QuestionForm({ question, update, addChild, remove }) {
  const handleChange = (key, value) => {
    update(question.id, key, value);
  };

  return (
    <div
      style={{
        marginLeft: "1rem",
        marginTop: "1rem",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}>
      {/* Question Text */}
      <input
        type="text"
        placeholder="Enter question"
        value={question.text}
        onChange={(e) => handleChange("text", e.target.value)}
        style={{ marginRight: "1rem", padding: "0.25rem 0.5rem" }}
      />

      {/* Question Type */}
      <select
        value={question.type}
        onChange={(e) => handleChange("type", e.target.value)}
        style={{ padding: "0.25rem 0.5rem" }}>
        <option value="short">Short Answer</option>
        <option value="truefalse">True / False</option>
      </select>

      {/* True/False Answer Selector */}
      {question.type === "truefalse" && (
        <select
          value={question.answer === null ? "" : question.answer.toString()}
          onChange={(e) => handleChange("answer", e.target.value === "true")}
          style={{ marginLeft: "1rem", padding: "0.25rem 0.5rem" }}>
          <option value="">Select Answer</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      )}

      {/* Add Child Question Button */}
      {question.type === "truefalse" && question.answer === true && (
        <button
          onClick={() => addChild(question.id)}
          style={{ marginLeft: "1rem", padding: "0.25rem 0.5rem" }}>
          Add Child Question
        </button>
      )}

      {/* Delete Button */}
      <button
        onClick={() => remove(question.id)}
        style={{
          marginLeft: "1rem",
          padding: "0.25rem 0.5rem",
          color: "white",
          backgroundColor: "red",
          border: "none",
          borderRadius: "4px",
        }}>
        Delete
      </button>

      {/* Render Children Recursively */}
      {question.children.map((child) => (
        <QuestionForm
          key={child.id}
          question={child}
          update={update}
          addChild={addChild}
          remove={remove}
        />
      ))}
    </div>
  );
}
