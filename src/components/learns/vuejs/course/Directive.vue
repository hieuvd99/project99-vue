<template>
    <div class="content-course">
        <h1 class="title-content-course">Directive</h1>
        <p class="text-content">Một directive trong Vue được bắt đầu với <b>v-</b> để chỉ định rõ rằng đây là một thuộc tính riêng do Vue cung cấp.</p>

        <h5 class="title-child"><code>v-bind</code></h5>
        <div class="text-content">
            <p>Dùng để thay đổi dữ liệu của HTML một cách linh hoạt.</p>
<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">img</span> v-bind:src=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;url&quot;</span>&gt;</code></pre>
        </div>

        <h5 class="title-child"><code>v-if</code></h5>
        <div class="text-content">
            <p>Điều kiện hiển thị, ví dụ dưới nếu giá trị message là true thì sẽ hiện thị, ngược lại là false.</p>
<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;div v-<span style="color:rgb(68, 68, 68); font-weight:700;">if</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;message&quot;</span>&gt;
  Show message
&lt;/div&gt;

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> {
      <span style="color:rgb(68, 68, 68); font-weight:400;">message</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">true</span>
    };
  }
}</code></pre>            
        </div>

        <h5 class="title-child"><code>v-for</code></h5>
        <div class="text-content">
            <p>Liệt kê các item của một mảng.</p>
<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;div&gt;
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">ol</span>&gt;</span>
    <span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">li</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-for</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;todo in todos&quot;</span>&gt;</span>
        &#123;&#123; todo.text &#125;&#125;
    <span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">li</span>&gt;</span>
  <span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">ol</span>&gt;</span></span>
&lt;/div&gt;

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> {
      <span style="color:rgb(68, 68, 68); font-weight:400;">todos</span>: [
        { <span style="color:rgb(68, 68, 68); font-weight:400;">text</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;Item 1&#x27;</span> },
        { <span style="color:rgb(68, 68, 68); font-weight:400;">text</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;Item 2&#x27;</span> },
        { <span style="color:rgb(68, 68, 68); font-weight:400;">text</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;Item 3&#x27;</span> }
        ]
    };
  }
}</code></pre>            
        </div>

        <h5 class="title-child"><code>v-on:click / @click</code></h5>
        <div class="text-content">
            <p>Giống onclick, nhấn thì gọi function.</p>
<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;div&gt;
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">button</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-on:click</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;showMessage&quot;</span>&gt;</span>Click<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
&lt;/div&gt;

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> {
      message = <span style="color:rgb(136, 0, 0); font-weight:400;">&quot;Hello&quot;</span>
    };
  },
  <span style="color:rgb(68, 68, 68); font-weight:400;">methods</span>: {
    <span class="hljs-title function_">showMessage</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-variable language_">this</span>.<span style="color:rgb(68, 68, 68); font-weight:400;">message</span>);
    }
  }
}</code></pre>
        </div>

        <h5 class="title-child"><code>v-model</code></h5>
        <div class="text-content">
            <p>Tạo ra ràng buộc 2 chiều (two-way binding) cho form input.</p>
<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;div&gt;
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">p</span>&gt;</span>&#123;&#123; message &#125;&#125;<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">v-model</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;message&quot;</span>&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> {
      message = <span style="color:rgb(136, 0, 0); font-weight:400;">&quot;Hello&quot;</span>
    };
  }
}</code></pre>           
        </div>

        <h5 class="title-child"><code>v-show</code></h5>
        <div class="text-content">
            <p>Điều kiện ẩn element. <b>v-show</b> ẩn bằng cách display:none còn <b>v-if</b> ẩn luôn cả div.</p>
<pre><code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;div v-<span style="color:rgb(68, 68, 68); font-weight:700;">show</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;message&quot;</span>&gt;
  Show message
&lt;/div&gt;

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:700;">return</span> {
      <span style="color:rgb(68, 68, 68); font-weight:400;">message</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">true</span>
    };
  }
}</code></pre>   
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>