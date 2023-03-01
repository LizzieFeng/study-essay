import _ from "lodash";
import './style.css';
import './loader/index.css'

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    // element.innerHTML = "Hellow Webpack"
    element.classList.add('hello');
    element.classList.add('img1');

    return element;
}

document.body.appendChild(component());