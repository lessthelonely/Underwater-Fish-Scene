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
            3,1,0 
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
            2,1,4,
            1,3,4,
            4,3,5,
            2,1,0,
            4,1,2,
            4,3,1,
            5,3,4 
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

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;
	
		this.initGLBuffers();
	}
}

