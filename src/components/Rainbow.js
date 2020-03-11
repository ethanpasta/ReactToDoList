import React from 'react';
import '../styles/Rainbow.scss';

const Rainbow = ({ text }) => {
    return (
        <ul class="c-rainbow">
            <li class="c-rainbow__layer c-rainbow__layer--white">{text}</li>
            <li class="c-rainbow__layer c-rainbow__layer--orange">{text}</li>
            <li class="c-rainbow__layer c-rainbow__layer--red">{text}</li>
            <li class="c-rainbow__layer c-rainbow__layer--violet">{text}</li>
            <li class="c-rainbow__layer c-rainbow__layer--blue">{text}</li>
            <li class="c-rainbow__layer c-rainbow__layer--green">{text}</li>
            <li class="c-rainbow__layer c-rainbow__layer--yellow">{text}</li>
        </ul>
    )
};

export default Rainbow;