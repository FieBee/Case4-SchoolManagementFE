
function uploadFileFull() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let birthDate = $('#birthDate').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let account = $('#account').val();
    let password = $('#password').val();
    let active = $('#active').val();
    let newTeacher = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        email: email,
        phone: phone,
        account: account,
        password: password,
        active: active,
    };
    let formData = new FormData();
    formData.append("file", $('#file')[0].files[0])
    formData.append("product", new Blob([JSON.stringify(newTeacher)], {type : 'application/json'}))
    $.ajax({
        contentType : false,
        processData : false,
        type: "POST",
        data: formData,
        url: "http://localhost:8080/teacher/upload",
        success: function (data) {
            successHandler()
        }
    });
    event.preventDefault();
}