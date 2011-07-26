/**
 * A jQuery Gyro Plugin
 *
 * @author Tom Gallacher <tom.gallacher23@gmail.com>
 * @copyright Tom Gallacher <http://www.tomgallacher.info>
 * @version 0.0.1a
 * @license http://opensource.org/licenses/bsd-license.php New BSD License
 * @options frequency, callback
 */

(function($){
	$.jGyro = function(options){
		var that = this;
		that.x = null;
		that.y = null;
		that.z = null;
		that.alpha = null;
		that.beta = null;
		that.gamma = null;
		that.interval = null;
	
		that.defaultOptions = {
			frequency: 500, //ms
			callback: function(x, y, z, alpha, beta, gamma) {
			}
		};
		
		that.init = function() {
			that.options = $.extend({}, that.defaultOptions, options);
			
			window.addEventListener("MozOrientation", function(e) {
				hasMozOrientation = true;
				that.x = e.x;
				that.y = e.y;
				that.z = e.z;
			}, true);
			
			window.addEventListener("devicemotion", function(e) {
				hasDeviceMotion = true;
				that.x = e.accelerationIncludingGravity.x;
				that.y = e.accelerationIncludingGravity.y;
				that.z = e.accelerationIncludingGravity.z;
			}, true);
			
			window.addEventListener("deviceorientation", function(e) {
				hasDeviceOrientation = true;
				that.alpha = e.alpha;
				that.beta = e.beta;
				that.gamma = e.gamma;
			}, true);
			
			that.interval = setInterval(function() {
				that.options.callback(that.x, that.y, that.z, that.alpha, that.beta, that.gamma);
			}, that.options.frequency);
			
		};
		
		that.init();
	};
		
	$.fn.jGyro = function(options) {
		return this.each(function() {
			new $.jGyro(this, options);
		});
	};
})(jQuery);
