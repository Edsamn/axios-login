const userLogin = async (event) => {
  event.preventDefault();

  try {
    const email = document.getElementById("email-user-input").value;
    const pass = document.getElementById("password-input").value;
    const error = document.getElementById("error");
    const success = document.getElementById("success");

    const user = {
      email: email,
      pass: pass,
    };

    if (email === "" || pass === "") {
      return (error.innerHTML = `Favor preencher todos os campos`);
    }

    const getResponse = await api.get("/users");
    const users = getResponse.data.data;

    const userEmail = users.find((user) => user.email === email);
    const userPass = users.find((user) => user.pass === pass);

    if (email !== userEmail || pass !== userPass) {
      return (error.innerHTML = `Email e/ou senha errados`);
    }

    localStorage.setItem("Users", JSON.stringify(user));
    const loggedUsers = JSON.parse(localStorage.getItem("Users"));

    const response = await api.post("/userLogin", loggedUsers);
    success.innerHTML = `Login bem-sucedido ${response.data.msg}`;
    location.href = "/html/comments.html";
    localStorage.removeItem("Users");
  } catch (error) {
    error.innerHTML = `Erro ao fazer a requisição ${error.msg}`;
  }
};
