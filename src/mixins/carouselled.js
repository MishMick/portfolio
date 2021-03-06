export default {
  data () {
    const carouselOptions = {
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8000,
      loop: true,
      centerMode: true,
      paginationColor: 'var(--content-secondary)',
      paginationActiveColor: 'var(--content)',
      paginationPadding: 4,
      paginationSize: 8
    }

    return {
      textCarouselOptions: {
        perPage: 1,

        ...carouselOptions
      },
      imageCarouselOptions: {
        perPageCustom: [
          [0, 1], // Phones
          [600, 2], // Tablets
          [1200, 3], // Desktops,
          [1800, 4] // Big desktops
        ],

        ...carouselOptions
      }
    }
  }
}
