let collection;

collection = [
  {
    name: "111",
    address: "aaa",
    col: [
      {
        name: "111",
        mail: "aaaa"
      }
    ]
  },
  {
    name: "111",
    address: "aaa",
    col: [
    ]
  },
  {
    name: "111",
    address: "aaa",
    col: [
      {
        name: "111",
        mail: "aaaa"
      }
    ]
  }
]


let ret = collection.filter(row => row.col.length).map(obj => obj.col)
console.log('ret', ret)
