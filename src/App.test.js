import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('ProductHeader', () => {
 
  it('passing test', () => {
    expect(true).toBeTruthy();
  })
 
  it('failing test', () => {
    expect(false).toBeTruthy();
  })
})