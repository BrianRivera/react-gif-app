import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('GifGrid test', () => {
    const category = 'sasha grey';
    
    test('componente hace match', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}></GifGrid>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        //un mock es para finjir que el componente tiene algo
        const gifs = [{
            id:'ABC',
            url: 'http://cosa/cosa',
            title: 'gif prueba'
        },
        {
            id:'ABC',
            url: 'http://cosa/cosa',
            title: 'gif prueba'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}></GifGrid>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    });
    


})
