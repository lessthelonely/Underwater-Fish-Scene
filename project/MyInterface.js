import {CGFinterface, dat} from '../lib/CGF.js';
/**
 * MyInterface
 * @constructor
 */
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }
    
    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;
        
        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Scale Factor');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Speed Factor');
        var f2 = this.gui.addFolder('Parte A');
        f2.add(this.scene, 'displaySphere').name("Display Sphere");
        f2.add(this.scene, 'displayTriangle').name("Display Triangle");
        f2.add(this.scene, 'displayCylinder').name("Display Cylinder");
        var f3 = this.gui.addFolder('Parte B');
        f3.add(this.scene, 'displayCubeMap').name("Display Cube Map");
        f3.add(this.scene, 'displayFish').name("Display Fish");
        f3.add(this.scene, 'displayAnimatedFish').name("Display Animated Fish");
        f3.add(this.scene, 'displaySeaFloor').name("Display SeaFloor");
        f3.add(this.scene, 'displayQuad').name("Display Quad");
        f3.add(this.scene, 'displayRocks').name('Display Rocks');
        f3.add(this.scene, 'displayPillar').name('Display Pillars');
        f3.add(this.scene, 'displaySeaWeed').name('Display Sea Weed');
        f3.add(this.scene, 'selectedTexture', this.scene.textureIds).name('Selected Texture Cube');
        
        // a folder for grouping parameters for one of the lights
        var f1 = this.gui.addFolder('Light 1 ');
        f1.add(this.scene.lights[1], 'enabled').name("Enabled");
        // a subfolder for grouping only the three coordinates of the light
        var sf1 = f1.addFolder('Light 1 Position');
        sf1.add(this.scene.lights[1].position, '0', -5.0, 5.0).name("X Position");
        sf1.add(this.scene.lights[1].position, '1', -5.0, 5.0).name("Y Position");
        sf1.add(this.scene.lights[1].position, '2', -5.0, 5.0).name("Z Position");
        
        this.initKeys();
        return true;
    }
    
    initKeys() {
        //create reference from the scene to the GUI
        this.scene.gui = this;
        
        //disable the processKeyboard function
        
        this.processKeyboard = function() {};
        
        //create a named array to store wish keys are being pressed
        this.activeKeys = {};
    }
    
    processKeyDown(event) {
        //called when a key is pressed down
        //mark it as active in the array
        this.activeKeys[event.code] = true;
    };
    
    processKeyUp(event) {
        //called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code] = false;
    };
    
    isKeyPressed(keyCode) {
        if (this.activeKeys[keyCode] === true && (keyCode == "keyL" || keyCode == "keyP")) {
            this.activeKeys[keyCode] = false;
            return true;
        }
        return this.activeKeys[keyCode] || false;
    }
    
}
