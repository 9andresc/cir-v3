const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Breaking Bad', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Orange is the New Black', color: 'LimeGreen' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
