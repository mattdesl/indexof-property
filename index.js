var dot = require('is-property')

module.exports = function compile(property) {
	if (!property || typeof property !== 'string')
		throw new Error('must specify property for indexof search')

	var accessor = dot(property) ? ('.'+property) : ('["'+property+'"]')
	return new Function('array', 'value', 'start', [
		'start = start || 0',
		'for (var i=start; i<array.length; i++)',
		'  if (array[i]' + accessor +' === value)',
		'      return i',
		'return -1'
	].join('\n'))
}