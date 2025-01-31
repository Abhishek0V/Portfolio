import React from 'react'
import '../CSS/contact.css'

const Contact = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-container">

        
            <div class="footer-column">
                <h3>Contact Us</h3>
                <p>Email: support@example.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Street, City, Country</p>
            </div>

        
            <div class="footer-column">
                <h3>Quick Links</h3>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>


            <div class="footer-column">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#" target="_blank">🌐</a>
                    <a href="#" target="_blank">📘</a>
                    <a href="#" target="_blank">🐦</a>
                    <a href="#" target="_blank">📷</a>
                </div>
            </div>

        </div>

        <div class="copyright">
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Contact
