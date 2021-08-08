var i = 0;
var txt = '#include<iostream>\nusing namespace std;\nint main()\n{\nint a=5, b = 5,sum = 0;\nsum = a+b; \nprintf("Sum of a,b = %d",sum); \nreturn 0;\n}';

var txt2 = '//Write a C++ program to input three integers and print the largest of three.\n#include<iostream>\nusing namespace std;\nint main()\n{\nint a,b,c;\ncout<<"Enter three Numbers: ";\ncin>>a>>b>>c;\ncout<<"Larger one is: ";\nif(a>b){\nif(a>c){\ncout<<a;\n}\nelse\n{\ncout<<c;\n}\n}\nelse if(b>c)\n{\ncout<<b;\n}\nelse{\ncout<<c;\n}\nreturn 0;\n}\n';
var speed = 50;
function typeWriter() {
	
  if (i < txt2.length) {
    document.getElementById("code").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}