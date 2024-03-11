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

    const usersSaved = JSON.parse(localStorage.getItem("users")) || [];

    const emailIndex = usersSaved.findIndex((user) => email === user.email);

    if (emailIndex === -1) {
      usersSaved.push(user);
      localStorage.setItem("users", JSON.stringify(user));
    } else {
      error.innerHTML = `Email já cadastrado`;
    }

    const response = await api.post("/createUser/crypto", usersSaved);

    console.log(`Usuário criado com sucesso. ${response}`);

    name.value = "";
    email.value = "";
    pass.value = "";
    error.value = "";
  } catch (error) {
    console.log(error);
  }
};
