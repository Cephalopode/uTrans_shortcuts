
tbod = '.tbody > tr'
total = 0
ren = ""
for (let i = 0; i < $(tbod).length; i++) {
	//console.log($(tbod+':eq('+i+') td:eq(5)').text)
	if(!!$(tbod+':eq('+i+') td:eq(4)')[0].innerText.match('OK\\(100\\)')) {
		id = parseInt($(tbod+':eq('+i+') td:eq(0)')[0].innerText)
		if(id >= 10292 && id <= 11116) {
			str=$(tbod+':eq('+i+') td:eq(5)')[0].innerText.match('Valid: (.+?) Millisecond')[1]
			total += parseInt(str)
			//console.log(i + ": " + str)
			renwuId = $(tbod+':eq('+i+') td:eq(0)')[0].innerText
			ren += ("\n" + renwuId)
		}
	}
}
console.log(ren)
console.log('total: '+total/1000)


pages =
`509.027
1035.981
1725.669
3050.83
792.017`
eval(pages.replace(/\n/g,"+"))/3600*700

/* 
13715.791
*/

/*
 pasge 8
1913.565 2341.434
489.617 962.052
page 2

/* 10-31 => 11-27
 2eme essai 
 pasge 8

1913.565 
2169.614
2538.547
1982.542
2560.732
2061.174
489.617 

page 2
*/


/*303056+360028+308536+367078+181163+188637+205067+180664+247205 = 2341434

4616.095 / 3600 * 800 = 3248.02
========================

debut（2821） => 11116
1334.62
3050.83
792.017
= 1150.548 (mais elle m'a donne 1059)
=======================


11118 => 17399
3047.9535 元 （mais elle m'a donne 3248)

17420 => 22142
962.61 元 (mais elle m'a donne 962)




First month error :
// 509.027
// 1035.981
// 1725.669
// 3050.83
// 792.017
// = 1383.1852222222221 元   (mais elle m'a donne juste 1059)


