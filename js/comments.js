async function getUsers() {
  try {
    const response = await api.get("/users");
    const users = response.data.data;
    console.log(users);
  } catch (error) {
    console.log(error, "Ocorreu um erro");
  }
}

getUsers();

const createUser = async (event) => {
  event.preventDefault();

  try {
    const name = document.getElementById("create-name-input").value;
    const email = document.getElementById("create-email-user-input").value;
    const pass = document.getElementById("create-password-input").value;

    const user = {
      name: name,
      email: email,
      pass: pass,
    };
    localStorage.setItem("users", JSON.stringify(user));
    const usersSaved = JSON.parse(localStorage.getItem("users"));
    const response = await api.post("/createUser/crypto", usersSaved);
    console.log(`Usuário criado com sucesso. ${response.data}`);
  } catch (error) {
    console.log(error.msg);
  }
};
