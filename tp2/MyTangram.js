import {CGFobject} from '../lib/CGF.js';
import {MyDiamond} from './MyDiamond.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyTriangle } from './MyTriangle.js';
import { MyParallelogram } from './MyParallelogram.js';
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.diamond=new MyDiamond(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
	}
	
	display(){
        //Diamond
        var dmd = [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.8, 2.6, 0.0, 1.0];
        this.scene.pushMatrix();
        this.scene.multMatrix(dmd);
        this.scene.setDiffuse(0,1,0,0);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.1,0.7,0); //last line of the matrix, like dmd
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1); //z rotation
        this.scene.setDiffuse(1,0,0,0);
        this.redTriangle.display();
        this.scene.popMatrix(); 
        
        this.scene.pushMatrix();
        this.scene.translate(-0.2,-2.1,0);
        this.scene.rotate(45*Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(1,0,1,0);  
        this.purpleTriangle.display();
        this.scene.popMatrix();
           
        this.scene.pushMatrix();
        this.scene.rotate(135*Math.PI/180,0,0,1);
        this.scene.setDiffuse(255, 165, 0, 0);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4,-1.4,0);
        this.scene.rotate(-45*Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(0, 12, 90, 0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.2,1,0);
        this.scene.rotate(90*Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(255, 0, 90, 0);
        this.pinkTriangle.display();
        this.scene.popMatrix();
            
        this.scene.pushMatrix();
        this.scene.translate(5.85, 0.4, 0);
        this.scene.rotate(Math.PI/5.5, 0, 0, 1); //z rotation
        this.scene.rotate(Math.PI, 0, 1, 0); //y rotation
        this.scene.setDiffuse(255, 0, 90, 0);
        this.parallelogram.display();
        this.scene.popMatrix();
    }

}
