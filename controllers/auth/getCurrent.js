const getCurrent = async (req, res) => {
  const { email, name } = req.user;

  res.status(200).json({
    user: {
      email: email,
      name: name,
    },
  });
};

module.exports = getCurrent;
