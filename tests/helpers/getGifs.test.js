import { getGifs } from "../../src/helpers/getGifs"

describe('Prueba de <GetGifts />', () => {
    test('debe retornar un arreglo de gifts', async () => {
        const gifs = await getGifs('Genshin Impact');
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})