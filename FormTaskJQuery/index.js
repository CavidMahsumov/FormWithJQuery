class User{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;

    }
}

$(document).ready(function(){
    $(".passwordtxt").keyup(function(){
        var regex=/^[0-9]+$/;
        var matches = $(this).val().match(/\d+/g);
        if($(this).val().length>8){
            $("#hr1").css("background","red")
        }
        else{
            $("#hr1").css("background","gray")
        }
        if(matches!=null){
            $("#hr1").css("background","yellow")
            $("#hr2").css("background","yellow")
        }
        else{
            $("#hr2").css("background","gray")
        }
        if ($(this).val().includes("@")||
        $(this).val().includes("!")||
        $(this).val().includes(".")||
        $(this).val().includes(",")||
        $(this).val().includes("!")||
        $(this).val().includes("*")||
        $(this).val().includes("/")||
        $(this).val().includes(";")) {
            $("#hr1").css("background","green")
            $("#hr2").css("background","green")
            $("#hr3").css("background","green")
        } 
        else {
            $("#hr3").css("background","gray")
        };


    })
    var user1=new User();
    $(".signbtn").click(function(){
        if($(".n").val().length>0 && $(".e").val().length>0 && $(".passwordtxt").val().length>8){
                     user1=new User($(".n").val(),$(".e").val(),$(".passwordtxt").val());
                    console.log(user1);
                    alert("Sign Up Succesfuly");
                    
        }
        else{
                  alert("Name or Email or Password is empty")   
        }   

    });
    var count=0;
    $(".sp").click(function(){
        ++count;
        if(count%2==0){
            $('.passwordtxt').get(0).type = 'password';
            
        }
        else{
            $('.passwordtxt').get(0).type = 'text';

        }
         
          
    });
    $(".sp1").click(function(){
        ++count;
        if(count%2==0){
            $('.pas').get(0).type = 'password';
            
        }
        else{
            $('.pas').get(0).type = 'text';

        }
         
          
    });

       

    



});

