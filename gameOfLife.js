function initializeGOL(grid)
{
    gol = new Array();
    for (var i = 0; i < grid.sizeX; i++) {
        gol[i] = new Array();
        for (var j = 0; j < grid.sizeY; j++) {
            var x = Math.random();
            if (x > 0.80) { gol[i][j] = [1, 0]; }
            else { gol[i][j] = [0, 0]; }
        }
    }
    return gol
}

function determineNewState(newEz, gol, newGol, i, j, neighbors)
{

    // get the new eZ field
    var newValue = gol[i][j][1] + Math.abs(newEz) - 0.01*gol[i][j][1];
    
    newGol[i][j] = [gol[i][j][0], newValue];

    // if the cell is alive
    if (newGol[i][j][0] == 1) {
        // if fewer than 2 neighbors or greater than 3
        if ((newGol[i][j][1] < 5.5) && (neighbors < 2 || neighbors > 3)) {
            newGol[i][j] = [0, gol[i][j][1]];
        }
        // potentially other living rules go here
    }

    // if the cell is dead and if it has more than 2 neighbors, the cell becomes liave
    else if (neighbors == 3) {
        newGol[i][j][0] = 1;
    }
}

function getNeighbor(gol, i, j) {
    if (i < 0 || j < 0) { return 0; }
    else if (i > gol.length - 1 || j > gol[0].length - 1) { return 0; }
    else if (gol[i][j][0] == 1) { return 1; }
    else return 0;
}

function calcNewGeneration(ez, gol, sizeX, sizeY)
{
    newGol = new Array();
    for (var i = 0; i < sizeX; i++) {
        newGol[i] = new Array();
        for (var j = 0; j < sizeY; j++) {

	    var neighbors = 0;

	    for (var k = -1; k < 2; k++) {
		for (var l = -1; l < 2; l++) {
		    if (!(k == 0 && l == 0)) {
			neighbors += getNeighbor(gol, i + k, j + l);
		    }
		}
	    }

            determineNewState(ez[i][j], gol, newGol, i, j, neighbors);
        }
    }

    return newGol;
}
