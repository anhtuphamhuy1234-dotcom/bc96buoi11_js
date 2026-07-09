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
// let so1 = prompt("Nhập số thứ nhất : ")
// let so2 = prompt("Nhập số thứ hai : ")
// console.log(so1+so2) //Nối chuỗi
// console.log("===== Ép kiểu =====")
// console.log(Number(so1)+Number(so2)) //Ép kiểu
// boolean : true , false
//undefined : ko xác định
//null : hiện tại ko có giá trị
// typeof : ktra kiểu dữ liệu
// Number(prompt("NHập số thứ ba : ")) //Nhập liệu xong chuyển vè số 
console.log(parseInt("123"));
console.log(parseInt("123abc"));
console.log(parseFloat("19.6"));
console.log(parseInt("19.6")); //chỉ in ra 19
console.log(typeof 123);
let bien1 = "Hello"
console.log(typeof bien1);
console.log(typeof undefined);
console.log(typeof null);
// Nối chuỗi
// + :
// ` ` : template string
let hoten = "Anh Tú"
let tuoi = "25"
let nghe = "IT"
console.log("Họ tên : "+ hoten +" ");
console.log(`Họ tên : ${hoten} , Tuổi : ${tuoi} , Nghề : ${nghe} `);
// Thư viện math
console.log(Math.PI);
console.log(Math.floor(9.4)); //Làm tròn xuống
console.log(Math.ceil(9.5)) //Làm tròn lên
console.log(Math.round(9.6)); //Làm tròn bình thường 
console.log(Math.round(9.4)); //Làm tròn bình thường
console.log(Math.random());
console.log(Math.floor(Math.random()*10)); //random 0 tới 9
// random : ra kết quả từ 0 -> 1
// random*10 : ra kết quả từ 0 -> 10
console.log("===Toán tử Gán===");
// += , -= , /= , *= , %=
let x = 8 
x += 2 //x = x + 2
console.log(x);
let y = 5
// Hậu tố : y++ , y-- 
// tăng sau : dùng trước r ms tăng
// Tiền tố : ++y , --y
// tăng trước : tăng r ms dùng
console.log("y" , y);
console.log("y++" , y++); //tăng 1 đơn vị
console.log("y" , y);
console.log("y--" , y--); // giảm 1 đơn vị
console.log("y" , y);
let z = 10
console.log("z" , z);
console.log("++z" , ++z);
console.log("--z" , --z);
// TINH LUONG
// Input : Số ngày làm , lương 1 ngày
let luong1ngay = 100000
let songaylam = Number(prompt("Nhập số ngày làm : "))
// Process : lương = songaylam * luong1ngay
let luong = songaylam * luong1ngay 
// Output : lương
console.log(`Lương của bạn khi làm ${songaylam} ngày là ${luong.toLocaleString()} VNĐ `);