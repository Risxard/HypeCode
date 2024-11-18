// fetchContainer.test.js
import { fetchContainer } from './fetchContainer';
import axios from 'axios';
import emailjs from '@emailjs/browser';


jest.mock('axios');
jest.mock('@emailjs/browser');

describe('fetchContainer', () => {
  const mockData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    tel: '123456789',
    message: 'Test message',
  };

  it('should send data with success using axiosRequest', async () => {
    axios.post.mockResolvedValue({ status: 200, data: 'Sucesso' });

    const result = await fetchContainer('https://formsubmit.co/ajax/test-email@example.com', mockData);

    expect(result).toBe(true);
    expect(axios.post).toHaveBeenCalledWith(
      'https://formsubmit.co/ajax/test-email@example.com',
      mockData,
      { headers: { 'Content-Type': 'application/json' } }
    );
  });

  it('should fail in axiosRequest and try to send using sendEmailJs', async () => {
    axios.post.mockRejectedValue(new Error('Falha no axiosRequest'));

    emailjs.send.mockResolvedValue({ status: 200, text: 'Sucesso' });

    const result = await fetchContainer('https://formsubmit.co/ajax/test-email@example.com', mockData);

    expect(result).toBe(true);
    expect(emailjs.send).toHaveBeenCalled();
  });

  it('should fail in both attempts and return false', async () => {
    axios.post.mockRejectedValue(new Error('Falha no axiosRequest'));

    emailjs.send.mockRejectedValue(new Error('Falha no sendEmailJs'));

    const result = await fetchContainer('https://formsubmit.co/ajax/test-email@example.com', mockData);

    expect(result).toBe(false);
  });
});
