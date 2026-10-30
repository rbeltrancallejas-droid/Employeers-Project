import React from 'react';

export default function Usuarios({ user }) {
  const initialFirst = user.name.first ? user.name.first.charAt(0).toUpperCase() : '';
  const initialLast = user.name.last ? user.name.last.charAt(0).toUpperCase() : '';
  const avatarInitials = `${initialFirst}${initialLast}`;

  const company = "Tech Solutions Inc.";

  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar-initials">
          {avatarInitials}
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="user-name">{user.name.first} {user.name.last}</h3>
        <p className="user-location">{user.location.city}, {user.location.country}</p>
        
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">✉️</span>
            <span className="info-text">{user.email}</span>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <span className="info-text">{user.phone}</span>
          </div>
          <div className="info-item">
            <span className="icon">🏢</span>
            <span className="company-tag">{company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}