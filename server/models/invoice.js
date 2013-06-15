// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var invoiceSchema = Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true
	},
	file: {
		type: Schema.Types.ObjectId,
		ref: 'File'
	},
	date: {
		type: Date,
		required: true
	}
});

// export the invoice model
module.exports = db.model('Invoice', invoiceSchema);