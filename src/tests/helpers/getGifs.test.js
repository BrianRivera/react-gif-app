const { getGif } = require("../../helpers/getGifs")



describe('Pruebas con getGifts Fetsh', () => {

    test('debe retornar 10 elementos', async() => {
        const gif = await getGif('one punch');

        expect(gif.length).toBe(10)
    })

    test('debe retornar 0 elementos', async() => {
        const gif = await getGif('');

        expect(gif.length).toBe(0)
    })

})