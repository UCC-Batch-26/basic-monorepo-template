import { addSample } from '#modules/samples/controllers/add-sample.js';
import { Sample } from '#modules/samples/models/sample.js';
import { createTestServer } from '#test/test-utils.js';
import { describe, expect, it, jest } from 'jest';

describe('addSample Controller', () => {
  const route = {
    path: '/samples',
    method: 'POST',
  };

  it('should create a new sample successfully', async () => {
    const sampleData = { name: 'Test Sample' };
    const response = await createTestServer(route, addSample).post(route.path).send(sampleData);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Successfully created sample');
    expect(response.body.data.name).toBe(sampleData.name);

    // Verify the sample was actually created in the database
    const createdSample = await Sample.findById(response.body.data._id);
    expect(createdSample).toBeTruthy();
    expect(createdSample.name).toBe(sampleData.name);
  });

  it('should return 400 when name is missing', async () => {
    const response = await createTestServer(route, addSample).post(route.path).send({});

    expect(response.status).toBe(400);
    expect(response.body.message).toBeTruthy();
  });

  it('should handle database errors gracefully', async () => {
    // Mock Sample.create to simulate a database error
    jest.spyOn(Sample, 'create').mockRejectedValueOnce(new Error('Database error'));

    const response = await createTestServer(route, addSample).post(route.path).send({ name: 'Test Sample' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Database error');

    // Restore the original implementation
    jest.restoreAllMocks();
  });
});
