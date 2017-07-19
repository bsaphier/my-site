import { connect } from 'react-redux';
import { actionCreators as audioActionCreators } from 'react-redux-webaudio';

import Resume from '../components/Resume';


class SineDing {

  constructor(context) {
    this.context = context;
  }

  setup() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  }

  play(value) {
    this.setup();

    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);

    this.oscillator.start(this.context.currentTime);
  }

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
    this.oscillator.stop(this.context.currentTime + 1);
  }

}


const soundEvent = ({ noteInHz }) => aCtx => {
  let sound = new SineDing( aCtx );
  sound.play(noteInHz);
  sound.stop();
};


const playSound = note => dispatch => {
  let sineDing = soundEvent( note );
  dispatch( audioActionCreators.emit( sineDing ) );
};


const mapStateToProps = ({ resume }) => {
  return { resume };
};


const mapDispatchToProps = dispatch => ({
  playSound: (note) => dispatch( playSound(note) )
});


export default connect(mapStateToProps, mapDispatchToProps)(Resume);
