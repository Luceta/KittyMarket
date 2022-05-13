const BASE_URL = "http://146.56.183.55:5050/";
const SIGN_UP = `${BASE_URL}/user`;
const LOGIN = `${BASE_URL}/user/login`;
const EMAIL_VALID = `${BASE_URL}/user/emailvalid`;

type Signup = {
  email: string;
  password: string;
  username: string;
  accountname: string;
  intro: string;
  image: string;
};

export const signupAPI = async ({
  email,
  password,
  username,
  accountname,
  intro,
  image,
}: Signup) => {
  const data = {
    user: {
      email,
      password,
      username,
      accountname,
      intro,
      image,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(SIGN_UP, options);
  return await res.json();
};

export const checkEmailAPI = async (email: string) => {
  const data = {
    user: {
      email,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(EMAIL_VALID, options);
  return res.json();
};

export const loginAPI = async (email: string, password: string) => {
  const data = {
    user: {
      email,
      password,
    },
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const res = await fetch(LOGIN, options);
  return await res.json();
};
