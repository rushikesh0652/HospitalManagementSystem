 getPatientHistory();
 function getPatientHistory()
        {
	    var email = document.getElementById("custId").value;
	    var requesthistorytable = "<table id='example1' class='table table-striped' style='width:100%'><thead><tr><th>email</th><th>blood group</th><th>mobileno</th><th>doctorname</th><th>doctor Appointment</th><th>Action</th></tr></thead><tbody>";
             $.ajax({
                    url: "http://localhost:8080/check",
                     method: 'GET',
                     datatype : 'json',
                    success: function(data)
                    {
					
					$(data).each(function (index, element)
                        {
							
							requesthistorytable += "<tr><td>"
                                 + element.email
                                 + "</td><td>"
                                 + element.boodgroup
                                 + "</td><td>"
                                 + element.mobileno
                                 + "</td><td>"
                                 + element.doctorname
                                 + "</td><td>"
                                 + element.doctorappintdate +":"+ element.doctorappinttime 
                                 + "</td><td>"
                                 +"<span class='badge bg-success'>"+ element.status+"</span>" 
                                 + "</td></tr>";
						})
						 requesthistorytable += "</tbody></table>";
    					$("#patientHistory").html(requesthistorytable);
                         $('#example1').DataTable();
	   
                    },
                   error: function(output)
                    {
                      console.log("Error in API call");
                    }
                });
            }