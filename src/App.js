import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [text, setText] = useState('');
  const valueChange = (event) => {
    setText(event.target.value)
  }
  marked.setOptions({
    breaks: true
  })
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">Navbar</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <span className="nav-link active" aria-current="page" href="#">Home</span>
              <span className="nav-link" href="#">Features</span>
              <span className="nav-link" href="#">Pricing</span>
              <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="App">
        <div className="container">
          <h2>Editor</h2>
          <textarea name="editor" id="editor" cols="30" rows="10" onChange={valueChange}></textarea>
        </div>
        <div className="container">
          <h2>Preview</h2>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(text),}}></div>
        </div>
      </main>
    </div>
  );
}

export default App;