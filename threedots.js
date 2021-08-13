const ages = [11, 14, 16, 13, 17];
const ages2 = [16, 16, 12];

// old method
const allAges = ages.concat(ages2);
console.log(allAges);

// using spread operator
const allAges2 = [...ages, ...ages2];
console.log(allAges2);

