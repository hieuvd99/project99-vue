<template>
    <div class="content-course">
        <h1 class="title-content-course">Pageable</h1>
        <p class="text-content">Code example Spring API + VueJS with pageable.</p>
        <h6 class="title-child">Spring API</h6><br>

<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Repository</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">interface</span> <span style="color: #f08d49;">UserRepository</span> <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span style="color: #f08d49;">JpaRepository</span>&lt;User, Long&gt; {

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Query(value= "SELECT * FROM user_info WHERE lower(user_info.username) like (concat('%', :search, '%'))
     or lower(user_info.email) like (concat('%', :search, '%')) ORDER BY user_info.id ASC", nativeQuery = true)</span>
  Page&lt;User&gt; <span style="color: #f08d49;">findUserBySearch</span><span style="color:rgb(255, 255, 255); font-weight:400;">(<span style="color:rgb(136, 174, 206); font-weight:400;">@Param(&quot;search&quot;)</span> String search, Pageable pageable)</span>;

  Page&lt;User&gt; <span style="color: #f08d49;">findAllByOrderByIdAsc</span><span style="color:rgb(255, 255, 255); font-weight:400;">(Pageable pageable)</span>;

}</code></pre>

<pre>
 <code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Service</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">interface</span> <span style="color:rgb(240, 141, 73); font-weight:400;">UserService</span> {

  <span style="color:rgb(255, 255, 255); font-weight:400;">Page&lt;User&gt; <span style="color:rgb(240, 141, 73); font-weight:400;">findAllByOrderByIdAsc</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">Pageable pageable</span>)</span>;
  <span style="color:rgb(255, 255, 255); font-weight:400;">Page&lt;User&gt; <span style="color:rgb(240, 141, 73); font-weight:400;">findUserBySearch</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">String search, Pageable pageable</span>)</span>;
}</code></pre>

<pre>
    <code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Service</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span style="color: #f08d49;">UserServiceImpl</span> <span style="color:rgb(136, 174, 206); font-weight:400;">implements</span> <span style="color: #f08d49;">UserService</span> {
  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color: #f08d49;">UserRepository</span> userRepository;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color: #f08d49;">Page</span>&lt;<span style="color: #f08d49;">User</span>&gt; <span style="color: #f08d49;">findAllByOrderByIdAsc</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">Pageable pageable</span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> userRepository.<span style="color: #f08d49;">findAllByOrderByIdAsc</span>(pageable);
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color: #f08d49;">Page</span>&lt;<span style="color: #f08d49;">User</span>&gt; <span style="color: #f08d49;">findUserBySearch</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="font-weight:400;">String</span> search, Pageable pageable</span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> userRepository.<span style="color: #f08d49;">findUserBySearch</span>(search, pageable);
  }

}</code></pre>

<pre>
 <code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@RestController</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">@CrossOrigin</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">@RequestMapping(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;/api/admin&quot;</span>)</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">AdminController</span> {

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  <span class="hljs-title class_">UserService</span> userService;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@GetMapping</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;/all-user&quot;</span>)
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">Page</span>&lt;<span class="hljs-title class_">User</span>&gt; <span class="hljs-title function_">getAllUser</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">@RequestParam</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;p&quot;</span>) Optional&lt;Integer&gt; p</span>){
    <span class="hljs-title class_">Pageable</span> pageable = (<span class="hljs-title class_">Pageable</span>) <span class="hljs-title class_">PageRequest</span>.<span class="hljs-title function_">of</span>(p.<span class="hljs-title function_">orElse</span>(<span style="color:rgb(240, 141, 73); font-weight:400;">0</span>), <span style="color:rgb(240, 141, 73); font-weight:400;">8</span>);
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> userService.<span class="hljs-title function_">findAllByOrderByIdAsc</span>(pageable);
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@GetMapping</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;/search&quot;</span>)
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">Page</span>&lt;<span class="hljs-title class_">User</span>&gt;  <span class="hljs-title function_">searchUser</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(136, 174, 206); font-weight:400;">@RequestParam</span>(name = <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;search&quot;</span>) <span style="color:rgb(240, 141, 73); font-weight:400;">String</span> search, <span style="color:rgb(136, 174, 206); font-weight:400;">@RequestParam</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;p&quot;</span>) Optional&lt;Integer&gt; p</span>){
    <span class="hljs-title class_">Pageable</span> pageable = (<span class="hljs-title class_">Pageable</span>) <span class="hljs-title class_">PageRequest</span>.<span class="hljs-title function_">of</span>(p.<span class="hljs-title function_">orElse</span>(<span style="color:rgb(240, 141, 73); font-weight:400;">0</span>), <span style="color:rgb(240, 141, 73); font-weight:400;">8</span>);
    <span class="hljs-title class_">Page</span>&lt;<span class="hljs-title class_">User</span>&gt; user = userService.<span class="hljs-title function_">findUserBySearch</span>(search, pageable);
    <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (user == <span style="color:rgb(240, 141, 73); font-weight:400;">null</span>) {
      <span class="hljs-title class_">ResponseEntity</span>.<span class="hljs-title function_">badRequest</span>().<span class="hljs-title function_">body</span>(<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">MessageResponse</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Error: Cant find user!&quot;</span>));
    }
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> user;
  }

}</code></pre>

        <h6 class="title-child">VueJS</h6>
<pre>
 <code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">template</span>&gt;</span>
  <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">div</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;container&quot;</span>&gt;</span>
      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">h1</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;text-center&quot;</span>&gt;</span>ALL USER<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">h1</span>&gt;</span>
      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">div</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;form-group&quot;</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">div</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-if</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;message&quot;</span>&gt;</span>
          &#10100;&#10100;message&#10101;&#10101;
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">div</span>&gt;</span>
      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">div</span>&gt;</span>
      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">h5</span>&gt;</span>Số tài khoản: &#10100;&#10100;pages.totalElements&#10101;&#10101;<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">h5</span>&gt;</span>

      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">form</span> @<span style="color:rgb(136, 174, 206); font-weight:400;">submit.prevent</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;onUserSearch&quot;</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">input</span> <span style="color:rgb(136, 174, 206); font-weight:400;">type</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;text&quot;</span>  <span style="color:rgb(136, 174, 206); font-weight:400;">placeholder</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;search&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-model</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;valueSearch&quot;</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">input</span> <span style="color:rgb(136, 174, 206); font-weight:400;">type</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;submit&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">value</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Submit&quot;</span>&gt;</span>
      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">form</span>&gt;</span> 

      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">table</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;table table-striped&quot;</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">thead</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>User Id<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>User Name<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>Email<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>ROLE<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>View/Edit<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>Detele<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">th</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">thead</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">tbody</span>&gt;</span>
          <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">tr</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-for</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;user in pages.content&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">:key</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;user.id&quot;</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span><span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">router-link</span> <span style="color:rgb(136, 174, 206); font-weight:400;">:to</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;&#x27;/admin/user/&#x27;+ user.id&quot;</span>&gt;</span>&#10100;&#10100;user.id&#10101;&#10101; <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">router-link</span>&gt;</span><span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span> 
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>&#10100;&#10100;user.username&#10101;&#10101;<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>&#10100;&#10100;user.email&#10101;&#10101;<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>&#10100;&#10100;user.role&#10101;&#10101;<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>
              <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">router-link</span> <span style="color:rgb(136, 174, 206); font-weight:400;">:to</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;&#x27;/admin/user/&#x27;+ user.id&quot;</span>&gt;</span>
                <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">button</span> <span style="color:rgb(136, 174, 206); font-weight:400;">type</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;button&quot;</span>&gt;</span>View/Edit<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">button</span>&gt;</span>
              <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">router-link</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>
              <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">button</span> <span style="color:rgb(136, 174, 206); font-weight:400;">type</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;button&quot;</span> @<span style="color:rgb(136, 174, 206); font-weight:400;">click</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;deleteUser(user.id)&quot;</span>&gt;</span>Delete<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">button</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">td</span>&gt;</span>
          <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">tr</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">tbody</span>&gt;</span>

        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">nav</span> <span style="color:rgb(136, 174, 206); font-weight:400;">aria-label</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Page navigation example&quot;</span>&gt;</span>
          <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">ul</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;pagination justify-content-center&quot;</span>&gt;</span>
            <span style="color:rgb(153, 153, 153); font-weight:400;">&lt;!-- First --&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">li</span>  <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-item text-primary&quot;</span>&gt;</span>
              <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">a</span> <span style="color:rgb(136, 174, 206); font-weight:400;">href</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;/admin/all-user?page=1&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-bind:class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;{disable: isDisablePrevious}&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-link&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">style</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;font-size: 14px;&quot;</span>&gt;</span> First <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">li</span>&gt;</span>
            <span style="color:rgb(153, 153, 153); font-weight:400;">&lt;!-- Previous --&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">li</span>  <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-item text-primary&quot;</span>&gt;</span>
              <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">a</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-bind:href</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;&#x27;/admin/all-user?page=&#x27; + ((pages.number &gt; 1) ? (pages.number-1) : 1)&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-bind:class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;{disable: isDisablePrevious}&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-link&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">style</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;font-size: 14px;&quot;</span>&gt;</span>Previous <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">li</span>&gt;</span>
            <span style="color:rgb(153, 153, 153); font-weight:400;">&lt;!-- Next --&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">li</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-item text-primary&quot;</span>&gt;</span>
              <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">a</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-bind:href</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;&#x27;/admin/all-user?page=&#x27; + (pages.number+2)&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-bind:class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;{disable: isDisableNext}&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-link&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">style</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;font-size: 14px;&quot;</span>&gt;</span>Next <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">li</span>&gt;</span>
            <span style="color:rgb(153, 153, 153); font-weight:400;">&lt;!-- Last --&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">li</span>  <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-item text-primary&quot;</span>&gt;</span>
              <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">a</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-bind:href</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;&#x27;/admin/all-user?page=&#x27; + ((pages.totalPages &gt; 1) ? (pages.totalPages-1) : 1)&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">v-bind:class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;{disable: isDisableNext}&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;page-link&quot;</span> <span style="color:rgb(136, 174, 206); font-weight:400;">style</span>=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;font-size: 14px;&quot;</span>&gt;</span>Last <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">a</span>&gt;</span>
            <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">li</span>&gt;</span>
          <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">ul</span>&gt;</span>
        <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">nav</span>&gt;</span>

      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">table</span>&gt;</span>
      <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">br</span>&gt;</span>
  <span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">div</span>&gt;</span>
<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">template</span>&gt;</span>
<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">script</span>&gt;</span><span style="color:rgb(255, 255, 255); font-weight:400;">
<span style="color:rgb(136, 174, 206); font-weight:400;">import</span> <span class="hljs-title class_">AdminService</span> <span style="color:rgb(136, 174, 206); font-weight:400;">from</span> <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;@/services/admin.service&quot;</span>;

<span style="color:rgb(136, 174, 206); font-weight:400;">export</span> <span style="color:rgb(136, 174, 206); font-weight:400;">default</span> {
  <span style="color:rgb(136, 174, 206); font-weight:400;">name</span>:<span style="color:rgb(181, 189, 104); font-weight:400;">&#x27;Employee&#x27;</span>,
  <span class="hljs-title function_">data</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> {
      <span style="color:rgb(136, 174, 206); font-weight:400;">pages</span>: [],
      <span style="color:rgb(136, 174, 206); font-weight:400;">message</span>: <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;&quot;</span>,
      <span style="color:rgb(136, 174, 206); font-weight:400;">isDisablePrevious</span>: <span style="color:rgb(240, 141, 73); font-weight:400;">false</span>,
      <span style="color:rgb(136, 174, 206); font-weight:400;">isDisableNext</span>: <span style="color:rgb(240, 141, 73); font-weight:400;">false</span>,
      <span style="color:rgb(136, 174, 206); font-weight:400;">valueSearch</span>: <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;&quot;</span>,
    };
  },
  <span style="color:rgb(136, 174, 206); font-weight:400;">methods</span>: {
    <span class="hljs-title function_">getUsers</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">page</span>) {
      <span class="hljs-title class_">AdminService</span>.<span class="hljs-title function_">getAllUser</span>(page).<span style="color:rgb(255, 255, 255); font-weight:400;">then</span> (
        <span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(255, 255, 255); font-weight:400;">response</span> =&gt;</span> {
          <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span> = response.<span style="color:rgb(255, 255, 255); font-weight:400;">data</span>;
          <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (<span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">number</span> == <span style="color:rgb(240, 141, 73); font-weight:400;">0</span>) {
            <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">isDisablePrevious</span> = <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>;
          }
          <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (<span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">number</span> + <span style="color:rgb(240, 141, 73); font-weight:400;">1</span> == <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">totalPages</span>) {
            <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">isDisableNext</span> = <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>;
          }
        }
      );
    },
    <span class="hljs-title function_">deleteUser</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">userId</span>) {
      <span style="color:rgb(136, 174, 206); font-weight:400;">if</span>(<span class="hljs-title function_">confirm</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&#x27;Are you sure want delete user?&#x27;</span>)) {
        <span class="hljs-title class_">AdminService</span>.<span class="hljs-title function_">deleteUser</span>(userId).<span style="color:rgb(255, 255, 255); font-weight:400;">then</span> (
            <span style="color:rgb(255, 255, 255); font-weight:400;">(<span style="color:rgb(255, 255, 255); font-weight:400;">response</span>) =&gt;</span> {
              <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">getUsers</span>();
              <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">message</span> = response.<span style="color:rgb(255, 255, 255); font-weight:400;">data</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">message</span>;
            }
        );
      }
    },
    <span class="hljs-title function_">onUserSearch</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) {
      <span class="hljs-title class_">AdminService</span>.<span class="hljs-title function_">searchUser</span>(<span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">valueSearch</span>).<span class="hljs-title function_">then</span>(
          <span style="color:rgb(255, 255, 255); font-weight:400;">(<span style="color:rgb(255, 255, 255); font-weight:400;">response</span>) =&gt;</span> {
              <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">message</span> = response.<span style="color:rgb(255, 255, 255); font-weight:400;">data</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">message</span>;
              <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span> = response.<span style="color:rgb(255, 255, 255); font-weight:400;">data</span>;
              <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (<span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">number</span> == <span style="color:rgb(240, 141, 73); font-weight:400;">0</span>) {
                <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">isDisablePrevious</span> = <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>;
              }
              <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (<span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">number</span> + <span style="color:rgb(240, 141, 73); font-weight:400;">1</span> == <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">pages</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">totalPages</span>) {
                <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">isDisableNext</span> = <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>;
              }
          }
      );
    }
  },
  <span class="hljs-title function_">created</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">var</span> paramPage = <span style="color:rgb(240, 141, 73); font-weight:400;">1</span>;
    <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (<span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">$route</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">query</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">page</span> != <span style="color:rgb(240, 141, 73); font-weight:400;">null</span>) {
      paramPage = <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">$route</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">query</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">page</span>;
    }
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">getUsers</span>(paramPage - <span style="color:rgb(240, 141, 73); font-weight:400;">1</span>)

  }
}

</span><span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">script</span>&gt;</span></code></pre>
    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>