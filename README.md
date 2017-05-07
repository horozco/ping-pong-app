# ping-pong-client

### Dependencies

* Node [Prefered version of v5.7.x or higher]
* Grunt-Cli
* Bower

#### 1. NodeJs
Installing node js is requirement for this application as many components are actual nodejs programs.
If you get an error, download the install package from <http://nodejs.org/> or you can use brew to install it.
```
brew install node
```
#### 2. Grunt-Cli
Grunt is used as a task runner in for the development platform. You just need a cli tool to make sure it can be invoked.
```
npm install -g grunt-cli
``` 
#### 3. Bower

I'm utilizing bower for third party script management. This simplifies managing multitude of third party javascript libraries. To install
```
npm install -g bower
``` 
### Aplication Setup
- To setup this project you need to clone it.
```
git clone git@github.com:horozco/ping-pong-app.git
```
You should be in the master branch

- Install the local required node modules
```
npm install
```
- Installing third party scripts
```
bower install
``` 
- Install Compass
```
rvm gemset create ping-pong-app && rvm gemset use ping-pong-app && gem install compass
```
### Deployment
todo

### Running the project
If you want to run the server pointing the local api you should run the command:
````
grunt serve
````

### Running JShint for code quality checks
Make sure there is not javascript warnigns or errors before commit your changes.
```
grunt jshint
```

### Test Suite
* TODO