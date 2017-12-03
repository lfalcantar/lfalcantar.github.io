particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": !0,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ff0000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": !1,
      "anim": {
        "enable": !1,
        "speed": 2,
        "opacity_min": 0,
        "sync": !1
      }
    },
    "size": {
      "value": .2,
      "random": !1,
      "anim": {
        "enable": !1,
        "speed": 20,
        "size_min": 0,
        "sync": !1
      }
    },
    "line_linked": {
      "enable": !0,
      "distance": 80,
      "color": "#0a2c74",
      "opacity": .8,
      "width": 1
    },
    "move": {
      "enable": !0,
      "speed": 2,
      "direction": "none",
      "random": !1,
      "straight": !1,
      "out_mode": "out",
      "bounce": !1,
      "attract": {
        "enable": !1,
        "rotateX": 3e3,
        "rotateY": 3e3
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": !0,
        "mode": "grab"
      },
      "onclick": {
        "enable": !0,
        "mode": "repulse"
      },
      "resize": !0
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": .4,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
