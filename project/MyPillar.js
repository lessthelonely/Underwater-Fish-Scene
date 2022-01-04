import {CGFobject} from '../lib/CGF.js';
/**
 * MyPillar
 * @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of divisions around the Y axis
 */
export class MyPillar extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = (2 * Math.PI) / this.slices;
        //Texture coordinates
        var textmap = 0;
        var textmapparts = 1 / this.slices;

        for (var i = 0; i <= this.slices; i++) {
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var ca = Math.cos(ang); //x
            var sa = Math.sin(ang); //z

            this.vertices.push(ca, 0, -sa); //XZ
            this.vertices.push(ca, 1, -sa); //Y

            //push normal once for each vertex of this triangle
            this.normals.push(ca, 0, -sa);
            this.normals.push(ca, 0, -sa);

            this.texCoords.push(textmap, 1);
            this.texCoords.push(textmap, 0);

            if (i != 0) {
                this.indices.push((i * 2), (2 * i - 1), (2 * i - 2));
                this.indices.push((i * 2), (i * 2 + 1), (i * 2 - 1));
            }

            ang += alphaAng;
            textmap += textmapparts;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

    }
    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
     */
    updateSlices(complexity) {
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
