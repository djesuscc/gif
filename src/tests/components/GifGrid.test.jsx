import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test int component <GifGrid />', () => {
    const category = 'Dragon Ball';

    test('should show correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
   test('should show items when the images are load with the useFetchGifs hook', () => {

        const gifs = [{
            id: 'abc',
            url: 'hhtps://localhost/test.png',
            title: 'Image test'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
   });
});