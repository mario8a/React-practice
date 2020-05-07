import React, { Component } from 'react';
import Emoji from './Emoji';

import {emojis} from './Emojis';

export default class EmojiPicker extends Component {

    buildEmojis(){
        return emojis.map(short_code => <Emoji code={short_code}/>)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.buildEmojis()}
                </ul>
            </div>
        )
    }
}