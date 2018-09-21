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
  kittens.splice(0, -1, name)
  return kittens
}

function removeLastKitten(){
  var newKittenArray = kittens.splice(0, 2)
  return kittens
}

function removeFirstKitten(){
  return kittens.slice(kittens.length - 2)
}
