import React from 'react';
import emojione from 'emojione';

function getEmojiHTML(code) {

    return {
        __html: emojione.shortnameToImage(code)
    }
}

const Emoji = (props) => {
    return (
        <div onClick={() => props.onClick(props.code)} dangerouslySetInnerHTML={getEmojiHTML(props.code)}>
            
        </div>
    )
}

export default Emoji;