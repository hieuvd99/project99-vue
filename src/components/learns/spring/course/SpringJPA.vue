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
    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>