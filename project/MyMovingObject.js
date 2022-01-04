import {CGFobject} from '../lib/CGF.js';
import {MyTriangle} from './MyTriangle.js';
/**
 * MyMovingObject
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyMovingObject extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initBuffers();
        this.initNormalVizBuffers();
        this.triangle = new MyTriangle(scene);
        this.x = 1 / 6;
        this.y = 0;
        this.z = -1 / 6;
        this.angle = 0;
        this.velocity = 0;

        this.time = 0;
        this.center_x = 0;
        this.center_z = 0;
        this.accel = 0;
        this.rotation = 0;
    }

    initBuffers() {
        this.vertices = [
            -1, 1, 0,
            -1, -1, 0,
            1, -1, 0
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            1, 2, 0,
            1, 0, 2
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;


        this.normals = [];
        for (var i = 0; i <= 2; i++) {
            this.normals.push(0, 0, 1);
        }

        this.texCoords = [
            0, 0.5,
            0.5, 1,
            0, 1
        ];


        this.initGLBuffers();
    }

    update(t) {
        if (this.time == 0) {
            this.time = t;
        }

        this.elapsedTime = t - this.time;
        this.time = t;

        this.x += this.velocity * Math.sin(this.angle * Math.PI / 180.0);
        this.z += this.velocity * Math.cos(this.angle * Math.PI / 180.0);
    }

    turn(val) {
        this.angle = val;
    }

    accelerate(val) {
        this.velocity += val;
        if (this.velocity < 0) {
            this.velocity = 0;
        }
    }

    reset() {
        this.angle = 0;
        this.velocity = 0;
        this.x = 1 / 6;
        this.y = 0;
        this.z = -1 / 6;
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.translate(this.x, this.y, this.z);
        this.scene.translate(0, -0.3, 0);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.85, 0.85, 0.85);
        this.triangle.display();
        this.scene.popMatrix();
    }

}
