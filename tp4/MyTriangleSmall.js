import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.initBuffers(color);
		this.initNormalVizBuffers();

	}
	
	initBuffers(color) {
		this.vertices = [
			-1,0,0,
            0,1,0,
            1,0,0,
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

		this.texCoords = [];
		if (color === 'red'){
			this.texCoords.push(0.5, 0.5);
			this.texCoords.push(0.75, 0.75);
			this.texCoords.push(0.25, 0.75);
		}
		if (color === 'purple'){
			this.texCoords.push(0, 0);
			this.texCoords.push(0.25, 0.25);
			this.texCoords.push(0, 0.5);
		}
		

		this.initGLBuffers();
	}
}
