# Algolia Coding Challenge

This project was made with Angular 4 and seeded with `@angular/cli`.

## How to install
Run`(sudo) npm install -g @angular/cli`  
  
Clone repo  `git clone https://github.com/rombevillard/algolia.git rombevillard-algolia-restaurant-app && cd rombevillard-algolia-restaurant-app`  
  
run `npm install`
  
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Data manipulation / import script

The import script for the second dataset can be found at `/src/app/algolia/updaterecords.ts`. I simply triggered it with a button (which I removed from the source code). In real life, I could (and should, and would) have triggered the script from a server with a secure layer, as the admin API key is not supposed to be in client source.

## Thank you
This has been a real challenge for me, and I learned some good things while completing this assignment. Whatever happens I'm glad I had the opportunity to work on this little project. I hope you'll like it. 