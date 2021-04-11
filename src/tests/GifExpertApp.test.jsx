import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test on <GifExpertApp />', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
        const categories = ['One punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
});