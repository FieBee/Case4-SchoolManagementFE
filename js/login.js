function login() {

    let username = $("#username").val();
    let password = $("#password").val();

    let Account = {
        account: username,
        password: password
    }

    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/login",
        data: JSON.stringify(Account),
        //xử lý khi thành công
        success: function (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role",data.appRole[0].name);
            localStorage.setItem("name",data.appRole[0].name);

            if (data.appRole[0].name == "ROLE_ADMIN"
            || data.appRole[0].name == "ROLE_TEACHER"
            || data.appRole[0].name == "ROLE_STUDENT"){
                location.href = "http://localhost:63342/Case4-FE/html/index.html?_ijt=c7e3qmcqvivnt1ed98o663gir4&_ij_reload=RELOAD_ON_SAVE"
            }else {
                location.href = "login.html"
            }
            // location.href = "teacher.html"
            console.log(data)

        },
        error: function (err) {
            console.log(err)
        }
    })
}
