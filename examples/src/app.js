/* eslint react/prop-types: 0 */

import React from 'react';
import { render } from 'react-dom';
import Lightbox from 'react-images';
import Gallery from './components/Gallery';

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const IMAGE_NAMES = ['cat', 'cats', 'chameleon', 'dog', 'ducks', 'goat', 'ostrich', 'pigeon', 'pigs', 'seagulls', 'wasp', 'yawn'];
let IMAGES = IMAGE_NAMES.map(img => {
	return {
		src: `./images/800-${img}.jpg`,
		thumbnail: `./images/thumbnail-${img}.jpg`,
		srcset: [
			`./images/1024-${img}.jpg 1024w`,
			`./images/800-${img}.jpg 800w`,
			`./images/500-${img}.jpg 500w`,
			`./images/320-${img}.jpg 320w`,
		],
		caption: 'we gonna add a lot of text here so that we are blowing up the size of the caption area so that we can find the effects and test and play around with it. I am going to need a lot of text for this one since these pictures are really wide and I need it to wrap all the way for it to work'
	};
});
IMAGES.push( { src: 'https://ia801001.us.archive.org/30/items/ChineseLanternCCBYNatureClip/Chinese%20lantern%20CC-BY%20NatureClip.mp4', isVideo: true } )
IMAGES.push( { src: 'https://ia800504.us.archive.org/32/items/electricsheep-flock-244-32500-2/00244=32592=22973=22551.mp4', isVideo: true, poster: './images/800-yawn.jpg'})

render (
	<div>
		<p style={{ marginBottom: 40 }}>Use your keyboard to navigate <kbd>left</kbd> <kbd>right</kbd> <kbd>esc</kbd> &mdash; Also, try resizing your browser window.</p>
		<Gallery images={IMAGES} />
		<p>Images courtesy of <a href="http://gratisography.com/" target="_blank">Gratisography</a></p>
	</div>,
	document.getElementById('example')
);
