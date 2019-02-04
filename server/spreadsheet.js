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
require('date-utils');

const config = require('../config');
const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = JSON.parse(config.sheet.credentials);

var Record = function() {}      

/* --- */
Record.addPayer = function(name,graduate) {
    const sheet = new GoogleSpreadsheet(config.sheet.id);
    var date = new Date();
    var formatted = date.toFormat("YYYY/MM/DD HH24:MI");
    return this.addRaw(sheet,0,{col_1: formatted, col_2: name});
}

Record.addFeedback = function(name,graduate,star,comment) {
    const sheet = new GoogleSpreadsheet(config.sheet.id);

    var date = new Date();
    var formatted = date.toFormat("YYYY/MM/DD HH24:MI");
    return this.addRaw(sheet,1,
			{col_1: formatted, col_2: name,
			col_3: star, col_4:comment});
}

Record.addRaw = function(sheet,number,data) {
    sheet.useServiceAccountAuth(credentials, function(err){
	if (err) {
	    console.log(err);
	    return ;
	}
	sheet.getInfo( function( err, sheet_info ){
	    if (err) {
			console.log(err);
			return ;
	    }
	    var sheet1 = sheet_info.worksheets[number];
	    if (sheet1 == null) {
			console.log('No sheet found.') ;
			return;
	    }	
	    sheet1.addRow(data,function(err){
			if (err){
				console.log(err);
				return ;
				}
			});
		});
    })
}

module.exports = Record;
