require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _componentsGallery = require('./components/Gallery');

var _componentsGallery2 = _interopRequireDefault(_componentsGallery);

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var IMAGE_NAMES = ['cat', 'cats', 'chameleon', 'dog', 'ducks', 'goat', 'ostrich', 'pigeon', 'pigs', 'seagulls', 'wasp', 'yawn'];
var IMAGE_MAP = IMAGE_NAMES.map(function (img) {
	return {
		src: './images/800-' + img + '.jpg',
		thumbnail: './images/thumbnail-' + img + '.jpg',
		srcset: ['./images/1024-' + img + '.jpg 1024w', './images/800-' + img + '.jpg 800w', './images/500-' + img + '.jpg 500w', './images/320-' + img + '.jpg 320w'],
		caption: capitalizeFirstLetter(img)
	};
});

(0, _reactDom.render)(_react2['default'].createElement(
	'div',
	null,
	_react2['default'].createElement(
		'h3',
		null,
		'Default options'
	),
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
	_react2['default'].createElement(_componentsGallery2['default'], { images: IMAGE_MAP }),
	_react2['default'].createElement(
		'p',
		null,
		'Images courtesy of ',
		_react2['default'].createElement(
			'a',
			{ href: 'http://gratisography.com/', target: '_blank' },
			'Gratisography'
		)
	),
	_react2['default'].createElement(
		'h3',
		null,
		'Without thumbnails'
	),
	_react2['default'].createElement(
		'p',
		{ style: { marginBottom: 40 } },
		'Set ',
		_react2['default'].createElement(
			'code',
			null,
			"thumbnails={false}"
		),
		' to remove thumbnails'
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: IMAGE_MAP, thumbnails: false }),
	_react2['default'].createElement(
		'h3',
		null,
		'Paginated version'
	),
	_react2['default'].createElement(
		'p',
		{ style: { marginBottom: 40 } },
		'The ',
		_react2['default'].createElement(
			'code',
			null,
			'thumbnails'
		),
		' prop can actually take a component as value',
		_react2['default'].createElement('br', null),
		_react2['default'].createElement(
			'code',
			null,
			"thumbnails={Lightbox.Lightbox.PaginatedThumbnails}"
		)
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: IMAGE_MAP, thumbnails: _reactImages2['default'].PaginatedThumbnails }),
	_react2['default'].createElement(
		'p',
		{ style: { marginBottom: 20 } },
		'Note : PaginatedThumbnails has an offset prop to change the number of thumbnails to show around the current one.',
		_react2['default'].createElement('br', null),
		_react2['default'].createElement(
			'code',
			null,
			"<Lightbox thumbnails={(props) => <PaginatedThumbnails {...props} offset={5} />} />"
		)
	)
), document.getElementById('example'));

},{"./components/Gallery":4,"react":undefined,"react-dom":undefined,"react-images":undefined}],2:[function(require,module,exports){
'use strict';

module.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 30" enable-background="new 0 0 24 24" xml:space="preserve">' + '<g>' + '<polygon fill="white" points="19,14 19,18 5,18 5,14 2,14 2,18 2,22 5,22 19,22 22,22 22,18 22,14  "/>' + '<polygon fill="white" points="15,9.9 15,2 9,2 9,9.9 5.8,9.9 12,16.1 18.2,9.9  "/>' + '</g>' + '</svg>';

},{}],3:[function(require,module,exports){
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

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var DownloadButton = (function (_Component) {
    _inherits(DownloadButton, _Component);

    function DownloadButton() {
        _classCallCheck(this, DownloadButton);

        _get(Object.getPrototypeOf(DownloadButton.prototype), 'constructor', this).call(this);
    }

    _createClass(DownloadButton, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'button',
                {
                    title: 'Download',
                    style: {
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        float: 'left',
                        height: 40,
                        outline: 'none',
                        padding: 10,
                        position: 'relative',
                        left: -10,
                        top: 0,
                        verticalAlign: 'bottom',
                        width: 40
                    },
                    onClick: this.props.handler
                },
                _react2['default'].createElement('span', {
                    dangerouslySetInnerHTML: { __html: _icon2['default'] }
                })
            );
        }
    }]);

    return DownloadButton;
})(_react.Component);

exports['default'] = DownloadButton;
module.exports = exports['default'];

},{"./icon":2,"react":undefined}],4:[function(require,module,exports){
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

var _DownloadButton = require('./DownloadButton');

var _DownloadButton2 = _interopRequireDefault(_DownloadButton);

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
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
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
		key: 'gotoImage',
		value: function gotoImage(index) {
			this.setState({
				currentImage: index
			});
		}
	}, {
		key: 'handleClickImage',
		value: function handleClickImage() {
			if (this.state.currentImage === this.props.images.length - 1) return;

			this.gotoNext();
		}
	}, {
		key: 'renderGallery',
		value: function renderGallery() {
			var _this = this;

			if (!this.props.images) return;
			var gallery = this.props.images.map(function (obj, i) {
				return _react2['default'].createElement(
					'a',
					{
						href: obj.src,
						key: i,
						onClick: function (e) {
							return _this.openLightbox(i, e);
						},
						style: styles.thumbnail
					},
					_react2['default'].createElement('img', {
						height: styles.thumbnail.size,
						src: obj.thumbnail,
						style: styles.thumbnailImage,
						width: styles.thumbnail.size
					})
				);
			});

			return _react2['default'].createElement(
				'div',
				{ style: styles.gallery },
				gallery
			);
		}
	}, {
		key: 'handleDownload',
		value: function handleDownload() {
			window.open(this.props.images[this.state.currentImage].src);
		}
	}, {
		key: 'render',
		value: function render() {
			var thumbnails = this.props.thumbnails;

			var customControls = [_react2['default'].createElement(_DownloadButton2['default'], { key: 'Download', handler: this.handleDownload.bind(this) })];
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
					customControls: customControls,
					images: this.props.images,
					isOpen: this.state.lightboxIsOpen,
					onClickPrev: this.gotoPrevious,
					onClickNext: this.gotoNext,
					onClickThumbnail: this.gotoImage,
					onClickImage: this.handleClickImage,
					onClose: this.closeLightbox,
					theme: this.props.theme,
					thumbnails: thumbnails
				})
			);
		}
	}]);

	return Gallery;
})(_react.Component);

;

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	heading: _react.PropTypes.string,
	images: _react.PropTypes.array,
	sepia: _react.PropTypes.bool,
	subheading: _react.PropTypes.string
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

},{"./DownloadButton":3,"react":undefined,"react-images":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ3BvdGRldmluL3dlYi90aGlyZHBhcnR5L3JlYWN0LWltYWdlcy9leGFtcGxlcy9zcmMvYXBwLmpzIiwiL1VzZXJzL2dwb3RkZXZpbi93ZWIvdGhpcmRwYXJ0eS9yZWFjdC1pbWFnZXMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvRG93bmxvYWRCdXR0b24vaWNvbi5qcyIsIi9Vc2Vycy9ncG90ZGV2aW4vd2ViL3RoaXJkcGFydHkvcmVhY3QtaW1hZ2VzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0Rvd25sb2FkQnV0dG9uL2luZGV4LmpzIiwiL1VzZXJzL2dwb3RkZXZpbi93ZWIvdGhpcmRwYXJ0eS9yZWFjdC1pbWFnZXMvZXhhbXBsZXMvc3JjL2NvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDQWtCLE9BQU87Ozs7d0JBQ0YsV0FBVzs7aUNBQ2Qsc0JBQXNCOzs7OzJCQUNyQixjQUFjOzs7O0FBRW5DLFNBQVMscUJBQXFCLENBQUUsR0FBRyxFQUFFO0FBQ3BDLFFBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2xEOztBQUVELElBQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsSSxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRztRQUFLO0FBQ3pDLEtBQUcsb0JBQWtCLEdBQUcsU0FBTTtBQUM5QixXQUFTLDBCQUF3QixHQUFHLFNBQU07QUFDMUMsUUFB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VUFBVSxBQUFDO01BQ3RCO0lBQ0csQ0FDTDtHQUNGOzs7UUF2R0ksT0FBTzs7O0FBd0daLENBQUM7O0FBRUYsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDaEMsT0FBTyxDQUFDLFNBQVMsR0FBRztBQUNuQixRQUFPLEVBQUUsaUJBQVUsTUFBTTtBQUN6QixPQUFNLEVBQUUsaUJBQVUsS0FBSztBQUN2QixNQUFLLEVBQUUsaUJBQVUsSUFBSTtBQUNyQixXQUFVLEVBQUUsaUJBQVUsTUFBTTtDQUM1QixDQUFDOztBQUVGLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQzs7QUFFMUIsSUFBTSxNQUFNLEdBQUc7QUFDZCxRQUFPLEVBQUU7QUFDUixZQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQ2QsYUFBVyxFQUFFLENBQUMsQ0FBQztBQUNmLFVBQVEsRUFBRSxRQUFRO0VBQ2xCO0FBQ0QsVUFBUyxFQUFFO0FBQ1YsZ0JBQWMsRUFBRSxPQUFPO0FBQ3ZCLGNBQVksRUFBRSxDQUFDO0FBQ2YsT0FBSyxFQUFFLE1BQU07QUFDYixRQUFNLEVBQUUsY0FBYztBQUN0QixRQUFNLEVBQUUsQ0FBQztBQUNULFVBQVEsRUFBRSxRQUFRO0FBQ2xCLE9BQUssRUFBRSxjQUFjO0VBQ3JCO0FBQ0QsZUFBYyxFQUFFO0FBQ2YsU0FBTyxFQUFFLE9BQU87QUFDaEIsUUFBTSxFQUFFLE1BQU07QUFDZCxVQUFRLEVBQUUsTUFBTTtFQVNoQjtDQUNELENBQUM7Ozs7Ozs7Ozs7cUJBRWEsT0FBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vY29tcG9uZW50cy9HYWxsZXJ5JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZXMnO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgKHN0cikge1xuXHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5jb25zdCBJTUFHRV9OQU1FUyA9IFsnY2F0JywgJ2NhdHMnLCAnY2hhbWVsZW9uJywgJ2RvZycsICdkdWNrcycsICdnb2F0JywgJ29zdHJpY2gnLCAncGlnZW9uJywgJ3BpZ3MnLCAnc2VhZ3VsbHMnLCAnd2FzcCcsICd5YXduJ107XG5jb25zdCBJTUFHRV9NQVAgPSBJTUFHRV9OQU1FUy5tYXAoaW1nID0+ICh7XG5cdHNyYzogYC4vaW1hZ2VzLzgwMC0ke2ltZ30uanBnYCxcblx0dGh1bWJuYWlsOiBgLi9pbWFnZXMvdGh1bWJuYWlsLSR7aW1nfS5qcGdgLFxuXHRzcmNzZXQ6IFtcblx0XHRgLi9pbWFnZXMvMTAyNC0ke2ltZ30uanBnIDEwMjR3YCxcblx0XHRgLi9pbWFnZXMvODAwLSR7aW1nfS5qcGcgODAwd2AsXG5cdFx0YC4vaW1hZ2VzLzUwMC0ke2ltZ30uanBnIDUwMHdgLFxuXHRcdGAuL2ltYWdlcy8zMjAtJHtpbWd9LmpwZyAzMjB3YCxcblx0XSxcblx0Y2FwdGlvbjogY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGltZyksXG59KSk7XG5cbnJlbmRlcihcblx0PGRpdj5cblx0XHQ8aDM+RGVmYXVsdCBvcHRpb25zPC9oMz5cblx0XHQ8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PlVzZSB5b3VyIGtleWJvYXJkIHRvIG5hdmlnYXRlIDxrYmQ+bGVmdDwva2JkPiA8a2JkPnJpZ2h0PC9rYmQ+IDxrYmQ+ZXNjPC9rYmQ+ICZtZGFzaDsgQWxzbywgdHJ5IHJlc2l6aW5nIHlvdXIgYnJvd3NlciB3aW5kb3cuPC9wPlxuXHRcdDxHYWxsZXJ5IGltYWdlcz17SU1BR0VfTUFQfSAvPlxuXHRcdDxwPkltYWdlcyBjb3VydGVzeSBvZiA8YSBocmVmPVwiaHR0cDovL2dyYXRpc29ncmFwaHkuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkdyYXRpc29ncmFwaHk8L2E+PC9wPlxuXG5cdFx0PGgzPldpdGhvdXQgdGh1bWJuYWlsczwvaDM+XG5cdFx0PHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5TZXQgPGNvZGU+e1widGh1bWJuYWlscz17ZmFsc2V9XCJ9PC9jb2RlPiB0byByZW1vdmUgdGh1bWJuYWlsczwvcD5cblx0XHQ8R2FsbGVyeSBpbWFnZXM9e0lNQUdFX01BUH0gdGh1bWJuYWlscz17ZmFsc2V9IC8+XG5cblx0XHQ8aDM+UGFnaW5hdGVkIHZlcnNpb248L2gzPlxuXHRcdDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+VGhlIDxjb2RlPnRodW1ibmFpbHM8L2NvZGU+IHByb3AgY2FuIGFjdHVhbGx5IHRha2UgYSBjb21wb25lbnQgYXMgdmFsdWU8YnIgLz48Y29kZT57XCJ0aHVtYm5haWxzPXtMaWdodGJveC5MaWdodGJveC5QYWdpbmF0ZWRUaHVtYm5haWxzfVwifTwvY29kZT48L3A+XG5cdFx0PEdhbGxlcnkgaW1hZ2VzPXtJTUFHRV9NQVB9IHRodW1ibmFpbHM9e0xpZ2h0Ym94LlBhZ2luYXRlZFRodW1ibmFpbHN9IC8+XG5cdFx0PHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5Ob3RlIDogUGFnaW5hdGVkVGh1bWJuYWlscyBoYXMgYW4gb2Zmc2V0IHByb3AgdG8gY2hhbmdlIHRoZSBudW1iZXIgb2YgdGh1bWJuYWlscyB0byBzaG93IGFyb3VuZCB0aGUgY3VycmVudCBvbmUuPGJyIC8+XG5cdFx0PGNvZGU+e1wiPExpZ2h0Ym94IHRodW1ibmFpbHM9eyhwcm9wcykgPT4gPFBhZ2luYXRlZFRodW1ibmFpbHMgey4uLnByb3BzfSBvZmZzZXQ9ezV9IC8+fSAvPlwifTwvY29kZT5cblx0XHQ8L3A+XG5cdDwvZGl2Pixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKFxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDMwXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDI0IDI0XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj4nXG4gICAgICAgICsgJzxnPidcbiAgICAgICAgICAgICsgJzxwb2x5Z29uIGZpbGw9XCJ3aGl0ZVwiIHBvaW50cz1cIjE5LDE0IDE5LDE4IDUsMTggNSwxNCAyLDE0IDIsMTggMiwyMiA1LDIyIDE5LDIyIDIyLDIyIDIyLDE4IDIyLDE0ICBcIi8+J1xuICAgICAgICAgICAgKyAnPHBvbHlnb24gZmlsbD1cIndoaXRlXCIgcG9pbnRzPVwiMTUsOS45IDE1LDIgOSwyIDksOS45IDUuOCw5LjkgMTIsMTYuMSAxOC4yLDkuOSAgXCIvPidcbiAgICAgICAgKyAnPC9nPidcbiAgICArICc8L3N2Zz4nXG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvd25sb2FkSWNvbiBmcm9tICcuL2ljb24nO1xuXG5jbGFzcyBEb3dubG9hZEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTEwLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBEb3dubG9hZEljb24gfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkQnV0dG9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gJ3JlYWN0LWltYWdlcyc7XG5pbXBvcnQgRG93bmxvYWRCdXR0b24gZnJvbSAnLi9Eb3dubG9hZEJ1dHRvbic7XG5cbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsaWdodGJveElzT3BlbjogZmFsc2UsXG5cdFx0XHRjdXJyZW50SW1hZ2U6IDAsXG5cdFx0fTtcblxuXHRcdHRoaXMuY2xvc2VMaWdodGJveCA9IHRoaXMuY2xvc2VMaWdodGJveC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ290b05leHQgPSB0aGlzLmdvdG9OZXh0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nb3RvUHJldmlvdXMgPSB0aGlzLmdvdG9QcmV2aW91cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ290b0ltYWdlID0gdGhpcy5nb3RvSW1hZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUNsaWNrSW1hZ2UgPSB0aGlzLmhhbmRsZUNsaWNrSW1hZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9wZW5MaWdodGJveCA9IHRoaXMub3BlbkxpZ2h0Ym94LmJpbmQodGhpcyk7XG5cdH1cblx0b3BlbkxpZ2h0Ym94IChpbmRleCwgZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudEltYWdlOiBpbmRleCxcblx0XHRcdGxpZ2h0Ym94SXNPcGVuOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cdGNsb3NlTGlnaHRib3ggKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudEltYWdlOiAwLFxuXHRcdFx0bGlnaHRib3hJc09wZW46IGZhbHNlLFxuXHRcdH0pO1xuXHR9XG5cdGdvdG9QcmV2aW91cyAoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlIC0gMSxcblx0XHR9KTtcblx0fVxuXHRnb3RvTmV4dCAoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50SW1hZ2U6IHRoaXMuc3RhdGUuY3VycmVudEltYWdlICsgMSxcblx0XHR9KTtcblx0fVxuXHRnb3RvSW1hZ2UgKGluZGV4KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50SW1hZ2U6IGluZGV4LFxuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZUNsaWNrSW1hZ2UgKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZSA9PT0gdGhpcy5wcm9wcy5pbWFnZXMubGVuZ3RoIC0gMSkgcmV0dXJuO1xuXG5cdFx0dGhpcy5nb3RvTmV4dCgpO1xuXHR9XG5cdHJlbmRlckdhbGxlcnkgKCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5pbWFnZXMpIHJldHVybjtcblx0XHRjb25zdCBnYWxsZXJ5ID0gdGhpcy5wcm9wcy5pbWFnZXMubWFwKChvYmosIGkpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj17b2JqLnNyY31cblx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHRoaXMub3BlbkxpZ2h0Ym94KGksIGUpfVxuXHRcdFx0XHRcdHN0eWxlPXtzdHlsZXMudGh1bWJuYWlsfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRoZWlnaHQ9e3N0eWxlcy50aHVtYm5haWwuc2l6ZX1cblx0XHRcdFx0XHRcdHNyYz17b2JqLnRodW1ibmFpbH1cblx0XHRcdFx0XHRcdHN0eWxlPXtzdHlsZXMudGh1bWJuYWlsSW1hZ2V9XG5cdFx0XHRcdFx0XHR3aWR0aD17c3R5bGVzLnRodW1ibmFpbC5zaXplfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17c3R5bGVzLmdhbGxlcnl9PlxuXHRcdFx0XHR7Z2FsbGVyeX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0aGFuZGxlRG93bmxvYWQgKCkge1xuXHRcdHdpbmRvdy5vcGVuKHRoaXMucHJvcHMuaW1hZ2VzW3RoaXMuc3RhdGUuY3VycmVudEltYWdlXS5zcmMpO1xuXHR9XG5cdHJlbmRlciAoKSB7XG5cdFx0Y29uc3QgeyB0aHVtYm5haWxzIH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IGN1c3RvbUNvbnRyb2xzID0gW1xuXHRcdFx0PERvd25sb2FkQnV0dG9uIGtleT1cIkRvd25sb2FkXCIgaGFuZGxlcj17dGhpcy5oYW5kbGVEb3dubG9hZC5iaW5kKHRoaXMpfSAvPixcblx0XHRdO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cblx0XHRcdFx0e3RoaXMucHJvcHMuaGVhZGluZyAmJiA8aDI+e3RoaXMucHJvcHMuaGVhZGluZ308L2gyPn1cblx0XHRcdFx0e3RoaXMucHJvcHMuc3ViaGVhZGluZyAmJiA8cD57dGhpcy5wcm9wcy5zdWJoZWFkaW5nfTwvcD59XG5cdFx0XHRcdHt0aGlzLnJlbmRlckdhbGxlcnkoKX1cblx0XHRcdFx0PExpZ2h0Ym94XG5cdFx0XHRcdFx0Y3VycmVudEltYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRJbWFnZX1cblx0XHRcdFx0XHRjdXN0b21Db250cm9scz17Y3VzdG9tQ29udHJvbHN9XG5cdFx0XHRcdFx0aW1hZ2VzPXt0aGlzLnByb3BzLmltYWdlc31cblx0XHRcdFx0XHRpc09wZW49e3RoaXMuc3RhdGUubGlnaHRib3hJc09wZW59XG5cdFx0XHRcdFx0b25DbGlja1ByZXY9e3RoaXMuZ290b1ByZXZpb3VzfVxuXHRcdFx0XHRcdG9uQ2xpY2tOZXh0PXt0aGlzLmdvdG9OZXh0fVxuXHRcdFx0XHRcdG9uQ2xpY2tUaHVtYm5haWw9e3RoaXMuZ290b0ltYWdlfVxuXHRcdFx0XHRcdG9uQ2xpY2tJbWFnZT17dGhpcy5oYW5kbGVDbGlja0ltYWdlfVxuXHRcdFx0XHRcdG9uQ2xvc2U9e3RoaXMuY2xvc2VMaWdodGJveH1cblx0XHRcdFx0XHR0aGVtZT17dGhpcy5wcm9wcy50aGVtZX1cblx0XHRcdFx0XHR0aHVtYm5haWxzPXt0aHVtYm5haWxzfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuR2FsbGVyeS5kaXNwbGF5TmFtZSA9ICdHYWxsZXJ5JztcbkdhbGxlcnkucHJvcFR5cGVzID0ge1xuXHRoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRpbWFnZXM6IFByb3BUeXBlcy5hcnJheSxcblx0c2VwaWE6IFByb3BUeXBlcy5ib29sLFxuXHRzdWJoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgVEhVTUJOQUlMX1NJWkUgPSA3MjtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRnYWxsZXJ5OiB7XG5cdFx0bWFyZ2luTGVmdDogLTUsXG5cdFx0bWFyZ2luUmlnaHQ6IC01LFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0fSxcblx0dGh1bWJuYWlsOiB7XG5cdFx0YmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG5cdFx0Ym9yZGVyUmFkaXVzOiAzLFxuXHRcdGZsb2F0OiAnbGVmdCcsXG5cdFx0aGVpZ2h0OiBUSFVNQk5BSUxfU0laRSxcblx0XHRtYXJnaW46IDUsXG5cdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdHdpZHRoOiBUSFVNQk5BSUxfU0laRSxcblx0fSxcblx0dGh1bWJuYWlsSW1hZ2U6IHtcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdG1heFdpZHRoOiAnMTAwJScsXG5cdFx0Ly8gaGVpZ2h0OiBUSFVNQk5BSUxfU0laRSxcblx0XHQvLyBsZWZ0OiAnNTAlJyxcblx0XHQvLyBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHQvL1xuXHRcdC8vIFdlYmtpdFRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHRcdC8vIE1velRyYW5zZm9ybTogICAgJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHRcdC8vIG1zVHJhbnNmb3JtOiAgICAgJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHRcdC8vIHRyYW5zZm9ybTogICAgICAgJ3RyYW5zbGF0ZVgoLTUwJSknLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdfQ==
