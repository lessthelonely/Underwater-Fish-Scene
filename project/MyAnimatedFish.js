import {CGFobject} from '../lib/CGF.js';
import {MyFish} from './MyFish.js';
/**
 * MyMovingFish
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyAnimatedFish extends CGFobject {
    constructor(scene, rightEye, leftEye, body, testShader, toBind, x, y, z, r, g, b, direction, rock_tex) {
        super(scene);
        this.scene = scene;

        this.fish = new MyFish(this.scene, rightEye, leftEye, body, testShader, toBind, r, g, b, rock_tex);

        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = 0;
        this.velocity = 1;
        this.Yvelocity = 0.2;

        this.time = 0;
        this.center_x = 0;
        this.center_z = 0;
        this.accel = 0;
        this.rotation = 0;
        this.u = false;
        this.d = false;
        this.direction = direction;
    }

    update(t) {
        if (this.direction) {
            this.angle += 5;
        } else {
            this.angle -= 5;
        }

        this.x += this.velocity * Math.sin(this.angle * Math.PI / 180.0);
        this.z += this.velocity * Math.cos(this.angle * Math.PI / 180.0);

        if (this.u) {
            if (this.y < 3.0) {
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

    turn(val) {
        this.angle += val;
        if (val < 0) {
            this.fish.Mright(false);
        } else {
            this.fish.Mleft(false);
        }
    }

    reset() {
        this.fish.reset();
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);
        this.fish.display();
        this.scene.popMatrix();
    }

}
