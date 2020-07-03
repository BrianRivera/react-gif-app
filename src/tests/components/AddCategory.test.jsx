import '@testing-library/jest-dom';
import React from 'react'
import { AddCategory } from '../../components/AddCategory';
const { shallow } = require("enzyme");



describe('pruebas en AddCategory', () => {

    //jest.fn() da mas datos de una funcion normal, como fue llamada, 
    //si fue llamada o cuentas veses fue llamada etc

    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategory}></AddCategory>);

    beforeEach(()=>{
        //limpia de moks o simulaciones de algo
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias={setCategory}></AddCategory>);

    });

    test('debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change',{ target:{ value:value }});


    });
    
    test('NO debe de postear la info con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // toHaveBeenCalled -que se llame la funcion
        expect( setCategory ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategory y limpiar la caja de texto', () => {
        // simular el inputChange
        // simular el submit
        // llamar el setCategori
        // el valor del input deve de estar ''

        const valor = 'sasha grey';
        const input = wrapper.find('input');
        input.simulate('change', {target: {value:valor}});
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect(setCategory).toHaveBeenCalled();

        // expect(setCategory).toHaveBeenCalledWith(expect.any(Function)); se comprueba que lo que se ejecuta aya sido una funcion  

        expect(input.prop('value')).toBe('');


    })
    
    


})
