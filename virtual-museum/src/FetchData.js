// FetchData.js
async function fetchData() {
    try {
      const response = await fetch('https://api.npoint.io/f3fd7456f67459fc2386');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  export default fetchData;
  