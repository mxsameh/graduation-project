import { writable } from "svelte/store"

  const data = [
    {
      id : 1,
      images : ['/groc.jpg','/img/product-2.jpg','/img/product-3.jpg'],
      name : 'product 1',
      price : '109',
      reviewsStars : 4.5,
      reviewsNumber : 20,
      details : 'volup erat ipsum diam elitr rebum et dolor. est nonumy elitr erat diam stet sit clita ea. sanc ipsum et, labore clita lorem magna duo dolor no sea nonumy',
      desc : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt\ndolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. amet dolore tempor consetetur sed lorem dolor sit lorem tempor. gubergren amet amet labore sadipscing clita clita diam clita. sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. ea erat sed et diam takimata sed justo. magna takimata justo et amet magna et',
      info : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.',
      sizes: ['xs', 's', 'm', 'l', 'xl'],
      colors: ['black', 'white', 'red', 'blue', 'green']
    },
    {
      id : 2,
      images : ['/groc.jpg','/img/product-4.jpg','/img/product-3.jpg'],
      name : 'product 2',
      price : '88',
      reviewsStars : 3.5,
      reviewsNumber : 600,
      details : 'volup erat ipsum diam elitr rebum et dolor. est nonumy elitr erat diam stet sit clita ea. sanc ipsum et, labore clita lorem magna duo dolor no sea nonumy',
      desc : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt\ndolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. amet dolore tempor consetetur sed lorem dolor sit lorem tempor. gubergren amet amet labore sadipscing clita clita diam clita. sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. ea erat sed et diam takimata sed justo. magna takimata justo et amet magna et',
      info : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.',
      colors: ['black', 'white', 'red', 'blue', 'green']
    },
    {
      id : 3,
      images : ['/groc.jpg','/img/product-2.jpg','/img/product-1.jpg'],
      name : 'product 3',
      price : '50',
      reviewsStars : 5,
      reviewsNumber : 10,
      details : 'volup erat ipsum diam elitr rebum et dolor. est nonumy elitr erat diam stet sit clita ea. sanc ipsum et, labore clita lorem magna duo dolor no sea nonumy',
      desc : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt\ndolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. amet dolore tempor consetetur sed lorem dolor sit lorem tempor. gubergren amet amet labore sadipscing clita clita diam clita. sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. ea erat sed et diam takimata sed justo. magna takimata justo et amet magna et',
      info : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.',
      sizes: ['xs', 's', 'm', 'l', 'xl'],
    },
    {
      id : 4,
      images : ['/groc.jpg','/img/product-2.jpg','/img/product-3.jpg'],
      name : 'product 4',
      price : '400',
      reviewsStars : 4.5,
      reviewsNumber : 5,
      details : 'volup erat ipsum diam elitr rebum et dolor. est nonumy elitr erat diam stet sit clita ea. sanc ipsum et, labore clita lorem magna duo dolor no sea nonumy',
      desc : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt\ndolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. amet dolore tempor consetetur sed lorem dolor sit lorem tempor. gubergren amet amet labore sadipscing clita clita diam clita. sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. ea erat sed et diam takimata sed justo. magna takimata justo et amet magna et',
      info : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.',
      sizes: ['xs', 's', 'm', 'l', 'xl'],
      colors: ['black', 'white', 'red', 'blue', 'green']
    },
    {
      id : 5,
      images : ['/groc.jpg','/img/product-2.jpg','/img/product-3.jpg'],
      name : 'product 5',
      price : '200',
      reviewsStars : 4,
      reviewsNumber : 200,
      details : 'volup erat ipsum diam elitr rebum et dolor. est nonumy elitr erat diam stet sit clita ea. sanc ipsum et, labore clita lorem magna duo dolor no sea nonumy',
      desc : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt\ndolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. amet dolore tempor consetetur sed lorem dolor sit lorem tempor. gubergren amet amet labore sadipscing clita clita diam clita. sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. ea erat sed et diam takimata sed justo. magna takimata justo et amet magna et',
      info : 'eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. consetetur vero aliquyam invidunt duo dolores et duo sit. vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. dolore diam stet rebum sed tempor kasd eirmod. takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.',
      sizes: ['xs', 's', 'm', 'l', 'xl'],
      colors: ['black', 'white', 'red', 'blue', 'green']
    },
  ] 
  
  const products = writable(data)

  export default products