# Guide line:
> Điều kiện tiên quyết đã cài đặt mongodb
#### Bước 1: Vào thư mục của project bật cmd và gõ: npm i (install các dependency của project)
#### Bước 2: Chạy file mongod.exe ( trong thư mục cài đặt của mongodb vào server => 3.x => bin => mongod.exe )
#### Bước 3: Bật lại cmd ở thư mục của project và gõ: node app, khi này server sẽ được chay ở local
# Các thư viện chính đã sử dụng:
| Name       | Mục đích|
|------------|---------|
|Mongoose| Đóng vai trò query builder để giúp tương tác giữa NodeJS và Mongodb|
|PassportJS| Dùng trong các thao tác authenticate|
|Bcrypt| Dùng để mã hóa password khi lưu vào database|
|MomentJS| Giúp đồng bộ hóa thời gian|
|Ejs| Đóng vai trò là view engine giúp trong quá trình render html|
