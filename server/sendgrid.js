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

const config 	= require('../config');

/* Address and name of email from */
const from_address 	= config.email.from_address ;
const from_name 	= config.email.from_name ;
const admin_address = config.email.admin_address ;
const admin_name 	= config.email.admin_name ;

/* Sendgrid */
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendgrid.apiKey);
const template_id_to_payer = config.sendgrid.templateId_toPayer;
const template_id_to_admin = config.sendgrid.templateId_toAdmin;

/* -- */
var Email = function() {}

/* Email to payer, using template */
Email.sendToPayer = function(to,name) {
	console.log('Email to:' + to + '(' + name + ')');

	// Configure the substitution tag wrappers globally
	sgMail.setSubstitutionWrappers('%', '%');
	const msg = {
		to: to,
		from: from_address,
		subject: 'D',		/* Unused */
		text: 'D',			/* Unused */
		html: '<p>D</p>',	/* Unused */
		templateId: template_id_to_payer,
		substitutions: {
			name: name,		/* Full name, overwritten on template string */
		}
	}
	sgMail.send(msg);
}

/* Email to payer, using template */
Email.sendToAdmin = function(name) {

	// Configure the substitution tag wrappers globally
	sgMail.setSubstitutionWrappers('%', '%');
	const msg = {
		to: admin_address,
		from: from_address,
		subject: 'D',		/* Unused */
		text: 'D',			/* Unused */
		html: '<p>D</p>',	/* Unused */
		templateId: template_id_to_admin,
		substitutions: {
			name: name,		/* Full name, overwritten on template string */
		}
	}
	sgMail.send(msg);
}


module.exports = Email;