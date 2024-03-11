const userLogin = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email-user-input").value;
  const pass = document.getElementById("password-input").value;

  try {
    const user = {
      email: email,
      pass: pass,
    };

    localStorage.setItem("loggedUsers", JSON.stringify(user));
    const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers"));
    const response = await api.post("/userLogin", loggedUsers);
    console.log("A requisição deu certo", response.data);
  } catch (error) {
    console.log(error.message);
  }
};
