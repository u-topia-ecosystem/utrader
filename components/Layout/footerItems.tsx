export const FOOTER_ITEMS = {
  links: {
    legal: [
      { title: "Terms of use", url: "/terms_of_use" },
      { title: "Privacy policy", url: "/privacy_policy" },
      { title: "Cookies policy", url: "/cookise_policy" },
    ],
    articles: [
      { title: "Articles", url: "https://yellow.com/news" },
      { title: "Blogs", url: "https://medium.com/yellow-blog" },
      { title: "Videos", url: "https://yellow.com/articles" },
    ],
    docs: [
      { title: "Docs", url: "https://docs.yellow.org/" },
      { title: "Github", url: "https://github.com/layer-3" },
      // TODO: Uncomment when we will have listing page
      // { title: "Listing", url: "/listing" },
    ],
  },
  socials: [
    { title: "twitter", url: "https://twitter.com/Yellow" },
    { title: "telegram", url: "https://t.me/yellow_org" },
    { title: "discord", url: "https://discord.gg/yellownetwork" },
    { title: "youtube", url: "https://www.youtube.com/c/YellowIsBlockchain" },
    { title: "medium", url: "https://medium.com/yellow-blog" },
    { title: "linkedin", url: "https://www.linkedin.com/company/yellow-com/" },
    { title: "reddit", url: "https://www.reddit.com/r/YellowDeFi/" },
    { title: "github", url: "https://github.com/layer-3" },
  ],
}

export const getSocialIcon = (social: string, fillColor: string) => {
  switch (social) {
    case "twitter":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.751 3H20.818L14.118 10.625L22 21H15.828L10.995 14.707L5.464 21H2.394L9.561 12.845L2 3H8.328L12.698 8.752L17.751 3ZM16.675 19.172H18.375L7.404 4.732H5.58L16.675 19.172Z"
            fill={fillColor}
          />
        </svg>
      )

    case "telegram":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_32184_54691)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.7767 4.42997C20.0238 4.32596 20.2943 4.29008 20.5599 4.32608C20.8256 4.36208 21.0768 4.46863 21.2873 4.63465C21.4979 4.80067 21.6601 5.02008 21.757 5.27005C21.854 5.52002 21.8822 5.79141 21.8387 6.05597L19.5707 19.813C19.3507 21.14 17.8947 21.901 16.6777 21.24C15.6597 20.687 14.1477 19.835 12.7877 18.946C12.1077 18.501 10.0247 17.076 10.2807 16.062C10.5007 15.195 14.0007 11.937 16.0007 9.99997C16.7857 9.23897 16.4277 8.79997 15.5007 9.49997C13.1987 11.238 9.50265 13.881 8.28065 14.625C7.20265 15.281 6.64065 15.393 5.96865 15.281C4.74265 15.077 3.60565 14.761 2.67765 14.376C1.42365 13.856 1.48465 12.132 2.67665 11.63L19.7767 4.42997Z"
              fill={fillColor}
            />
          </g>
        </svg>
      )

    case "discord":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.2701 5.33005C17.9401 4.71005 16.5001 4.26005 15.0001 4.00005C14.987 3.99963 14.9739 4.00209 14.9618 4.00728C14.9497 4.01246 14.9389 4.02023 14.9301 4.03005C14.7501 4.36005 14.5401 4.79005 14.4001 5.12005C12.8091 4.88005 11.1911 4.88005 9.60012 5.12005C9.46012 4.78005 9.25012 4.36005 9.06012 4.03005C9.05012 4.01005 9.02012 4.00005 8.99012 4.00005C7.49012 4.26005 6.06012 4.71005 4.72012 5.33005C4.71012 5.33005 4.70012 5.34005 4.69012 5.35005C1.97012 9.42005 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84005 19.3101 5.35005C19.3001 5.34005 19.2901 5.33005 19.2701 5.33005ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z"
            fill={fillColor}
          />
        </svg>
      )
    case "youtube":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
            fill={fillColor}
          />
        </svg>
      )

    case "medium":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.5633 6.55781L21 5.17734V4.875H16.0242L12.4781 13.7438L8.44453 4.875H3.22734V5.17734L4.90547 7.20703C5.06953 7.35703 5.15391 7.57734 5.13281 7.79766V15.7734C5.18438 16.0617 5.09297 16.3547 4.89141 16.5633L3 18.8672V19.1648H8.35781V18.8625L6.46875 16.5656C6.36754 16.4629 6.2914 16.3381 6.24628 16.2011C6.20116 16.0641 6.18826 15.9186 6.20859 15.7758V8.87578L10.9125 19.1695H11.4586L15.5039 8.87578V17.0766C15.5039 17.2922 15.5039 17.3367 15.3633 17.4797L13.9078 18.893V19.1953H20.9672V18.893L19.5633 17.5125C19.4414 17.4188 19.3781 17.2617 19.4039 17.1094V6.96094C19.3918 6.88562 19.4002 6.80843 19.4282 6.73748C19.4563 6.66654 19.5029 6.60447 19.5633 6.55781Z"
            fill={fillColor}
          />
        </svg>
      )

    case "linkedin":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
            fill={fillColor}
          />
        </svg>
      )

    case "reddit":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.75 13.04C10.75 12.47 10.28 12 9.71 12C9.14 12 8.67 12.47 8.67 13.04C8.67 13.3158 8.77957 13.5804 8.97461 13.7754C9.16965 13.9704 9.43418 14.08 9.71 14.08C9.98583 14.08 10.2504 13.9704 10.4454 13.7754C10.6404 13.5804 10.75 13.3158 10.75 13.04ZM14.09 15.41C13.64 15.86 12.68 16.02 12 16.02C11.32 16.02 10.36 15.86 9.91 15.41C9.88567 15.384 9.85626 15.3632 9.82357 15.349C9.79089 15.3348 9.75563 15.3275 9.72 15.3275C9.68437 15.3275 9.64911 15.3348 9.61643 15.349C9.58374 15.3632 9.55432 15.384 9.53 15.41C9.50396 15.4343 9.4832 15.4637 9.469 15.4964C9.45481 15.5291 9.44748 15.5644 9.44748 15.6C9.44748 15.6356 9.45481 15.6709 9.469 15.7036C9.4832 15.7363 9.50396 15.7657 9.53 15.79C10.24 16.5 11.6 16.56 12 16.56C12.4 16.56 13.76 16.5 14.47 15.79C14.496 15.7657 14.5168 15.7363 14.531 15.7036C14.5452 15.6709 14.5525 15.6356 14.5525 15.6C14.5525 15.5644 14.5452 15.5291 14.531 15.4964C14.5168 15.4637 14.496 15.4343 14.47 15.41C14.37 15.31 14.2 15.31 14.09 15.41ZM14.29 12C13.72 12 13.25 12.47 13.25 13.04C13.25 13.61 13.72 14.08 14.29 14.08C14.86 14.08 15.33 13.61 15.33 13.04C15.33 12.47 14.87 12 14.29 12Z"
            fill={fillColor}
          />
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.8 13.33C17.82 13.47 17.83 13.62 17.83 13.77C17.83 16.01 15.22 17.83 12 17.83C8.78 17.83 6.17 16.01 6.17 13.77C6.17 13.62 6.18 13.47 6.2 13.33C5.69 13.1 5.34 12.59 5.34 12C5.33852 11.7132 5.4218 11.4324 5.57939 11.1929C5.73698 10.9533 5.96185 10.7656 6.22576 10.6534C6.48966 10.5413 6.78083 10.5096 7.06269 10.5623C7.34456 10.6151 7.60454 10.75 7.81 10.95C8.82 10.22 10.22 9.76 11.77 9.71L12.51 6.22C12.52 6.15 12.56 6.09 12.62 6.06C12.68 6.02 12.75 6.01 12.82 6.02L15.24 6.54C15.3221 6.37358 15.4472 6.23215 15.6023 6.13038C15.7575 6.02861 15.9371 5.9702 16.1224 5.96122C16.3077 5.95224 16.4921 5.99301 16.6564 6.07931C16.8207 6.1656 16.9589 6.29428 17.0566 6.45199C17.1544 6.60969 17.2082 6.79069 17.2125 6.9762C17.2167 7.16171 17.1712 7.34498 17.0808 7.507C16.9903 7.66901 16.8582 7.80388 16.698 7.8976C16.5379 7.99132 16.3556 8.04049 16.17 8.04C15.61 8.04 15.16 7.6 15.13 7.05L12.96 6.59L12.3 9.71C13.83 9.76 15.2 10.23 16.2 10.95C16.3533 10.8036 16.5367 10.6925 16.7375 10.6244C16.9382 10.5563 17.1514 10.5329 17.3621 10.5558C17.5728 10.5787 17.776 10.6474 17.9574 10.757C18.1388 10.8667 18.2941 11.0146 18.4123 11.1905C18.5306 11.3664 18.609 11.5661 18.642 11.7754C18.6751 11.9848 18.662 12.1989 18.6037 12.4027C18.5454 12.6064 18.4432 12.795 18.3044 12.9552C18.1656 13.1154 17.9934 13.2433 17.8 13.33Z"
            fill={fillColor}
          />
        </svg>
      )

    case "github":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.197 8.839 21.521C9.339 21.613 9.521 21.304 9.521 21.038C9.521 20.801 9.513 20.17 9.508 19.335C6.726 19.94 6.139 17.992 6.139 17.992C5.685 16.834 5.029 16.526 5.029 16.526C4.121 15.906 5.098 15.918 5.098 15.918C6.101 15.988 6.629 16.95 6.629 16.95C7.521 18.48 8.97 18.038 9.539 17.782C9.631 17.135 9.889 16.694 10.175 16.444C7.955 16.191 5.62 15.331 5.62 11.493C5.62 10.4 6.01 9.505 6.649 8.805C6.546 8.552 6.203 7.533 6.747 6.155C6.747 6.155 7.587 5.885 9.497 7.181C10.3128 6.95851 11.1544 6.84519 12 6.844C12.85 6.848 13.705 6.959 14.504 7.181C16.413 5.885 17.251 6.154 17.251 6.154C17.797 7.533 17.453 8.552 17.351 8.805C17.991 9.505 18.379 10.4 18.379 11.493C18.379 15.341 16.04 16.188 13.813 16.436C14.172 16.745 14.491 17.356 14.491 18.291C14.491 19.629 14.479 20.71 14.479 21.038C14.479 21.306 14.659 21.618 15.167 21.52C17.1583 20.8521 18.8893 19.5753 20.1155 17.87C21.3416 16.1648 22.0009 14.1173 22 12.017C22 6.484 17.522 2 12 2Z"
            fill={fillColor}
          />
        </svg>
      )

    default:
      return null
  }
}