'use strict';

console.log('App.js is running');

/* var template = (
    <div>
        <h1>Mike</h1>
        <p>Paragraph</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
); */

/* var userName = 'Mike';
var userAge = 27;
var userLocation = 'Vegas'; */
function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var user = {
    name: 'Andrew',
    age: 26,
    location: 'Philadelphia'
};

var book = {
    title: 'TITLE',
    subtitle: 'SUB-TITLE'
};

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        book.title
    ),
    React.createElement(
        'p',
        null,
        book.subtitle
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);
var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
//ReactDOM.render(templateThree, appRoot);
