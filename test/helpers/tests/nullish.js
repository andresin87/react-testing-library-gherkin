import React from "react";
import {expect} from "chai";

const nullish = function(props, isNull = false) {
    this
        .given(props)
        .when()
        .then(({}, {container}) => {
            if (isNull) {
                expect(container).to.not.null
            } else {
                expect(container).to.not.be.null
            }
        });
}

export default nullish;
