import md5 from "md5";

const gravatar = (email) => {
  const base = "https://gravatar.com/avatar/";
  const formatteEmail = email.trim().toLowerCase(); //trim deletes spaces
  const hash = md5(formatteEmail, { encoding: "binary" });
  return `${base}${hash}`;
};

export default gravatar;
