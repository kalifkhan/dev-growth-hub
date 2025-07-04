import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const initialMarkdown = `# Welcome to the Markdown Editor!

- Type your **Markdown** on the left
- See the _preview_ on the right

## Features

- Live preview
- Supports basic Markdown syntax

---

\`\`\`js
// Example code block
console.log("Hello, Markdown!");
\`\`\`
`;

const MarkDown = () => {
    const [markdown, setMarkdown] = useState(initialMarkdown);

    return (
        <div style={{ display: "flex", gap: "2rem" }}>
            <textarea
                style={{ width: "50%", height: "80vh", fontSize: "1rem" }}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
            <div
                style={{
                    width: "50%",
                    height: "80vh",
                    overflowY: "auto",
                    border: "1px solid #ccc",
                    padding: "1rem",
                    background: "#fafafa",
                }}
            >
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkDown;