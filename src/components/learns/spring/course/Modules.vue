<template>
    <div class="content-course">
        <h1 class="title-content-course">Modules</h1>
        <p class="text-content">Spring Framework được chia thành khoảng 20 modules.</p>
        <div class="image-content-course">
            <img src="@/assets/image/learns/spring/modules.jpg">
        </div>

        <h5 class="title-child">Core Container</h5>
        <div class="text-content">
            <p>Core Container bao gồm các modules: Beans, Core, Context, Expression Language.</p>
            <ul>
                <li><b>Beans</b> và <b>Core</b>: Cung cấp các phần cơ bản của framework, bao gồm <b>IoC</b> và <b>Dependency Injection</b>.</li>
                <li><b>Context</b>: Hỗ trợ đa ngôn ngữ và tích hợp các tính năng Java EE.</li>
                <li><b>Expression Language</b>: Hỗ trợ cho việc các toán tử logic và truy cập dữ liệu.</li>
            </ul>
        </div>

        <h5 class="title-child">Data Access/Integration</h5>
        <div class="text-content">
            <p>Data Access/Integration bao gồm các module JDBC, ORM, OXM, JMS và Transaction.</p>
            <ul>
                <li><b>JDBC</b>: Giúp giảm thiểu mã JDBC và hỗ trợ nhiều cơ sở dữ liệu.</li>
                <li><b>ORM (Object Relational Mapping)</b>: Tích hợp với các orm API phổ biến như JPA, Hibernate.</li>
                <li><b>OXM (Object XML Mappers)</b>: Hỗ trợ Object/XML mapping.</li>
                <li><b>JMS (Java Message Service)</b>: Là một API nằm sẵn trong bộ JDK hỗ trợ giao tiếp bằng tin nhắn giữa các máy tính với nhau trong một mạng.</li>
                <li><b>Transaction</b>: Quản lý những thay đổi mà bạn thực hiện.</li>

<pre><code id="htmlViewer" style="color:rgb(248, 248, 242); font-weight:400;background-color:rgb(43, 43, 43);background:rgb(43, 43, 43);display:block;padding: .5em;">try (Connection con = dataSource.getConnection()) {
    con<span style="color:rgb(255, 160, 122); font-weight:400;">.setAutoCommit</span>(false);
 
    <span style="color:rgb(212, 208, 171); font-weight:400;">// do something ...</span>
     
    con<span style="color:rgb(255, 160, 122); font-weight:400;">.commit</span>();
} catch (SQLException e) {
    con<span style="color:rgb(255, 160, 122); font-weight:400;">.rollback</span>();
}</code></pre>

                    <p>Ví dụ trên, tắt autoCommit để kiểm soát commit SQL, nếu lỗi ở try thì sẽ Rollback ở catch.</p>
                    <p>Trong Spring, thêm @Transactional annotation để quản lý dễ dàng hơn.</p>
            </ul>
        </div>

        <h5 class="title-child">Web</h5>
        <div class="text-content">
            <p>Spring cung cấp Spring MVC để xây dựng ứng dụng web. Web bao gồm: WebSocket, Servlet, Web, Portlet.</p>
            <ul>
                <li><b>WebSocket</b>: Hỗ trợ Socket giao tiếp hai chiều giữa client và server trong các ứng dụng web.</li>
                <li><b>Servlet</b>: Chức năng tải tệp và khởi tạo IoC sử dụng servlet.</li>
                <li><b>Portlet</b>: Dành cho môi trường portlet và ánh xạ chức năng của Servlet.</li>
            </ul>
        </div>

        <h5 class="title-child">AOP, Aspects, Instrumentation, Messaging</h5>
        <div class="text-content">
            <p>Hỗ trợ lập trình hướng khía cạnh và tích hợp Aspects</p>
            <ul>
                <li><b>AOP</b>: Hỗ trợ lập trình hướng khía cạnh.</li>
                <li><b>Aspects</b>: Một khuôn khổ của AOP.</li>
                <li><b>Instrumentation</b>: Hỗ trợ đo đạc.</li>
                <li><b>Messaging</b>: Xử lý tin nhắn.</li>
            </ul>
        </div>

        <h5 class="title-child">Test </h5>
        <div class="text-content">
            <p>Module hỗ trợ test Spring sử dụng như JUnit.</p>
        </div>

    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>