How To run the service:
1 - to install all dependencies requierd, run "npm install" in the "MinuteMedia-project-with-NodeJs" Folder Terminal. (i.e: cd to c/..../MinuteMedia-project-with-NodeJs)
2- to start the server, run "npm start"

once the server as started open a browser and:
3 - Type in the URL: http://localhost:8080/
    3.1 - to get the list of all matches by team.
          URL = http://localhost:8080/team/getMatches?name=XXXXX
          where XXXXX is the team name
          EXAMPLE - http://localhost:8080/team/getMatches?name=Arsenal

    3.2 - to get the list of all matches by team filtered by status. 
          URL = http://localhost:8080/team/getMatches?name=XXXXX&SSSSS
          where where XXXXX is the team name followed by &status and SSSSS = played | upcoming as status
          EXAMPLE - http://localhost:8080/team/getMatches?name=Arsenal&status=upcoming

    3.3 - To get the list of all matches by tournament. 
          URL = http://localhost:8080/league/getMatches?name=XXXXX
          where XXXXX is the tournament name
          EXAMPLE  - http://localhost:8080/league/getMatches?name=fa
    
    3.4 - To get the list of matches by tournament filtered by status.
          URL = http://localhost:8080/league/getMatches?name=XXXXX&SSSSS
          where XXXXX is the tournament name followed by &status and SSSSS = played | upcoming as status
          EXAMPLE  - http://localhost:8080/league/getMatches?name=fa&status=upcoming

4 - to run a new query just Enter a new URL and refresh the browser.



