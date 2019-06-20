import React from 'react';
import ReactTextRotator from 'react-text-rotator';
import {Slide} from 'react-slideshow-image';
const content = [
  {
    text: 'Javascript',
    className: 'lang1 lang',
    animation: 'fade'
  },
  {
    text: 'React',
    className: 'lang2 lang',
    animation: 'fade'
  },
  {
    text: 'PHP',
    className: 'lang3 lang',
    animation: 'fade'
  },
  {
    text: 'Wordpress',
    className: 'lang4 lang',
    animation: 'fade'
  },
  {
    text: 'MySQL',
    className: 'lang5 lang',
    animation: 'fade'
  },
  {
    text: 'MongoDB',
    className: 'lang6 lang',
    animation: 'fade'
  },
  {
    text: 'GraphQL',
    className: 'lang7 lang',
    animation: 'fade'
  },
  {
    text: 'HTML',
    className: 'lang8 lang',
    animation: 'fade'
  },
  {
    text: 'CSS',
    className: 'lang9 lang',
    animation: 'fade'
  }
];

export const LanguageText = () => (
  <div>
    <ReactTextRotator
      content={content}
      time={2000}
      startDelay={1000}
    />
  </div>
);

