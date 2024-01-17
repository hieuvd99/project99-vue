<template>
    <div class="content-course">
        <h1 class="title-content-course">Design Pattern</h1>

        <div class="text-content">
            <p>Là một mô tả hoặc mẫu để giải quyết một vấn đề với các ưu điểm.</p>
            <ul>
                <li><b>Tiết kiệm thời gian:</b> Cung cấp cách tiếp cận chuẩn cho các vấn đề thường gặp giúp tiết kiệm thời gian trong thiết kế và phát triển.</li>
                <li><b>Tái sử dụng:</b> Tái sử dụng mã nguồn giúp phát triển nhanh và giảm chi phí.</li>
                <li><b>Code dễ hiểu và gỡ lỗi:</b> Áp dụng Design Pattern làm cho mã nguồn dễ hiểu hơn, dễ gỡ lỗi hơn.</li>
            </ul>
        </div>
        <div class="text-content">
            <p>Design Pattern được chia thành ba loại chính.</p>
            <ul>
                <li><b>Mẫu tạo dựng (Creational Design Patterns):</b> Cung cấp giải pháp cho việc tạo đối tượng tốt nhất tùy theo tình huống. Các mẫu tạo dựng bao gồm Singleton, Factory, Abstract Factory, Builder, và Prototype.</li>
                <li><b>Mẫu cấu trúc (Structural Design Patterns):</b> Cung cấp giải pháp cho cấu trúc của các lớp hoặc đối tượng. Các mẫu cấu trúc bao gồm Adapter, Composite, Proxy, Flyweight, Facade, Bridge, và Decorator.</li>
                <li><b>Mẫu hành vi (Behavioral Design Patterns):</b> Cung cấp giải pháp cho tương tác giữa các đối tượng, làm cho code có khả năng mở rộng và dễ bảo trì. Các mẫu hành vi bao gồm Template Method, Mediator, Chain of Responsibility, Observer, Strategy, Command, State, Visitor, Interpreter, và Iterator.</li>
            </ul>
        </div>

        <h5 class="title-child">Mẫu tạo dựng (Creational Design Patterns)</h5><br>
        <div class="text-content">
            <h4><code>Singleton Pattern</code></h4>
            <p><b>Singleton Pattern</b> áp dụng để đảm bảo rằng một lớp chỉ có một thể hiện. Các class trong java core như <b>java.lang.Runtime</b> và <b>java.awt.Desktop</b> đều là ví dụ điển hình của Singleton Pattern.</p>
            <p>Một Singleton Pattern thường là 1 class (Class Singleton) có các đặc điểm:</p>
            <ul>
                <li>Function khởi tạo private để ngăn cản việc tạo thể hiện của class từ các class khác.</li>
                <li>Biến private static của class, nó là thể hiện duy nhất của class.</li>
                <li>Method public static để trả về thể hiện của class.</li>
                <p>Note: Nếu function thể hiện cho class thì là mothod.</p>
            </ul>

            <h4><code>Factory Pattern</code></h4>
            <p><b>Factory Pattern:</b> áp dụng để tạo ra đối tượng dựa trên một class cha (super class) và nhiều class con (sub-class) tương ứng với các tình huống khác nhau.
                Thông qua <b>Factory Pattern</b>, chúng ta có thể tạo ra một đối tượng mà không cần biết cụ thể nó được tạo ra từ class con nào</p>
            <p>Lợi ích của <b>Factory Pattern:</b></p>
            <ul>
                <li>Cung cấp một giao diện (interface) thay vì các cài đặt cụ thể, giúp code dễ dàng mở rộng và bảo trì.</li>
                <li>Cho phép mở rộng code dễ dàng bằng cách thêm mới các class con mà không làm thay đổi code hiện tại.</li>
            </ul>

            <h4><code>Abstract Factory Pattern</code></h4>
            <p><b>Abstract Factory Pattern:</b> tương tự như Factory Pattern nhưng cung cấp một mức trừu tượng hơn để tạo ra các đối tượng liên quan đến nhau (họ sản phẩm).</p>

            <h4><code>Builder Pattern</code></h4>
            <p>Dùng để giải quyết nhược điểm của <b>Factory Pattern</b> và <b>Abstract Factory Pattern</b>.</p>
            <ul>
                <li><b>Quá nhiều tham số cần truyền vào từ client đến Factory Class</b>: Khi một đối tượng có nhiều thuộc tính, việc truyền đủ số lượng tham số vào hàm tạo (constructor) từ phía client trở nên khó khăn.</li>
                <li><b>Việc tạo đối tượng phức tạp</b>: Khi đối tượng có nhiều thuộc tính, việc tạo nó từng bước một trở nên phức tạp và dễ gây lỗi.</li>
                <li><b>Một số tham số có thể là tùy chọn</b>: Trong trường hợp một số thuộc tính là tùy chọn, trong Factory Pattern, chúng ta vẫn phải truyền tất cả tham số, và các tham số tùy chọn thường được thiết lập là null hoặc giá trị mặc định.</li>
            </ul>
        </div>




    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>