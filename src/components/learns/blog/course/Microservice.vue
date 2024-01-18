<template>
    <div class="content-course">
        <h1 class="title-content-course">Microservice</h1>
        <p class="text-content">Microservice là các service nhỏ giao tiếp với nhau, khác với kiến trúc Monolithic (gộp tất cả thành thành một khối).</p>

        <h5 class="title-child">Ưu điểm/Nhược điểm</h5>
        <div class="text-content">
            <p>Ưu điểm:</p>
            <ul>
                <li>Dễ nâng cấp và bảo trì: Ví dụ muốn nâng cấp service order thì chỉ cần nâng cấp service đó.</li>
                <li>Toàn bộ hệ thống vẫn hoạt động nếu một service bị lỗi: Với Monolithic nếu một service bị lỗi thì hệ thống bị lỗi.</li>
                <li>Có thể linh động công nghệ dùng cho mỗi service: Đối với Monolithic các module dùng chung một ngôn ngữ/framework.</li>
            </ul>
            <p>Nhược điểm:</p>
            <ul>
                <li>Các module giao tiếp có tốc độ không cao bằng Monolithic, ngoài ra mỗi module phải tự giải quyết các vấn đề bảo mật, lỗi kết nối,...</li>
                <li>Mỗi service sử dụng một database riêng, vì vậy việc đồng nhất dữ liệu phức tạp hơn.</li>
                <li>Khó thực thi vì vậy cần có chuyên môn, không phù hợp với các dự án nhỏ.</li>
            </ul>
        </div>

        <h5 class="title-child">Message Queue</h5>
        <div class="text-content">
            <p>Trong các hệ thống dùng kiến trúc microservice, ta sử dụng message queue để giúp các service liên hệ với nhau một cách bất đồng bộ.</p>
        </div>

    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>