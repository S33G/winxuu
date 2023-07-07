import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Background = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "autoPlay": true,
                "background": {
                    "color": {
                        "value": "transparent"
                    },
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover",
                    "opacity": 1
                },
                "backgroundMask": {
                    "composite": "destination-out",
                    "cover": {
                        "color": {
                            "value": "#fff"
                        },
                        "opacity": 1
                    },
                    "enable": false
                },
                "defaultThemes": {},
                "delay": 0,
                "fullScreen": {
                    "enable": true,
                    "zIndex": 1
                },
                "detectRetina": true,
                "duration": 0,
                "fpsLimit": 120,
                "interactivity": {
                    "detectsOn": "window",
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "onDiv": {
                            "selectors": "#repulse-div",
                            "enable": false,
                            "mode": "repulse",
                            "type": "circle"
                        },
                        "onHover": {
                            "enable": true,
                            "mode": "bubble",
                            "parallax": {
                                "enable": true,
                                "force": 120,
                                "smooth": 42
                            }
                        },
                        "resize": {
                            "delay": 0.5,
                            "enable": true
                        }
                    },
                    "modes": {
                        "attract": {
                            "distance": 200,
                            "duration": 0.4,
                            "easing": "ease-out-quad",
                            "factor": 1,
                            "maxSpeed": 20,
                            "speed": 1
                        },
                        "bounce": {
                            "distance": 200
                        },
                        "bubble": {
                            "distance": 100,
                            "duration": 2,
                            "mix": false,
                            "opacity": 0.8,
                            "size": 40,
                            "divs": {
                                "distance": 200,
                                "duration": 0.4,
                                "mix": false,
                                "selectors": []
                            }
                        },
                        "connect": {
                            "distance": 80,
                            "links": {
                                "opacity": 0.5
                            },
                            "radius": 60
                        },
                        "grab": {
                            "distance": 400,
                            "links": {
                                "blink": false,
                                "consent": false,
                                "opacity": 1
                            }
                        },
                        "push": {
                            "default": true,
                            "groups": [],
                            "quantity": 4
                        },
                        "remove": {
                            "quantity": 2
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4,
                            "factor": 100,
                            "speed": 1,
                            "maxSpeed": 50,
                            "easing": "ease-out-quad",
                            "divs": {
                                "distance": 200,
                                "duration": 0.4,
                                "factor": 100,
                                "speed": 1,
                                "maxSpeed": 50,
                                "easing": "ease-out-quad",
                                "selectors": []
                            }
                        },
                        "slow": {
                            "factor": 3,
                            "radius": 200
                        },
                        "trail": {
                            "delay": 1,
                            "pauseOnStop": false,
                            "quantity": 1
                        },
                        "light": {
                            "area": {
                                "gradient": {
                                    "start": {
                                        "value": "#ffffff"
                                    },
                                    "stop": {
                                        "value": "#000000"
                                    }
                                },
                                "radius": 1000
                            },
                            "shadow": {
                                "color": {
                                    "value": "#000000"
                                },
                                "length": 2000
                            }
                        }
                    }
                },
                "manualParticles": [],
                "particles": {
                    "bounce": {
                        "horizontal": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0.1
                            },
                            "value": 1
                        },
                        "vertical": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0.1
                            },
                            "value": 1
                        }
                    },
                    "collisions": {
                        "absorb": {
                            "speed": 2
                        },
                        "bounce": {
                            "horizontal": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            },
                            "vertical": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0.1
                                },
                                "value": 1
                            }
                        },
                        "enable": false,
                        "maxSpeed": 50,
                        "mode": "bounce",
                        "overlap": {
                            "enable": true,
                            "retries": 0
                        }
                    },
                    "color": {
                        "value": "#ffffff",
                        "animation": {
                            "h": {
                                "count": 0,
                                "enable": false,
                                "offset": 0,
                                "speed": 1,
                                "delay": 0,
                                "decay": 0,
                                "sync": true
                            },
                            "s": {
                                "count": 0,
                                "enable": false,
                                "offset": 0,
                                "speed": 1,
                                "delay": 0,
                                "decay": 0,
                                "sync": true
                            },
                            "l": {
                                "count": 0,
                                "enable": false,
                                "offset": 0,
                                "speed": 1,
                                "delay": 0,
                                "decay": 0,
                                "sync": true
                            }
                        }
                    },
                    "groups": {},
                    "move": {
                        "angle": {
                            "offset": 0,
                            "value": 90
                        },
                        "attract": {
                            "distance": 200,
                            "enable": false,
                            "rotate": {
                                "x": 600,
                                "y": 1200
                            }
                        },
                        "center": {
                            "x": 50,
                            "y": 50,
                            "mode": "percent",
                            "radius": 0
                        },
                        "decay": 0,
                        "distance": {},
                        "direction": "none",
                        "drift": 0,
                        "enable": true,
                        "gravity": {
                            "acceleration": 9.81,
                            "enable": false,
                            "inverse": false,
                            "maxSpeed": 50
                        },
                        "path": {
                            "clamp": true,
                            "delay": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 0
                            },
                            "enable": false,
                            "options": {}
                        },
                        "outModes": {
                            "default": "out",
                            "bottom": "out",
                            "left": "out",
                            "right": "out",
                            "top": "out"
                        },
                        "random": true,
                        "size": true,
                        "speed": 2,
                        "spin": {
                            "acceleration": 0,
                            "enable": false
                        },
                        "straight": false,
                        "trail": {
                            "enable": true,
                            "length": 10,
                            "fill": {
                                "color": {
                                    "value": "transparent",
                                }
                            }
                        },
                        "vibrate": false,
                        "warp": true
                    },
                    "number": {
                        "density": {
                            "enable": true,
                            "width": 1920,
                            "height": 1080
                        },
                        "limit": 0,
                        "value": 80
                    },
                    "opacity": {
                        "random": {
                            "enable": true,
                            "minimumValue": 0.5
                        },
                        "value": {
                            "min": 0.1,
                            "max": 1
                        },
                        "animation": {
                            "count": 4,
                            "enable": true,
                            "speed": 0.4,
                            "decay": 0,
                            "delay": 0,
                            "sync": false,
                            "mode": "auto",
                            "startValue": "random",
                            "destroy": "none",
                            "minimumValue": 0.2
                        }
                    },
                    "reduceDuplicates": false,
                    "shadow": {
                        "blur": 2,
                        "color": {
                            "value": "#000"
                        },
                        "enable": true,
                        "offset": {
                            "x": 1,
                            "y": 1
                        }
                    },
                    "shape": {
                        "close": true,
                        "fill": false,
                        "options": {
                            "character": {
                                "fill": false,
                                "font": "Verdana",
                                "style": "",
                                "value": "*",
                                "weight": "400"
                            },
                            "char": {
                                "fill": false,
                                "font": "Verdana",
                                "style": "",
                                "value": "*",
                                "weight": "400"
                            },
                            "polygon": {
                                "sides": 5
                            },
                            "star": {
                                "sides": 5
                            },
                            "images": [
                                {
                                    "src": "/win.svg",
                                    "width": 64,
                                    "height": 64
                                },
                            ]
                        },
                        "type": "image"
                    },
                    "size": {
                        "random": {
                            "enable": true,
                            "minimumValue": 1
                        },
                        "value": 120,
                        "animation": {
                            "count": 0,
                            "enable": false,
                            "speed": 40,
                            "decay": 0,
                            "delay": 0,
                            "sync": false,
                            "mode": "auto",
                            "startValue": "random",
                            "destroy": "none",
                            "minimumValue": 0.1
                        }
                    },
                    "stroke": {
                        "width": 1,
                        "color": {
                            "value": "#000000",
                            "animation": {
                                "h": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                },
                                "s": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                },
                                "l": {
                                    "count": 0,
                                    "enable": false,
                                    "offset": 0,
                                    "speed": 1,
                                    "delay": 0,
                                    "decay": 0,
                                    "sync": true
                                }
                            }
                        }
                    },
                    "zIndex": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": -1,
                        "opacityRate": 1,
                        "sizeRate": 1,
                        "velocityRate": 1
                    },
                    "life": {
                        "count": 0,
                        "delay": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0,
                            "sync": false
                        },
                        "duration": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0.0001
                            },
                            "value": 0,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "random": {
                            "enable": true,
                            "minimumValue": 0
                        },
                        "value": 0,
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "decay": 0,
                            "sync": false
                        },
                        "direction": "random",
                        "path": false
                    },
                    "destroy": {
                        "bounds": {},
                        "mode": "none",
                        "split": {
                            "count": 1,
                            "factor": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": 3
                            },
                            "rate": {
                                "random": {
                                    "enable": false,
                                    "minimumValue": 0
                                },
                                "value": {
                                    "min": 4,
                                    "max": 9
                                }
                            },
                            "sizeOffset": true,
                            "particles": {}
                        }
                    },
                    "roll": {
                        "darken": {
                            "enable": true,
                            "value": 1
                        },
                        "enable": false,
                        "enlighten": {
                            "enable": true,
                            "value": 0.4
                        },
                        "mode": "vertical",
                        "speed": 25
                    },
                    "tilt": {
                        "random": {
                            "enable": true,
                            "minimumValue": 0
                        },
                        "value": 0,
                        "animation": {
                            "enable": true,
                            "speed": 7,
                            "decay": 3,
                            "sync": false
                        },
                        "direction": "clockwise",
                        "enable": false
                    },
                    "twinkle": {
                        "lines": {
                            "enable": true,
                            "frequency": 0.05,
                            "opacity": 1
                        },
                        "particles": {
                            "enable": false,
                            "frequency": 0.05,
                            "opacity": 1
                        }
                    },
                    "wobble": {
                        "distance": 5,
                        "enable": true,
                        "speed": {
                            "angle": 50,
                            "move": 10
                        }
                    },
                    "orbit": {
                        "animation": {
                            "count": 8,
                            "enable": true,
                            "speed": 1,
                            "decay": 0,
                            "delay": 0,
                            "sync": false
                        },
                        "enable": false,
                        "opacity": 1,
                        "rotation": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 45
                        },
                        "width": 1
                    },
                    "links": {
                        "blink": false,
                        "color": {
                            "value": "#000"
                        },
                        "consent": false,
                        "distance": 150,
                        "enable": false,
                        "frequency": 1,
                        "opacity": 0.4,
                        "shadow": {
                            "blur": 5,
                            "color": {
                                "value": "#000"
                            },
                            "enable": false
                        },
                        "triangles": {
                            "enable": false,
                            "frequency": 1
                        },
                        "width": 1,
                        "warp": false
                    },
                    "repulse": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 0,
                        "enabled": false,
                        "distance": 1,
                        "duration": 1,
                        "factor": 1,
                        "speed": 1
                    }
                },
                "pauseOnBlur": true,
                "pauseOnOutsideViewport": true,
                "responsive": [],
                "smooth": true,
                "themes": [],
                "zLayers": 100,
                "motion": {
                    "disable": false,
                    "reduce": {
                        "factor": 4,
                        "value": true
                    }
                }
            }}
        />
    );
};

export default Background;
