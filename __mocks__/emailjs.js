export default {
    send: jest.fn(() => Promise.resolve({ status: 200, text: 'Mocked email sent' })),
  };
  