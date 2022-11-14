function functio()
{  
    var username = document.getElementById("username").value;
    var role = document.getElementById("role").value;
    if(role=="USER")
    {role ="DONOR"}
    else
    {
      role="USER"
    }
    console.log(username)
    var data =
        {"username":username,
        "role":role}
    
$.ajax(
{   contentType: 'application/json;charset=UTF-8',
    type:'POST',
    headers: {
'Content-Type': 'application/x-www-form-urlencoded'
},

    url:"http://127.0.0.1:5000/toggle",
    data:JSON.stringify(data),
    
    ContentType:'application/json',
    success:function(result)
    {
    console.log(result['status'])
    document.getElementById("result").innerText = result['role'];
    document.getElementById('role').value=result['role'];
    }
}
)

}

var tablehead = "<h2>Your Request</h2><div class='table-responsive pb-5'><table id='tbOrderHistory' class='table border ps-table w-100 mb-3'><thead><tr><th class='font-weight-bold py-2 border-0'>Recipient Name</th><th class='font-weight-bold py-2 border-0 quantity'>Age</th><th class='font-weight-bold py-2 border-0 '>Sex</th><th class='font-weight-bold py-2 border-0 '>Blood Group</th></tr></thead><tbody>"

var tablend = "	</tbody></table></div>"
					
				


function myhistory()
{    var loading = " <span class='loader'></span>"
     document.getElementsByClassName("content")[0].innerHTML = loading;
    var username = document.getElementById("username").value;

    var data =
        {"username":username,
        }
    
$.ajax(
{   contentType: 'application/json;charset=UTF-8',
    type:'POST',
    headers: {
'Content-Type': 'application/x-www-form-urlencoded'
},

    url:"http://127.0.0.1:5000/getrequests",
    data:JSON.stringify(data),
    
    ContentType:'application/json',
    success:function(result)
    {
    console.log(result['requests'])
  table =" "
    for( x in result['requests'] )
    {
        table = table+"<tr><td>"+result['requests'][x].name +"</td><td>"+result['requests'][x].age +"</td><td>"+result['requests'][x].sex +"</td><td>"+result['requests'][x].blood_type +"</td></tr>"
    }
    $('.content').html(tablehead+table+tablend)
    }
}
)

}


function home()
{ 
    var home1="<H2>Available donors</H2> <div class='row1-container'> <div class='box  cyan'> <h2>Suresh</h2> <p>Blood : O+ <br>Location Chennai<br>Contact 982376312</p> </div> <div class='box red'> <h2>Sarath</h2> <p>Blood : B- <br>Location Chennai<br>Contact 992376312</p> </div> <div class='box blue'> <h2>Kevin</h2> <p>Blood : A- <br>Location Kerala<br>Contact 982376312</p> </div> <div class='box orange'> <h2>Suresh</h2> <p>Blood : A+ <br>Location Chennai<br>Contact 982376312</p> </div> </div> <div class='row1-container'> <div class='box orange'> <h2>Suresh</h2> <p>Blood : A+ <br>Location Chennai<br>Contact 982376312</p> </div> <div class='box red'> <h2>Harish</h2> <p>Blood : AB+ <br>Location Kolkata<br>Contact 977237631</p> </div> <div class='box blue'> <h2>Vikram</h2> <p>Blood : O- <br>Location Mumbai<br>Contact 682376356</p> </div> <div class='box  cyan'> <h2>Suresh</h2> <p>Blood : O+ <br>Location Chennai<br>Contact 982376312</p> </div> </div> </div>"

    document.getElementsByClassName("content")[0].innerHTML = home1;
    console.log("ho") 
}    

function request()
{ 
   
    $.ajax({
        url:"/form",
        success:function(response){
           $('.content').html(response);
        },error:function(){
           alert("error");
        }
     });
    
   
}  
// Log out

function sendrequest()
{   
    var loading = " <span class='loader'></span>"
  
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var sex = document.getElementById("sex").value;
    var blood = document.getElementById("blood").value;
    var age = document.getElementById("age").value;
    var phno = document.getElementById("phno").value;
    document.getElementsByClassName("content")[0].innerHTML = loading;
    console.log(name)
    var data =
    {"username":username,
    "name":name,
     "sex":sex,
     "age":age,
    "blood":blood,
     "phno":phno}
     console.log(age)

$.ajax(  
{   contentType: 'application/json;charset=UTF-8',  
type:'POST',  
headers: {  
'Content-Type': 'application/x-www-form-urlencoded'  
},  
  
url:"http://127.0.0.1:5000/requestPlasma",  
data:JSON.stringify(data),  
  
ContentType:'application/json',  
success:function(result)  
{  
console.log(result['status'])
var res ="<div class='alert alert-success'><strong>Success!</strong> Your Request has been forwarded.</div>";  
$('.content').html(res)
}  
}  
)  


}






