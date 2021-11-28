console.log("Correcto");
addEventListener('click', traerDatosRap());
addEventListener('click', traerDatosRock());
addEventListener('click', traerDatosNuevos());
addEventListener('click', traerDatosFavoritos());

function traerDatosNuevos() {
  console.log('dentro de la función')
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'albumnes.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      // console.log(datos.genero);
      const items = datos.nuevo;
      console.log(items);
      let res = document.querySelector('#res');
      res.innerHTML = '';

      for (let item of items) {
        console.log(item);
        res.innerHTML += `
              <div class="item-gallery">
      <img src="${item.src}">
      <div class="item-hover">
        <p>${item.titulo}</p>
        <p><span>Banda / Artista</span> ${item.banda}</p>
        <p><span>Año</span> ${item.fecha}</p>
        <p>${item.descripcion}</p>
              <div class="links">
        <a href="#">Agregar álbum</a>
        <a href="#">Ver álbum</a>
        </div>
      </div>
    </div>
    `
      }
    }
  }
}

function traerDatosRap() {
  // console.log('aquí sí entró');

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'albumnes.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      // console.log(datos.genero);
      const items = datos.genero;
      // console.log(items);

      let res2 = document.querySelector('#res2');
      res2.innerHTML = '';

      let item = items.rap.map(function (rap) {
        return rap;

      })

      console.log(item);

      for (let album of item) {
        // console.log(album);
        res2.innerHTML += `
                <div class="item-gallery">
        <img src="${album.src}">
        <div class="item-hover">
          <p>${album.titulo}</p>
          <p><span>Banda / Artista</span> ${album.banda}</p>
          <p><span>Año</span> ${album.fecha}</p>
          <p>${album.descripcion}</p>
                <div class="links">
          <a href="#">Agregar álbum</a>
          <a href="#">Ver álbum</a>
          </div>
        </div>
      </div>
      `
        let canciones = album.canciones;
        //   console.log(canciones)
        for (let cancion of canciones) {
          //   console.log(cancion)
        }
      }
    }
  }
}

function traerDatosRock() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'albumnes.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      // console.log(datos.genero);
      const items = datos.genero;
      // console.log(items);

      let res3 = document.querySelector('#res3');
      res3.innerHTML = '';

      let item = items.rock.map(function (rock) {
        return rock;

      })

      // console.log(item);

      for (let album of item) {
        // console.log(album);
        res3.innerHTML += `
              <div class="item-gallery">
      <img src="${album.src}">
      <div class="item-hover">
        <p>${album.titulo}</p>
        <p><span>Banda / Artista</span> ${album.banda}</p>
        <p><span>Año</span> ${album.fecha}</p>
        <p>${album.descripcion}</p>
              <div class="links">
        <a href="#">Agregar álbum</a>
        <a href="#">Ver álbum</a>
        </div>
      </div>
    </div>
    `
        let canciones = album.canciones;
        //   console.log(canciones)
        for (let cancion of canciones) {
          //   console.log(cancion)
        }
      }
    }
  }
}

function traerDatosFavoritos() {
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'albumnes.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      // console.log(datos.genero);
      const items = datos.favoritos;
      console.log(items);
      let res4 = document.querySelector('#res4');
      res4.innerHTML = '';

      for (let item of items) {
        console.log(item);
        res4.innerHTML += `
              <div class="item-gallery">
      <img src="${item.src}">
      <div class="item-hover">
        <p>${item.titulo}</p>
        <p><span>Banda / Artista</span> ${item.banda}</p>
        <p><span>Año</span> ${item.fecha}</p>
        <p>${item.descripcion}</p>
              <div class="links">
        <a href="#">Agregar álbum</a>
        <a href="#">Ver álbum</a>
        </div>
      </div>
    </div>
    `
      }
    }
  }
}

