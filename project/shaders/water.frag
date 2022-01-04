#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform sampler2D uSampler2;

uniform float timeFactor;
uniform float speedFactor;

void main() {
    vec2 movementCoords = vTextureCoord + timeFactor * 0.01;
    
    vec2 distortedTexCoords = (texture2D(uSampler2, vec2(movementCoords.s, movementCoords.t)).rg - 0.5);
    
    distortedTexCoords = vTextureCoord + distortedTexCoords * 0.5;

    vec4 color = texture2D(uSampler1,distortedTexCoords);



    gl_FragColor = color;
}
