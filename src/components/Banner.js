import React, { Component } from 'react';
import { Motion, presets, spring } from 'react-motion';

import IconButton from './IconButton';
import hoverSpin from './hoverSpinHOC';


const socialMedia = [
  {
    name: 'Github',
    icon: 'github-circled',
    url: 'https://www.github.com/bsaphier'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/bsaphier'
  },
  {
    name: 'Stack Overflow',
    icon: 'stackoverflow',
    url: 'http://stackoverflow.com/story/bsaphier'
  },
  {
    name: 'Angel List',
    icon: 'angellist',
    url: 'https://angel.co/bsaphier'
  }
];


const styles = {
  banner: {
    position: 'relative',
    background: 'none',
    textAlign: 'center',
    color: 'rgba(255, 68, 62, 1)',
    width: '100%',
    height: '100%',
    paddingTop: 0,
  },
  block: {
    top: '80%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  cell: {
    position: 'absolute',
    top: '38%',
    left: '50%',
    willChange: 'transform',

    WebkitTransform: 'translate(-50%, -50%)',
    MozTransform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    OTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    display: 'flex',
    textAlign: 'justify',
    textTransform: 'uppercase'
  },
  text: {
    margin: '0 auto',
    display: 'inline-block',
    whiteSpace: 'pre',
    background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',

    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    MsTextFillColor: 'transparent',
    OTextFillColor: 'transparent',

    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    MsBackgroundClip: 'text',
    OBackgroundClip: 'text',
    backgroundClip: 'text'
  },
  socialButton: {
    borderRadius: '25%',
    boxShadow: '-1px 8px 13px -3px rgba(0, 0, 0, 0.2)'
  },
  footer: {
    bottom: '0%',
    width: '100%',
    margin: '3em auto',
    textAlign: 'center',
    position: 'absolute',
    textTransform: 'uppercase',
    textShadow: '-1px 2px 3px rgba(0, 0, 0, 0.62)',
    color: 'rgba(255, 68, 62, 0.8)',
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
    letterSpacing0: spring(-0.055, presets.wobbly),
    letterSpacing1: spring(0.175, presets.gentle),
    letterSpacing2: spring(-0.06, presets.wobbly),
    letterSpacing3: spring(-0.08, presets.gentle),
    letterSpacing4: spring(-0.048, presets.gentle),
    letterSpacing5: spring(-0.1, presets.gentle),
    letterSpacing6: spring(-0.091, presets.gentle),
    letterSpacing7: spring(-0.1, presets.gentle)
  }
};


const Block = ({ children, style }) => (
  <div className="block" style={{...styles.block, ...style}}>
    { children }
  </div>
);


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


const SocialButton = hoverSpin(IconButton);


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
    let nextState = {
      motion: {
        top: spring(38, presets.stiff),
        letterSpacing0: spring(-0.055, presets.gentle),
        letterSpacing1: spring(0.175, presets.gentle),
        letterSpacing2: spring(-0.06, presets.wobbly),
        letterSpacing3: spring(-0.08, presets.gentle),
        letterSpacing4: spring(-0.048, presets.gentle),
        letterSpacing5: spring(-0.1, presets.gentle),
        letterSpacing6: spring(-0.091, presets.gentle),
        letterSpacing7: spring(-0.1, presets.gentle)
      }};
    this.setState({enter: true, ...nextState});
  }


  hover(id) {
    this.setState({ motion: { ...motion.enter, [id]: motion.exit[id] }});
  }


  leave(id) {
    this.setState({ motion: {...motion.enter, [id]: motion.enter[id] }});
  }


  render () {


    const socialButtons = socialMedia.map( link =>
      <SocialButton
        url={link.url}
        key={link.name}
        name={link.name}
        icon={link.icon}
        color={[255, 68, 62]}
        initialColor={[45, 45, 45]}
        style={styles.socialButton}
      />
    );

    return (
      <div className="banner" style={styles.banner}>
        <Motion style={this.state.motion}>
          {(interpStyle) => (
            <div id="cell" style={{...styles.cell, top: `${interpStyle.top}%`}}>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing0"
                style={{
                  fontWeight: 500,
                  fontSize: 'calc(3.8 * 4.275vmin)',
                  lineHeight: '0.7em',
                  paddingTop: '0.06em',
                  paddingRight: '0.1em',
                  paddingLeft: '0.05em',
                  letterSpacing: `${interpStyle.letterSpacing0}em`
                }}>
                Hello
              </Title>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing1"
                style={{
                  fontWeight: 100,
                  fontSize: 'calc(3.8 * 1.6vmin)',
                  lineHeight: '0.8em',
                  paddingTop: '0.06em',
                  paddingLeft: '0.15em',
                  letterSpacing: `${interpStyle.letterSpacing1}em`
                }}>
                My name is
              </Title>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing2"
                style={{
                  fontWeight: 900,
                  fontSize: 'calc(3.8 * 6.89vmin)',
                  lineHeight: '0.7em',
                  paddingTop: '0.03em',
                  paddingRight: '0.06em',
                  paddingBottom: '0.01em',
                  letterSpacing: `${interpStyle.letterSpacing2}em`
                }}>
                <b style={{letterSpacing: `${interpStyle.letterSpacing2 - 0.035}em`}}>B</b>en
              </Title>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing3"
                style={{
                  fontWeight: 100,
                  fontSize: 'calc(3.8 * 3.5vmin)',
                  fontStyle: 'italic',
                  lineHeight: '0.8em',
                  paddingRight: '0.1em',
                  letterSpacing: `${interpStyle.letterSpacing3}em`
                }}>
                Saphier
              </Title>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing4"
                style={{
                  fontWeight: 900,
                  fontSize: 'calc(3.8 * 1vmin)',
                  lineHeight: '0.9em',
                  wordSpacing: '-0.05em',
                  paddingTop: '0.07em',
                  paddingRight: '0.103em',
                  letterSpacing: `${interpStyle.letterSpacing4}em`
                }}>
                I'm a software engineer
              </Title>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing5"
                style={{
                  fontWeight: 100,
                  fontSize: 'calc(3.8 * 1.91vmin)',
                  lineHeight: '0.9em',
                  paddingRight: '0.175em',
                  letterSpacing: `${interpStyle.letterSpacing5}em`
                }}>
                Exploring the
              </Title>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing6"
                style={{
                  fontWeight: 400,
                  fontSize: 'calc(3.8 * 1.3vmin)',
                  lineHeight: '0.7em',
                  paddingTop: '0.08em',
                  paddingRight: '0.13em',
                  paddingBottom: '0.03em',
                  letterSpacing: `${interpStyle.letterSpacing6}em`
                }}>
                crossover between
              </Title>
              <Title
                hover={this.hover}
                leave={this.leave}
                id="letterSpacing7"
                style={{
                  fontWeight: 100,
                  fontSize: 'calc(3.8 * 2vmin)',
                  lineHeight: '1em',
                  paddingRight: '0.2em',
                  letterSpacing: `${interpStyle.letterSpacing7}em`
                }}>
                Sound & Code
              </Title>
            </div>
          )}
        </Motion>

        <Block style={{height: '21%', textAlign: 'center'}}>
          { socialButtons }
        </Block>

        <div
          style={styles.footer}
          >
            <span>. . . And I'm still working on my website</span>
        </div>
      </div>
    );
  }
}

export default Banner;
