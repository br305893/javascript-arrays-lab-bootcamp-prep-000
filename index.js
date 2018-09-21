// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
 return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var newKittenArray = kittens.concat(name)
  return newKittenArray
}

function prependKitten(name){
  var newKittenArray = kittens.concat(newKittenArray)
  return newKittenArray
}

function removeLastKitten(){
  return kittens.slice(0)
}

function removeFirstKitten(){
  return kittens.slice(kittens.length - 2)
}
