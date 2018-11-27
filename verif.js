
tbod = '.tbody > tr'
total = 0
for (let i = 0; i < $(tbod).length; i++) {
	//console.log($(tbod+':eq('+i+') td:eq(5)').text)
	if(!!$(tbod+':eq('+i+') td:eq(4)')[0].innerText.match('OK\\(100\\)')) {
		str=$(tbod+':eq('+i+') td:eq(5)')[0].innerText.match('Valid: (.+?) Millisecond')[1]
		total += parseInt(str)
	}
}
console.log('total: '+total/1000/3600*800)

/*
213.78933333333333 +
525.9368888888889 +
512.99 +
499.069 +
507.116 +
536.147 +
452.97

*/