<script>
    import "../app.css";
  </script>

  <nav class="bg-black text-white px-10">
    <ul class="flex flex-row justify-evenly py-4">
        <li class="text-2xl"><a href="/">Home</a></li>
        <li class="text-2xl"><a href="/posts">Posts</a></li>
    </ul>
  </nav>
  
  <main class="container"> <slot /></main>
 