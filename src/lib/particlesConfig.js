export const style = {
  top: 0,
  left: 0,
  position: 'fixed'
};

export const params = {
  particles: {
    number: {
      value: 25,
      density: {
        enable: true,
        value_area: 750
      }
    },
    color: {
      value: '#444fff'
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 6,
        color: '#110111'
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
      random: false,
      anim: {
        enable: false,
        speed: 0.3,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 34,
      random: true,
      anim: {
        enable: false,
        speed: 3,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 89,
      color: '#cccfff',
      opacity: 1,
      width: 0.6
    },
    move: {
      enable: true,
      speed: 0.38,
      direction: 'top',
      random: true,
      straight: true,
      out_mode: '',
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
        distance: 154,
        size: 5,
        duration: 8,
        opacity: 0.3,
        speed: 6
      },
      repulse: {
        distance: 146,
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
