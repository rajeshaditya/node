$(document).ready(function(){



});
$('#upload-ssc').on('click', function (){
    $('#upload-ssc').click();
   
});

$('#uploadbtn-ssc').unbind().bind('click', function(){

  var files = $('#upload-ssc').get(0).files;
  var yearofpass= $('#inputsscy').val();
  var insti=$('#inputssci').val();
 // alert(yearofpass);
  //alert(insti);

  var SSC={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(SSC);

  $.post("/uped",{SSC:rj}).done(function(data, textStatus, jqXHR) 
{

//alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    //alert('network connection failed  please try again');
});



  //alert(SSC);
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request

    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsssc[]', file, file.name);
     
    }


    $.ajax({
      url: '/upload/4',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-ssc").attr("value","Saved");
          $(".ssc :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});

$('#upload-inter').on('click', function (){
    $('#upload-inter').click();
  
});

$('#uploadbtn-inter').on('click', function(){

  var files = $('#upload-inter').get(0).files;

  var yearofpass= $('#inputintery').val();
  var insti=$('#inputinteri').val();
 // alert(yearofpass);
  //alert(insti);

  var Inter={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(Inter);

  $.post("/uped",{Inter:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsinter[]', file, file.name);
    }

    $.ajax({
      url: '/upload/5',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-inter").attr("value","Saved");
          $(".inter :input").attr("disabled", true);
          
        }, false);

        return xhr;
      }
    });

  }
});

$('#upload-ug').on('click', function (){
    $('#upload-ug').click();
   
});

$('#uploadbtn-ug').on('click', function(){

  var files = $('#upload-ug').get(0).files;

  var yearofpass= $('#inputugy').val();
  var insti=$('#inputugi').val();
 // alert(yearofpass);
  //alert(insti);

  var UG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(UG);

  $.post("/uped",{UG:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsug[]', file, file.name);
    }

    $.ajax({
      url: '/upload/6',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-ug").attr("value","Saved");
          $(".ug :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});

  $('.upload-pg').on('click', function (){
    $('#upload-pg').click();
    
});

$('#uploadbtn-pg').on('click', function(){

  var files = $('#upload-pg').get(0).files;

  var yearofpass= $('#inputpgy').val();
  var insti=$('#inputpgi').val();
 // alert(yearofpass);
  //alert(insti);

  var PG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(PG);

  $.post("/uped",{PG:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});


  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadspg[]', file, file.name);
    }

    $.ajax({
      url: '/upload/7',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-pg").attr("value","Saved");
          $(".pg :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});

  