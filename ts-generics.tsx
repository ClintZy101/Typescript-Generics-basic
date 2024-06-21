function convertToArray <T> (input: T): T[]  {
    return [input]
}

const convertToArray2 = <T> (input: T): T[] => {
    return [input]
}

const data = convertToArray({mumber: 1, string: 'string'})

function getIndexofArrayItem<T>(array: T[], arrayItem: T) {
    return array.findIndex(item => item === arrayItem)
}

let array = [55, 44, 77]


const foundItem = getIndexofArrayItem(array, 77)

console.log(data, 'index:', foundItem)


function createPairArray<T, U>(input1: T, input2: U): [T, U] {
return [input1, input2]
}


createPairArray('hello', 1)
