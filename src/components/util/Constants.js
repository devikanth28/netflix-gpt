export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Photo_Avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

export const ImageCDN = "https://image.tmdb.org/t/p/w200"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const SUPPORTED_LANGUAGES = [
    {
      identifier :"en", name:"English"
    },
    {
      identifier :"hindi", name:"Hindi",
    },
    {
      identifier :"spanish", name:"Spanish"
    }
  ]

  // export const OPENAI_KEY = "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"

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;