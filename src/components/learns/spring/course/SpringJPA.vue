<template>
    <div class="content-course">
        <h1 class="title-content-course">Spring JPA</h1>
        <p class="text-content">Là lớp trung gian giữa tầng Service và Repository, giúp thao tác với cơ sở dữ liệu dễ dàng hơn.</p>

        <h5 class="title-child">JpaRepository</h5>
        <div class="text-content">
            <p>Sử dụng bằng cách kế thừa interface <code>JpaRepository</code></p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Repository</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">interface</span> <span style="color: #f08d49;">UserRepository</span> <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span style="color: #f08d49;">JpaRepository</span>&lt;User, Long&gt; {
}</code></pre>

        <p>Spring JPA có các mothod hữu ích giúp viết code dễ dàng hơn được đặt tên xác định theo format: <code>find…By, read…By, query…By,...</code></p>
        <p>Nếu muốn tại SQL riêng thì sử dụng annotation <code>@Query</code></p>

        <h6 class="title-child">Truyền tham số</h6>
        <p>Sử dụng <code>:tên_tham_số</code> trong câu SQL và sử dụng <code>@Param("tên_tham_số")</code> trong phương thức.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Repository</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">interface</span> <span style="color: #f08d49;">UserRepository</span> <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span style="color: #f08d49;">JpaRepository</span>&lt;User, Long&gt; {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Query(&quot;SELECT u FROM User u WHERE u.atk = :atk AND u.def = :def&quot;)</span>
    List&lt;User&gt; <span style="color: #f08d49;">findUsersWithAtkAndDef</span><span style="color:rgb(255, 255, 255); font-weight:400;">(<span style="color:rgb(136, 174, 206); font-weight:400;">@Param(&quot;atk&quot;)</span> <span style="color:rgb(240, 141, 73); font-weight:400;">int</span> atk, <span style="color:rgb(136, 174, 206); font-weight:400;">@Param(&quot;def&quot;)</span> <span style="color:rgb(240, 141, 73); font-weight:400;">int</span> def)</span>;
}</code></pre>
        </div>

        <h5 class="title-child">Hibernate</h5>
        <div class="text-content">
            <p>Là thư viện của ORM, giúp dễ dàng ánh xạ dữ liệu vào đối tượng.</p>
<pre><code id="htmlViewer" style="color:rgb(197, 200, 198); font-weight:400;background-color:rgb(29, 31, 33);background:rgb(29, 31, 33);display:block;padding: .5em;"><span style="color:rgb(204, 102, 102); font-weight:400;">@Entity</span> <span style="color:rgb(150, 152, 150); font-weight:400;">// Đánh dấu đây là một Entity, chịu sự quản lý của Hibernate</span>
<span style="color:rgb(204, 102, 102); font-weight:400;">@Table</span>(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;products&quot;</span>) <span style="color:rgb(150, 152, 150); font-weight:400;">// Đánh dấu Entity này đại diện cho bảng &quot;products&quot; trong cơ sở dữ liệu</span>
public class Product {
    <span style="color:rgb(204, 102, 102); font-weight:400;">@Id</span> <span style="color:rgb(150, 152, 150); font-weight:400;">// Đánh dấu thuộc tính &quot;id&quot; là khóa chính của bảng</span>
    <span style="color:rgb(204, 102, 102); font-weight:400;">@GeneratedValue</span>(strategy = GenerationType.IDENTITY) <span style="color:rgb(150, 152, 150); font-weight:400;">// Tự động tạo giá trị khi insert</span>
    private Long id;
    <span style="color:rgb(204, 102, 102); font-weight:400;">@Column</span>(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;product_name&quot;</span>) <span style="color:rgb(150, 152, 150); font-weight:400;">// Ánh xạ thuộc tính &quot;name&quot; vào cột &quot;product_name&quot; trong bảng</span>
    private String name;
    <span style="color:rgb(204, 102, 102); font-weight:400;">@Column</span>(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;product_price&quot;</span>) <span style="color:rgb(150, 152, 150); font-weight:400;">// Ánh xạ thuộc tính &quot;price&quot; vào cột &quot;product_price&quot; trong bảng</span>
    private double price;
    <span style="color:rgb(150, 152, 150); font-weight:400;">// Constructors, getters, and setters</span>
}</code></pre>

            <h6 class="title-child">Session</h6>
            <p>Được tạo ra từ <code>SessionFactory</code> dùng để thao tác với cơ sở dữ liệu sử dụng Hibernate.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(240, 141, 73); font-weight:400;">SessionFactory</span> <span style="color:rgb(181, 189, 104); font-weight:400;">factory</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> HibernateSessionUtils.getSessionFactory();
<span style="color:rgb(240, 141, 73); font-weight:400;">Session</span> <span style="color:rgb(181, 189, 104); font-weight:400;">session</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> factory.getCurrentSession();
<span style="color:rgb(136, 174, 206); font-weight:400;">try</span> {
    session.getTransaction().begin();
    List&lt;Product&gt; products = session.createQuery(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;SELECT p FROM Product p&quot;</span>, Product.class).getResultList();
    session.getTransaction().commit();
} <span style="color:rgb(136, 174, 206); font-weight:400;">catch</span> (Exception e) {
    session.getTransaction().rollback();
}</code></pre>

            <h6 class="title-child">Hibernate Query Language (HQL)</h6>
            <p>HQL tương tự SQL nhưng sử dụng tên của các đối tượng thay vì tên bảng.</p>
        </div>

        <h5 class="title-child">Specification</h5>
        <div class="text-content">
            <p>Dùng để xây dựng các điều kiện truy vấn, tái sử dụng lại các câu truy vấn.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(240, 141, 73); font-weight:400;">UserSpecifications</span> {
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> Specification&lt;User&gt; <span style="color:rgb(240, 141, 73); font-weight:400;">activeUsers</span>()</span> {
        <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> (root, query, criteriaBuilder) -&gt; criteriaBuilder.isTrue(root.<span style="color:rgb(136, 174, 206); font-weight:400;">get</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;active&quot;</span>));
    }
    <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> Specification&lt;User&gt; <span style="color:rgb(240, 141, 73); font-weight:400;">emailEndsWithExample</span>()</span> {
        <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> (root, query, criteriaBuilder) -&gt; criteriaBuilder.like(root.<span style="color:rgb(136, 174, 206); font-weight:400;">get</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;email&quot;</span>), <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;%@example.com&quot;</span>);
    }
}</code></pre>
            <p>Đoạn code trên tạo 2 Specification: Kiểm tra boolean của trường Active và giá trị của Email.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(240, 141, 73)">Main</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> <span style="color:rgb(240, 141, 73); font-weight:400;">void</span> <span class="hljs-title function_">main</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(240, 141, 73); font-weight:400;">String</span>[] args</span>) {
        <span style="color:rgb(240, 141, 73)">Specification</span>&lt;<span class="hljs-title class_">User</span>&gt; spec = <span style="color:rgb(240, 141, 73)">Specification</span>.<span class="hljs-title function_">where</span>(<span style="color:rgb(240, 141, 73)">UserSpecifications</span>.<span class="hljs-title function_">activeUsers</span>())
                .<span class="hljs-title function_">and</span>(<span style="color:rgb(240, 141, 73)">UserSpecifications</span>.<span class="hljs-title function_">emailEndsWithExample</span>());
        <span style="color:rgb(240, 141, 73)">List</span>&lt;<span class="hljs-title class_">User</span>&gt; users = userRepository.<span class="hljs-title function_">findAll</span>(spec, <span class="hljs-title class_">JpaSort</span>.<span class="hljs-title function_">unsorted</span>());
        users.<span class="hljs-title function_">forEach</span>(<span class="hljs-title class_">System</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">out</span>::println);
    }
}</code></pre>
            <p>Đoạn code trên kết hợp 2 Specification với điều kiện and.</p>
        </div>

    </div>

</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>