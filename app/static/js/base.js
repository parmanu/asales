/**
 * @fileoverview This file is the entry point of the application.
 */


goog.provide('asales.base');

goog.require('goog.dom');
goog.require('asales.DiscountedItems');
goog.require('asales.Items');
goog.require('goog.array');
goog.require('goog.object');


/**
 * An array of categories.
 * @type {Array.<string>}
 */
asales.base.categories = null;


/**
 * Initializes all the objects.
 * @param {Array.<string>} categories An array of categories.
 * @constructor
 * @export
 */
asales.base = function(categories) {
 asales.base.categories = categories;
 var discountedItemsEl = goog.dom.getElement('asales-discounted-items');
 if (discountedItemsEl) {
   goog.object.forEach(categories, function(category) {
     var discountedItemsObj = new asales.DiscountedItems(category);
   });
 }

 var itemsEl = goog.dom.getElement('asales-items-page');
 if (itemsEl) {
   var itemsObj = new asales.Items();
 }
};


// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('asales.base', asales.base);
