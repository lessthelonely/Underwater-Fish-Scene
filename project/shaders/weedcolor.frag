#ifdef GL_ES
precision highp float;
#endif

struct lightProperties {
    vec4 position;
    vec4 ambient;
    vec4 diffuse;
    vec4 specular;
    vec4 half_vector;
    vec3 spot_direction;
    float spot_exponent;
    float spot_cutoff;
    float constant_attenuation;
    float linear_attenuation;
    float quadratic_attenuation;
    bool enabled;
};

#define NUMBER_OF_LIGHTS 8
uniform lightProperties uLight[NUMBER_OF_LIGHTS];

varying vec4 coords;
uniform float value1;
uniform float value2;
uniform float value3;
uniform float value4;
uniform float value5;

void main() {
	//yellow
	if(value1 == 1.0){
		gl_FragColor = vec4(1.0,1.0,0.0,1.0);
	}

	//purple
	if(value2 == 1.0){
		gl_FragColor = vec4(0.6,0.6,0.9, 1.0) * uLight[0].diffuse;
	}

	//red
	if(value3 == 1.0){
		gl_FragColor = vec4(1.0,0.0,0.0,1.0);
	}

	//orange
	if(value4 == 1.0){
		gl_FragColor = vec4(1.0,0.64,0.0, 1.0) * uLight[0].diffuse;
	}

	//green
	if(value5 == 1.0){
		gl_FragColor = vec4(0.0,1.0,0.0,1.0);
	}
}