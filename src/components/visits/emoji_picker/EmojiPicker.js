import React, { Component } from 'react';
import Emoji from './Emoji';

import {emojis, relation} from './Emojis';

export default class EmojiPicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emojis
        }

        this.emojiSelected = this.emojiSelected.bind(this);
    }

    buildEmojis(){
        return this.state.emojis.map(short_code => <Emoji onClick={this.emojiSelected} code={short_code}/>)
    }

    emojiSelected(code) {
        const reaction = relation[code];
        //reordamiento de los emojis
        //El que seleccione pasara a ser el primero
        //Filter eliminara arreglos confrme una condicion
        const emojisReordered = [code].concat(emojis.filter(el => el != code))
        this.props.onSelect(reaction);

        this.setState({
            emojis: emojisReordered
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.buildEmojis() }
                </ul>
            </div>
        )
    }
}