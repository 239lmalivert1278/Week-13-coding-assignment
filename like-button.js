import react from 'react';

export default class likeButton extends react.component {
    render() {
        return React.createElement('button', {class: 'btn btn-primary'}, 'Like');
    }
}