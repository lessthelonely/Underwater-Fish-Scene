import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture,CGFshader } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";
import { MyMovingObject } from "./MyMovingObject.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySeaFloor } from "./MySeaFloor.js";
import {MyQuad} from "./MyQuad.js";
import { MyRockSet } from "./MyRockSet.js";
import {MyPillar} from "./MyPillar.js";
import {MySeaWeed} from "./MySeaWeed.js";
import {MyMovingFish} from "./MyMovingFish.js";
import { MyAnimatedFish } from "./MyAnimatedFish.js";
/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.setUpdatePeriod(50);
        this.enableTextures(true);
        //------ Applied Material
        //Parte traseira do CubeMap
        this.cubeMapBKDF = new CGFappearance(this);
        this.cubeMapBKDF.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapBKDF.setDiffuse(0, 0, 0, 1);
        this.cubeMapBKDF.setSpecular(0, 0, 0, 1);
        this.cubeMapBKDF.setEmission(0.9, 0.9, 0.9, 1);
        this.cubeMapBKDF.setShininess(10.0);
        this.cubeMapBKDF.loadTexture('images/test_cubemap/px.png');
        this.cubeMapBKDF.setTextureWrap('REPEAT', 'REPEAT');
        //Parte inferior do CubeMap
        this.cubeMapBTDF = new CGFappearance(this);
        this.cubeMapBTDF.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapBTDF.setDiffuse(0, 0, 0, 1);
        this.cubeMapBTDF.setSpecular(0, 0, 0, 1);
        this.cubeMapBTDF.setEmission(0.9, 0.9, 0.9, 1);
        this.cubeMapBTDF.setShininess(10.0);
        this.cubeMapBTDF.loadTexture('images/test_cubemap/ny.png');
        this.cubeMapBTDF.setTextureWrap('REPEAT', 'REPEAT');
        //Parte da frente do CubeMap
        this.cubeMapFTDF = new CGFappearance(this);
        this.cubeMapFTDF.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapFTDF.setDiffuse(0, 0, 0, 1);
        this.cubeMapFTDF.setSpecular(0, 0, 0, 1);
        this.cubeMapFTDF.setEmission(0.9, 0.9, 0.9, 1);
        this.cubeMapFTDF.setShininess(10.0);
        this.cubeMapFTDF.loadTexture('images/test_cubemap/nx.png');
        this.cubeMapFTDF.setTextureWrap('REPEAT', 'REPEAT');
        //Lado esquerdo do CubeMap
        this.cubeMapLFDF = new CGFappearance(this);
        this.cubeMapLFDF.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapLFDF.setDiffuse(0, 0, 0, 1);
        this.cubeMapLFDF.setSpecular(0, 0, 0, 1);
        this.cubeMapLFDF.setEmission(0.9, 0.9, 0.9, 1);
        this.cubeMapLFDF.setShininess(10.0);
        this.cubeMapLFDF.loadTexture('images/test_cubemap/nz.png');
        this.cubeMapLFDF.setTextureWrap('REPEAT', 'REPEAT');
        //lado direito do CubeMap
        this.cubeMapRTDF = new CGFappearance(this);
        this.cubeMapRTDF.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapRTDF.setDiffuse(0, 0, 0, 1);
        this.cubeMapRTDF.setSpecular(0, 0, 0, 1);
        this.cubeMapRTDF.setEmission(0.9, 0.9, 0.9, 1);
        this.cubeMapRTDF.setShininess(10.0);
        this.cubeMapRTDF.loadTexture('images/test_cubemap/pz.png');
        this.cubeMapRTDF.setTextureWrap('REPEAT', 'REPEAT');
        //Parte superior do CubeMap
        this.cubeMapTOPDF = new CGFappearance(this);
        this.cubeMapTOPDF.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMapTOPDF.setDiffuse(0, 0, 0, 1);
        this.cubeMapTOPDF.setSpecular(0, 0, 0, 1);
        this.cubeMapTOPDF.setEmission(0.9, 0.9, 0.9, 1);
        this.cubeMapTOPDF.setShininess(10.0);
        this.cubeMapTOPDF.loadTexture('images/test_cubemap/py.png');
        this.cubeMapTOPDF.setTextureWrap('REPEAT', 'REPEAT');
        //Earth
        this.earth = new CGFappearance(this);
        this.earth.setAmbient(0.3, 0.3, 0.3, 1);
        this.earth.setDiffuse(0.7, 0.7, 0.7, 1);
        this.earth.setSpecular(0.0, 0.0, 0.0, 1);
        this.earth.setEmission(0.9, 0.9, 0.9, 1);
        this.earth.setShininess(120);
        this.earth.loadTexture('images/earth.jpg');
        this.earth.setTextureWrap('REPEAT', 'REPEAT');
        //RockTex
        this.rockTex = new CGFappearance(this);
        this.rockTex.setAmbient(0.3, 0.3, 0.3, 1);
        this.rockTex.setDiffuse(0.7, 0.7, 0.7, 1);
        this.rockTex.setSpecular(0.0, 0.0, 0.0, 1);
        this.rockTex.setShininess(10);
        this.rockTex.loadTexture('images/rock_tex.jpg');
        this.rockTex.setTextureWrap('REPEAT', 'REPEAT');
        //Fish eye
        this.rightEye = new CGFappearance(this);
        this.rightEye.setAmbient(0.1, 0.1, 0.1, 1);
        this.rightEye.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rightEye.setSpecular(0.1, 0.1, 0.1, 1);
        this.rightEye.setShininess(10);
        this.rightEye.loadTexture('images/rightEye.jpg');
        this.rightEye.setTextureWrap('REPEAT', 'REPEAT');
        this.leftEye = new CGFappearance(this);
        this.leftEye.setAmbient(0.1, 0.1, 0.1, 1);
        this.leftEye.setDiffuse(0.9, 0.9, 0.9, 1);
        this.leftEye.setSpecular(0.1, 0.1, 0.1, 1);
        this.leftEye.setShininess(10);
        this.leftEye.loadTexture('images/leftEye.jpg');
        this.leftEye.setTextureWrap('REPEAT', 'REPEAT');
        //Cylinder
        this.cylinderMaterial = new CGFappearance(this);
        this.cylinderMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cylinderMaterial.setDiffuse(0, 0, 0, 1);
        this.cylinderMaterial.setSpecular(0, 0, 0, 1);
        this.cylinderMaterial.setEmission(0.9, 0.9, 0.9, 1);
        this.cylinderMaterial.setShininess(10.0);
        this.cylinderMaterial.loadTexture('images/floor.png');
        this.cylinderMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        //Pillar
        this.pillarMaterial = new CGFappearance(this);
        this.pillarMaterial.setAmbient(0.8, 0.4, 0.8, 1);
        this.pillarMaterial.setDiffuse(0.2, 0.7, 0.7, 1);
        this.pillarMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.pillarMaterial.setShininess(120.0);
        this.pillarMaterial.loadTexture('images/tree.jpg');
        this.pillarMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        //Quad
        this.quadMaterial = new CGFappearance(this);
        this.quadMaterial.setAmbient(0.2, 0.4, 0.8, 1);
        this.quadMaterial.setDiffuse(0.2, 0.7, 0.7, 1);
        this.quadMaterial.setSpecular(0.0, 0.0, 0.0, 1);
        this.quadMaterial.setShininess(120);
        this.quadMaterial.loadTexture('images/pier.jpg');
        this.quadMaterial.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        //------
        //------ Textures
        this.forestback = new CGFtexture(this, 'images/demo_cubemap/back.png');
        this.forestright = new CGFtexture(this, 'images/demo_cubemap/right.png');
        this.forestleft = new CGFtexture(this, 'images/demo_cubemap/left.png');
        this.forestfront = new CGFtexture(this, 'images/demo_cubemap/front.png');
        this.foresttop = new CGFtexture(this, 'images/demo_cubemap/top.png');
        this.forestbottom = new CGFtexture(this, 'images/demo_cubemap/bottom.png');
        this.spaceback = new CGFtexture(this, 'images/space_cubemap/back_space.jpg');
        this.spaceright = new CGFtexture(this, 'images/space_cubemap/right_space.jpg');
        this.spaceleft = new CGFtexture(this, 'images/space_cubemap/left_space.jpg');
        this.spacefront = new CGFtexture(this, 'images/space_cubemap/front_space.jpg');
        this.spacetop = new CGFtexture(this, 'images/space_cubemap/top_space.jpg');
        this.spacebottom = new CGFtexture(this, 'images/space_cubemap/bottom_space.jpg');
        this.desertback = new CGFtexture(this, 'images/desert_cubemap/back.jpg');
        this.desertright = new CGFtexture(this, 'images/desert_cubemap/right.jpg');
        this.desertleft = new CGFtexture(this, 'images/desert_cubemap/left.jpg');
        this.desertfront = new CGFtexture(this, 'images/desert_cubemap/front.jpg');
        this.deserttop = new CGFtexture(this, 'images/desert_cubemap/top.jpg');
        this.desertbottom = new CGFtexture(this, 'images/desert_cubemap/bottom.jpg');
        this.underwaterback = new CGFtexture(this, 'images/underwater_cubemap/back.jpg');
        this.underwaterright = new CGFtexture(this, 'images/underwater_cubemap/right.jpg');
        this.underwaterleft = new CGFtexture(this, 'images/underwater_cubemap/left.jpg');
        this.underwaterfront = new CGFtexture(this, 'images/underwater_cubemap/front.jpg');
        this.underwatertop = new CGFtexture(this, 'images/underwater_cubemap/top.jpg');
        this.underwaterbottom = new CGFtexture(this, 'images/underwater_cubemap/bottom.jpg');
        this.body = new CGFtexture(this, "images/fish.jpg");
        this.purpleBody = new CGFtexture(this, "images/purpleFish.jpg");
        this.yellowBody = new CGFtexture(this, "images/yellowFish.jpg");
        this.ocean = new CGFtexture(this, "images/distortionmap.png");
        //-------
        this.testShaders = [new CGFshader(this.gl, "shaders/fish_body.vert", "shaders/fish_body.frag"),
            new CGFshader(this.gl, "shaders/water.vert", "shaders/water.frag"),
            new CGFshader(this.gl, "shaders/purple_fish.vert", "shaders/purple_fish.frag"),
            new CGFshader(this.gl, "shaders/yellow_fish.vert", "shaders/yellow_fish.frag")
        ];
        this.testShaders[0].setUniformsValues({
            uSampler2: 1
        });
        this.testShaders[1].setUniformsValues({
            uSampler2: 2
        });
        this.testShaders[1].setUniformsValues({
            timeFactor: 0.1
        });
        this.testShaders[2].setUniformsValues({
            uSampler2: 3
        });
        this.testShaders[3].setUniformsValues({
            uSampler2: 4
        });
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.triangle = new MyMovingObject(this);
        this.cylinder = new MyCylinder(this, 16);
        this.cubeMap = new MyCubeMap(this, this.cubeMapBKDF, this.cubeMapBTDF, this.cubeMapFTDF, this.cubeMapLFDF, this.cubeMapRTDF, this.cubeMapTOPDF);
        this.secondFish = new MyAnimatedFish(this, this.rightEye, this.leftEye, this.purpleBody, this.testShaders[2], 3, 0, 2, 0, 0.55, 0, 1, true, this.rockTex);
        this.thirdFish = new MyAnimatedFish(this, this.rightEye, this.leftEye, this.yellowBody, this.testShaders[3], 4, 0, -2, 0, 1, 1, 0, false, this.rockTex);
        this.fish = new MyMovingFish(this, this.rightEye, this.leftEye, this.body, this.testShaders[0], 1, 1, 0, 0, this.rockTex);
        this.seafloor = new MySeaFloor(this, 20, 50, 1, 0, 1, 0, 1);
        this.quad = new MyQuad(this);
        this.rockSet = new MyRockSet(this, this.rockTex);
        this.pillar1 = new MyPillar(this, 16);
        this.pillar2 = new MyPillar(this, 16);
        this.pillar3 = new MyPillar(this, 16);
        this.pillar4 = new MyPillar(this, 16);
        this.seaweed = new MySeaWeed(this);
        this.Rocks23 = [];
        this.flyingRock = [];
        this.defaultAppearance = new CGFappearance(this);
        this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0, 0, 0, 1);
        this.defaultAppearance.setShininess(120);
        this.sphereAppearance = new CGFappearance(this);
        this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.sphereAppearance.setShininess(120);
        
        //Objects connected to MyInterface
        this.displayAxis = false
        this.displaySphere = false;
        this.displayTriangle = false;
        this.displayTangram = false;
        this.displayCubeMap = false;
        this.displayCylinder = false;
        this.displayFish = true;
        this.displaySeaFloor = false;
        this.displayQuad = false;
        this.displayRocks = false;
        this.displayPillar = false;
        this.displaySeaWeed = false;
        this.displayAnimatedFish = false;
        this.displayParabolic = false;
        this.selectedTexture = 0;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.textures = [this.forestback, this.forestbottom, this.forestfront, this.forestleft, this.forestright, this.foresttop, this.spacetop,
            this.spaceback, this.spacebottom, this.spacefront, this.spaceleft, this.spaceright, this.desertback, this.desertbottom,
            this.desertfront, this.desertleft, this.desertright, this.deserttop, this.underwaterback, this.underwaterbottom,
            this.underwaterfront, this.underwaterleft, this.underwaterright, this.underwatertop
        ];
        this.textureIds = {
            'Forest': 0,
            'Space': 1,
            'Desert': 2,
            'Underwater': 3
        };
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
        this.lights[1].setPosition(2.0, 2.0, -1.0, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 2, 0));
        //this.camera = new CGFcamera(1.7, 0.3, 500, vec3.fromValues(2, 2, 2), vec3.fromValues(0, 2, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0, 0, 0, 1);
        this.setShininess(10.0);
    }
    addRocks(rock) {
        this.Rocks23.push(rock);
    }
    startParabolic() {
        this.flyingRock.push(this.fish.fish.getRock()[0]);
        this.fish.fish.removeRock();
        this.flyingRock[0].setAngle(this.fish.getAngle());
        this.flyingRock[0].setX(this.fish.getX() + 2 * Math.sin(this.fish.getAngle() * Math.PI / 180.0));
        this.flyingRock[0].setZ(this.fish.getZ() + 2 * Math.cos(this.fish.getAngle() * Math.PI / 180.0));
        this.displayParabolic = true;
    }
    checkKeys() {
        //Check for keycode e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) { //increase velocity
            this.triangle.accelerate(0.1 * this.speedFactor);
            this.fish.accelerate(0.1 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyS")) { //decrease velocity
            this.triangle.accelerate(-0.1 * this.speedFactor);
            this.fish.accelerate(-0.1 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyA")) { //rotate left
            this.triangle.turn(5);
            this.fish.turn(5);
        } else {
            this.fish.moveLeft();
        }
        if (this.gui.isKeyPressed("KeyD")) { //rotate right
            this.triangle.turn(-5);
            this.fish.turn(-5);
        } else {
            this.fish.moveRight();
        }
        if (this.gui.isKeyPressed("KeyR")) {
            this.triangle.reset();
            if (this.fish.fish.getRock().length > 0) {
                this.rockSet.addRock(this.fish.fish.getRock()[0]);
            }
            this.fish.reset();
            while (this.Rocks23.length > 0) {
                for (let i = 0; i < this.Rocks23.length; i++) {
                    this.rockSet.addRock(this.Rocks23[i]);
                }
                for (let i = 0; i < this.Rocks23.length; i++) {
                    this.Rocks23.pop();
                }
            }
            if (this.flyingRock.length > 0) {
                this.rockSet.addRock(this.flyingRock[0]);
                this.flyingRock.pop();
            }
            this.rockSet.display();
        }
        
        if (this.gui.isKeyPressed("KeyP")) {
            this.fish.up();
        }
        
        if (this.gui.isKeyPressed("KeyL")) {
            this.fish.down();
        }
        
        if (this.gui.isKeyPressed("KeyC")) {
            this.fish.wantsRock = true
        } else {
            this.fish.wantsRock = false;
        }
        
        if (this.fish.wantsRock) {
            if (this.fish.fish.getRock().length == 0 && this.fish.y <= -3.0) { //fish doesn't have a rock
                for (let i = 0; i < this.rockSet.rocks.length; i++) {
                    if (Math.sqrt(Math.pow(this.fish.x - this.rockSet.rocks[i].getOg_X(), 2) + Math.pow(this.fish.z - this.rockSet.rocks[i].getOg_Z(), 2)) <= 1.5) {
                        this.temp_rock = this.rockSet.rocks.splice(i, 1);
                        this.fish.fish.addRock(this.temp_rock[0]);
                    }
                }
            } else {
                if (this.fish.y <= -3.0) { //if lower limit-->put in nest
                    if (Math.sqrt(Math.pow(this.fish.x - this.seafloor.centerX, 2) + Math.pow(this.fish.z - this.seafloor.centerZ, 2)) <= this.seafloor.radius) {
                        if (this.fish.fish.getRock().length != 0) {
                            this.addRocks(this.fish.fish.getRock()[0]);
                            this.fish.fish.removeRock();
                        }
                    }
                } else if (this.fish.y >= 3.5) { //if higher limit-->parabolic trajectory
                    if (Math.sqrt(Math.pow(this.fish.x - this.seafloor.centerX, 2) + Math.pow(this.fish.z - this.seafloor.centerZ, 2)) <= 5.0) {
                        if (this.fish.fish.getRock().length != 0) {
                            this.startParabolic();
                        }
                    }
                }
            }
        }
        while (this.flyingRock.length > 1) {
            this.flyingRock.pop();
        }
        if (this.flyingRock.length != 0 && this.flyingRock[0].height <= -3.0) {
            this.addRocks(this.flyingRock[0]);
            this.flyingRock.pop();
            this.displayParabolic = false;
        }
        
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t) {
        this.checkKeys();
        this.triangle.update(t);
        this.fish.update(t);
        this.secondFish.update(t);
        this.thirdFish.update(t);
        this.testShaders[1].setUniformsValues({
            timeFactor: t / 200 % 1000
        });
        if (this.displayParabolic) {
            this.flyingRock[0].update(t);
        }
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        this.lights[0].update();
        this.lights[1].update();
        this.defaultAppearance.apply();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        // Draw axis
        if (this.displayAxis) {
            this.axis.display();
        }
        if (this.displayTriangle) {
            this.triangle.display();
        }
        if (this.displayCubeMap) {
            // this.translate(this.camera.position[0], this.camera.position[1], this.camera.position[2]);
            if (this.selectedTexture == 0) {
                this.cubeMapBKDF.setTexture(this.textures[0]);
                this.cubeMapBTDF.setTexture(this.textures[1]);
                this.cubeMapFTDF.setTexture(this.textures[2]);
                this.cubeMapLFDF.setTexture(this.textures[3]);
                this.cubeMapRTDF.setTexture(this.textures[4]);
                this.cubeMapTOPDF.setTexture(this.textures[5]);
                this.pushMatrix();
                this.scale(50, 50, 50);
                this.cubeMap.display();
                this.popMatrix();
            } else if (this.selectedTexture == 1) {
                this.cubeMapBKDF.setTexture(this.textures[7]);
                this.cubeMapBTDF.setTexture(this.textures[8]);
                this.cubeMapFTDF.setTexture(this.textures[9]);
                this.cubeMapLFDF.setTexture(this.textures[10]);
                this.cubeMapRTDF.setTexture(this.textures[11]);
                this.cubeMapTOPDF.setTexture(this.textures[6]);
                this.pushMatrix();
                this.scale(50, 50, 50);
                this.cubeMap.display();
                this.popMatrix();
            } else if (this.selectedTexture == 2) {
                this.cubeMapBKDF.setTexture(this.textures[12]);
                this.cubeMapBTDF.setTexture(this.textures[13]);
                this.cubeMapFTDF.setTexture(this.textures[14]);
                this.cubeMapLFDF.setTexture(this.textures[15]);
                this.cubeMapRTDF.setTexture(this.textures[16]);
                this.cubeMapTOPDF.setTexture(this.textures[17]);
                this.pushMatrix();
                this.scale(50, 50, 50);
                this.cubeMap.display();
                this.popMatrix();
            } else if (this.selectedTexture == 3) {
                this.cubeMapBKDF.setTexture(this.textures[18]);
                this.cubeMapBTDF.setTexture(this.textures[19]);
                this.cubeMapFTDF.setTexture(this.textures[20]);
                this.cubeMapLFDF.setTexture(this.textures[21]);
                this.cubeMapRTDF.setTexture(this.textures[22]);
                this.cubeMapTOPDF.setTexture(this.textures[23]);
                this.pushMatrix();
                this.scale(50, 50, 50);
                this.cubeMap.display();
                this.popMatrix();
            }
        }
        if (this.displaySphere) {
            //this.sphereAppearance.apply();t
            this.earth.apply();
            this.incompleteSphere.display();
        }
        if (this.displayCylinder) {
            this.cylinderMaterial.apply();
            this.pushMatrix();
            this.scale(1, 7, 1);
            this.cylinder.display();
            this.popMatrix();
        }
        if (this.displayFish) {
            this.fish.display();
        }
        if (this.displaySeaFloor) {
            this.pushMatrix();
            this.translate(0, -5, 0);
            this.rotate(-Math.PI / 2, 1, 0, 0);
            this.seafloor.display();
            this.popMatrix();
        }
        if (this.displayQuad) {
            this.setActiveShader(this.testShaders[1]);
            this.ocean.bind(2);
            this.pushMatrix();
            this.translate(0, 10, 0); //position asked by teacher Y=10
            this.scale(50, 1, 50); //need to change scale I think
            this.rotate(180 * Math.PI / 180, 0, 1, 0);
            this.rotate(-Math.PI, 0, 0, 1);
            this.rotate(-90 * Math.PI / 180, 1, 0, 0);
            this.quadMaterial.apply();
            this.quad.display();
            this.popMatrix();
            this.setActiveShader(this.defaultShader);
        }
        if (this.displayRocks) {
            this.rockSet.display();
        }
        if (this.displayPillar) {
            this.pillarMaterial.apply();
            this.pushMatrix();
            this.translate(24, -4.5, 0);
            this.scale(0.5, 14.5, 0.5);
            this.pillar1.display();
            this.popMatrix();
            this.pushMatrix();
            this.translate(24, -4.5, -5);
            this.scale(0.5, 14.5, 0.5);
            this.pillar2.display();
            this.popMatrix();
            this.pushMatrix();
            this.translate(3, -4.5, 0);
            this.scale(0.5, 14.5, 0.5);
            this.pillar3.display();
            this.popMatrix();
            this.pushMatrix();
            this.translate(3, -4.5, -5);
            this.scale(0.5, 14.5, 0.5);
            this.pillar4.display();
            this.popMatrix();
        }
        if (this.displaySeaWeed) {
            this.seaweed.display();
        }
        if (this.displayAnimatedFish) {
            this.secondFish.display();
            this.thirdFish.display();
        }
        if (this.Rocks23.length > 0) {
            for (let i = 0; i < this.Rocks23.length; i++) {
                this.pushMatrix();
                this.translate(this.seafloor.centerX + 0.2 * i, -4.5, this.seafloor.centerZ + 0.2 * i);
                if (this.Rocks23[i].getRot() == 1) {
                    this.rotate(this.Rocks23[i].getAngle() / 180, 1, 0, 0);
                } else if (this.Rocks23[i].getRot() == 2) {
                    this.rotate(this.Rocks23[i].getAngle() / 180, 0, 1, 0);
                } else {
                    this.rotate(this.Rocks23[i].getAngle() / 180, 0, 0, 1);
                }
                this.scale(this.Rocks23[i].getScaleX(), this.Rocks23[i].getScaleY(), this.Rocks23[i].getScaleZ());
                this.rockTex.apply();
                this.Rocks23[i].display();
                this.popMatrix();
            }
        }
        if (this.displayParabolic) {
            this.pushMatrix();
            this.translate(this.flyingRock[0].x, this.flyingRock[0].height, this.flyingRock[0].z);
            if (this.flyingRock[0].getRot() == 1) {
                this.rotate(this.flyingRock[0].getAngle() / 180, 1, 0, 0);
            } else if (this.flyingRock[0].getRot() == 2) {
                this.rotate(tthis.flyingRock[0].getAngle() / 180, 0, 1, 0);
            } else {
                this.rotate(this.flyingRock[0].getAngle() / 180, 0, 0, 1);
            }
            this.scale(this.flyingRock[0].getScaleX(), this.flyingRock[0].getScaleY(), this.flyingRock[0].getScaleZ());
            this.rockTex.apply();
            this.flyingRock[0].display();
            this.popMatrix();
        }
        // ---- BEGIN Primitive drawing section
        //This sphere does not have defined texture coordinates
        // ---- END Primitive drawing section
    }
}
