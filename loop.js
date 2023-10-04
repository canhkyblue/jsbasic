
// câu 1

// let arr = [3,451,5,2,6,76,3,5,1243,6,4]
// let dodaimang =arr.length
// for ( let i=0; i< dodaimang; i=i+1) {
//     console.log (' phan tu thu %s =%s', i, arr[i])
// }

// let sum =0
// for ( let i=0; i< dodaimang;i=i+1){
//     sum = sum +arr[i]
//     console.log (' tong phan tư cua mang la',sum)
// }


// let max = arr[0]
// let min = arr[0]
// for( let i=0; i<dodaimang;i=i+1 ){
//     if (max < arr[i]) {
//         max = arr[i]
//     }
//     if (min > arr[i]){
//         min = arr[i]
//     }
// }

// let sum1 =0
// let dodaimang = arr.length
// for (let i=0; i<dodaimang; i=i+1){
//     sum1= sum1+ arr[i]
// }
// let trungbinhcong = sum1/ arr.length
// console.log (' trung binh cong la',trungbinhcong)

// câu e

let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
// let arr1 = arr.reverse()
// console.log (arr1)

// let arr1= []
// let j=0
// let dodaimang = arr.length
// for (let i = dodaimang -1; i>=0; i--){
//     arr1 [j] =arr[i]
//     j++
// }
//  console.log (arr1)

// câu f
// let arr = [1,2,4,6]
// let dodaimang = arr.length 
// console.log (dodaimang)
// console.log (arr[0])


// câu e 







// câu h

const dodaimang= arr.length 
// let checktangdan = true
// for(let i=0; i< dodaimang; i++){
//     if (arr[i+1] <arr[i]){
//         checktangdan = false
//     }
// }

// if (checktangdan === true){
//     console.log ('mang tang dan')
// }
// else {
//     console.log ('mang ko tang dan')
// }

// câu i
let j=0
for (let i=0; i<dodaimang; i++){
    for (let j = i +1 ; j< dodaimang; j++ ){
        if (arr[i] >arr[j]){
            bientam =arr [i]
            arr [i] = arr[j]
            arr [j]=bientam
        }
    }
}

    
//     if (arr[i] > arr [i+1]){
//         // swap (arr[i],arr[i+1]) : đổi vị trí
//         let tam = arr[i]
//         arr [i]= arr[i+1]
//         arr [i+1] =tam 
//     }
// }

// for (let j = i ; j< dodaimang; j++ ){
//     if (arr[j] >arr[j+1]){
//         bientam =arr [j]
//         arr [j] = arr[j+1]
//         arr [j+1]=bientam
//     }
// }

console.log (arr)