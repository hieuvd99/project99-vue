<template>
    <div class="content-course">
        <h1 class="title-content-course">Computed property</h1>
        <p class="text-content">Dùng để tính toán thuộc tính nếu thuộc tính đó được tính toán phức tạp và tái sử dụng.</p>

<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;div&gt;
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">p</span>&gt;</span>Thông điệp ban đầu: &quot;&#123;&#123; message &#125;&#125;&quot;<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">p</span>&gt;</span>Thông điệp bị đảo ngược bằng tính toán (computed): &quot;&#123;&#123; reversedMessage &#125;&#125;&quot;<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
&lt;/div&gt;

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> {
      <span style="color:rgb(68, 68, 68); font-weight:400;">message</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;ABCD&#x27;</span>
  },
  <span style="color:rgb(68, 68, 68); font-weight:400;">computed</span>: {
    <span style="color:rgb(136, 136, 136); font-weight:400;">// một computed getter</span>
    <span style="color:rgb(68, 68, 68); font-weight:400;">reversedMessage</span>: <span style="color:rgb(68, 68, 68); font-weight:700;">function</span> (<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
      <span style="color:rgb(136, 136, 136); font-weight:400;">// `this` trỏ tới đối tượng vm</span>
      <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> <span class="hljs-variable language_">this</span>.<span style="color:rgb(68, 68, 68); font-weight:400;">message</span>.<span class="hljs-title function_">split</span>(<span style="color:rgb(136, 0, 0); font-weight:400;">&#x27; &#x27;</span>).<span class="hljs-title function_">reverse</span>().<span class="hljs-title function_">join</span>(<span style="color:rgb(136, 0, 0); font-weight:400;">&#x27; &#x27;</span>)
    }
  }
}</code></pre>

        <p class="text-content">Có thể dùng mothod để tính toán</p>
<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;"><span style="color:rgb(136, 136, 136); font-weight:400;">// trong component</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">methods</span>: {
  <span style="color:rgb(68, 68, 68); font-weight:400;">reverseMessage</span>: <span style="color:rgb(68, 68, 68); font-weight:700;">function</span> (<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> <span class="hljs-variable language_">this</span>.<span style="color:rgb(68, 68, 68); font-weight:400;">message</span>.<span class="hljs-title function_">split</span>(<span style="color:rgb(136, 0, 0); font-weight:400;">&#x27; &#x27;</span>).<span class="hljs-title function_">reverse</span>().<span class="hljs-title function_">join</span>(<span style="color:rgb(136, 0, 0); font-weight:400;">&#x27; &#x27;</span>)
  }
}</code></pre>

        <p class="text-content">Sự khác nhau là:<br/>Computed lưu cache, nó sẽ không tính toán lại nếu giá trị biến ban đầu không thay đổi.<br/>Method sẽ tính toán lại mỗi khi được render lại.</p>
    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>