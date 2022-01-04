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

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
