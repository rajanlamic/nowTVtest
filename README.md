## Approach
I followed following approach while doing this test.

1. I followed test driven developement for the new code I added. I did not actually any more test for the existing codes.
2. I tried to solve the problem.
3. I did not try to restucture the codebase, I just followed the existing structure. However there are lots of rooms to improvement in existing codebase.
4. I did not try to work on styling.


## Improvements
Following improvements could be made if I had enought time.

1. Restructure the files. e.g related action creator, components, redredux-promise-ucers, constants, api, helper utility functions etc can be grouped and placed inside one component folder.
2. Better styling
3. Split components into smaller components that follows single responsibilies principle
4. Wrire more tests to increase code coverage. I would probably use snapshot testings as well.
5. Would add more validations and error handlings.
6. Would use bootstrap and reactstrap for better form elements.
7. Would use combine reducers approach.
8. Would use more fancy pop up instead of title for task no 2 on mouse over. (2. Display the user's email when you hover over the message.)
9. Would split App.js int multiple files.

## Improvements if it was real project
Following improvements could be made if it was required to have production ready, in addition to above Improvements.

1. Would go automation if it was real project.
2. Would follow mobile first design
3. Would add react-router-dom when application grows.
4. Would implement container and presentation (smart and dumb) component priciple while creating components
5. Would use componentShouldUpdate for component performance,
plus many more.


# NowTV React Interview

![NowTV](./logo.png)

A simple React + Redux project to retrieve, render and manipulate data returned from an API.

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Additional dependencies can be installed, if you think they are necessary

`App.js` is your react entry point, it is connected to the redux store

`data.js` is a mocked-API which exposes methods to get message information and member information from a chatroom.

It has two publically exposed functions `getMessages` and `getMembers`. Your tasks will be to add further logic to display and manipulate the data returned from these functions, without modifying `data.js`

`service.js` currently consumes `data.js` to retrieve a list of messages, and put them into the redux store. 

Do not modify `data.js` to achieve these tasks, and do not worry about the styling. Code addition should be unit tested.

1. Render the list of messages from the redux store

2. Display the user's email when you hover over the message.

3. Display the avatar of the user next to the message

4. Display and format the timestamp of the message to be human readable

5. Sort the messages by time

## Submission

Please upload your solution to your github account as a public repository, and send the URL to us.
