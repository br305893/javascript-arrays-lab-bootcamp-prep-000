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
  kittens.splice(kittens.length, 0, name)
  return kittens
}

function prependKitten(name){
  kittens.splice(0, 0, name)
  return kittens
}

function removeLastKitten(){
  kittens.slice(0, 2)
  return kittens
}

function removeFirstKitten(){
  kittens.slice(0, 0)
  return kittens
}
