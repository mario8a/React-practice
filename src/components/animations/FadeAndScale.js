import React, { Component } from 'react';
import {
    CSSTransition,
  } from 'react-transition-group';

export default class FadeAndScale extends Component {
    render(){
        return(
          <div className={this.props.className}>
            <CSSTransition
                timeout={200}
                in={this.props.in}
                classNames="my-node"
                unmountOnExit={true}
              >
              {this.props.children}
            </CSSTransition>
          </div>
        );
      }
    
}
