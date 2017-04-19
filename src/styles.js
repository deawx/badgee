import Store from './store';
import { extend } from './utils';

// Create store to save styles
const store = new Store;

// Default properties for styles
let defaultsStyle = {
  'border-radius': '2px',
  'padding'      : '1px 3px',
  'margin'       : '0 1px',
  'color'        : 'white'
};

const styles = {
  // define a new style or list existing ones
  style(name, style) {
    if (name != null && style != null) {
      style = extend(defaultsStyle, style);
      store.add(name, style);
    }
    else if (name != null) {
      return store.get(name);
    }
    return store.list();
  },

  defaults(style) {
    if (style != null) {
      defaultsStyle = style;
    }
    return defaultsStyle;
  },

  stringForStyle(name) {
    const style = store.get(name);
    return ((() => {
      const result = [];
      for (const k in style) {
        const v = style[k];
        let item;
        if (style.hasOwnProperty(k)) {
          item = `${k}:${v};`;
        }
        result.push(item);
      }
      return result;
    })()).join('');
  }
};


// define a few styles
const empty = {};
const black = {'color': 'black'};

styles.style('black',   extend(empty, {'background': 'black'}));
styles.style('blue',    extend(empty, {'background': 'blue'}));
styles.style('brown',   extend(empty, {'background': 'brown'}));
styles.style('gray',    extend(empty, {'background': 'gray'}));
styles.style('green',   extend(empty, {'background': 'green'}));
styles.style('purple',  extend(empty, {'background': 'purple'}));
styles.style('red',     extend(empty, {'background': 'red'}));
styles.style('cyan',    extend(black, {'background': 'cyan'}));
styles.style('magenta', extend(black, {'background': 'magenta'}));
styles.style('orange',  extend(black, {'background': 'orange'}));
styles.style('pink',    extend(black, {'background': 'pink'}));
styles.style('yellow',  extend(black, {'background': 'yellow'}));


export default styles;
