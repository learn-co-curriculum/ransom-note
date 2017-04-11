var chai = require('chai');
var sinon = require('sinon');

beforeEach(function() {
  expect.spyOn(console, 'log')
})

afterEach(function() {
  expect.restoreSpies()
})
let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
	{name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
	{name: '23rd&Lex', discovered: null}
]


describe('#depthFirstSearch', function() {
	it('prints out the nodes in order', function(){
		let rootNode = vertices[0]
		depthFirstSearch(rootNode, vertices, edges)
		expect(console.log).toHaveBeenCalledWith("34th&6th")
		expect(console.log).toHaveBeenCalledWith("23rd&6th")
		expect(console.log).toHaveBeenCalledWith("23rd&Bwy")
		expect(console.log).toHaveBeenCalledWith("14th&Lex")
		expect(console.log).toHaveBeenCalledWith("23rd&Lex")
		expect(console.log).toHaveBeenCalledWith("14th&6th")
		//have mocha test sequence
	})
});


// findAdjacent for 28th & Broadway not working.
