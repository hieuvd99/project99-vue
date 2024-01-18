<template>
    <div class="content-course">
        <h1 class="title-content-course">Spring Security</h1>
        <p class="text-content">Code example Spring using Spring Security JSON Web Token (JWT).</p>

        <h4 class="title-child">Spring Security</h4>
        <div class="text-content">
            <h5 class="title-child"><code>pom.xml</code></h5>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">dependency</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">groupId</span>&gt;</span>io.jsonwebtoken<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">groupId</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">artifactId</span>&gt;</span>jjwt-api<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">artifactId</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">version</span>&gt;</span>0.11.5<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">version</span>&gt;</span>
<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">dependency</span>&gt;</span>

<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">dependency</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">groupId</span>&gt;</span>io.jsonwebtoken<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">groupId</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">artifactId</span>&gt;</span>jjwt-impl<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">artifactId</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">version</span>&gt;</span>0.11.5<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">version</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">scope</span>&gt;</span>runtime<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">scope</span>&gt;</span>
<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">dependency</span>&gt;</span>

<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">dependency</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">groupId</span>&gt;</span>io.jsonwebtoken<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">groupId</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">artifactId</span>&gt;</span>jjwt-jackson<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">artifactId</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">version</span>&gt;</span>0.11.5<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">version</span>&gt;</span>
	<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;<span style="color:rgb(240, 141, 73); font-weight:400;">scope</span>&gt;</span>runtime<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">scope</span>&gt;</span>
<span style="color:rgb(255, 255, 255); font-weight:400;">&lt;/<span style="color:rgb(240, 141, 73); font-weight:400;">dependency</span>&gt;</span></code></pre>
            
            <h5 class="title-child"><code>Entity</code></h5>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Entity</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">User</span> {
  <span style="color:rgb(136, 174, 206); font-weight:400;">@Id</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">@GeneratedValue</span>(strategy = <span class="hljs-title class_">GenerationType</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">IDENTITY</span>)
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">Long</span> id;

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> username;
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> email;
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> password;

  <span style="color:rgb(153, 153, 153); font-weight:400;">//roles: ROLE_USER or ROLE_ADMIN</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> role;
  
  <span style="color:rgb(153, 153, 153); font-weight:400;">//Constructor - Getter - Setter</span>
  
}</code></pre>

            <h5 class="title-child"><code>CustomUserDetails</code></h5>
            <p><code>CustomUserDetails</code> là nơi build user thành UserDetail của Spring Security</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">CustomUserDetails</span> <span style="color:rgb(136, 174, 206); font-weight:400;">implements</span> <span class="hljs-title class_">UserDetails</span> {
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> final long serialVersionUID = 1L;
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">Long</span> id;
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> username;
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> email;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@JsonIgnore</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> password;

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">Collection</span>&lt;? <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span class="hljs-title class_">GrantedAuthority</span>&gt; authorities;

  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">CustomUserDetails</span>(<span class="hljs-title class_">Long</span> id, <span class="hljs-title class_">String</span> username, <span class="hljs-title class_">String</span> email, <span class="hljs-title class_">String</span> password,
                         <span class="hljs-title class_">Collection</span>&lt;? <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span class="hljs-title class_">GrantedAuthority</span>&gt; authorities) {
    <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">id</span> = id;
    <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">username</span> = username;
    <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">email</span> = email;
    <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">password</span> = password;
    <span class="hljs-variable language_">this</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">authorities</span> = authorities;
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> <span class="hljs-title class_">CustomUserDetails</span> <span class="hljs-title function_">build</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">User user</span>) {
    <span class="hljs-title class_">Set</span>&lt;<span class="hljs-title class_">GrantedAuthority</span>&gt; authorities = <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">HashSet</span>&lt;&gt;();
    authorities.<span class="hljs-title function_">add</span>(<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">SimpleGrantedAuthority</span>(user.<span class="hljs-title function_">getRole</span>()));

    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">CustomUserDetails</span>(user.<span class="hljs-title function_">getId</span>(),
        user.<span class="hljs-title function_">getUsername</span>(),
        user.<span class="hljs-title function_">getEmail</span>(),
        user.<span class="hljs-title function_">getPassword</span>(),
        authorities);
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">Collection</span>&lt;? <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span class="hljs-title class_">GrantedAuthority</span>&gt; <span class="hljs-title function_">getAuthorities</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> authorities; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">Long</span> <span class="hljs-title function_">getId</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> id; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">String</span> <span class="hljs-title function_">getEmail</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> email; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">String</span> <span class="hljs-title function_">getPassword</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> password; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">String</span> <span class="hljs-title function_">getUsername</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> username; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">boolean</span> <span class="hljs-title function_">isAccountNonExpired</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">boolean</span> <span class="hljs-title function_">isAccountNonLocked</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">boolean</span> <span class="hljs-title function_">isCredentialsNonExpired</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">boolean</span> <span class="hljs-title function_">isEnabled</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) { <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>; }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">boolean</span> <span class="hljs-title function_">equals</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(240, 141, 73); font-weight:400;">Object</span> o</span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (<span class="hljs-variable language_">this</span> == o)
      <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>;
    <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (o == <span style="color:rgb(240, 141, 73); font-weight:400;">null</span> || <span class="hljs-title function_">getClass</span>() != o.<span class="hljs-title function_">getClass</span>())
      <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">false</span>;
    <span class="hljs-title class_">CustomUserDetails</span> user = (<span class="hljs-title class_">CustomUserDetails</span>) o;
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span class="hljs-title class_">Objects</span>.<span class="hljs-title function_">equals</span>(id, user.<span style="color:rgb(255, 255, 255); font-weight:400;">id</span>);
  }
}</code></pre>

            <h5 class="title-child"><code>CustomUserDetailsService</code></h5>
            <p>Truy vấn người dùng dựa vào username và build bằng <code>CustomUserDetails</code></p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Service</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">CustomUserDetailsService</span> <span style="color:rgb(136, 174, 206); font-weight:400;">implements</span> <span class="hljs-title class_">UserDetailsService</span> {

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> UserService userService;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">@Transactional</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> UserDetails <span class="hljs-title function_">loadUserByUsername</span><span style="color:rgb(255, 255, 255); font-weight:400;">(String username)</span> <span style="color:rgb(136, 174, 206); font-weight:400;">throws</span> UsernameNotFoundException {
    <span style="color:rgb(240, 141, 73); font-weight:400;">User</span> <span style="color:rgb(181, 189, 104); font-weight:400;">user</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> userService.findByUsername(username);
    <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (user == <span style="color:rgb(240, 141, 73); font-weight:400;">null</span>) {
      <span style="color:rgb(136, 174, 206); font-weight:400;">throw</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">UsernameNotFoundException</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;User not found&quot;</span>);
    }

    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> CustomUserDetails.build(user);
  }
}</code></pre>

            <h5 class="title-child"><code>JWT</code></h5>
            <p>Tạo và kiểm tra JWT</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">JwtUtils</span> {
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> final <span class="hljs-title class_">Logger</span> logger = <span class="hljs-title class_">LoggerFactory</span>.<span class="hljs-title function_">getLogger</span>(<span class="hljs-title class_">JwtUtils</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">class</span>);

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">String</span> jwtSecret=<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;========================jwtSecret===============================&quot;</span>;

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> int jwtExpirationMs=<span style="color:rgb(240, 141, 73); font-weight:400;">999999999</span>;

  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">String</span> <span class="hljs-title function_">generateJwtToken</span>(<span style="color:rgb(255, 255, 255); font-weight:400;">Authentication authentication</span>) {

    <span class="hljs-title class_">CustomUserDetails</span> userPrincipal = (<span class="hljs-title class_">CustomUserDetails</span>) authentication.<span class="hljs-title function_">getPrincipal</span>();

    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span class="hljs-title class_">Jwts</span>.<span class="hljs-title function_">builder</span>()
        .<span class="hljs-title function_">setSubject</span>((userPrincipal.<span class="hljs-title function_">getUsername</span>()))
        .<span class="hljs-title function_">setIssuedAt</span>(<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">Date</span>())
        .<span class="hljs-title function_">setExpiration</span>(<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">Date</span>((<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">Date</span>()).<span class="hljs-title function_">getTime</span>() + jwtExpirationMs))
        .<span class="hljs-title function_">signWith</span>(<span class="hljs-title function_">key</span>(), <span class="hljs-title class_">SignatureAlgorithm</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">HS256</span>)
        .<span class="hljs-title function_">compact</span>();
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span class="hljs-title class_">Key</span> <span class="hljs-title function_">key</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"></span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span class="hljs-title class_">Keys</span>.<span class="hljs-title function_">hmacShaKeyFor</span>(<span class="hljs-title class_">Decoders</span>.<span style="color:rgb(255, 255, 255); font-weight:400;">BASE64</span>.<span class="hljs-title function_">decode</span>(jwtSecret));
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span class="hljs-title class_">String</span> <span class="hljs-title function_">getUserNameFromJwtToken</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(240, 141, 73); font-weight:400;">String</span> token</span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span class="hljs-title class_">Jwts</span>.<span class="hljs-title function_">parserBuilder</span>().<span class="hljs-title function_">setSigningKey</span>(<span class="hljs-title function_">key</span>()).<span class="hljs-title function_">build</span>()
        .<span class="hljs-title function_">parseClaimsJws</span>(token).<span class="hljs-title function_">getBody</span>().<span class="hljs-title function_">getSubject</span>();
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(240, 141, 73); font-weight:400;">boolean</span> <span class="hljs-title function_">validateJwtToken</span>(<span style="color:rgb(255, 255, 255); font-weight:400;"><span style="color:rgb(240, 141, 73); font-weight:400;">String</span> authToken</span>) {
    <span style="color:rgb(136, 174, 206); font-weight:400;">try</span> {
      <span class="hljs-title class_">Jwts</span>.<span class="hljs-title function_">parserBuilder</span>().<span class="hljs-title function_">setSigningKey</span>(<span class="hljs-title function_">key</span>()).<span class="hljs-title function_">build</span>().<span class="hljs-title function_">parse</span>(authToken);
      <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">true</span>;
    } <span style="color:rgb(136, 174, 206); font-weight:400;">catch</span> (<span class="hljs-title class_">MalformedJwtException</span> e) {
      logger.<span class="hljs-title function_">error</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Invalid JWT token: {}&quot;</span>, e.<span class="hljs-title function_">getMessage</span>());
    } <span style="color:rgb(136, 174, 206); font-weight:400;">catch</span> (<span class="hljs-title class_">ExpiredJwtException</span> e) {
      logger.<span class="hljs-title function_">error</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;JWT token is expired: {}&quot;</span>, e.<span class="hljs-title function_">getMessage</span>());
    } <span style="color:rgb(136, 174, 206); font-weight:400;">catch</span> (<span class="hljs-title class_">UnsupportedJwtException</span> e) {
      logger.<span class="hljs-title function_">error</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;JWT token is unsupported: {}&quot;</span>, e.<span class="hljs-title function_">getMessage</span>());
    } <span style="color:rgb(136, 174, 206); font-weight:400;">catch</span> (<span class="hljs-title class_">IllegalArgumentException</span> e) {
      logger.<span class="hljs-title function_">error</span>(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;JWT claims string is empty: {}&quot;</span>, e.<span class="hljs-title function_">getMessage</span>());
    }

    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">false</span>;
  }
}</code></pre>

<pre>
    <code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">AuthTokenFilter</span> <span style="color:rgb(136, 174, 206); font-weight:400;">extends</span> <span class="hljs-title class_">OncePerRequestFilter</span> {
  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> JwtUtils jwtUtils;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> CustomUserDetailsService customUserDetailsService;

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> <span style="color:rgb(136, 174, 206); font-weight:400;">final</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Logger</span> <span style="color:rgb(181, 189, 104); font-weight:400;">logger</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> LoggerFactory.getLogger(AuthTokenFilter.class);

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">protected</span> <span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span class="hljs-title function_">doFilterInternal</span><span style="color:rgb(255, 255, 255); font-weight:400;">(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)</span>
      <span style="color:rgb(136, 174, 206); font-weight:400;">throws</span> ServletException, IOException {
    <span style="color:rgb(136, 174, 206); font-weight:400;">try</span> {
      <span style="color:rgb(240, 141, 73); font-weight:400;">String</span> <span style="color:rgb(181, 189, 104); font-weight:400;">jwt</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> parseJwt(request);
      <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (jwt != <span style="color:rgb(240, 141, 73); font-weight:400;">null</span> &amp;&amp; jwtUtils.validateJwtToken(jwt)) {
        <span style="color:rgb(240, 141, 73); font-weight:400;">String</span> <span style="color:rgb(181, 189, 104); font-weight:400;">username</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> jwtUtils.getUserNameFromJwtToken(jwt);

        <span style="color:rgb(240, 141, 73); font-weight:400;">CustomUserDetails</span> <span style="color:rgb(181, 189, 104); font-weight:400;">userDetails</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> (CustomUserDetails) customUserDetailsService.loadUserByUsername(username);
        <span style="color:rgb(240, 141, 73); font-weight:400;">UsernamePasswordAuthenticationToken</span> <span style="color:rgb(181, 189, 104); font-weight:400;">authentication</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">UsernamePasswordAuthenticationToken</span>(userDetails, <span style="color:rgb(240, 141, 73); font-weight:400;">null</span>,
            userDetails.getAuthorities());
        authentication.setDetails(<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">WebAuthenticationDetailsSource</span>().buildDetails(request));

        SecurityContextHolder.getContext().setAuthentication(authentication);
      }
    } <span style="color:rgb(136, 174, 206); font-weight:400;">catch</span> (Exception e) {
      logger.error(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Cannot set user authentication: {}&quot;</span>, e);
    }

    filterChain.doFilter(request, response);
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> String <span class="hljs-title function_">parseJwt</span><span style="color:rgb(255, 255, 255); font-weight:400;">(HttpServletRequest request)</span> {
    <span style="color:rgb(240, 141, 73); font-weight:400;">String</span> <span style="color:rgb(181, 189, 104); font-weight:400;">headerAuth</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> request.getHeader(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Authorization&quot;</span>);

    <span style="color:rgb(136, 174, 206); font-weight:400;">if</span> (StringUtils.hasText(headerAuth) &amp;&amp; headerAuth.startsWith(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Hieuvd99 &quot;</span>)) {
      <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> headerAuth.substring(<span style="color:rgb(240, 141, 73); font-weight:400;">7</span>, headerAuth.length());
    }

    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(240, 141, 73); font-weight:400;">null</span>;
  }
}</code></pre>

<pre>
 <code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Component</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">AuthEntryPointJwt</span> <span style="color:rgb(136, 174, 206); font-weight:400;">implements</span> <span class="hljs-title class_">AuthenticationEntryPoint</span> {

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> <span style="color:rgb(136, 174, 206); font-weight:400;">final</span> <span style="color:rgb(240, 141, 73); font-weight:400;">Logger</span> <span style="color:rgb(181, 189, 104); font-weight:400;">logger</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> LoggerFactory.getLogger(AuthEntryPointJwt.class);

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Override</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">void</span> <span class="hljs-title function_">commence</span><span style="color:rgb(255, 255, 255); font-weight:400;">(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)</span>
      <span style="color:rgb(136, 174, 206); font-weight:400;">throws</span> IOException, ServletException {
    logger.error(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Unauthorized error: {}&quot;</span>, authException.getMessage());

    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

    <span style="color:rgb(136, 174, 206); font-weight:400;">final</span> Map&lt;String, Object&gt; body = <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">HashMap</span>&lt;&gt;();
    body.put(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;status&quot;</span>, HttpServletResponse.SC_UNAUTHORIZED);
    body.put(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;error&quot;</span>, <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;Unauthorized&quot;</span>);
    body.put(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;message&quot;</span>, authException.getMessage());
    body.put(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;path&quot;</span>, request.getServletPath());

    <span style="color:rgb(136, 174, 206); font-weight:400;">final</span> <span style="color:rgb(240, 141, 73); font-weight:400;">ObjectMapper</span> <span style="color:rgb(181, 189, 104); font-weight:400;">mapper</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">ObjectMapper</span>();
    mapper.writeValue(response.getOutputStream(), body);

<span style="color:rgb(153, 153, 153); font-weight:400;">//    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, &quot;Error: Unauthorized&quot;);</span>
  }

}</code></pre>

            <h5 class="title-child"><code>Controller</code></h5>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@CrossOrigin(origins = &quot;*&quot;, maxAge = 3600)</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">@RestController</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">@RequestMapping(&quot;/api/auth&quot;)</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">AuthController</span> {

  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> <span style="color:rgb(136, 174, 206); font-weight:400;">static</span> <span style="color:rgb(136, 174, 206); font-weight:400;">final</span> <span style="color:rgb(240, 141, 73); font-weight:400;">String</span> <span style="color:rgb(181, 189, 104); font-weight:400;">ROLE_USER</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> <span style="color:rgb(181, 189, 104); font-weight:400;">&quot;ROLE_USER&quot;</span>;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  AuthenticationManager authenticationManager;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  PasswordEncoder encoder;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  JwtUtils jwtUtils;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@PostMapping(&quot;/signin&quot;)</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> ResponseEntity&lt;?&gt; authenticateUser(<span style="color:rgb(136, 174, 206); font-weight:400;">@Valid</span> <span style="color:rgb(136, 174, 206); font-weight:400;">@RequestBody</span> LoginRequest loginRequest) {

    <span style="color:rgb(240, 141, 73); font-weight:400;">Authentication</span> <span style="color:rgb(181, 189, 104); font-weight:400;">authentication</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> authenticationManager
        .authenticate(<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">UsernamePasswordAuthenticationToken</span>(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    <span style="color:rgb(240, 141, 73); font-weight:400;">String</span> <span style="color:rgb(181, 189, 104); font-weight:400;">jwt</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> jwtUtils.generateJwtToken(authentication);

    <span style="color:rgb(240, 141, 73); font-weight:400;">CustomUserDetails</span> <span style="color:rgb(181, 189, 104); font-weight:400;">userDetails</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> (CustomUserDetails) authentication.getPrincipal();
    List&lt;String&gt; roles = userDetails.getAuthorities().stream().map(item -&gt; item.getAuthority())
        .collect(Collectors.toList());

    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> ResponseEntity
        .ok(<span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">JwtResponse</span>(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));
  }
}</code></pre>

            <h5 class="title-child"><code>WebSecurityConfig</code></h5>
            <p>Cấu hình và phân quyền truy cập</p>
<pre><code id="htmlViewer" style="color:rgb(255, 255, 255); font-weight:400;background-color:rgb(28, 27, 27);background:rgb(28, 27, 27);display:block;padding: .5em;"><span style="color:rgb(136, 174, 206); font-weight:400;">@Configuration</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">@EnableWebSecurity</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">@EnableMethodSecurity</span>
<span style="color:rgb(136, 174, 206); font-weight:400;">public</span> <span style="color:rgb(136, 174, 206); font-weight:400;">class</span> <span class="hljs-title class_">WebSecurityConfig</span> {

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  CustomUserDetailsService customUserDetailsService;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Autowired</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">private</span> AuthEntryPointJwt unauthorizedHandler;

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Bean</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> AuthTokenFilter <span class="hljs-title function_">authenticationJwtTokenFilter</span><span style="color:rgb(255, 255, 255); font-weight:400;">()</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">AuthTokenFilter</span>();
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Bean</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> DaoAuthenticationProvider <span class="hljs-title function_">authenticationProvider</span><span style="color:rgb(255, 255, 255); font-weight:400;">()</span> {
    <span style="color:rgb(240, 141, 73); font-weight:400;">DaoAuthenticationProvider</span> <span style="color:rgb(181, 189, 104); font-weight:400;">authProvider</span> <span style="color:rgb(255, 255, 255); font-weight:400;">=</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">DaoAuthenticationProvider</span>();

    authProvider.setUserDetailsService(customUserDetailsService);
    authProvider.setPasswordEncoder(passwordEncoder());

    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> authProvider;
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Bean</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> AuthenticationManager <span class="hljs-title function_">authenticationManager</span><span style="color:rgb(255, 255, 255); font-weight:400;">(AuthenticationConfiguration authConfig)</span> <span style="color:rgb(136, 174, 206); font-weight:400;">throws</span> Exception {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> authConfig.getAuthenticationManager();
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Bean</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> PasswordEncoder <span class="hljs-title function_">passwordEncoder</span><span style="color:rgb(255, 255, 255); font-weight:400;">()</span> {
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> <span style="color:rgb(136, 174, 206); font-weight:400;">new</span> <span class="hljs-title class_">BCryptPasswordEncoder</span>();
  }

  <span style="color:rgb(136, 174, 206); font-weight:400;">@Bean</span>
  <span style="color:rgb(136, 174, 206); font-weight:400;">public</span> SecurityFilterChain <span class="hljs-title function_">filterChain</span><span style="color:rgb(255, 255, 255); font-weight:400;">(HttpSecurity http)</span> <span style="color:rgb(136, 174, 206); font-weight:400;">throws</span> Exception {
    http.csrf(csrf -&gt; csrf.disable())
        .exceptionHandling(exception -&gt; exception.authenticationEntryPoint(unauthorizedHandler))
        .sessionManagement(session -&gt; session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth -&gt;
            auth.requestMatchers(<span style="color:rgb(181, 189, 104); font-weight:400;">&quot;/admin/**&quot;</span>).authenticated()
                .anyRequest().permitAll()
        );

    http.authenticationProvider(authenticationProvider());

    http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    <span style="color:rgb(136, 174, 206); font-weight:400;">return</span> http.build();
  }
}</code></pre>

        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/learns/common/course.css";
</style>