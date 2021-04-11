import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'
const title = 'Test'
const url = 'http://test.com'
const wrapper = shallow( <GifGridItem title={title} url={url} /> )

describe('Test in <GifGridItem />', () => {
    

    test('should show correctly the component', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('should have a paragraph on the title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    
    test('Should have the same image url at props.url', () => {
        const img = wrapper.find('img')
        //console.log(img.props().src)
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('Should have the className fadeIn', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    })
})