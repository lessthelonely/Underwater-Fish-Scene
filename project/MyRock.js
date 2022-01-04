import {CGFobject} from '../lib/CGF.js';
export class MyRock extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} slices - number of slices around Y axis
     * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
     */
    constructor(scene, slices, stacks, offset, x, z, scale_x, scale_y, scale_z, rot, angle) {
        super(scene);
        this.latDivs = stacks * 2;
        this.longDivs = slices;
        this.offset = offset;
        this.og_x = x;
        this.og_z = z;
        this.x = x;
        this.z = z;
        this.height = 3.0;
        this.angle = angle;
        this.scale_x = scale_x;
        this.scale_y = scale_y;
        this.scale_z = scale_z;
        this.rot = rot;
        this.time = 0;
        this.elapsedTime = 0;
        this.angle = 0;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
        var phi = 0;
        var theta = 0;
        var phiInc = Math.PI / this.latDivs;
        var thetaInc = (2 * Math.PI) / this.longDivs;
        var latVertices = this.longDivs + 1;
        //Texture 
        var textmaplongitude = 0;
        var textmaplatitude = 0;
        var textmaplongpart = 1 / this.longDivs;
        var textmaplatpart = 1 / this.latDivs;
        // build an all-around stack at a time, starting on "north pole" and proceeding "south"
        for (let latitude = 0; latitude <= this.latDivs; latitude++) {
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);
            // in each stack, build all the slices around, starting on longitude 0
            theta = 0;
            textmaplongitude = 0;
            for (let longitude = 0; longitude <= this.longDivs; longitude++) {
                //--- Vertices coordinates
                var x = (Math.cos(theta) * sinPhi);
                var y = cosPhi;
                var z = (Math.sin(-theta) * sinPhi);
                var offset = (Math.random() * (this.offset - (-this.offset)) + (-this.offset)).toFixed(4);
                if (longitude == 0 || longitude == this.longDivs) {
                    this.vertices.push(x, y, z);
                } else {
                    this.vertices.push(x + offset * x, y + offset * y, z + offset * z);
                }
                //TexCoords
                this.texCoords.push(textmaplongitude, textmaplatitude);
                //--- Indices
                if (latitude < this.latDivs && longitude < this.longDivs) {
                    var current = latitude * latVertices + longitude;
                    var next = current + latVertices;
                    // pushing two triangles using indices from this round (current, current+1)
                    // and the ones directly south (next, next+1)
                    // (i.e. one full round of slices ahead)
                    this.indices.push(current + 1, current, next);
                    this.indices.push(current + 1, next, next + 1);
                }
                //--- Normals
                // at each vertex, the direction of the normal is equal to 
                // the vector from the center of the sphere to the vertex.
                // in a sphere of radius equal to one, the vector length is one.
                // therefore, the value of the normal is equal to the position vectro
                this.normals.push(x, y, z);
                theta += thetaInc;
                //--- Texture Coordinates
                textmaplongitude += textmaplongpart;
            }
            phi += phiInc;
            textmaplatitude += textmaplatpart;
        }
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    getX() {
        return this.x;
    }
    getOg_X() {
        return this.og_x;
    }
    getZ() {
        return this.z;
    }
    getOg_Z() {
        return this.og_z;
    }
    getScaleX() {
        return this.scale_x;
    }
    getScaleY() {
        return this.scale_y;
    }
    getScaleZ() {
        return this.scale_z;
    }
    getAngle() {
        return this.angle;
    }
    getRot() {
        return this.rot;
    }
    update(t) {
        t = (t % 30) / 100;
        this.height = this.height - 0.5 * t - 5 * Math.pow(t, 2);
        this.x += 0.05 * Math.sin(this.angle * Math.PI / 180.0) * t;
        this.z += 0.05 * Math.cos(this.angle * Math.PI / 180.0) * t;
    }
    setAngle(val) {
        this.angle = val;
    }
    setX(val) {
        this.x = val;
    }
    setZ(val) {
        this.z = val;
    }
}
