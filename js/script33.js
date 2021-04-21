let x=$("#home").innerWidth()
$("#side").animate({left:`-${x}`});
$("#openSide").click(function(){
   
   // window.alert(   $("#side").css("left") )
      
        if( $("#side").css("left")  == "0px")
        
      {
         $("#side").animate({left:`-${x}`},1000)
         $(".fa-align-justify").removeClass("fa-times")
      } 
      else
      {
        $("#side").animate({left:`0px`},1000,function(){
                // $("#ulprivet").slideDown(1000)
                $(".fa-align-justify").addClass("fa-times")
        })  
      }
    

    
})







let arryHome=[]
 async  function trending()
{
        let getHome= await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=332f74f5e3c73bec7c7b6c0e3b8b7b4d`)
      let home   = await getHome.json()
      let Book   =await home.results
         arryHome= await Book
        console.log(arryHome)
        roomHomes()
}     
trending()

function roomHomes()
{
        let cartona=``
        for(let i=0;i<arryHome .length;i++)
        {
            cartona+=`  <div class="col-md-4 text-center py-5">
            <div id="team" class="p position-relative">
              <img class="w-100"  src="https://image.tmdb.org/t/p/w500${arryHome[i].poster_path}" alt="">
              <div id="pragrf">
               <h2>${arryHome[i].original_title}</h2>
              <p>${arryHome[i].overview}</p>
    
              
              <h5 class="py-4">${arryHome[i].vote_average}</h5>
              <h6>${arryHome[i].release_date}</h6>
              </div>
            </div>
          </div>
         `




        }
        document.getElementById("homeBack").innerHTML=cartona
}


function serchhome(serch)
{
        let cartona=``
        for(let i =0;i<arryHome.length;i++)
        {
               
          if(arryHome[i].original_title.toLowerCase().includes(serch.toLowerCase())==true)

          {
                cartona+=`  <div class="col-md-4 text-center py-5">
                <div id="team" class="p position-relative">
                  <img class="w-100"  src="https://image.tmdb.org/t/p/w500${arryHome[i].poster_path}" alt="">
                  <div id="pragrf">
                   <h2>${arryHome[i].original_title}</h2>
                  <p>${arryHome[i].overview}</p>
        
                  
                  <h5 class="py-4">${arryHome[i].vote_average}</h5>
                  <h6>${arryHome[i].release_date}</h6>
                  </div>
                </div>
              </div>
             `
          }
           else
           {
                console.log("no")
           }

        }
        document.getElementById("homeBack").innerHTML=cartona
}



let   serchInpt=document.getElementById("input")

serchInpt.addEventListener("keyup",function(){
        serchhome(serchInpt.value)
})
//end Api
//crud strat

let name1=document.getElementById("namere")
console.log(name1)
let  email11=document.getElementById("email") 
//console.log(email)
let phone=document.getElementById("phone")
//console.log(phone)
let age  =document.getElementById("Age")
//console.log(age)
let password=document.getElementById("password")
//console.log(password)
let Enter22=document.getElementById("Enter22")
//console.log(Enter22)

let btn1=document.getElementById("btn")
let important1=document.getElementById("imporant")
let import2=document.getElementById("imporant2")
let import3=document.getElementById("imporant3")
console.log(import2)
let import4=document.getElementById("imporant4")
let import5=document.getElementById("imporant5")
let import6=document.getElementById("imporant6")




let userContainer;


if(localStorage.getItem("uselocl")==null)
{
userContainer=[];
}
else
{
        userContainer=JSON.parse( localStorage.getItem("uselocl") );
}

function usercrud()
{

  let user={
      username:name1.value,
       emailuser:email11.value,
       phoneuser:phone.value,
       ageuser:age.value,
       passworduser:password.value,
       enteruser:Enter22.value,   
   }
    
    userContainer.push(user)
     console.log(userContainer)
     localStorage.setItem("uselocl",JSON.stringify( userContainer))
     clear()

}
function clear()
{
        name1.value="" ;
        email11.value="" ;
        phone.value="";
        age.value="";
        password.value="";
        Enter22.value="";
}







btn1.addEventListener("click",function(){
        usercrud()
})








  function valid1()  
  {
        let regx1=/^[a-z]{5,8}$/
          if(regx1.test(name1.value)==true)
          {
             name1.classList.add("is-valid")
             name1.classList.remove("is-invalid")
             important1.classList.replace("d-block","d-none")
          }
          else
          {
                
                  name1.classList.add("is-invalid")
                  name1.classList.remove("is-valid")
                  important1.classList.replace("d-none","d-block")
          }
  }

  name1.addEventListener("keyup",function(){
        valid1()
  })

  function valid2()  
  {
        let regex2=/^[a-z]{5}@yhoo.com$/
          if(regex3.test(email11.value)==true)
          {
             email11.classList.add("is-valid")
             email11.classList.remove("is-invalid")
             import2.classList.replace("d-block","d-none")
          }
          else
          {
                  
                  email11.classList.add("is-invalid")
                  email11.classList.remove("is-valid")
                  import2.classList.replace("d-none","d-block")
          }
  }
email11.addEventListener("keyup",function(){
        valid2()
})

function valid3()  
{
        let regex3=/^01[125][0-9]{8}$/
        if(regex3.test(phone.value)==true)
        {
                phone.classList.add("is-valid")
                phone.classList.remove("is-invalid")
                import3 .classList.replace("d-block","d-none")
        }
        else
        {
                
                phone.classList.add("is-invalid")
                phone.classList.remove("is-valid")
                import3  .classList.replace("d-none","d-block")
        }
}
phone.addEventListener("keyup",function(){
        valid3()   
})

function valid4()  
{
        let regx4=/^[1-7][0-9]$/
        if( regx4.test(age.value)==true)
        {
                age.classList.add("is-valid")
                age.classList.remove("is-invalid")
                import4 .classList.replace("d-block","d-none")
        }
        else
        {
                
                age.classList.add("is-invalid")
                age.classList.remove("is-valid")
                import4 .classList.replace("d-none","d-block")
        }
}
age.addEventListener("keyup",function(){
        valid4() 
})


function valid5()  
{
        let rgex5=/^[0-9]{6,10}$/
        if( rgex5.test(password.value)==true)
        {
                password.classList.add("is-valid")
                password.classList.remove("is-invalid")
                import5.classList.replace("d-block","d-none")
        }
        else
        {
                
                password.classList.add("is-invalid")
                password.classList.remove("is-valid")
                import5 .classList.replace("d-none","d-block")
        }
}
password.addEventListener("keyup",function(){
        valid5()
})


function valid6()  
{
        let rgex5=/^[0-9]{6,10}$/
        if( rgex6.test(Enter22.value)==true)
        {
                Enter22.classList.add("is-valid")
                Enter22.classList.remove("is-invalid")
                import6.classList.replace("d-block","d-none")
        }
        else
        {
                
                Enter22.classList.add("is-invalid")
                Enter22.classList.remove("is-valid")
                import6 .classList.replace("d-none","d-block")
        }
}
Enter22.addEventListener("keyup",function(){
        valid6()
})








