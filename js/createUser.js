const createUser = async (event) => {
  event.preventDefault();

  try {
    const name = document.getElementById("create-name-input").value;
    const email = document.getElementById("create-email-user-input").value;
    const pass = document.getElementById("create-password-input").value;
    const error = document.getElementById("error");
    const success = document.getElementById("success");

    const user = {
      name: name,
      email: email,
      pass: pass,
    };

    const users = [];

    if (name === "" || email === "" || pass === "") {
      error.innerHTML = `Os campos não podem ficar em branco`;
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    const usersSaved = JSON.parse(localStorage.getItem("users"));

    const emailIndex = users.findIndex((user) => email === user.email);

    if (emailIndex !== -1) {
      return (error.innerHTML = `Email já cadastrado`);
    } else {
      const response = await api.post("/createUser/crypto", usersSaved);
      success.innerHTML = `Usuário cadastrado com sucesso`;
    }

    name.value = "";
    email.value = "";
    pass.value = "";
  } catch (error) {
    console.log(error);
  }
};
