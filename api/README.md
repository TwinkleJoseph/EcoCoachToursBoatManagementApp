## Echo Catch Tours Boat Tracker Application

# Build API
1.  Checkout the projct
       git clone https://github.com/TwinkleJoseph/EcoCoachToursBoatManagementApp
2.Go to the API dir and Install node packages by using the following command:
      
	  npm install
	   
	   
3. Run API by using the following command:

       npm run dev
	   
	   Then the API will up be up on port:8000
	   
# Create DATABASE - I am using PostgreSQL DB

Pre-requisites:

    Install PostgreSQL on local machine.
	
1.Create SERVER

  Right click on Servers -> Create -> Server
  
      In General tab give server name as : etbtrackingdb
	  In Connection tab give server name as : localhost
	  In Connection tab give password as : admin
	  
Then the server 'etbtrackingdb' will be getting created and we can see that under the Servers.


2.Create DATABASE

   Expand 'etbtrackingdb' (by clicking '>').
   
   Then right click on Databases -> Create - > Database 
   Then a popup will come and in General tab give the database name as : etbtrackingdb
   Then click on Save button. Then the new DB will be getting created.
   
   
3. Create TABLES

    Expand 'etbtrackingdb' - > Go to public , right click  on that and open Query tool.
	
	Then run the following scripts:

    Run the following scripts from pgAdmin or sql commandline
    3.1. ../db/boat_tracker_db_ddl.sql
    3.2. ../db/boat_guide_dml.sql
	   
	   