import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
                  -0.5, -0.5, 0.5,    //Bottom front left 
                  0.5, -0.5, 0.5,        //Bottom front right
                  -0.5, 0.5, 0.5,        //Top front left 
                  0.5, 0.5, 0.5,        //Top front right
                  -0.5, -0.5, -0.5,    //Bottom back left
                  0.5, -0.5, -0.5,    //Bottom back right
                  -0.5, 0.5, -0.5,    //Top back left 
                  0.5, 0.5, -0.5        //Top back right  
              ];

		//Counter-clockwise reference of vertices
		this.indices = [
                  // Front
                  2, 0, 1,
                  3, 2, 1,
      
                  // Right
                  3, 1, 5,
                  7, 3, 5,
      
                  // Back
                  7, 5, 4,
                  6, 7, 4,
      
                  // Left
                  0, 2, 4,
                  4, 2, 6,
      
                  // Top
                  6, 2, 3,
                  7, 6, 3,
      
                  // Bottom
                  4, 5, 1,
                  4, 1, 0
                  
              ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
      }
}

