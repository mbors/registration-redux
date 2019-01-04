import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../elements/Button/index'
import Header from '../elements/Header/index'

storiesOf('Button', module)
  .add('normal', () => <Button>Click</Button>)
  .add('primary', () => <Button primary>Click</Button>)

storiesOf('Header', module)
  .add('normal', () => <Header title="Hi there!" />)


