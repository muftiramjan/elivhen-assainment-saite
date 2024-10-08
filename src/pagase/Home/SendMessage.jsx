import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendMessage = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const validateMessage = (message) => {
        if (message.trim() === '') {
            return 'Message cannot be empty.';
        }
        if (message.length < 10) {
            return 'Message must be at least 10 characters long.';
        }
        return '';
    };

    const sendMessage = () => {
        const validationError = validateMessage(message);
        if (validationError) {
            setError(validationError);
            toast.error(validationError);
            return;
        }

        setLoading(true);
        setError('');
        axios.post('https://car-doctor-server-nine-gilt.vercel.app/send-message', { message })
            .then(response => {
                toast.success('Message sent successfully!');
                setMessage(''); 
                setLoading(false);
            })
            .catch(error => {
                toast.error('Failed to send message.');
                console.error(error);
                setLoading(false);
            });
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            margin: '50px auto'
        }}>
            <header style={{ marginBottom: '20px', textAlign: 'center' }}>
                <h1 style={{
                    color: '#333',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '24px',
                    marginBottom: '10px'
                }}>Welcome to Our Messaging Service</h1>
                <p style={{
                    color: '#555',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '16px'
                }}>
                    Use the form below to send us a message. We value your feedback and will get back to you as soon as possible.
                </p>
            </header>
            <h2 style={{
                marginBottom: '20px',
                color: '#333',
                fontFamily: 'Arial, sans-serif'
            }}>Send a Message</h2>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                cols={50}
                placeholder="Type your message here..."
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    fontFamily: 'Arial, sans-serif',
                    marginBottom: '20px'
                }}
            />
            {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}
            <button
                onClick={sendMessage}
                disabled={loading}
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
                {loading ? (
                    <div style={{
                        border: '4px solid #f3f3f3',
                        borderRadius: '50%',
                        borderTop: '4px solid #3498db',
                        width: '16px',
                        height: '16px',
                        marginRight: '10px',
                        animation: 'spin 2s linear infinite'
                    }}></div>
                ) : 'Send'}
            </button>
            <ToastContainer />
        </div>
    );
};

export default SendMessage;

