export default {
    post: jest.fn(() => Promise.resolve({ data: { message: 'Mocked response' } })),
  };