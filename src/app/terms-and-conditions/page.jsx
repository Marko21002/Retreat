"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-serif text-[#64625B] mb-8">Terms and Conditions</h1>
      
      <div className="space-y-6 text-[#64625B]/80 font-sans">
        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">1. Introduction</h2>
          <p>Welcome to Schloss Thalheim. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">2. Definitions</h2>
          <p>"Website" refers to Schloss Thalheim, accessible from www.schloss-thalheim.at</p>
          <p>"Service" refers to the Website and all services provided by Schloss Thalheim.</p>
          <p>"User," "You," and "Your" refer to the individual accessing or using the Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">3. Intellectual Property Rights</h2>
          <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Schloss Thalheim and is protected by European and international copyright laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">4. User Obligations</h2>
          <p>Users agree to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide accurate and complete information</li>
            <li>Use the website in compliance with all applicable laws</li>
            <li>Not engage in any activity that may disrupt the service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">5. Data Protection</h2>
          <p>We process your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable European data protection laws. For detailed information about how we handle your data, please refer to our Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">6. Booking and Cancellation</h2>
          <p>All bookings are subject to our booking terms and conditions, which will be provided at the time of booking. Cancellation policies may vary depending on the type of service booked.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">7. Limitation of Liability</h2>
          <p>Schloss Thalheim shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">8. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of Austria, without regard to its conflict of law provisions.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">9. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new terms on this page.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-[#64625B] mb-4">10. Contact Information</h2>
          <p>For any questions about these Terms and Conditions, please contact us at:</p>
          <p className="mt-2">
            Schloss Thalheim<br />
            Thalheim 1<br />
            3141 Kapelln, Austria<br />
            Email: info@schloss-thalheim.at<br />
            Phone: +43 2275 5575
          </p>
        </section>

        <section className="mt-8 pt-8 border-t border-[#64625B]/20">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </div>
    </div>
  );
} 