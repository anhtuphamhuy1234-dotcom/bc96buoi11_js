document.querySelector("button").onclick 
=function(){
    alert("Bạn vừa bấm đăng nhập")
}
console.log(1+1)
console.log("2")
console.error("Lỗi ")
console.info("Thông tin")
console.warn("Cảnh báo")
let students = [
    "Tú",
    "Khang",
    "Thịnh",
    "Nhi" ,
    "Tùng"
 ] ;
console.table(students) ;
// biến trong js
// let : tên biến , age : tên biến , 25 : giá trị
let age = 18 ;
console.log(age)
// Nối chuỗi
console.log("age : "+age)
// thay đổi giá trị
age = 36
console.log("Age sau khi thay đổi : "+age)
// const = api_url
const Pi = 3.14 ; //const là hằng số , ko đc gán lại gtri khác  
// Quy tắc đặt tên biến :
// Bắt đầu bằng chữ , _ , $
// Ko chứa kí tự đặc biệt
// Ko bắt đầu bằng số , ko có khoảng trắng
// Ko phải là từ khóa (VD : let , var , console , math ...)
// Quy ước :
// Đặt tên biến có ý nghĩa , ngắn gọn
// Biến ko đặt trùng tên

// Cho nhập vào tên và log ra tên người đó
// let ten = prompt()
// console.log("Xin chào : " + ten)
// let nghe = prompt("Bạn làm nghề gì : ")
// console.log("Xin chào : " + nghe)
// // Yêu cầu nhập cạnh hình vuông , tính diện tích
// let canh = prompt("Cạnh : ")
// console.log("Diện tích hình vuông : " +(canh*canh))
// + , - , * , /
console.log("===== Toán tử số học =====")
let a = 10 
let b = 20 
let hieu = a - b 
let thuong = a * b
let tich = a / b
let mod = a % b //chia lấy dư
console.log("a + b = ", a+b)
console.log("a - b = ", hieu)
console.log("a * b = "+ thuong)
console.log("a / b = "+ tich)
console.log("a % b = " , mod)
let so1 = prompt("Nhập số thứ nhất : ")
let so2 = prompt("Nhập số thứ hai : ")
console.log(so1+so2) //Nối chuỗi
console.log("===== Ép kiểu =====")
console.log(Number(so1)+Number(so2)) //Ép kiểu
