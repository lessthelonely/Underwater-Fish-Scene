import {CGFobject,CGFappearance,CGFtexture,CGFshader} from '../lib/CGF.js';
/**
 * MySeaFloor
 * @constructor
 * @param scene - Reference to MyScene object
 * @param nrDivs - number of divisions in both directions of the surface (should be 20)
 * @param sideSize - lenght (50)
 * @param maxHeight - maximum height (Y=1)
 */
export class MySeaFloor extends CGFobject {
    constructor(scene, nrDivs, sideSize, maxHeight, minS, maxS, minT, maxT) {
        super(scene);
        this.scene = scene;
        // nrDivs = 1 if not provided
        nrDivs = typeof nrDivs !== 'undefined' ? nrDivs : 1;
        this.nrDivs = nrDivs;
        this.patchLength = Math.abs(sideSize) / nrDivs;
        this.startCoord = Math.abs(sideSize) / 2;
        this.maxHeight = Math.abs(maxHeight);
        this.minS = minS || 0;
        this.maxS = maxS || 1;
        this.minT = minT || 0;
        this.maxT = maxT || 1;
        this.q = (this.maxS - this.minS) / this.nrDivs;
        this.w = (this.maxT - this.minT) / this.nrDivs;
        this.centerX = 15.5;
        this.centerZ = -17.7;
        this.radius = 4.9;
        
        this.initMaterials();
        this.initShaders();
        this.initBuffers();
    }
    
    /**
     * @method initMaterials
     */
    initMaterials() {
        this.appearance = new CGFappearance(this.scene);
        this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);
        this.appearance.loadTexture("images/sandShell.jpg");
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        
        this.heightMap = new CGFtexture(this.scene, "images/sandMap4.png");
    }
    
    /**
     * @method initShaders
     */
    initShaders() {
        this.shader = new CGFshader(this.scene.gl, "shaders/seafloor.vert", "shaders/seafloor.frag");
        this.shader.setUniformsValues({
            uSampler2: 2,
            offsetSize: this.maxHeight
        });
    }
    
    /**
     * @method initBuffers
     */
    initBuffers() {
        // Generate vertices, normals, and texCoords
        this.vertices = [];
        this.normals = [];
        this.texCoords = [];
        var yCoord = this.startCoord;
        for (var j = 0; j <= this.nrDivs; j++) {
            var xCoord = -this.startCoord;
            for (var i = 0; i <= this.nrDivs; i++) {
                this.vertices.push(xCoord, yCoord, 0);
                this.normals.push(0, 0, 1);
                this.texCoords.push(this.minS + i * this.q, this.minT + j * this.w);
                xCoord += this.patchLength;
            }
            yCoord -= this.patchLength;
        }
        // Generating indices
        this.indices = [];
        
        var ind = 0;
        for (var j = 0; j < this.nrDivs; j++) {
            for (var i = 0; i <= this.nrDivs; i++) {
                this.indices.push(ind);
                this.indices.push(ind + this.nrDivs + 1);
                ind++;
            }
            if (j + 1 < this.nrDivs) {
                this.indices.push(ind + this.nrDivs);
                this.indices.push(ind);
            }
        }
        this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
        this.initGLBuffers();
    }
    
    /**
     * @method setFillMode
     */
    setFillMode() {
        this.primitiveType = this.scene.gl.TRIANGLE_STRIP;
    }
    
    /**
     * @method setLineMode
     */
    setLineMode() {
        this.primitiveType = this.scene.gl.LINES;
    }
    
    /**
     * @method display displays the terrain
     */
    display() {
        this.appearance.apply();
        this.scene.setActiveShader(this.shader);
        this.heightMap.bind(2);
        super.display();
        this.heightMap.unbind(2);
        this.scene.setActiveShader(this.scene.defaultShader);
        
    }
    
}
