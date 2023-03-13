## Eco Catch Tours Boat Management App


## Context 
# EcoCatch Tours is a small salmon guiding outfit based out of Cascadia, British Columbia - along the coast. 	
# This application intends to track the status of their boats using modern web and mobile applications. 

## How It Works ?
This application has a front-end built using ReactJS and backend RESTful service built in NodeJS. 
Database is hosted in PostgreSQL database. Components are deployed in AWS EC2 server using Docker containers.

## Deployment 
Check out the README files under deployment folder for build and deployment.

## Important Links 
Web Application (Under development): http://localhost:3000/      
REST API URL : http://localhost:5000/api/  
health check : http://localhost:5000/api/health  
GET all boats: http://localhost:5000/api/boat  
GET boat by Id: http://localhost:5000/api/boat/:id  
Add a new boat: http://localhost:5000/api/boat (POST)  
Update a boat: http://localhost:5000/api/boat/:id (PUT)  
Delete a boat: http://localhost:5000/api/boat/:id (DELETE)  
Search boat by status : http://localhost:5000/api/search?status=Docked  

## Author
Twinkle Joseph     


## License

Copyright 2022 Echo Catch Tours

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.