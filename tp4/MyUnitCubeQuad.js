import {MyQuad} from './MyQuad.js';
import {CGFappearance, CGFobject} from '../lib/CGF.js';

/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene, top, side, bottom) {
		super(scene);
        this.initBuffers();

        this.face1 = new MyQuad(this.scene);
        this.top=new CGFappearance(this.scene);
        this.top.setAmbient(0.1, 0.1, 0.1, 1);
        this.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.top.setShininess(10.0);
        this.top.setTextureWrap('REPEAT', 'REPEAT');
        this.top.setTexture(top);

        this.bottom=new CGFappearance(this.scene);
        this.bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottom.setShininess(10.0);
        this.bottom.setTextureWrap('REPEAT', 'REPEAT');
        this.bottom.setTexture(bottom);

        this.side=new CGFappearance(this.scene);
        this.side.setAmbient(0.1, 0.1, 0.1, 1);
        this.side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.side.setSpecular(0.1, 0.1, 0.1, 1);
        this.side.setShininess(10.0);
        this.side.setTextureWrap('REPEAT', 'REPEAT');
        this.side.setTexture(side);
	}
	
	display(){
        this.side.apply();
        if (!this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    
    
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.face1.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.rotate(180.0*Math.PI/180.0,0,1,0);
        this.scene.translate(0,0,0.5);
        this.face1.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(90.0*Math.PI/180.0,0,1,0);
        this.face1.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-90.0*Math.PI/180.0,0,1,0);
        this.face1.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-90.0*Math.PI/180.0,1,0,0);
        this.top.apply();
            
        if (!this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    
        this.face1.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(90.0*Math.PI/180.0,1,0,0);
        this.bottom.apply();
        
        if (!this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
    
        this.face1.display();
        this.scene.popMatrix();
    }
}


