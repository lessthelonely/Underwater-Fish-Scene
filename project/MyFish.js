//Gonna work like Tangram--->adds MyfishBody (deformated sphere) + MyTriangleSmall
import {CGFobject} from '../lib/CGF.js';
import { MyTriangleSmall } from './MyTriangleSmall.js';
import { MyTriangle} from './MyTriangle.js';
import { MySphere } from './MySphere.js';
/**
 * MyFish
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyFish extends CGFobject {
    constructor(scene, rightEye, leftEye, body, testShader, toBind, r, g, b, rock_tex) {
        super(scene);
        this.head = new MyTriangleSmall(this.scene);
        this.left = new MyTriangleSmall(this.scene);
        this.right = new MyTriangleSmall(this.scene);
        this.tail = new MyTriangle(this.scene);
        this.fishBody = new MySphere(this.scene, 16, 16);
        this.eyesLeft = new MySphere(this.scene, 16, 8);
        this.eyesRight = new MySphere(this.scene, 16, 8);
        this.rightEye = rightEye;
        this.leftEye = leftEye;
        this.rock_tex = rock_tex;
        
        this.body = body;
        this.testShader = testShader;
        this.finAngle = 0;
        this.tailAngle = 0;
        this.leftside = 0;
        this.counter = 0;
        this.flap = 0;
        this.tailFlap = 0;
        this.toBind = toBind;
        this.r = r;
        this.g = g;
        this.b = b;
        
        this.vel = 0;
        this.finLeft = true;
        this.finRight = true;
        
        this.rock = [];
    }
    
    update(t) {
        this.zero = false;
        if (this.vel == 0) {
            this.vel = 0.5;
            this.zero = true;
        }
        
        this.tailAngle = (Math.PI / 9) * Math.sin(t / 200) * this.vel * 2;
        
        if (this.finLeft) {
            this.finAngleLeft = (Math.PI / 12) * Math.sin(t / 300) * this.vel * 2;
        } else {
            this.finAngleLeft = 0;
        }
        
        if (this.finRight) {
            this.finAngleRight = (Math.PI / 12) * Math.sin(t / 300) * this.vel * 2;
        } else {
            this.finAngleRight = 0;
        }
        
        if (this.zero) {
            this.vel = 0;
        }
    }
    
    reset() {
        this.finLeft = true;
        this.finRight = true;
        this.vel = 0;
        
        if (this.rock.length > 0) {
            this.rock.pop();
        }
    }
    
    speed(val) {
        this.vel = val;
    }
    
    Mleft(val) {
        this.finLeft = val;
    }
    
    Mright(val) {
        this.finRight = val;
    }
    
    display() {
        if (this.rock.length > 0) {
            this.scene.pushMatrix();
            this.scene.translate(0, -0.5, 1.5);
            
            if (this.rock[0].getRot() == 1) {
                this.scene.rotate(this.rock[0].getAngle() / 180, 1, 0, 0);
            } else if (this.rock[0].getRot() == 2) {
                this.scene.rotate(this.rock[0].getAngle() / 180, 0, 1, 0);
            } else {
                this.scene.rotate(this.rock[0].getAngle() / 180, 0, 0, 1);
            }
            
            this.scene.scale(this.rock[0].getScaleX(), this.rock[0].getScaleY(), this.rock[0].getScaleZ());
            
            this.rock_tex.apply();
            this.rock[0].display();
            this.scene.popMatrix();
        }
        
        //Left Eye
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(-0.75, 0.3, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.2, 0.2, 0.2);
        this.scene.rotate(Math.PI * 77 / 180, 0, 1, 0);
        this.leftEye.apply();
        this.eyesLeft.display();
        this.scene.popMatrix();
        
        //Right Eye
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(-0.75, 0.3, -0.5);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.2, 0.2, 0.2);
        this.scene.rotate(-Math.PI * 77 / 180, 0, 1, 0);
        this.rightEye.apply();
        this.eyesRight.display();
        this.scene.popMatrix();
        
        //Head
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(-0.3, 1.2, 0); //last line of the matrix, like dmd
        this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1); //z rotation
        this.scene.setDiffuse(this.r, this.g, this.b, 0);
        this.head.display();
        this.scene.popMatrix();
        
        //Left Fin
        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.rotate(-Math.PI / 8, 0, 0, 1);
        this.scene.translate(0.9, 0, 0.7);
        this.scene.rotate(0, 0, 0, 1);
        this.scene.rotate(-this.finAngleLeft, 0, 0, 1);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.translate(1, 0, 0);
        this.scene.setDiffuse(this.r, this.g, this.b, 1);
        this.right.display();
        this.scene.popMatrix();
        
        //Right Fin
        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.rotate(Math.PI / 8, 0, 0, 1);
        this.scene.translate(-0.9, 0, 0.7);
        this.scene.rotate(0, 0, 0, 1);
        this.scene.rotate(this.finAngleRight, 0, 0, 1);
        this.scene.rotate(-Math.PI / 4, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.translate(-1, 0, 0);
        this.scene.setDiffuse(this.r, this.g, this.b, 1);
        this.left.display();
        this.scene.popMatrix();
        
        //Tail
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -1.5);
        this.scene.rotate(this.tailAngle, 0, 1, 0);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.translate(1, 1, 0);
        this.scene.setDiffuse(this.r, this.g, this.b, 0);
        this.tail.display();
        this.scene.popMatrix();
        
        //Body
        this.scene.setActiveShader(this.testShader);
        this.body.bind(this.toBind);
        this.scene.pushMatrix();
        this.rightEye.apply();
        this.scene.scale(0.75, 1, 1.5);
        this.fishBody.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
    
    addRock(r) {
        this.rock.push(r);
    }
    
    getRock() {
        return this.rock;
    }
    
    removeRock() {
        return this.rock.pop();
    }
    
}
