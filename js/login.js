const userLogin = async (event) => {
  event.preventDefault();

  try {
    const email = document.getElementById("email-user-input").value;
    const pass = document.getElementById("password-input").value;
    const error = document.getElementById("error");

    const user = {
      email: email,
      pass: pass,
    };

    if (email === "" || pass === "") {
      return (error.innerHTML = `Favor preencher todos os campos`);
    }

    const getResponse = await api.get("/users");
    const users = getResponse.data.data;
    const findUser = users.find((user) => user.email === email);

    const postResponse = await api.post("/userLogin", user);
    alert(`${postResponse.data.msg}! seu ID único é ${findUser.id}`);
    location.href = "/html/comments.html";
  } catch (error) {
    error.innerHTML = `Erro ao fazer a requisição ${error.msg}`;
  }
};
