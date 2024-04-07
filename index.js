import axios from 'axios';

(async () => {
  try {
    const { data } = await axios.get('https://api.gofile.io/servers');
    data.data.servers.map((e) => {
      console.log(e);
    });
  } catch (error) {
    console.log(error);
  }
})();
