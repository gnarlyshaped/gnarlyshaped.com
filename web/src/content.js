import gnarAvatar from './assets/gnar.jpeg'
import shapeAvatar from './assets/shape.jpeg'

// Edit this file to change what the site shows.

// Leave empty to hide the contact section.
export const contactEmail = ''

// Shown in order. `url` and `image` are optional; `accent` tints the card.
// `status` is a short label such as "Live", "Beta" or "Coming soon".
export const projects = [
  {
    name: 'Project One',
    tagline: 'A one-line pitch for the first project.',
    description:
      'Two or three sentences on what it does, who it is for and why it is worth a look. Replace this with the real copy.',
    tags: ['iOS', 'Web'],
    status: 'Live',
    url: '',
    image: '',
    accent: '#ff6b3d',
  },
  {
    name: 'Project Two',
    tagline: 'A one-line pitch for the second project.',
    description:
      'Two or three sentences on what it does, who it is for and why it is worth a look. Replace this with the real copy.',
    tags: ['SaaS'],
    status: 'Beta',
    url: '',
    image: '',
    accent: '#3dd6ff',
  },
  {
    name: 'Project Three',
    tagline: 'A one-line pitch for the third project.',
    description:
      'Two or three sentences on what it does, who it is for and why it is worth a look. Replace this with the real copy.',
    tags: ['Tools'],
    status: 'Coming soon',
    url: '',
    image: '',
    accent: '#b6ff3d',
  },
]

// `focus` matches the part of the logo that lights up on hover.
export const directors = [
  { first: 'Jenny', last: 'Song', alias: 'Gnar', focus: 'gnar', avatar: gnarAvatar },
  { first: 'Shawn', last: 'Jung', alias: 'Shape', focus: 'shape', avatar: shapeAvatar },
]
