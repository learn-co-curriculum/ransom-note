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
		expect(depthFirstSearch(rootNode, vertices, edges).map(function(vertex){return vertex.name;})).toEqual(['34th&6th', '23rd&6th', '28th&Bwy', '23rd&Bwy', '14th&Lex', '23rd&Lex', '14th&6th'])
	})
});
