const fetchData = async () => {
  try {
    // const topics = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_topics/publication`);
    // const topics_data = await topics.json();
    // setStackArray(topics_data);

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_publications`);
    const data = await response.json();
    setPublicationData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

