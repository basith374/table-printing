var vm = new Vue({
	el: '#v-cont',
	methods: {
		printTable: function() {
			var table = this.$refs.table;
			var printWindow = window.open();
			printWindow.document.write(
				'<html>' +
				'<head><title>Print</title>' +
				'<link rel="stylesheet" href="css/bootstrap.min.css">' +
				'</head><body>' +
				table.innerHTML +
				'</body>' +
				'</html>'
			)
			printWindow.document.close();
			printWindow.onload = function() {
	    		printWindow.print();
	    		printWindow.close();
			}
		}
	},
	data: {
		items: [
			{
				id: 1,
				type: 'Cheque',
				total: 1234
			},
			{
				id: 2,
				type: 'Cash',
				total: 6574
			},
			{
				id: 3,
				type: 'Cheque',
				total: 3434
			},
			{
				id: 4,
				type: 'Cheque',
				total: 2343
			},
			{
				id: 5,
				type: 'Cash',
				total: 5657
			},
			{
				id: 6,
				type: 'RTGS',
				total: 6777
			},
			{
				id: 7,
				type: 'RTGS',
				total: 9000
			},
			{
				id: 8,
				type: 'NEFT',
				total: 8000
			},
		]
	}
});
