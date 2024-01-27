    export const fetchRandomDoodle = async (category) => {
      const apiUrl = `https://pixabay.com/api/?key=21054801-09e9951a2ca09cf628ee27e12&q=black+white+doodle+${category}&image_type=illustration`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch doodle');
        }

        const doodleData = await response.json();
        // console.log('doodleData:', doodleData.hits[Math.floor(Math.random() * doodleData.hits.length)].largeImageURL);
        return await doodleData.hits[Math.floor(Math.random() * doodleData.hits.length)].largeImageURL; // Update randomDoodle state with fetched doodle data
      } catch (error) {
        console.error('Error fetching doodle:', error);
      }
    };

// // Example usage:
// fetchRandomDoodle('cat')
//   .then(doodle => {
//     console.log('Random doodle:', doodle);
//     // Process the doodle data here
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
