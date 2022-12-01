export const loginUser = async (username, email, password, setter) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}loginUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
    // setter(data.username);
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (username, email, password, setter) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}addUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
    // setter(data.username);
  } catch (error) {
    return console.log(error);
  }
};

export const readUsers = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}listUsers`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    const usernames = data.user.map((users) => users.username);
    return usernames;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (username, key, value) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}updateUser`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        key: key,
        value: value,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (username) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}deleteUser`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
