"user strict"
function aclean (list){
    let map = new Map();
    for (let i of  list){
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);

    }
    return Array.from(map.values());

}
let list = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];