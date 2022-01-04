import {CGFobject} from '../lib/CGF.js';
import {MyQuad} from './MyQuad.js';

/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	display(){

        if (true){
            this.base=new MyQuad(this.scene);
            this.base.initBuffers();

            this.scene.pushMatrix();
            this.scene.translate(0.5, -1, 0.5);
            this.scene.rotate(Math.PI/2, 1, 0, 0);
            this.base.display();
            this.scene.popMatrix();
        }

        if (true){
            this.firstLateral=new MyQuad(this.scene);
            this.firstLateral.initBuffers();

            this.scene.pushMatrix();
            this.scene.translate(0.5, -0.5, 1);
            this.firstLateral.display();
            this.scene.popMatrix();
        }

        if (true){
            this.secondLateral=new MyQuad(this.scene);
            this.secondLateral.initBuffers();

            this.scene.pushMatrix();
            this.scene.translate(1, -0.5, 0.5);
            this.scene.rotate(Math.PI/2, 0, 1, 0);
            this.secondLateral.display();
            this.scene.popMatrix();
        }

        if (true){
            this.thirdLateral=new MyQuad(this.scene);
            this.thirdLateral.initBuffers();

            this.scene.pushMatrix();
            this.scene.translate(0.5, -0.5, 0);
            this.scene.rotate(Math.PI, 1, 0, 0);
            this.thirdLateral.display();
            this.scene.popMatrix();
        }
        
        if (true){
            this.forthLateral=new MyQuad(this.scene);
            this.forthLateral.initBuffers();

            this.scene.pushMatrix();
            this.scene.translate(0, -0.5, 0.5);
            this.scene.rotate(-Math.PI/2, 0, 1, 0);
            this.forthLateral.display();
            this.scene.popMatrix();
        }

        if (true){
            this.top=new MyQuad(this.scene);
            this.top.initBuffers();

            this.scene.pushMatrix();
            this.scene.translate(0.5, 0, 0.5);
            this.scene.rotate(-Math.PI/2, 1, 0, 0);
            this.top.display();
            this.scene.popMatrix();
        }

    }
}

