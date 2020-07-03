import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
const  wrapper = shallow(<GifExpertApp></GifExpertApp>);   

test('match con GifExpertApp', () => {
    expect(wrapper).toMatchSnapshot();
});

test('deve mostrar una lista de categorias', () => {
    const categories = ['sasha grey', 'stoya']
    const  wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>);  
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
});



})
