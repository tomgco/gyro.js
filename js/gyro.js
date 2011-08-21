/**
 * A jQuery Gyro Plugin
 *
 * @author Tom Gallacher <tom.gallacher23@gmail.com>
 * @copyright Tom Gallacher <http://www.tomgallacher.info>
 * @version 0.0.1a
 * @license http://opensource.org/licenses/bsd-license.php New BSD License
 * @options frequency, callback
 */
(function() {
	var measurements = {
				x: null,
				y: null,
				z: null,
				alpha: null,
				beta: null,
				gamma: null
			},
			interval = null,
			features = [];

	window.gyro = {};

	/**
	 * @public
	 */
	gyro.frequency = 500; //ms

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

	function setupListeners() {
		window.addEventListener('MozOrientation', function(e) {
			features.push('MozOrientation');
			measurements.x = e.x;
			measurements.y = e.y;
			measurements.z = e.z;
		}, true);

		window.addEventListener('devicemotion', function(e) {
			features.push('devicemotion');
			measurements.x = e.accelerationIncludingGravity.x;
			measurements.y = e.accelerationIncludingGravity.y;
			measurements.z = e.accelerationIncludingGravity.z;
		}, true);

		window.addEventListener('deviceorientation', function(e) {
			features.push('deviceorientation');
			measurements.alpha = e.alpha;
			measurements.beta = e.beta;
			measurements.gamma = e.gamma;
		}, true);
	}

	setupListeners();

})(window);
