/* 
 * This is the model representation for a single supply
 */

var Bookshelf = db;

var SupplyModel = require("./supply").model;

exports.model = Bookshelf.Model.extend({
	tableName: "supplies",
	apartment: function() {
		return this.belongsToOne(ApartmentModel);
	},
});