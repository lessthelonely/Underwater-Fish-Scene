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
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayQuad').name('Display Quad');
        this.gui.add(this.scene, 'displayTangram').name('Display Tangram');
        this.gui.add(this.scene, 'displayCube').name('Display Cube');
        this.gui.add(this.scene, 'linear').name('LINEAR');

        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');
        
        //Dropdown for textures
        this.gui.add(this.scene, 'selectedTexture', this.scene.textureIds).name('Selected Texture').onChange(this.scene.updateAppliedTexture.bind(this.scene));
        //Dropdown for wrapping (S)
        this.gui.add(this.scene, 'wrapS', this.scene.wrappingS).name('Wrap S').onChange(this.scene.updateTextureWrapping.bind(this.scene));
        this.gui.add(this.scene, 'wrapT', this.scene.wrappingT).name('Wrap T').onChange(this.scene.updateTextureWrapping.bind(this.scene));

        // a folder for grouping parameters for one of the lights
        var f4 = this.gui.addFolder('Light 0 ');
        f4.add(this.scene.lights[0], 'enabled').name("Enabled");
        // a subfolder for grouping only the three coordinates of the light
        var sf4 = f4.addFolder('Light 0 Position');
        sf4.add(this.scene.lights[0].position, '0', -5.0, 5.0).name("X Position");
        sf4.add(this.scene.lights[0].position, '1', -5.0, 5.0).name("Y Position");
        sf4.add(this.scene.lights[0].position, '2', -5.0, 5.0).name("Z Position");

        // a folder for grouping parameters for one of the lights
        var f5 = this.gui.addFolder('Light 1 ');
        f5.add(this.scene.lights[1], 'enabled').name("Enabled");
        // a subfolder for grouping only the three coordinates of the light
        var sf5 = f5.addFolder('Light 1 Position');
        sf5.add(this.scene.lights[1].position, '0', -5.0, 5.0).name("X Position");
        sf5.add(this.scene.lights[1].position, '1', -5.0, 5.0).name("Y Position");
        sf5.add(this.scene.lights[1].position, '2', -5.0, 5.0).name("Z Position");


        //Groups for Texture coordinates per vertex (MyQuad)
        var f0 = this.gui.addFolder('Top Left Coords')
        f0.add(this.scene.texCoords, '4', -5.0, 5.0, 0.1).name('S Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);
        f0.add(this.scene.texCoords, '5', -5.0, 5.0, 0.1).name('T Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);
        var f1 = this.gui.addFolder('Top Right Coords')
        f1.add(this.scene.texCoords, '6', -5.0, 5.0, 0.1).name('S Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);
        f1.add(this.scene.texCoords, '7', -5.0, 5.0, 0.1).name('T Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);
        var f2 = this.gui.addFolder('Bottom Left Coords')
        f2.add(this.scene.texCoords, '0', -5.0, 5.0, 0.1).name('S Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);
        f2.add(this.scene.texCoords, '1', -5.0, 5.0, 0.1).name('T Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);
        var f3 = this.gui.addFolder('Bottom Right Coords')
        f3.add(this.scene.texCoords, '2', -5.0, 5.0, 0.1).name('S Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);
        f3.add(this.scene.texCoords, '3', -5.0, 5.0, 0.1).name('T Coord').onChange(this.scene.updateTexCoords.bind(this.scene)).step(0.001);

        return true;
    }
}