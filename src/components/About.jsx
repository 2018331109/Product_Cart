import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 100px)', // Adjust based on footer height
        textAlign: 'center',
        padding: '20px'
      }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '2rem' }}>About Our Bookstore</h2>
        <ul style={{ fontSize: '1.2rem', listStyleType: 'disc', textAlign: 'left', maxWidth: '600px', padding: 0 }}>
          <li style={{ whiteSpace: 'nowrap' }}>
            <strong>Diverse Collection:</strong> A wide range of books for every reader's interest.
          </li>
          <li style={{ whiteSpace: 'nowrap' }}>
            <strong>Genres Available:</strong>
            <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
              <li>Time Management</li>
              <li>Sports</li>
              <li>Science</li>
              <li>Drama</li>
              <li>Business</li>
              <li>Series</li>
              <li>Novels</li>
              <li>Love Stories</li>
              <li>Fantasy</li>
              <li>Historical Fiction</li>
            </ul>
          </li>
          <li style={{ whiteSpace: 'nowrap' }}>
            <strong>Special Selections:</strong> Science and mindset books that inspire personal growth.
          </li>
          <li style={{ whiteSpace: 'nowrap' }}>
            <strong>Flexible Options:</strong> Enjoy both free and paid options to suit your learning journey.
          </li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Join us in celebrating the joy of reading!</p>
      </div>

      <Footer />
    </>
  );
}

export default About;
