const createUser = async (event) => {
  event.preventDefault();

  try {
    const name = document.getElementById("create-name-input").value;
    const email = document.getElementById("create-email-user-input").value;
    const pass = document.getElementById("create-password-input").value;
    const error = document.getElementById("error");

    const user = {
      name: name,
      email: email,
      pass: pass,
    };

    const getResponse = await api.get("/users");
    const users = getResponse.data.data;

    const userAlreadyExists = users.find((user) => user.email === email);
    if (userAlreadyExists) {
      return (error.innerHTML = `Esse email já está cadastrado`);
    }

    if (name === "" || email === "" || pass === "") {
      return (error.innerHTML = `Os campos não podem ficar em branco`);
    }

    const postResponse = await api.post("/createUser/crypto", user);
    alert(`${postResponse.data.msg}`);
    location.href = "/html/login.html";
  } catch (error) {
    error.innerHTML = `Erro ao fazer a requisição ${error.msg}`;
  }
};
