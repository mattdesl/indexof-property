var test = require('tape').test
var compile = require('./')
var indexof = compile('name')


var list = [ 
	{ name: 'foo', data: 'foo' },
	{ name: 'boop', data: 'boop' },
	{ name: 'beep', data: 'beep1' },
	{ name: 'beep', data: 'beep2' },
]

test('should find index', function(t) {
	t.equal( indexof(list, 'boop'), 1, 'search works' )
	t.equal( indexof(list, 'boopbeep'), -1 )
	t.equal( indexof(list, 'foo'), 0 )
	t.equal( indexof(list), -1 )

	t.equal( indexof(list, 'beep'), 2 )

	t.equal( indexof(list, 'beep', 1), 2, 'start param works' )
	t.equal( indexof(list, 'beep', 3), 3 )

	//should not allow non-strings
	t.throws( compile, undefined, 'only allows string properties' )
	t.throws( compile.bind(this, 10) )

	t.end()
})