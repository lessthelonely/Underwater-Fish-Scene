import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.initNormalVizBuffers();

	}
	
	initBuffers() {
		this.vertices = [
			-2,0,0,
            0,2,0,
            2,0,0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,2,1,
		];


		
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.normals = [];
        for (var i = 0; i <= 2; i++) {
            this.normals.push(0, 0, 1);
		}

		this.initGLBuffers();
	}
}
