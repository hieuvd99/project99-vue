<template>
    <div class="content-course">
        <h1 class="title-content-course">Spring Overview</h1>
        <p class="text-content">Spring Framework được xây dựng dựa trên 2 nguyên tắc design chính là: <b>Dependency Injection</b> và <b>Aspect Oriented Programming</b>.</p>
        
        <h5 class="title-child">Dependency Injection (DI)</h5>
        <div class="text-content">
            <p>Trong DI, các phụ thuộc của một đối tượng không được tạo bên trong đối tượng đó, mà được cung cấp từ bên ngoài.</p>
            <p>Có 3 dạng chính của Dependency Injection:
                <ul>
                    <li><b>Constructor Injection</b>: Dependency được tiêm vào thông qua constructor của lớp.</li>
                    <li><b>Setter Injection</b>: Dependency được tiêm vào thông qua các phương thức setter.</li>
                    <li><b>Interface Injection</b>: Lớp cần tiêm sẽ thực thi một giao diện (interface) chứa phương thức inject. 
                        Container sẽ tiêm các dependency vào lớp thông qua phương thức inject của giao diện.</li>
                </ul>
            </p>

<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">interface</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Outfit</span> {
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span style="color:rgb(240, 141, 73); font-weight:400;">wear</span>()</span>;
}
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Bikini</span> <span style="color:rgb(240, 141, 73); font-weight:400;">implements</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Outfit</span> {
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span style="color:rgb(240, 141, 73); font-weight:400;">wear</span>()</span> {
        System.<span style="color:rgb(136, 174, 206); font-weight:400;">out</span>.println(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Đã mặc Bikini&quot;</span>);
    }
}
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Girl</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> Outfit outfit;
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Girl</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">Outfit outfit</span>)</span> {
        <span style="color:rgb(136, 174, 206); font-weight:400;">this</span>.outfit = outfit;
    }
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span style="color:rgb(240, 141, 73); font-weight:400;">dressUp</span>()</span> {
        outfit.wear();
    }
}</code></pre>

            <p>Trong ví dụ này, lớp <code>Girl</code> không tạo ra một <code>Outfit</code> mà nó cần. Thay vào đó, nó chấp nhận một <code>Outfit</code> thông qua constructor của nó. Điều này làm giảm sự phụ thuộc của <code>Girl</code> vào một cụ thể <code>Outfit</code>, tạo điều kiện cho tính linh hoạt và tùy biến.</p>

            <h6 class="title-child">Inversion of Control (IoC)</h6>
            <div class="text-content">
                <p>Là nơi quản lý đối tượng và phụ thuộc, chỉ cần gọi khi dùng, không cần tạo lại. Có 2 kiểu IoC: <b>Bean Factory</b> và <b>Application Context</b></p>

<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Girl</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> Outfit outfit;
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Girl</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">Outfit outfit</span>)</span> {
        <span style="color:rgb(136, 174, 206); font-weight:400;">this</span>.outfit = outfit;
    }
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span style="color:rgb(240, 141, 73); font-weight:400;">dressUp</span>()</span> {
        outfit.wear();
    }
}
<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> <span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span style="color:rgb(240, 141, 73); font-weight:400;">main</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">String[] args</span>)</span> {
    ApplicationContext context = <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> ClassPathXmlApplicationContext(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;applicationContext.xml&quot;</span>);
    Girl girl = context.getBean(Girl.<span style="color:rgb(136, 174, 206); font-weight:400;">class</span>);
    girl.dressUp();
}</code></pre>

            <p><code>Girl</code> được lưu trong <b>IoC</b> nên khi dùng chỉ cần gọi ra, không cần tạo lại đối tượng <code>Girl</code>.</p>
            </div>
        </div>

        <h5 class="title-child">Aspect Oriented Programming (AOP)</h5>
        <div class="text-content">

        </div>
    </div>
</template>

<script>

</script>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>