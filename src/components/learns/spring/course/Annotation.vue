<template>
    <div class="content-course">
        <h1 class="title-content-course">Annotation</h1>

        <h5 class="title-child">Vòng Đời của Bean</h5>
        <div class="text-content">
            <div class="image-content-course">
                <img style="width: 100%;" src="@/assets/image/learns/spring/bean.png">
            </div>
            <ul style="list-style:auto;">
                <li>Khi class được đánh dấu annotation, IoC sẽ tìm và khởi tạo.</li>
                <li>Thực hiện các quá trình cài đặt, setter cho Bean</li>
                <li>Đánh dấu @PostConstruct</li>
                <li>Nếu không dùng Bean nữa, gọi @PreDestroy sau đó Bean bị xóa</li>
            </ul>
        </div>

        <h5 class="title-child"><code>@Override</code></h5>
        <div class="text-content">
            <p>Nó được đặt để thông báo rằng phương thức này ghi đè (override) một phương thức từ lớp cha</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Animal</span> {
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span style="color:rgb(240, 141, 73); font-weight:400;">makeSound</span>()</span> {
        System.<span style="color:rgb(136, 174, 206); font-weight:400;">out</span>.println(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Animal makes a sound&quot;</span>);
    }
}
<span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Dog</span> <span style="font-weight:400;">extends</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Animal</span> {
    @Override
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span style="color:rgb(240, 141, 73); font-weight:400;">makeSound</span>()</span> {
        System.<span style="color:rgb(136, 174, 206); font-weight:400;">out</span>.println(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Dog barks&quot;</span>);
    }
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Deprecated</code></h5>
        <div class="text-content">
            <p>Đánh dấu code bị lỗi thời hoặc không nên sử dụng nữa, nếu sử dụng @Deprecated, trình biên dịch sẽ cảnh báo bạn về điều này.</p>
        </div>

        <h5 class="title-child"><code>@SuppressWarnings</code></h5>
        <div class="text-content">
            <p>Dùng để tắt cảnh báo của trình biên dịch</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@SuppressWarnings(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;unused&quot;</span>)</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Example</span> {

    <span style="color:rgb(136, 174, 206); font-weight:400;">@SuppressWarnings(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;deprecation&quot;</span>)</span>
    void useDeprecatedMethod() {
        <span style="color:rgb(153, 153, 153); font-weight:400;">//something</span>
    }
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Component</code></h5>
        <div class="text-content">
            <p>Đánh dấu trên class cho biết chúng được quản lý bởi IoC.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Bikini</span> <span style="color:rgb(136, 174, 206); font-weight:400;">implements</span> <span style="color: #f08d49;">Outfit</span> {
    <span style="color:rgb(153, 153, 153); font-weight:400;">//something</span>
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Autowired</code></h5>
        <div class="text-content">
            <p>Dùng để tiêm các bean được lưu trữ ở IoC.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Girl</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
    Outfit outfit;
    <span style="color:rgb(153, 153, 153); font-weight:400;">// Các getter và setter</span>
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Primary</code></h5>
        <div class="text-content">
            <p>Đánh dấu đây là bean được ưu tiên dùng.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">@Primary</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Naked</span> <span style="color:rgb(136, 174, 206); font-weight:400;">implements</span> <span style="color: #f08d49;">Outfit</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">void</span> <span class="hljs-title function_">wear</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) {
        <span style="color:rgb(153, 153, 153); font-weight:400;">//something</span>
    }
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Qualifier</code></h5>
        <div class="text-content">
            <p>Chỉ định chính xác tên bean để dùng.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;bikini&quot;</span>)</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Bikini</span> <span style="font-weight:400;">implements</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Outfit</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> void wear() {
        System.<span style="color:rgb(136, 174, 206); font-weight:400;">out</span>.println(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Mặc bikini&quot;</span>);
    }
}
<span style="color:rgb(136, 174, 206); font-weight:400;">@Component(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;naked&quot;</span>)</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Naked</span> <span style="font-weight:400;">implements</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Outfit</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> void wear() {
        System.<span style="color:rgb(136, 174, 206); font-weight:400;">out</span>.println(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Đang không mặc gì&quot;</span>);
    }
}
<span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Girl</span> {
    Outfit outfit;
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> Girl(<span style="color:rgb(136, 174, 206); font-weight:400;">@Qualifier(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;naked&quot;</span>)</span> Outfit outfit) {
        <span style="color:rgb(136, 174, 206); font-weight:400;">this</span>.outfit = outfit;
    }
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Controller - @Service - @Repository</code></h5>
        <div class="text-content">
            <p>Dùng để đánh dấu các tầng.</p>
            <ul>
                <li><b>@Controller</b>: Đánh dấu một class là tầng Controller, là tầng xử lý các yêu cầu từ người dùng.</li>
                <li><b>@Service</b>: Đánh dấu một class là tầng Service, chứa các logic nghiệp vụ và xử lý các yêu cầu từ tầng Controller.</li>
                <li><b>@Repository</b>: Đánh dấu một class là tầng Repository, giao tiếp với database và cung cấp dữ liệu cho tầng Service.</li>
            </ul>
        </div>

        <h5 class="title-child"><code>@PostMapping - @RequestMapping</code></h5>
        <div class="text-content">
            <p>Dùng để xử lý các yêu cầu HTTP như: GET, POST, PUT, DELETE.</p>
        </div>

        <h5 class="title-child"><code>@Configuration - @Bean</code></h5>
        <div class="text-content">
            <p><b>@Configuration</b>: Đánh dấu trên class cho biết class đó chứa các thông tin cấu hình cho ứng dụng.</p>
            <p><b>@Bean</b>: Đánh dấu trên một method trong class được đánh dấu @Configuration, nó cho biết rằng method đó tạo và trả về một bean</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Configuration</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: rgb(240, 141, 73);">AppConfig</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Bean</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span>MyBean</span> <span style="color: rgb(240, 141, 73);">myBean</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) {
        <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span style="color: #f08d49;">MyBean</span>();
    }
}</code></pre>
        </div>

        <h5 class="title-child"><code>@ComponentScan</code></h5>
        <div class="text-content">
            <p>Sử dụng @ComponentScan trên class để chỉ định các package cần quét.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@ComponentScan</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;me.kungfutech.spring.componentscan.others&quot;</span>)
<span style="color:rgb(136, 174, 206); font-weight:400;">@SpringBootApplication</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public class</span> <span style="color:rgb(240, 141, 73)">App</span> {
    <span style="color:rgb(153, 153, 153); font-weight:400;">// something</span>
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Value</code></h5>
        <div class="text-content">
            <p>@Value dùng để đọc giá trị khác bên ngoài như application.properties.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(153, 153, 153); font-weight:400;">//=====application.properties file==========</span>
kungfutech.mysql.url=jdbc:mysql:<span style="color:rgb(153, 153, 153); font-weight:400;">//host1:33060/kungfutech</span>

<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">AppConfig</span> {
    <span style="color:rgb(153, 153, 153); font-weight:400;">// Lấy giá trị cấu hình từ file application.properties</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Value(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;<span class="hljs-subst">${kungfutech.mysql.url}</span>&quot;</span>)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> String mysqlUrl;
}</code></pre>
        </div>

        <h5 class="title-child"><code>@Query</code></h5>
        <div class="text-content">
            <p>Nếu muốn tại SQL riêng thì sử dụng annotation <code>@Query</code></p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">interface</span> <span style="color: #f08d49;">UserRepository</span> <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span style="color: #f08d49;">JpaRepository</span>&lt;User, Long&gt; {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Query(&quot;SELECT u FROM User u WHERE u.atk = :atk&quot;)</span>
    List&lt;User&gt; <span style="color: #f08d49;">findUsersWithAtk</span><span style="color:rgb(255, 255, 255); font-weight:400;">(<span style="color:rgb(136, 174, 206); font-weight:400;">@Param(&quot;atk&quot;)</span> <span style="color:rgb(240, 141, 73); font-weight:400;">int</span> atk)</span>;
}</code></pre>
        </div>

        <h5 class="title-child"><code>@PostConstruct - @PreDestroy</code></h5>
        <div class="text-content">
            <p><b>@PostConstruct</b>: Gọi method sau khi Bean được tạo.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Girl</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@PostConstruct</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">void</span> <span class="hljs-title function_">postConstruct</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>){
        <span>System</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">out</span>.<span class="hljs-title function_">println</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;\t&gt;&gt; Đối tượng Girl sau khi khởi tạo xong sẽ chạy hàm này&quot;</span>);
    }
}</code></pre>

            <p><b>@PreDestroy</b>: Gọi method trước khi Bean bị xóa.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">Girl</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@PreDestroy</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">void</span> <span class="hljs-title function_">preDestroy</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>){
        <span>System</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">out</span>.<span class="hljs-title function_">println</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;\t&gt;&gt; Đối tượng Girl trước khi bị destroy thì chạy hàm này&quot;</span>);
    }
}</code></pre>
        </div>

    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>