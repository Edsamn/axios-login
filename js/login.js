const userLogin = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email-user-input").value;
  const pass = document.getElementById("password-input").value;
  const error = document.getElementById("error");
  const success = document.getElementById("success");

  try {
    const user = {
      email: email,
      pass: pass,
    };

    if (email === "" || pass === "") {
      return (error.innerHTML = `Favor preencher todos os campos`);
    }

    const response = await api.post("/userLogin", user);
    console.log(response);
    success.innerHTML = `Login bem-sucedido`;
    location.href = "/html/comments.html";
  } catch (error) {
    console.log(error);
  }
};
