# Schwifty

[Schwifty live][heroku]

[heroku]: https://schwifty.herokuapp.com/

Schwifty is a full-stack web application inspired by Shift.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

 The original site has two main views: cars/:region and car/:id.

 I started with a limited subset of the site's features as my "goal" for replication. I then modified that to include features such as user authentication and user-bound database operations for booking test drives (as opposed to the actual site's implementation).

### [cars/:region]
[cars/:region]: https://schwifty.herokuapp.com/#/cars

 The basic "region" is one that is location agnostic and allows you to search vehicles across all regions. These views support filtering of the available cars and is implemented through a dynamic SQL query (code snippet below).
 
 ![image of search page](./readme_images/default_region.png)
 
 The other regions apply a basic filter that searches cars only in that region via a simply database query.
	def getCarsWithParams(tags, location)
        whereInStr = composeWhereStr(tags) || ""
        #TODO: include location
        whereInStr.concat(" AND ") unless whereInStr.empty?
        queryStr = whereInStr + "cars.mileage <= #{tags[:maxMiles]}" + " AND cars.price <= #{tags[:maxPrice]}"
        queryStr.concat(" AND UPPER(cars.location) LIKE '#{location.upcase}'") unless location.empty?
        Car.find_by_sql([
          "
          SELECT 
            *
          FROM cars
          WHERE 
            #{queryStr}
          "
        ])
  	end

### [car/:id]
[car/:id]: https://schwifty.herokuapp.com/#/car/1

This car detail was unfortunately, a rushed build in order to complete the basic features I desired in this project. It displays basic info about the cars and allows you to book a test drive for that car.


### [/login]
[/login]: https://schwifty.herokuapp.com/#/login

The sign in page was kept simple and clean. A demo login is provided for minimal hassle if someone wants to play with the site. Errors render above the login form in small, red error text. 

 ![image of search page](./readme_images/login.png)

## Differences Between Shift.com and Schwifty

 Favorited Cars: Bound to user as opposed to cookie (or whatever the actual implementation is)
 Inspection Report/Ask questions: Skipped feature to limit project scope and finish in the allocated time
 Test Drive: No map in the background; text input does not have auto-locate feature
 Other Cars You Might Like: Skipped feature to limit project scope and finish in the allocated time
 Car View text: Some bits of text and information are moved around so that the 

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.
### Car Detail


### Car Sale

The original site has a really interesting table flow for submitting a car for sale. I would have liked to implement this, but the "how" of is currently not obvious to me and would require research.
