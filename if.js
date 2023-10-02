
// bai01

// // câu a
// function kiemtrasoamduong(n) {
//     if (n<0) {
//         console.log ('n la so am')
//     }
//     else if (n>0) {
//         console.log('n la so duong')
//     }
//     else {
//         console.log('n la so 0')
//     }
// }

// kiemtrasoamduong(-5)

// // câu b
// function kiemtrachanle (a) {
//     console.log(a%2)
//     if (a%2 ==0) {
//         console.log ('a la so chan')
//     }
//     else {
//         console.log('a la so le')
//     }
// }

// kiemtrachanle(5)

// // câu c
// function timsolonnhat(a,b,c) {
//     if (a>b>c || a>c>b) {
//         console.log('a la so lon nhat')
//     }
//     else if(b>a>c || b>c>a) {
//         console.log('b la so lon nhat')
//     }
//     else {
//         console.log (' c la so lon nhat')
//     }
// }

// timsolonnhat(4,6,9)

// câu d
// function kiemtranamnhuan(n){
//     if (n%4==0){
//         console.log(' n la nam nhuan')
//     }
//     else {
//         console.log(' n ko phai nam nhuan')
//     }
// }

// kiemtranamnhuan(2029)

// câu e
// function kiemtrakitu(x){
//     if (x == 'u' || x=== 'e'|| x==='o'|| x === 'a'|| x==='i'){
//         console.log(' x la nguyen am')
//     }
//     else {
//         console.log('x la phu am')
//     }
// }

// kiemtrakitu('h')

// bai02

// câu a
// function timnghiem(a,b,c) {
//     let denta= b**2 -4*a*c
//     console.log('dental la',denta)
//     if (a ==0 && b==0) {
//         console.log('pt vo nghiem')
//     }
//     else if (a==0) {
//         console.log ('pt có 1 nghiem')
//          let x= -c/b
//         console.log('1 nghiem la',x)
//     }
//     else if (denta <0){
//         console.log('pt vô nghiệm')
//     }
//     else  {
//         let x1=(-b+ math.sprt(denta))/(2*a)
//         let x2=(-b-math.sqrt(denta))/(2*a)
//         console.log('nghiem x1 la',x1)
//         console.log('nghiem x2 la',x2)
//     }

// }

// timnghiem(3,4,5)

// câu b

// function tinhthue(n) {
//     if (n>15) {
//         let thue = n*0.2
//         console.log ('thue thu nhap la',thue,'trieu')
//     }
//     else if (8<n<15) {
//         let thue1= n*0.15
//         console.log('thue thu nhap la',thue1,'trieu')
//     }
//     else {
//         let thue2= n
//         console.log ('thue thu nhap la',thue2,'trieu')
//     }
// }

// tinhthue(10)


// // câu c

// function xephang(a,b,c) {
//     let dtb = (a+b+c)/3
//     if (dtb >= 9) {
//         console.log ('hang A')
//     }

// }  


// câu d 

// function tinhgiacuoc(sophut) {
//     const phicodinh =25000
//     let tongchiphi =0
//     let chiphi =0
//     if (sophut >= 0 && sophut <=50){
//         chiphi =sophut*600
//     }
//     else if (sophut >50 && sophut <=200){
//         chiphi =50*600 +(sophut-50)*600
//     }
//     else if (sophut >200){
//         chiphi =50*600 +(sophut -200)*200 +150 *400
//     }

//     tongchiphi =phicodinh +chiphi
// }

// tinhgiacuoc(240)