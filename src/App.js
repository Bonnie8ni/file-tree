import React, { Component } from 'react';
import FileNode from './FileNode';
import files from './files.json';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h2>點擊展開資料夾</h2>
                <FileNode {...files} />
            </div>
        );
    }
}

export default App;