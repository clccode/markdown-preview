import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [FreeCodeCamp](https://www.freecodecamp.org)
  \`<p>You can also insert code</p>\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div className="mdown-preview">
        <h1>Markdown Previewer</h1>
        <textarea 
        id="editor"
        onChange={(event) => {
          setText(event.target.value)
        }}
        value={text}
        ></textarea>
      </div>
        <div className='preview-pane'>
        <div 
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
