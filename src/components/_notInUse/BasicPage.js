import React from 'react';

const BasicPage = (props) => (
  <div itemStyle={props.itemStyle}>
    <div className="wavy--shit">{props.title}</div>
  </div>
);

export default BasicPage;
