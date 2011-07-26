# jGyro

jGyro is a Jquery Plugin which combines all the current interfaces on reading Gyro and Accelerometer information if your
device supports it.

## Tested Compatability
	iPhone >= iOS 4.x
	Chrome >= 12.x
	Firefox >= 4.x

## Installation
Copy the file js/jGyro.js to your web server and also include the latest version of jquery.
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script src="js/jGyro.js"></script>

## Usage

At the bottom of your document after the including of jQuery and jGyro add the following.
	
	<script>
		(function($){
			$.jGyro({
				frequency: 500,
				callback: function(x, y, z, alpha, beta, gamma) {
					//do jazz.
				}	
			});
		});
	</script>

Options:

- `frequency` - How often to poll for changes.
- `callback` - The function which gets called at each update.


## License

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
