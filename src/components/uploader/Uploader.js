import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Uploader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            file: {name: ''}
        }

        this.openInput = this.openInput.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    openInput() {
        this.refs.file.click();
    }

    handleFile(e) {
        let file = e.target.files[0]
        if(!file) return;
        // console.log(file)

        this.setState({
            file
        });

        this.props.getFile(this.props.type, file)
    }

    render() {
        return (
            <div style={{'margin': '5px'}}>
                <input type="file" 
                        ref="file" 
                        style={{'display': 'none'}} 
                        onChange={this.handleFile}/>
                <span style={{'marginRight': '0.5em'}}>{this.state.file.name}</span>
                <Button color="primary" variant="contained" onClick={this.openInput}>
                {this.props.label}
                </Button>
            </div>
        );
    }
}

export default Uploader;
