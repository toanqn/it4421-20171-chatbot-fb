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
---
> Cách import export db của mongo:

Điều kiện tiên quyết: Cài đặt biến môi trường của mongodb vào window (linux không rõ): 
[Link youtube hướng dẫn](https://www.youtube.com/watch?v=0ws3oIyqieY)
Sau khi cài xong thì mở 1 tab cmd và gõ mongod.exe để chạy db (tab này phải luôn chạy trong quá trình làm việc với db)
* Cách export dữ liệu:
Vào thư mục chứa project mở cmd: mongodump --host localhost --port 27017
Khi này trong thư mục sẽ xuất hiện folder dump chứa dữ liệu đã được export
* Cách import dữ liêu:
mongorestore -d project3 dump/project3

