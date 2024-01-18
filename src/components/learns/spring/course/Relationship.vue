<template>
    <div class="content-course">
        <h1 class="title-content-course">@OneToOne</h1>
        <p class="text-content">Là quan hệ 1-1 giữa 2 thực thể trong 2 bảng.</p>

<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(136, 174, 206); font-weight:400;">User</span> {
  <span style="color:rgb(181, 189, 104); font-weight:400;">@Id</span>
  <span style="color:rgb(181, 189, 104); font-weight:400;">@GeneratedValue</span>(strategy = GenerationType.IDENTITY)
  private Long id;

  <span style="color:rgb(181, 189, 104); font-weight:400;">@OneToOne</span>(mappedBy = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;user&quot;</span>, cascade = CascadeType.ALL)
  private Address address;
}

<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color:rgb(136, 174, 206); font-weight:400;">Address</span> {
  <span style="color:rgb(181, 189, 104); font-weight:400;">@Id</span>
  <span style="color:rgb(181, 189, 104); font-weight:400;">@GeneratedValue</span>(strategy = GenerationType.IDENTITY)
  private Long address_id;

  <span style="color:rgb(181, 189, 104); font-weight:400;">@OneToOne</span>(cascade = CascadeType.ALL)
  <span style="color:rgb(181, 189, 104); font-weight:400;">@JoinColumn</span>(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;user_id&quot;</span>)
  private User user;
}</code></pre>

        <h1 class="title-content-course">@OneToMany - @ManyToOne</h1>
        <p class="text-content">Là quan hệ 1-n và n-1 giữa các thực thể trong 2 bảng.</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">Role</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Id</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">@GeneratedValue(strategy = GenerationType.IDENTITY)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Long</span> id;
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> String role;
    <span style="color:rgb(136, 174, 206); font-weight:400;">@OneToMany(mappedBy = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;role&quot;</span>, cascade = CascadeType.ALL)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> List&lt;User&gt; user;
}

<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">User</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Id</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">@GeneratedValue(strategy = GenerationType.IDENTITY)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Long</span> id;
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> String name;
    <span style="color:rgb(136, 174, 206); font-weight:400;">@ManyToOne</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">@JoinColumn(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;role_id&quot;</span>)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> Role role;
}</code></pre>

        <h1 class="title-content-course">@OneToMany - @ManyToOne</h1>
        <p class="text-content">Là quan hệ n-n giữa các thực thể trong 2 bảng.</p>

<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">User</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Id</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">@GeneratedValue(strategy = GenerationType.IDENTITY)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Long</span> id;
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> String name;
    <span style="color:rgb(136, 174, 206); font-weight:400;">@ManyToMany(mappedBy = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;user&quot;</span>)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> Collection&lt;Address&gt; addresses;
}

<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">Address</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">@Id</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">@GeneratedValue(strategy = GenerationType.IDENTITY)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Long</span> id;
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> String city;
    <span style="color:rgb(136, 174, 206); font-weight:400;">@ManyToMany(cascade = CascadeType.ALL)</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">@JoinTable(
            name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;user_person&quot;</span>,
            joinColumns = @JoinColumn(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;address_id&quot;</span>),
            inverseJoinColumns = @JoinColumn(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;user_id&quot;</span>)
    )</span>
    <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> Collection&lt;User&gt; user;
}</code></pre>
    </div>

</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>