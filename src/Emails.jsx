import React from 'react';
import Email from './Email';

const Emails = ({ emails, toggleStar, toggleRead }) => {
  return (
    <main className="emails">
      <ul>
        {emails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleStar={toggleStar}
            toggleRead={toggleRead}
          />
        ))}
      </ul>
    </main>
  );
};

export default Emails;