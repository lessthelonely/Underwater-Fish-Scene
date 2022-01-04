import {MyQuad} from './MyQuad.js';
import {CGFobject} from '../lib/CGF.js';
/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 * @param back - Cubemap's back texture
 * @param bottom - Cubemap's bottom texture
 * @param front - Cubemap's front texture
 * @param left - Cubemap's left texture
 * @param right- Cubemap's right texture
 * @param top - Cubemap's top texture
 */
export class MyCubeMap extends CGFobject {
    constructor(scene, back, bottom, front, left, right, top) {
        super(scene);
        this.initBuffers();
        
        this.topFace = new MyQuad(this.scene);
        this.bottomFace = new MyQuad(this.scene);
        this.rightFace = new MyQuad(this.scene);
        this.leftFace = new MyQuad(this.scene);
        this.frontFace = new MyQuad(this.scene);
        this.backFace = new MyQuad(this.scene);
        
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.front = front;
        this.back = back;
        
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.back.apply();
        this.frontFace.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.front.apply();
        this.backFace.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.left.apply();
        this.leftFace.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.right.apply();
        this.rightFace.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.bottom.apply();
        this.bottomFace.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.top.apply();
        this.topFace.display();
        this.scene.popMatrix();
        
    }
}
