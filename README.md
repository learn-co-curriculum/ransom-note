## Depth First Search Lab!

### Objectives

 * Implement Depth First Search in Javascript.

### Instructions

```javascript
let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex'],
	['23rd&Lex', '28th&Lex'],
	['28th&Lex', '33rd&Lex']
]

let vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '14th&6th', distance: null, predecessor: null},
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
]
```

In this lab we ask you to implement depth first search.  One skill that we would like you to develop is the ability to take an idea and translate it into code.  So here is some pseudocode of depth first search from Wikipedia.  

Your task is to translate this into code.  The only modification, is that each time a node is visited, please console.log the name of that node.

![](https://s3-us-west-2.amazonaws.com/curriculum-content/algorithms/dfs-wikipedia.png)
