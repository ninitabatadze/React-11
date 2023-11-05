import React, { useEffect, useState } from 'react';

const PageUpdateAlert = () => {
    const [updateDetected, setUpdateDetected] = useState(false);

    useEffect(() => {
        alert('Page loaded');

        if (updateDetected) {
            alert('Update detected on the page');
        }
    }, [updateDetected]);

    const handleUpdateClick = () => {
        setUpdateDetected(true);
    };
    return (
        <div
            style={{
                backgroundColor: '#e76565',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                color: 'black',
            }}
        >
            <h1> PAGE UPDATE </h1>
            <button
                style={{
                    padding: '10px 5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    color: 'black',
                    backgroundColor: '#f99696',

                }}
                onClick={handleUpdateClick}
            >
                Click On It
            </button>
        </div>
    );
};

export default PageUpdateAlert;
