import React from 'react';
import { expect } from 'chai';
import 'jsdom-global/register'

import Gherkin from './Model/Gherkin'
import App from '../src/app.js';
import render from './helpers/tests/render';
import nullish from './helpers/tests/nullish';


const gherkin = new Gherkin(App, [
    ['render', render],
    ['nullish', nullish],
])

describe('<App />', () => {

    it('should render without crashing', function() {
        gherkin.test().render()
    });

    it(`should not render null`, () => {
        gherkin.test().nullish()
    });

    it('renders our app with welcome text', function() {
        gherkin
            .given({
                text: 'Welcome to the React application.'
            })
            .when()
            .then( function({text}, {getByText, container}) {
                const textElement = getByText(text)
                expect(container).to.be.not.undefined
                expect(textElement).to.be.not.undefined
                expect(textElement.textContent).to.equal(text)
            })
    });

});
