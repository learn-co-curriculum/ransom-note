function buildHistogram(array){
  let hash = {}
  let occurrences
  for(let i = 0; i < array.length; i++){
    let currentNum = array[i]
    let hashValue = hash[currentNum]
    if(hashValue != undefined){
      occurrences = hashValue
    } else{
      occurrences = 0
    }
    hash[array[i]] = occurrences + 1
  }
  return hash
}

function canBuildNote(magazine, note){
  let histogram = buildHistogram(magazine)
  for (var i = 0; i < note.length; i++) {
    let letter = note[i]
    if(histogram[letter] == undefined || histogram[letter] < 1){
      return false
    }
    else {
        histogram[letter] = histogram[letter] - 1
    }
  }
  return true
}
