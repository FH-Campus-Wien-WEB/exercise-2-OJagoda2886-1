window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      //for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */

      for (let i = 0; i < movies.length; i++) {
                        
        const article = document.createElement("article");
                        
        // Poster
        const posterimg = document.createElement("img");
        posterimg.src = movies[i]["Poster"];
        article.appendChild(posterimg);

        // Title
        const titleh = document.createElement("h1");
        titleh.textContent = movies[i]["Title"];
        article.appendChild(titleh);

        // IMDBid
        const IMDB = document.createElement("p");
        IMDB.textContent =  "IMDBid: " + movies[i]["imdbID"];
        article.appendChild(IMDB);

        // Runtime
        const runtime = movies[i]["Runtime"];


        const hours = Math.floor(runtime / 60);
        const remainingMinutes = runtime % 60;
        const readyruntime = hours + "h " + remainingMinutes + "min"

        
        const Runtime = document.createElement("p");
        Runtime.textContent = readyruntime;
        article.appendChild(Runtime);

        // Released
        const Releasedp = document.createElement("p");
        Releasedp.textContent = movies[i]["Released"];
        article.appendChild(Releasedp);

        // Genre
        const genres = movies[i]["Genres"];

        genres.forEach(genre => {
            const span = document.createElement("span");
            span.textContent = genre;
            span.classList.add("genre"); 

            article.appendChild(span);
        });
        // Plot
        const plotp = document.createElement("p");
        plotp.textContent = movies[i]["Plot"];
        article.appendChild(plotp);

        // Directors

        // Director title
        const directorTitle = document.createElement("h2");
        directorTitle.textContent = "Directors";
        article.appendChild(directorTitle);

        const directorList = document.createElement("ul");

        // loop directly through array
        movies[i]["Directors"].forEach(directorName => {
        const listItem = document.createElement("li");
        listItem.textContent = directorName;
        directorList.appendChild(listItem);
        });

        article.appendChild(directorList);

        
        // Writers

        // Writers title
        const writerTitle = document.createElement("h2");
        writerTitle.textContent = "Writers";
        article.appendChild(writerTitle);

        const writerList = document.createElement("ul");

        // loop directly through array
        movies[i]["Writers"].forEach(writerName => {
        const listwr = document.createElement("li");
        listwr.textContent = writerName;
        writerList.appendChild(listwr);
        });

        article.appendChild(writerList);

          // Actors

        // Actors title
        const actorTitle = document.createElement("h2");
        actorTitle.textContent = "Actors";
        article.appendChild(actorTitle);

        const actorList = document.createElement("ul");

        // loop directly through array
        movies[i]["Actors"].forEach(actorName => {
        const listact = document.createElement("li");
        listact.textContent = actorName;
        actorList.appendChild(listact);
        });
        article.appendChild(actorList);

        //Edit button
        const editbutton = document.createElement("button");
        editbutton.textContent = "Edit movie"
        editbutton.classList.add("pretty-btn"); 
        editbutton.onclick = function() {
          location.href = 'edit.html?imdbID=' + movies[i]["imdbID"];
        }
        article.appendChild(editbutton)

        document.body.appendChild(article);
        //bodyElement.append(movies[i])
    }
      //}

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
