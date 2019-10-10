import React from 'react'
import {render, fireEvent } from '@testing-library/react'

import Buttons from './Buttons'
import expectExport from 'expect';

test('Should render correctly', () => {
  const addStrike = jest.fn();
  const addBall = jest.fn();
  const hit = jest.fn();
  const foul = jest.fn();

  render(
    <Buttons addStrike={addStrike} addBall={addBall} hit={hit} foul={foul} />
  )
})

test('strike is added upon click', () => {
  
  const addStrike = jest.fn();

  const {getByText} = render(
    <Buttons addStrike={addStrike} />
  )

  const strikeButton = getByText(/strike!/i);

  fireEvent.click(strikeButton)

  expect(addStrike).toHaveBeenCalled();
})