 // JavaScript para modal
 var modal = document.getElementById("myModal");
 var span = document.getElementsByClassName("close")[0];
 var videos = document.querySelectorAll(".video");

 function openModal(video) {
     var title = video.getAttribute("data-title");
     var description = video.getAttribute("data-description");
     var image = video.getAttribute("data-image");
     var copyText = video.getAttribute("data-copy-text"); // Obtém o texto para copiar

     document.querySelector(".modal-title").textContent = title;
     document.querySelector(".modal-description").textContent = description;
     document.querySelector(".modal-image").src = image;

     // Atualiza o botão de copiar texto para usar o texto do vídeo
     document.getElementById("modalButton").setAttribute("data-copy-text", copyText);

     modal.style.display = "block";
 }

 videos.forEach(function(video) {
     video.addEventListener("click", function() {
         openModal(video);
     });
 });

 span.onclick = function() {
     modal.style.display = "none";
 }

 window.onclick = function(event) {
     if (event.target === modal) {
         modal.style.display = "none";
     }
 }

 document.getElementById("modalButton").addEventListener("click", function() {
     var textToCopy = this.getAttribute("data-copy-text"); // Pega o texto do vídeo
     navigator.clipboard.writeText(textToCopy).then(function() {
         alert("Texto copiado: " + textToCopy); // Feedback ao usuário
     }).catch(function(err) {
         alert("Erro ao copiar: " + err);
     });
 });

 function highlightVideos(searchInput) {
     var videoElements = document.querySelectorAll(".video");
     videoElements.forEach(function(video) {
         var title = video.querySelector(".video-title").textContent.toLowerCase();
         var description = video.querySelector(".video-description").textContent.toLowerCase();

         if (title.includes(searchInput) || description.includes(searchInput)) {
             video.style.display = "block";
             video.classList.add("highlighted");
         } else {
             video.style.display = "none";
             video.classList.remove("highlighted");
         }
     });
 }

 document.getElementById("searchButton").addEventListener("click", function() {
     var searchInput = document.getElementById("searchInput").value.toLowerCase();
     highlightVideos(searchInput);
 });

 document.getElementById("searchInput").addEventListener("input", function() {
     var searchInput = document.getElementById("searchInput").value.toLowerCase();
     highlightVideos(searchInput);
 });