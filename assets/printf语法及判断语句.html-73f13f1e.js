import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-55302f36.js";const e={},p=t(`<h2 id="printf" tabindex="-1"><a class="header-anchor" href="#printf" aria-hidden="true">#</a> printf</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">/* run this program using the console pauser or add your own getch, system(&quot;pause&quot;) or input loop */</span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span> <span class="token comment">//命名空间</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span><span class="token operator">*</span> argv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;HELLO WORLD!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同类型输出" tabindex="-1"><a class="header-anchor" href="#不同类型输出" aria-hidden="true">#</a> 不同类型输出</h3><ul><li>float, double 等输出保留若干位小数时用：<code>%.4f %3lf</code></li></ul><p><img src="https://eason-blog.oss-cn-chengdu.aliyuncs.com/blogPicture/202311041429569.png" alt="image.png" loading="lazy"><img src="https://eason-blog.oss-cn-chengdu.aliyuncs.com/blogPicture/202311041430753.png" alt="image.png" loading="lazy"></p><h3 id="最小数字宽度" tabindex="-1"><a class="header-anchor" href="#最小数字宽度" aria-hidden="true">#</a> 最小数字宽度</h3><ul><li>%8.3f, 表示这个浮点数的最小宽度为 8，保留 3 位小数，当<strong>宽度不足时在前面补空格</strong></li><li>%-8.3f，表示最小宽度为 8，保留 3 位小数，当<strong>宽度不足时在后面补上空格</strong></li><li>%08.3f, 表示最小宽度为 8，保留 3 位小数，当<strong>宽度不足时在前面补上0</strong></li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstdio&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token number">3.12345678</span><span class="token punctuation">;</span>
	<span class="token keyword">double</span> c <span class="token operator">=</span> <span class="token number">3.12345678</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%5d\\n&quot;</span><span class="token punctuation">,</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-8.4f\\n&quot;</span><span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%07.3lf\\n&quot;</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://eason-blog.oss-cn-chengdu.aliyuncs.com/blogPicture/202311041430315.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="判断语句" tabindex="-1"><a class="header-anchor" href="#判断语句" aria-hidden="true">#</a> 判断语句</h2><h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h3><figure><img src="https://eason-blog.oss-cn-chengdu.aliyuncs.com/blogPicture/202311041430024.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="if-else" tabindex="-1"><a class="header-anchor" href="#if-else" aria-hidden="true">#</a> <code>if(){}else(){}</code></h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstdio&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;YES&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;NO&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if-else-连写" tabindex="-1"><a class="header-anchor" href="#if-else-连写" aria-hidden="true">#</a> if else 连写</h3><ul><li>输入一个 0 到 100 之间的分数，如果大于等于 85，输出 A；如果大于等于 70 并且小于 85，输出 B；如果大于等于 60 并且小于 70，输出 C；如果小于 60，输出 D；</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;cstdio&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> s<span class="token punctuation">;</span>
	cin <span class="token operator">&gt;&gt;</span> s<span class="token punctuation">;</span>
	
	<span class="token keyword">if</span><span class="token punctuation">(</span>s <span class="token operator">&gt;=</span> <span class="token number">85</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">&gt;=</span> <span class="token number">70</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>s <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","printf语法及判断语句.html.vue"]]);export{d as default};
