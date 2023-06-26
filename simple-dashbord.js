 
  //getuserlist();
  
 function getuserlist()
        {
             $.ajax({
                    url: "http://localhost:8080/res/emp",
                     method: 'GET',
                     datatype : 'json',
                    success: function(data)
                    {
	
					$(data).each(function (index, element)
                        {
						console.log("data====  "  ,element); 
						})   
                    },
                   error: function(output)
                    {
                      console.log("Error in API call");
                    }
                });
            }
            
    
   
            
                     