// -- Copyright 2013, Piotr Falba - Animator - Sprite animation plugin
// -- https://github.com/piotrfalba/Animator | See license on github page
/*
	Usage example:
	var animator = new Animator({Object} jQuery Dom Object);
	animator.define({
		name: {String} Animation name,
		addClass: {String} Name of class which will be added to dom object,
		start: {Number} Starting frame,
		end: {Number} Last frame,
		step: {Number} Step,
		interval: {Number} Time interval between frames
	});
	
	animator.animation_name.play();
*/

var Animator;

if(typeof jQuery == 'function') {
	Animator = function(e) {
		var	_this = this;
		_this.$ = jQuery(e);
	};
	
	Animator.prototype = {
		constructor: Animator,
		_protected: ['define', 'remove'],
		define: function() {
			var	args = arguments,
				value = {
					name: 'default',
					addClass: null,
					start: 1,
					end: 25,
					step: 1,
					interval: 25
				};
			
			var each = function(obj, cb) {
				for(var prop in obj) {
					if(typeof cb == 'function') cb(obj[prop], prop);
				}
				return obj;
			};
			
			var extend = function(obj) {
				each(arguments, function(source) {
					if(source)
						for(var prop in source)
							obj[prop] = source[prop];
				});
				return obj;
			};
				
			if(typeof args[0] == 'object')
				extend(value, args[0]);
			
			var	_this = this;
			if(_this._protected.indexOf(value.name) < 0) {
				if(typeof _this[value.name] != 'object') {
					this[value.name] = function() {
						var	__this = this;
						each(value, function(v, k) {
							if(k != 'name') __this[k] = value[k];
						});
					};
					
					if(typeof _this.$.data('queue') != 'array') _this.$.data('queue', []);
					
					this[value.name].prototype = {
						getCurrent: function() {
							var	__c = extend({ name: value.name }, _this[value.name]);
							each(__c, function(v, k) {
								if(typeof v == 'function') delete __c[k];
							});
							
							return __c;
						},
						play: function(cb) {
							var	__this = this,
								__c = this.getCurrent();
																				
							var hasClassBefore = _this.$.hasClass(__c.addClass);
							if(__c.addClass)
								_this.$.addClass(__c.addClass);
							
							var	queue = _this.$.data('queue'),
								tick = __c.start;
								
							queue.push(function() {
								var ticker = setInterval(function() {
									__this.goTo(tick);
									
									if(tick == __c.end) {
										clearInterval(ticker);
										queue.shift();
										if(typeof cb == 'function') cb();
														
										if(__c.addClass && !hasClassBefore)
											_this.$.removeClass(__c.addClass);
																
										if(queue.length == 0) {
											_this.$.data('playing', null);
										} else queue[0](cb);
									}
									
									tick += __c.step;
								}, __c.interval);
							});
							
							if(!_this.$.data('playing')) queue[0](cb);
							_this.$.data('playing', true);
						},
						goTo: function(value) {
							var __c = this.getCurrent(),
								_class = _this.$.attr('class') || '';
								_class = _class.split(' ') || [_class];
							
							for(i in _class)
								if(_class[i].indexOf('frame') == 0)
									_class.splice(i, 1);
							
							_class.push('frame-'+ value);
							_this.$.attr('class', _class.join(' '));
						}
					};
					
					this[value.name] = new this[value.name]();
				} else {
					throw('Animation "'+ value.name +'" already exists.');
				}
			} else {
				throw('Unable to define "'+ value.name +'" as animation type.');
			}
			
			return this;
		},
		remove: function() {
			var	args = arguments,
				_this = this;
			
			if(_this._protected.indexOf(value.name) < 0)
				if(typeof _this[args[0]] == 'object')
					delete _this[args[0]];
				
			return this;
		}
	};
	
	// -- jQuery wrapper
	jQuery.fn.animator = function() {
		return new Animator(this);
	};
} else throw('Can\'t find dependency: jQuery');