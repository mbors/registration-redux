import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import {Button} from '../elements/Button/Button'
import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('normal', () => <Button>Click</Button>)
  .add('primary', () => <Button primary>Click</Button>)
  

