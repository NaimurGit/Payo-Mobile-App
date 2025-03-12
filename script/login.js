document.getElementById("login-btn").addEventListener("click",
    function (event) {
      event.preventDefault();
      const accountNumber = document.getElementById("account-number").value;
      const Pin = document.getElementById("pin").value;

      if (accountNumber.length === 11 && accountNumber.startsWith("01")){
        if (Pin==="1234"){
            window.location.href="./main.html"
         }
         else{
             alert("Please Give valid Pin")
         } 
      }
      else{
            alert("Your Account number is not Valid")
      }
    })