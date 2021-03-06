import React, { Component }                      from 'react';
import { connect }                               from 'react-redux';
import { Motion, presets, spring }               from 'react-motion';
import { actionCreators as audioActionCreators } from 'react-redux-webaudio';

import '../stylesheets/main.scss';
import IconButton                                from './IconButton';
import hoverSpin                                 from './hoverSpinHOC';
import { styles }                                from '../styles';


let PRODUCTION;
if (process.env.NODE_ENV === 'production') { PRODUCTION = true; }
if (process.env.NODE_ENV !== 'production') { PRODUCTION = false; }


/********************* AUDIO STUFFS *********************/
/**~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**/
    const ROOT_IN_HZ = 440;

    const BLUES_STEPS = [ 1, (6 / 5), (4 / 3), (45 / 32), (3 / 2), (9 / 5), 2 ];
/**~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**/

class SineDing {
    constructor(context) {
        this.context = context;
    }

    setup() {
        this.oscillator = this.context.createOscillator();
        this.oscillator.type = 'sine';

        this.filter = this.context.createBiquadFilter();
        this.filter.frequency.value = 3520;
        this.filter.type = 'bandpass';
        this.filter.Q.value = 0.8;

        this.gainNode = this.context.createGain();

        this.oscillator.connect(this.filter);
        this.filter.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
    }

    play(value) {
        this.setup();
        this.oscillator.frequency.value = value;
        this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
        this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);
        this.oscillator.start(this.context.currentTime);
    }

    stop() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + 0.5);
    }

    kill() {
        this.oscillator.stop(this.context.currentTime + 0.5);
        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                this[i] = undefined;
            } else if (this.prototype.hasOwnProperty(i)) {
                this.prototype[i] = undefined;
            }
        }
    }
}

const scaleFactory = (scale, tonic) => scale.map( (step, idx) => ({
    step: idx + 1,
    noteInHz: tonic * step
}) );

const soundEvent = ({ noteInHz }) => aCtx => {
    let sound = new SineDing( aCtx );
    sound.play(noteInHz);
    sound.stop();
    sound.kill();
    sound = undefined;
};

/********************************************************/


const SocialButton = hoverSpin(IconButton);

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

const motion = {
    initial: {
        top:            -50,
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
        top:            spring(-50, presets.stiff),
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
        top:            spring(45, presets.stiff),
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

const Title = ({ id, note, hover, leave, style, children }) => (
    <div
        style={styles.title}
        onTouchStart={hover ? () => {
            hover(id, note);
        } : null}
        onTouchMove={leave ? (evt) => {
            evt.preventDefault();
            leave(id);
        } : null}
        onTouchCancel={leave ? (evt) => {
            evt.preventDefault();
            leave(id);
        } : null}
        onTouchEnd={leave ? (evt) => {
            evt.preventDefault();
            leave(id);
        } : null}
        onMouseOver={hover ? () => hover(id, note) : null}
        onMouseLeave={leave ? () => leave(id) : null}
        >
            <span style={{ ...styles.text, ...style }}>
                { children }
            </span>
        </div>
    );


class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enter: false,
            motion: motion.initial,
            musicScale: scaleFactory( BLUES_STEPS, ROOT_IN_HZ )
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
                top: spring(45, presets.stiff),
                letterSpacing0: spring(-0.055, presets.gentle),
                letterSpacing1: spring(0.175, presets.gentle),
                letterSpacing2: spring(-0.06, presets.wobbly),
                letterSpacing3: spring(-0.08, presets.gentle),
                letterSpacing4: spring(-0.048, presets.gentle),
                letterSpacing5: spring(-0.1, presets.gentle),
                letterSpacing6: spring(-0.091, presets.gentle),
                letterSpacing7: spring(-0.1, presets.gentle)
            }
        };
        this.setState({enter: true, ...nextState});
    }

    hover(id, note) {
        this.setState({ motion: { ...motion.enter, [id]: motion.exit[id] }});
        this.props.playSound( note );
    }

    leave(id) {
        this.setState({ motion: {...motion.enter, [id]: motion.enter[id] }});
    }

    render () {
        const socialButtons = socialMedia.map( link => (
            <SocialButton
                url={link.url}
                key={link.name}
                name={link.name}
                icon={link.icon}
                color={[255, 68, 62]}
                initialColor={[45, 45, 45]}
                style={styles.socialButton}
            />
        ));

        return (<main style={styles.main}>
            <section style={styles.window}>
                {/* For Development */
                    !PRODUCTION && (
                        <div style={{position: 'absolute', color: '#ffffff', fontSize: '1rem'}}>
                            <span>{`isiPhone: ${navigator.userAgent.toLowerCase().indexOf('iphone') > -1}`}</span>
                            <br />
                            <span>{`innerHeight: ${window.innerHeight}`}</span>
                            <br />
                            <span>{`innerWidth: ${window.innerWidth}`}</span>
                        </div>
                    )
                /* For Development */}
                <div className="banner" style={styles.banner}>
                    <Motion style={this.state.motion}>
                        {(interpStyle) => (
                            <div id="cell" style={{...styles.cell, top: `${interpStyle.top}%`}}>
                                <Title
                                    hover={this.hover}
                                    leave={this.leave}
                                    id="letterSpacing0"
                                    note={this.state.musicScale[0]}
                                    style={{
                                        fontWeight: 500,
                                        fontSize: 'calc(2 * 4.275em)',
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
                                    note={this.state.musicScale[2]}
                                    style={{
                                        fontWeight: 100,
                                        fontSize: 'calc(2 * 1.6em)',
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
                                    note={this.state.musicScale[1]}
                                    style={{
                                        fontWeight: 900,
                                        fontSize: 'calc(2 * 6.89em)',
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
                                    note={this.state.musicScale[2]}
                                    style={{
                                        fontWeight: 100,
                                        fontSize: 'calc(2 * 3.5em)',
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
                                    note={this.state.musicScale[3]}
                                    style={{
                                        fontWeight: 900,
                                        fontSize: 'calc(2 * 1em)',
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
                                    note={this.state.musicScale[4]}
                                    style={{
                                        fontWeight: 100,
                                        fontSize: 'calc(2 * 1.91em)',
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
                                    note={this.state.musicScale[5]}
                                    style={{
                                        fontWeight: 400,
                                        fontSize: 'calc(2 * 1.3em)',
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
                                    note={this.state.musicScale[6]}
                                    style={{
                                        fontWeight: 100,
                                        fontSize: 'calc(2 * 2em)',
                                        lineHeight: '1em',
                                        paddingRight: '0.2em',
                                        letterSpacing: `${interpStyle.letterSpacing7}em`
                                    }}>
                                    Sound & Code
                                </Title>
                            </div>
                        )}
                    </Motion>

                    <Block>{ socialButtons }</Block>

                    <div className="footer" style={styles.footer}>
                        <span>. . . And I'm still working on my website</span>
                    </div>
                </div>
            </section>
        </main>);
    }
}


/********************* Thunk-Action *********************/

const playSound = note => dispatch => {
    let sineDing = soundEvent( note );
    dispatch( audioActionCreators.emit( sineDing ) );
};

/********************************************************/

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    playSound: (note) => dispatch( playSound(note) ),
});


export default connect(mapStateToProps, mapDispatchToProps)(Banner);
