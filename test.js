let a = [
    {category: 1, name: "John"},
    {category: 2, name: "Pete"},
    {category: 3, name: "Mary"},
    {category: 2, name: "Joe"},
    {category: 2, name: "Mama"},
    {category: 1, name: "Deez"},
    {category: 3, name: "Nutz"},
    {category: 2, name: "HAH"},
    {category: 3, name: "GOTEEM"},
    {category: 2, name: "I am"},
    {category: 2, name: "losing"},
    {category: 1, name: "my"},
    {category: 1, name: "sanity"},
    {category: 1, name: "by"},
    {category: 2, name: "the"},
    {category: 2, name: "second"},
    {category: 3, name: "Please"},
    {category: 3, name: "send"},
    {category: 2, name: "help"},
    {category: 1, name: "the"},
    {category: 3, name: "voices"},
    {category: 2, name: "don't"},
    {category: 3, name: "stop"},
];

let b = a.filter((record) => {
    return record.name.charCodeAt(0) >= 65 && record.name.charCodeAt(0) < 97;
});

let c = a.map(record => record.name.toLowerCase());
console.log(c);


//alert('\u0D9E');


function checkUnique(arr){
      let s = new Set(arr);
      //console.log(s);
      if(arr.length === s.size){
          return true;
      }
      else{
          return false;
      }
}

//console.log(checkUnique([1,2,3,4,3]));



let arr = [1,2,3,4];

arr.forEach((val) => {
    //alert(val);
});


function frequencyMap(arr){
    let mp = new Map();
    let key;
    arr.forEach(val => {
        key = `${val}`;
        if(mp.has(key) === true){
            mp.set(key,mp.get(key)+1);
        }
        else{
            mp.set(key,1);
        }
    });
    return mp;
}

//console.log(frequencyMap([1,2,3,3,2,3,4,3,4,4,2,3]));


aa = [1, 2, 3, 4];
bb = [1, 2, 3, 4];
 
//alert(aa === bb