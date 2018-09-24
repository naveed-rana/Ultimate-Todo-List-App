import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import AddTodo from '../AddTodo';
import { Provider } from "react-redux";
import store from '../Redux/store';


test('Should Render Done Task page Correctly', () => {

    const renderer = new ReactShallowRenderer();
    renderer.render(
        < Provider store={store}>
            <AddTodo />
        </Provider>
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})