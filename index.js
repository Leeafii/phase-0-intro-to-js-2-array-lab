const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop(2)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(0)
}

function appendCat(name) {
    const copyOfCatsUsingAppend=cats.slice()
    copyOfCatsUsingAppend.push("Broom")
    return copyOfCatsUsingAppend
}

function prependCat(name) {
    const copyOfCatsUsingPrepend=cats.slice()
    copyOfCatsUsingPrepend.unshift("Arnold")
    return copyOfCatsUsingPrepend
}

function removeLastCat(name) {
    const removeLastCatFromArray=cats.slice(0,cats.length-1)
    return removeLastCatFromArray
}

function removeFirstCat(name) {
    const removeFirstCatFromArray=cats.slice(1)
    return removeFirstCatFromArray
}