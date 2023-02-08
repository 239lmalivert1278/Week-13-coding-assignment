import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import likeButton from './reply-button';


let e = React.createElement;
export default class Comment extends React.Component {
    render() {
        return e('div',
        {class: 'card w-75'},
        e('div',
{class: 'card-header bg-succes text-white'},
'Username and Time'),
e('div',
{class: 'card-body'},
'Comment content'),
e('div',
{class: 'card-footer'},
e(likeButton, {}, null),
e('span', {}, ''),
e(ReplyButton, {}, null)
   )    
  );
 }
}