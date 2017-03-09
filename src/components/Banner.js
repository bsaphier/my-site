import React, { Component } from 'react';
import { Motion, presets, spring } from 'react-motion';

const styles = {
  banner: {
    position: 'relative',
    background: 'none',
    textAlign: 'center',
    color: 'rgba(255, 68, 62, 1)',
    WebkitBackgroundClip: 'text',
    // padding: '40pt',
    width: '100%',
    height: '100%',
    paddingTop: 0,
  },
  cell: {
    position: 'absolute',
    top: '38%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    verticalAlign: 'middle',
  },
  title: {
    display: 'flex',
    textAlign: 'justify',
    textTransform: 'uppercase',
  },
  text: {
    margin: '0 auto',
    display: 'inline-block',
    whiteSpace: 'pre',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'linear-gradient(to top right, rgb(255, 115, 50) 62%, rgb(252, 255, 88) 162%)'
  }
};

const motion = {
  initial: {
    top: -38,
    letterSpacing0: 21,
    letterSpacing1: 13,
    letterSpacing2: 8,
    letterSpacing3: 5,
    letterSpacing4: 3,
    letterSpacing5: 2,
    letterSpacing6: 1,
    letterSpacing7: 1
  },
  exit: {
    top: spring(-38, presets.stiff),
    letterSpacing0: spring(1, presets.wobbly),
    letterSpacing1: spring(1, presets.wobbly),
    letterSpacing2: spring(1, presets.wobbly),
    letterSpacing3: spring(1, presets.wobbly),
    letterSpacing4: spring(1, presets.wobbly),
    letterSpacing5: spring(1, presets.wobbly),
    letterSpacing6: spring(1, presets.wobbly),
    letterSpacing7: spring(1, presets.wobbly)
  },
  enter: {
    top: spring(38, presets.stiff),
    letterSpacing0: spring(-0.03, presets.wobbly),
    letterSpacing1: spring(0.25, presets.gentle),
    letterSpacing2: spring(-0.06, presets.wobbly),
    letterSpacing3: spring(-0.08, presets.gentle),
    letterSpacing4: spring(-0.05, presets.gentle),
    letterSpacing5: spring(-0.1, presets.gentle),
    letterSpacing6: spring(-0.1, presets.gentle),
    letterSpacing7: spring(-0.1, presets.gentle)
  }
};


const Title = ({ id, hover, leave, style, children }) => (
  <div style={styles.title}>
    <span
      onMouseOver={hover ? () => hover(id) : null}
      onMouseLeave={leave ? () => leave(id) : null}
      style={{
        ...styles.text,
        ...style
      }}
    >
      { children }
    </span>
  </div>
);

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enter: false,
      motion: motion.initial
    };
    this.leave = this.leave.bind(this);
    this.hover = this.hover.bind(this);
    this.enterAnimate = this.enterAnimate.bind(this);
  }

  componentDidMount() {
    if (!this.state.enter) {
      this.enterAnimate();
    }
  }

  enterAnimate() {
    let nextState = { motion: {
          top: spring(38, presets.stiff),
          letterSpacing0: spring(-0.03, presets.gentle),
          letterSpacing1: spring(0.25, presets.gentle),
          letterSpacing2: spring(-0.06, presets.wobbly),
          letterSpacing3: spring(-0.08, presets.gentle),
          letterSpacing4: spring(-0.05, presets.gentle),
          letterSpacing5: spring(-0.1, presets.gentle),
          letterSpacing6: spring(-0.1, presets.gentle),
          letterSpacing7: spring(-0.1, presets.gentle)
        }};
    this.setState({enter: true, ...nextState});
  }

  hover(id) {
    console.log(id);
    this.setState({ motion: { ...motion.enter, [id]: motion.exit[id] }});
  }

  leave(id) {
    console.log(id);
    this.setState({ motion: {...motion.enter, [id]: motion.enter[id] }});
  }

  render () {
    return (
      <div style={styles.banner}>
        <Motion style={this.state.motion}>
          {(interpStyle) => (
            <div id="cell" style={{...styles.cell, top: `${interpStyle.top}%`}}>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing0" style={{
                fontWeight: 500,
                fontSize: '14vh',
                lineHeight: '11vh',
                paddingRight: '0.07em',
                letterSpacing: `${interpStyle.letterSpacing0}em`
              }}>
                Hello
              </Title>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing1" style={{
                fontWeight: 100,
                fontSize: '5vh',
                lineHeight: '4vh',
                letterSpacing: `${interpStyle.letterSpacing1}em`
              }}>
                My name is
              </Title>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing2" style={{
                fontWeight: 900,
                fontSize: '23vh',
                lineHeight: '16.2vh',
                paddingTop: '0.03em',
                paddingRight: '0.1em',
                letterSpacing: `${interpStyle.letterSpacing2}em`
              }}>
                <b style={{letterSpacing: `${interpStyle.letterSpacing2 - 0.02}em`}}>B</b>en
              </Title>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing3" style={{
                fontWeight: 100,
                fontSize: '12vh',
                fontStyle: 'italic',
                lineHeight: '9.6vh',
                paddingRight: '0.15em',
                letterSpacing: `${interpStyle.letterSpacing3}em`
              }}>
                Saphier
              </Title>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing4" style={{
                fontWeight: 900,
                fontSize: '3.4vh',
                lineHeight: '2.3vh',
                wordSpacing: '-0.05em',
                paddingTop: '0.07em',
                paddingRight: '0.15em',
                letterSpacing: `${interpStyle.letterSpacing4}em`
              }}>
                I'm a software engineer
              </Title>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing5" style={{
                fontWeight: 100,
                fontSize: '6.5vh',
                lineHeight: '5.7vh',
                paddingRight: '0.175em',
                letterSpacing: `${interpStyle.letterSpacing5}em`
              }}>
                Exploring the
              </Title>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing6" style={{
                fontWeight: 400,
                fontSize: '4.5vh',
                lineHeight: '3.6vh',
                paddingRight: '0.18em',
                letterSpacing: `${interpStyle.letterSpacing6}em`
              }}>
                crossover between
              </Title>
              <Title hover={this.hover} leave={this.leave} id="letterSpacing7" style={{
                fontWeight: 100,
                fontSize: '6.66vh',
                lineHeight: '7vh',
                paddingRight: '0.2em',
                letterSpacing: `${interpStyle.letterSpacing7}em`
              }}>
                Sound & Code
              </Title>
            </div>
          )}
        </Motion>
        <div
          style={{
            bottom: '0%',
            width: '100%',
            margin: '3em auto',
            textAlign: 'center',
            position: 'absolute',
            textTransform: 'uppercase',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(to top right, rgba(255, 115, 50, 0.62) 62%, rgba(252, 255, 88, 0.62) 162%)'
          }}
          >
            <span>. . . And I'm still working on my website</span>
        </div>
      </div>
    );
  }
}

export default Banner;
