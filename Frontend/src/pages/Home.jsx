import { useState, useEffect, useRef } from 'react'
import "../css/Home.css"
import axios from 'axios';

const Home = () => {
  // Store league ID mappings
  const leagueIdMapping = {
    'Premier League': 39,
    'La Liga': 140,
    'Serie A': 135
  };
  const [selectedLeague, setSelectedLeague] = useState('Premier League');
  const [matches, setMatches] = useState([]);
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const standingsRef = useRef(null);

  const scrollToStandings = () => {
  standingsRef.current?.scrollIntoView({ behavior: 'smooth' });
};
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const searchTerm = localStorage.getItem('searchTerm') || '2023';

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const season = searchTerm;
    
    // This runs when the selected league changes
    const fetchMatchesForLeague = async () => {
      setLoading(true);
      
      try {
        // Get league ID for selected league
        const leagueId = leagueIdMapping[selectedLeague];

        const fixturesResponse = await axios.get(`${API_BASE_URL}/fixtures`, {
  params: {
    league: leagueId,
    season: season,
    timezone: 'Europe/London'
  }
});
        console.log('Fixtures response:', fixturesResponse.data);
        setMatches(fixturesResponse.data.response || []);

        const standingsResponse = await axios.get(`${API_BASE_URL}/standings`, {
  params: {
    league: leagueId,
    season: season,
  }
});
        console.log('Standings response:', standingsResponse.data);
        
        // API returns standings in a nested structure
        if (standingsResponse.data.response[0]?.league?.standings[0]) {
          setStandings(standingsResponse.data.response[0].league.standings[0]);
        } else {
          setStandings([]);
        }
        
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMatchesForLeague();
  }, [selectedLeague]); // This runs when selected league changes
  
  return (
    <div className='home'>
      <section className='hero'>
        <h1 className='hero-title'>Football Stats & Scores</h1>
        <p className='hero-description'>Get match details and standings for major football leagues (2021 to 2024 season).</p>
      </section>

      <section className='todays-matches'>
        <h2 className='todays-matches-title'>Matches For {searchTerm} - {Number(searchTerm)+1} </h2>
        <select 
          name="leagues" 
          onChange={(e) => setSelectedLeague(e.target.value)} 
          value={selectedLeague}
          className='league-select'
        >
          <option value="Premier League">Premier League</option>
          <option value="La Liga">La Liga</option>
          <option value="Serie A">Serie A</option>
        </select>
      </section>
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className='matches-list'>
            {matches.length > 0 ? (
              matches.slice().reverse().map((match) => (
                <div className='match' key={match.fixture.id}>
                  <div className='league'>{selectedLeague}</div>
                  <div className='match-time'>{new Date(match.fixture.date).toLocaleDateString('en-GB',{day: 'numeric',
                   month: 'short', // or 'long' for full month name
                   year: 'numeric'})}, {new Date(match.fixture.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                  <div className='team-details'>
                    <div className='team'>
                      
                      {match.teams.home.logo && <img src={match.teams.home.logo} alt={match.teams.home.name} className="team-logo" />}
                      
                    </div>
                    <div className='score'>
                      {match.goals.home !== null ? match.goals.home : '-'} - {match.goals.away !== null ? match.goals.away : '-'}
                    </div>
                    <div className='team'>

                      {match.teams.away.logo && <img src={match.teams.away.logo} alt={match.teams.away.name} className="team-logo" />}
                    </div>
                  </div>
                  <div className='match-status'>{match.fixture.status.long}</div>
                </div>
              ))
            ) : (
              <div className='no-matches'>No matches found for today in the {searchTerm} season</div>
            )}
          </div>

          <div className='standings' ref={standingsRef}>
            <h2 className='standings-title'>{searchTerm} - {Number(searchTerm)+1}  Season Standings</h2>
            <table className='standings-table'>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Team</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GD</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.length > 0 ? (
                  standings.map((team) => (
                    <tr key={team.team.id}>
                      <td>{team.rank}</td>
                      <td style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                        {team.team.logo && (
                          <img 
                            src={team.team.logo} 
                            alt={team.team.name} 
                            className="team-logo-small"
                            width="25"
                            height="25"
                          />
                        )}
                        {/* &nbsp;&nbsp; */}
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        {team.team.name}
                        </div>
                      </td>
                      <td>{team.all.played}</td>
                      <td>{team.all.win}</td>
                      <td>{team.all.draw}</td>
                      <td>{team.all.lose}</td>
                      <td>{team.goalsDiff}</td>
                      <td>{team.points}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No standings data available for {searchTerm} season</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
      <button className='scroll-down-btn-floating' onClick={scrollToStandings}>
  ↓ View Standings
</button>
    </div>
  )
}

export default Home