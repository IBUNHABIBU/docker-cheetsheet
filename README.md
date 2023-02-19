[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />

<p align="center">
  <a href="git@github.com:IBUNHABIBU/TZ-social-events-booking.git">
    <p align="center">
      <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png" alt="rails" width="100" height="100">
  </a>

  <h2 align="center"> TZ-CAR RENTAL RAILS API FINAL CAPSTONE PROJECT</h2>
  <h3 align="center"> This is the rails API to build a car booking</h3>

  <p align="center">
    <a href="https://github.com/IBUNHABIBU/TZ-social-events-booking/issues">Report Bug</a>
    <a href="https://github.com/IBUNHABIBU/TZ-social-events-booking/issues">Request Feature</a>
  </p>
</p>


## Table of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Features](#features)
* [Requirements](#requirements)
* [Useful Commands](#useful-commands)
* [Live Link](#Live-link)
* [Contact](#Authors)
* [Acknowledgements](#Acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project
#### Capstone project

Capstone projects are solo projects at the end of each of the Microverse Main Technical Curriculum sections. Building this project is very important because:

- It's a real-world-like project, built with business specifications that will look nice in my portfolio; and
- Get feedback about the achievement of technical and soft skills gained during this section of the program.

### Project specifications

This is Rails final capstone project is based on an app to book a Car. I have built a REST API using Ruby on rails as a backend where the front end will be the react-redux. 

### Features
- User authentication
- Create Car and appointment
- Display all cars and appointments

### Api end points

| Endpoint | Description |
|---------|-------------|
| `https://final-capstone-rails-api.herokuapp.com/` | baseUrl |
| `baseUrl/users` | users resource |
| `baseUrl/logout` | logout |
| `baseUrl/logged_in` | login |
| `baseUrl/api/v1/cars` | cars resource |
| `baseUrl/api/v1/bookings` | bookings resource |

  
<h3 align="center"> Entity Relationship Diagram (ERD) </h3>

![screenshot](https://github.com/IBUNHABIBU/car-rent-booking-api/blob/rails-api-setup/app/assets/ERD.png)

<!-- BUILD WITH -->
## Built With

This project was built using these technologies.
* Ruby on Rails


### Requirements
* Ruby
* Ruby on Rails


### How to Install 

To run this locally, clone the repository, navigate to its containing directory.

#### Follow these commands step by step:-

`
 git@github.com:IBUNHABIBU/car-rent-booking.git
`

`
cd car-rent-booking
`

 `$bundle install --without production`

 `$sudo service postgresql start`
 
 `$rails db:setup`

 `$rails db:migrate`
 
 `$rails server`
 
Enjoy playing it.

### Testing

Navigate to the project folder make sure Rspec is installed and then run the following command

 `$rspec -f d `


## Useful Commands

| Command | Description |
|---------|-------------|
| `bundle install` | Install project dependencies |
| `sudo service postgresql start` | Starting the database |
| `rails db:migrate` | Database migration |
| `rails server` | start the server |
| `rubocop -a` | Fix all the lint errors automatically |
| `bundle exec rspec` | Run rspec tests |
| `EDITOR='code --wait' rails credentials:edit` | Edit credentials |

<!-- ### How to play -->


### Challenges
1. 

![screenshot](https://github.com/IBUNHABIBU/car-rent-booking-api/blob/dev/app/assets/Errors.PNG)
      solution

      bundle config --delete bin

      bundle install --binstubs
<!-- CONTACT -->

2. Upload image in local was working but not in production

it causes the error undefined cars for nil class

Solution
I removed the association btn user model and car model
so instead of @car = current_user.cars.build(car_params)  I used @car = Car.new(car_params)

3. Another cause of blocked by cors

setting enviroment variables in heroku I used heroku config:set RAILS_MASTER_KEY = 'cat config/master.key' insead of using the backticks ``

`Looks like your app is listening on 127.0.0.1. You may need to listen on 0.0.0.0 instead.`

## Live link

[Live Demo ](https://final-car-rent-api.herokuapp.com/api/v1/cars) of the project

## Authors

👤 **Salum Habibu** 
    
* Github: [IBUNHABIBU](https://github.com/IBUNHABIBU)
* Twitter: [@ibunhabibu](https://twitter.com/Ibunhabibu)
* LinkedIn: [Salum Habibu Kombo](https://www.linkedin.com/in/salum-habibu/)

## Show your support

Give a :star: if you like this project!


## Acknowledgements
Credits go to 
- [Mr Eric Mbouwe](https://github.com/EricMbouwe), [Emmanuel Kamala](https://github.com/emmanuelkamala) and [Marcelo Araújo](https://github.com/marcelomaidden)(Microverse students) for their help to resolve the bugs.
- All my standup team for their help.
- All TSE who reviewed my project.
- All those helped me to resolve bugs.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IBUNHABIBU/TZ-social-events-booking.svg?style=flat-square
[contributors-url]: https://github.com/IBUNHABIBU/TZ-social-events-booking/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IBUNHABIBU/TZ-social-events-booking.svg?style=flat-square
[forks-url]: https://github.com/IBUNHABIBU/TZ-social-events-booking/network/members
[stars-shield]: https://img.shields.io/github/stars/IBUNHABIBU/TZ-social-events-booking.svg?style=flat-square
[stars-url]: https://github.com/IBUNHABIBU/TZ-social-events-booking/stargazers
[issues-shield]: https://img.shields.io/github/issues/IBUNHABIBU/TZ-social-events-booking.svg?style=flat-square
[issues-url]: https://github.com/IBUNHABIBU/TZ-social-events-booking/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
Why this garbage

## checking error logs in nginx
sudo cat /var/log/nginx/error.log|less 

sudo nano /tmp/passenger-error-CrijMI.html

sudo nano /tmp/passenger-error-9mdSOH.html

sudo nano /etc/nginx/sites-enabled/ukandablog

less /home/deploy/myapp/current/log/production.log

sudo less /var/log/nginx/error.log


server {
  listen 80;
  listen [::]:80;

  server_name _;
  root /home/deployer/ukandablog/current/public;

  passenger_enabled on;
  passenger_app_env production;

  location /cable {
    passenger_app_group_name ukandablog_websocket;
    passenger_force_max_concurrent_requests_per_process 0;
  }

  # Allow uploads up to 100MB in size
  client_max_body_size 100m;

  location ~ ^/(assets|packs) {
    expires max;
    gzip_static on;
  }
}

nano /home/deployer/ukandablog/.rbenv-vars


# For Postgres
DATABASE_URL=postgresql://deployer:Voda#0763@127.0.0.1/ukandablog

RAILS_MASTER_KEY=185ec0308214c2e8c5b910c8d8a1c65f

SECRET_KEY_BASE=016c62d7b454cf92f4fd3b59f1aad8e9a80d6d1ce1633a81cae5260145f68989b9ecca102d1bc9947e886f0dde69c1ca56f98b8c54cdebb77f8c24de1b21ef91