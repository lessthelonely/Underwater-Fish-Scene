import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.initNormalVizBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0,0,0,
            1,0,0,
			1,1,0,
            2,0,0,
            2,1,0,
            3,1,0,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            0, 2, 1,
            1, 3, 2,
            1, 2, 3,
            3, 4, 2,
            3, 2, 4,
            3, 5, 4,
            3, 4, 5
          ];

		//Normal
		/*
        As this figure is being drawn on the xy plane, the normal to the plane will be along the positive & negative z axis.
        So all the vertices will have the either the normal (0,0,1) or (0,0,-1)
        */
	    this.normals=[		
			0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,

            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
        ];

        this.texCoords=[
            1, 1,
            0.75, 0.75,
            0.75, 1,
            0.5, 0.75,
            0.5, 1,
            0.25, 0.75,
        ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;
	
		this.initGLBuffers();
	}
}

