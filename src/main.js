const promise = new Promise(resolve => {
  setTimeout(() => resolve, 1500)
})

const array = [1, 2, 3, 4, 5]
console.log(array.includes(5))

const f = config => config.map(Boolean)