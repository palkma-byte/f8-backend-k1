RESTFul API

- URL: Server API + PATH
Ví dụ: https://api.fullstack.edu.vn/users

- HTTP Method:

* GET -> Lấy dữ liệu từ Server
* POST -> Gửi dữ liệu mới lên Server
* PUT -> Đè dữ liệu đã có 
* PATCH -> Cập nhật dữ liệu (Không ghi đè)
* DELETE -> Xóa dữ liệu 

- Endpoint: URL + Method

* GET /users
* POST /users

 Chú ý khi thiết kế API

 Response Message thường sẽ cần phải cho chạy qua 1 bộ lọc tên là transformer

 Tác dụng của transformer: Xử lý, thay đổi lại key của json, bổ sung thêm key mới

 Giả sử tình huống:

 - Front-end đang sử dụng API có keu ở dạng camelCase
 - Back-end ddang thiết kế Database ở dạng underscrore

 => Tạo ra 1 transformer để rename các field trong database thành dạng camelCase 
 

