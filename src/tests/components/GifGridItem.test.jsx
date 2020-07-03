import React from 'react';
import { shallow } from 'enzyme';
const { GifGridItem } = require("./../../components/GifGridItem");


describe('Pruebas a GifGridItem', () => {
    // const titulo = 'Un titulo';
    // const url = 'http://localhost/algo.jpg';
    // const wrapper = shallow(<GifGridItem title={titulo} url={url}></GifGridItem>);
    const titulo = 'Un titulo';
    const url = 'http://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={titulo} url={url}></GifGridItem>);


    test('componente GifGridItem debe hacer match', () => {

    
        expect(wrapper).toMatchSnapshot();
    });

    test('deve de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
    });

    test('deve de tener la img igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props());//devuelve un objeto con las propiedades
        // console.log(img.prop('src'));//devuelve el valor de la propiedad

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);

        // expect(p.text().trim()).toBe(titulo);
    });

    test('deve tener clase animate__fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);

    })
    
    
    


});
