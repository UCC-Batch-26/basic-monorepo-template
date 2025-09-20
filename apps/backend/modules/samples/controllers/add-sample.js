import { Sample } from '../models/sample.js';

export async function addSample(req, res) {
  try {
    const { name } = req.body;
    const sample = await Sample.create({ name });

    res.status(201).json({
      message: 'Successfully created sample',
      data: sample,
    });
  } catch (error) {
    console.log('Error creating sample:', error);

    res.status(400).json({
      message: error?.message ?? 'Something went wrong creating sample',
    });
  }
}
