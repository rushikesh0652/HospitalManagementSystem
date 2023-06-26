 getPatientHistory();
 function getPatientHistory()
        {
	    var email = document.getElementById("custId").value;
	    var requesthistorytable = "<table id='example' class='table table-striped' style='width:100%'><thead><tr><th>email</th><th>blood group</th><th>mobileno</th><th>doctorname</th><th>doctor Appointment</th><th>Action</th></tr></thead><tbody>";
             $.ajax({
                    url: "http://localhost:8080/patient/patientHistory?email="+email,
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
                         $('#example').DataTable();
	   
                    },
                   error: function(output)
                    {
                      console.log("Error in API call");
                    }
                });
            }
            
            
function saveBoookAppointment(event)
   {	
	var name = document.getElementById("name").value;
	var middelname = document.getElementById("middelname").value;
	var lastname = document.getElementById("lastname").value;
	var mobileno = document.getElementById("mobileno").value;
	var email = document.getElementById("email").value;
	var birthdate = document.getElementById("birthdate").value;
	var country = document.getElementById("country").value;
	var state = document.getElementById("state").value;
	var city = document.getElementById("city").value;
	var boodgroup = document.getElementById("boodgroup").value;
	var doctorname = document.getElementById("doctorname").value;
	var doctorappinttime = document.getElementById("doctorappinttime").value;
	var doctorappintdate = document.getElementById("doctorappintdate").value;
	var address = document.getElementById("address").value;
  $.ajax({
                url: "http://localhost:8080/save", //this is my servlet
                method: "POST",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                   
    "name": name,
    "email": email,
    "middelname": middelname,
    "lastname": lastname,
    "mobileno": mobileno,
    "birthdate": birthdate,
    "country":  country,
    "state": state,
    "city": city,
    "boodgroup": boodgroup,
    "address": address,
    "status": "Pending",
    "doctorname": doctorname,
    "doctorappinttime": doctorappinttime,
    "doctorappintdate": doctorappintdate,
                }),
                success: function(result)
                {
                  alert("Sucess") 
                },
                error: function(output)
                {
                 console.log(output);
                  console.log("Error in API call");
                }
            });
            
            }
            