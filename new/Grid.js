const GRID_SIZE = 5;
const CELL_SIZE = 20;
const CELL_GAP = 2;


export default class Grid {
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size", GRID_SIZE)
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`)
        gridElement.style.setProperty("--sell-gap", `${CELL_GAP}vmin`)
    }
}