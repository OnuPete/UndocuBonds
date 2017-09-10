import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

const QAComponent = (props) => {
  return (
    <ListItem
      key={props.keyProp}
      primaryText={props.question}
      open={props.open}
      onNestedListToggle={props.handleNestedListToggle}
      nestedItems={[
        <ListItem key={1} primaryText={props.answer} />,
      ]} />
  );
}

export default QAComponent;
