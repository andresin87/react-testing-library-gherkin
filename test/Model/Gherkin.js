import React from 'react'
import ReactDOM from 'react-dom'
import {expect} from 'chai'

import setupBuilder from '../helpers/setupBuilder';

class Gherkin {
    #Component;
    #debug = false;
    #attributes = {};
    #environment;
    #test = [];
    constructor(Component, usages = []) {
        this.#Component = Component
        this.#test = [...usages]
    }
    #setAttributes(attributes, callback = () => null) {
        this.#attributes = Object.assign({
            ...this.#attributes
        }, {
            ...attributes
        });
        callback();
    }
    #setDefaultValues() {
        this.#attributes = {};
        this.#debug = false;
    }
    debug() {
        this.#debug = true;
    }
    given(...args) {
        this.#setDefaultValues();
        switch(typeof args[0]) {
            case 'object':
                this.#setAttributes(args[0]);
                break;
            case 'function':
                this.#setAttributes(args[0].call(this.#attributes));
                break;
            default:
                break;
        }
        return this;
    }
    when(callback = setupBuilder) {
        this.#environment = callback(this.#Component)(this.#attributes);
        if (this.#debug) {
           console.log(this.#environment.debug())
        }
        return this;
    }
    then(callback) {
        return callback(
            this.#attributes,
            this.#environment,
            this.#Component,
        );
    }
    use(usage = [key, value]) {
        this.#test[key] = value;
    }
    test() {
        const scenario = this;
        const tests = this.#test;
        const entries = Object.fromEntries(tests.map(function([key, value]) {
            return [key, value.bind(scenario)]
        }));
        return entries;
    }
}

export default Gherkin;