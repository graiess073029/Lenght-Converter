var convert_array  =  
["mm-mm",1,0,
 "mm-cm",0.1,1,
 "mm-dm",0.01,2,
 "mm-m",0.001,3,
 "mm-dcm",0.0001,4,
 "mm-hm",0.00001,5,
 "mm-km",0.000001,6,
 "cm-mm",10,0,
 "cm-cm",1,0,
 "cm-dm",0.01,1,
 "cm-m",0.01,2,
 "cm-dcm",0.001,3,
 "cm-hm",0.0001,4,
 "cm-km",0.00001,5,
 "dm-mm",100,0,
 "dm-cm",10,0,
 "dm-dm",1,0,
 "dm-m",0.1,1,
 "dm-dcm",0.01,2,
 "dm-hm",0.001,3,
 "dm-km",0.0001,4,
 "m-mm",1000,0,
 "m-cm",100,0,
 "m-dm",10,0,
 "m-m",1,0,
 "m-dcm",0.1,1,
 "m-hm",0.01,2,
 "m-km",0.001,3,
 "dcm-mm",10000,0,
 "dcm-cm",1000,0,
 "dcm-dm",100,0,
 "dcm-m",10,0,
 "dcm-dcm",1,0,
 "dcm-hm",0.1,1,
 "dcm-km",0.01,2,
 "hm-mm",100000,0,
 "hm-cm",10000,0,
 "hm-dm",1000,0,
 "hm-m",100,0,
 "hm-dcm",10,0,
 "hm-hm",1,0,
 "hm-km",0.1,1,
 "km-mm",1000000,0,
 "km-cm",100000,0,
 "km-dm",10000,0,
 "km-m",1000,0,
 "km-dcm",100,0,
 "km-hm",10,0,
 "km-km",10,0]


function test_boucle(fromu,tou,input_value){
    var from_input_value = input_value;
    var conver = fromu + "-" + tou;
    var index_convert = convert_array.indexOf(conver);
    var taux_convert = convert_array[index_convert + 1];
    var result = parseFloat(from_input_value * taux_convert);
    var final_result = result.toFixed(convert_array[index_convert + 2]);
    document.getElementById("result_h1").textContent =  final_result + " " + tou;
}

