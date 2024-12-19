import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from './HeroSection';

const LatestGames = () => {
  const [games, setGames] = useState([]); // Store games
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [page, setPage] = useState(1); // Track current page
  const [hasMore, setHasMore] = useState(true); // Track if more games are available
  const [searchTerm, setSearchTerm] = useState(''); // Store the search term

  // Fetch games from the API
  const fetchGames = async (pageNumber, searchQuery = '') => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 1;
    const endYear = currentYear + 1;

    try {
      const response = await axios.get('https://api.rawg.io/api/games', {
        params: {
          ordering: '-released', // Order by release date
          page_size: 30, // Fetch 30 games at a time
          page: pageNumber, // Pass the current page number
          key: '8e1e6d29e9e04bcfa8bfba96435aa599', // API key
          dates: `${startYear}-01-01,${endYear}-12-31`, // Date range
          exclude_tags: 'adult,nsfw,pornographic,hentai,sex', // Exclude specific tags
          search: searchQuery, // Search term (e.g., game name)
        },
      });

      // If there are no more games, disable the "Show More" button
      if (response.data.results.length < 30) {
        setHasMore(false);
      }

      // Update the games state with new results
      setGames(response.data.results);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      setLoading(false); // Set loading to false on error
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Fetch games immediately when search term changes
    fetchGames(1, value); // Fetch with the search query
  };

  // Fetch the first 30 games when the component mounts
  useEffect(() => {
    fetchGames(page, searchTerm);
  }, [page]);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment page to fetch the next set of games
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  const excludedGameNames = ['Game Name 1', 'Game Name 2', 'Game Name 3','porn'];
  const excludedKeywords = ['sex', 'porn', 'hentai','porn'];
  return (
    <div>
     <div>

      <HeroSection></HeroSection>

     </div> 



    <div style={styles.container}>
      
      

      <h1>Latest Games</h1>

      {/* Search field */}
      <input
        type="text"
        placeholder="Search for games..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchInput}
      />

      <h3>The following games are sourced from the <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">RAWG</a> API</h3>

      <div style={styles.gameList}>
        {games.filter(game => {
    const gameNameLower = game.name.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    return !excludedGameNames.includes(game.name.toLowerCase()) &&
           !excludedKeywords.some(keyword => gameNameLower.includes(keyword.toLowerCase()));
  }).map((game,i,t) => (
          <div key={game.id} style={styles.gameCard}>
            {game.background_image ? (
              <img
                src={game.background_image}
                alt={game.name}
                style={styles.gameImage}
               key={i}/>
            ) : (
              <img
                src="https://i.pinimg.com/736x/91/eb/70/91eb707b2e0fd17909534b39c0d0ed76.jpg"
                style={{ width: '260.33px', height: '146.43px' }}
                alt="Default"
              key={i}/>
            )}
            <div style={styles.gameDetails}>
              <h2>{game.name}</h2>
              <p>Release Date: {new Date(game.released).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {hasMore && (
        <button onClick={handleShowMore} style={styles.showMoreButton}>
          Show More
        </button>
      )}
    </div>
    </div>
  );
};

// Styling for the component
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  gameList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  gameCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '10px',
  },
  gameImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  gameDetails: {
    marginTop: '10px',
  },
  showMoreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LatestGames;
