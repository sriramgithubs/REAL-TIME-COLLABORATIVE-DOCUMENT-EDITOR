# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

COMPANY: CODTECH IT SOLUTIONS

NAME: SRIRAM P

INTERN ID: CT12TDV

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 8 WEEKS

MENTOR: NEELA SANTOSH

# DESCRIPTION FOR TASK
      Introduction
A real-time collaborative document editor allows multiple users to edit the same document simultaneously while ensuring changes are instantly reflected across all connected clients. This implementation is built using React.js, Node.js, Socket.io, and MongoDB, providing a seamless and efficient collaborative text editing experience.

This document provides an overview of the backend and frontend architecture, highlighting key functionalities such as WebSocket-based real-time updates, auto-saving, and document persistence.

Backend (Node.js + MongoDB + Socket.io)
The backend is responsible for:
Managing document data (storing and retrieving from MongoDB).
Handling WebSocket connections using Socket.io for real-time updates.
Ensuring data persistence and automatic saving at intervals.

Key Components
MongoDB Schema (Document Model)
The backend uses Mongoose, an ODM (Object Document Mapper), to define the document schema:
Client requests a document (get-document), and if it doesn’t exist, a new one is created.
Edits (send-changes) are broadcast to all clients except the sender.
Auto-save (save-document) stores changes in the database periodically.

Database Connection
MongoDB is used for persistent storage, allowing users to reopen and continue editing documents.

Frontend (React.js + Quill.js + Socket.io Client)
The frontend provides an intuitive interface for users to create and edit documents in real-time.

Key Components
Routing & Document Initialization
The App component handles routing, ensuring each document has a unique ID.
When users visit /, they are redirected to a new unique document URL (/documents/:id).

Real-Time Text Editing (Quill.js & WebSockets)
The TextEditor component integrates Quill.js and Socket.io-client for real-time updates.
jsx
Copy
Edit
Loads the document from the server when the page opens.
Sends and receives text changes in real-time using WebSockets.
Auto-saves the document every 2 seconds if there are changes.

Conclusion
This real-time collaborative document editor efficiently handles simultaneous text editing using React, Socket.io, Quill.js, and MongoDB. It ensures:
 Real-time updates for multiple users.
 Auto-save feature to prevent data loss.
 Document persistence in MongoDB.

# OUTPUT
![Image](https://github.com/user-attachments/assets/02c516f0-778a-4ee8-ab80-8bcf3c242af3)
