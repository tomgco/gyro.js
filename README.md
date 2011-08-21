#gyro.js

gyro.js is an adaptor which combines all the current interfaces and standards on reading Gyro and Accelerometer information and combines them into one simple object.

## Tested Compatability
	iPhone >= iOS 4.x
	Chrome >= 12.x
	Firefox >= 4.x

## Installation
Copy the file js/gyro.js to your web server or download from <http://www.tomg.co/gyrojs>.

	<script src="js/gyro.js"></script>

## Usage

At the bottom of your document after the including of gyro.js add the following.
	
	<script>
		gyro.startTracking(function(o) {
			// o.x, o.y, o.z for accelerometer
			// o.alpha, o.beta, o.gamma for gyro
		});
	</script>

## API

- `gyro.frequency = 500` - How often to poll for changes.
- `gyro.getOrientation()` - Get the current accelerometer and gyro information.
- `gyro.startTracking(function(o){...})` - Return the gyro data at the specified frequency defined in `gyro.frequency`
- `gyro.stopTracking()` - Clear the interval set in `gyro.startTracking`.
- `gyro.hasFeature('devicemotion')` - Check if the web browser supports either MozOrientation, devicemotion or deviceorientation
- `gyro.getFeatures()` - Gets all accelerometer and gyro features supported.

## License

Available in other licenses by contacting me.

(The MIT License)

Copyright (c) 2011 Tom Gallacher &lt;<http://www.tomg.co>&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
