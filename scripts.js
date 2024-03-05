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
    const password = document.getElementById("create-password-input").value;

    const response = await api.post("/createUser/crypto");
  } catch (error) {
    console.log(error.msg);
  }
};

const userLogin = async (event) => {
  event.preventDefault();

  try {
    const emailOrUser = document.getElementById("email-user-input").value;
    const password = document.getElementById("password-input").value;

    console.log(emailOrUser, password);

    const data = {
      emailOrUser,
      password,
    };

    localStorage.setItem("loggedUsers", JSON.stringify(data));
    const loggedUsers = JSON.parse(localStorage.getItem("loggedUsers"));
    const response = await api.post("/userLogin", loggedUsers);
  } catch (error) {
    console.log(error.message);
  }
};
