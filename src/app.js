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

var user = {
    name:   'Andrew',
    age: 26,
    location: 'Philadelphia'
};

var book = {
    title: 'TITLE',
    subtitle: 'SUB-TITLE'
}

var templateThree =  (
    <div>
        <h1>{book.title}</h1>
        <p>{book.subtitle}</p>
    </div>
); 

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(templateThree, appRoot);