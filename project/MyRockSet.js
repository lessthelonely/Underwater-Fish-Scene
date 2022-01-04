import {CGFobject} from '../lib/CGF.js';
import { MyRock } from './MyRock.js';
/**
 * MyRockSet
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyRockSet extends CGFobject {
    constructor(scene, rock_tex) {
        super(scene);
        
        this.rocks = [];
        
        this.rock_tex = rock_tex;
        
        this.x1 = (Math.random() * 48) - 24;
        this.z1 = (Math.random() * 48) - 24;
        while (this.x1 >= 10.5 && this.x1 <= 20.5 && this.z1 >= -22.7 && this.z1 <= -12.7) {
            this.x1 = (Math.random() * 48) - 24;
            this.z1 = (Math.random() * 48) - 24;
        }
        this.angle1 = (Math.random() * 360); //0 to 360
        this.scale_x1 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y1 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z1 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot1 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x1, this.z1, this.scale_x1, this.scale_y1, this.scale_z1, this.rot1, this.angle1));
        
        this.x2 = (Math.random() * 48) - 24;
        this.z2 = (Math.random() * 48) - 24;
        while (this.x2 >= 10.5 && this.x2 <= 20.5 && this.z2 >= -22.7 && this.z2 <= -12.7) {
            this.x2 = (Math.random() * 48) - 24;
            this.z2 = (Math.random() * 48) - 24;
        }
        this.angle2 = (Math.random() * 360); //0 to 360
        this.scale_x2 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y2 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z2 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot2 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x2, this.z2, this.scale_x2, this.scale_y2, this.scale_z2, this.rot2, this.angle2));
        
        this.x3 = (Math.random() * 48) - 24;
        this.z3 = (Math.random() * 48) - 24;
        while (this.x3 >= 10.5 && this.x3 <= 20.5 && this.z3 >= -22.7 && this.z3 <= -12.7) {
            this.x3 = (Math.random() * 48) - 24;
            this.z3 = (Math.random() * 48) - 24;
        }
        this.angle3 = (Math.random() * 360); //0 to 360
        this.scale_x3 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y3 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z3 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot3 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x3, this.z3, this.scale_x3, this.scale_y3, this.scale_z3, this.rot3, this.angle3));
        
        this.x4 = (Math.random() * 48) - 24;
        this.z4 = (Math.random() * 48) - 24;
        while (this.x4 >= 10.5 && this.x4 <= 20.5 && this.z4 >= -22.7 && this.z4 <= -12.7) {
            this.x4 = (Math.random() * 48) - 24;
            this.z4 = (Math.random() * 48) - 24;
        }
        this.angle4 = (Math.random() * 360); //0 to 360
        this.scale_x4 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y4 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z4 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot4 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x4, this.z4, this.scale_x4, this.scale_y4, this.scale_z4, this.rot4, this.angle4));
        
        this.x5 = (Math.random() * 48) - 24;
        this.z5 = (Math.random() * 48) - 24;
        while (this.x5 >= 10.5 && this.x5 <= 20.5 && this.z5 >= -22.7 && this.z5 <= -12.7) {
            this.x5 = (Math.random() * 48) - 24;
            this.z5 = (Math.random() * 48) - 24;
        }
        this.angle5 = (Math.random() * 360); //0 to 360
        this.scale_x5 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y5 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z5 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot5 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x5, this.z5, this.scale_x5, this.scale_y5, this.scale_z5, this.rot5, this.angle5));
        
        this.x6 = (Math.random() * 48) - 24;
        this.z6 = (Math.random() * 48) - 24;
        while (this.x6 >= 10.5 && this.x6 <= 20.5 && this.z6 >= -22.7 && this.z6 <= -12.7) {
            this.x6 = (Math.random() * 48) - 24;
            this.z6 = (Math.random() * 48) - 24;
        }
        this.angle6 = (Math.random() * 360); //0 to 360
        this.scale_x6 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y6 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z6 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot6 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x6, this.z6, this.scale_x6, this.scale_y6, this.scale_z6, this.rot6, this.angle6));
        
        this.x7 = (Math.random() * 48) - 24;
        this.z7 = (Math.random() * 48) - 24;
        while (this.x7 >= 10.5 && this.x7 <= 20.5 && this.z7 >= -22.7 && this.z7 <= -12.7) {
            this.x7 = (Math.random() * 48) - 24;
            this.z7 = (Math.random() * 48) - 24;
        }
        this.angle7 = (Math.random() * 360); //0 to 360
        this.scale_x7 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y7 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z7 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot7 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x7, this.z7, this.scale_x7, this.scale_y7, this.scale_z7, this.rot7, this.angle7));
        
        this.x8 = (Math.random() * 48) - 24;
        this.z8 = (Math.random() * 48) - 24;
        while (this.x8 >= 10.5 && this.x8 <= 20.5 && this.z8 >= -22.7 && this.z8 <= -12.7) {
            this.x8 = (Math.random() * 48) - 24;
            this.z8 = (Math.random() * 48) - 24;
        }
        this.angle8 = (Math.random() * 360); //0 to 360
        this.scale_x8 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_y8 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.scale_z8 = (Math.random() * 0.4) + 0.1; //0.1->0.5
        this.rot8 = (Math.random() * 2) + 1;
        
        this.rocks.push(new MyRock(this.scene, 16, 16, 0.10, this.x8, this.z8, this.scale_x8, this.scale_y8, this.scale_z8, this.rot8, this.angle8));
    }
    
    display() {
        for (let i = 0; i < this.rocks.length; i++) {
            this.scene.pushMatrix();
            this.scene.translate(this.rocks[i].getOg_X(), -4.5, this.rocks[i].getOg_Z());
            if (this.rocks[i].getRot() == 1) {
                this.scene.rotate(this.rocks[i].getAngle() / 180, 1, 0, 0);
            } else if (this.rocks[i].getRot() == 2) {
                this.scene.rotate(this.rocks[i].getAngle() / 180, 0, 1, 0);
            } else {
                this.scene.rotate(this.rocks[i].getAngle() / 180, 0, 0, 1);
            }
            
            this.scene.scale(this.rocks[i].getScaleX(), this.rocks[i].getScaleY(), this.rocks[i].getScaleZ());
            this.rock_tex.apply();
            this.rocks[i].display();
            this.scene.popMatrix();
        }
    }
    
    addRock(rock) {
        this.rocks.push(rock);
    }
}
