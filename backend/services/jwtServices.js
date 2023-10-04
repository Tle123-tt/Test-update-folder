const jwt = require("jsonwebtoken");

const genneralAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "30s" }
  );
  console.log("payload", payload);

  return access_token;
};

const genneralfreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );
  console.log("payload", payload);

  return refresh_token;
};

const refreshToken = async (token) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("token", token);
      jwt.verify(token, process.env.REFRESH_TOKEN, async(err, user) => {
        if (err) {
          console.log("err", err);
          resolve({
            status: "ERR",
            message: "The authemtication",
          });
        }
        const { payload } = user;
        const access_token =await genneralAccessToken({
          id: payload?.id,
          isAdmin: payload?.isAdmin,
        });
        console.log('access token: ', access_token)
        resolve({
          status: "Ok",
          message: "SUCESS",
          access_token
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { genneralAccessToken, genneralfreshToken, refreshToken };
