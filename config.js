/* ========================================================================
 * Payment form with Stripe
 * ========================================================================
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Yuji Ogihara
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * ======================================================================== */

'use strict';

// Load environment variables from the `.env` file
require('dotenv').config();

module.exports = {

  // Sendgrid - Mail delivery
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    templateId_toPayer:process.env.SENDGRID_TEMPLATE_ID_TO_PAYER,
    templateId_toAdmin:process.env.SENDGRID_TEMPLATE_ID_TO_ADMIN,
  },  
  amount: process.env.PAYMENT_AMOUNT,
  stripe: {
    // The two-letter country code of your Stripe account (required for Payment Request).
    country: 'JP',
    // API version to set for this app (Stripe otherwise uses your default account version).
    apiVersion: '2018-02-06',
    // Use your test keys for development and live keys for real charges in production.
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
  },

  email: {
    from_address:   process.env.EMAIL_FROM_ADDRESS,
    from_name:      process.env.EMAIL_FROM_NAME,
    admin_address:  process.env.EMAIL_ADMIN_ADDRESS,
    admin_name:     process.env.EMAIL_ADMIN_NAME,
  },
  sheet: {
    credentials: process.env.GOOGLE_CLOUD_CREDENTIALS,
    id: process.env.GOOGLE_SHEET_ID,
  },
  port: process.env.PORT || 8000,
};
