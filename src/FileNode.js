import React, { Component } from 'react';
import { Icon }from 'antd';

class FileNode extends Component {
    state = {
        open: false,
    }

    toggle = () => {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        const { name, files } = this.props;
        const { open } = this.state;
        if (!files) {
            return (
                <div className="main nofiles">
                    <Icon type="file-text" />
                    <div className="name">{name}</div>
                </div>
            );
        }
        return (
            <div>
                <div
                    className={`folder ${open ? 'open' : ''}`}
                    onClick={this.toggle}
                >
                    <div className="main">
                        <Icon
                            className="icon"
                            type={`folder${open ? '-open' : '-add'}`}
                        />
                        <div className="name">{name}</div>
                    </div>
                </div>
                {!open ? null : (
                    <ul className="list">
                        {files.map((file) => (
                            <FileNode {...file} />
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default FileNode;