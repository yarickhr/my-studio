import React from 'react';

function PlusIcon({width = '16'}) {
    return (
        <svg 
            width={width}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 1000">
            <path d="M494.6 990h-.9c-44.7-.6-80.5-43.5-79.9-95.7l3.9-303.1-314.2-4c-24.4-.3-47.4-8.5-64.9-23-18.5-15.4-29-37-28.7-59.2.6-44.8 41.9-79.9 94.2-79.9l315.6 4 4.2-325.6C424.7 52 461.2 10 505.3 10c23.1.3 44.4 11.3 59.4 30.2 14.1 17.8 21.6 41.1 21.4 65.5L582 431.2l314.4 4c52.1.7 94.1 37.6 93.6 82.3-.6 44.9-42 79.9-94.3 79.9l-315.8-4-3.9 303c-.7 51.6-37.2 93.6-81.4 93.6zM105 470c-27.3 0-49.9 16.3-50.1 35.5-.2 11.9 7.8 20.3 12.5 24.3 9.4 7.8 22.8 12.4 36.6 12.6l336.7 4.3c5.9.1 11.6 2.5 15.8 6.8 4.1 4.3 6.5 10 6.4 15.9l-4.2 325.5c-.3 26.9 15.9 49.9 35.6 50.2l.3 22.5v-22.5c19.4 0 36.1-22.5 36.5-49.3l4.2-325.5c.2-12.3 10.2-22.2 22.5-22.2h.3l336.8 4.3c27.8 0 49.9-15.9 50.2-35.6.2-19.6-22.3-36.4-49.3-36.8l-336.9-4.3c-5.9-.1-11.6-2.5-15.8-6.8-4.1-4.3-6.5-10-6.4-15.9l4.5-348c.2-13.9-4.1-27.4-11.7-37-3.8-4.9-12-13-23.9-13.2-19.7 0-36.5 22.5-36.8 49.2l-4.5 348c-.2 12.3-10.2 22.2-22.5 22.2h-.3L105 470z"/>
        </svg>
    )
}

export default PlusIcon;
