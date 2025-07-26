# Turborepo Deployment 
- In this repo we learn about the deployment part of monorepo
- I uses bun for it
- write docker file for all the folder(Frontend, Backend, ws)
- set the database , currently connected to my local machine
- make the .github/workflows folder to make the CD to github
- make docker username, token, database url set on actions of repo for privacy
- write some scripts in global package.json file for starting docker at VM
- VM integration part is remaning,bcz it needs cost
- for next.ja render the database data to the webpage do add for incremental static generation
    -  //incremental static regeneration

       export const revalidate = 60;  //revalidate every 60 seconds
      // or
     export const dynamic = 'force-dynamic';
- add build args to cd_fronted.yml file to connect to db
  
