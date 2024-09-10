import React, { useState } from 'react';
const updatePaymentVerifiedStatus = (userEmail, eventId) => {
};

const E66d1839eb4140cd9a8a05aea9aaf570 = ({ eventsData }) => {
  const upcomingEvents = eventsData.filter(event => !event.completion);

  const handleVerifyPayment = (userEmail, eventId) => {
    updatePaymentVerifiedStatus(userEmail, eventId);
  };
  console.log(upcomingEvents)
  return (
    <div className='text-black mt-20 min-h-screen'>
      {upcomingEvents.map(event => (
        <div key={event.notificationGroup}>
          <h2>{event.name} - {event.date}</h2>
          <table border="1" cellPadding="10" style={{ marginBottom: '20px', width: '100%' }}>
            <thead>
              <tr>
                <th>Reg No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Query</th>
                <th>UPI Transaction ID</th>
                <th>Payment Verified</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {event['Registered Users'].map((user, index) => (
                <tr key={index}>
                  <td>{user.regNo}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.query}</td>
                  <td>{user.upiTransactionId}</td>
                  <td>{user.paymentVerified}</td>
                  <td>
                    {user.paymentVerified === 'N' ? (
                      <button onClick={() => handleVerifyPayment(user.email, event.notificationGroup)}>
                        Verify
                      </button>
                    ) : (
                      'Verified'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default E66d1839eb4140cd9a8a05aea9aaf570;
