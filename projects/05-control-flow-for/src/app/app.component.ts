import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      <span><!-- repeat article -->
        @for (item of carList; track item) {
          <!-- This article element represents and entire listing -->
          <article class="listing">
            <div class="image-parent">
              <img class="product-image" src="{{ item.Image }}" />
            </div>
            <section class="details">
              <p class="title"><!-- car make and model-->
                {{ item.make }} {{ item.model }}
              </p>
              <hr />
              <p class="detail">
                <span>Year</span>
                <span><!-- year -->
                    {{ item.year }}
                </span>
              </p>
              <div class="detail">
                <span>Transmission</span>
                <span><!-- transmission -->
                    {{ item.transmission }}
                </span>
              </div>
              <p class="detail">
                <span>Mileage</span>
                <span><!-- miles -->
                    {{ item.miles }}
                </span>
              </p>
              <p class="detail">
                <span>Price</span>
                <span><!-- price -->
                    {{ item.price }}
                </span>
              </p>
            </section>
          </article>
        } @empty {
            <p> There is no car </p>
        }
      </span>
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      Image: "assets/blue-car.jpeg",
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      Image: "assets/red-car.jpeg",
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      Image: "assets/blue-car.jpeg",
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      Image: "assets/red-car.jpeg",
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
}
