
$(function () {
    $("#myform").submit(function(e) {
        e.preventDefault();

        var actionurl = "http://localhost:8080/api/plagiarism/add/task";

        var data = new FormData();
        data.append("firstName", "firstname");
        data.append("lastName", "lastname");
        data.append("studentId", 1);
        data.append("email", "mail@gmail.com");
        data.append("themeId", 3);
        data.append("themeName", "Programming");
        // data.append("archive", $("#fileinput").val);
        data.append("archive", $('input[type=file]')[0].files[0]);

        alert($('input[type=file]')[0].files[0])

        $.ajax({
            url: actionurl,
            type: 'post',
            dataType: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            success: function (data) {
                alert("success!");
            }
        })
    })
})
