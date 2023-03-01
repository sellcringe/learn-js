"user stict"
function unique(arr){
    let set = new Set();
    for (let i of arr){
        set.add(i)
    }
    // console.log(set)
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values))