/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  let sum = [];
  let res = [];
  for(let i=0; i<transactions.length; i++){
    if(categories.includes(transactions[i].category)){
      let pos=categories.indexOf(transactions[i].category);
      sum[pos]=sum[pos]+transactions[i].price;
    }
    else{
      categories.push(transactions[i].category);
      sum.push(transactions[i].price);
    }
  }

  for(let i=0; i<categories.length; i++){
    let obj = {
      category: categories[i],
      totalSpent: sum[i]
    };
    res.push(obj);
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
