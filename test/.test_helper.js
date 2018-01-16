import React from 'react'
import ReactDOM from 'react-dom'
import {JSDOM} from 'jsdom'
import _$ from 'jquery'
import {createStore} from 'redux'
import ReactTestUtils from 'react-dom/test-utils'
import reducers from '../src/reducers'
import {Provider} from 'react-redux'
import chai, {expect} from 'chai'
import chai_jq from 'chai-jq'

// set up mocha and running environment
const jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const $ = _$(jsdom.window);


function renderComponent(ComponentClass, props, state) {
    const componentInstance = ReactTestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props}/>
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = (eventName, value) => {
    if (value) {
        this.val(value);
    }

    ReactTestUtils.Simulate[eventName](this[0]);
};

// set up chai jquery

chai.use(chai_jq);

export {$, renderComponent, expect}
