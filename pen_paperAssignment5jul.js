// 1.  Create a user-defined callback function that sorts an array of numbers in ascending or descending order based on the callback provided. 
// The master function should take an array and a callback function as arguments.  


function ascendingSort(arr)
{
    for(let i=0; i < arr.length; i++)
    {
        for(let j=0; j<arr.length-1-i; j++)
        {
            if(arr[j]>arr[j+1])
            {
                t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
    return arr;
}

function desendingSort(arr)
{
    for(let i=0; i < arr.length; i++)
    {
        for(let j=0; j<arr.length-1-i; j++)
        {
            if(arr[j]<arr[j+1])
            {
                t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
    return arr;
}

const solution = (arr2, callbackFunction) => {
    return callbackFunction(arr2);
}

let arr = [3,8,6,1,5,7];


console.log(solution(arr, ascendingSort));
console.log(solution(arr, desendingSort));




// 2.  Create an object named product with at least 5 keys (e.g., productId, productName, price, category, tags). One of the keys should have an array 
// as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another 
// function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into 
// another function and print all the keys.


const product = {
    "productId": 1,
    "productName": "blueFloraltop",
    "price": 800,
    "category": "women",
    "tags": ["fashion","style","clothing"]
}

function show(tags)
{
    console.log(tags);
}

function list({productId,productName,price,category,tags})
{
    console.log(productId);
    console.log(productName);
    console.log(price);
    console.log(category);
    console.log(tags);

    show(tags);
}

function print(product)
{
    console.log(product.productId);
    console.log(product.productName);
    console.log(product.price);
    console.log(product.category);
    console.log(product.tags);
}

list(product);
print(product);


// 3.Create an object named student with at least 5 keys (e.g., studentId, studentName, grade, subjects, hobbies). One of the keys should have an 
// array as its value. Then, create a function that accepts this object in  destructured format, prints all the information, and calls another 
// function that will pass the key array into another function. Additionally,call a function that will pass the object as a key into another function 
// and print all the keys.



const student = {
    "studentId": 135,
    "studentName": "shruti",
    "grade": 'A',
    "subjects": "English",
    "hobbies": ["Reading","drawing"]
}

function show(hobbies)
{
    console.log(hobbies);
}

function studentIdentity({studentId, studentName, grade, subjects, hobbies})
{
    console.log(studentId);
    console.log(studentName);
    console.log(grade);
    console.log(subjects);
    console.log(hobbies);

    show(hobbies);
}

function print(student)
{
    console.log(student.studentId);
    console.log(student.studentName);
    console.log(student.grade);
    console.log(student.subjects);
    console.log(student.hobbies);
}

studentIdentity(student);
print(student);



// 4.Create an object named customer with at least 5 keys (e.g., customerId,customerName, email, phoneNumbers, addresses). One of the keys should 
// have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls 
// another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into 
// another function and print all the keys.

const customer = {
    "customerId": 3,
    "customerName": "Raj",
    "email": "raj@gmail.com",
    "phoneNumbers": 7766554433,
    "addresses": ["Goa","Rajasthan"]
}

function show(addresses)
{
    console.log(addresses);
}

function customerInfo({customerId,customerName, email, phoneNumbers, addresses})
{
    console.log(customerId);
    console.log(customerName);
    console.log(email);
    console.log(phoneNumbers);
    console.log(addresses);

    show(addresses);
}

function print(customer)
{
    console.log(customer.customerId);
    console.log(customer.customerName);
    console.log(customer.email);
    console.log(customer.phoneNumbers);
    console.log(customer.addresses);
}

customerInfo(customer);
print(customer);




// 5.Create an object named project with at least 5 keys (e.g., projectId, projectName, deadline, teamMembers, tasks). One of the keys should have 
// an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another 
// function that will pass the key array into another function. Additionally,call a function that will pass the object as a key into another function 
// and print all the keys.

const project = {
    "projectId": 1234,
    "projectName": "Mongodb",
    "deadline": "25-01-2024",
    "teamMembers": ["Pooja","suman","aditya"],
    "tasks": "dataaddition"
}

function show(teamMembers)
{
    console.log(teamMembers);
}

function projectdetail({projectId, projectName, deadline, teamMembers, tasks})
{
    console.log(projectId);
    console.log(projectName);
    console.log(deadline);
    console.log(teamMembers);
    console.log(tasks);

    show(teamMembers);
}

function print(project)
{
    console.log(project.projectId);
    console.log(project.projectName);
    console.log(project.deadline);
    console.log(project.teamMembers);
    console.log(project.tasks);
}

projectdetail(project);
print(project);

// 6.Create a function named addToArray that accepts an array and a new element to add. Each time the function is called, it should return a new 
// array with the new element added at the end, without mutating the original array. Use the spread operator to achieve this.
// const initialArray = [1, 2, 3];const newArray1 = addToArray(initialArray, 4); // [1, 2, 3, 4]const newArray2 = addToArray(newArray1, 5); // [1, 2, 3, 4, 5]


function addToArray(array,newElement)
{
    return [...array,newElement];
}

const initialArray = [1, 2, 3];
const newArray1 = addToArray(initialArray, 4); 
const newArray2 = addToArray(newArray1, 5); 

console.log(initialArray);
console.log(newArray1);
console.log(newArray2);


// 7.Create a function named removeLastElement that accepts an array. Each time the function is called, it should return a new array with the last 
// element removed, without mutating the original array. Use the spread operator and array methods to achieve this.const initialArray = [1, 2, 3, 4];
// const newArray1 = removeLastElement(initialArray); // [1, 2, 3]const newArray2 = removeLastElement(newArray1);  [1, 2]


function removeLastElement(array)
{
    return array.slice(0,-1);
}

const initialrray = [1, 2, 3, 4];
const newarray1 = removeLastElement(initialarray); 
const newarray2 = removeLastElement(newarray1); 

console.log(initialarray);
console.log(newarray1);
console.log(newarray2);