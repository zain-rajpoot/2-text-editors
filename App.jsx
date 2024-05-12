import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
const App = () => {
  // npm i react-quill
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["link"],
      [{ color: [] }, { background: [] }],
      ["image"],
      ["clean"],
      ["blockquote"],
      ["code-block"],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["formula"],
      ["video"],
    ],
  };
  // npm install jodit-react --save
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const placeholder = "Start typing...";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    []
  );
  // ----------------------------------------------

  return (
    <div>
      <a href="npm i react-quill">npm i react-quill</a>
      <ReactQuill
        modules={modules}
        placeholder="Start writing from here..."
        style={{ height: "100%" }}
      />
      <br />
      <br />
      <br />
      <br />
      <h2>npm install jodit-react --save</h2>
      <div>
        <h1>Using npm install jodit-react --save</h1>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => {
            setContent(newContent);
          }}
          onChange={(newContent) => {}}
          autoFocus
        />
        <div>
          <button onClick={() => console.log("Current content:", content)}>
            Get Editor Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
