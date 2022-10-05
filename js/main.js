// $(document).ready(function($) {
//     alert("js is working");
//     });


function myalertfunc() {
    // alert('js is WOrking');
    var finalObject = {
        cow_count: $("#NoOfCows").val(),
        goshala_name: $("#GoshalaName").val(),
        date_of_est: $("#EsD").val(),
        district: $("#District").val(),
        tehsil: $("#tehsil").val(),
        block: $("#tehsilblock").val(),
        applicant_name: $("#ApplicantName").val(),
        father_name: $("#FatherName").val(),
        mobile_no: $("#MobileNo").val(),
        email: $("#Email").val(),
        complete_address: $("#GoShalaAddress").val(),
    };

    $.ajax({
        headers: { "Accept": "application/json"},
        type: 'POST',
        url: 'http://localhost:9090/api/vch/v1/rc/registartion',
    //     crossDomain: true,
         data : finalObject,
    //     mode: 'no-cors',
    //     beforeSend: function(xhr){
    //         xhr.withCredentials = true;
    //   },
        success: function(data, textStatus, request){
            console.log(data);
        }
});

    // $.get( "http://localhost:9090/api/vch/v1/rc/registartion", function( responseObject ) {
    //     console.log(responseObject)
    //     // $( ".result" ).html( data );
    //   });

//     fetch('http://localhost:9090/api/vch/v1/rc/registartion')
//   .then(res => res.json())
//   .then(console.log)
}