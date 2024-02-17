// N 1 /////////////

// String.prototype.UpperCase = function (){
//     let upper = `ABCDEFGHIJKLMNOPQRSTUVWYZ`
//     let lower = `abcdefghijklmnopqrstuvwxyz`
//     let str = ""
//     for(let i=0;i<this.length;i++){
//         let el = this[i]
//         if(lower.includes(el)){
//             el = upper[lower.indexOf(el)]
//         }
//         str+=el 
//     }
//     return str
// }
// let FullName =`John Smith`
// let res=FullName.UpperCase()
// console.log(res);








// Number tofixed

// Number.prototype.fixed = function(decimals) {
//     let num = this.valueOf(); 
//     let roundedNum = num.toFixed(decimals); 
//     return Number(roundedNum); 
// }

// let numObj = 12455.55;
// let res = numObj.fixed();
// console.log(res);

//  Number round

//  Number.prototype.round = function(decimals) {
//     if (typeof decimals !== 'number') decimals = 0;
//     let num = this.valueOf();
//     let rounded = num.toFixed(decimals);
//     return Number(rounded);
// }

// let numobj = 15515151.545454;
// let res = numobj.round();
// console.log(res); 

// Number isSquare

// Number.prototype.isSquare = function(decimals){
//     num =this.valueOf()
//     if(Math.sqrt(num)%1==0){
//         return true
//     }else{
//         return false
//     }
// }
// let numObj = 81
// let res = numObj.isSquare()
// console.log(res);

// Number count 

// Number.prototype.count = function() {
//     let num = Math.abs(this).toString(); 
//     return num.length; 
// };

// let num = [4454, 454545, 45, 454, 48, 78, 7,5555];
// for (let i = 0; i < num.length; i++) {
//     let res = num[i].count(); // count metodini ishga tushiramiz
//     console.log("Musbat son " + num[i] + " " + res + " xonali ekkan");
// }

// Number sum 

// Number.prototype.sum = function(){
//     let s = 0; 
//     let num = Math.abs(this).toString(); 
//     for(let i = 0; i < num.length; i++){
//         s += parseInt(num[i]); 
//     }
//     return s; 
// }

// let num = [4454, 454545, 45, 454, 48, 78, 7999, 5555];
// let totalSum = 0; 
// for(let i = 0; i < num.length; i++){
//     totalSum += num[i].sum(); 
// }
// console.log(totalSum);



// Constructorlar yaratilsin

// function Animal(name, speed, limitAge, prototype) {
//     this.name = name;
//     this.speed = speed;
//     this.limitAge = limitAge;
//     this.prototype = prototype;
//     this.info = function() {
//       return "Nomi: " + this.name + ", Tezligi: " + this.speed + ", Chegarasi: " + this.limitAge + ", Prototipi: " + this.prototype;
//     };
//   }
  
//   let lion = new Animal("Wolf", 80, 10, "");
//   let eagle = new Animal("Eagle", 120, 25, "Bird");
  
//   console.log(lion.info());
//   console.log(eagle.info());


//  2

// function Student(name, course, years, university) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;
//   this.prototype = 2018; 
  
//   this.leftYears = function() {
//     let currentYear = new Date().getFullYear();
//     let prototypeYear = parseInt(this.prototype);
    
//     if (!isNaN(prototypeYear)) {
//       return prototypeYear - currentYear;
//     } else {
//       return false;
//     }
//   }
// }

// let student = new Student('sherzod', 2, 2004, 'TATU',2030);

// console.log("Isim:", student.name);
// console.log("Course:", student.course);
// console.log("Yıl:", student.years);
// console.log("University:", student.university);
// console.log("left yers:", student.leftYears());


// 3 

// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;
//   this.calculatePrototype = function() {
//         let protatipe = 23;
//     if (!isNaN(protatipe)) {
//       return currentYear - protatipe;
//     } else {
//       return false;
//     }
//   }
// }

// let person = new Person("Ali", 15, 2024); 
// console.log("Isim", person.name);
// console.log("Age", person.age);
// console.log("Joriy yil ", person.currentYear);
// console.log("Protatipe", person.calculatePrototype()); 


// N4

// function Ishchi(isim, oylik, ishNomi, protatip) {
//   this.isim = isim;
//   this.oylik = oylik;
//   this.ishNomi = ishNomi;
//   this.protatip = protatip;

//   this.oylikniOshirish = function(percent) {
//     let oshirilganOylik = this.oylik * (1 + percent / 100);
//     return oshirilganOylik;
//   }
// }

// let ishchi = new Ishchi("John Doe", 5000, "Dasturchi", "2015");

// console.log("Yangi oylik:", ishchi.oylikniOshirish(10));



// N 5

// function Doira(uzunlik, balandlik) {
//   this.uzunlik = uzunlik;
//   this.balandlik = balandlik;

//   this.getMaydon = function() {
//     return this.uzunlik * this.balandlik;
//   }

//   this.getPerimetr = function() {
//     return 2 * (this.uzunlik + this.balandlik);
//   }
// }


// let doira = new Doira(5, 3);

// console.log("Doira maydoni:", doira.getMaydon());
// console.log("Doira perimetri:", doira.getPerimetr());
