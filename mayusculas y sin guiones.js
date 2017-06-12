var area = row["Area"];
var arr = area.split('_');
var resultado = '';
for (var i = 0; i <arr.length;i++){
var te =  (new Packages.java.lang.String(arr[i]));
	resultado = resultado +  new Packages.java.lang.Character.toString(te.charAt(0)).toUpperCase() + te.substring(1);
	if (i < arr.length - 1) {
		resultado = resultado + ' ';
	}
}
resultado;

var area = row["Area"];
var arr = area.split('_');
var resultado = '';
for (var i = 0; i <arr.length;i++){
var te =  (new Packages.java.lang.String(arr[i]));
	resultado = resultado +  new Packages.java.lang.Character.toString(te.charAt(0)).toUpperCase() + te.substring(1);
	if (i < arr.length - 1) {
		resultado = resultado + ' ';
	}
}
resultado;



var roe = new Array(row["roedores"]);
var  text, fLen;
fLen = roe.length;
for (i = 0; i < fLen; i++) {
    text = fruits[i] + ",";
}
return text;