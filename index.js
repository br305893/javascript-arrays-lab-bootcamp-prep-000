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
  return kittens.splice(2, 0, name)  
}

function prependKitten(name){
  kittens.splice(0, 0, name)
  return kittens
}

function removeLastKitten(){
  return kittens.slice(kittens.length)  
}

function removeFirstKitten(){
  return kittens.slice(0)
}
