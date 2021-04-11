import { getGifs } from '../../helpers/GetGifs'

describe('Test with getGifs fetch', () => {
    test('should return 10 elements', async() => {
        const gifs = await getGifs('Sailor Moon')
        expect(gifs.length).toBe(20)
    })

    test('should return an empty array', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
})