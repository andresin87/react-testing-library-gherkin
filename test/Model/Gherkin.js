import React from 'react'

import setupBuilder from '../helpers/setupBuilder';

class Gherkin {
    #Component;
    #debug = false;
    #attributes = {};
    #environment;
    #usages = [];
    constructor(Component, usages = []) {
        this.#Component = Component
        this.#usages = [...usages]
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
        return this;
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
        this.#usages[key] = value;
    }
    test() {
        const scenario = this;
        const usages = this.#usages;
        return Object.fromEntries(usages.map(function([key, value]) {
            return [key, value.bind(scenario)]
        }));
    }
}

export default Gherkin;