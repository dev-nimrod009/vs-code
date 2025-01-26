
          
        const signinForm = document.getElementById('signin_form');
        
        
        signinForm.addEventListener('submit', (e) =>  {
            e.preventDefault();
        
           // const de_password ="nimrod";
            const ne_password = document.getElementById('u_pass').value;
           console.log(ne_password);
        
           const de_name ="nimrod";
            const ne_name = document.getElementById('u_name').value;
           
         /*  if(de_name === ne_name && de_password===ne_password){
            alert("Welcome");
        }else{
            alert("Invalid credentials");
        }*/
        });
        
      /*  const signup= document.getElementById("news");

        signup.addEventListener("submit", (e) => {
            e.preventDefault();

            const userName = document.getElementById("username").value;
            console.log(userName);
        });*/