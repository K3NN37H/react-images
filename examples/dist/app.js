require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint react/prop-types: 0 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var _componentsGallery = require('./components/Gallery');

var _componentsGallery2 = _interopRequireDefault(_componentsGallery);

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var IMAGE_NAMES = ['cat', 'cats', 'chameleon', 'dog', 'ducks', 'goat', 'ostrich', 'pigeon', 'pigs', 'seagulls', 'wasp', 'yawn'];
var IMAGES = IMAGE_NAMES.map(function (img) {
	return {
		src: './images/800-' + img + '.jpg',
		thumbnail: './images/thumbnail-' + img + '.jpg',
		srcset: ['./images/1024-' + img + '.jpg 1024w', './images/800-' + img + '.jpg 800w', './images/500-' + img + '.jpg 500w', './images/320-' + img + '.jpg 320w'],
		caption: capitalizeFirstLetter(img)
	};
});
IMAGES.push({ src: 'https://ia801001.us.archive.org/30/items/ChineseLanternCCBYNatureClip/Chinese%20lantern%20CC-BY%20NatureClip.mp4', isVideo: true });

(0, _reactDom.render)(_react2['default'].createElement(
	'div',
	null,
	_react2['default'].createElement(
		'p',
		{ style: { marginBottom: 40 } },
		'Use your keyboard to navigate ',
		_react2['default'].createElement(
			'kbd',
			null,
			'left'
		),
		' ',
		_react2['default'].createElement(
			'kbd',
			null,
			'right'
		),
		' ',
		_react2['default'].createElement(
			'kbd',
			null,
			'esc'
		),
		' — Also, try resizing your browser window.'
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: IMAGES }),
	_react2['default'].createElement(
		'p',
		null,
		'Images courtesy of ',
		_react2['default'].createElement(
			'a',
			{ href: 'http://gratisography.com/', target: '_blank' },
			'Gratisography'
		)
	)
), document.getElementById('example'));

},{"./components/Gallery":2,"react":undefined,"react-dom":undefined,"react-images":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var Gallery = (function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery() {
		_classCallCheck(this, Gallery);

		_get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this);

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}

	_createClass(Gallery, [{
		key: 'openLightbox',
		value: function openLightbox(index, event) {
			event.preventDefault();
			this.setState({
				currentImage: index,
				lightboxIsOpen: true
			});
		}
	}, {
		key: 'closeLightbox',
		value: function closeLightbox() {
			this.setState({
				currentImage: 0,
				lightboxIsOpen: false
			});
		}
	}, {
		key: 'gotoPrevious',
		value: function gotoPrevious() {
			this.setState({
				currentImage: this.state.currentImage - 1
			});
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext() {
			this.setState({
				currentImage: this.state.currentImage + 1
			});
		}
	}, {
		key: 'renderGallery',
		value: function renderGallery() {
			var _this = this;

			if (!this.props.images) return;
			var gallery = this.props.images.map(function (obj, i) {
				return _react2['default'].createElement(
					'a',
					{ key: i, href: obj.src, onClick: function (event) {
							return _this.openLightbox(i, event);
						}, style: styles.thumbnail },
					_react2['default'].createElement('img', { src: obj.thumbnail, style: styles.thumbnailImage, width: styles.thumbnail.size, height: styles.thumbnail.size })
				);
			});

			return _react2['default'].createElement(
				'div',
				{ style: styles.gallery },
				gallery
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'section' },
				this.props.heading && _react2['default'].createElement(
					'h2',
					null,
					this.props.heading
				),
				this.props.subheading && _react2['default'].createElement(
					'p',
					null,
					this.props.subheading
				),
				this.renderGallery(),
				_react2['default'].createElement(_reactImages2['default'], {
					currentImage: this.state.currentImage,
					images: this.props.images,
					isOpen: this.state.lightboxIsOpen,
					onClickPrev: this.gotoPrevious,
					onClickNext: this.gotoNext,
					onClose: this.closeLightbox,
					theme: this.props.theme
				})
			);
		}
	}]);

	return Gallery;
})(_react.Component);

;

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	images: _react.PropTypes.array,
	heading: _react.PropTypes.string,
	subheading: _react.PropTypes.string,
	sepia: _react.PropTypes.bool
};

var THUMBNAIL_SIZE = 72;

var styles = {
	gallery: {
		marginLeft: -5,
		marginRight: -5,
		overflow: 'hidden'
	},
	thumbnail: {
		backgroundSize: 'cover',
		borderRadius: 3,
		float: 'left',
		height: THUMBNAIL_SIZE,
		margin: 5,
		overflow: 'hidden',
		width: THUMBNAIL_SIZE
	},
	thumbnailImage: {
		display: 'block',
		height: 'auto',
		maxWidth: '100%'
	}
};

// height: THUMBNAIL_SIZE,
// left: '50%',
// position: 'relative',
//
// WebkitTransform: 'translateX(-50%)',
// MozTransform:    'translateX(-50%)',
// msTransform:     'translateX(-50%)',
// transform:       'translateX(-50%)',
exports['default'] = Gallery;
module.exports = exports['default'];

},{"react":undefined,"react-images":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2VubmV0aGNoYW4vZ2l0L3JlYWN0LWltYWdlcy9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2tlbm5ldGhjaGFuL2dpdC9yZWFjdC1pbWFnZXMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxQkNFa0IsT0FBTzs7Ozt3QkFDRixXQUFXOzsyQkFDYixjQUFjOzs7O2lDQUNmLHNCQUFzQjs7OztBQUUxQyxTQUFTLHFCQUFxQixDQUFDLEdBQUcsRUFBRTtBQUNuQyxRQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNsRDs7QUFFRCxJQUFNLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbEksSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNuQyxRQUFPO0FBQ04sS0FBRyxvQkFBa0IsR0FBRyxTQUFNO0FBQzlCLFdBQVMsMEJBQXdCLEdBQUcsU0FBTTtBQUMxQyxRQUFNLEVBQUUsb0JBQ1UsR0FBRyxtQ0FDSixHQUFHLGtDQUNILEdBQUcsa0NBQ0gsR0FBRyxlQUNuQjtBQUNELFNBQU8sRUFBRSxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7RUFDbkMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxJQUFJLENBQUUsRUFBRSxHQUFHLEVBQUUsa0hBQWtILEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFF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QUM7QUFDZCxhQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2YsVUFBUSxFQUFFLFFBQVE7RUFDbEI7QUFDRCxVQUFTLEVBQUU7QUFDVixnQkFBYyxFQUFFLE9BQU87QUFDdkIsY0FBWSxFQUFFLENBQUM7QUFDZixPQUFLLEVBQUUsTUFBTTtBQUNiLFFBQU0sRUFBRSxjQUFjO0FBQ3RCLFFBQU0sRUFBRSxDQUFDO0FBQ1QsVUFBUSxFQUFFLFFBQVE7QUFDbEIsT0FBSyxFQUFFLGNBQWM7RUFDckI7QUFDRCxlQUFjLEVBQUU7QUFDZixTQUFPLEVBQUUsT0FBTztBQUNoQixRQUFNLEVBQUUsTUFBTTtBQUNkLFVBQVEsRUFBRSxNQUFNO0VBU2hCO0NBQ0QsQ0FBQzs7Ozs7Ozs7OztxQkFFYSxPQUFPIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlcyc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL2NvbXBvbmVudHMvR2FsbGVyeSc7XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcblx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuY29uc3QgSU1BR0VfTkFNRVMgPSBbJ2NhdCcsICdjYXRzJywgJ2NoYW1lbGVvbicsICdkb2cnLCAnZHVja3MnLCAnZ29hdCcsICdvc3RyaWNoJywgJ3BpZ2VvbicsICdwaWdzJywgJ3NlYWd1bGxzJywgJ3dhc3AnLCAneWF3biddO1xubGV0IElNQUdFUyA9IElNQUdFX05BTUVTLm1hcChpbWcgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHNyYzogYC4vaW1hZ2VzLzgwMC0ke2ltZ30uanBnYCxcblx0XHR0aHVtYm5haWw6IGAuL2ltYWdlcy90aHVtYm5haWwtJHtpbWd9LmpwZ2AsXG5cdFx0c3Jjc2V0OiBbXG5cdFx0XHRgLi9pbWFnZXMvMTAyNC0ke2ltZ30uanBnIDEwMjR3YCxcblx0XHRcdGAuL2ltYWdlcy84MDAtJHtpbWd9LmpwZyA4MDB3YCxcblx0XHRcdGAuL2ltYWdlcy81MDAtJHtpbWd9LmpwZyA1MDB3YCxcblx0XHRcdGAuL2ltYWdlcy8zMjAtJHtpbWd9LmpwZyAzMjB3YCxcblx0XHRdLFxuXHRcdGNhcHRpb246IGNhcGl0YWxpemVGaXJzdExldHRlcihpbWcpXG5cdH07XG59KTtcbklNQUdFUy5wdXNoKCB7IHNyYzogJ2h0dHBzOi8vaWE4MDEwMDEudXMuYXJjaGl2ZS5vcmcvMzAvaXRlbXMvQ2hpbmVzZUxhbnRlcm5DQ0JZTmF0dXJlQ2xpcC9DaGluZXNlJTIwbGFudGVybiUyMENDLUJZJTIwTmF0dXJlQ2xpcC5tcDQnLCBpc1ZpZGVvOiB0cnVlIH0gKVxuXG5yZW5kZXIgKFxuXHQ8ZGl2PlxuXHRcdDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+VXNlIHlvdXIga2V5Ym9hcmQgdG8gbmF2aWdhdGUgPGtiZD5sZWZ0PC9rYmQ+IDxrYmQ+cmlnaHQ8L2tiZD4gPGtiZD5lc2M8L2tiZD4gJm1kYXNoOyBBbHNvLCB0cnkgcmVzaXppbmcgeW91ciBicm93c2VyIHdpbmRvdy48L3A+XG5cdFx0PEdhbGxlcnkgaW1hZ2VzPXtJTUFHRVN9IC8+XG5cdFx0PHA+SW1hZ2VzIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9XCJodHRwOi8vZ3JhdGlzb2dyYXBoeS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R3JhdGlzb2dyYXBoeTwvYT48L3A+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZXMnO1xuXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsaWdodGJveElzT3BlbjogZmFsc2UsXG5cdFx0XHRjdXJyZW50SW1hZ2U6IDAsXG5cdFx0fTtcblxuXHRcdHRoaXMuY2xvc2VMaWdodGJveCA9IHRoaXMuY2xvc2VMaWdodGJveC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ290b05leHQgPSB0aGlzLmdvdG9OZXh0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nb3RvUHJldmlvdXMgPSB0aGlzLmdvdG9QcmV2aW91cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3BlbkxpZ2h0Ym94ID0gdGhpcy5vcGVuTGlnaHRib3guYmluZCh0aGlzKTtcblx0fVxuXHRvcGVuTGlnaHRib3ggKGluZGV4LCBldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50SW1hZ2U6IGluZGV4LFxuXHRcdFx0bGlnaHRib3hJc09wZW46IHRydWUsXG5cdFx0fSk7XG5cdH1cblx0Y2xvc2VMaWdodGJveCAoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50SW1hZ2U6IDAsXG5cdFx0XHRsaWdodGJveElzT3BlbjogZmFsc2UsXG5cdFx0fSk7XG5cdH1cblx0Z290b1ByZXZpb3VzICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnRJbWFnZTogdGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2UgLSAxLFxuXHRcdH0pO1xuXHR9XG5cdGdvdG9OZXh0ICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnRJbWFnZTogdGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2UgKyAxLFxuXHRcdH0pO1xuXHR9XG5cdHJlbmRlckdhbGxlcnkgKCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5pbWFnZXMpIHJldHVybjtcblx0XHRjb25zdCBnYWxsZXJ5ID0gdGhpcy5wcm9wcy5pbWFnZXMubWFwKChvYmosIGkpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxhIGtleT17aX0gaHJlZj17b2JqLnNyY30gb25DbGljaz17KGV2ZW50KSA9PiB0aGlzLm9wZW5MaWdodGJveChpLCBldmVudCl9IHN0eWxlPXtzdHlsZXMudGh1bWJuYWlsfT5cblx0XHRcdFx0XHQ8aW1nIHNyYz17b2JqLnRodW1ibmFpbH0gc3R5bGU9e3N0eWxlcy50aHVtYm5haWxJbWFnZX0gd2lkdGg9e3N0eWxlcy50aHVtYm5haWwuc2l6ZX0gaGVpZ2h0PXtzdHlsZXMudGh1bWJuYWlsLnNpemV9IC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmdhbGxlcnl9PlxuXHRcdFx0XHR7Z2FsbGVyeX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmhlYWRpbmcgJiYgPGgyPnt0aGlzLnByb3BzLmhlYWRpbmd9PC9oMj59XG5cdFx0XHRcdHt0aGlzLnByb3BzLnN1YmhlYWRpbmcgJiYgPHA+e3RoaXMucHJvcHMuc3ViaGVhZGluZ308L3A+fVxuXHRcdFx0XHR7dGhpcy5yZW5kZXJHYWxsZXJ5KCl9XG5cdFx0XHRcdDxMaWdodGJveFxuXHRcdFx0XHRcdGN1cnJlbnRJbWFnZT17dGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2V9XG5cdFx0XHRcdFx0aW1hZ2VzPXt0aGlzLnByb3BzLmltYWdlc31cblx0XHRcdFx0XHRpc09wZW49e3RoaXMuc3RhdGUubGlnaHRib3hJc09wZW59XG5cdFx0XHRcdFx0b25DbGlja1ByZXY9e3RoaXMuZ290b1ByZXZpb3VzfVxuXHRcdFx0XHRcdG9uQ2xpY2tOZXh0PXt0aGlzLmdvdG9OZXh0fVxuXHRcdFx0XHRcdG9uQ2xvc2U9e3RoaXMuY2xvc2VMaWdodGJveH1cblx0XHRcdFx0XHR0aGVtZT17dGhpcy5wcm9wcy50aGVtZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cbkdhbGxlcnkuZGlzcGxheU5hbWUgPSAnR2FsbGVyeSc7XG5HYWxsZXJ5LnByb3BUeXBlcyA9IHtcblx0aW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXksXG5cdGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHN1YmhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNlcGlhOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmNvbnN0IFRIVU1CTkFJTF9TSVpFID0gNzI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Z2FsbGVyeToge1xuXHRcdG1hcmdpbkxlZnQ6IC01LFxuXHRcdG1hcmdpblJpZ2h0OiAtNSxcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdH0sXG5cdHRodW1ibmFpbDoge1xuXHRcdGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuXHRcdGJvcmRlclJhZGl1czogMyxcblx0XHRmbG9hdDogJ2xlZnQnLFxuXHRcdGhlaWdodDogVEhVTUJOQUlMX1NJWkUsXG5cdFx0bWFyZ2luOiA1LFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHR3aWR0aDogVEhVTUJOQUlMX1NJWkUsXG5cdH0sXG5cdHRodW1ibmFpbEltYWdlOiB7XG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHRtYXhXaWR0aDogJzEwMCUnLFxuXHRcdC8vIGhlaWdodDogVEhVTUJOQUlMX1NJWkUsXG5cdFx0Ly8gbGVmdDogJzUwJScsXG5cdFx0Ly8gcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0Ly9cblx0XHQvLyBXZWJraXRUcmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcblx0XHQvLyBNb3pUcmFuc2Zvcm06ICAgICd0cmFuc2xhdGVYKC01MCUpJyxcblx0XHQvLyBtc1RyYW5zZm9ybTogICAgICd0cmFuc2xhdGVYKC01MCUpJyxcblx0XHQvLyB0cmFuc2Zvcm06ICAgICAgICd0cmFuc2xhdGVYKC01MCUpJyxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG4iXX0=
