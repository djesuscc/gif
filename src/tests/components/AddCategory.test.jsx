import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
import { shallow  } from 'enzyme';

describe('Test in <AddCategory /> ', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const input = wrapper.find('input');
    const value = 'Hello World';

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should show correctlry', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('should change the text in the input', () => {
        input.simulate('change', { target: { value } });
    });
    test('should not post data on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('should call the function setCategorie and clean the input', () => {
       // input.simulate('change', { target: { value } })
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenLastCalledWith(expect.any(Function))
        expect(input.prop('value')).toBe('')
    })
    
})