const mac = [1, 2, 3, 4, 5]
//Adding 6 at the end
mac.push(6)

//Adding 0 at the beginning
mac.unshift(0)

//Reversing the array
mac.reverse()
 
console.log(mac)

//Challenge2
const mac2 = [1, 2, 3, 4, 5]
const mac3 = [5, 6, 7, 8, 9, 10]

//remove the last value of m2

mac2.pop()

//Concatinating both arrays using spread operator

const bigMac = [...mac2,...mac3]
bigMac.flat()
console.log(bigMac)




