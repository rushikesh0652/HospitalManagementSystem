 getPatientHistory();
 function getPatientHistory()
        {
	       var requesthistorytable = "<table id='example' class='table table-striped' style='width:100%'><thead><tr><th>NAME</th><th>blood group</th><th>mobileno</th><th>doctorname</th><th>doctor Appointment</th><th>Action</th></tr></thead><tbody>";
             $.ajax({
                    url: "http://localhost:8080/doctor/pationlistdocwise",
                     method: 'GET',
                     datatype : 'json',
                    success: function(data)
                    {
							//console.log(data);	
					$(data).each(function (index, element)
                        {
							console.log(element);
							
							requesthistorytable += "<tr><td>"
                                 + element.name +" "+ element.middelname +" "+ element.lastname 
                                 + "</td><td>"
                                 + element.boodgroup
                                 + "</td><td>"
                                 + element.mobileno
                                 + "</td><td>"
                                 + element.doctorname
                                 + "</td><td>"
                                 + element.doctorappintdate +":"+ element.doctorappinttime 
                                 + "</td><td>"
                                 + "<form method='post' action='"+'/doctor/update-contact/'+element.id+"'class='mt-2'><button type='submit' class='btn btn-primary btn-sm'>Edit</button></form>"
                                 + "</td></tr>";
						})
						 requesthistorytable += "</tbody></table>";
    					$("#patientHistory").html(requesthistorytable);
                         $('#example').DataTable();
	   
                    },
                   error: function(output)
                    {
                      console.log("Error in API call");
                    }
                });
            }
            
            
$("form#myForm").submit(function(e)
{
	  e.preventDefault(); 
	 var observation = document.getElementById("observation").value;
	 var precription = document.getElementById("precription").value;
	 var fees = document.getElementById("fees").value;
	 var patientId = document.getElementById("patientId").value;
  
  	$.ajax({
                url: "http://localhost:8080/doctor/update/"+patientId,
                method: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                      "observation": observation,
    				  "precription": precription,
    				  "fees": fees,
    				  "status": "done",
                }),
                success: function(result)
                {
					window.location.href = "http://localhost:8080/doctor/index";
                },
                error: function(output)
                {
                 console.log(output);
                  console.log("Error in API call");
                }
            });
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	});
            