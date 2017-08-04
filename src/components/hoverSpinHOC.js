import React from 'react';
import { Motion, presets, spring } from 'react-motion';


const styles = {
  content: {
    // margin: '.3em 1.3em',
    display: 'inline-block',
  }
};


//utility func for rgb values from floats
const int = float => parseInt(float, 10);


// the hoverSpin HOC takes two props: initialColor & hoverColor
// which are arrays of RGB values. If hoverColor is a nested array the
// color is rendered as a gradient –– only the first two arrays are used
const hoverSpin = (Component) => {
  return class HoverSpin extends React.Component {

    constructor(props) {
      super(props);

      let [red, green, blue] = props.initialColor;
      let [iconRed, iconGreen, iconBlue] = props.color;

      this.state = {
        red,
        blue,
        green,
        iconRed,
        iconGreen,
        iconBlue,

        degree: 0,
      };

      this.hover = this.hover.bind(this);
      this.leave = this.leave.bind(this);
    }


    hover() {

      let [red, green, blue] = this.props.initialColor;
      let [iconRed, iconGreen, iconBlue] = this.props.color;

      this.setState({
        red: spring(iconRed),
        iconRed: spring(red),

        green: spring(iconGreen),
        iconGreen: spring(green),

        blue: spring(iconBlue),
        iconBlue: spring(blue),

        degree: spring(360, presets.wobbly)
      });
    }


    leave() {

      let [red, green, blue] = this.props.initialColor;
      let [iconRed, iconGreen, iconBlue] = this.props.color;

      this.setState({
        red: spring(red),
        iconRed: spring(iconRed),

        green: spring(green),
        iconGreen: spring(iconGreen),

        blue: spring(blue),
        iconBlue: spring(iconBlue),

        degree: spring(0, presets.wobbly)
      });
    }


    render() {
      return (
        <div className="hoverSpinHOC" style={styles.content}>
          <Motion style={this.state}>

            {({
              red,
              blue,
              green,
              degree,
              iconRed,
              iconBlue,
              iconGreen
            }) => (
              <div
                onTouchStart={this.hover}
                onTouchEnd={this.leave}
                onMouseOver={this.hover}
                onMouseOut={this.leave}
                style={{
                  MozTransform: `rotateY(${degree}deg)`,
                  WebkitTransform: `rotateY(${degree}deg)`,
                  transform: `rotateY(${degree}deg)`
                }}
                >
                <Component
                  {...this.props}
                  style={{
                    ...this.props.style,
                    background: `rgb(${int(red)}, ${int(green)}, ${int(blue)})`,
                    color: `rgb(${int(iconRed)}, ${int(iconGreen)}, ${int(iconBlue)})`,
                    border: `2px solid rgb(${int(iconRed)}, ${int(iconGreen)}, ${int(iconBlue)})`,
                  }}
                />
              </div>
            )}

          </Motion>
        </div>
      );
    }
  };
};

export default hoverSpin;
