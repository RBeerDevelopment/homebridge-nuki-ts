


// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();


const axios = require('axios').default;

export class NukiBridge {

  private ipAddress: string;
  private port: number;
  private token: string;


  constructor(ipAddress: string, port: number, token: string) {
    this.ipAddress = ipAddress;
    this.port = port;
    this.token = token;
  }

  getDevices = async () => {
    const response = await axios.get(`http://${this.ipAddress}:${this.port}/list?token=${this.token}`);
    return response;
  };
}