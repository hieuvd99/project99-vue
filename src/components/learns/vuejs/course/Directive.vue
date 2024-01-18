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
<pre>
 <code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">div</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-if</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;type === &#x27;A&#x27;&quot;</span>&gt;</span>A<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">div</span>&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">div</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-else-if</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;type === &#x27;B&#x27;&quot;</span>&gt;</span>B<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">div</span>&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">div</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-else-if</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;type === &#x27;C&#x27;&quot;</span>&gt;</span>C<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">div</span>&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">div</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-else-if</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;type === &#x27;D&#x27;&quot;</span>&gt;</span>D<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">div</span>&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">div</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-else</span>&gt;</span>E<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">div</span>&gt;</span></code></pre>            
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

<pre>
 <code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;ul id=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;example-2&quot;</span>&gt;
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">li</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-for</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;(item, index) in items&quot;</span>&gt;</span>
    &#123;&#123; parentMessage &#125;&#125; - &#123;&#123; index &#125;&#125; - &#123;&#123; item.name &#125;&#125;
  <span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
&lt;/ul&gt;

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:400;">parentMessage</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;Parent&#x27;</span>,
    <span style="color:rgb(68, 68, 68); font-weight:400;">items</span>: [
      { <span style="color:rgb(68, 68, 68); font-weight:400;">name</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;A&#x27;</span> },
      { <span style="color:rgb(68, 68, 68); font-weight:400;">name</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;B&#x27;</span> },
      { <span style="color:rgb(68, 68, 68); font-weight:400;">name</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;C&#x27;</span> }
    ]
  }
}</code></pre>

<pre>
 <code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;">&lt;ul&gt;
  <span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">li</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-for</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;value in object&quot;</span>&gt;</span>
    &#123;&#123; value &#125;&#125;
  <span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">li</span>&gt;</span></span>
&lt;/ul&gt;

<span style="color:rgb(68, 68, 68); font-weight:400;"><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span class="hljs-name">div</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-for</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;(value, key) in object&quot;</span>&gt;</span>
  &#123;&#123; key &#125;&#125;: &#123;&#123; value &#125;&#125;
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span class="hljs-name">div</span>&gt;</span></span>

<span style="color:rgb(68, 68, 68); font-weight:700;">export</span> <span style="color:rgb(68, 68, 68); font-weight:700;">default</span> {
  <span class="hljs-title function_">data</span>(<span style="color:rgb(68, 68, 68); font-weight:400;"></span>) {
    <span style="color:rgb(68, 68, 68); font-weight:400;">object</span>: {
      <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;họ&#x27;</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;Vuong&#x27;</span>,
      <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;tên&#x27;</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;Hieu&#x27;</span>,
      <span style="color:rgb(136, 0, 0); font-weight:400;">&#x27;tuổi&#x27;</span>: <span style="color:rgb(136, 0, 0); font-weight:400;">24</span>
    }
  }
}</code></pre>

<pre>
 <code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;"><span style="color:rgb(136, 136, 136); font-weight:400;">&lt;!-- Nên dùng key khi dung v-for --&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">div</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-for</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;item in items&quot;</span> <span style="color:rgb(68, 68, 68); font-weight:400;">:key</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;item.id&quot;</span>&gt;</span>
  <span style="color:rgb(136, 136, 136); font-weight:400;">&lt;!-- nội dung --&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">div</span>&gt;</span></code></pre>
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

<pre>
 <code id="htmlViewer" style="color:rgb(68, 68, 68); font-weight:400;background-color:rgb(240, 240, 240);background:rgb(240, 240, 240);display:block;padding: .5em;"><span style="color:rgb(136, 136, 136); font-weight:400;">&lt;!-- sự kiện click sẽ không được propagate (lan truyền) điều này tương đương với event.stopPropagation() --&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">a</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-on:click.stop</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;doThis&quot;</span>&gt;</span><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">a</span>&gt;</span>

<span style="color:rgb(136, 136, 136); font-weight:400;">&lt;!-- sự kiện submit sẽ không reload trang điều này tương đương với event.preventDefault() --&gt;</span>
<span style="color:rgb(68, 68, 68); font-weight:400;">&lt;<span style="color:rgb(68, 68, 68); font-weight:700;">form</span> <span style="color:rgb(68, 68, 68); font-weight:400;">v-on:submit.prevent</span>=<span style="color:rgb(136, 0, 0); font-weight:400;">&quot;onSubmit&quot;</span>&gt;</span><span style="color:rgb(68, 68, 68); font-weight:400;">&lt;/<span style="color:rgb(68, 68, 68); font-weight:700;">form</span>&gt;</span></code></pre>
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
            <p>Điều kiện ẩn element. <b>v-show</b> ẩn bằng cách display:none còn <b>v-if</b> ẩn luôn cả div.
            <br/><b>v-if</b> có phí tổn bật/tắt cao, còn <b>v-show</b> có phí tổn render cao. Vì thế, nếu bạn cần bật/tắt thường xuyên, hãy dùng <b>v-show</b>. Ngược lại, nếu điều kiện ít khi thay đổi trong suốt vòng đời của ứng dụng, hãy dùng <b>v-if</b>.</p>
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