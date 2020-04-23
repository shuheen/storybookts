import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./../components/button";
storiesOf("Button", module)
  .add("with text", () => (
    <Button>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button><span className="px-5" role="img" aria-label="so cool"> 😀 😎 👍 💯 </span></Button>
  ));