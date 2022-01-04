import {CGFobject} from '../lib/CGF.js';
import { MyPyramid } from './MyPyramid.js';
/**
 * MySeaWeed
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MySeaWeed extends CGFobject { //Make 3 sets 
    constructor(scene) {
        super(scene);
        
        this.num1 = Math.floor(Math.random() * 2) + 2; //2->4
        
        this.weeds1 = [];
        for (let i = 0; i < this.num1; i++) {
            this.weeds1.push(new MyPyramid(this.scene, 3, 1));
        }
        
        this.x1 = (Math.random() * 48) - 24; //24-(-24)=48
        this.z1 = (Math.random() * 48) - 24;
        while (this.x1 >= 10.5 && this.x1 <= 20.5 && this.z1 >= -22.7 && this.z1 <= -12.7) {
            this.x1 = (Math.random() * 48) - 24;
            this.z1 = (Math.random() * 48) - 24;
        }
        this.scale_x1 = (Math.random() * 0.9) + 0.1; //0.1->2
        this.scale_y1 = (Math.random() * 3) + 0.5; //0.5->3.5
        this.scale_z1 = (Math.random() * 0.9) + 0.1; //0.1->2
        this.value1 = Math.floor((Math.random() * 4) + 1); //1->5
        
        this.num2 = Math.floor(Math.random() * 2) + 2; //2->5
        
        this.weeds2 = [];
        for (let i = 0; i < this.num2; i++) {
            this.weeds2.push(new MyPyramid(this.scene, 3, 1));
        }
        
        this.x2 = (Math.random() * 48) - 24;
        this.z2 = (Math.random() * 48) - 24;
        while (this.x2 >= 10.5 && this.x2 <= 20.5 && this.z2 >= -22.7 && this.z2 <= -12.7) {
            this.x2 = (Math.random() * 48) - 24;
            this.z2 = (Math.random() * 48) - 24;
        }
        this.scale_x2 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y2 = (Math.random() * 3.5) + 0.5; //0.5->4
        this.scale_z2 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.value2 = Math.floor((Math.random() * 4) + 1); //1->5
        
        this.num3 = Math.floor(Math.random() * 2) + 2; //2->5
        
        this.weeds3 = [];
        for (let i = 0; i < this.num3; i++) {
            this.weeds3.push(new MyPyramid(this.scene, 3, 1));
        }
        
        this.x3 = (Math.random() * 48) - 24;
        this.z3 = (Math.random() * 48) - 24;
        while (this.x3 >= 10.5 && this.x3 <= 20.5 && this.z3 >= -22.7 && this.z3 <= -12.7) {
            this.x3 = (Math.random() * 48) - 24;
            this.z3 = (Math.random() * 48) - 24;
        }
        this.scale_x3 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y3 = (Math.random() * 3.5) + 0.5; //0.5->4
        this.scale_z3 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.value3 = Math.floor((Math.random() * 4) + 1); //1->5
        
    }
    
    display() {
        //this.value3 = 1.0;
        //this.translate(0,-4.5,0);--->seaFloor current position
        //x & z value range: [-24,24]
        
        //this.scene.setActiveShader(this.shader);
        
        //SeaWeed set 1
        //weed11
        for (let i = 0; i < this.num1; i++) {
            if (this.value1 == 1) {
                this.scene.setDiffuse(1, 1, 0, 1);
            } else if (this.value1 == 2) {
                this.scene.setDiffuse(0.6, 0.6, 0.9, 1.0);
            } else if (this.value1 == 3) {
                this.scene.setDiffuse(1.0, 0.0, 0.0, 1.0);
            } else if (this.value1 == 4) {
                this.scene.setDiffuse(1.0, 0.64, 0.0, 1.0);
            } else if (this.value1 == 5) {
                this.scene.setDiffuse(0.0, 1.0, 0.0, 1.0);
            }
            
            if (i == 0) {
                this.scene.pushMatrix();
                this.scene.translate(this.x1, -4.5, this.z1);
                this.scene.scale(this.scale_x1, this.scale_y1, this.scale_z1);
                this.weeds1[i].display();
                this.scene.popMatrix();
            } else if (i % 2 == 0) {
                this.scene.pushMatrix();
                this.scene.translate(this.x1 + this.scale_x1 + 0.5 * i, -4.5, this.z1 + this.scale_z1 + 0.3 * i);
                this.scene.scale(this.scale_x1 + 0.1 * i, this.scale_y1 - 0.3 * i, this.scale_z1 + 0.1 * i);
                this.weeds1[i].display();
                this.scene.popMatrix();
            } else {
                this.scene.pushMatrix();
                this.scene.translate(this.x1 + this.scale_x1 + 0.3 * i, -4.5, this.z1 + this.scale_z1 + 0.2 * i);
                this.scene.scale(this.scale_x1 + 0.2 * i, this.scale_y1 - 0.1 * i, this.scale_z1 + 0.2 * i);
                this.weeds1[i].display();
                this.scene.popMatrix()
            }
        }
        
        for (let i = 0; i < this.num2; i++) {
            if (this.value2 == 1) {
                this.scene.setDiffuse(1, 1, 0, 1);
            } else if (this.value2 == 2) {
                this.scene.setDiffuse(0.6, 0.6, 0.9, 1.0);
            } else if (this.value2 == 3) {
                this.scene.setDiffuse(1.0, 0.0, 0.0, 1.0);
            } else if (this.value2 == 4) {
                this.scene.setDiffuse(1.0, 0.64, 0.0, 1.0);
            } else if (this.value2 == 5) {
                this.scene.setDiffuse(0.0, 1.0, 0.0, 1.0);
            }
            
            if (i == 0) {
                this.scene.pushMatrix();
                this.scene.translate(this.x2, -4.5, this.z2);
                this.scene.scale(this.scale_x2, this.scale_y2, this.scale_z2);
                this.weeds2[i].display();
                this.scene.popMatrix();
            } else if (i % 2 == 0) {
                this.scene.pushMatrix();
                this.scene.translate(this.x2 + this.scale_x2 + 0.3 * i, -4.5, this.z2 + this.scale_z2 + 0.5 * i);
                this.scene.scale(this.scale_x2 + 0.2 * i, this.scale_y2 - 0.1 * i, this.scale_z2 + 0.4 * i);
                this.weeds2[i].display();
                this.scene.popMatrix();
            } else {
                this.scene.pushMatrix();
                this.scene.translate(this.x2 + this.scale_x2 - 0.2 * i, -4.5, this.z2 + this.scale_z2 + 0.3 * i);
                this.scene.scale(this.scale_x2 + 0.2 * i, this.scale_y2 + 0.3 * i, this.scale_z2 + 0.2 * i);
                this.weeds2[i].display();
                this.scene.popMatrix();
            }
        }
        
        for (let i = 0; i < this.num3; i++) {
            if (this.value3 == 1) {
                this.scene.setDiffuse(1, 1, 0, 1);
            } else if (this.value3 == 2) {
                this.scene.setDiffuse(0.6, 0.6, 0.9, 1.0);
            } else if (this.value3 == 3) {
                this.scene.setDiffuse(1.0, 0.0, 0.0, 1.0);
            } else if (this.value3 == 4) {
                this.scene.setDiffuse(1.0, 0.64, 0.0, 1.0);
            } else if (this.value3 == 5) {
                this.scene.setDiffuse(0.0, 1.0, 0.0, 1.0);
            }
            
            if (i == 0) {
                this.scene.pushMatrix();
                this.scene.translate(this.x3, -4.5, this.z3);
                this.scene.scale(this.scale_x3, this.scale_y3, this.scale_z3);
                this.weeds3[i].display();
                this.scene.popMatrix();
            } else if (i % 2 == 0) {
                this.scene.pushMatrix();
                this.scene.translate(this.x3 + this.scale_x3 + 0.4 * i, -4.5, this.z3 + this.scale_z3 + 0.5 * i);
                this.scene.scale(this.scale_x3 + 0.3 * i, this.scale_y3 + 0.5 * i, this.scale_z3 + 0.2 * i);
                this.weeds3[i].display();
                this.scene.popMatrix();
            } else {
                this.scene.pushMatrix();
                this.scene.translate(this.x3 + this.scale_x3 - 0.3 * i, -4.5, this.z3 + this.scale_z3 + 0.5 * i);
                this.scene.scale(this.scale_x3 + 0.3 * i, this.scale_y3 + 0.2 * i, this.scale_z3 - 0.1 * i);
                this.weeds3[i].display();
                this.scene.popMatrix();
            }
        }
    }
}
