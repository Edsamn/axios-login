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

    if (name === "" || email === "" || pass === "") {
      return (error.innerHTML = `Os campos não podem ficar em branco`);
    }

    const response = await api.post("/createUser/crypto", user);
    success.innerHTML = `Usuário cadastrado com sucesso`;
    console.log(response);
    location.href = "/html/login.html";
  } catch (error) {
    console.log(error);
  }
};
