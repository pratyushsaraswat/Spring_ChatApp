import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    const [error, setError] = useState(null);

    const fetchChats = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/chat', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response Headers:', response.headers);
            setChats(response.data); // Set the data to state
        } catch (error) {
            console.error("Error fetching the chats:", error);
            console.error("Request Headers:", error.config?.headers);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            <h1>ChatPage</h1>
            {error ? (
                <p style={{ color: 'red' }}>Error fetching the chats: {error}</p>
            ) : (
                chats.length > 0 ? (
                    <ul>
                        {chats.map((chat, index) => (
                            <li key={index}>{chat.message}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No chats available</p>
                )
            )}
        </div>
    );
};

export default ChatPage;
