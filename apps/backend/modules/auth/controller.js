import { User } from '#/users/model.js';

export async function register(req, res) {
  const { fullName, email, password } = req.body;
  await User.create({ fullName, email, password });

  res.status(201).json({
    message: 'Nice',
  });
}
