/**
 * A JavaScript project for accessing the accelerometer and gyro from various devices
 *
 * @author Tom Gallacher <tom.gallacher23@gmail.com>
 * @copyright Tom Gallacher <http://www.tomg.co>
 * @version 0.0.1a
 * @license MIT License
 * @options frequency, callback
 */
(function (root, factory) {
		if (typeof define === 'function' && define.amd) {
				// AMD. Register as an anonymous module.
				define(factory);
		} else if (typeof exports === 'object') {
				// Node. Does not work with strict CommonJS, but
				// only CommonJS-like enviroments that support module.exports,
				// like Node.
				module.exports = factory();
		} else {
				// Browser globals (root is window)
				root.returnExports = factory();
	}
}(this, function () {
	var measurements = {
				x: null,
				y: null,
				z: null,
				alpha: null,
				beta: null,
				gamma: null
			},
			calibration = {
				x: 0,
				y: 0,
				z: 0,
				alpha: 0,
				beta: 0,
				gamma: 0
			},
			interval = null,
			features = [];

	var gyro = {};

	/**
	 * @public
	 */
	gyro.frequency = 500; //ms

	gyro.calibrate = function() {
		for (var i in measurements) {
			calibration[i] = (typeof measurements[i] === 'number') ? measurements[i] : 0;
		}
	};

	gyro.getOrientation = function() {
		return measurements;
	};

	gyro.startTracking = function(callback) {
		interval = setInterval(function() {
			callback(measurements);
		}, gyro.frequency);
	};

	gyro.stopTracking = function() {
		clearInterval(interval);
	};

	/**
	 * Current available features are:
	 * MozOrientation
	 * devicemotion
	 * deviceorientation
	 */
	gyro.hasFeature = function(feature) {
		for (var i in features) {
			if (feature == features[i]) {
				return true;
			}
		}
		return false;
	};

	gyro.getFeatures = function() {
		return features;
	};


	/**
	 * @private
	 */
	// it doesn't make sense to depend on a "window" module
	// since deviceorientation & devicemotion make just sense in the browser
	// so old school test used.
	if (window && window.addEventListener) {
		function setupListeners() {
			window.addEventListener('MozOrientation', function(e) {
				features.push('MozOrientation');
				measurements.x = e.x - calibration.x;
				measurements.y = e.y - calibration.y;
				measurements.z = e.z - calibration.z;
			}, true);

			window.addEventListener('devicemotion', function(e) {
				features.push('devicemotion');
				measurements.x = e.accelerationIncludingGravity.x - calibration.x;
				measurements.y = e.accelerationIncludingGravity.y - calibration.y;
				measurements.z = e.accelerationIncludingGravity.z - calibration.z;
			}, true);

			window.addEventListener('deviceorientation', function(e) {
				features.push('deviceorientation');
				measurements.alpha = e.alpha - calibration.alpha;
				measurements.beta = e.beta - calibration.beta;
				measurements.gamma = e.gamma - calibration.gamma;
			}, true);
		}
		setupListeners();
	}

	return gyro;
}));
