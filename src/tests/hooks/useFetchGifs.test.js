import '@testing-library/jest-dom';
const { useFetchGifs } = require("../../hooks/useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");



describe('pruebas de useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {

        //crea componente virtual
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('goku'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imagenes', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('goku'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })



})