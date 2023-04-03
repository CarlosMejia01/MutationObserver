const teamsFootball = ['Betis', 'Espanyol', 'Valencia', 'Sevilla'];
setTimeout(function addTeam() {
    const teams = document.querySelector('ul.teams');
    const team = document.createElement('li');
    team.textContent = teamsFootball[parseInt(Math.random() * teamsFootball.length, 10)];
    teams.appendChild(team);
}, Math.random() * 1000);

setTimeout(function removeTeam() {
    const teams = document.querySelector('ul.teams');
    teams.removeChild(teams.querySelector('li'));
}, Math.random() * 3000);
