export const setupCells = <Cells extends object>
(cells: Cells, cellParams?: { [key in keyof Partial<Cells>]: TCellsParams }) => {
    return Object.entries(cells).reduce((accum, [key, value]) => {
        // accum = {
        //     ...accum,
        //     [key]:
        // }
        return accum
    }, {...cells})

}

type TCellsParams = {
    default: 'previous' | 'external' | 'default' | 'empty'
}
