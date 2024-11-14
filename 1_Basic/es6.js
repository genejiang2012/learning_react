/*
 * @Author: gene.jiang
 * @Date: 2024-11-14 19:38:55
 * @LastEditors: gene.jiang
 * @LastEditTime: 2024-11-14 19:44:49
 * @Description: file content
 * @FilePath: \learning_react\1_Basic\es6.js
 */
const lordify = function(firstName){
    return `${firstName} of Centerbury`;
}

const lordify2 = (firstName) => {
    return `${firstName} of Centerbury`;
}

const lordify3 = (firstName, land) => {
    if (!firstName){
        throw new Error('No name provided');
    }
    
    if (!land){
        throw new Error('No land provided');
    }
    
    return `${firstName} of ${land}`;
}

console.log(lordify('Bob'));
console.log(lordify('Gail'));
console.log(lordify2('Bob'));
console.log(lordify2('Gail'));
console.log(lordify3('Bob', 'Midgar'));
console.log(lordify3('Gail', 'Midgar'));


