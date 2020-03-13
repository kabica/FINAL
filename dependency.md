## REACT App
- npx create-react-app <app_name>
- cd <app_name>
- npm start 

## Mocha + Chai 
- npm install mocha chai 

## Jest 
- place test files in __tests__ directory 
- name files <component_name>.test.js

## Coverage Reporting 
-  npm test -- --coverage --watchAll=false

## Express 
- npm install express

## Nodemon 
- npm install nodemon
- "start": "./node_modules/.bin/nodemon -L <server_file_name.js> " 

## PSQL 
- CREATE USER <name>;
- ALTER USER <name> WITH SUPERUSER;
- ALTER USER <name> WITH Create Role;
- ALTER USER <name> WITH Create DB;

- vagrant [final-api]> psql -U nixx -d api
- \i migrations/schema.sql

## Remove file from GITHUB but NOT local 
- git rm -r --cached myFolder


## Mocha + Chai 
```js
describe('getUserByEmail', function() {
  it('should return a user with valid email', function() {
    const user = getUserByEmail(testUsers , "user@example.com")
    const expectedOutput = "userRandomID";
 
    assert.equal(user , expectedOutput);
  });

  it('should return undefined if user e-mail does not exist', function() {
    const user = getUserByEmail(testUsers , "notReal@example.com")
    const expectedOutput = undefined;

    assert.equal(user , expectedOutput);
  })
});
```

## Prop-types 
```js
InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
```
