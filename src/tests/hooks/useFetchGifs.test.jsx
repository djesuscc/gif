import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Test in the hook useFetchGifs', () => {
    test('should return the initial state', async () => {
        const category = 'Sailor Moon';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an array of images and loading in false', async () => {
        const category = 'Sailor Moon';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));

        await waitForNextUpdate()
        const { data, loading } = result.current;

        expect(data.length).toBe(20);
        expect(loading).toBe(false);
    });
});