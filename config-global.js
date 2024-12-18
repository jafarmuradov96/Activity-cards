

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_MARKUP_HOST_API_PROD
    : process.env.NEXT_PUBLIC_MARKUP_HOST_API_LOCAL



// export const HOST_API = process.env.NEXT_PUBLIC_MARKUP_HOST_API
export const HOST_API = apiUrl

console.log("HOST_API", HOST_API)