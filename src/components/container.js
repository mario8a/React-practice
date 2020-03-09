import React from 'react';
// Un componente que se representa como funcion
// Es una funcion que recibe un objeto (props)
const Container = (props) => {
    return(
        <div className="row center-xs" style={{"width": "100%"}}>
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              {props.children}
            </div>
        </div>
    );
}

export default Container;