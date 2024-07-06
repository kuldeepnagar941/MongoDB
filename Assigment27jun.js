const user = [
    {
      "id": "1",
      "username": "Prajjal Dhar",
      "useremail": "prajjal.dhar@gmail.com",
      "password": "Regex1234",
      "firstName": "Prajjal",
      "lastName": "Dhar",
      "role": "admin",
      "gender": "Male",
      "age": 28,
      "city": "Goa",
      "salary": 300000,
      "skills": ["Java", "Python"]
    };
]

//   1. create an object of user as created in mongodb and you have to pass 
// that object in function and print all its values by destructing it.


function print({id,username,useremail,password,firstName,lastName,role,gender,age,city,salary,skills})
{
      console.log(${id});
      console.log(${username});
      console.log(${useremail});
      console.log(${password});
      console.log(${firstName});
      console.log(${lastName});
      console.log(${role});
      console.log(${gender});
      console.log(${age});
      console.log(${city});
      console.log(${salary});
      console.log(${skills});
  
}
print(user);