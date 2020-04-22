import ReactDOM from "react-dom";
import React from "react";

const render = function(props) {
    this
        .given(() => props)
        .when()
        .then((attributes,environment,component) => {
            const div = document.createElement('div')
            ReactDOM.render(React.createElement(component, props), div)
            ReactDOM.unmountComponentAtNode(div)
        });
}

export default render;