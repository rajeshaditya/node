$('#upload-ssc').on('click', function (){
    $('#upload-ssc').click();
    $('.pr-bank').text('0%');
    $('.pr-bank').width('0%');
});

$('#upload-ssc').on('change', function(){

  var files = $(this).get(0).files;

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

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.pr-bank').text(percentComplete + '%');
            $('.pr-bank').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              //$('.progress-bar').html('Done');
              $('.pr-bank').html(file.name);
              $('.upload-btn').prop("disabled", true);
              jAlert('Your File is uploaded successfully you can download it on your next login ', 'Confirm');

            }

          }

        }, false);

        return xhr;
      }
    });

  }
});

$('#upload-inter').on('click', function (){
    $('#upload-inter').click();
  
});

$('#upload-inter').on('change', function(){

  var files = $(this).get(0).files;

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

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.pr-adhar').text(percentComplete + '%');
            $('.pr-adhar').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
               $('.pr-adhar').html(file.name);
              $('.upload-btnadhar').attr("disabled", true);
              jAlert('Your File is uploaded successfully you can download it on your next login ', 'Confirm');

            }

          }

        }, false);

        return xhr;
      }
    });

  }
});

$('#upload-ug').on('click', function (){
    $('#upload-ug').click();
    $('.pr-passport').text('0%');
    $('.pr-passport').width('0%');
});

$('#upload-ug').on('change', function(){

  var files = $(this).get(0).files;

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

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.pr-passport').text(percentComplete + '%');
            $('.pr-passport').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
               $('.pr-passport').html(file.name);
              $('.upload-btnpassport').prop("disabled", true);
              jAlert('Your File is uploaded successfully you can download it on your next login ', 'Confirm');
            }

          }

        }, false);

        return xhr;
      }
    });

  }
});

  $('.upload-pg').on('click', function (){
    $('#upload-pg').click();
    
});

$('#upload-pg').on('change', function(){

  var files = $(this).get(0).files;

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

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.pr-passport').text(percentComplete + '%');
            $('.pr-passport').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
               $('.pr-passport').html(file.name);
              $('.upload-btnpassport').prop("disabled", true);
              jAlert('Your File is uploaded successfully you can download it on your next login ', 'Confirm');
            }

          }

        }, false);

        return xhr;
      }
    });

  }
});

  