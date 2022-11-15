var convert_array  =  
["mm-mm",1,0,
 "mm-cm",0.01,2,
 "mm-dm",0.0001,4,
 "mm-m",0.000001,6,
 "mm-dcm",0.00000001,8,
 "mm-hm",0.0000000001,10,
 "mm-km",0.000000000001,12,
 "cm-mm",100,0,
 "cm-cm",1,0,
 "cm-dm",0.001,2,
 "cm-m",0.00001,4,
 "cm-dcm",0.000001,6,
 "cm-hm",0.00000001,8,
 "cm-km",0.0000000001,10,
 "dm-mm",1000,0,
 "dm-cm",100,0,
 "dm-dm",1,0,
 "dm-m",0.01,2,
 "dm-dcm",0.0001,4,
 "dm-hm",0.000001,6,
 "dm-km",0.00000001,8,
 "m-mm",100000,0,
 "m-cm",10000,0,
 "m-dm",100,0,
 "m-m",1,0,
 "m-dcm",0.01,2,
 "m-hm",0.0001,4,
 "m-km",0.000001,6,
 "dcm-mm",1000000,0,
 "dcm-cm",100000,0,
 "dcm-dm",10000,0,
 "dcm-m",100,0,
 "dcm-dcm",1,0,
 "dcm-hm",0.01,2,
 "dcm-km",0.0001,4,
 "hm-mm",10000000,0,
 "hm-cm",1000000,0,
 "hm-dm",100000,0,
 "hm-m",10000,0,
 "hm-dcm",100,0,
 "hm-hm",1,0,
 "hm-km",0.01,2,
 "km-mm",1000000000000,0,
 "km-cm",10000000000,0,
 "km-dm",100000000,0,
 "km-m",1000000,0,
 "km-dcm",10000,0,
 "km-hm",100,0,
 "km-km",1,0]


function test_boucle(fromu,tou,input_value){
    var from_input_value = input_value;
    var conver = fromu + "-" + tou;
    var index_convert = convert_array.indexOf(conver);
    var taux_convert = convert_array[index_convert + 1];
    var result = parseFloat(from_input_value * taux_convert);
    var final_result = result.toFixed(convert_array[index_convert + 2]);
    var displayed = final_result + " " + tou;
    document.getElementById("result_h1").textContent = displayed;
    var carre = document.createElement("sup");
    carre.textContent = "2";
    document.getElementById("result_h1").append(carre)
}

