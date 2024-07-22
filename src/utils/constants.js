export const BACKGROUND_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg";

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://lh3.googleusercontent.com/a/ACg8ocKr_oyjxnoWoYKKT0ULxBj6GF6J74B3N6Js0kC2cjgCLa-c-ZVy=s360-c-no";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGVhMmIxOWE0YjFiZWQ0NjM2NzcwZDk5NjE3ZGM3NCIsIm5iZiI6MTcyMTQ4MDgxMS4zNzk2NzgsInN1YiI6IjY2OWJiNWZmMWE5NzhhNTVhZTA1ZDU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIzraG8MtWhY5vKG1O9ET0lbJv96huck8wCfY1sWGk4",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
