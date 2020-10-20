let user = {
    id: 0,
    name: "",
    address: "",
    sex: "",
    state: "",
    city: "",
    pincode: "",
    number: "",
    email: "",
    age:"",
    
}
let users = [];

let json_str = localStorage.getItem("userdata");
if(json_str !=null)
    
{
    users = JSON.parse(json_str)
    Bindtable()
}

function insert()
{
    user = {};
    user.id = user.id + 1;

    
    user.name = document.getElementById("name").value;
    user.address= document.getElementById("address").value;
    user.sex = document.getElementById("sex").value;
    user.state = document.getElementById("state").value;
    user.city = document.getElementById("city").value;
    user.pincode = document.getElementById("pincode").value;
    user.number = document.getElementById("number").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;
    users.push(user)
localStorage.setItem("userdata",JSON.stringify(users))
    Bindtable();
}

    function Bindtable()
    {
        let tbody ="";

        for(let p of  users){
                  
 tbody += `<tr>
    <td>${p.name}</td>
    <td>${p.address}</td>
    <td>${p.sex}</td>
    <td>${p.state}</td>
    <td>${p.city}</td>
    <td>${p.pincode}</td>
    <td>${p.number}</td>
    <td>${p.email}</td>
    <td>${p.age}</td>
</tr>
    `
    document.getElementById("tbody").innerHTML = tbody;
        }
  
    
         
         
    }





