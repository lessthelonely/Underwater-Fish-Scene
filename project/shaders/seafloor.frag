#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float filterValue;
uniform sampler2D uSampler;

uniform sampler2D uSampler2;

void main() {
	vec4 color = texture2D(uSampler,vTextureCoord);

    vec4 filter = texture2D(uSampler2, vTextureCoord);


    color= 0.5*color + 0.5*filter;

	
	gl_FragColor = color;
}