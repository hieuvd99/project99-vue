<template>
    <div class="content-course">
        <h1 class="title-content-course">MVC</h1>
        <p class="text-content">Mô hình MVC giúp quản lý, bảo trì dễ dàng, frontend và backend độc lập làm việc với nhau, code rõ ràng</p>
        <h5 class="title-child">Định nghĩa</h5>
        <div class="text-content">
            <p>MVC (Model, View, Controller)</p>
            <ul>
                <li><b>Model</b>: Liên quan đến dữ liệu và logic của đối tượng, thao tác với database.</li>
                <li><b>View</b>: Là phần hiển thị dữ liệu.</li>
                <li><b>Controller</b>: Nhận yêu cầu và xử lý, tương tác, cập nhật và trả về kết quả.</li>
            </ul>
        </div>
        <div class="image-content-course">
            <img src="@/assets/image/learns/spring/mvc.jpg">
        </div>

        <h5 class="title-child">Luồng hoạt động</h5>
        <div class="text-content">
            <p>Luồng hoạt động khi nhận một yêu cầu từ client đến server</p>
            <ul style="list-style: auto;">
                <li><b>Client gửi yêu cầu</b>: Client gửi yêu cầu thông qua URL.</li>
                <li><b>DispatcherServlet</b>: DispatcherServlet nhận yêu cầu của Client và quyết định controller nào xử lý yêu cầu.</li>
                <li><b>Controller Handling</b>: Controller xử lý, thao tác và trả về kết quả.</li>
                <li><b>ModelAndView</b>: Controller trả về đối tượng cần hiển thị.</li>
                <li><b>View Resolution</b>: DispatcherServlet dựa vào loại dữ liệu trả về (JSP, Thymeleaf, JSON,...) để tìm View tương ứng.</li>
                <li><b>Hiển thị kết quả</b>: View nhận dữ liệu tử ModelAndView và hiện thị.</li>
                <li><b>Phản hồi cho Client</b>: Trả lại kết quả cho Client.</li>
            </ul>
        </div>
        
        <h5 class="title-child">Ưu điểm/Nhược điểm</h5>
        <div class="text-content">
            <p>Ưu điểm: Dễ kiểm soát, quản lý và phát triển.</p>
            <p>Nhược điểm: Cồng kềnh đối với dự án nhỏ.</p>
        </div>

    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>