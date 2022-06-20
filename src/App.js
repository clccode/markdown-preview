import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # Welcome to my simple Markdown Previewer!
  ## This is a subheading
  ### Here are some other cool things you can do:

  [Links, like this one to my GitHub page](https://github.com/clccode)

  \`<p>You can also insert code like this</p>\`

  Or fenced in code blocks like this:

  \`\`\`
{
  "firstName": "Clark",
  "lastName": "Kent",
  "age": ?
}

\`\`\`

Here's an unordered list:
  - First item
  - Second item
  - Third item

  You can also enter blockquotes: > "I have a dream!"

  You can also add images:

  ![code image](https://live.staticflickr.com/822/40238552784_c48d2029a2_n.jpg)

  **You can easily add bold text...**
  
  *...and text in italics too.*
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
