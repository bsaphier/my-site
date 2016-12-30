export const style = {
  top: 0,
  left: 0,
  position: 'fixed'
};

export const params = {
  particles: {
    number: {
      value: 89,
      density: {
        enable: false,
        value_area: 710.2328774690454
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 3,
        color: '#000000'
      },
      polygon: {
        nb_sides: 6
      },
      image: {
        src: '',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.3,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 100,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 352.750653390415,
      color: '#cccccc',
      opacity: 0,
      width: 0.6
    },
    move: {
      enable: true,
      speed: 0,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 300,
        size: 4.060386061506726,
        duration: 8.12077212301345,
        opacity: 0.07308694910712106,
        speed: 3
      },
      repulse: {
        distance: 146.17389821424212,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
