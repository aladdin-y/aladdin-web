import { useState, useEffect } from 'react';
import ErrorPage from '../components/ErrorPage';

const UnkownPage = () => {
    const messages = [
        'Have you lost your way, kiddo?',
        'Damn it! This dead-end road.',
        'The Aurors blocked this road, Harry!',
        'Oops! Looks like you took a wrong turn.',
        'This page seems to be missing.',
        'Well, this is awkward... Nothing here!',
        '404: The page you are looking for does not exist.',
        'You have reached the end of the internet.',
        'This page is taking a break. Try again later.',
        'Are you sure you’re in the right place?',
        'Houston, we have a problem!',
        'Seems like you’re trying to reach a page that doesn’t exist.',
        'Sorry, we couldn’t find that page.',
        'This is not the page you are looking for.',
        'Looks like you’ve hit a dead end.',
        'This page must have moved to another dimension.',
        'Yikes! This page flew away.',
        'The page you are looking for has been abducted by aliens.',
        'Nothing to see here, move along!',
        'The page you are trying to reach is not available right now.'
    ];

    const [randomMessage, setRandomMessage] = useState("");

    useEffect(() => {
        setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, []);

    return randomMessage ? <ErrorPage code={404} message={randomMessage} /> : null;
}

export default UnkownPage;
