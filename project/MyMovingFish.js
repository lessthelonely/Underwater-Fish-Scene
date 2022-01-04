import {CGFobject} from '../lib/CGF.js';
import {MyFish} from './MyFish.js';

/**
 * MyMovingFish
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyMovingFish extends CGFobject {
    constructor(scene, rightEye, leftEye, body, testShader, toBind, r, g, b, rock_tex) {
        super(scene);
        this.scene = scene;
        
        this.fish = new MyFish(this.scene, rightEye, leftEye, body, testShader, toBind, r, g, b, rock_tex);
        
        this.x = 0;
        this.y = 3.5;
        this.z = 0;
        this.angle = 0;
        this.velocity = 0;
        this.Yvelocity = 0.2;
        
        this.time = 0;
        this.center_x = 0;
        this.center_z = 0;
        this.accel = 0;
        this.rotation = 0;
        this.u = false;
        this.d = false;
        
        this.wantsRock = false;
    }
    
    update(t) {
        if (this.time == 0) {
            this.time = t;
        }
        
        this.elapsedTime = t - this.time;
        this.time = t;
        
        this.x += this.velocity * Math.sin(this.angle * Math.PI / 180.0);
        this.z += this.velocity * Math.cos(this.angle * Math.PI / 180.0);
        
        if (this.u) {
            if (this.y < 3.5) {
                this.y += this.Yvelocity;
            }
        }
        
        if (this.d) {
            if (this.y > -3.0) {
                this.y -= this.Yvelocity;
            }
        }
        
        this.fish.update(t);
    }
    
    getX() {
        return this.x;
    }
    
    getZ() {
        return this.z;
    }
    
    turn(val) {
        this.angle += val;
        if (val < 0) {
            this.fish.Mright(false);
        } else {
            this.fish.Mleft(false);
        }
    }
    
    moveRight() {
        this.fish.Mright(true);
    }
    
    moveLeft() {
        this.fish.Mleft(true);
    }
    
    accelerate(val) {
        this.velocity += val;
        if (this.velocity < 0) {
            this.velocity = 0;
        }
        this.fish.speed(this.velocity);
    }
    
    getAngle() {
        return this.angle;
    }
    
    reset() {
        this.angle = 0;
        this.velocity = 0;
        this.x = 0;
        this.y = 3.5;
        this.z = 0;
        this.u = false;
        this.d = false;
        this.fish.reset();
        this.wantsRock = false;
    }
    
    down() {
        this.d = true;
        this.u = false;
    }
    
    up() {
        this.u = true;
        this.d = false;
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);
        this.fish.display();
        this.scene.popMatrix();
    }
    
}



