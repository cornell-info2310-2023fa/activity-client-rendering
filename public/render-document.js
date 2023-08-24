const h1 = React.createElement('h1', null, 'Website');
const p = React.createElement('p', null, 'This is a ',
  React.createElement('strong', null, 'client-side rendered'), ' website.');

ReactDOM.render([h1, p], document.body);
