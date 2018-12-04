
tbod = '.tbody > tr'
total = 0
for (let i = 0; i < $(tbod).length; i++) {
	//console.log($(tbod+':eq('+i+') td:eq(5)').text)
	if(!!$(tbod+':eq('+i+') td:eq(4)')[0].innerText.match('OK\\(100\\)')) {
		str=$(tbod+':eq('+i+') td:eq(5)')[0].innerText.match('Valid: (.+?) Millisecond')[1]
		total += parseInt(str)
		console.log(i + ": " + str)
	}
}
console.log('total: '+total/1000)


pages =
`2341.434
2169.614
2538.547
1982.542
2560.732
2061.174
962.052`
pages.replace(/\n/g,"+")
/*
213.78933333333333 +              
525.9368888888889 +
512.99 +
499.069 +
507.116 +
536.147 +
452.97

/* 10-31 => 11-27
 2eme essai 
 pasge 8

2341.434
2169.614
2538.547
1982.542
2560.732
2061.174
962.052

page 2
*/


/*303056+360028+308536+367078+181163+188637+205067+180664+247205 = 2341434