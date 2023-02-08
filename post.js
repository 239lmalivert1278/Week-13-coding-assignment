import React from 'react';
import ReplyButton from'./reply-button';
import Likebutton from './like-button';
import Comment from './comment';


let e = React.createElement;

export default class post extends React.Component {
render () {
    return e('div',
    {class: 'card w-75'},
    e('div',
{class: 'card-header bg-succes text-white'},
'Username and Time'),
e('div',
{class: 'card-body'},
'Post content'),
e('div',
{class: 'card-footer'},
e(likeButton, {}, null),
e('span', {}, ''),
e(ReplyButton, {}, null),
e('br', {}, null),
e(Comment, {}, null),
e(Comment, {}, null)
)    
);
}

}