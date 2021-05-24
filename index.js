const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(name){
    const newArray = [...cats, "Broom"]
    return newArray

}

function prependCat(name){
    const NewArray = ["Arnold", ...cats]
    return NewArray

}

function removeLastCat(){
 const NewArray = cats.slice(0, 2)
 return NewArray
}
function removeFirstCat(){
    const NewArray = cats.slice(1)
    return NewArray
}