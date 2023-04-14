// import React, { useEffect, useState } from "react";

// export default function MyComponent() {
//   const [data, setData] = useState([]);

  

//   // 
//   //   try {
//   //     const response = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers')
//   //     const json = await response.json();
//   //     setData(json);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
//   const token="0d03a89a0dff46b3bb15cf3663f288c8";
//   const baseUrl='http://api.football-data.org/v4/competitions/PL/standings'
//   const fetchData = async () => {
//   const url=`${baseUrl}/competitions/PL/standings`;
//   axios.get(url,{
//   headers:{"x-Auth-Token":`${token}`
//   }}).then((response)=>{
//   console.log(response)
//   }
//   )
//   }
//   }
//   const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
//   params: {league: '39', season: '2020'},
//   headers: {
//     'X-RapidAPI-Key': 'ac700c43a6msh1fe15610830b641p1de202jsn8ba7fc9178ec',
//     'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
//   return (
//     <div className="row my-5">
//         <div className="col-md-9 card">
//             <div className="card-body">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>Rank</th>
//                             <th>Team</th>
//                             <th>Points</th>
//                             <th>Wins</th>
//                             <th>Loss</th>
//                             <th>Draws</th>
//                             <th>Played</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                         data?.map(item => ( 
//                            <tr key='item-id'>
//                            <td>
//                            {item.overall_league_position!=18 && item.overall_league_position!=19 &&item.overall_league_position!=20?<p></p>:<p style={{backgroundColor:"	#800000",width:"150px",margin:"40px",textAlign:"center",color:"white",fontSize:"26px"}}>{item.overall_league_position}</p>}
//                            {item.overall_league_position!=1 && item.overall_league_position!=2 &&item.overall_league_position!=3 &&item.overall_league_position!=4?<p></p>:<p style={{backgroundColor:"	green",width:"150px",margin:"40px",textAlign:"center",color:"white",fontSize:"26px"}}>{item.overall_league_position}</p>}
//                            { item.overall_league_position!=5?<p></p>:<p style={{backgroundColor:"	#3498DB",width:"150px",margin:"40px",textAlign:"center",color:"white",fontSize:"26px"}}>{item.overall_league_position}</p>}
//                            {item.overall_league_position!=6?<p></p>:<p style={{backgroundColor:"red",width:"150px",margin:"40px",textAlign:"center",color:"white",fontSize:"26px"}}>{item.overall_league_position}</p>}
//                            {item.overall_league_position!=7&& item.overall_league_position!=8&& item.overall_league_position!=9&& item.overall_league_position!=10&& item.overall_league_position!=11&&item.overall_league_position!=12&& item.overall_league_position!=13&&item.overall_league_position!=14&&item.overall_league_position!=15&&item.overall_league_position!=16&&item.overall_league_position!=17?<p></p>:<p style={{backgroundColor:"#95A5A6",width:"150px",margin:"40px",textAlign:"center",color:"white",fontSize:"26px"}}>{item.overall_league_position}</p>}</td>
                             
                             
//                              <td> <img style={{width:"25px"}}src={item.team_badge}/> {item.team_name}</td>
//                                 <td>{item.matches}</td>
//                                 <td>{item.overall_league_W}</td>
//                                 <td>{item.overall_league_L}</td>
//                                 <td>{item.filters}</td>
//                                 <td>{item.overall_league_payed}</td>
//                             </tr> 
                       
                            
//                         ))
//                         }
                        
                        
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         <table style={{padding:"15px",margin:"26px"}}>
//         <tr style={{}}>
//                         <th style={{backgroundColor:"green",padding:"15px",margin:"20px" ,color:"white",fontSize:"25px"}}>LéGENDE</th>
//                         </tr>
//                         <tr><th><input type="text" style={{background:"green",border:"none",borderRadius:"5px",width:"50px",margin:"15px",fontSize:"25px"}}/>LIGE DES CHAMPIONS</th>
//                         </tr>
                        
//                         <tr><th><input type="text" style={{background:"#3498DB",border:"none",borderRadius:"5px",width:"50px",margin:"14px",fontSize:"25px"}}/>LIGE EUROPA</th>
//                         </tr>
                        
//                         <tr><th><input type="text" style={{background:"red",border:"none",borderRadius:"5px",width:"50px",margin:"14px",fontSize:"25px"}}/> CONFERENCE LEAQUE</th>
//                         </tr>
                        
//                         <tr><th><input type="text" style={{background:"#800000",border:"none",borderRadius:"5px",width:"50px",margin:"14px",fontSize:"25px"}}/> RELAGATION DERECTE </th>
//                         </tr></table>
// </div>

// )
// }
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Standings = () => {
//   const [standings, setStandings] = useState([]);

//   useEffect(() => {
//     const fetchStandings = async () => {
//       const token = "c7a4e3a816ab40ebb94531af497e761a";
//       const baseUrl = "https://api.football-data.org/v4";
//       const response = await axios.get(`${baseUrl}/competitions/2/standings`, {
//         headers: {
//           "X-Auth-Token": token,
//         },
//       });
//       setStandings(response.data.standings[0].table);
//     };
//     fetchStandings();
//   }, []);

//   return (
//     <div>
//       <h2>English Premier League Standings</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Position</th>
//             <th>Team</th>
//             <th>Played</th>
//             <th>Won</th>
//             <th>Drawn</th>
//             <th>Lost</th>
//             <th>GF</th>
//             <th>GA</th>
//             <th>GD</th>
//             <th>Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {standings.map((team) => (
//             <tr key={team.id}>
//               <td>{team.filters.season}</td>
//               <td>{team.team.name}</td>
//               <td>{team.playedGames}</td>
//               <td>{team.won}</td>
//               <td>{team.draw}</td>
//               <td>{team.lost}</td>
//               <td>{team.goalsFor}</td>
//               <td>{team.goalsAgainst}</td>
//               <td>{team.goalDifference}</td>
//               <td>{team.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Standings;


// const Standings = () => {
//   const [standings, setStandings] = useState([]);

//   useEffect(() => {
//     const fetchStandings = async () => {
//       const token = "0d03a89a0dff46b3bb15cf3663f288c8";
//       const response = await fetch(`https://api.football-data.org/v4/competitions/2/standings`, {
//         headers: {
//           "X-Auth-Token": token,
//         },
//       });
//       const data = await response.json();
//       setStandings(data.standings[0].table);
//     };
//     fetchStandings();
//   }, []);

//   return (
//     <div>
//       <h2>English Premier League Standings</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Position</th>
//             <th>Team</th>
//             <th>Played</th>
//             <th>Won</th>
//             <th>Drawn</th>
//             <th>Lost</th>
//             <th>GF</th>
//             <th>GA</th>
//             <th>GD</th>
//             <th>Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {standings.map((team) => (
//             <tr key={team.id}>
//               <td>{team.filters.season}</td>
//               <td>{team.team.name}</td>
//               <td>{team.playedGames}</td>
//               <td>{team.won}</td>
//               <td>{team.draw}</td>
//               <td>{team.lost}</td>
//               <td>{team.goalsFor}</td>
//               <td>{team.goalsAgainst}</td>
//               <td>{team.goalDifference}</td>
//               <td>{team.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";

export default function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch('https://api.football-data-api.com/league-matches?key=example&league_id=1625');
        
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="row my-5">
        {/* <div className="col-md-9 card">
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Loss</th>
                            <th>Draws</th>
                            <th>Played</th>
                      
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.map(item => (
                            <tr key={item.id} >
                                <td>{item.}</td>
                             
/h1>

                            </tr>
                        ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div> */}
        <h1>{pager.results_per_page}</h1>
</div>
)
}
